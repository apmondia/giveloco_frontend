# App Prototyping with JSON-Server

First, you need to install the json-server module.

```sudo npm install -g json-server```

Then open a new terminal window and navigate to this folder on your computer and run the server like so:

```
json-server api.json

# then test it
curl http://localhost:3000/api
curl http://localhost:3000/api/users
curl http://localhost:3000/api/users/1

# use other verbs (GET, PUT, POST, DELETE)
curl -X GET http://localhost:3000/api/users/2
```

As long as this server is running on localhost:3000, the main AngularJS app will be able to connect with it. The AngularJS app uses the "Restangular" module and the ```BaseUrl``` is set in ```app/env/dev/dev-init.js```.