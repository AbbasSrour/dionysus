create table actor
(
    actor_id         bigserial
        constraint pk_actor
            primary key,
    actor_first_name varchar(100),
    actor_last_name  varchar(100),
    actor_image      varchar(480)
);

alter table actor
    owner to ares;

create table genre
(
    genre_id   bigserial
        constraint pk_genre
            primary key,
    genre_name varchar(100)
        constraint unique_genre_name
            unique
);

alter table genre
    owner to ares;

create table users
(
    user_id       bigserial
        constraint pk_users
            primary key,
    user_name     varchar(100),
    user_email    varchar(480)
        unique,
    user_password varchar(480)
);

alter table users
    owner to ares;

create table genre_rating
(
    rating   integer,
    user_id  bigint default nextval('dionysus.users_user_id_seq'::regclass)
        constraint fk_genre_rating_users
            references users
            on update cascade on delete cascade,
    genre_id bigint default nextval('dionysus.genre_genre_id_seq'::regclass)
        constraint fk_genre_rating_genre
            references genre
            on update cascade on delete cascade
);

alter table genre_rating
    owner to ares;

create table directors
(
    director_first_name varchar(100) not null,
    director_last_name  varchar(100),
    director_image      varchar(480),
    director_id         bigserial
        constraint pk_directors
            primary key
);

alter table directors
    owner to ares;

create table writers
(
    writer_id         bigserial
        constraint pk_writers
            primary key,
    writer_first_name varchar(100) not null,
    writer_last_name  varchar(100) not null,
    writer_image      varchar(480)
);

alter table writers
    owner to ares;

create table servers
(
    server_id   bigserial
        constraint pk_servers
            primary key,
    server_name varchar(100),
    server_url  varchar(480)
);

alter table servers
    owner to ares;

create table imdb
(
    imdb_id varchar(100) not null
        constraint pk_imdb_movie
            primary key,
    rating  real,
    vote    integer
);

alter table imdb
    owner to ares;

create table movie
(
    movie_id           bigserial
        constraint pk_movie
            primary key,
    movie_name         varchar(100),
    movie_wallpaper    varchar(480),
    movie_release_date integer,
    summery            varchar(480),
    trailer            varchar(480),
    pg_rating          varchar(20),
    movie_length       integer,
    budget             integer,
    revenue            bigint,
    og_language        varchar(20),
    imdb_id            varchar(100)
        constraint fk_movie_imdb
            references imdb
            on update cascade on delete cascade,
    constraint movie_movie_name_movie_release_year_key
        unique (movie_name, movie_release_date)
);

alter table movie
    owner to ares;

create table movie_cast
(
    actor_id   bigserial
        constraint fk_movie_cast_actor
            references actor
            on update cascade on delete cascade,
    movie_id   bigserial
        constraint fk_movie_cast_movie
            references movie
            on update cascade on delete cascade,
    actor_role varchar(100),
    constraint unique_role
        unique (actor_id, movie_id, actor_role)
);

alter table movie_cast
    owner to ares;

create table movie_genres
(
    genre_id bigserial
        constraint fk_movie_genres_genre
            references genre
            on update cascade on delete cascade,
    movie_id bigserial
        constraint fk_movie_genres_movie
            references movie
            on update cascade on delete cascade,
    unique (genre_id, movie_id)
);

alter table movie_genres
    owner to ares;

create table series
(
    series_id        bigserial
        constraint pk_series
            primary key,
    series_name      varchar(100) not null,
    release_date     integer,
    series_wallpaper varchar(480),
    summery          varchar(480),
    trailer          varchar(480),
    pg_rating        varchar(20),
    og_language      varchar(20),
    imdb_id          varchar(100)
        constraint fk_series_imdb
            references imdb
            on update cascade on delete cascade,
    constraint series_series_name_series_release_year_key
        unique (series_name, release_date)
);

alter table series
    owner to ares;

create table series_genres
(
    genre_id  bigserial
        constraint fk_series_genres_genre
            references genre
            on update cascade on delete cascade,
    series_id bigserial
        constraint fk_series_genres_series
            references series
            on update cascade on delete cascade,
    unique (genre_id, series_id)
);

alter table series_genres
    owner to ares;

create table movie_history
(
    user_id         bigserial
        constraint fk_movie_history_users
            references users
            on update cascade on delete cascade,
    movie_id        bigserial
        constraint fk_movie_history_movie
            references movie
            on update cascade on delete cascade,
    watch_date      date default CURRENT_DATE,
    watch_time      time default CURRENT_TIME,
    minutes_watched integer
);

alter table movie_history
    owner to ares;

create table season
(
    season_id        bigserial
        constraint pk_season
            primary key,
    series_id        bigserial
        constraint fk_season_series
            references series
            on update cascade on delete cascade,
    season_number    integer not null,
    summery          varchar(480),
    season_wallpaper varchar(480),
    trailer          varchar(480),
    unique (season_number, series_id)
);

alter table season
    owner to ares;

create table series_cast
(
    actor_id   bigserial
        constraint fk_series_cast_actor
            references actor
            on update cascade on delete cascade,
    series_id  bigserial
        constraint fk_series_cast_episode
            references series
            on update cascade on delete cascade,
    actor_role varchar(100),
    unique (actor_id, actor_role, series_id)
);

alter table series_cast
    owner to ares;

create table episode
(
    episode_id        bigserial
        constraint pk_episode
            primary key,
    series_id         bigserial
        constraint fk_episode_series
            references series
            on update cascade on delete cascade,
    season_id         bigserial
        constraint fk_episode_season
            references season
            on update cascade on delete cascade,
    episode_number    integer not null,
    episode_name      varchar(100),
    episode_wallpaper varchar(480),
    summery           varchar(480),
    release_date      integer,
    episode_length    integer,
    unique (episode_number, season_id, series_id)
);

alter table episode
    owner to ares;

create table series_history
(
    user_id         bigserial
        constraint fk_series_history_users
            references users
            on update cascade on delete cascade,
    episode_id      bigserial
        constraint fk_series_history_episode
            references episode
            on update cascade on delete cascade,
    watch_date      date default CURRENT_DATE,
    watch_time      time default CURRENT_TIME,
    minutes_watched integer
);

alter table series_history
    owner to ares;

create table movie_rating
(
    movie_id bigint default nextval('dionysus.movie_movie_id_seq'::regclass)
        constraint fk_movie_rating_movie
            references movie
            on update cascade on delete cascade,
    user_id  bigint default nextval('dionysus.users_user_id_seq'::regclass)
        constraint fk_movie_rating_users
            references users
            on update cascade on delete cascade,
    rating   integer
);

alter table movie_rating
    owner to ares;

create table series_rating
(
    rating    integer,
    user_id   bigint default nextval('dionysus.users_user_id_seq'::regclass)
        constraint fk_series_rating_users
            references users
            on update cascade on delete cascade,
    series_id bigint default nextval('dionysus.series_series_id_seq'::regclass)
        constraint fk_series_rating_series
            references series
            on update cascade on delete cascade
);

alter table series_rating
    owner to ares;

create table movie_directors
(
    movie_id    bigint default nextval('dionysus.movie_movie_id_seq'::regclass)
        constraint fk_movie_directors_movie
            references movie
            on update cascade on delete cascade,
    director_id bigserial
        constraint fk_movie_directors_directors
            references directors
            on update cascade on delete cascade
);

alter table movie_directors
    owner to ares;

create table series_directors
(
    director_id bigserial
        constraint fk_series_directors_directors
            references directors
            on update cascade on delete cascade,
    series_id   bigint default nextval('dionysus.series_series_id_seq'::regclass)
        constraint fk_series_directors_series
            references series
            on update cascade on delete cascade
);

alter table series_directors
    owner to ares;

create table movie_writers
(
    writer_id bigserial
        constraint fk_movie_writers_writers
            references writers
            on update cascade on delete cascade,
    movie_id  bigint default nextval('dionysus.movie_movie_id_seq'::regclass)
        constraint fk_movie_writers_movie
            references movie
            on update cascade on delete cascade
);

alter table movie_writers
    owner to ares;

create table series_writers
(
    series_id bigint default nextval('dionysus.series_series_id_seq'::regclass)
        constraint fk_series_writers_series
            references series
            on update cascade on delete cascade,
    writer_id bigserial
        constraint fk_series_writers_writers
            references writers
            on update cascade on delete cascade
);

alter table series_writers
    owner to ares;

create table movie_servers
(
    server_id bigserial
        constraint fk_movie_servers_servers
            references servers
            on update cascade on delete cascade,
    movie_id  bigint default nextval('dionysus.movie_movie_id_seq'::regclass)
        constraint fk_movie_servers_movie
            references movie
            on update cascade on delete cascade,
    url       varchar(480) not null
);

alter table movie_servers
    owner to ares;

create table series_servers
(
    episode_id bigint default nextval('dionysus.episode_episode_id_seq'::regclass)
        constraint fk_series_servers_episode
            references episode
            on update cascade on delete cascade,
    server_id  bigserial
        constraint fk_series_servers_servers
            references servers
            on update cascade on delete cascade,
    url        varchar(480) not null
);

alter table series_servers
    owner to ares;

create table production_company
(
    production_company_id bigserial
        constraint pk_production_company
            primary key,
    name                  varchar(100) not null,
    image                 varchar(480)
);

alter table production_company
    owner to ares;

create table movie_production_company
(
    movie_id              bigint default nextval('dionysus.movie_movie_id_seq'::regclass)
        constraint fk_movie_production_company_movie
            references movie
            on update cascade on delete cascade,
    production_company_id bigserial
        constraint fk_movie_production_company_production_company
            references production_company
            on update cascade on delete cascade
);

alter table movie_production_company
    owner to ares;

create table series_production_company
(
    series_id             bigint default nextval('dionysus.series_series_id_seq'::regclass)
        constraint fk_series_production_company_series
            references series
            on update cascade on delete cascade,
    production_company_id bigserial
        constraint fk_series_production_company_production_company
            references production_company
            on update cascade on delete cascade
);

alter table series_production_company
    owner to ares;

create view history(user_id, movie_id, episode_id, watch_date, watch_time) as
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
WHERE series_history.user_id = 1
ORDER BY 5 DESC;

alter table history
    owner to ares;

create function change_wallpaper() returns trigger
    language plpgsql
as
$$
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

alter function change_wallpaper() owner to ares;

create trigger change_wallpaper_trigger
    after insert or update
    on episode
    for each row
execute procedure change_wallpaper();

create function change_email_lowercase() returns trigger
    language plpgsql
as
$$
BEGIN
        NEW.user_email = lower(NEW.user_email);
        RETURN NEW;
    END;
$$;

alter function change_email_lowercase() owner to ares;

create trigger change_email_lowercase_trigger
    before insert or update
    on users
    for each row
execute procedure change_email_lowercase();

create function validate_email() returns trigger
    language plpgsql
as
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
$$;

alter function validate_email() owner to ares;

create trigger validate_email_trigger
    before insert or update
    on users
    for each row
execute procedure validate_email();


