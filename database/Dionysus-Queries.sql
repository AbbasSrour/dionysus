---------------------------------------------------------------------------------------------------------------
--------------------------------------------- Insertion -------------------------------------------------------
---------------------------------------------------------------------------------------------------------------

---------------------------------------------- User -----------------------------------------------------------
insert into dionysus.users(user_id, user_name, user_email, user_password)
values (default, 'Mark', 'mark@gmail.com', default);

---------------------------------------------- Actors -----------------------------------------------------------
insert into dionysus.actor(actor_first_name, actor_last_name, actor_image)
VALUES('Robert', 'Downey Jr.',default) ;

---------------------------------------------- Genres ----------------------------------------------------------
insert into dionysus.genre(genre_id, genre_name)
VALUES (default,'Comedy');

----------------------------------------------- Movies --------------------------------------------------------
insert into dionysus.movie(movie_id, movie_name, movie_wallpaper, movie_location, imdb_link, yt_trailer)
values (default,'The Mechanist',default,default,default, default);

------------------------------------------------ Series -------------------------------------------------------
insert into dionysus.series (series_id, series_name, imdb_link, yt_trailer, series_wallpaper)
values (default, 'WandaVision', default,default, 'hello');

------------------------------------------------ Seasons -------------------------------------------------------
insert into dionysus.season(season_number, summery, yt_trailer, imdb_link, season_wallpaper, series_id)
    select 1, null, null, null, null, series_id
        from dionysus.series
            where series_name = 'Arcane';

--------------------------------------------- Episodes -------------------------------------------------------
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
where dionysus.series.series_name = 'Arcane' and dionysus.genre.genre_name = 'Action';

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

-- Set Movie Actor
insert into dionysus.movie_cast(movie_id, actor_id, actor_role)
SELECT dionysus.movie.movie_id, dionysus.actor.actor_id, 'Iron Man'
from dionysus.movie, dionysus.actor
where dionysus.actor.actor_first_name ='Robert' And dionysus.actor.actor_last_name='Downey Jr.' and dionysus.movie.movie_name='Avengers';

------------------------------------------------------------------------------------------------------------------------
--------------------------------------------- User Actions -------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
-- The User Watched A Movie
insert into dionysus.movie_history(user_id, movie_id)
select dionysus.users.user_id, dionysus.movie.movie_id
from dionysus.users, dionysus.movie
where dionysus.users.user_name = 'Abbas' and dionysus.movie.movie_name = 'The Mechanist';

-- The User Watched A TV-Series Episode
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

-- User History
create or replace view dionysus.history as
(
select dionysus.movie_history.user_id,
       dionysus.movie_history.movie_id,
       null as episode_id,
       dionysus.movie_history.watch_date,
       dionysus.movie_history.watch_time
from dionysus.movie_history
UNION ALL
select dionysus.series_history.user_id,
       null,
       dionysus.series_history.episode_id,
       dionysus.series_history.watch_date,
       dionysus.series_history.watch_time
from dionysus.series_history
where user_id = 1
order by watch_time desc
    );

------------------------------------------------------------------------------------------------------------------------
--------------------------------------------- Aggregation --------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
-- Most Watched Movie Genre
-- noinspection SqlShouldBeInGroupBy
select genre_id, count(*) as occurences
from dionysus.movie_genres, (select movie_id from dionysus.movie_history) as foo
where dionysus.movie_genres.movie_id = foo .movie_id
group by genre_id
order by occurences desc;

-- noinspection SqlShouldBeInGroupBy
select genre_name, count(*) as occurences
from dionysus.genre, (select genre_id
from dionysus.movie_genres, (select movie_id from dionysus.movie_history) as foo
where dionysus.movie_genres.movie_id = foo .movie_id) as boo
where dionysus.genre.genre_id = boo.genre_id
group by genre_name
order by occurences desc;

-- Most Watched TV Genre
-- noinspection SqlShouldBeInGroupBy
select genre_id, count(*) as occurences
from dionysus.series_genres, (select series_id
    from dionysus.episode,(select episode_id from dionysus.series_history) as megaFoo
    where dionysus.episode.episode_id = megaFoo.episode_id
    ) as foo
where dionysus.series_genres.series_id = foo.series_id
group by genre_id
order by occurences desc;

-- noinspection SqlShouldBeInGroupBy
select genre_name, count(*) as occurences
from dionysus.genre, (select genre_id from dionysus.series_genres, (select series_id
                              from dionysus.episode,(select episode_id from dionysus.series_history) as megaFoo
                              where dionysus.episode.episode_id = megaFoo.episode_id
) as foo
where dionysus.series_genres.series_id = foo.series_id) as boo
where boo.genre_id = dionysus.genre.genre_id
group by genre_name
order by occurences desc;

-- Most Watched Genre
-- noinspection SqlShouldBeInGroupBy
select genre_id, count(*) as occurences
from (
    (select genre_id
    from dionysus.series_genres, (select series_id
                                  from dionysus.episode,(select episode_id from dionysus.series_history) as megaFoo
                                  where dionysus.episode.episode_id = megaFoo.episode_id) as foo
    where dionysus.series_genres.series_id = foo.series_id
    ) union all
      (select genre_id
    from dionysus.movie_genres, (select movie_id from dionysus.movie_history) as foo
    where dionysus.movie_genres.movie_id = foo .movie_id)
      ) as boo
group by genre_id
order by occurences desc;

-- noinspection SqlShouldBeInGroupBy
select genre_name, count(*) as occurences
from dionysus.genre, (
         (select genre_id
          from dionysus.series_genres, (select series_id
                                        from dionysus.episode,(select episode_id from dionysus.series_history) as megaFoo
                                        where dionysus.episode.episode_id = megaFoo.episode_id) as foo
          where dionysus.series_genres.series_id = foo.series_id
         ) union all
         (select genre_id
          from dionysus.movie_genres, (select movie_id from dionysus.movie_history) as foo
          where dionysus.movie_genres.movie_id = foo .movie_id)
     ) as boo
where boo.genre_id = dionysus.genre.genre_id
group by genre_name
order by occurences desc;

------------------------------------------------------------------------------------------------------------------------
--------------------------------------------- Delete Tuples ------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
-- Delete A User
delete from dionysus.users
where dionysus.users.user_name = 'abbas';

-- Delete An Actor
delete from dionysus.actor
where actor_id = 1;

-- Delete Genre
delete from dionysus.genre
where genre_name = 'Comedy';

-- Delete Movie
delete  from dionysus.movie
where movie_name = 'Avengers';

-- Delete A Series and its Episodes
delete from dionysus.series
where series_name = 'Friends';

-- Delete An episode
delete from dionysus.episode
where episode_id = 3;

-- delete a series genre
delete from dionysus.series_genres
where series_id = (select series_id from dionysus.series where series_name='Arcane') and genre_id = 2;

-- delete a movie genre
delete from dionysus.movie_genres
where movie_id = 1;

-- Clear Movie History
-- noinspection SqlWithoutWhere
delete from dionysus.movie_history;

------------------------------------------------------------------------------------------------------------------------
-------------------------------------------------- Get Data ------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------
-- Get Trigger
-- noinspection SqlShouldBeInGroupBy
SELECT  event_object_table AS table_name ,trigger_name
FROM information_schema.triggers
GROUP BY table_name , trigger_name
ORDER BY table_name ,trigger_name;

-- Get Movie
Select *
from dionysus.movie
WHERE movie_id = 1;

-- Get Movie by genre Id
SELECT  dionysus.movie.movie_id, movie_name, movie_release_year
FROM dionysus.movie_genres, dionysus.movie
WHERE dionysus.movie_genres.genre_id = 1 and dionysus.movie.movie_id = dionysus.movie_genres.movie_id;

SELECT dionysus.series.series_id, series_name, series_release_year
FROM dionysus.series_genres as genre, dionysus.series
WHERE genre.genre_id = 1 and dionysus.series.series_id = genre.series_id;
