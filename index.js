//-------------------------------------------------------------------------------------------------------//
//------------------------------------------ Imports ---------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
const express = require("express");
const db = require("./db");
const dotenv = require("dotenv");

const movieRoute = require("./routes/movieRoute");
const seriesRoute = require("./routes/seriesRoute");
const authRoute = require("./routes/authRoute");

//-------------------------------------------------------------------------------------------------------//
//------------------------------------------ Middleware ------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
const app = express();
dotenv.config();
app.use(express.json());
const port = process.env.PORT || 8000;

//-------------------------------------------------------------------------------------------------------//
//------------------------------------------ Routes ----------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//

// Test
app.get("/", async (req, res) => {
  const test = await pool.query("select * from dionysus.movie");
  res.json(test.rows);
});

// Movie
app.use("/api/v1/movies", movieRoute);

// Series
app.use("/api/v1/series", seriesRoute);

// Authentications
app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log("hello world");
});
