CREATE SCHEMA IF NOT EXISTS dionysus;

---------------------------------------------------------------------------------------------------------------
--------------------------------------------- Tables ----------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
CREATE  TABLE dionysus.actor (
	actor_id             bigserial  NOT NULL  ,
	actor_first_name     varchar(100)    ,
	actor_last_name      varchar(100)    ,
	actor_image          varchar(480)    ,
	CONSTRAINT pk_actor PRIMARY KEY ( actor_id )
 );

CREATE  TABLE dionysus.genre ( 
	genre_id             bigserial  NOT NULL  ,
	genre_name           varchar(100)    ,
	CONSTRAINT pk_genre PRIMARY KEY ( genre_id )  ,
  CONSTRAINT unique_genre_name UNIQUE ( genre_name )
 );

CREATE  TABLE dionysus.movie ( 
	movie_id             bigserial  NOT NULL  ,
	movie_name           varchar(100)    ,
	movie_wallpaper      varchar(480)    ,
	movie_location       varchar(480)    ,
    movie_release_year   integer         ,
    summery              varchar(480)    ,
	yt_trailer           varchar(480)    ,
	imdb_link            varchar(480)    ,
	CONSTRAINT pk_movie PRIMARY KEY ( movie_id ),
    UNIQUE ( movie_name, movie_release_year ),
    UNIQUE (movie_location)
 );

CREATE  TABLE dionysus.movie_cast ( 
	actor_id             bigserial    ,
	movie_id             bigserial    ,
	actor_role           varchar(100)    ,
	CONSTRAINT fk_movie_cast_actor FOREIGN KEY ( actor_id ) REFERENCES dionysus.actor( actor_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_movie_cast_movie FOREIGN KEY ( movie_id ) REFERENCES dionysus.movie( movie_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
    CONSTRAINT unique_role UNIQUE ( actor_id, movie_id, actor_role)
 );

CREATE  TABLE dionysus.movie_genres ( 
	genre_id             bigserial    ,
	movie_id             bigserial    ,
	CONSTRAINT fk_movie_genres_genre FOREIGN KEY ( genre_id ) REFERENCES dionysus.genre( genre_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_movie_genres_movie FOREIGN KEY ( movie_id ) REFERENCES dionysus.movie( movie_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
    UNIQUE ( genre_id , movie_id )
 );

CREATE  TABLE dionysus.series ( 
	series_id            bigserial  NOT NULL  ,
	series_name          varchar(100)   NOT NULL    ,
	series_release_year  integer         ,
	series_wallpaper     varchar(480)    ,
	summery              varchar(480)    ,
	yt_trailer           varchar(480)    ,
	imdb_link            varchar(480)    ,
	CONSTRAINT pk_series PRIMARY KEY ( series_id ),
	UNIQUE (series_name, series_release_year)
 );

CREATE  TABLE dionysus.series_genres ( 
	genre_id             bigserial    ,
	series_id            bigserial    ,
	CONSTRAINT fk_series_genres_series FOREIGN KEY ( series_id ) REFERENCES dionysus.series( series_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_series_genres_genre FOREIGN KEY ( genre_id ) REFERENCES dionysus.genre( genre_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
    UNIQUE ( genre_id , series_id )
 );

CREATE  TABLE dionysus.users ( 
	user_id              bigserial  NOT NULL  ,
	user_name            varchar(100)    ,
	user_email           varchar(480)    ,
	user_password        varchar(480)    ,
	CONSTRAINT pk_users PRIMARY KEY ( user_id )  ,
    UNIQUE ( user_email )
 );

CREATE  TABLE dionysus.movie_history ( 
	user_id              bigserial    ,
	movie_id             bigserial    ,
	watch_date           date DEFAULT CURRENT_DATE   ,
	watch_time           time DEFAULT CURRENT_TIME   ,
	CONSTRAINT fk_movie_history_users FOREIGN KEY ( user_id ) REFERENCES dionysus.users( user_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_movie_history_movie FOREIGN KEY ( movie_id ) REFERENCES dionysus.movie( movie_id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );

CREATE  TABLE dionysus.season ( 
	season_id            bigserial  NOT NULL  ,
	series_id            bigserial  NOT NULL  ,
	season_number        integer  NOT NULL  ,
	summery              varchar(480)    ,
	season_wallpaper     varchar(480)    ,
	yt_trailer           varchar(480)    ,
	imdb_link            varchar(480)    ,
	CONSTRAINT pk_season PRIMARY KEY ( season_id ),
	CONSTRAINT fk_season_series FOREIGN KEY ( series_id ) REFERENCES dionysus.series( series_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
    UNIQUE ( season_number, series_id )
 );

CREATE  TABLE dionysus.episode ( 
	episode_id           bigserial  NOT NULL  ,
	series_id            bigserial    ,
	season_id            bigserial    ,
	episode_number       integer  NOT NULL  ,
	episode_name         varchar(100)    ,
	episode_location     varchar(480)    ,
	episode_wallpaper    varchar(480)    ,
    summery              varchar(480)    ,
	CONSTRAINT pk_episode PRIMARY KEY ( episode_id ),
	CONSTRAINT fk_episode_series FOREIGN KEY ( series_id ) REFERENCES dionysus.series( series_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_episode_season FOREIGN KEY ( season_id ) REFERENCES dionysus.season( season_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
    UNIQUE ( episode_number, season_id, series_id ),
    UNIQUE (episode_location)
 );

CREATE  TABLE dionysus.series_cast ( 
	actor_id             bigserial    ,
	series_id           bigserial    ,
	actor_role           varchar(100)    ,
	CONSTRAINT fk_series_cast_episode FOREIGN KEY ( series_id ) REFERENCES dionysus.series( series_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_series_cast_actor FOREIGN KEY ( actor_id ) REFERENCES dionysus.actor( actor_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
    UNIQUE ( actor_id, actor_role, series_id )
 );

CREATE  TABLE dionysus.series_history ( 
	user_id              bigserial    ,
	episode_id           bigserial    ,
	watch_date           date DEFAULT CURRENT_DATE   ,
	watch_time           time DEFAULT CURRENT_TIME   ,
	CONSTRAINT fk_series_history_users FOREIGN KEY ( user_id ) REFERENCES dionysus.users( user_id ) ON DELETE CASCADE ON UPDATE CASCADE ,
	CONSTRAINT fk_series_history_episode FOREIGN KEY ( episode_id ) REFERENCES dionysus.episode( episode_id ) ON DELETE CASCADE ON UPDATE CASCADE 
 );
---------------------------------------------------------------------------------------------------------------
--------------------------------------------- Triggers --------------------------------------------------------
---------------------------------------------------------------------------------------------------------------

-- Make Sure An Episode Doesn't have a season_id of another series: CREATE
--CREATE OR REPLACE FUNCTION dionysus.episode_season_series_check()
    --RETURNS TRIGGER
  --  LANGUAGE ;
--CREATE TRIGGER check_episode_series_season
    --BEFORE INSERT ON dionysus.episode;

-- Change Episode Wallpaper Based On season and series wallpaper
CREATE OR REPLACE FUNCTION dionysus.change_wallpaper()
    RETURNS trigger
    LANGUAGE plpgsql
AS $$
    declare myvar varchar(480);
BEGIN
    IF NEW.episode_wallpaper is null
    Then
        myvar = (SELECT distinct dionysus.season.season_wallpaper
                 From dionysus.season
                 WHERE NEW.season_id = dionysus.season.season_id);
        IF myvar is not null
        THEN
            UPDATE dionysus.episode
            SET episode_wallpaper = dionysus.season.season_wallpaper
            From dionysus.season
            WHERE NEW.season_id = dionysus.season.season_id;
        ELSE
            UPDATE dionysus.episode
            SET episode_wallpaper = dionysus.series.series_wallpaper
            From dionysus.series
            WHERE NEW.series_id = dionysus.series.series_id;
        End if;
    End if;
    RETURN null;
End;
$$;
CREATE TRIGGER change_wallpaper_trigger
    AFTER INSERT OR UPDATE ON dionysus.episode
    FOR EACH ROW 
    EXECUTE FUNCTION dionysus.change_wallpaper();

-- Trigger To Make Emails inserted lowercase
CREATE OR REPLACE FUNCTION dionysus.change_email_lowercase()
    RETURNS TRIGGER
    LANGUAGE plpgsql
    AS
    $$
    BEGIN
        NEW.user_email = lower(NEW.user_email);
        RETURN NEW;
    END;
    $$;

CREATE TRIGGER change_email_lowercase_trigger
    BEFORE INSERT OR UPDATE ON dionysus.users
    FOR EACH ROW
    EXECUTE FUNCTION  dionysus.change_email_lowercase();

-- Delete Duplicate Seasons
 CREATE OR REPLACE FUNCTION dionysus.delete_season_duplicates()
     RETURNS TRIGGER
     LANGUAGE plpgsql
     AS
     $$
     BEGIN
     DELETE FROM dionysus.season
         WHERE season_id IN ( SELECT season_id
             FROM (SELECT season_id, ROW_NUMBER() OVER
         ( PARTITION BY series_id, season_number ORDER BY season_id ) AS row_num
           FROM dionysus.season) as t WHERE t.row_num>1);
     RETURN NULL;
     END;
     $$;
 CREATE TRIGGER delete_season_duplicates_trigger
     AFTER INSERT OR UPDATE ON dionysus.season
     FOR EACH ROW
     EXECUTE FUNCTION dionysus.delete_season_duplicates();

-- Email Syntax Check
CREATE OR REPLACE FUNCTION dionysus.validate_email()
    RETURNS TRIGGER
    AS
    $$
    BEGIN
        IF NEW.user_email !~* '^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'
        THEN
           RAISE EXCEPTION 'Invalid Email Address' USING
            errcode='BULLS',
            message='Bar is prohibited',
            hint='We do not talk to this guy';
        ELSE
            RETURN NEW;
        END if;
    END;
    $$ LANGUAGE plpgsql;

CREATE TRIGGER validate_email_trigger
    BEFORE INSERT OR UPDATE ON dionysus.users
    FOR EACH ROW
    EXECUTE FUNCTION dionysus.validate_email();
