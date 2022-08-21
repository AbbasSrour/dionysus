#PostgreSQL
Generated using [DbSchema](https://dbschema.com)

<a name='layout1'>### Layout
![img](./Layout.svg)

### Table actor

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.actor_actor_id'>actor&#95;id</a>| integer  DEFAULT nextval('dionysus.actor_actor_id_seq'::regclass) |
| *🔍 | <a name='dionysus.actor_name'>name</a>| varchar&#40;100&#41;  |
| 🔍 | <a name='dionysus.actor_image'>image</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.actor_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.actor_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;4faabcb28eb548caa2404261e4f || ON actor&#95;id|
| 🔍  | UNIQUE&#95;ACTOR&#95;NAME&#95;IMAGE || ON name&#44; image|

### Table director

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.director_director_id'>director&#95;id</a>| integer  DEFAULT nextval('dionysus.director_director_id_seq'::regclass) |
| *🔍 | <a name='dionysus.director_name'>name</a>| varchar&#40;100&#41;  |
| 🔍 | <a name='dionysus.director_image'>image</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.director_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.director_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;cac4b275903e625d8459fe08eb8 || ON director&#95;id|
| 🔍  | UNIQUE&#95;DIRECTOR&#95;NAME&#95;IMAGE || ON name&#44; image|

### Table episode

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.episode_episode_id'>episode&#95;id</a>| integer  DEFAULT nextval('dionysus.episode_episode_id_seq'::regclass) |
| *🔍 | <a name='dionysus.episode_number'>number</a>| integer  |
|  | <a name='dionysus.episode_name'>name</a>| varchar&#40;100&#41;  |
|  | <a name='dionysus.episode_poster'>poster</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.episode_summary'>summary</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.episode_release_date'>release&#95;date</a>| integer  |
|  | <a name='dionysus.episode_episode_length'>episode&#95;length</a>| integer  |
| *| <a name='dionysus.episode_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.episode_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.episode_season_id'>season&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.episode_series_id'>series&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;d176084fe3652ecdc6ad94c0e39 || ON episode&#95;id|
| 🔍  | UNIQUE&#95;EPISODE&#95;NUMBER&#95;SEASON&#95;SERIES || ON number&#44; season&#95;id&#44; series&#95;id|
| Foreign Keys |
|  | FK_d8790eefed71394952672828c1c | ( season&#95;id ) ref [dionysus&#46;season](#season) (season&#95;id) |
|  | FK_f20e08420f85a1e8c5a9ce349f0 | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table genre

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.genre_genre_id'>genre&#95;id</a>| integer  DEFAULT nextval('dionysus.genre_genre_id_seq'::regclass) |
| *🔍 | <a name='dionysus.genre_name'>name</a>| varchar&#40;100&#41;  |
| *| <a name='dionysus.genre_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.genre_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;af0c9d11cb69b909fd91dd33009 || ON genre&#95;id|
| 🔍  | UNIQUE&#95;GENRE&#95;NAME || ON name|

### Table genre_rating

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.genre_rating_genre_rating'>genre&#95;rating</a>| integer  DEFAULT nextval('dionysus.genre_rating_genre_rating_seq'::regclass) |
| *| <a name='dionysus.genre_rating_rating'>rating</a>| integer  |
| *| <a name='dionysus.genre_rating_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.genre_rating_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.genre_rating_user_id'>user&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.genre_rating_genre_id'>genre&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;ec2035dc506c12e74b7c7dd7125 || ON genre&#95;rating|
| 🔍  | UNIQUE&#95;USER&#95;ID&#95;GENRE&#95;ID || ON user&#95;id&#44; genre&#95;id|
| Foreign Keys |
|  | FK_a83c4f0ef39ac81ea94e156af01 | ( genre&#95;id ) ref [dionysus&#46;genre](#genre) (genre&#95;id) |
|  | FK_744d451d9203ade60ca413ac9b2 | ( user&#95;id ) ref [dionysus&#46;users](#users) (user&#95;id) |

### Table imdb

| Idx | Field Name | Data Type |
|---|---|---|
|  | <a name='dionysus.imdb_rating'>rating</a>| real  |
|  | <a name='dionysus.imdb_vote'>vote</a>| integer  |
| *| <a name='dionysus.imdb_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.imdb_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| *🔑 ⬋ | <a name='dionysus.imdb_imdb_id'>imdb&#95;id</a>| varchar  |
| Indexes |
| 🔑 | PK&#95;1dc76341a17a08abb5a894f67e9 || ON imdb&#95;id|

### Table language

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.language_language_id'>language&#95;id</a>| integer  DEFAULT nextval('dionysus.language_language_id_seq'::regclass) |
| *🔍 | <a name='dionysus.language_name'>name</a>| varchar&#40;100&#41;  |
| *| <a name='dionysus.language_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.language_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;eb12ddc95083c8ca8e1ba65670e || ON language&#95;id|
| 🔍  | UNIQUE&#95;LANGUAGE&#95;NAME || ON name|

### Table movie

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.movie_movie_id'>movie&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_movie_id_seq'::regclass) |
| *🔍 | <a name='dionysus.movie_name'>name</a>| varchar&#40;100&#41;  |
| 🔍 | <a name='dionysus.movie_release_year'>release&#95;year</a>| integer  |
|  | <a name='dionysus.movie_poster'>poster</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.movie_cover'>cover</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.movie_summary'>summary</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.movie_trailer'>trailer</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.movie_pg_rating'>pg&#95;rating</a>| varchar&#40;20&#41;  |
|  | <a name='dionysus.movie_length'>length</a>| integer  |
|  | <a name='dionysus.movie_budget'>budget</a>| integer  |
|  | <a name='dionysus.movie_revenue'>revenue</a>| integer  |
| *| <a name='dionysus.movie_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;f38244c6e76d8e50e1a590f6744 || ON movie&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;NAME&#95;RELEASE&#95;YEAR || ON name&#44; release&#95;year|

### Table movie_cast

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_cast_movie_cast_id'>movie&#95;cast&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_cast_movie_cast_id_seq'::regclass) |
| 🔍 | <a name='dionysus.movie_cast_role'>role</a>| varchar&#40;100&#41;  |
| *| <a name='dionysus.movie_cast_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_cast_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_cast_movie_id'>movie&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_cast_actor_id'>actor&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;5d4816af1fd48048ee756f682db || ON movie&#95;cast&#95;id|
| 🔍  | UNIQUE&#95;ACTOR&#95;ID&#95;MOVIE&#95;ID&#95;ROLE || ON actor&#95;id&#44; movie&#95;id&#44; role|
| Foreign Keys |
|  | FK_c50bb0e4209901efcc193be54d9 | ( actor&#95;id ) ref [dionysus&#46;actor](#actor) (actor&#95;id) |
|  | FK_a6c0ed450412f8365639b5a700b | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |

### Table movie_directors

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_directors_movieDirectorId'>movieDirectorId</a>| integer  DEFAULT nextval('dionysus."movie_directors_movieDirectorId_seq"'::regclass) |
| *| <a name='dionysus.movie_directors_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_directors_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_directors_director_id'>director&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_directors_movie_id'>movie&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;29b6f4fe20283d9234355e59dc3 || ON movieDirectorId|
| 🔍  | UNIQUE&#95;DIRECTOR&#95;ID&#95;MOVIE&#95;ID || ON director&#95;id&#44; movie&#95;id|
| Foreign Keys |
|  | FK_eb573a92cde28f2e760b49bc9a0 | ( director&#95;id ) ref [dionysus&#46;director](#director) (director&#95;id) |
|  | FK_cddab269ba4fc7f435682e5f879 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |

### Table movie_genres

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_genres_movie_genre_id'>movie&#95;genre&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_genres_movie_genre_id_seq'::regclass) |
| *| <a name='dionysus.movie_genres_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_genres_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_genres_genre_id'>genre&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_genres_movie_id'>movie&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;db819f26367ce5cd7aa691e0c31 || ON movie&#95;genre&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;ID&#95;GENRE&#95;ID || ON genre&#95;id&#44; movie&#95;id|
| Foreign Keys |
|  | FK_bbbc12542564f7ff56e36f5bbf6 | ( genre&#95;id ) ref [dionysus&#46;genre](#genre) (genre&#95;id) |
|  | FK_ae967ce58ef99e9ff3933ccea48 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |

### Table movie_history

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_history_movie_history_id'>movie&#95;history&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_history_movie_history_id_seq'::regclass) |
| *| <a name='dionysus.movie_history_watch_date'>watch&#95;date</a>| date  DEFAULT ('now'::text)::date |
| *| <a name='dionysus.movie_history_watch_time'>watch&#95;time</a>| time  DEFAULT ('now'::text)::time with time zone |
|  | <a name='dionysus.movie_history_minutes_watched'>minutes&#95;watched</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_history_movie_id'>movie&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_history_user_id'>user&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;1699bc85901173b8ea28e97c8ac || ON movie&#95;history&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;ID&#95;USER&#95;ID || ON movie&#95;id&#44; user&#95;id|
| Foreign Keys |
|  | FK_96b014753f2e458a3e7dc8bf383 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |
|  | FK_c86a01a76183b40cc6f26b2570e | ( user&#95;id ) ref [dionysus&#46;users](#users) (user&#95;id) |

### Table movie_imdb

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_imdb_movie_imdb_id'>movie&#95;imdb&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_imdb_movie_imdb_id_seq'::regclass) |
| *| <a name='dionysus.movie_imdb_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_imdb_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_imdb_movie_id'>movie&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_imdb_imdb_id'>imdb&#95;id</a>| varchar  |
| Indexes |
| 🔑 | PK&#95;a960233a53fd5d3da0ee090b3e2 || ON movie&#95;imdb&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;ID&#95;IMDB&#95;ID || ON imdb&#95;id&#44; movie&#95;id|
| Foreign Keys |
|  | FK_cac9e1d1c641e6513aa27e6ac60 | ( imdb&#95;id ) ref [dionysus&#46;imdb](#imdb) (imdb&#95;id) |
|  | FK_983da1425275e5cc30599338372 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |

### Table movie_languages

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_languages_movie_language_id'>movie&#95;language&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_languages_movie_language_id_seq'::regclass) |
| *| <a name='dionysus.movie_languages_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_languages_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_languages_movie_id'>movie&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_languages_language_id'>language&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;9d850ce2b0dc952953ceeb65af3 || ON movie&#95;language&#95;id|
| 🔍  | UNIQUE&#95;LANGUAGE&#95;ID&#95;MOVIE&#95;ID || ON language&#95;id&#44; movie&#95;id|
| Foreign Keys |
|  | FK_a704f4bb947f6bf403658b79a88 | ( language&#95;id ) ref [dionysus&#46;language](#language) (language&#95;id) |
|  | FK_c72e418e6dea5f39bb49c2616e6 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |

### Table movie_production_company

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_production_company_movie_production_company_id'>movie&#95;production&#95;company&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_production_company_movie_production_company_id_seq'::regclass) |
| *| <a name='dionysus.movie_production_company_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_production_company_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_production_company_production_company_id'>production&#95;company&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_production_company_movie_id'>movie&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;6d0d71b08a4cf6202f31625fde0 || ON movie&#95;production&#95;company&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;ID&#44;PRODUCTION&#95;COMPANY&#95;ID || ON movie&#95;id&#44; production&#95;company&#95;id|
| Foreign Keys |
|  | FK_7cc44b65cefb3dbd3ad26da73a8 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |
|  | FK_92a96d35c38bb1228a407b945df | ( production&#95;company&#95;id ) ref [dionysus&#46;production&#95;company](#production&#95;company) (production&#95;company&#95;id) |

### Table movie_rating

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_rating_movie_rating_id'>movie&#95;rating&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_rating_movie_rating_id_seq'::regclass) |
| *| <a name='dionysus.movie_rating_rating'>rating</a>| integer  |
| *| <a name='dionysus.movie_rating_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_rating_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_rating_user_id'>user&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_rating_movie_id'>movie&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;eb7c7a1d11886a50058c2a2df48 || ON movie&#95;rating&#95;id|
| 🔍  | UNIQUE&#95;USER&#95;ID&#95;MOVIE&#95;ID || ON user&#95;id&#44; movie&#95;id|
| Foreign Keys |
|  | FK_480930884cf2618d2b678f69189 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |
|  | FK_634ac661eca500eb84bd825ecb3 | ( user&#95;id ) ref [dionysus&#46;users](#users) (user&#95;id) |

### Table movie_servers

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_servers_movie_servers_id'>movie&#95;servers&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_servers_movie_servers_id_seq'::regclass) |
| *| <a name='dionysus.movie_servers_url'>url</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.movie_servers_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_servers_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_servers_movie_id'>movie&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_servers_server_id'>server&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;ecfd36c0ab98f565f05e0889517 || ON movie&#95;servers&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;ID&#95;SERVER&#95;ID || ON movie&#95;id&#44; server&#95;id|
| Foreign Keys |
|  | FK_5166d616f4a6c9e5cd2a6d453d5 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |
|  | FK_5359e7e13d49abe1e91dddd8912 | ( server&#95;id ) ref [dionysus&#46;server](#server) (servers&#95;id) |

### Table movie_writers

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.movie_writers_movie_writer_id'>movie&#95;writer&#95;id</a>| integer  DEFAULT nextval('dionysus.movie_writers_movie_writer_id_seq'::regclass) |
| *| <a name='dionysus.movie_writers_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.movie_writers_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.movie_writers_writer_id'>writer&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.movie_writers_movie_id'>movie&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;b2ee5b143ffb028be9cd9142097 || ON movie&#95;writer&#95;id|
| 🔍  | UNIQUE&#95;MOVIE&#95;ID&#95;WRITER&#95;ID || ON movie&#95;id&#44; writer&#95;id|
| Foreign Keys |
|  | FK_ebb25bbec454cb03cfcaa2acc70 | ( movie&#95;id ) ref [dionysus&#46;movie](#movie) (movie&#95;id) |
|  | FK_4d376637da7b4905119de222338 | ( writer&#95;id ) ref [dionysus&#46;writer](#writer) (writer&#95;id) |

### Table production_company

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.production_company_production_company_id'>production&#95;company&#95;id</a>| integer  DEFAULT nextval('dionysus.production_company_production_company_id_seq'::regclass) |
| *🔍 | <a name='dionysus.production_company_name'>name</a>| varchar&#40;100&#41;  |
|  | <a name='dionysus.production_company_image'>image</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.production_company_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.production_company_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;0c3441115ffcf93748362327632 || ON production&#95;company&#95;id|
| 🔍  | UNIQUE&#95;PRODUCTION&#95;COMPANY&#95;NAME || ON name|

### Table season

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.season_season_id'>season&#95;id</a>| integer  DEFAULT nextval('dionysus.season_season_id_seq'::regclass) |
| *🔍 | <a name='dionysus.season_number'>number</a>| integer  |
|  | <a name='dionysus.season_summary'>summary</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.season_poster'>poster</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.season_trailer'>trailer</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.season_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.season_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.season_series_id'>series&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;3b43f8b4429c26d79b572a3cc19 || ON season&#95;id|
| 🔍  | UNIQUE&#95;SEASON&#95;NUMBER&#95;SERIES&#95;ID || ON series&#95;id&#44; number|
| Foreign Keys |
|  | FK_4efcc05beed4bfa3079a3a1a99a | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.series_series_id'>series&#95;id</a>| integer  DEFAULT nextval('dionysus.series_series_id_seq'::regclass) |
| *🔍 | <a name='dionysus.series_name'>name</a>| varchar&#40;100&#41;  |
| *🔍 | <a name='dionysus.series_release_Year'>release&#95;Year</a>| integer  |
|  | <a name='dionysus.series_poster'>poster</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.series_cover'>cover</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.series_summary'>summary</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.series_trailer'>trailer</a>| varchar&#40;480&#41;  |
|  | <a name='dionysus.series_pg_rating'>pg&#95;rating</a>| varchar&#40;20&#41;  |
| *| <a name='dionysus.series_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;7b8ecbc6f9a0a7a948dc41040c6 || ON series&#95;id|
| 🔍  | UNIQUE&#95;SERIES&#95;NAME&#95;RELEASE&#95;YEAR || ON name&#44; release&#95;Year|

### Table series_cast

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_cast_series_cast_id'>series&#95;cast&#95;id</a>| integer  DEFAULT nextval('dionysus.series_cast_series_cast_id_seq'::regclass) |
| 🔍 | <a name='dionysus.series_cast_actor_role'>actor&#95;role</a>| varchar&#40;100&#41;  |
| *| <a name='dionysus.series_cast_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_cast_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_cast_series_id'>series&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_cast_actor_id'>actor&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;8fc9e2f9ad75ea0838cc26efb0b || ON series&#95;cast&#95;id|
| 🔍  | UNIQUE&#95;ACTOR&#95;ID&#95;SERIES&#95;ID&#95;ROLE || ON actor&#95;id&#44; series&#95;id&#44; actor&#95;role|
| Foreign Keys |
|  | FK_5603e6fb3d4a5120e452925455e | ( actor&#95;id ) ref [dionysus&#46;actor](#actor) (actor&#95;id) |
|  | FK_0df029204e4113011c5a7ee3827 | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series_directors

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_directors_series_director_id'>series&#95;director&#95;id</a>| integer  DEFAULT nextval('dionysus.series_directors_series_director_id_seq'::regclass) |
| *| <a name='dionysus.series_directors_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_directors_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_directors_director_id'>director&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_directors_series_id'>series&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;90b38d66ceac189cb556eb7258e || ON series&#95;director&#95;id|
| 🔍  | UNIQUE&#95;SERIES&#95;ID&#95;DIRECTOR&#95;ID || ON series&#95;id&#44; director&#95;id|
| Foreign Keys |
|  | FK_2c1e82147a6d7838c0e4759305c | ( director&#95;id ) ref [dionysus&#46;director](#director) (director&#95;id) |
|  | FK_17e99ff7097800371c4452c7de8 | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series_genres

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_genres_series_genres'>series&#95;genres</a>| integer  DEFAULT nextval('dionysus.series_genres_series_genres_seq'::regclass) |
| *| <a name='dionysus.series_genres_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_genres_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_genres_genre_id'>genre&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_genres_series_id'>series&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;454fa11c935eee4f19895498711 || ON series&#95;genres|
| 🔍  | UNIQUE&#95;GENRE&#95;ID&#95;SERIES&#95;ID || ON genre&#95;id&#44; series&#95;id|
| Foreign Keys |
|  | FK_76732559d297ad04639b3fc75a1 | ( genre&#95;id ) ref [dionysus&#46;genre](#genre) (genre&#95;id) |
|  | FK_74ac52950bb624b4e2437b3db7d | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series_history

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_history_series_history_id'>series&#95;history&#95;id</a>| integer  DEFAULT nextval('dionysus.series_history_series_history_id_seq'::regclass) |
|  | <a name='dionysus.series_history_minutes_watched'>minutes&#95;watched</a>| integer  |
| *| <a name='dionysus.series_history_watch_date'>watch&#95;date</a>| date  DEFAULT ('now'::text)::date |
| *| <a name='dionysus.series_history_watch_time'>watch&#95;time</a>| time  DEFAULT ('now'::text)::time with time zone |
| 🔍 ⬈ | <a name='dionysus.series_history_user_id'>user&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_history_episode_id'>episode&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;7ec28792d7315cea16d43c2817d || ON series&#95;history&#95;id|
| 🔍  | UNIQUE&#95;EPISODE&#95;ID&#95;USER&#95;ID || ON episode&#95;id&#44; user&#95;id|
| Foreign Keys |
|  | FK_d1fe211d68a81b84936eed85be9 | ( episode&#95;id ) ref [dionysus&#46;episode](#episode) (episode&#95;id) |
|  | FK_2d932cf49ecea52111535b356c7 | ( user&#95;id ) ref [dionysus&#46;users](#users) (user&#95;id) |

### Table series_imdb

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_imdb_series_imdb_id'>series&#95;imdb&#95;id</a>| integer  DEFAULT nextval('dionysus.series_imdb_series_imdb_id_seq'::regclass) |
| *| <a name='dionysus.series_imdb_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_imdb_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_imdb_series_id'>series&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_imdb_imdb_id'>imdb&#95;id</a>| varchar  |
| Indexes |
| 🔑 | PK&#95;b748aea1ad5ee707001cf31ede8 || ON series&#95;imdb&#95;id|
| 🔍  | UNIQUE&#95;IMDB&#95;ID&#95;SERIES&#95;ID || ON imdb&#95;id&#44; series&#95;id|
| Foreign Keys |
|  | FK_ba5820aecbc793a26ed633d91fa | ( imdb&#95;id ) ref [dionysus&#46;imdb](#imdb) (imdb&#95;id) |
|  | FK_ef9a0637d4c37f6861fa62af704 | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series_languages

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_languages_series_languages_id'>series&#95;languages&#95;id</a>| integer  DEFAULT nextval('dionysus.series_languages_series_languages_id_seq'::regclass) |
| *| <a name='dionysus.series_languages_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_languages_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_languages_serie_id'>serie&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_languages_language_id'>language&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;2ce8dfff96a50e16b15ffb22118 || ON series&#95;languages&#95;id|
| 🔍  | UNIQUE&#95;LANGUAGE&#95;ID&#95;SERIES&#95;ID || ON language&#95;id&#44; serie&#95;id|
| Foreign Keys |
|  | FK_d97642ed12734cfc0dc4b15a651 | ( language&#95;id ) ref [dionysus&#46;language](#language) (language&#95;id) |
|  | FK_1b56f97c2ae22f73758cc7655aa | ( serie&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series_production_company

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_production_company_series_production_company_id'>series&#95;production&#95;company&#95;id</a>| integer  DEFAULT nextval('dionysus.series_production_company_series_production_company_id_seq'::regclass) |
| *| <a name='dionysus.series_production_company_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_production_company_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_production_company_production_company_id'>production&#95;company&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_production_company_series_id'>series&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;ff6dbbd51b93e2a63594ee992c0 || ON series&#95;production&#95;company&#95;id|
| 🔍  | UNIQUE&#95;SERIES&#95;ID&#95;PRODUCTION&#95;COMPANY&#95;ID || ON series&#95;id&#44; production&#95;company&#95;id|
| Foreign Keys |
|  | FK_3ea58edf35aa1c2f27af45fd14a | ( production&#95;company&#95;id ) ref [dionysus&#46;production&#95;company](#production&#95;company) (production&#95;company&#95;id) |
|  | FK_c2374c7e7f35cf0b271456a7961 | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |

### Table series_rating

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_rating_series_rating_id'>series&#95;rating&#95;id</a>| integer  DEFAULT nextval('dionysus.series_rating_series_rating_id_seq'::regclass) |
| *| <a name='dionysus.series_rating_rating'>rating</a>| integer  |
| *| <a name='dionysus.series_rating_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_rating_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_rating_series_id'>series&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_rating_user_id'>user&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;5861643f9e970db2338c16600a6 || ON series&#95;rating&#95;id|
| 🔍  | UNIQUE&#95;SERIES&#95;ID&#95;USER&#95;ID || ON series&#95;id&#44; user&#95;id|
| Foreign Keys |
|  | FK_65bcbee63896fad41d9cef1eba0 | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |
|  | FK_98a48a1e0521cbd0be8d5303cab | ( user&#95;id ) ref [dionysus&#46;users](#users) (user&#95;id) |

### Table series_servers

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_servers_series_server_id'>series&#95;server&#95;id</a>| integer  DEFAULT nextval('dionysus.series_servers_series_server_id_seq'::regclass) |
| *| <a name='dionysus.series_servers_url'>url</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.series_servers_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_servers_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_servers_episode_id'>episode&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_servers_server_id'>server&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;a1ba86f8daefc8a648e4dd8985d || ON series&#95;server&#95;id|
| 🔍  | UNIQUE&#95;EPISODE&#95;ID&#95;SERVER&#95;ID || ON episode&#95;id&#44; server&#95;id|
| Foreign Keys |
|  | FK_deaafeb41a72533c1c754c71524 | ( episode&#95;id ) ref [dionysus&#46;episode](#episode) (episode&#95;id) |
|  | FK_635158cd5a62ff26b84568b126b | ( server&#95;id ) ref [dionysus&#46;server](#server) (servers&#95;id) |

### Table series_writers

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 | <a name='dionysus.series_writers_series_writers_id'>series&#95;writers&#95;id</a>| integer  DEFAULT nextval('dionysus.series_writers_series_writers_id_seq'::regclass) |
| *| <a name='dionysus.series_writers_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.series_writers_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| 🔍 ⬈ | <a name='dionysus.series_writers_writer_id'>writer&#95;id</a>| integer  |
| 🔍 ⬈ | <a name='dionysus.series_writers_series_id'>series&#95;id</a>| integer  |
| Indexes |
| 🔑 | PK&#95;4216da3ca181dd864561405618f || ON series&#95;writers&#95;id|
| 🔍  | UNIQUE&#95;SERIES&#95;ID&#95;WRITER&#95;ID || ON series&#95;id&#44; writer&#95;id|
| Foreign Keys |
|  | FK_7086b69311c574c5157f1def51e | ( series&#95;id ) ref [dionysus&#46;series](#series) (series&#95;id) |
|  | FK_0c121bba561f23f5d88f77b6496 | ( writer&#95;id ) ref [dionysus&#46;writer](#writer) (writer&#95;id) |

### Table server

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.server_servers_id'>servers&#95;id</a>| integer  DEFAULT nextval('dionysus.server_servers_id_seq'::regclass) |
| *🔍 | <a name='dionysus.server_name'>name</a>| varchar&#40;100&#41;  |
| *🔍 | <a name='dionysus.server_url'>url</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.server_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.server_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;18a315bb3797e81ebb47315d727 || ON servers&#95;id|
| 🔍  | UNIQUE&#95;SERVER&#95;URL || ON url|
| 🔍  | UNIQUE&#95;SERVER&#95;NAME || ON name|

### Table users

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.users_user_id'>user&#95;id</a>| integer  DEFAULT nextval('dionysus.users_user_id_seq'::regclass) |
| *🔍 | <a name='dionysus.users_user_name'>user&#95;name</a>| varchar&#40;100&#41;  |
| *🔍 | <a name='dionysus.users_email'>email</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.users_user_password'>user&#95;password</a>| varchar&#40;400&#41; DEFAULT 'default'::character varying |
| *| <a name='dionysus.users_first_name'>first&#95;name</a>| varchar&#40;100&#41;  |
| *| <a name='dionysus.users_last_name'>last&#95;name</a>| varchar&#40;100&#41;  |
| *| <a name='dionysus.users_age'>age</a>| integer  |
| *| <a name='dionysus.users_image'>image</a>| varchar&#40;280&#41; DEFAULT 'default.png'::character varying |
| *| <a name='dionysus.users_verified'>verified</a>| boolean  DEFAULT false |
| 🔎 | <a name='dionysus.users_verification_code'>verification&#95;code</a>| text  |
| *| <a name='dionysus.users_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.users_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;96aac72f1574b88752e9fb00089 || ON user&#95;id|
| 🔍  | UNIQUE&#95;USER&#95;EMAIL || ON email|
| 🔍  | UNIQUE&#95;USER&#95;NAME || ON user&#95;name|
| 🔎  | verificationCode&#95;index || ON verification&#95;code|

### Table writer

| Idx | Field Name | Data Type |
|---|---|---|
| *🔑 ⬋ | <a name='dionysus.writer_writer_id'>writer&#95;id</a>| integer  DEFAULT nextval('dionysus.writer_writer_id_seq'::regclass) |
| *🔍 | <a name='dionysus.writer_name'>name</a>| varchar&#40;100&#41;  |
| 🔍 | <a name='dionysus.writer_image'>image</a>| varchar&#40;480&#41;  |
| *| <a name='dionysus.writer_created_at'>created&#95;at</a>| timestamp  DEFAULT now() |
| *| <a name='dionysus.writer_updated_at'>updated&#95;at</a>| timestamp  DEFAULT now() |
| Indexes |
| 🔑 | PK&#95;1d1d8ae402204c583322074d590 || ON writer&#95;id|
| 🔍  | UNIQUE&#95;WRITER&#95;NAME&#95;IMAGE || ON name&#44; image|



