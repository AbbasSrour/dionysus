create table dionysus.actor
(
    actor_id         bigserial
        constraint pk_actor
            primary key,
    actor_first_name varchar(100),
    actor_last_name  varchar(100),
    actor_image      varchar(480)
);

alter table dionysus.actor
    owner to ares;

create table dionysus.genre
(
    genre_id   bigserial
        constraint pk_genre
            primary key,
    genre_name varchar(100)
        constraint unique_genre_name
            unique
);

alter table dionysus.genre
    owner to ares;

create table dionysus.movie
(
    movie_id           bigserial
        constraint pk_movie
            primary key,
    movie_name         varchar(100),
    movie_wallpaper    varchar(480),
    movie_location     varchar(480),
    movie_release_year integer,
    summery            varchar(480),
    yt_trailer         varchar(480),
    imdb_link          varchar(480),
    imdb_rating        integer,
    unique (movie_name, movie_release_year)
);

alter table dionysus.movie
    owner to ares;

create table dionysus.movie_cast
(
    actor_id   bigserial
        constraint fk_movie_cast_actor
            references dionysus.actor
            on update cascade on delete cascade,
    movie_id   bigserial
        constraint fk_movie_cast_movie
            references dionysus.movie
            on update cascade on delete cascade,
    actor_role varchar(100),
    constraint unique_role
        unique (actor_id, movie_id, actor_role)
);

alter table dionysus.movie_cast
    owner to ares;

create table dionysus.movie_genres
(
    genre_id bigserial
        constraint fk_movie_genres_genre
            references dionysus.genre
            on update cascade on delete cascade,
    movie_id bigserial
        constraint fk_movie_genres_movie
            references dionysus.movie
            on update cascade on delete cascade,
    unique (genre_id, movie_id)
);

alter table dionysus.movie_genres
    owner to ares;

create table dionysus.series
(
    series_id           bigserial
        constraint pk_series
            primary key,
    series_name         varchar(100) not null,
    series_release_year integer,
    series_wallpaper    varchar(480),
    summery             varchar(480),
    yt_trailer          varchar(480),
    imdb_link           varchar(480),
    imdb_rating         integer,
    unique (series_name, series_release_year)
);

alter table dionysus.series
    owner to ares;

create table dionysus.series_genres
(
    genre_id  bigserial
        constraint fk_series_genres_genre
            references dionysus.genre
            on update cascade on delete cascade,
    series_id bigserial
        constraint fk_series_genres_series
            references dionysus.series
            on update cascade on delete cascade,
    unique (genre_id, series_id)
);

alter table dionysus.series_genres
    owner to ares;

create table dionysus.users
(
    user_id       bigserial
        constraint pk_users
            primary key,
    user_name     varchar(100),
    user_email    varchar(480)
        unique,
    user_password varchar(480)
);

alter table dionysus.users
    owner to ares;

create trigger change_email_lowercase_trigger
    before insert or update
    on dionysus.users
    for each row
execute procedure dionysus.change_email_lowercase();

create trigger validate_email_trigger
    before insert or update
    on dionysus.users
    for each row
execute procedure dionysus.validate_email();

create table dionysus.movie_history
(
    user_id         bigserial
        constraint fk_movie_history_users
            references dionysus.users
            on update cascade on delete cascade,
    movie_id        bigserial
        constraint fk_movie_history_movie
            references dionysus.movie
            on update cascade on delete cascade,
    watch_date      date default CURRENT_DATE,
    watch_time      time default CURRENT_TIME,
    minutes_watched integer
);

alter table dionysus.movie_history
    owner to ares;

create table dionysus.season
(
    season_id        bigserial
        constraint pk_season
            primary key,
    series_id        bigserial
        constraint fk_season_series
            references dionysus.series
            on update cascade on delete cascade,
    season_number    integer not null,
    summery          varchar(480),
    season_wallpaper varchar(480),
    yt_trailer       varchar(480),
    imdb_link        varchar(480),
    unique (season_number, series_id)
);

alter table dionysus.season
    owner to ares;

create table dionysus.series_cast
(
    actor_id   bigserial
        constraint fk_series_cast_actor
            references dionysus.actor
            on update cascade on delete cascade,
    series_id  bigserial
        constraint fk_series_cast_episode
            references dionysus.series
            on update cascade on delete cascade,
    actor_role varchar(100),
    unique (actor_id, actor_role, series_id)
);

alter table dionysus.series_cast
    owner to ares;

create table dionysus.episode
(
    episode_id        bigserial
        constraint pk_episode
            primary key,
    series_id         bigserial
        constraint fk_episode_series
            references dionysus.series
            on update cascade on delete cascade,
    season_id         bigserial
        constraint fk_episode_season
            references dionysus.season
            on update cascade on delete cascade,
    episode_number    integer not null,
    episode_name      varchar(100),
    episode_location  varchar(480),
    episode_wallpaper varchar(480),
    summery           varchar(480),
    unique (episode_number, season_id, series_id)
);

alter table dionysus.episode
    owner to ares;

create trigger change_wallpaper_trigger
    after insert or update
    on dionysus.episode
    for each row
execute procedure dionysus.change_wallpaper();

create table dionysus.series_history
(
    user_id         bigserial
        constraint fk_series_history_users
            references dionysus.users
            on update cascade on delete cascade,
    episode_id      bigserial
        constraint fk_series_history_episode
            references dionysus.episode
            on update cascade on delete cascade,
    watch_date      date default CURRENT_DATE,
    watch_time      time default CURRENT_TIME,
    minutes_watched integer
);

alter table dionysus.series_history
    owner to ares;

create table dionysus.movie_rating
(
    movie_id bigint default nextval('dionysus.movie_movie_id_seq'::regclass)
        constraint fk_movie_rating_movie
            references dionysus.movie
            on update cascade on delete cascade,
    user_id  bigint default nextval('dionysus.users_user_id_seq'::regclass)
        constraint fk_movie_rating_users
            references dionysus.users
            on update cascade on delete cascade,
    rating   integer
);

alter table dionysus.movie_rating
    owner to ares;

create table dionysus.series_rating
(
    rating    integer,
    user_id   bigint default nextval('dionysus.users_user_id_seq'::regclass)
        constraint fk_series_rating_users
            references dionysus.users
            on update cascade on delete cascade,
    series_id bigint default nextval('dionysus.series_series_id_seq'::regclass)
        constraint fk_series_rating_series
            references dionysus.series
            on update cascade on delete cascade
);

alter table dionysus.series_rating
    owner to ares;

create table dionysus.genre_rating
(
    rating   integer,
    user_id  bigint default nextval('dionysus.users_user_id_seq'::regclass)
        constraint fk_genre_rating_users
            references dionysus.users
            on update cascade on delete cascade,
    genre_id bigint default nextval('dionysus.genre_genre_id_seq'::regclass)
        constraint fk_genre_rating_genre
            references dionysus.genre
            on update cascade on delete cascade
);

alter table dionysus.genre_rating
    owner to ares;


