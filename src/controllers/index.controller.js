const { Pool } = require("pg");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "J@k3r1982",
  database: "movies_db",
  port: "5432"
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

const getLogin = async (req, res) => {
  // Authenticate user
  //console.log(req.body);
  const { username, password } = req.body.postData;

  const text = "SELECT * FROM users WHERE email = $1 AND password = $2 LIMIT 1";
  const values = [username, password];

  const response = await pool.query(text, values);

  if (response.rows.length !== 0) {
    //console.log(response.rows);
    const user = { name: response.rows.username };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.status(200).json({
      accessToken: accessToken
    });
  }

  return res.status(401).json({ error: "something is wrong" });
};

const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM users");
    console.log(response.rows);
    res.send("users");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  authenticateToken,
  getLogin,
  getUsers
};
