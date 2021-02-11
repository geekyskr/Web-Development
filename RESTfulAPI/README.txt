Developed a RESTful API for couple of resources using primary HTTP verbs.Authentication is added for protected end points.
Tech used - MongoDB, NodeJS, Express.js, HTML, CSS, Javascript

How to use this project?
git clone it and there after run "npm install".
then run command "node server.js".
goto http://localhost:8080/
Make sure to also add your Mongo Atlas Admin Username to a nodemon.json file (which you have to create).

{
    "env": {
        "MONGO_ATLAS_PW": "YOUR_MONGO_USER_PW"
    }
}
