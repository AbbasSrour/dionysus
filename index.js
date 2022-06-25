//-------------------------------------------------------------------------------------------------------//
//
const MovieRoute = require("./routes/MovieRoute");
const SeriesRoute = require("./routes/SeriesRoute");
const AuthRoute = require("./routes/AuthRoute");

//-------------------------------------------------------------------------------------------------------//
//------------------------------------------ Middleware ------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
dotenv.config();
const port = process.env.PORT || 8000;

//-------------------------------------------------------------------------------------------------------//
//------------------------------------------ Routes ----------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//

app.register(MovieRoute);
app.register(SeriesRoute);
app.register(AuthRoute);

//-------------------------------------------------------------------------------------------------------//
//------------------------------------------ Listen ----------------------------------------------------//
//-----------------------------------------------------------------------------------------------------//
app.listen({ port: port }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
