const db = require("../db");

const register = async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = await db.query(
      "INSERT INTO dionysus.users(user_id, user_name, user_email, user_password) VALUES (default, $1, $2, $3);",
      [username, email, password]
    );

    res.json(newUser);
  } catch (err) {
    if (err.code == 42601) console.log("Invalid Email Address");
    else if (err.code == 23505) console.log("Not Unique Email");
    // console.error(err); //42704
  }
};

const login = (req, res) => { };

module.exports = { register, login };
