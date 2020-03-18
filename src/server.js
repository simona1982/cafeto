import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config";

const {
  getUsers,
  getLogin,
  authenticateToken
} = require("./controllers/index.controller");

// intialzing packages
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(webpackDevMiddleware(webpack(webpackConfig)));

// routes
/*app.get("/", (req, res) => {
  res.send("Hello panda");
});*/

/*app.get("/dashboard", (req, res) => {
  res.send("Hello panda");
});*/

app.post("/login", getLogin);

app.get("/api", authenticateToken, getUsers);

// start the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
