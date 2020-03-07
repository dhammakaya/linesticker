const express = require("express");
const app = express();
const routes = require('./app/routes');

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public")); //__dir and not _dir

var port = 8080; // you can use any port
app.use('/api', routes);
app.listen(port);
console.log("server on : " + port);
