const app = express();
const bodyParser = require("body-parser")
const PORT = process.env.PORT || 3030;
const routes = require("./routes/index");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}