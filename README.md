# Dionysus:

![stack](https://github.com/AbbasSrour/dionysus/blob/main/assets/Dionysus.Stack.png)

Dionysus is a Movie and TV-Series streaming website, with all the features expected from modern streaming services
mainly user accounts that hold user watch history, recommendation system based on this history, slick UI, and fast search using
elastic search. This repository holds all the different microservices that constitute the website.

## Structure

### Frontend

The frontend is CSR React application to be used as a UI for the user to interact with the application. The user experience starts with creating
an account and registering, verifying his email and then logging in.

### Backend:

Express + Typescript rest api that handles incoming requests from the frontend clients, using JWTs and sessions for frontend user authentication stored in
a redis cache database(more on the security aspect later). Requests on the `/search` route trigger the client to send a request to
the scrapper microservice, saves the search term in the elastic search database, and then saves the response data also in the elastic search
database. The backend also handles the management, insertion, deletion, and querying of a remote postgresql database
that functions as a datastore for user data, and a backup for movie and series data in case some data gets lost.

### Scrapper:

The scrapper an Express + Typescript rest api which is responsible for searching imdb using the search term received from the backend,
checking if the specfied movie or series exists on the servers (currently one but more are to be added), then scrape imdb for all the movie data.
The scrape is thorough, and includes mostly everything that exists and related to specfied movie or sitcom from release data and pg rating
to the production company. The scrapper then will forward the scrapped data, each entity on its own on its specified api route in the backend
through post http requests to be inserted to database. And finally a response containing all the data in a json will be sent to be saved in
the elastic search database.

### Engine

The recommendation engine is responsible for crunching the data in the elasticsearch database and recommending movies using content based
filtering, collaborative filtering, and demographic filtering. In a nutshell the engine will recommend the best genres to be shown on the
user's homepage with the movies in each genre sorted from worst to best based on the user interests.

### Database
![ER Model](https://github.com/AbbasSrour/dionysus/blob/main/assets/Dionysus.ERM.png)
![RM](https://github.com/AbbasSrour/dionysus/blob/main/assets/Dionysus.RM.png)

Postgres database that at is designed from the get go to have every possible feature that I intend to implement in the project, with extra
future proofing to make sure that the database will not need any drastic changes in the future. The picture above reflects the OG ERM, after 
much much much reconsideration, updates, 1NF, 2NF, and 3NF the database became too complex for the ERM to convey any meaning without much 
redesigning, which I leave it to a later time, for now the Relational model and the [Db Markdown Table](https://github.com/AbbasSrour/dionysus/blob/main/Database/Dionysus-RM.md) will have to do.

