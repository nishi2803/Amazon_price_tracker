let port = 3000;

chrome.runtime.onInstalled.addListener(details=>{
    console.log(details.reason);
    chrome.storage.sync.set({users : []});
})

let log_sign = async (request, response, url) => {
    try {
        const res = await fetch(`http://localhost:${port}/${url}`, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-type": "application/json" }
        });
        const data = await res.json();
        if (data.errors) {
            chrome.storage.sync.set({ "user_login_errors": data.errors });
            response({ user_logged_in: false });
        }
        else {
            chrome.storage.sync.set({ users: [data] });
            response({ user_logged_in: true });
        }
    }
    catch (err) {
        chrome.storage.sync.set({ "user_login_errors": err });
        response({ user_logged_in: false });
    }
}

let add_product = async (request,sender, response)=>{
    let ob = {productName : request.name, productUrl : request.url, currentPrice : request.currPrice, thresholdPrice : request.threshPrice, userId : request.userid}
    try {
        let res = await fetch(`http://localhost:${port}/addproduct`, {
            method: "POST",
            body: JSON.stringify(ob),
            headers: { "Content-type": "application/json" },
        })
        let data = await res.json();
        console.log(data);
        response({success : true});
    }
    catch (err) {
        console.log(err);
        response({success : false});
    }
}

let remove_item = async (request, sender, response) => {
    let obj = { id: request.item_id };
    try {
        let res = await fetch(`http://localhost:${port}/remove_item`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: { "Content-type": "application/json" }
        });

        let data = await res.json();
        console.log(data);
        response({ removed: true });
    }
    catch (err) {
        console.log(err);
        response({ removed: false });
    }

}


chrome.runtime.onMessage.addListener((request, sender, response) => {
    if (request.type === "log_sign") {
        if (request.username) {
            log_sign(request, response, "signup")
        }
        else {
            log_sign(request, response, "login");
        }
        return true;
    }
    else if (request.type === "add_product") {
        add_product(request, sender, response);
        return true;
    }
    else if (request.type === "remove_item") {
        remove_item(request, sender, response);
        return true;
    }

})