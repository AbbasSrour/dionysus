# Dionysus:

Dionysus is the god of the grape-harvest, winemaking, orchards and fruit, vegetation, fertility, insanity, ritual
madness, religious ecstasy,
festivity, and theatre in ancient Greek religion and myth. He is also known as Bacchus by the Greeks.

![stack](https://github.com/AbbasSrour/dionysus/blob/dev/assets/Dionysus.Stack.png)

A movie streaming service built with a Microservice Architecture to facilitate rapid development and deployment, easier
troubleshooting, and separation of concerns.
It leverages cutting edge new technologies standards for a pleasant user and development experience. Communication
between the different services is done with a RabbitMQ message broker, to ensure consistency and fault proof protection.
protection.
It utilizes a Nginx Reverse Proxy to route the requests to two API gateways, one for the product and the other for the
management of the environment with both gateways being secured with JWT tokens based authentication mechanisms. The
project utilities primarily the Grafana stack for monitoring and logging, Hashivault
for secrets, and Docker for containerizing the application, and jenkins as a CI/CD pipline to automize the building and
deployment of the application.

<table>
  <tr>
    <td>Name</td>
    <td>Role</td>
    <td>Greek Background</td>
  </tr>
  <tr>
    <td> Hercules </td>
    <td>Authentication and User Data Mangement Service</td>
    <td> 
        Heracles was a divine hero in Greek mythology, the son of Zeus and Alcmene, and the foster son of Amphitryon. 
        He was a great-grandson and half-brother (as they are both sired by the god Zeus) of Perseus, and similarly a 
        half-brother of Dionysus. He was the greatest of the Greek heroes, the ancestor of royal clans who claimed to be 
        Heracleidae, and a champion of the Olympian order against chthonic monsters. 
    </td>
  </tr>
  <tr>
    <td> Apollo </td>
    <td> Movie And Tv Shows Index </td>
    <td>
      Apollo is one of the Olympian deities in classical Greek and Roman religion and Greek and Roman mythology. 
      The national divinity of the Greeks, Apollo has been recognized as a god of archery, music and dance, truth 
      and prophecy, healing and diseases, the Sun and light, poetry, and more. One of the most important and complex 
      of the Greek gods, he is the son of Zeus and Leto, and the twin brother of Artemis, goddess of the hunt.
    </td>
  </tr>
  <tr>
    <td> Hesita </td>
    <td> Movie And TV Shows Scrapper</td>
    <td>
      Hestia, in Greek religion, goddess of the hearth, daughter of Cronus and Rhea, and one of the 12 Olympian deities. 
      When the gods Apollo and Poseidon became suitors for her hand she swore to remain a maiden forever, whereupon Zeus, 
      the king of the gods, bestowed upon her the honour of presiding over all sacrifices
    </td>
  </tr>
  <tr>
    <td> Coeus </td>
    <td> Search Engine </td>
    <td>
      Koios (Coeus) was the Titan-god of the inquisitive mind, his name meaning "query" or "questioning". 
      His wife, Phoibe (Phoebe), was the goddesss of the prophetic mind.
    </td>
  </tr>
  <tr>
    <td>Athena</td>
    <td> Recommendation Engine</td>
    <td>
      Athena was the goddess of battle strategy, and wisdom. Identified in the Roman mythology as the goddess Minerva. 
      She was always accompanied by her owl and the goddess of victory, Nike. Also known as Pallas Athena, she wore a 
      breastplate made out of goatskin called the Aegis, which was given to her by her father, Zeus.
    </td>
  </tr>
    <tr>
      <td> Aphrodite</td>
      <td> React Webapp</td>
      <td>
        Aphrodite is the ancient Greek goddess of sexual love and beauty, identified with Venus by the Romans. She was known primarily as a goddess of love and fertility and occasionally presided over marriage.
      </td>
    </tr>
</table>

## Apis

### Frontend

Built with React and SCSS, for a modern and elegant and responsive website, that works across different screen sizes be
it desktop or mobile, and takes in mind the different UI/UX standards and bestpractices, namely accessibility.

### Hercules

Authentication and user mangment api built with Express, Typescript, and NestJs handles incoming requests from the
frontend clients, authenticates and authorizes them using JWTs and stores refresh tokens in a redis cache to aliviate
the shortcomings of JWT authentication, tokens are stored in httpOnly Cookies on the client side.

### Apollo

A Rest API also built with Express and Nest and incorporates a Postgres database, this service serves the purpose of
being a Movie and TV Shows index, keen to services like IMDB and TMDB, it stores everything on a particular show from
the cast to the reviews and trailers. A small Redis cache is also used to cache requests for better performance.

### Hesita

The scrapper an Express + Nest rest api which is responsible for searching imdb using the search term received from the
backend,
checking if the specfied movie or series exists on the streaming servers (currently one but more are to be added), then
scrape imdb for all the movie data.
The scrape is thorough, and includes mostly everything that exists and related to specfied movie or sitcom from release
data and pg rating
to the production company. The scrapper then will forward the scrapped data, to apollo over rabbitmq to be validated and
inserted to the postgres database,
which will then trigger an insertion in the elasticsearch database.

### Coeus

A search engine reset api also build with express and nest, responsible for blazing fast document search over the stored
data, where the results are not only
based on how similar is the name of a search term to the name of a show, but also if the search term is included in the
data of a show, the search term will also
look at the cast of the movies to check if the search term is similar to the name of an actor, and return the shows the
actor is in, for example `Robbert Downy` will return a list of shows that have Robbert Downy in their name, but also
shows where actors with names similar to the search term act in.

### Athena

The recommendation engine is responsible for crunching the data in the elasticsearch database and recommending movies
using content based
filtering, collaborative filtering, and demographic filtering. In a nutshell the engine will recommend the best genres
to be shown on the
user's homepage with the movies in each genre sorted from worst to best based on the user interests.

## Databases

Postgres database that at is designed from the get go to have every possible feature that I intend to implement in the
project, with extra
future proofing to make sure that the database will not need any drastic changes in the future.

### Apollo Database

