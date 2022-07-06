create table if not exists actor
(
    actor_id         bigserial,
    actor_first_name varchar(100),
    actor_last_name  varchar(100),
    actor_image      varchar(480),
    constraint pk_actor
        primary key (actor_id)
);

create table if not exists genre
(
    genre_id   bigserial,
    genre_name varchar(100),
    constraint pk_genre
        primary key (genre_id),
    constraint unique_genre_name
        unique (genre_name)
);

create table if not exists users
(
    user_id       bigserial,
    user_name     varchar(100),
    user_email    varchar(480),
    user_password varchar(480),
    constraint pk_users
        primary key (user_id),
    constraint users_user_email_key
        unique (user_email)
);

create table if not exists genre_rating
(
    rating   integer,
    user_id  bigint default nextval('dionysus.users_user_id_seq'::regclass),
    genre_id bigint default nextval('dionysus.genre_genre_id_seq'::regclass),
    constraint fk_genre_rating_users
        foreign key (user_id) references users
            on update cascade on delete cascade,
    constraint fk_genre_rating_genre
        foreign key (genre_id) references genre
            on update cascade on delete cascade
);

create table if not exists directors
(
    director_first_name varchar(100) not null,
    director_last_name  varchar(100),
    director_image      varchar(480),
    director_id         bigserial,
    constraint pk_directors
        primary key (director_id)
);

create table if not exists writers
(
    writer_id         bigserial,
    writer_first_name varchar(100) not null,
    writer_last_name  varchar(100) not null,
    writer_image      varchar(480),
    constraint pk_writers
        primary key (writer_id)
);

create table if not exists servers
(
    server_id   bigserial,
    server_name varchar(100),
    server_url  varchar(480),
    constraint pk_servers
        primary key (server_id)
);

create table if not exists imdb
(
    imdb_id varchar(100) not null,
    rating  real,
    vote    integer,
    constraint pk_imdb_movie
        primary key (imdb_id)
);

create table if not exists movie
(
    movie_id           bigserial,
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
    imdb_id            varchar(100),
    constraint pk_movie
        primary key (movie_id),
    constraint movie_movie_name_movie_release_year_key
        unique (movie_name, movie_release_date),
    constraint fk_movie_imdb
        foreign key (imdb_id) references imdb
            on update cascade on delete restrict
);

create table if not exists movie_cast
(
    actor_id   bigserial,
    movie_id   bigserial,
    actor_role varchar(100),
    constraint unique_role
        unique (actor_id, movie_id, actor_role),
    constraint fk_movie_cast_actor
        foreign key (actor_id) references actor
            on update cascade on delete cascade,
    constraint fk_movie_cast_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade
);

create table if not exists movie_genres
(
    genre_id bigserial,
    movie_id bigserial,
    constraint movie_genres_genre_id_movie_id_key
        unique (genre_id, movie_id),
    constraint fk_movie_genres_genre
        foreign key (genre_id) references genre
            on update cascade on delete cascade,
    constraint fk_movie_genres_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade
);

create table if not exists series
(
    series_id        bigserial,
    series_name      varchar(100) not null,
    release_date     integer,
    series_wallpaper varchar(480),
    summery          varchar(480),
    trailer          varchar(480),
    pg_rating        varchar(20),
    og_language      varchar(20),
    imdb_id          varchar(100),
    constraint pk_series
        primary key (series_id),
    constraint series_series_name_series_release_year_key
        unique (series_name, release_date),
    constraint fk_series_imdb
        foreign key (imdb_id) references imdb
            on update cascade on delete restrict
);

create table if not exists series_genres
(
    genre_id  bigserial,
    series_id bigserial,
    constraint series_genres_genre_id_series_id_key
        unique (genre_id, series_id),
    constraint fk_series_genres_series
        foreign key (series_id) references series
            on update cascade on delete cascade,
    constraint fk_series_genres_genre
        foreign key (genre_id) references genre
            on update cascade on delete cascade
);

create table if not exists movie_history
(
    user_id         bigserial,
    movie_id        bigserial,
    watch_date      date default CURRENT_DATE,
    watch_time      time default CURRENT_TIME,
    minutes_watched integer,
    constraint fk_movie_history_users
        foreign key (user_id) references users
            on update cascade on delete cascade,
    constraint fk_movie_history_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade
);

create table if not exists season
(
    season_id        bigserial,
    series_id        bigserial,
    season_number    integer not null,
    summery          varchar(480),
    season_wallpaper varchar(480),
    trailer          varchar(480),
    constraint pk_season
        primary key (season_id),
    constraint season_season_number_series_id_key
        unique (season_number, series_id),
    constraint fk_season_series
        foreign key (series_id) references series
            on update cascade on delete cascade
);

create table if not exists series_cast
(
    actor_id   bigserial,
    series_id  bigserial,
    actor_role varchar(100),
    constraint series_cast_actor_id_actor_role_series_id_key
        unique (actor_id, actor_role, series_id),
    constraint fk_series_cast_episode
        foreign key (series_id) references series
            on update cascade on delete cascade,
    constraint fk_series_cast_actor
        foreign key (actor_id) references actor
            on update cascade on delete cascade
);

create table if not exists episode
(
    episode_id        bigserial,
    series_id         bigserial,
    season_id         bigserial,
    episode_number    integer not null,
    episode_name      varchar(100),
    episode_wallpaper varchar(480),
    summery           varchar(480),
    release_date      integer,
    episode_length    integer,
    constraint pk_episode
        primary key (episode_id),
    constraint episode_episode_number_season_id_series_id_key
        unique (episode_number, season_id, series_id),
    constraint fk_episode_series
        foreign key (series_id) references series
            on update cascade on delete cascade,
    constraint fk_episode_season
        foreign key (season_id) references season
            on update cascade on delete cascade
);

create table if not exists series_history
(
    user_id         bigserial,
    episode_id      bigserial,
    watch_date      date default CURRENT_DATE,
    watch_time      time default CURRENT_TIME,
    minutes_watched integer,
    constraint fk_series_history_users
        foreign key (user_id) references users
            on update cascade on delete cascade,
    constraint fk_series_history_episode
        foreign key (episode_id) references episode
            on update cascade on delete cascade
);

create table if not exists movie_rating
(
    movie_id bigint default nextval('dionysus.movie_movie_id_seq'::regclass),
    user_id  bigint default nextval('dionysus.users_user_id_seq'::regclass),
    rating   integer,
    constraint fk_movie_rating_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade,
    constraint fk_movie_rating_users
        foreign key (user_id) references users
            on update cascade on delete cascade
);

create table if not exists series_rating
(
    rating    integer,
    user_id   bigint default nextval('dionysus.users_user_id_seq'::regclass),
    series_id bigint default nextval('dionysus.series_series_id_seq'::regclass),
    constraint fk_series_rating_users
        foreign key (user_id) references users
            on update cascade on delete cascade,
    constraint fk_series_rating_series
        foreign key (series_id) references series
            on update cascade on delete cascade
);

create table if not exists movie_directors
(
    movie_id    bigint default nextval('dionysus.movie_movie_id_seq'::regclass),
    director_id bigserial,
    constraint fk_movie_directors_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade,
    constraint fk_movie_directors_directors
        foreign key (director_id) references directors
            on update cascade on delete cascade
);

create table if not exists series_directors
(
    director_id bigserial,
    series_id   bigint default nextval('dionysus.series_series_id_seq'::regclass),
    constraint fk_series_directors_directors
        foreign key (director_id) references directors
            on update cascade on delete cascade,
    constraint fk_series_directors_series
        foreign key (series_id) references series
            on update cascade on delete cascade
);

create table if not exists movie_writers
(
    writer_id bigserial,
    movie_id  bigint default nextval('dionysus.movie_movie_id_seq'::regclass),
    constraint fk_movie_writers_writers
        foreign key (writer_id) references writers
            on update cascade on delete cascade,
    constraint fk_movie_writers_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade
);

create table if not exists series_writers
(
    series_id bigint default nextval('dionysus.series_series_id_seq'::regclass),
    writer_id bigserial,
    constraint fk_series_writers_series
        foreign key (series_id) references series
            on update cascade on delete cascade,
    constraint fk_series_writers_writers
        foreign key (writer_id) references writers
            on update cascade on delete cascade
);

create table if not exists movie_servers
(
    server_id bigserial,
    movie_id  bigint default nextval('dionysus.movie_movie_id_seq'::regclass),
    url       varchar(480) not null,
    constraint fk_movie_servers_servers
        foreign key (server_id) references servers
            on update cascade on delete cascade,
    constraint fk_movie_servers_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade
);

create table if not exists series_servers
(
    episode_id bigint default nextval('dionysus.episode_episode_id_seq'::regclass),
    server_id  bigserial,
    url        varchar(480) not null,
    constraint fk_series_servers_episode
        foreign key (episode_id) references episode
            on update cascade on delete cascade,
    constraint fk_series_servers_servers
        foreign key (server_id) references servers
            on update cascade on delete cascade
);

create table if not exists production_company
(
    production_company_id bigserial,
    name                  varchar(100) not null,
    image                 varchar(480),
    constraint pk_production_company
        primary key (production_company_id)
);

create table if not exists movie_production_company
(
    movie_id              bigint default nextval('dionysus.movie_movie_id_seq'::regclass),
    production_company_id bigserial,
    constraint fk_movie_production_company_movie
        foreign key (movie_id) references movie
            on update cascade on delete cascade,
    constraint fk_movie_production_company_production_company
        foreign key (production_company_id) references production_company
            on update cascade on delete cascade
);

create table if not exists series_production_company
(
    series_id             bigint default nextval('dionysus.series_series_id_seq'::regclass),
    production_company_id bigserial,
    constraint fk_series_production_company_series
        foreign key (series_id) references series
            on update cascade on delete cascade,
    constraint fk_series_production_company_production_company
        foreign key (production_company_id) references production_company
            on update cascade on delete cascade
);

create or replace view history(user_id, movie_id, episode_id, watch_date, watch_time) as
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

create or replace function change_wallpaper() returns trigger
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

create trigger change_wallpaper_trigger
    after insert or update
    on episode
    for each row
execute procedure change_wallpaper();

create or replace function change_email_lowercase() returns trigger
    language plpgsql
as
$$
BEGIN
        NEW.user_email = lower(NEW.user_email);
        RETURN NEW;
    END;
$$;

create trigger change_email_lowercase_trigger
    before insert or update
    on users
    for each row
execute procedure change_email_lowercase();

create or replace function validate_email() returns trigger
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

create trigger validate_email_trigger
    before insert or update
    on users
    for each row
execute procedure validate_email();


