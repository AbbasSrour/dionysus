---------------------------------------------------------------------------------------------------------------
--------------------------------------------- Insertion -------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
---------------------------------------------- User -----------------------------------------------------------
insert into dionysus.users(user_id, user_name, user_email, user_password)
values (default, 'Abbas', 'abbas.mj.srour@gmail.com', default);
insert into dionysus.users(user_id, user_name, user_email, user_password)
values (default, 'Mark', 'Mark@gmail.com', default);
insert into dionysus.users(user_id, user_name, user_email, user_password)
values (default, 'Alex', 'Alex@gmail.com', default);

---------------------------------------------- Actors -----------------------------------------------------------
insert into dionysus.actor(actor_first_name, actor_last_name, actor_image)
VALUES('Robert', 'Downey Jr.',default) ;
insert into dionysus.actor(actor_first_name, actor_last_name, actor_image)
VALUES('Brad', 'Pit',default) ;
insert into dionysus.actor(actor_first_name, actor_last_name, actor_image)
VALUES('George', 'Clooney',default) ;

---------------------------------------------- Genres ----------------------------------------------------------
insert into dionysus.genre(genre_id, genre_name)
VALUES (default,'Comedy');
insert into dionysus.genre(genre_id, genre_name)
VALUES (default,'Action');
insert into dionysus.genre(genre_id, genre_name)
VALUES (default,'Drama');
insert into dionysus.genre(genre_id, genre_name)
VALUES (default,'Horror');
insert into dionysus.genre(genre_id, genre_name)
VALUES (default,'Thriller');

----------------------------------------------- Movies --------------------------------------------------------
insert into dionysus.movie(movie_id, movie_name, movie_wallpaper, movie_location, imdb_link, yt_trailer,  movie_release_year)
values (default,'The Mechanist',default,default,default, default, 2004);
insert into dionysus.movie(movie_id, movie_name, movie_wallpaper, movie_location, imdb_link, yt_trailer,  movie_release_year)
values (default,'Avengers',default,default,default, default, 2010);
insert into dionysus.movie(movie_id, movie_name, movie_wallpaper, movie_location, imdb_link, yt_trailer, movie_release_year)
values (default,'Ocean 11',default,default,default, default, 2010);
insert into dionysus.movie(movie_id, movie_name, movie_wallpaper, movie_location, imdb_link, yt_trailer, movie_release_year)
values (default,'Fight Club',default,default,default, default, 1999);
insert into dionysus.movie(movie_id, movie_name, movie_wallpaper, movie_location, imdb_link, yt_trailer, movie_release_year)
values (default,'Black Swan',default,default,default, default, 2014);

------------------------------------------------ Series -------------------------------------------------------
insert into dionysus.series (series_id, series_name, imdb_link, yt_trailer, series_wallpaper)
values (default, 'WandaVision', default,default, 'WVDefWallpaper');
insert into dionysus.series (series_id, series_name, imdb_link, yt_trailer, series_wallpaper)
values (default, 'Arcane', default,default, 'ArcaneDefWallpaper');
insert into dionysus.series (series_id, series_name, imdb_link, yt_trailer, series_wallpaper)
values (default, 'Rick And Morty', default,default, 'RAMDefWallpaper');
insert into dionysus.series (series_id, series_name, imdb_link, yt_trailer, series_wallpaper)
values (default, 'Friends', default,default, 'FriendsDefWallpaper');

------------------------------------------------ Seasons -------------------------------------------------------
insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 1, null, null, null, 'ArcaneSeason1Wallpaper', series_id
from dionysus.series
where series_name = 'Arcane';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 1, null, null, null, null, series_id
from dionysus.series
where series_name = 'WandaVision';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 1, null, null, null, null, series_id
from dionysus.series
where series_name = 'Rick And Morty';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 2, null, null, null, null, series_id
from dionysus.series
where series_name = 'Rick And Morty';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 3, null, null, null, null, series_id
from dionysus.series
where series_name = 'Rick And Morty';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 4, null, null, null, null, series_id
from dionysus.series
where series_name = 'Rick And Morty';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 5, null, null, null, null, series_id
from dionysus.series
where series_name = 'Rick And Morty';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 1, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 2, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 3, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 4, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 5, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 6, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
select 7, null, null, null, null, series_id
from dionysus.series
where series_name = 'Friends';

--------------------------------------------- Episodes -------------------------------------------------------
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'WandaVision' and dionysus.season.season_number = 1
and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'WandaVision');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'WandaVision' and dionysus.season.season_number = 1
and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'WandaVision');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'WandaVision' and dionysus.season.season_number = 1
and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'WandaVision');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Arcane' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Arcane');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Arcane' and dionysus.season.season_number = 1
    and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Arcane');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Arcane' and dionysus.season.season_number = 1
and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Arcane');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 1
and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');


insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Rick And Morty' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Rick And Morty');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 1
and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 1
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 2
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 3
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 4
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 5
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 6
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 6
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 6
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 6
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 6
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 6
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');

insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 1, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 7
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 2, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 7
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 3, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 7
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 4, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 7
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 5, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 7
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');
insert into dionysus.episode( series_id, season_id, episode_name, episode_wallpaper, episode_number, episode_location)
select dionysus.series.series_id, dionysus.season.season_id, null, null, 6, null
from dionysus.series, dionysus.season
where dionysus.series.series_name = 'Friends' and dionysus.season.season_number = 7
  and dionysus.season.series_id = (select dionysus.series.series_id
                                   from dionysus.series
                                   where dionysus.series.series_name = 'Friends');


------------------------------------------------------------------------------------------------------------------------
--------------------------------------------- Set Movie/Episode Details ------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
-- Set Series Genres
insert into dionysus.series_genres(series_id, genre_id)
select dionysus.series.series_id, dionysus.genre.genre_id
from dionysus.genre, dionysus.series
where dionysus.series.series_name = 'WandaVision' and dionysus.genre.genre_name = 'Drama';
insert into dionysus.series_genres(series_id, genre_id)
select dionysus.series.series_id, dionysus.genre.genre_id
from dionysus.genre, dionysus.series
where dionysus.series.series_name = 'WandaVision' and dionysus.genre.genre_name = 'Action';

insert into dionysus.series_genres(series_id, genre_id)
select dionysus.series.series_id, dionysus.genre.genre_id
from dionysus.genre, dionysus.series
where dionysus.series.series_name = 'Arcane' and dionysus.genre.genre_name = 'Action';
insert into dionysus.series_genres(series_id, genre_id)
select dionysus.series.series_id, dionysus.genre.genre_id
from dionysus.genre, dionysus.series
where dionysus.series.series_name = 'Arcane' and dionysus.genre.genre_name = 'Drama';

insert into dionysus.series_genres(series_id, genre_id)
select dionysus.series.series_id, dionysus.genre.genre_id
from dionysus.genre, dionysus.series
where dionysus.series.series_name = 'Rick And Morty' and dionysus.genre.genre_name = 'Comedy';

insert into dionysus.series_genres(series_id, genre_id)
select dionysus.series.series_id, dionysus.genre.genre_id
from dionysus.genre, dionysus.series
where dionysus.series.series_name = 'Friends' and dionysus.genre.genre_name = 'Comedy';

-- Set Movie Genre
insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Avengers' and dionysus.genre.genre_name='Comedy';
insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Avengers' and dionysus.genre.genre_name='Action';

insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Black Swan' and dionysus.genre.genre_name='Drama';
insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Black Swan' and dionysus.genre.genre_name='Horror';

insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Ocean 11' and dionysus.genre.genre_name='Action';

insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Fight Club' and dionysus.genre.genre_name='Action';
insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'Fight Club' and dionysus.genre.genre_name='Thriller';

insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'The Mechanist' and dionysus.genre.genre_name='Thriller';
insert into dionysus.movie_genres(genre_id, movie_id)
select dionysus.genre.genre_id, dionysus.movie.movie_id
from dionysus.genre, dionysus.movie
where dionysus.movie.movie_name = 'The Mechanist' and dionysus.genre.genre_name='Drama';

-- Set Movie Actor
insert into dionysus.movie_cast(movie_id, actor_id, actor_role)
SELECT dionysus.movie.movie_id, dionysus.actor.actor_id, 'Iron Man'
from dionysus.movie, dionysus.actor
where dionysus.actor.actor_first_name ='Robert' And dionysus.actor.actor_last_name='Downey Jr.' and dionysus.movie.movie_name='Avengers';

------------------------------------------------------------------------------------------------------------------------
--------------------------------------------- User Actions -------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
------------------------------------------- The User Watched A Movie ---------------------------------------------------

insert into dionysus.movie_history(user_id, movie_id)
select dionysus.users.user_id, dionysus.movie.movie_id
from dionysus.users, dionysus.movie
where dionysus.users.user_name = 'Abbas' and dionysus.movie.movie_name = 'The Mechanist';

insert into dionysus.movie_history(user_id, movie_id)
select dionysus.users.user_id, dionysus.movie.movie_id
from dionysus.users, dionysus.movie
where dionysus.users.user_name = 'Abbas' and dionysus.movie.movie_name = 'Avengers';

insert into dionysus.movie_history(user_id, movie_id)
select dionysus.users.user_id, dionysus.movie.movie_id
from dionysus.users, dionysus.movie
where dionysus.users.user_name = 'Mark' and dionysus.movie.movie_name = 'Avengers';

insert into dionysus.movie_history(user_id, movie_id)
select dionysus.users.user_id, dionysus.movie.movie_id
from dionysus.users, dionysus.movie
where dionysus.users.user_name = 'Mark' and dionysus.movie.movie_name = 'Fight Club';

------------------------------------------- The User Watched An Episode ------------------------------------------------
insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 3 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 1
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'WandaVision'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'WandaVision');
insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 2 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 1
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'WandaVision'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'WandaVision');
insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 1 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 1
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'WandaVision'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'WandaVision');

insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 1 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 1
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'Rick And Morty'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'Rick And Morty');

insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 2 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 1
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'Rick And Morty'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'Rick And Morty');

insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 1 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 2
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'Rick And Morty'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'Rick And Morty');

insert into dionysus.series_history(user_id, episode_id)
select distinct dionysus.users.user_id, dionysus.episode.episode_id
from dionysus.users, dionysus.episode
where dionysus.episode.episode_number = 2 and dionysus.users.user_name = 'Abbas'
  and dionysus.episode.season_id = (select distinct season_id from dionysus.season
                                    where season_number = 2
                                      and season.series_id =(select distinct series_id
                                                             from dionysus.series
                                                             where series_name = 'Rick And Morty'))
  and dionysus.episode.series_id = (select distinct series_id
                                    from dionysus.series
                                    where series_name = 'Rick And Morty');
