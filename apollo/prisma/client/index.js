
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.2.1
 * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
 */
Prisma.prismaVersion = {
  client: "4.2.1",
  engine: "2920a97877e12e055c1333079b8d19cee7f33826"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ActorScalarFieldEnum = makeEnum({
  actorId: 'actorId',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.DirectorScalarFieldEnum = makeEnum({
  directorId: 'directorId',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.EpisodeScalarFieldEnum = makeEnum({
  episodeId: 'episodeId',
  showId: 'showId',
  season: 'season',
  number: 'number',
  name: 'name',
  poster: 'poster',
  summary: 'summary',
  releaseYear: 'releaseYear',
  length: 'length',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.GenreScalarFieldEnum = makeEnum({
  genreId: 'genreId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImageScalarFieldEnum = makeEnum({
  imageId: 'imageId',
  showId: 'showId',
  url: 'url',
  type: 'type',
  height: 'height',
  width: 'width',
  aspectRatio: 'aspectRatio',
  language: 'language',
  isDefault: 'isDefault',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImdbScalarFieldEnum = makeEnum({
  imdbId: 'imdbId',
  showId: 'showId',
  rating: 'rating',
  voteCount: 'voteCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.LanguageScalarFieldEnum = makeEnum({
  languageId: 'languageId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  movieId: 'movieId',
  showId: 'showId',
  length: 'length',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MovieServerScalarFieldEnum = makeEnum({
  movieId: 'movieId',
  serverId: 'serverId',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SeriesServerScalarFieldEnum = makeEnum({
  episodeId: 'episodeId',
  serverId: 'serverId',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ServerScalarFieldEnum = makeEnum({
  serverId: 'serverId',
  name: 'name',
  url: 'url',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowCastScalarFieldEnum = makeEnum({
  showId: 'showId',
  actorId: 'actorId',
  role: 'role',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowDirectorScalarFieldEnum = makeEnum({
  showId: 'showId',
  directorId: 'directorId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowGenreScalarFieldEnum = makeEnum({
  showId: 'showId',
  genreId: 'genreId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowLanguageScalarFieldEnum = makeEnum({
  showId: 'showId',
  languageId: 'languageId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowScalarFieldEnum = makeEnum({
  showId: 'showId',
  name: 'name',
  releaseYear: 'releaseYear',
  summary: 'summary',
  pgRating: 'pgRating',
  budget: 'budget',
  revenue: 'revenue',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowStudioScalarFieldEnum = makeEnum({
  showId: 'showId',
  studioId: 'studioId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ShowWriterScalarFieldEnum = makeEnum({
  showId: 'showId',
  writerId: 'writerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.StudioScalarFieldEnum = makeEnum({
  studioId: 'studioId',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VideoScalarFieldEnum = makeEnum({
  videoId: 'videoId',
  showId: 'showId',
  name: 'name',
  url: 'url',
  site: 'site',
  quality: 'quality',
  type: 'type',
  official: 'official',
  language: 'language',
  isDefault: 'isDefault',
  publishedAt: 'publishedAt',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.WriterScalarFieldEnum = makeEnum({
  writerId: 'writerId',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  Show: 'Show',
  Imdb: 'Imdb',
  Movie: 'Movie',
  Episode: 'Episode',
  Server: 'Server',
  Actor: 'Actor',
  Director: 'Director',
  Genre: 'Genre',
  Language: 'Language',
  Studio: 'Studio',
  Writer: 'Writer',
  Video: 'Video',
  Image: 'Image',
  MovieServer: 'MovieServer',
  SeriesServer: 'SeriesServer',
  ShowCast: 'ShowCast',
  ShowDirector: 'ShowDirector',
  ShowGenre: 'ShowGenre',
  ShowLanguage: 'ShowLanguage',
  ShowStudio: 'ShowStudio',
  ShowWriter: 'ShowWriter'
});

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Show\",\"dbName\":\"show\",\"fields\":[{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pgRating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"budget\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"revenue\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"Imdb\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Imdb\",\"relationName\":\"ImdbToShow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Movie\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"MovieToShow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Episode\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Episode\",\"relationName\":\"EpisodeToShow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Image\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Image\",\"relationName\":\"ImageToShow\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Video\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Video\",\"relationName\":\"ShowToVideo\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShowCast\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowCast\",\"relationName\":\"ShowToShowCast\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShowDirector\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowDirector\",\"relationName\":\"ShowToShowDirector\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShowGenre\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowGenre\",\"relationName\":\"ShowToShowGenre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShowLanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowLanguage\",\"relationName\":\"ShowToShowLanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShowStudio\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowStudio\",\"relationName\":\"ShowToShowStudio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ShowWriter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowWriter\",\"relationName\":\"ShowToShowWriter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"releaseYear\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"releaseYear\"]}],\"isGenerated\":false},{\"name\":\"Imdb\",\"dbName\":\"imdb\",\"fields\":[{\"name\":\"imdbId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ImdbToShow\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"voteCount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Movie\",\"dbName\":\"movie\",\"fields\":[{\"name\":\"movieId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"MovieToShow\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"MovieServer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MovieServer\",\"relationName\":\"MovieToMovieServer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Episode\",\"dbName\":\"episode\",\"fields\":[{\"name\":\"episodeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"EpisodeToShow\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"season\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"poster\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"summary\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseYear\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"length\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"SeriesServer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SeriesServer\",\"relationName\":\"EpisodeToSeriesServer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"number\",\"season\",\"showId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"number\",\"season\",\"showId\"]}],\"isGenerated\":false},{\"name\":\"Server\",\"dbName\":\"server\",\"fields\":[{\"name\":\"serverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"MovieServer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"MovieServer\",\"relationName\":\"MovieServerToServer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SeriesServer\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"SeriesServer\",\"relationName\":\"SeriesServerToServer\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Actor\",\"dbName\":\"actor\",\"fields\":[{\"name\":\"actorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"MovieCast\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowCast\",\"relationName\":\"ActorToShowCast\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"image\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"image\"]}],\"isGenerated\":false},{\"name\":\"Director\",\"dbName\":\"director\",\"fields\":[{\"name\":\"directorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ShowDirector\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowDirector\",\"relationName\":\"DirectorToShowDirector\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"image\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"image\"]}],\"isGenerated\":false},{\"name\":\"Genre\",\"dbName\":\"genre\",\"fields\":[{\"name\":\"genreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ShowGenre\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowGenre\",\"relationName\":\"GenreToShowGenre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Language\",\"dbName\":\"language\",\"fields\":[{\"name\":\"languageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ShowLanguage\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowLanguage\",\"relationName\":\"LanguageToShowLanguage\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Studio\",\"dbName\":\"studio\",\"fields\":[{\"name\":\"studioId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ShowStudio\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowStudio\",\"relationName\":\"ShowStudioToStudio\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Writer\",\"dbName\":\"writer\",\"fields\":[{\"name\":\"writerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"ShowWriter\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ShowWriter\",\"relationName\":\"ShowWriterToWriter\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"name\",\"image\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"name\",\"image\"]}],\"isGenerated\":false},{\"name\":\"Video\",\"dbName\":\"video\",\"fields\":[{\"name\":\"videoId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToVideo\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"site\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"quality\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"official\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDefault\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publishedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Image\",\"dbName\":\"image\",\"fields\":[{\"name\":\"imageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ImageToShow\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"height\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"width\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aspectRatio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isDefault\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"MovieServer\",\"dbName\":\"movie_server\",\"fields\":[{\"name\":\"movie\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"MovieToMovieServer\",\"relationFromFields\":[\"movieId\"],\"relationToFields\":[\"movieId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movieId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Server\",\"relationName\":\"MovieServerToServer\",\"relationFromFields\":[\"serverId\"],\"relationToFields\":[\"serverId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"movieId\",\"serverId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"SeriesServer\",\"dbName\":\"series_server\",\"fields\":[{\"name\":\"episode\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Episode\",\"relationName\":\"EpisodeToSeriesServer\",\"relationFromFields\":[\"episodeId\"],\"relationToFields\":[\"episodeId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"episodeId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"server\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Server\",\"relationName\":\"SeriesServerToServer\",\"relationFromFields\":[\"serverId\"],\"relationToFields\":[\"serverId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"serverId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"serverId\",\"episodeId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ShowCast\",\"dbName\":\"show_cast\",\"fields\":[{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToShowCast\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Actor\",\"relationName\":\"ActorToShowCast\",\"relationFromFields\":[\"actorId\"],\"relationToFields\":[\"actorId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"actorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"showId\",\"actorId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ShowDirector\",\"dbName\":\"show_director\",\"fields\":[{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToShowDirector\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"director\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Director\",\"relationName\":\"DirectorToShowDirector\",\"relationFromFields\":[\"directorId\"],\"relationToFields\":[\"directorId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"showId\",\"directorId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ShowGenre\",\"dbName\":\"show_genre\",\"fields\":[{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToShowGenre\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"GenreToShowGenre\",\"relationFromFields\":[\"genreId\"],\"relationToFields\":[\"genreId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"showId\",\"genreId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ShowLanguage\",\"dbName\":\"show_language\",\"fields\":[{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToShowLanguage\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"language\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Language\",\"relationName\":\"LanguageToShowLanguage\",\"relationFromFields\":[\"languageId\"],\"relationToFields\":[\"languageId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"languageId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"showId\",\"languageId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ShowStudio\",\"dbName\":\"show_studio\",\"fields\":[{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToShowStudio\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studio\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Studio\",\"relationName\":\"ShowStudioToStudio\",\"relationFromFields\":[\"studioId\"],\"relationToFields\":[\"studioId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"studioId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"showId\",\"studioId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ShowWriter\",\"dbName\":\"show_writer\",\"fields\":[{\"name\":\"show\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Show\",\"relationName\":\"ShowToShowWriter\",\"relationFromFields\":[\"showId\"],\"relationToFields\":[\"showId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"showId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writer\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Writer\",\"relationName\":\"ShowWriterToWriter\",\"relationFromFields\":[\"writerId\"],\"relationToFields\":[\"writerId\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"writerId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":{\"name\":null,\"fields\":[\"showId\",\"writerId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Show\",\"plural\":\"shows\",\"findUnique\":\"findUniqueShow\",\"findFirst\":\"findFirstShow\",\"findMany\":\"findManyShow\",\"create\":\"createOneShow\",\"createMany\":\"createManyShow\",\"delete\":\"deleteOneShow\",\"update\":\"updateOneShow\",\"deleteMany\":\"deleteManyShow\",\"updateMany\":\"updateManyShow\",\"upsert\":\"upsertOneShow\",\"aggregate\":\"aggregateShow\",\"groupBy\":\"groupByShow\"},{\"model\":\"Imdb\",\"plural\":\"imdbs\",\"findUnique\":\"findUniqueImdb\",\"findFirst\":\"findFirstImdb\",\"findMany\":\"findManyImdb\",\"create\":\"createOneImdb\",\"createMany\":\"createManyImdb\",\"delete\":\"deleteOneImdb\",\"update\":\"updateOneImdb\",\"deleteMany\":\"deleteManyImdb\",\"updateMany\":\"updateManyImdb\",\"upsert\":\"upsertOneImdb\",\"aggregate\":\"aggregateImdb\",\"groupBy\":\"groupByImdb\"},{\"model\":\"Movie\",\"plural\":\"movies\",\"findUnique\":\"findUniqueMovie\",\"findFirst\":\"findFirstMovie\",\"findMany\":\"findManyMovie\",\"create\":\"createOneMovie\",\"createMany\":\"createManyMovie\",\"delete\":\"deleteOneMovie\",\"update\":\"updateOneMovie\",\"deleteMany\":\"deleteManyMovie\",\"updateMany\":\"updateManyMovie\",\"upsert\":\"upsertOneMovie\",\"aggregate\":\"aggregateMovie\",\"groupBy\":\"groupByMovie\"},{\"model\":\"Episode\",\"plural\":\"episodes\",\"findUnique\":\"findUniqueEpisode\",\"findFirst\":\"findFirstEpisode\",\"findMany\":\"findManyEpisode\",\"create\":\"createOneEpisode\",\"createMany\":\"createManyEpisode\",\"delete\":\"deleteOneEpisode\",\"update\":\"updateOneEpisode\",\"deleteMany\":\"deleteManyEpisode\",\"updateMany\":\"updateManyEpisode\",\"upsert\":\"upsertOneEpisode\",\"aggregate\":\"aggregateEpisode\",\"groupBy\":\"groupByEpisode\"},{\"model\":\"Server\",\"plural\":\"servers\",\"findUnique\":\"findUniqueServer\",\"findFirst\":\"findFirstServer\",\"findMany\":\"findManyServer\",\"create\":\"createOneServer\",\"createMany\":\"createManyServer\",\"delete\":\"deleteOneServer\",\"update\":\"updateOneServer\",\"deleteMany\":\"deleteManyServer\",\"updateMany\":\"updateManyServer\",\"upsert\":\"upsertOneServer\",\"aggregate\":\"aggregateServer\",\"groupBy\":\"groupByServer\"},{\"model\":\"Actor\",\"plural\":\"actors\",\"findUnique\":\"findUniqueActor\",\"findFirst\":\"findFirstActor\",\"findMany\":\"findManyActor\",\"create\":\"createOneActor\",\"createMany\":\"createManyActor\",\"delete\":\"deleteOneActor\",\"update\":\"updateOneActor\",\"deleteMany\":\"deleteManyActor\",\"updateMany\":\"updateManyActor\",\"upsert\":\"upsertOneActor\",\"aggregate\":\"aggregateActor\",\"groupBy\":\"groupByActor\"},{\"model\":\"Director\",\"plural\":\"directors\",\"findUnique\":\"findUniqueDirector\",\"findFirst\":\"findFirstDirector\",\"findMany\":\"findManyDirector\",\"create\":\"createOneDirector\",\"createMany\":\"createManyDirector\",\"delete\":\"deleteOneDirector\",\"update\":\"updateOneDirector\",\"deleteMany\":\"deleteManyDirector\",\"updateMany\":\"updateManyDirector\",\"upsert\":\"upsertOneDirector\",\"aggregate\":\"aggregateDirector\",\"groupBy\":\"groupByDirector\"},{\"model\":\"Genre\",\"plural\":\"genres\",\"findUnique\":\"findUniqueGenre\",\"findFirst\":\"findFirstGenre\",\"findMany\":\"findManyGenre\",\"create\":\"createOneGenre\",\"createMany\":\"createManyGenre\",\"delete\":\"deleteOneGenre\",\"update\":\"updateOneGenre\",\"deleteMany\":\"deleteManyGenre\",\"updateMany\":\"updateManyGenre\",\"upsert\":\"upsertOneGenre\",\"aggregate\":\"aggregateGenre\",\"groupBy\":\"groupByGenre\"},{\"model\":\"Language\",\"plural\":\"languages\",\"findUnique\":\"findUniqueLanguage\",\"findFirst\":\"findFirstLanguage\",\"findMany\":\"findManyLanguage\",\"create\":\"createOneLanguage\",\"createMany\":\"createManyLanguage\",\"delete\":\"deleteOneLanguage\",\"update\":\"updateOneLanguage\",\"deleteMany\":\"deleteManyLanguage\",\"updateMany\":\"updateManyLanguage\",\"upsert\":\"upsertOneLanguage\",\"aggregate\":\"aggregateLanguage\",\"groupBy\":\"groupByLanguage\"},{\"model\":\"Studio\",\"plural\":\"studios\",\"findUnique\":\"findUniqueStudio\",\"findFirst\":\"findFirstStudio\",\"findMany\":\"findManyStudio\",\"create\":\"createOneStudio\",\"createMany\":\"createManyStudio\",\"delete\":\"deleteOneStudio\",\"update\":\"updateOneStudio\",\"deleteMany\":\"deleteManyStudio\",\"updateMany\":\"updateManyStudio\",\"upsert\":\"upsertOneStudio\",\"aggregate\":\"aggregateStudio\",\"groupBy\":\"groupByStudio\"},{\"model\":\"Writer\",\"plural\":\"writers\",\"findUnique\":\"findUniqueWriter\",\"findFirst\":\"findFirstWriter\",\"findMany\":\"findManyWriter\",\"create\":\"createOneWriter\",\"createMany\":\"createManyWriter\",\"delete\":\"deleteOneWriter\",\"update\":\"updateOneWriter\",\"deleteMany\":\"deleteManyWriter\",\"updateMany\":\"updateManyWriter\",\"upsert\":\"upsertOneWriter\",\"aggregate\":\"aggregateWriter\",\"groupBy\":\"groupByWriter\"},{\"model\":\"Video\",\"plural\":\"videos\",\"findUnique\":\"findUniqueVideo\",\"findFirst\":\"findFirstVideo\",\"findMany\":\"findManyVideo\",\"create\":\"createOneVideo\",\"createMany\":\"createManyVideo\",\"delete\":\"deleteOneVideo\",\"update\":\"updateOneVideo\",\"deleteMany\":\"deleteManyVideo\",\"updateMany\":\"updateManyVideo\",\"upsert\":\"upsertOneVideo\",\"aggregate\":\"aggregateVideo\",\"groupBy\":\"groupByVideo\"},{\"model\":\"Image\",\"plural\":\"images\",\"findUnique\":\"findUniqueImage\",\"findFirst\":\"findFirstImage\",\"findMany\":\"findManyImage\",\"create\":\"createOneImage\",\"createMany\":\"createManyImage\",\"delete\":\"deleteOneImage\",\"update\":\"updateOneImage\",\"deleteMany\":\"deleteManyImage\",\"updateMany\":\"updateManyImage\",\"upsert\":\"upsertOneImage\",\"aggregate\":\"aggregateImage\",\"groupBy\":\"groupByImage\"},{\"model\":\"MovieServer\",\"plural\":\"movieServers\",\"findUnique\":\"findUniqueMovieServer\",\"findFirst\":\"findFirstMovieServer\",\"findMany\":\"findManyMovieServer\",\"create\":\"createOneMovieServer\",\"createMany\":\"createManyMovieServer\",\"delete\":\"deleteOneMovieServer\",\"update\":\"updateOneMovieServer\",\"deleteMany\":\"deleteManyMovieServer\",\"updateMany\":\"updateManyMovieServer\",\"upsert\":\"upsertOneMovieServer\",\"aggregate\":\"aggregateMovieServer\",\"groupBy\":\"groupByMovieServer\"},{\"model\":\"SeriesServer\",\"plural\":\"seriesServers\",\"findUnique\":\"findUniqueSeriesServer\",\"findFirst\":\"findFirstSeriesServer\",\"findMany\":\"findManySeriesServer\",\"create\":\"createOneSeriesServer\",\"createMany\":\"createManySeriesServer\",\"delete\":\"deleteOneSeriesServer\",\"update\":\"updateOneSeriesServer\",\"deleteMany\":\"deleteManySeriesServer\",\"updateMany\":\"updateManySeriesServer\",\"upsert\":\"upsertOneSeriesServer\",\"aggregate\":\"aggregateSeriesServer\",\"groupBy\":\"groupBySeriesServer\"},{\"model\":\"ShowCast\",\"plural\":\"showCasts\",\"findUnique\":\"findUniqueShowCast\",\"findFirst\":\"findFirstShowCast\",\"findMany\":\"findManyShowCast\",\"create\":\"createOneShowCast\",\"createMany\":\"createManyShowCast\",\"delete\":\"deleteOneShowCast\",\"update\":\"updateOneShowCast\",\"deleteMany\":\"deleteManyShowCast\",\"updateMany\":\"updateManyShowCast\",\"upsert\":\"upsertOneShowCast\",\"aggregate\":\"aggregateShowCast\",\"groupBy\":\"groupByShowCast\"},{\"model\":\"ShowDirector\",\"plural\":\"showDirectors\",\"findUnique\":\"findUniqueShowDirector\",\"findFirst\":\"findFirstShowDirector\",\"findMany\":\"findManyShowDirector\",\"create\":\"createOneShowDirector\",\"createMany\":\"createManyShowDirector\",\"delete\":\"deleteOneShowDirector\",\"update\":\"updateOneShowDirector\",\"deleteMany\":\"deleteManyShowDirector\",\"updateMany\":\"updateManyShowDirector\",\"upsert\":\"upsertOneShowDirector\",\"aggregate\":\"aggregateShowDirector\",\"groupBy\":\"groupByShowDirector\"},{\"model\":\"ShowGenre\",\"plural\":\"showGenres\",\"findUnique\":\"findUniqueShowGenre\",\"findFirst\":\"findFirstShowGenre\",\"findMany\":\"findManyShowGenre\",\"create\":\"createOneShowGenre\",\"createMany\":\"createManyShowGenre\",\"delete\":\"deleteOneShowGenre\",\"update\":\"updateOneShowGenre\",\"deleteMany\":\"deleteManyShowGenre\",\"updateMany\":\"updateManyShowGenre\",\"upsert\":\"upsertOneShowGenre\",\"aggregate\":\"aggregateShowGenre\",\"groupBy\":\"groupByShowGenre\"},{\"model\":\"ShowLanguage\",\"plural\":\"showLanguages\",\"findUnique\":\"findUniqueShowLanguage\",\"findFirst\":\"findFirstShowLanguage\",\"findMany\":\"findManyShowLanguage\",\"create\":\"createOneShowLanguage\",\"createMany\":\"createManyShowLanguage\",\"delete\":\"deleteOneShowLanguage\",\"update\":\"updateOneShowLanguage\",\"deleteMany\":\"deleteManyShowLanguage\",\"updateMany\":\"updateManyShowLanguage\",\"upsert\":\"upsertOneShowLanguage\",\"aggregate\":\"aggregateShowLanguage\",\"groupBy\":\"groupByShowLanguage\"},{\"model\":\"ShowStudio\",\"plural\":\"showStudios\",\"findUnique\":\"findUniqueShowStudio\",\"findFirst\":\"findFirstShowStudio\",\"findMany\":\"findManyShowStudio\",\"create\":\"createOneShowStudio\",\"createMany\":\"createManyShowStudio\",\"delete\":\"deleteOneShowStudio\",\"update\":\"updateOneShowStudio\",\"deleteMany\":\"deleteManyShowStudio\",\"updateMany\":\"updateManyShowStudio\",\"upsert\":\"upsertOneShowStudio\",\"aggregate\":\"aggregateShowStudio\",\"groupBy\":\"groupByShowStudio\"},{\"model\":\"ShowWriter\",\"plural\":\"showWriters\",\"findUnique\":\"findUniqueShowWriter\",\"findFirst\":\"findFirstShowWriter\",\"findMany\":\"findManyShowWriter\",\"create\":\"createOneShowWriter\",\"createMany\":\"createManyShowWriter\",\"delete\":\"deleteOneShowWriter\",\"update\":\"updateOneShowWriter\",\"deleteMany\":\"deleteManyShowWriter\",\"updateMany\":\"updateManyShowWriter\",\"upsert\":\"upsertOneShowWriter\",\"aggregate\":\"aggregateShowWriter\",\"groupBy\":\"groupByShowWriter\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/ares/Projects/dionysus/apollo/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "4.2.1",
  "engineVersion": "2920a97877e12e055c1333079b8d19cee7f33826",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-1.1.x.so.node");
path.join(process.cwd(), "prisma/client/libquery_engine-debian-openssl-1.1.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/schema.prisma")
