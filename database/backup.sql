--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: dionysus; Type: SCHEMA; Schema: -; Owner: ares
--

CREATE SCHEMA dionysus;


ALTER SCHEMA dionysus OWNER TO ares;

--
-- Name: change_email_lowercase(); Type: FUNCTION; Schema: dionysus; Owner: ares
--

CREATE FUNCTION dionysus.change_email_lowercase() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    BEGIN
        NEW.user_email = lower(NEW.user_email);
        RETURN NEW;
    END;
    $$;


ALTER FUNCTION dionysus.change_email_lowercase() OWNER TO ares;

--
-- Name: change_wallpaper(); Type: FUNCTION; Schema: dionysus; Owner: ares
--

CREATE FUNCTION dionysus.change_wallpaper() RETURNS trigger
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


ALTER FUNCTION dionysus.change_wallpaper() OWNER TO ares;

--
-- Name: validate_email(); Type: FUNCTION; Schema: dionysus; Owner: ares
--

CREATE FUNCTION dionysus.validate_email() RETURNS trigger
    LANGUAGE plpgsql
    AS $_$
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
    $_$;


ALTER FUNCTION dionysus.validate_email() OWNER TO ares;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: actor; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.actor (
    actor_id bigint NOT NULL,
    actor_first_name character varying(100),
    actor_last_name character varying(100),
    actor_image character varying(480)
);


ALTER TABLE dionysus.actor OWNER TO ares;

--
-- Name: actor_actor_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.actor_actor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.actor_actor_id_seq OWNER TO ares;

--
-- Name: actor_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.actor_actor_id_seq OWNED BY dionysus.actor.actor_id;


--
-- Name: directors; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.directors (
    director_first_name character varying(100) NOT NULL,
    director_last_name character varying(100),
    director_image character varying(480),
    director_id bigint NOT NULL
);


ALTER TABLE dionysus.directors OWNER TO ares;

--
-- Name: directors_director_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.directors_director_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.directors_director_id_seq OWNER TO ares;

--
-- Name: directors_director_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.directors_director_id_seq OWNED BY dionysus.directors.director_id;


--
-- Name: episode; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.episode (
    episode_id bigint NOT NULL,
    series_id bigint NOT NULL,
    season_id bigint NOT NULL,
    episode_number integer NOT NULL,
    episode_name character varying(100),
    episode_wallpaper character varying(480),
    summery character varying(480),
    release_date integer,
    episode_length integer
);


ALTER TABLE dionysus.episode OWNER TO ares;

--
-- Name: episode_episode_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.episode_episode_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.episode_episode_id_seq OWNER TO ares;

--
-- Name: episode_episode_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.episode_episode_id_seq OWNED BY dionysus.episode.episode_id;


--
-- Name: episode_season_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.episode_season_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.episode_season_id_seq OWNER TO ares;

--
-- Name: episode_season_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.episode_season_id_seq OWNED BY dionysus.episode.season_id;


--
-- Name: episode_series_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.episode_series_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.episode_series_id_seq OWNER TO ares;

--
-- Name: episode_series_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.episode_series_id_seq OWNED BY dionysus.episode.series_id;


--
-- Name: genre; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.genre (
    genre_id bigint NOT NULL,
    genre_name character varying(100)
);


ALTER TABLE dionysus.genre OWNER TO ares;

--
-- Name: genre_genre_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.genre_genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.genre_genre_id_seq OWNER TO ares;

--
-- Name: genre_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.genre_genre_id_seq OWNED BY dionysus.genre.genre_id;


--
-- Name: users; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.users (
    user_id bigint NOT NULL,
    user_name character varying(100),
    user_email character varying(480),
    user_password character varying(480)
);


ALTER TABLE dionysus.users OWNER TO ares;

--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.users_user_id_seq OWNER TO ares;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.users_user_id_seq OWNED BY dionysus.users.user_id;


--
-- Name: genre_rating; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.genre_rating (
    rating integer,
    user_id bigint DEFAULT nextval('dionysus.users_user_id_seq'::regclass),
    genre_id bigint DEFAULT nextval('dionysus.genre_genre_id_seq'::regclass)
);


ALTER TABLE dionysus.genre_rating OWNER TO ares;

--
-- Name: movie_history; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_history (
    user_id bigint NOT NULL,
    movie_id bigint NOT NULL,
    watch_date date DEFAULT CURRENT_DATE,
    watch_time time without time zone DEFAULT CURRENT_TIME,
    minutes_watched integer
);


ALTER TABLE dionysus.movie_history OWNER TO ares;

--
-- Name: series_history; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_history (
    user_id bigint NOT NULL,
    episode_id bigint NOT NULL,
    watch_date date DEFAULT CURRENT_DATE,
    watch_time time without time zone DEFAULT CURRENT_TIME,
    minutes_watched integer
);


ALTER TABLE dionysus.series_history OWNER TO ares;

--
-- Name: history; Type: VIEW; Schema: dionysus; Owner: ares
--

CREATE VIEW dionysus.history AS
 SELECT movie_history.user_id,
    movie_history.movie_id,
    NULL::bigint AS episode_id,
    movie_history.watch_date,
    movie_history.watch_time
   FROM dionysus.movie_history
UNION ALL
 SELECT series_history.user_id,
    NULL::bigint AS movie_id,
    series_history.episode_id,
    series_history.watch_date,
    series_history.watch_time
   FROM dionysus.series_history
  WHERE (series_history.user_id = 1)
  ORDER BY 5 DESC;


ALTER TABLE dionysus.history OWNER TO ares;

--
-- Name: imdb; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.imdb (
    imdb_id character varying(100) NOT NULL,
    rating real,
    vote integer
);


ALTER TABLE dionysus.imdb OWNER TO ares;

--
-- Name: movie; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie (
    movie_id bigint NOT NULL,
    movie_name character varying(100),
    movie_wallpaper character varying(480),
    movie_release_date integer,
    summery character varying(480),
    trailer character varying(480),
    pg_rating character varying(20),
    movie_length integer,
    budget integer,
    revenue bigint,
    og_language character varying(20),
    imdb_id character varying(100)
);


ALTER TABLE dionysus.movie OWNER TO ares;

--
-- Name: movie_cast; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_cast (
    actor_id bigint NOT NULL,
    movie_id bigint NOT NULL,
    actor_role character varying(100)
);


ALTER TABLE dionysus.movie_cast OWNER TO ares;

--
-- Name: movie_cast_actor_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_cast_actor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_cast_actor_id_seq OWNER TO ares;

--
-- Name: movie_cast_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_cast_actor_id_seq OWNED BY dionysus.movie_cast.actor_id;


--
-- Name: movie_cast_movie_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_cast_movie_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_cast_movie_id_seq OWNER TO ares;

--
-- Name: movie_cast_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_cast_movie_id_seq OWNED BY dionysus.movie_cast.movie_id;


--
-- Name: movie_movie_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_movie_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_movie_id_seq OWNER TO ares;

--
-- Name: movie_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_movie_id_seq OWNED BY dionysus.movie.movie_id;


--
-- Name: movie_directors; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_directors (
    movie_id bigint DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass),
    director_id bigint NOT NULL
);


ALTER TABLE dionysus.movie_directors OWNER TO ares;

--
-- Name: movie_directors_director_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_directors_director_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_directors_director_id_seq OWNER TO ares;

--
-- Name: movie_directors_director_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_directors_director_id_seq OWNED BY dionysus.movie_directors.director_id;


--
-- Name: movie_genres; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_genres (
    genre_id bigint NOT NULL,
    movie_id bigint NOT NULL
);


ALTER TABLE dionysus.movie_genres OWNER TO ares;

--
-- Name: movie_genres_genre_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_genres_genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_genres_genre_id_seq OWNER TO ares;

--
-- Name: movie_genres_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_genres_genre_id_seq OWNED BY dionysus.movie_genres.genre_id;


--
-- Name: movie_genres_movie_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_genres_movie_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_genres_movie_id_seq OWNER TO ares;

--
-- Name: movie_genres_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_genres_movie_id_seq OWNED BY dionysus.movie_genres.movie_id;


--
-- Name: movie_history_movie_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_history_movie_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_history_movie_id_seq OWNER TO ares;

--
-- Name: movie_history_movie_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_history_movie_id_seq OWNED BY dionysus.movie_history.movie_id;


--
-- Name: movie_history_user_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_history_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_history_user_id_seq OWNER TO ares;

--
-- Name: movie_history_user_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_history_user_id_seq OWNED BY dionysus.movie_history.user_id;


--
-- Name: movie_production_company; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_production_company (
    movie_id bigint DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass),
    production_company_id bigint NOT NULL
);


ALTER TABLE dionysus.movie_production_company OWNER TO ares;

--
-- Name: movie_production_company_production_company_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_production_company_production_company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_production_company_production_company_id_seq OWNER TO ares;

--
-- Name: movie_production_company_production_company_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_production_company_production_company_id_seq OWNED BY dionysus.movie_production_company.production_company_id;


--
-- Name: movie_rating; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_rating (
    movie_id bigint DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass),
    user_id bigint DEFAULT nextval('dionysus.users_user_id_seq'::regclass),
    rating integer
);


ALTER TABLE dionysus.movie_rating OWNER TO ares;

--
-- Name: movie_servers; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_servers (
    server_id bigint NOT NULL,
    movie_id bigint DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass),
    url character varying(480) NOT NULL
);


ALTER TABLE dionysus.movie_servers OWNER TO ares;

--
-- Name: movie_servers_server_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_servers_server_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_servers_server_id_seq OWNER TO ares;

--
-- Name: movie_servers_server_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_servers_server_id_seq OWNED BY dionysus.movie_servers.server_id;


--
-- Name: movie_writers; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.movie_writers (
    writer_id bigint NOT NULL,
    movie_id bigint DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass)
);


ALTER TABLE dionysus.movie_writers OWNER TO ares;

--
-- Name: movie_writers_writer_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.movie_writers_writer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.movie_writers_writer_id_seq OWNER TO ares;

--
-- Name: movie_writers_writer_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.movie_writers_writer_id_seq OWNED BY dionysus.movie_writers.writer_id;


--
-- Name: production_company; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.production_company (
    production_company_id bigint NOT NULL,
    name character varying(100) NOT NULL,
    image character varying(480)
);


ALTER TABLE dionysus.production_company OWNER TO ares;

--
-- Name: production_company_production_company_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.production_company_production_company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.production_company_production_company_id_seq OWNER TO ares;

--
-- Name: production_company_production_company_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.production_company_production_company_id_seq OWNED BY dionysus.production_company.production_company_id;


--
-- Name: season; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.season (
    season_id bigint NOT NULL,
    series_id bigint NOT NULL,
    season_number integer NOT NULL,
    summery character varying(480),
    season_wallpaper character varying(480),
    trailer character varying(480)
);


ALTER TABLE dionysus.season OWNER TO ares;

--
-- Name: season_season_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.season_season_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.season_season_id_seq OWNER TO ares;

--
-- Name: season_season_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.season_season_id_seq OWNED BY dionysus.season.season_id;


--
-- Name: season_series_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.season_series_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.season_series_id_seq OWNER TO ares;

--
-- Name: season_series_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.season_series_id_seq OWNED BY dionysus.season.series_id;


--
-- Name: series; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series (
    series_id bigint NOT NULL,
    series_name character varying(100) NOT NULL,
    release_date integer,
    series_wallpaper character varying(480),
    summery character varying(480),
    trailer character varying(480),
    pg_rating character varying(20),
    og_language character varying(20),
    imdb_id character varying(100)
);


ALTER TABLE dionysus.series OWNER TO ares;

--
-- Name: series_cast; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_cast (
    actor_id bigint NOT NULL,
    series_id bigint NOT NULL,
    actor_role character varying(100)
);


ALTER TABLE dionysus.series_cast OWNER TO ares;

--
-- Name: series_cast_actor_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_cast_actor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_cast_actor_id_seq OWNER TO ares;

--
-- Name: series_cast_actor_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_cast_actor_id_seq OWNED BY dionysus.series_cast.actor_id;


--
-- Name: series_cast_series_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_cast_series_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_cast_series_id_seq OWNER TO ares;

--
-- Name: series_cast_series_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_cast_series_id_seq OWNED BY dionysus.series_cast.series_id;


--
-- Name: series_series_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_series_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_series_id_seq OWNER TO ares;

--
-- Name: series_series_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_series_id_seq OWNED BY dionysus.series.series_id;


--
-- Name: series_directors; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_directors (
    director_id bigint NOT NULL,
    series_id bigint DEFAULT nextval('dionysus.series_series_id_seq'::regclass)
);


ALTER TABLE dionysus.series_directors OWNER TO ares;

--
-- Name: series_directors_director_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_directors_director_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_directors_director_id_seq OWNER TO ares;

--
-- Name: series_directors_director_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_directors_director_id_seq OWNED BY dionysus.series_directors.director_id;


--
-- Name: series_genres; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_genres (
    genre_id bigint NOT NULL,
    series_id bigint NOT NULL
);


ALTER TABLE dionysus.series_genres OWNER TO ares;

--
-- Name: series_genres_genre_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_genres_genre_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_genres_genre_id_seq OWNER TO ares;

--
-- Name: series_genres_genre_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_genres_genre_id_seq OWNED BY dionysus.series_genres.genre_id;


--
-- Name: series_genres_series_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_genres_series_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_genres_series_id_seq OWNER TO ares;

--
-- Name: series_genres_series_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_genres_series_id_seq OWNED BY dionysus.series_genres.series_id;


--
-- Name: series_history_episode_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_history_episode_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_history_episode_id_seq OWNER TO ares;

--
-- Name: series_history_episode_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_history_episode_id_seq OWNED BY dionysus.series_history.episode_id;


--
-- Name: series_history_user_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_history_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_history_user_id_seq OWNER TO ares;

--
-- Name: series_history_user_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_history_user_id_seq OWNED BY dionysus.series_history.user_id;


--
-- Name: series_production_company; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_production_company (
    series_id bigint DEFAULT nextval('dionysus.series_series_id_seq'::regclass),
    production_company_id bigint NOT NULL
);


ALTER TABLE dionysus.series_production_company OWNER TO ares;

--
-- Name: series_production_company_production_company_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_production_company_production_company_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_production_company_production_company_id_seq OWNER TO ares;

--
-- Name: series_production_company_production_company_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_production_company_production_company_id_seq OWNED BY dionysus.series_production_company.production_company_id;


--
-- Name: series_rating; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_rating (
    rating integer,
    user_id bigint DEFAULT nextval('dionysus.users_user_id_seq'::regclass),
    series_id bigint DEFAULT nextval('dionysus.series_series_id_seq'::regclass)
);


ALTER TABLE dionysus.series_rating OWNER TO ares;

--
-- Name: series_servers; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_servers (
    episode_id bigint DEFAULT nextval('dionysus.episode_episode_id_seq'::regclass),
    server_id bigint NOT NULL,
    url character varying(480) NOT NULL
);


ALTER TABLE dionysus.series_servers OWNER TO ares;

--
-- Name: series_servers_server_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_servers_server_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_servers_server_id_seq OWNER TO ares;

--
-- Name: series_servers_server_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_servers_server_id_seq OWNED BY dionysus.series_servers.server_id;


--
-- Name: series_writers; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.series_writers (
    series_id bigint DEFAULT nextval('dionysus.series_series_id_seq'::regclass),
    writer_id bigint NOT NULL
);


ALTER TABLE dionysus.series_writers OWNER TO ares;

--
-- Name: series_writers_writer_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.series_writers_writer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.series_writers_writer_id_seq OWNER TO ares;

--
-- Name: series_writers_writer_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.series_writers_writer_id_seq OWNED BY dionysus.series_writers.writer_id;


--
-- Name: servers; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.servers (
    server_id bigint NOT NULL,
    server_name character varying(100),
    server_url character varying(480)
);


ALTER TABLE dionysus.servers OWNER TO ares;

--
-- Name: servers_server_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.servers_server_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.servers_server_id_seq OWNER TO ares;

--
-- Name: servers_server_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.servers_server_id_seq OWNED BY dionysus.servers.server_id;


--
-- Name: writers; Type: TABLE; Schema: dionysus; Owner: ares
--

CREATE TABLE dionysus.writers (
    writer_id bigint NOT NULL,
    writer_first_name character varying(100) NOT NULL,
    writer_last_name character varying(100) NOT NULL,
    writer_image character varying(480)
);


ALTER TABLE dionysus.writers OWNER TO ares;

--
-- Name: writers_writer_id_seq; Type: SEQUENCE; Schema: dionysus; Owner: ares
--

CREATE SEQUENCE dionysus.writers_writer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE dionysus.writers_writer_id_seq OWNER TO ares;

--
-- Name: writers_writer_id_seq; Type: SEQUENCE OWNED BY; Schema: dionysus; Owner: ares
--

ALTER SEQUENCE dionysus.writers_writer_id_seq OWNED BY dionysus.writers.writer_id;


--
-- Name: actor actor_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.actor ALTER COLUMN actor_id SET DEFAULT nextval('dionysus.actor_actor_id_seq'::regclass);


--
-- Name: directors director_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.directors ALTER COLUMN director_id SET DEFAULT nextval('dionysus.directors_director_id_seq'::regclass);


--
-- Name: episode episode_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode ALTER COLUMN episode_id SET DEFAULT nextval('dionysus.episode_episode_id_seq'::regclass);


--
-- Name: episode series_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode ALTER COLUMN series_id SET DEFAULT nextval('dionysus.episode_series_id_seq'::regclass);


--
-- Name: episode season_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode ALTER COLUMN season_id SET DEFAULT nextval('dionysus.episode_season_id_seq'::regclass);


--
-- Name: genre genre_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.genre ALTER COLUMN genre_id SET DEFAULT nextval('dionysus.genre_genre_id_seq'::regclass);


--
-- Name: movie movie_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie ALTER COLUMN movie_id SET DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass);


--
-- Name: movie_cast actor_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_cast ALTER COLUMN actor_id SET DEFAULT nextval('dionysus.movie_cast_actor_id_seq'::regclass);


--
-- Name: movie_cast movie_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_cast ALTER COLUMN movie_id SET DEFAULT nextval('dionysus.movie_cast_movie_id_seq'::regclass);


--
-- Name: movie_directors director_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_directors ALTER COLUMN director_id SET DEFAULT nextval('dionysus.movie_directors_director_id_seq'::regclass);


--
-- Name: movie_genres genre_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_genres ALTER COLUMN genre_id SET DEFAULT nextval('dionysus.movie_genres_genre_id_seq'::regclass);


--
-- Name: movie_genres movie_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_genres ALTER COLUMN movie_id SET DEFAULT nextval('dionysus.movie_genres_movie_id_seq'::regclass);


--
-- Name: movie_history user_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_history ALTER COLUMN user_id SET DEFAULT nextval('dionysus.movie_history_user_id_seq'::regclass);


--
-- Name: movie_history movie_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_history ALTER COLUMN movie_id SET DEFAULT nextval('dionysus.movie_history_movie_id_seq'::regclass);


--
-- Name: movie_production_company production_company_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_production_company ALTER COLUMN production_company_id SET DEFAULT nextval('dionysus.movie_production_company_production_company_id_seq'::regclass);


--
-- Name: movie_servers server_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_servers ALTER COLUMN server_id SET DEFAULT nextval('dionysus.movie_servers_server_id_seq'::regclass);


--
-- Name: movie_writers writer_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_writers ALTER COLUMN writer_id SET DEFAULT nextval('dionysus.movie_writers_writer_id_seq'::regclass);


--
-- Name: production_company production_company_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.production_company ALTER COLUMN production_company_id SET DEFAULT nextval('dionysus.production_company_production_company_id_seq'::regclass);


--
-- Name: season season_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.season ALTER COLUMN season_id SET DEFAULT nextval('dionysus.season_season_id_seq'::regclass);


--
-- Name: season series_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.season ALTER COLUMN series_id SET DEFAULT nextval('dionysus.season_series_id_seq'::regclass);


--
-- Name: series series_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series ALTER COLUMN series_id SET DEFAULT nextval('dionysus.series_series_id_seq'::regclass);


--
-- Name: series_cast actor_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_cast ALTER COLUMN actor_id SET DEFAULT nextval('dionysus.series_cast_actor_id_seq'::regclass);


--
-- Name: series_cast series_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_cast ALTER COLUMN series_id SET DEFAULT nextval('dionysus.series_cast_series_id_seq'::regclass);


--
-- Name: series_directors director_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_directors ALTER COLUMN director_id SET DEFAULT nextval('dionysus.series_directors_director_id_seq'::regclass);


--
-- Name: series_genres genre_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_genres ALTER COLUMN genre_id SET DEFAULT nextval('dionysus.series_genres_genre_id_seq'::regclass);


--
-- Name: series_genres series_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_genres ALTER COLUMN series_id SET DEFAULT nextval('dionysus.series_genres_series_id_seq'::regclass);


--
-- Name: series_history user_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_history ALTER COLUMN user_id SET DEFAULT nextval('dionysus.series_history_user_id_seq'::regclass);


--
-- Name: series_history episode_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_history ALTER COLUMN episode_id SET DEFAULT nextval('dionysus.series_history_episode_id_seq'::regclass);


--
-- Name: series_production_company production_company_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_production_company ALTER COLUMN production_company_id SET DEFAULT nextval('dionysus.series_production_company_production_company_id_seq'::regclass);


--
-- Name: series_servers server_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_servers ALTER COLUMN server_id SET DEFAULT nextval('dionysus.series_servers_server_id_seq'::regclass);


--
-- Name: series_writers writer_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_writers ALTER COLUMN writer_id SET DEFAULT nextval('dionysus.series_writers_writer_id_seq'::regclass);


--
-- Name: servers server_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.servers ALTER COLUMN server_id SET DEFAULT nextval('dionysus.servers_server_id_seq'::regclass);


--
-- Name: users user_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.users ALTER COLUMN user_id SET DEFAULT nextval('dionysus.users_user_id_seq'::regclass);


--
-- Name: writers writer_id; Type: DEFAULT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.writers ALTER COLUMN writer_id SET DEFAULT nextval('dionysus.writers_writer_id_seq'::regclass);


--
-- Data for Name: actor; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.actor (actor_id, actor_first_name, actor_last_name, actor_image) FROM stdin;
1	Robert	Downey Jr.	\N
2	Brad	Pit	\N
3	George	Clooney	\N
\.


--
-- Data for Name: directors; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.directors (director_first_name, director_last_name, director_image, director_id) FROM stdin;
\.


--
-- Data for Name: episode; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.episode (episode_id, series_id, season_id, episode_number, episode_name, episode_wallpaper, summery, release_date, episode_length) FROM stdin;
265	3	3	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
266	3	3	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
267	3	3	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
268	3	3	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
269	3	3	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
270	3	3	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
271	3	4	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
272	3	4	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
273	3	4	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
274	3	4	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
275	3	4	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
276	3	4	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
277	3	5	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
278	3	5	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
223	4	8	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
224	4	8	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
232	4	9	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
233	4	9	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
234	4	9	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
235	4	10	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
236	4	10	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
237	4	10	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
225	4	8	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
226	4	8	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
227	4	8	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
228	4	8	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
229	4	9	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
230	4	9	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
231	4	9	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
279	3	5	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
280	3	5	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
281	3	5	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
238	4	10	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
239	4	10	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
240	4	10	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
241	4	11	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
242	4	11	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
243	4	11	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
244	4	11	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
245	4	11	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
246	4	11	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
282	3	5	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
283	3	6	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
247	4	12	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
284	3	6	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
285	3	6	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
286	3	6	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
287	3	6	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
288	3	6	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
289	3	7	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
290	3	7	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
291	3	7	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
292	3	7	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
248	4	12	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
249	4	12	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
250	4	12	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
251	4	12	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
252	4	12	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
253	4	13	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
254	4	13	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
255	4	13	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
256	4	13	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
257	4	13	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
258	4	13	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
259	4	14	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
260	4	14	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
261	4	14	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
262	4	14	4	\N	ArcaneSeason1Wallpaper	\N	\N	\N
263	4	14	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
264	4	14	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
293	3	7	5	\N	ArcaneSeason1Wallpaper	\N	\N	\N
294	3	7	6	\N	ArcaneSeason1Wallpaper	\N	\N	\N
295	1	2	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
296	1	2	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
297	1	2	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
298	2	1	1	\N	ArcaneSeason1Wallpaper	\N	\N	\N
299	2	1	2	\N	ArcaneSeason1Wallpaper	\N	\N	\N
300	2	1	3	\N	ArcaneSeason1Wallpaper	\N	\N	\N
\.


--
-- Data for Name: genre; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.genre (genre_id, genre_name) FROM stdin;
1	Comedy
2	Action
3	Drama
4	Horror
5	Thriller
\.


--
-- Data for Name: genre_rating; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.genre_rating (rating, user_id, genre_id) FROM stdin;
\.


--
-- Data for Name: imdb; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.imdb (imdb_id, rating, vote) FROM stdin;
\.


--
-- Data for Name: movie; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie (movie_id, movie_name, movie_wallpaper, movie_release_date, summery, trailer, pg_rating, movie_length, budget, revenue, og_language, imdb_id) FROM stdin;
1	The Mechanist	\N	2004	\N	\N	\N	\N	\N	\N	\N	\N
2	Avengers	\N	2010	\N	\N	\N	\N	\N	\N	\N	\N
3	Ocean 11	\N	2010	\N	\N	\N	\N	\N	\N	\N	\N
4	Fight Club	\N	1999	\N	\N	\N	\N	\N	\N	\N	\N
5	Black Swan	\N	2014	\N	\N	\N	\N	\N	\N	\N	\N
\.


--
-- Data for Name: movie_cast; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_cast (actor_id, movie_id, actor_role) FROM stdin;
\.


--
-- Data for Name: movie_directors; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_directors (movie_id, director_id) FROM stdin;
\.


--
-- Data for Name: movie_genres; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_genres (genre_id, movie_id) FROM stdin;
1	2
2	2
3	5
4	5
2	3
2	4
5	4
5	1
3	1
\.


--
-- Data for Name: movie_history; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_history (user_id, movie_id, watch_date, watch_time, minutes_watched) FROM stdin;
1	1	2022-06-08	16:44:11.561194	\N
1	2	2022-06-08	16:44:35.263923	\N
2	2	2022-06-08	16:47:22.127102	\N
2	4	2022-06-08	16:47:22.238625	\N
\.


--
-- Data for Name: movie_production_company; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_production_company (movie_id, production_company_id) FROM stdin;
\.


--
-- Data for Name: movie_rating; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_rating (movie_id, user_id, rating) FROM stdin;
\.


--
-- Data for Name: movie_servers; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_servers (server_id, movie_id, url) FROM stdin;
\.


--
-- Data for Name: movie_writers; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.movie_writers (writer_id, movie_id) FROM stdin;
\.


--
-- Data for Name: production_company; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.production_company (production_company_id, name, image) FROM stdin;
\.


--
-- Data for Name: season; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.season (season_id, series_id, season_number, summery, season_wallpaper, trailer) FROM stdin;
1	2	1	\N	ArcaneSeason1Wallpaper	\N
2	1	1	\N	\N	\N
3	3	1	\N	\N	\N
4	3	2	\N	\N	\N
5	3	3	\N	\N	\N
6	3	4	\N	\N	\N
7	3	5	\N	\N	\N
8	4	1	\N	\N	\N
9	4	2	\N	\N	\N
10	4	3	\N	\N	\N
11	4	4	\N	\N	\N
12	4	5	\N	\N	\N
13	4	6	\N	\N	\N
14	4	7	\N	\N	\N
\.


--
-- Data for Name: series; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series (series_id, series_name, release_date, series_wallpaper, summery, trailer, pg_rating, og_language, imdb_id) FROM stdin;
1	WandaVision	\N	WVDefWallpaper	\N	\N	\N	\N	\N
2	Arcane	\N	ArcaneDefWallpaper	\N	\N	\N	\N	\N
3	Rick And Morty	\N	RAMDefWallpaper	\N	\N	\N	\N	\N
4	Friends	\N	FriendsDefWallpaper	\N	\N	\N	\N	\N
\.


--
-- Data for Name: series_cast; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_cast (actor_id, series_id, actor_role) FROM stdin;
\.


--
-- Data for Name: series_directors; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_directors (director_id, series_id) FROM stdin;
\.


--
-- Data for Name: series_genres; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_genres (genre_id, series_id) FROM stdin;
3	1
2	1
2	2
3	2
1	3
1	4
\.


--
-- Data for Name: series_history; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_history (user_id, episode_id, watch_date, watch_time, minutes_watched) FROM stdin;
1	295	2022-06-08	16:49:12.380807	\N
1	296	2022-06-08	16:49:27.64975	\N
1	297	2022-06-08	16:49:31.937869	\N
1	265	2022-06-08	16:51:59.704319	\N
1	266	2022-06-08	16:51:59.730802	\N
1	271	2022-06-08	16:51:59.758338	\N
1	272	2022-06-08	16:51:59.799695	\N
1	266	2022-06-08	16:54:36.873644	\N
1	266	2022-06-08	16:54:42.251826	\N
1	266	2022-06-08	16:54:50.235715	\N
\.


--
-- Data for Name: series_production_company; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_production_company (series_id, production_company_id) FROM stdin;
\.


--
-- Data for Name: series_rating; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_rating (rating, user_id, series_id) FROM stdin;
\.


--
-- Data for Name: series_servers; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_servers (episode_id, server_id, url) FROM stdin;
\.


--
-- Data for Name: series_writers; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.series_writers (series_id, writer_id) FROM stdin;
\.


--
-- Data for Name: servers; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.servers (server_id, server_name, server_url) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.users (user_id, user_name, user_email, user_password) FROM stdin;
1	Abbas	abbas.mj.srour@gmail.com	\N
2	Mark	Mark@gmail.com	\N
3	Alex	Alex@gmail.com	\N
4	Mark	mark@gmail.com	\N
10	Jay	jay@gmail.com	NewDay12345
12	Ali	ali@gmail.com	NewDay12345
14	Abbas	abbas.gentleman@gmail.com	\N
\.


--
-- Data for Name: writers; Type: TABLE DATA; Schema: dionysus; Owner: ares
--

COPY dionysus.writers (writer_id, writer_first_name, writer_last_name, writer_image) FROM stdin;
\.


--
-- Name: actor_actor_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.actor_actor_id_seq', 3, true);


--
-- Name: directors_director_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.directors_director_id_seq', 1, false);


--
-- Name: episode_episode_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.episode_episode_id_seq', 300, true);


--
-- Name: episode_season_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.episode_season_id_seq', 1, false);


--
-- Name: episode_series_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.episode_series_id_seq', 1, false);


--
-- Name: genre_genre_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.genre_genre_id_seq', 5, true);


--
-- Name: movie_cast_actor_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_cast_actor_id_seq', 1, false);


--
-- Name: movie_cast_movie_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_cast_movie_id_seq', 1, false);


--
-- Name: movie_directors_director_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_directors_director_id_seq', 1, false);


--
-- Name: movie_genres_genre_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_genres_genre_id_seq', 1, false);


--
-- Name: movie_genres_movie_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_genres_movie_id_seq', 1, false);


--
-- Name: movie_history_movie_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_history_movie_id_seq', 1, false);


--
-- Name: movie_history_user_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_history_user_id_seq', 1, false);


--
-- Name: movie_movie_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_movie_id_seq', 5, true);


--
-- Name: movie_production_company_production_company_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_production_company_production_company_id_seq', 1, false);


--
-- Name: movie_servers_server_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_servers_server_id_seq', 1, false);


--
-- Name: movie_writers_writer_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.movie_writers_writer_id_seq', 1, false);


--
-- Name: production_company_production_company_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.production_company_production_company_id_seq', 1, false);


--
-- Name: season_season_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.season_season_id_seq', 14, true);


--
-- Name: season_series_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.season_series_id_seq', 1, false);


--
-- Name: series_cast_actor_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_cast_actor_id_seq', 1, false);


--
-- Name: series_cast_series_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_cast_series_id_seq', 1, false);


--
-- Name: series_directors_director_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_directors_director_id_seq', 1, false);


--
-- Name: series_genres_genre_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_genres_genre_id_seq', 1, false);


--
-- Name: series_genres_series_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_genres_series_id_seq', 1, false);


--
-- Name: series_history_episode_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_history_episode_id_seq', 1, false);


--
-- Name: series_history_user_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_history_user_id_seq', 1, false);


--
-- Name: series_production_company_production_company_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_production_company_production_company_id_seq', 1, false);


--
-- Name: series_series_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_series_id_seq', 4, true);


--
-- Name: series_servers_server_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_servers_server_id_seq', 1, false);


--
-- Name: series_writers_writer_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.series_writers_writer_id_seq', 1, false);


--
-- Name: servers_server_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.servers_server_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.users_user_id_seq', 42, true);


--
-- Name: writers_writer_id_seq; Type: SEQUENCE SET; Schema: dionysus; Owner: ares
--

SELECT pg_catalog.setval('dionysus.writers_writer_id_seq', 1, false);


--
-- Name: episode episode_episode_number_season_id_series_id_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode
    ADD CONSTRAINT episode_episode_number_season_id_series_id_key UNIQUE (episode_number, season_id, series_id);


--
-- Name: movie_genres movie_genres_genre_id_movie_id_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_genres
    ADD CONSTRAINT movie_genres_genre_id_movie_id_key UNIQUE (genre_id, movie_id);


--
-- Name: movie movie_movie_name_movie_release_year_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie
    ADD CONSTRAINT movie_movie_name_movie_release_year_key UNIQUE (movie_name, movie_release_date);


--
-- Name: actor pk_actor; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.actor
    ADD CONSTRAINT pk_actor PRIMARY KEY (actor_id);


--
-- Name: directors pk_directors; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.directors
    ADD CONSTRAINT pk_directors PRIMARY KEY (director_id);


--
-- Name: episode pk_episode; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode
    ADD CONSTRAINT pk_episode PRIMARY KEY (episode_id);


--
-- Name: genre pk_genre; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.genre
    ADD CONSTRAINT pk_genre PRIMARY KEY (genre_id);


--
-- Name: imdb pk_imdb_movie; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.imdb
    ADD CONSTRAINT pk_imdb_movie PRIMARY KEY (imdb_id);


--
-- Name: movie pk_movie; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie
    ADD CONSTRAINT pk_movie PRIMARY KEY (movie_id);


--
-- Name: production_company pk_production_company; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.production_company
    ADD CONSTRAINT pk_production_company PRIMARY KEY (production_company_id);


--
-- Name: season pk_season; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.season
    ADD CONSTRAINT pk_season PRIMARY KEY (season_id);


--
-- Name: series pk_series; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series
    ADD CONSTRAINT pk_series PRIMARY KEY (series_id);


--
-- Name: servers pk_servers; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.servers
    ADD CONSTRAINT pk_servers PRIMARY KEY (server_id);


--
-- Name: users pk_users; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.users
    ADD CONSTRAINT pk_users PRIMARY KEY (user_id);


--
-- Name: writers pk_writers; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.writers
    ADD CONSTRAINT pk_writers PRIMARY KEY (writer_id);


--
-- Name: season season_season_number_series_id_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.season
    ADD CONSTRAINT season_season_number_series_id_key UNIQUE (season_number, series_id);


--
-- Name: series_cast series_cast_actor_id_actor_role_series_id_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_cast
    ADD CONSTRAINT series_cast_actor_id_actor_role_series_id_key UNIQUE (actor_id, actor_role, series_id);


--
-- Name: series_genres series_genres_genre_id_series_id_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_genres
    ADD CONSTRAINT series_genres_genre_id_series_id_key UNIQUE (genre_id, series_id);


--
-- Name: series series_series_name_series_release_year_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series
    ADD CONSTRAINT series_series_name_series_release_year_key UNIQUE (series_name, release_date);


--
-- Name: genre unique_genre_name; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.genre
    ADD CONSTRAINT unique_genre_name UNIQUE (genre_name);


--
-- Name: movie_cast unique_role; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_cast
    ADD CONSTRAINT unique_role UNIQUE (actor_id, movie_id, actor_role);


--
-- Name: users users_user_email_key; Type: CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.users
    ADD CONSTRAINT users_user_email_key UNIQUE (user_email);


--
-- Name: users change_email_lowercase_trigger; Type: TRIGGER; Schema: dionysus; Owner: ares
--

CREATE TRIGGER change_email_lowercase_trigger BEFORE INSERT OR UPDATE ON dionysus.users FOR EACH ROW EXECUTE FUNCTION dionysus.change_email_lowercase();


--
-- Name: episode change_wallpaper_trigger; Type: TRIGGER; Schema: dionysus; Owner: ares
--

CREATE TRIGGER change_wallpaper_trigger AFTER INSERT OR UPDATE ON dionysus.episode FOR EACH ROW EXECUTE FUNCTION dionysus.change_wallpaper();


--
-- Name: users validate_email_trigger; Type: TRIGGER; Schema: dionysus; Owner: ares
--

CREATE TRIGGER validate_email_trigger BEFORE INSERT OR UPDATE ON dionysus.users FOR EACH ROW EXECUTE FUNCTION dionysus.validate_email();


--
-- Name: episode fk_episode_season; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode
    ADD CONSTRAINT fk_episode_season FOREIGN KEY (season_id) REFERENCES dionysus.season(season_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: episode fk_episode_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.episode
    ADD CONSTRAINT fk_episode_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: genre_rating fk_genre_rating_genre; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.genre_rating
    ADD CONSTRAINT fk_genre_rating_genre FOREIGN KEY (genre_id) REFERENCES dionysus.genre(genre_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: genre_rating fk_genre_rating_users; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.genre_rating
    ADD CONSTRAINT fk_genre_rating_users FOREIGN KEY (user_id) REFERENCES dionysus.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_cast fk_movie_cast_actor; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_cast
    ADD CONSTRAINT fk_movie_cast_actor FOREIGN KEY (actor_id) REFERENCES dionysus.actor(actor_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_cast fk_movie_cast_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_cast
    ADD CONSTRAINT fk_movie_cast_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_directors fk_movie_directors_directors; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_directors
    ADD CONSTRAINT fk_movie_directors_directors FOREIGN KEY (director_id) REFERENCES dionysus.directors(director_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_directors fk_movie_directors_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_directors
    ADD CONSTRAINT fk_movie_directors_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_genres fk_movie_genres_genre; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_genres
    ADD CONSTRAINT fk_movie_genres_genre FOREIGN KEY (genre_id) REFERENCES dionysus.genre(genre_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_genres fk_movie_genres_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_genres
    ADD CONSTRAINT fk_movie_genres_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_history fk_movie_history_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_history
    ADD CONSTRAINT fk_movie_history_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_history fk_movie_history_users; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_history
    ADD CONSTRAINT fk_movie_history_users FOREIGN KEY (user_id) REFERENCES dionysus.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie fk_movie_imdb; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie
    ADD CONSTRAINT fk_movie_imdb FOREIGN KEY (imdb_id) REFERENCES dionysus.imdb(imdb_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: movie_production_company fk_movie_production_company_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_production_company
    ADD CONSTRAINT fk_movie_production_company_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_production_company fk_movie_production_company_production_company; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_production_company
    ADD CONSTRAINT fk_movie_production_company_production_company FOREIGN KEY (production_company_id) REFERENCES dionysus.production_company(production_company_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_rating fk_movie_rating_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_rating
    ADD CONSTRAINT fk_movie_rating_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_rating fk_movie_rating_users; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_rating
    ADD CONSTRAINT fk_movie_rating_users FOREIGN KEY (user_id) REFERENCES dionysus.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_servers fk_movie_servers_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_servers
    ADD CONSTRAINT fk_movie_servers_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_servers fk_movie_servers_servers; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_servers
    ADD CONSTRAINT fk_movie_servers_servers FOREIGN KEY (server_id) REFERENCES dionysus.servers(server_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_writers fk_movie_writers_movie; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_writers
    ADD CONSTRAINT fk_movie_writers_movie FOREIGN KEY (movie_id) REFERENCES dionysus.movie(movie_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: movie_writers fk_movie_writers_writers; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.movie_writers
    ADD CONSTRAINT fk_movie_writers_writers FOREIGN KEY (writer_id) REFERENCES dionysus.writers(writer_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: season fk_season_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.season
    ADD CONSTRAINT fk_season_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_cast fk_series_cast_actor; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_cast
    ADD CONSTRAINT fk_series_cast_actor FOREIGN KEY (actor_id) REFERENCES dionysus.actor(actor_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_cast fk_series_cast_episode; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_cast
    ADD CONSTRAINT fk_series_cast_episode FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_directors fk_series_directors_directors; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_directors
    ADD CONSTRAINT fk_series_directors_directors FOREIGN KEY (director_id) REFERENCES dionysus.directors(director_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_directors fk_series_directors_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_directors
    ADD CONSTRAINT fk_series_directors_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_genres fk_series_genres_genre; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_genres
    ADD CONSTRAINT fk_series_genres_genre FOREIGN KEY (genre_id) REFERENCES dionysus.genre(genre_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_genres fk_series_genres_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_genres
    ADD CONSTRAINT fk_series_genres_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_history fk_series_history_episode; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_history
    ADD CONSTRAINT fk_series_history_episode FOREIGN KEY (episode_id) REFERENCES dionysus.episode(episode_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_history fk_series_history_users; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_history
    ADD CONSTRAINT fk_series_history_users FOREIGN KEY (user_id) REFERENCES dionysus.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series fk_series_imdb; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series
    ADD CONSTRAINT fk_series_imdb FOREIGN KEY (imdb_id) REFERENCES dionysus.imdb(imdb_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: series_production_company fk_series_production_company_production_company; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_production_company
    ADD CONSTRAINT fk_series_production_company_production_company FOREIGN KEY (production_company_id) REFERENCES dionysus.production_company(production_company_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_production_company fk_series_production_company_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_production_company
    ADD CONSTRAINT fk_series_production_company_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_rating fk_series_rating_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_rating
    ADD CONSTRAINT fk_series_rating_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_rating fk_series_rating_users; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_rating
    ADD CONSTRAINT fk_series_rating_users FOREIGN KEY (user_id) REFERENCES dionysus.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_servers fk_series_servers_episode; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_servers
    ADD CONSTRAINT fk_series_servers_episode FOREIGN KEY (episode_id) REFERENCES dionysus.episode(episode_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_servers fk_series_servers_servers; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_servers
    ADD CONSTRAINT fk_series_servers_servers FOREIGN KEY (server_id) REFERENCES dionysus.servers(server_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_writers fk_series_writers_series; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_writers
    ADD CONSTRAINT fk_series_writers_series FOREIGN KEY (series_id) REFERENCES dionysus.series(series_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: series_writers fk_series_writers_writers; Type: FK CONSTRAINT; Schema: dionysus; Owner: ares
--

ALTER TABLE ONLY dionysus.series_writers
    ADD CONSTRAINT fk_series_writers_writers FOREIGN KEY (writer_id) REFERENCES dionysus.writers(writer_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

