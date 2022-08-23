
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


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

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
