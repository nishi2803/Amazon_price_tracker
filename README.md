# amazon-price-tracker
This repo contains code of a simple amazon-price-tracker extension and server. It keeps track of amazon product user want to purchase at a particular price, when price drops to a specified price it notifies the user. It helps users to save time as they don't need to manually open the amazon.in and check drop in price every day.

### Installation :
* Download the package and run the following command in server directory to install all the dependencies:
<pre>npm install</pre>
* Create a .env file in server directory to store environment variables. 
* Setup variables PORT = 3000,dbURI : url to connect to your mongodb atlas database, secretKey : some string to encode with jwt.  
* Now run the following command in server directory to start node-server:
<pre>nodemon app</pre>
* Load the extension directory using chrome developer tools.
