# amazon-price-tracker
This repo contains code of a simple amazon-price-tracker extension and server. Users can add products to track relative to their price . When price of a tracked item goes below the threshold value set by user a notification is sent to user.

### Installation :
* Download the package and run the following command in server directory to install all the dependencies:
<pre>npm install</pre>
* Create a .env file in server directory to store environment variables. 
* Setup variables PORT = 3000,dbURI : url to connect to your mongodb atlas database, secretKey : some string to encode with jwt.  
* Now run the following command in server directory to start node-server:
<pre>nodemon app</pre>
* Load the extension directory using chrome developer tools.
