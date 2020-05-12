var express = require("express");
const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3030;
const routes = require("./src/App");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});