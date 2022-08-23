
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Show
 * 
 */
export type Show = {
  showId: number
  name: string
  releaseYear: number
  summary: string | null
  pgRating: string | null
  budget: number | null
  revenue: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Imdb
 * 
 */
export type Imdb = {
  imdbId: string
  showId: number
  rating: number | null
  voteCount: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Movie
 * 
 */
export type Movie = {
  movieId: number
  showId: number
  length: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Episode
 * 
 */
export type Episode = {
  episodeId: number
  showId: number
  season: number
  number: number
  name: string | null
  poster: string | null
  summary: string | null
  releaseYear: number | null
  length: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Server
 * 
 */
export type Server = {
  serverId: number
  name: string
  url: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Actor
 * 
 */
export type Actor = {
  actorId: number
  name: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Director
 * 
 */
export type Director = {
  directorId: number
  name: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Genre
 * 
 */
export type Genre = {
  genreId: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Language
 * 
 */
export type Language = {
  languageId: number
  name: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Studio
 * 
 */
export type Studio = {
  studioId: number
  name: string
  image: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Writer
 * 
 */
export type Writer = {
  writerId: number
  name: string
  image: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Video
 * 
 */
export type Video = {
  videoId: number
  showId: number
  name: string | null
  url: string
  site: string | null
  quality: number | null
  type: string | null
  official: boolean | null
  language: string | null
  isDefault: boolean
  publishedAt: Date
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Image
 * 
 */
export type Image = {
  imageId: number
  showId: number
  url: string
  type: string | null
  height: number | null
  width: number | null
  aspectRatio: number | null
  language: string | null
  isDefault: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model MovieServer
 * 
 */
export type MovieServer = {
  movieId: number
  serverId: number
  url: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model SeriesServer
 * 
 */
export type SeriesServer = {
  episodeId: number
  serverId: number
  url: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShowCast
 * 
 */
export type ShowCast = {
  showId: number
  actorId: number
  role: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShowDirector
 * 
 */
export type ShowDirector = {
  showId: number
  directorId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShowGenre
 * 
 */
export type ShowGenre = {
  showId: number
  genreId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShowLanguage
 * 
 */
export type ShowLanguage = {
  showId: number
  languageId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShowStudio
 * 
 */
export type ShowStudio = {
  showId: number
  studioId: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ShowWriter
 * 
 */
export type ShowWriter = {
  showId: number
  writerId: number
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shows
 * const shows = await prisma.show.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Shows
   * const shows = await prisma.show.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.show`: Exposes CRUD operations for the **Show** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shows
    * const shows = await prisma.show.findMany()
    * ```
    */
  get show(): Prisma.ShowDelegate<GlobalReject>;

  /**
   * `prisma.imdb`: Exposes CRUD operations for the **Imdb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Imdbs
    * const imdbs = await prisma.imdb.findMany()
    * ```
    */
  get imdb(): Prisma.ImdbDelegate<GlobalReject>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<GlobalReject>;

  /**
   * `prisma.episode`: Exposes CRUD operations for the **Episode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Episodes
    * const episodes = await prisma.episode.findMany()
    * ```
    */
  get episode(): Prisma.EpisodeDelegate<GlobalReject>;

  /**
   * `prisma.server`: Exposes CRUD operations for the **Server** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servers
    * const servers = await prisma.server.findMany()
    * ```
    */
  get server(): Prisma.ServerDelegate<GlobalReject>;

  /**
   * `prisma.actor`: Exposes CRUD operations for the **Actor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actor.findMany()
    * ```
    */
  get actor(): Prisma.ActorDelegate<GlobalReject>;

  /**
   * `prisma.director`: Exposes CRUD operations for the **Director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): Prisma.DirectorDelegate<GlobalReject>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<GlobalReject>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<GlobalReject>;

  /**
   * `prisma.studio`: Exposes CRUD operations for the **Studio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Studios
    * const studios = await prisma.studio.findMany()
    * ```
    */
  get studio(): Prisma.StudioDelegate<GlobalReject>;

  /**
   * `prisma.writer`: Exposes CRUD operations for the **Writer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Writers
    * const writers = await prisma.writer.findMany()
    * ```
    */
  get writer(): Prisma.WriterDelegate<GlobalReject>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<GlobalReject>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<GlobalReject>;

  /**
   * `prisma.movieServer`: Exposes CRUD operations for the **MovieServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieServers
    * const movieServers = await prisma.movieServer.findMany()
    * ```
    */
  get movieServer(): Prisma.MovieServerDelegate<GlobalReject>;

  /**
   * `prisma.seriesServer`: Exposes CRUD operations for the **SeriesServer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeriesServers
    * const seriesServers = await prisma.seriesServer.findMany()
    * ```
    */
  get seriesServer(): Prisma.SeriesServerDelegate<GlobalReject>;

  /**
   * `prisma.showCast`: Exposes CRUD operations for the **ShowCast** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowCasts
    * const showCasts = await prisma.showCast.findMany()
    * ```
    */
  get showCast(): Prisma.ShowCastDelegate<GlobalReject>;

  /**
   * `prisma.showDirector`: Exposes CRUD operations for the **ShowDirector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowDirectors
    * const showDirectors = await prisma.showDirector.findMany()
    * ```
    */
  get showDirector(): Prisma.ShowDirectorDelegate<GlobalReject>;

  /**
   * `prisma.showGenre`: Exposes CRUD operations for the **ShowGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowGenres
    * const showGenres = await prisma.showGenre.findMany()
    * ```
    */
  get showGenre(): Prisma.ShowGenreDelegate<GlobalReject>;

  /**
   * `prisma.showLanguage`: Exposes CRUD operations for the **ShowLanguage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowLanguages
    * const showLanguages = await prisma.showLanguage.findMany()
    * ```
    */
  get showLanguage(): Prisma.ShowLanguageDelegate<GlobalReject>;

  /**
   * `prisma.showStudio`: Exposes CRUD operations for the **ShowStudio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowStudios
    * const showStudios = await prisma.showStudio.findMany()
    * ```
    */
  get showStudio(): Prisma.ShowStudioDelegate<GlobalReject>;

  /**
   * `prisma.showWriter`: Exposes CRUD operations for the **ShowWriter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShowWriters
    * const showWriters = await prisma.showWriter.findMany()
    * ```
    */
  get showWriter(): Prisma.ShowWriterDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.2.1
   * Query Engine version: 2920a97877e12e055c1333079b8d19cee7f33826
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ShowCountOutputType
   */


  export type ShowCountOutputType = {
    Episode: number
    Image: number
    Video: number
    ShowCast: number
    ShowDirector: number
    ShowGenre: number
    ShowLanguage: number
    ShowStudio: number
    ShowWriter: number
  }

  export type ShowCountOutputTypeSelect = {
    Episode?: boolean
    Image?: boolean
    Video?: boolean
    ShowCast?: boolean
    ShowDirector?: boolean
    ShowGenre?: boolean
    ShowLanguage?: boolean
    ShowStudio?: boolean
    ShowWriter?: boolean
  }

  export type ShowCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ShowCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ShowCountOutputType
    : S extends undefined
    ? never
    : S extends ShowCountOutputTypeArgs
    ?'include' extends U
    ? ShowCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ShowCountOutputType ? ShowCountOutputType[P] : never
  } 
    : ShowCountOutputType
  : ShowCountOutputType




  // Custom InputTypes

  /**
   * ShowCountOutputType without action
   */
  export type ShowCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ShowCountOutputType
     * 
    **/
    select?: ShowCountOutputTypeSelect | null
  }



  /**
   * Count Type MovieCountOutputType
   */


  export type MovieCountOutputType = {
    MovieServer: number
  }

  export type MovieCountOutputTypeSelect = {
    MovieServer?: boolean
  }

  export type MovieCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MovieCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MovieCountOutputType
    : S extends undefined
    ? never
    : S extends MovieCountOutputTypeArgs
    ?'include' extends U
    ? MovieCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MovieCountOutputType ? MovieCountOutputType[P] : never
  } 
    : MovieCountOutputType
  : MovieCountOutputType




  // Custom InputTypes

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     * 
    **/
    select?: MovieCountOutputTypeSelect | null
  }



  /**
   * Count Type EpisodeCountOutputType
   */


  export type EpisodeCountOutputType = {
    SeriesServer: number
  }

  export type EpisodeCountOutputTypeSelect = {
    SeriesServer?: boolean
  }

  export type EpisodeCountOutputTypeGetPayload<
    S extends boolean | null | undefined | EpisodeCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? EpisodeCountOutputType
    : S extends undefined
    ? never
    : S extends EpisodeCountOutputTypeArgs
    ?'include' extends U
    ? EpisodeCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof EpisodeCountOutputType ? EpisodeCountOutputType[P] : never
  } 
    : EpisodeCountOutputType
  : EpisodeCountOutputType




  // Custom InputTypes

  /**
   * EpisodeCountOutputType without action
   */
  export type EpisodeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the EpisodeCountOutputType
     * 
    **/
    select?: EpisodeCountOutputTypeSelect | null
  }



  /**
   * Count Type ServerCountOutputType
   */


  export type ServerCountOutputType = {
    MovieServer: number
    SeriesServer: number
  }

  export type ServerCountOutputTypeSelect = {
    MovieServer?: boolean
    SeriesServer?: boolean
  }

  export type ServerCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ServerCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ServerCountOutputType
    : S extends undefined
    ? never
    : S extends ServerCountOutputTypeArgs
    ?'include' extends U
    ? ServerCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ServerCountOutputType ? ServerCountOutputType[P] : never
  } 
    : ServerCountOutputType
  : ServerCountOutputType




  // Custom InputTypes

  /**
   * ServerCountOutputType without action
   */
  export type ServerCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ServerCountOutputType
     * 
    **/
    select?: ServerCountOutputTypeSelect | null
  }



  /**
   * Count Type ActorCountOutputType
   */


  export type ActorCountOutputType = {
    MovieCast: number
  }

  export type ActorCountOutputTypeSelect = {
    MovieCast?: boolean
  }

  export type ActorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ActorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ActorCountOutputType
    : S extends undefined
    ? never
    : S extends ActorCountOutputTypeArgs
    ?'include' extends U
    ? ActorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof ActorCountOutputType ? ActorCountOutputType[P] : never
  } 
    : ActorCountOutputType
  : ActorCountOutputType




  // Custom InputTypes

  /**
   * ActorCountOutputType without action
   */
  export type ActorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ActorCountOutputType
     * 
    **/
    select?: ActorCountOutputTypeSelect | null
  }



  /**
   * Count Type DirectorCountOutputType
   */


  export type DirectorCountOutputType = {
    ShowDirector: number
  }

  export type DirectorCountOutputTypeSelect = {
    ShowDirector?: boolean
  }

  export type DirectorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DirectorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DirectorCountOutputType
    : S extends undefined
    ? never
    : S extends DirectorCountOutputTypeArgs
    ?'include' extends U
    ? DirectorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DirectorCountOutputType ? DirectorCountOutputType[P] : never
  } 
    : DirectorCountOutputType
  : DirectorCountOutputType




  // Custom InputTypes

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     * 
    **/
    select?: DirectorCountOutputTypeSelect | null
  }



  /**
   * Count Type GenreCountOutputType
   */


  export type GenreCountOutputType = {
    ShowGenre: number
  }

  export type GenreCountOutputTypeSelect = {
    ShowGenre?: boolean
  }

  export type GenreCountOutputTypeGetPayload<
    S extends boolean | null | undefined | GenreCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? GenreCountOutputType
    : S extends undefined
    ? never
    : S extends GenreCountOutputTypeArgs
    ?'include' extends U
    ? GenreCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof GenreCountOutputType ? GenreCountOutputType[P] : never
  } 
    : GenreCountOutputType
  : GenreCountOutputType




  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     * 
    **/
    select?: GenreCountOutputTypeSelect | null
  }



  /**
   * Count Type LanguageCountOutputType
   */


  export type LanguageCountOutputType = {
    ShowLanguage: number
  }

  export type LanguageCountOutputTypeSelect = {
    ShowLanguage?: boolean
  }

  export type LanguageCountOutputTypeGetPayload<
    S extends boolean | null | undefined | LanguageCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? LanguageCountOutputType
    : S extends undefined
    ? never
    : S extends LanguageCountOutputTypeArgs
    ?'include' extends U
    ? LanguageCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof LanguageCountOutputType ? LanguageCountOutputType[P] : never
  } 
    : LanguageCountOutputType
  : LanguageCountOutputType




  // Custom InputTypes

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     * 
    **/
    select?: LanguageCountOutputTypeSelect | null
  }



  /**
   * Count Type StudioCountOutputType
   */


  export type StudioCountOutputType = {
    ShowStudio: number
  }

  export type StudioCountOutputTypeSelect = {
    ShowStudio?: boolean
  }

  export type StudioCountOutputTypeGetPayload<
    S extends boolean | null | undefined | StudioCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? StudioCountOutputType
    : S extends undefined
    ? never
    : S extends StudioCountOutputTypeArgs
    ?'include' extends U
    ? StudioCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof StudioCountOutputType ? StudioCountOutputType[P] : never
  } 
    : StudioCountOutputType
  : StudioCountOutputType




  // Custom InputTypes

  /**
   * StudioCountOutputType without action
   */
  export type StudioCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StudioCountOutputType
     * 
    **/
    select?: StudioCountOutputTypeSelect | null
  }



  /**
   * Count Type WriterCountOutputType
   */


  export type WriterCountOutputType = {
    ShowWriter: number
  }

  export type WriterCountOutputTypeSelect = {
    ShowWriter?: boolean
  }

  export type WriterCountOutputTypeGetPayload<
    S extends boolean | null | undefined | WriterCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? WriterCountOutputType
    : S extends undefined
    ? never
    : S extends WriterCountOutputTypeArgs
    ?'include' extends U
    ? WriterCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof WriterCountOutputType ? WriterCountOutputType[P] : never
  } 
    : WriterCountOutputType
  : WriterCountOutputType




  // Custom InputTypes

  /**
   * WriterCountOutputType without action
   */
  export type WriterCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WriterCountOutputType
     * 
    **/
    select?: WriterCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Show
   */


  export type AggregateShow = {
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  export type ShowAvgAggregateOutputType = {
    showId: number | null
    releaseYear: number | null
    budget: number | null
    revenue: number | null
  }

  export type ShowSumAggregateOutputType = {
    showId: number | null
    releaseYear: number | null
    budget: number | null
    revenue: number | null
  }

  export type ShowMinAggregateOutputType = {
    showId: number | null
    name: string | null
    releaseYear: number | null
    summary: string | null
    pgRating: string | null
    budget: number | null
    revenue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowMaxAggregateOutputType = {
    showId: number | null
    name: string | null
    releaseYear: number | null
    summary: string | null
    pgRating: string | null
    budget: number | null
    revenue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCountAggregateOutputType = {
    showId: number
    name: number
    releaseYear: number
    summary: number
    pgRating: number
    budget: number
    revenue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowAvgAggregateInputType = {
    showId?: true
    releaseYear?: true
    budget?: true
    revenue?: true
  }

  export type ShowSumAggregateInputType = {
    showId?: true
    releaseYear?: true
    budget?: true
    revenue?: true
  }

  export type ShowMinAggregateInputType = {
    showId?: true
    name?: true
    releaseYear?: true
    summary?: true
    pgRating?: true
    budget?: true
    revenue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowMaxAggregateInputType = {
    showId?: true
    name?: true
    releaseYear?: true
    summary?: true
    pgRating?: true
    budget?: true
    revenue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCountAggregateInputType = {
    showId?: true
    name?: true
    releaseYear?: true
    summary?: true
    pgRating?: true
    budget?: true
    revenue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowAggregateArgs = {
    /**
     * Filter which Show to aggregate.
     * 
    **/
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shows
    **/
    _count?: true | ShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowMaxAggregateInputType
  }

  export type GetShowAggregateType<T extends ShowAggregateArgs> = {
        [P in keyof T & keyof AggregateShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShow[P]>
      : GetScalarType<T[P], AggregateShow[P]>
  }




  export type ShowGroupByArgs = {
    where?: ShowWhereInput
    orderBy?: Enumerable<ShowOrderByWithAggregationInput>
    by: Array<ShowScalarFieldEnum>
    having?: ShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCountAggregateInputType | true
    _avg?: ShowAvgAggregateInputType
    _sum?: ShowSumAggregateInputType
    _min?: ShowMinAggregateInputType
    _max?: ShowMaxAggregateInputType
  }


  export type ShowGroupByOutputType = {
    showId: number
    name: string
    releaseYear: number
    summary: string | null
    pgRating: string | null
    budget: number | null
    revenue: number | null
    createdAt: Date
    updatedAt: Date
    _count: ShowCountAggregateOutputType | null
    _avg: ShowAvgAggregateOutputType | null
    _sum: ShowSumAggregateOutputType | null
    _min: ShowMinAggregateOutputType | null
    _max: ShowMaxAggregateOutputType | null
  }

  type GetShowGroupByPayload<T extends ShowGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGroupByOutputType[P]>
        }
      >
    >


  export type ShowSelect = {
    showId?: boolean
    name?: boolean
    releaseYear?: boolean
    summary?: boolean
    pgRating?: boolean
    budget?: boolean
    revenue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Imdb?: boolean | ImdbArgs
    Movie?: boolean | MovieArgs
    Episode?: boolean | EpisodeFindManyArgs
    Image?: boolean | ImageFindManyArgs
    Video?: boolean | VideoFindManyArgs
    ShowCast?: boolean | ShowCastFindManyArgs
    ShowDirector?: boolean | ShowDirectorFindManyArgs
    ShowGenre?: boolean | ShowGenreFindManyArgs
    ShowLanguage?: boolean | ShowLanguageFindManyArgs
    ShowStudio?: boolean | ShowStudioFindManyArgs
    ShowWriter?: boolean | ShowWriterFindManyArgs
    _count?: boolean | ShowCountOutputTypeArgs
  }

  export type ShowInclude = {
    Imdb?: boolean | ImdbArgs
    Movie?: boolean | MovieArgs
    Episode?: boolean | EpisodeFindManyArgs
    Image?: boolean | ImageFindManyArgs
    Video?: boolean | VideoFindManyArgs
    ShowCast?: boolean | ShowCastFindManyArgs
    ShowDirector?: boolean | ShowDirectorFindManyArgs
    ShowGenre?: boolean | ShowGenreFindManyArgs
    ShowLanguage?: boolean | ShowLanguageFindManyArgs
    ShowStudio?: boolean | ShowStudioFindManyArgs
    ShowWriter?: boolean | ShowWriterFindManyArgs
    _count?: boolean | ShowCountOutputTypeArgs
  }

  export type ShowGetPayload<
    S extends boolean | null | undefined | ShowArgs,
    U = keyof S
      > = S extends true
        ? Show
    : S extends undefined
    ? never
    : S extends ShowArgs | ShowFindManyArgs
    ?'include' extends U
    ? Show  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Imdb' ? ImdbGetPayload<S['include'][P]> | null :
        P extends 'Movie' ? MovieGetPayload<S['include'][P]> | null :
        P extends 'Episode' ? Array < EpisodeGetPayload<S['include'][P]>>  :
        P extends 'Image' ? Array < ImageGetPayload<S['include'][P]>>  :
        P extends 'Video' ? Array < VideoGetPayload<S['include'][P]>>  :
        P extends 'ShowCast' ? Array < ShowCastGetPayload<S['include'][P]>>  :
        P extends 'ShowDirector' ? Array < ShowDirectorGetPayload<S['include'][P]>>  :
        P extends 'ShowGenre' ? Array < ShowGenreGetPayload<S['include'][P]>>  :
        P extends 'ShowLanguage' ? Array < ShowLanguageGetPayload<S['include'][P]>>  :
        P extends 'ShowStudio' ? Array < ShowStudioGetPayload<S['include'][P]>>  :
        P extends 'ShowWriter' ? Array < ShowWriterGetPayload<S['include'][P]>>  :
        P extends '_count' ? ShowCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Imdb' ? ImdbGetPayload<S['select'][P]> | null :
        P extends 'Movie' ? MovieGetPayload<S['select'][P]> | null :
        P extends 'Episode' ? Array < EpisodeGetPayload<S['select'][P]>>  :
        P extends 'Image' ? Array < ImageGetPayload<S['select'][P]>>  :
        P extends 'Video' ? Array < VideoGetPayload<S['select'][P]>>  :
        P extends 'ShowCast' ? Array < ShowCastGetPayload<S['select'][P]>>  :
        P extends 'ShowDirector' ? Array < ShowDirectorGetPayload<S['select'][P]>>  :
        P extends 'ShowGenre' ? Array < ShowGenreGetPayload<S['select'][P]>>  :
        P extends 'ShowLanguage' ? Array < ShowLanguageGetPayload<S['select'][P]>>  :
        P extends 'ShowStudio' ? Array < ShowStudioGetPayload<S['select'][P]>>  :
        P extends 'ShowWriter' ? Array < ShowWriterGetPayload<S['select'][P]>>  :
        P extends '_count' ? ShowCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Show ? Show[P] : never
  } 
    : Show
  : Show


  type ShowCountArgs = Merge<
    Omit<ShowFindManyArgs, 'select' | 'include'> & {
      select?: ShowCountAggregateInputType | true
    }
  >

  export interface ShowDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Show that matches the filter.
     * @param {ShowFindUniqueArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Show'> extends True ? CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>> : CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>

    /**
     * Find the first Show that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Show'> extends True ? CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>> : CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>

    /**
     * Find zero or more Shows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shows
     * const shows = await prisma.show.findMany()
     * 
     * // Get first 10 Shows
     * const shows = await prisma.show.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showWithShowIdOnly = await prisma.show.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowFindManyArgs>(
      args?: SelectSubset<T, ShowFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Show>>, PrismaPromise<Array<ShowGetPayload<T>>>>

    /**
     * Create a Show.
     * @param {ShowCreateArgs} args - Arguments to create a Show.
     * @example
     * // Create one Show
     * const Show = await prisma.show.create({
     *   data: {
     *     // ... data to create a Show
     *   }
     * })
     * 
    **/
    create<T extends ShowCreateArgs>(
      args: SelectSubset<T, ShowCreateArgs>
    ): CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>>

    /**
     * Create many Shows.
     *     @param {ShowCreateManyArgs} args - Arguments to create many Shows.
     *     @example
     *     // Create many Shows
     *     const show = await prisma.show.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowCreateManyArgs>(
      args?: SelectSubset<T, ShowCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Show.
     * @param {ShowDeleteArgs} args - Arguments to delete one Show.
     * @example
     * // Delete one Show
     * const Show = await prisma.show.delete({
     *   where: {
     *     // ... filter to delete one Show
     *   }
     * })
     * 
    **/
    delete<T extends ShowDeleteArgs>(
      args: SelectSubset<T, ShowDeleteArgs>
    ): CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>>

    /**
     * Update one Show.
     * @param {ShowUpdateArgs} args - Arguments to update one Show.
     * @example
     * // Update one Show
     * const show = await prisma.show.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowUpdateArgs>(
      args: SelectSubset<T, ShowUpdateArgs>
    ): CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>>

    /**
     * Delete zero or more Shows.
     * @param {ShowDeleteManyArgs} args - Arguments to filter Shows to delete.
     * @example
     * // Delete a few Shows
     * const { count } = await prisma.show.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowDeleteManyArgs>(
      args?: SelectSubset<T, ShowDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shows
     * const show = await prisma.show.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowUpdateManyArgs>(
      args: SelectSubset<T, ShowUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Show.
     * @param {ShowUpsertArgs} args - Arguments to update or create a Show.
     * @example
     * // Update or create a Show
     * const show = await prisma.show.upsert({
     *   create: {
     *     // ... data to create a Show
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Show we want to update
     *   }
     * })
    **/
    upsert<T extends ShowUpsertArgs>(
      args: SelectSubset<T, ShowUpsertArgs>
    ): CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>>

    /**
     * Find one Show that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowFindUniqueOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>>

    /**
     * Find the first Show that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowFindFirstOrThrowArgs} args - Arguments to find a Show
     * @example
     * // Get one Show
     * const show = await prisma.show.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowClient<Show>, Prisma__ShowClient<ShowGetPayload<T>>>

    /**
     * Count the number of Shows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCountArgs} args - Arguments to filter Shows to count.
     * @example
     * // Count the number of Shows
     * const count = await prisma.show.count({
     *   where: {
     *     // ... the filter for the Shows we want to count
     *   }
     * })
    **/
    count<T extends ShowCountArgs>(
      args?: Subset<T, ShowCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowAggregateArgs>(args: Subset<T, ShowAggregateArgs>): PrismaPromise<GetShowAggregateType<T>>

    /**
     * Group by Show.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGroupByArgs['orderBy'] }
        : { orderBy?: ShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Show.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Imdb<T extends ImdbArgs = {}>(args?: Subset<T, ImdbArgs>): CheckSelect<T, Prisma__ImdbClient<Imdb | null >, Prisma__ImdbClient<ImdbGetPayload<T> | null >>;

    Movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>;

    Episode<T extends EpisodeFindManyArgs = {}>(args?: Subset<T, EpisodeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Episode>>, PrismaPromise<Array<EpisodeGetPayload<T>>>>;

    Image<T extends ImageFindManyArgs = {}>(args?: Subset<T, ImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>;

    Video<T extends VideoFindManyArgs = {}>(args?: Subset<T, VideoFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Video>>, PrismaPromise<Array<VideoGetPayload<T>>>>;

    ShowCast<T extends ShowCastFindManyArgs = {}>(args?: Subset<T, ShowCastFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowCast>>, PrismaPromise<Array<ShowCastGetPayload<T>>>>;

    ShowDirector<T extends ShowDirectorFindManyArgs = {}>(args?: Subset<T, ShowDirectorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowDirector>>, PrismaPromise<Array<ShowDirectorGetPayload<T>>>>;

    ShowGenre<T extends ShowGenreFindManyArgs = {}>(args?: Subset<T, ShowGenreFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowGenre>>, PrismaPromise<Array<ShowGenreGetPayload<T>>>>;

    ShowLanguage<T extends ShowLanguageFindManyArgs = {}>(args?: Subset<T, ShowLanguageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowLanguage>>, PrismaPromise<Array<ShowLanguageGetPayload<T>>>>;

    ShowStudio<T extends ShowStudioFindManyArgs = {}>(args?: Subset<T, ShowStudioFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowStudio>>, PrismaPromise<Array<ShowStudioGetPayload<T>>>>;

    ShowWriter<T extends ShowWriterFindManyArgs = {}>(args?: Subset<T, ShowWriterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowWriter>>, PrismaPromise<Array<ShowWriterGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Show base type for findUnique actions
   */
  export type ShowFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * Filter, which Show to fetch.
     * 
    **/
    where: ShowWhereUniqueInput
  }

  /**
   * Show: findUnique
   */
  export interface ShowFindUniqueArgs extends ShowFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Show base type for findFirst actions
   */
  export type ShowFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * Filter, which Show to fetch.
     * 
    **/
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shows.
     * 
    **/
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shows.
     * 
    **/
    distinct?: Enumerable<ShowScalarFieldEnum>
  }

  /**
   * Show: findFirst
   */
  export interface ShowFindFirstArgs extends ShowFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Show findMany
   */
  export type ShowFindManyArgs = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * Filter, which Shows to fetch.
     * 
    **/
    where?: ShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shows to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shows.
     * 
    **/
    cursor?: ShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shows from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shows.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowScalarFieldEnum>
  }


  /**
   * Show create
   */
  export type ShowCreateArgs = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * The data needed to create a Show.
     * 
    **/
    data: XOR<ShowCreateInput, ShowUncheckedCreateInput>
  }


  /**
   * Show createMany
   */
  export type ShowCreateManyArgs = {
    /**
     * The data used to create many Shows.
     * 
    **/
    data: Enumerable<ShowCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Show update
   */
  export type ShowUpdateArgs = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * The data needed to update a Show.
     * 
    **/
    data: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
    /**
     * Choose, which Show to update.
     * 
    **/
    where: ShowWhereUniqueInput
  }


  /**
   * Show updateMany
   */
  export type ShowUpdateManyArgs = {
    /**
     * The data used to update Shows.
     * 
    **/
    data: XOR<ShowUpdateManyMutationInput, ShowUncheckedUpdateManyInput>
    /**
     * Filter which Shows to update
     * 
    **/
    where?: ShowWhereInput
  }


  /**
   * Show upsert
   */
  export type ShowUpsertArgs = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * The filter to search for the Show to update in case it exists.
     * 
    **/
    where: ShowWhereUniqueInput
    /**
     * In case the Show found by the `where` argument doesn't exist, create a new Show with this data.
     * 
    **/
    create: XOR<ShowCreateInput, ShowUncheckedCreateInput>
    /**
     * In case the Show was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowUpdateInput, ShowUncheckedUpdateInput>
  }


  /**
   * Show delete
   */
  export type ShowDeleteArgs = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
    /**
     * Filter which Show to delete.
     * 
    **/
    where: ShowWhereUniqueInput
  }


  /**
   * Show deleteMany
   */
  export type ShowDeleteManyArgs = {
    /**
     * Filter which Shows to delete
     * 
    **/
    where?: ShowWhereInput
  }


  /**
   * Show: findUniqueOrThrow
   */
  export type ShowFindUniqueOrThrowArgs = ShowFindUniqueArgsBase
      

  /**
   * Show: findFirstOrThrow
   */
  export type ShowFindFirstOrThrowArgs = ShowFindFirstArgsBase
      

  /**
   * Show without action
   */
  export type ShowArgs = {
    /**
     * Select specific fields to fetch from the Show
     * 
    **/
    select?: ShowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowInclude | null
  }



  /**
   * Model Imdb
   */


  export type AggregateImdb = {
    _count: ImdbCountAggregateOutputType | null
    _avg: ImdbAvgAggregateOutputType | null
    _sum: ImdbSumAggregateOutputType | null
    _min: ImdbMinAggregateOutputType | null
    _max: ImdbMaxAggregateOutputType | null
  }

  export type ImdbAvgAggregateOutputType = {
    showId: number | null
    rating: number | null
    voteCount: number | null
  }

  export type ImdbSumAggregateOutputType = {
    showId: number | null
    rating: number | null
    voteCount: number | null
  }

  export type ImdbMinAggregateOutputType = {
    imdbId: string | null
    showId: number | null
    rating: number | null
    voteCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImdbMaxAggregateOutputType = {
    imdbId: string | null
    showId: number | null
    rating: number | null
    voteCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImdbCountAggregateOutputType = {
    imdbId: number
    showId: number
    rating: number
    voteCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImdbAvgAggregateInputType = {
    showId?: true
    rating?: true
    voteCount?: true
  }

  export type ImdbSumAggregateInputType = {
    showId?: true
    rating?: true
    voteCount?: true
  }

  export type ImdbMinAggregateInputType = {
    imdbId?: true
    showId?: true
    rating?: true
    voteCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImdbMaxAggregateInputType = {
    imdbId?: true
    showId?: true
    rating?: true
    voteCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImdbCountAggregateInputType = {
    imdbId?: true
    showId?: true
    rating?: true
    voteCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImdbAggregateArgs = {
    /**
     * Filter which Imdb to aggregate.
     * 
    **/
    where?: ImdbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imdbs to fetch.
     * 
    **/
    orderBy?: Enumerable<ImdbOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImdbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imdbs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imdbs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Imdbs
    **/
    _count?: true | ImdbCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImdbAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImdbSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImdbMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImdbMaxAggregateInputType
  }

  export type GetImdbAggregateType<T extends ImdbAggregateArgs> = {
        [P in keyof T & keyof AggregateImdb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImdb[P]>
      : GetScalarType<T[P], AggregateImdb[P]>
  }




  export type ImdbGroupByArgs = {
    where?: ImdbWhereInput
    orderBy?: Enumerable<ImdbOrderByWithAggregationInput>
    by: Array<ImdbScalarFieldEnum>
    having?: ImdbScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImdbCountAggregateInputType | true
    _avg?: ImdbAvgAggregateInputType
    _sum?: ImdbSumAggregateInputType
    _min?: ImdbMinAggregateInputType
    _max?: ImdbMaxAggregateInputType
  }


  export type ImdbGroupByOutputType = {
    imdbId: string
    showId: number
    rating: number | null
    voteCount: number | null
    createdAt: Date
    updatedAt: Date
    _count: ImdbCountAggregateOutputType | null
    _avg: ImdbAvgAggregateOutputType | null
    _sum: ImdbSumAggregateOutputType | null
    _min: ImdbMinAggregateOutputType | null
    _max: ImdbMaxAggregateOutputType | null
  }

  type GetImdbGroupByPayload<T extends ImdbGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImdbGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImdbGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImdbGroupByOutputType[P]>
            : GetScalarType<T[P], ImdbGroupByOutputType[P]>
        }
      >
    >


  export type ImdbSelect = {
    imdbId?: boolean
    show?: boolean | ShowArgs
    showId?: boolean
    rating?: boolean
    voteCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImdbInclude = {
    show?: boolean | ShowArgs
  }

  export type ImdbGetPayload<
    S extends boolean | null | undefined | ImdbArgs,
    U = keyof S
      > = S extends true
        ? Imdb
    : S extends undefined
    ? never
    : S extends ImdbArgs | ImdbFindManyArgs
    ?'include' extends U
    ? Imdb  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :  P extends keyof Imdb ? Imdb[P] : never
  } 
    : Imdb
  : Imdb


  type ImdbCountArgs = Merge<
    Omit<ImdbFindManyArgs, 'select' | 'include'> & {
      select?: ImdbCountAggregateInputType | true
    }
  >

  export interface ImdbDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Imdb that matches the filter.
     * @param {ImdbFindUniqueArgs} args - Arguments to find a Imdb
     * @example
     * // Get one Imdb
     * const imdb = await prisma.imdb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImdbFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImdbFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Imdb'> extends True ? CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>> : CheckSelect<T, Prisma__ImdbClient<Imdb | null >, Prisma__ImdbClient<ImdbGetPayload<T> | null >>

    /**
     * Find the first Imdb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbFindFirstArgs} args - Arguments to find a Imdb
     * @example
     * // Get one Imdb
     * const imdb = await prisma.imdb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImdbFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImdbFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Imdb'> extends True ? CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>> : CheckSelect<T, Prisma__ImdbClient<Imdb | null >, Prisma__ImdbClient<ImdbGetPayload<T> | null >>

    /**
     * Find zero or more Imdbs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Imdbs
     * const imdbs = await prisma.imdb.findMany()
     * 
     * // Get first 10 Imdbs
     * const imdbs = await prisma.imdb.findMany({ take: 10 })
     * 
     * // Only select the `imdbId`
     * const imdbWithImdbIdOnly = await prisma.imdb.findMany({ select: { imdbId: true } })
     * 
    **/
    findMany<T extends ImdbFindManyArgs>(
      args?: SelectSubset<T, ImdbFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Imdb>>, PrismaPromise<Array<ImdbGetPayload<T>>>>

    /**
     * Create a Imdb.
     * @param {ImdbCreateArgs} args - Arguments to create a Imdb.
     * @example
     * // Create one Imdb
     * const Imdb = await prisma.imdb.create({
     *   data: {
     *     // ... data to create a Imdb
     *   }
     * })
     * 
    **/
    create<T extends ImdbCreateArgs>(
      args: SelectSubset<T, ImdbCreateArgs>
    ): CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>>

    /**
     * Create many Imdbs.
     *     @param {ImdbCreateManyArgs} args - Arguments to create many Imdbs.
     *     @example
     *     // Create many Imdbs
     *     const imdb = await prisma.imdb.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImdbCreateManyArgs>(
      args?: SelectSubset<T, ImdbCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Imdb.
     * @param {ImdbDeleteArgs} args - Arguments to delete one Imdb.
     * @example
     * // Delete one Imdb
     * const Imdb = await prisma.imdb.delete({
     *   where: {
     *     // ... filter to delete one Imdb
     *   }
     * })
     * 
    **/
    delete<T extends ImdbDeleteArgs>(
      args: SelectSubset<T, ImdbDeleteArgs>
    ): CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>>

    /**
     * Update one Imdb.
     * @param {ImdbUpdateArgs} args - Arguments to update one Imdb.
     * @example
     * // Update one Imdb
     * const imdb = await prisma.imdb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImdbUpdateArgs>(
      args: SelectSubset<T, ImdbUpdateArgs>
    ): CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>>

    /**
     * Delete zero or more Imdbs.
     * @param {ImdbDeleteManyArgs} args - Arguments to filter Imdbs to delete.
     * @example
     * // Delete a few Imdbs
     * const { count } = await prisma.imdb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImdbDeleteManyArgs>(
      args?: SelectSubset<T, ImdbDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Imdbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Imdbs
     * const imdb = await prisma.imdb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImdbUpdateManyArgs>(
      args: SelectSubset<T, ImdbUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Imdb.
     * @param {ImdbUpsertArgs} args - Arguments to update or create a Imdb.
     * @example
     * // Update or create a Imdb
     * const imdb = await prisma.imdb.upsert({
     *   create: {
     *     // ... data to create a Imdb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Imdb we want to update
     *   }
     * })
    **/
    upsert<T extends ImdbUpsertArgs>(
      args: SelectSubset<T, ImdbUpsertArgs>
    ): CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>>

    /**
     * Find one Imdb that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ImdbFindUniqueOrThrowArgs} args - Arguments to find a Imdb
     * @example
     * // Get one Imdb
     * const imdb = await prisma.imdb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImdbFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImdbFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>>

    /**
     * Find the first Imdb that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbFindFirstOrThrowArgs} args - Arguments to find a Imdb
     * @example
     * // Get one Imdb
     * const imdb = await prisma.imdb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImdbFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImdbFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ImdbClient<Imdb>, Prisma__ImdbClient<ImdbGetPayload<T>>>

    /**
     * Count the number of Imdbs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbCountArgs} args - Arguments to filter Imdbs to count.
     * @example
     * // Count the number of Imdbs
     * const count = await prisma.imdb.count({
     *   where: {
     *     // ... the filter for the Imdbs we want to count
     *   }
     * })
    **/
    count<T extends ImdbCountArgs>(
      args?: Subset<T, ImdbCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImdbCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Imdb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImdbAggregateArgs>(args: Subset<T, ImdbAggregateArgs>): PrismaPromise<GetImdbAggregateType<T>>

    /**
     * Group by Imdb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImdbGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImdbGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImdbGroupByArgs['orderBy'] }
        : { orderBy?: ImdbGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImdbGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImdbGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Imdb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImdbClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Imdb base type for findUnique actions
   */
  export type ImdbFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * Filter, which Imdb to fetch.
     * 
    **/
    where: ImdbWhereUniqueInput
  }

  /**
   * Imdb: findUnique
   */
  export interface ImdbFindUniqueArgs extends ImdbFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Imdb base type for findFirst actions
   */
  export type ImdbFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * Filter, which Imdb to fetch.
     * 
    **/
    where?: ImdbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imdbs to fetch.
     * 
    **/
    orderBy?: Enumerable<ImdbOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Imdbs.
     * 
    **/
    cursor?: ImdbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imdbs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imdbs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Imdbs.
     * 
    **/
    distinct?: Enumerable<ImdbScalarFieldEnum>
  }

  /**
   * Imdb: findFirst
   */
  export interface ImdbFindFirstArgs extends ImdbFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Imdb findMany
   */
  export type ImdbFindManyArgs = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * Filter, which Imdbs to fetch.
     * 
    **/
    where?: ImdbWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Imdbs to fetch.
     * 
    **/
    orderBy?: Enumerable<ImdbOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Imdbs.
     * 
    **/
    cursor?: ImdbWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Imdbs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Imdbs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImdbScalarFieldEnum>
  }


  /**
   * Imdb create
   */
  export type ImdbCreateArgs = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * The data needed to create a Imdb.
     * 
    **/
    data: XOR<ImdbCreateInput, ImdbUncheckedCreateInput>
  }


  /**
   * Imdb createMany
   */
  export type ImdbCreateManyArgs = {
    /**
     * The data used to create many Imdbs.
     * 
    **/
    data: Enumerable<ImdbCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Imdb update
   */
  export type ImdbUpdateArgs = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * The data needed to update a Imdb.
     * 
    **/
    data: XOR<ImdbUpdateInput, ImdbUncheckedUpdateInput>
    /**
     * Choose, which Imdb to update.
     * 
    **/
    where: ImdbWhereUniqueInput
  }


  /**
   * Imdb updateMany
   */
  export type ImdbUpdateManyArgs = {
    /**
     * The data used to update Imdbs.
     * 
    **/
    data: XOR<ImdbUpdateManyMutationInput, ImdbUncheckedUpdateManyInput>
    /**
     * Filter which Imdbs to update
     * 
    **/
    where?: ImdbWhereInput
  }


  /**
   * Imdb upsert
   */
  export type ImdbUpsertArgs = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * The filter to search for the Imdb to update in case it exists.
     * 
    **/
    where: ImdbWhereUniqueInput
    /**
     * In case the Imdb found by the `where` argument doesn't exist, create a new Imdb with this data.
     * 
    **/
    create: XOR<ImdbCreateInput, ImdbUncheckedCreateInput>
    /**
     * In case the Imdb was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImdbUpdateInput, ImdbUncheckedUpdateInput>
  }


  /**
   * Imdb delete
   */
  export type ImdbDeleteArgs = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
    /**
     * Filter which Imdb to delete.
     * 
    **/
    where: ImdbWhereUniqueInput
  }


  /**
   * Imdb deleteMany
   */
  export type ImdbDeleteManyArgs = {
    /**
     * Filter which Imdbs to delete
     * 
    **/
    where?: ImdbWhereInput
  }


  /**
   * Imdb: findUniqueOrThrow
   */
  export type ImdbFindUniqueOrThrowArgs = ImdbFindUniqueArgsBase
      

  /**
   * Imdb: findFirstOrThrow
   */
  export type ImdbFindFirstOrThrowArgs = ImdbFindFirstArgsBase
      

  /**
   * Imdb without action
   */
  export type ImdbArgs = {
    /**
     * Select specific fields to fetch from the Imdb
     * 
    **/
    select?: ImdbSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImdbInclude | null
  }



  /**
   * Model Movie
   */


  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieAvgAggregateOutputType = {
    movieId: number | null
    showId: number | null
    length: number | null
  }

  export type MovieSumAggregateOutputType = {
    movieId: number | null
    showId: number | null
    length: number | null
  }

  export type MovieMinAggregateOutputType = {
    movieId: number | null
    showId: number | null
    length: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieMaxAggregateOutputType = {
    movieId: number | null
    showId: number | null
    length: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieCountAggregateOutputType = {
    movieId: number
    showId: number
    length: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieAvgAggregateInputType = {
    movieId?: true
    showId?: true
    length?: true
  }

  export type MovieSumAggregateInputType = {
    movieId?: true
    showId?: true
    length?: true
  }

  export type MovieMinAggregateInputType = {
    movieId?: true
    showId?: true
    length?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieMaxAggregateInputType = {
    movieId?: true
    showId?: true
    length?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieCountAggregateInputType = {
    movieId?: true
    showId?: true
    length?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieAggregateArgs = {
    /**
     * Filter which Movie to aggregate.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs = {
    where?: MovieWhereInput
    orderBy?: Enumerable<MovieOrderByWithAggregationInput>
    by: Array<MovieScalarFieldEnum>
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _avg?: MovieAvgAggregateInputType
    _sum?: MovieSumAggregateInputType
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }


  export type MovieGroupByOutputType = {
    movieId: number
    showId: number
    length: number | null
    createdAt: Date
    updatedAt: Date
    _count: MovieCountAggregateOutputType | null
    _avg: MovieAvgAggregateOutputType | null
    _sum: MovieSumAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect = {
    movieId?: boolean
    show?: boolean | ShowArgs
    showId?: boolean
    length?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    MovieServer?: boolean | MovieServerFindManyArgs
    _count?: boolean | MovieCountOutputTypeArgs
  }

  export type MovieInclude = {
    show?: boolean | ShowArgs
    MovieServer?: boolean | MovieServerFindManyArgs
    _count?: boolean | MovieCountOutputTypeArgs
  }

  export type MovieGetPayload<
    S extends boolean | null | undefined | MovieArgs,
    U = keyof S
      > = S extends true
        ? Movie
    : S extends undefined
    ? never
    : S extends MovieArgs | MovieFindManyArgs
    ?'include' extends U
    ? Movie  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'MovieServer' ? Array < MovieServerGetPayload<S['include'][P]>>  :
        P extends '_count' ? MovieCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'MovieServer' ? Array < MovieServerGetPayload<S['select'][P]>>  :
        P extends '_count' ? MovieCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Movie ? Movie[P] : never
  } 
    : Movie
  : Movie


  type MovieCountArgs = Merge<
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }
  >

  export interface MovieDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieWithMovieIdOnly = await prisma.movie.findMany({ select: { movieId: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Find one Movie that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Find the first Movie that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    MovieServer<T extends MovieServerFindManyArgs = {}>(args?: Subset<T, MovieServerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovieServer>>, PrismaPromise<Array<MovieServerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Movie base type for findUnique actions
   */
  export type MovieFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }

  /**
   * Movie: findUnique
   */
  export interface MovieFindUniqueArgs extends MovieFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie base type for findFirst actions
   */
  export type MovieFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     * 
    **/
    distinct?: Enumerable<MovieScalarFieldEnum>
  }

  /**
   * Movie: findFirst
   */
  export interface MovieFindFirstArgs extends MovieFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter, which Movies to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to create a Movie.
     * 
    **/
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs = {
    /**
     * The data used to create many Movies.
     * 
    **/
    data: Enumerable<MovieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to update a Movie.
     * 
    **/
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs = {
    /**
     * The data used to update Movies.
     * 
    **/
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The filter to search for the Movie to update in case it exists.
     * 
    **/
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     * 
    **/
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter which Movie to delete.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs = {
    /**
     * Filter which Movies to delete
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie: findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs = MovieFindUniqueArgsBase
      

  /**
   * Movie: findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs = MovieFindFirstArgsBase
      

  /**
   * Movie without action
   */
  export type MovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
  }



  /**
   * Model Episode
   */


  export type AggregateEpisode = {
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  export type EpisodeAvgAggregateOutputType = {
    episodeId: number | null
    showId: number | null
    season: number | null
    number: number | null
    releaseYear: number | null
    length: number | null
  }

  export type EpisodeSumAggregateOutputType = {
    episodeId: number | null
    showId: number | null
    season: number | null
    number: number | null
    releaseYear: number | null
    length: number | null
  }

  export type EpisodeMinAggregateOutputType = {
    episodeId: number | null
    showId: number | null
    season: number | null
    number: number | null
    name: string | null
    poster: string | null
    summary: string | null
    releaseYear: number | null
    length: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeMaxAggregateOutputType = {
    episodeId: number | null
    showId: number | null
    season: number | null
    number: number | null
    name: string | null
    poster: string | null
    summary: string | null
    releaseYear: number | null
    length: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EpisodeCountAggregateOutputType = {
    episodeId: number
    showId: number
    season: number
    number: number
    name: number
    poster: number
    summary: number
    releaseYear: number
    length: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EpisodeAvgAggregateInputType = {
    episodeId?: true
    showId?: true
    season?: true
    number?: true
    releaseYear?: true
    length?: true
  }

  export type EpisodeSumAggregateInputType = {
    episodeId?: true
    showId?: true
    season?: true
    number?: true
    releaseYear?: true
    length?: true
  }

  export type EpisodeMinAggregateInputType = {
    episodeId?: true
    showId?: true
    season?: true
    number?: true
    name?: true
    poster?: true
    summary?: true
    releaseYear?: true
    length?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeMaxAggregateInputType = {
    episodeId?: true
    showId?: true
    season?: true
    number?: true
    name?: true
    poster?: true
    summary?: true
    releaseYear?: true
    length?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EpisodeCountAggregateInputType = {
    episodeId?: true
    showId?: true
    season?: true
    number?: true
    name?: true
    poster?: true
    summary?: true
    releaseYear?: true
    length?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EpisodeAggregateArgs = {
    /**
     * Filter which Episode to aggregate.
     * 
    **/
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     * 
    **/
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Episodes
    **/
    _count?: true | EpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodeMaxAggregateInputType
  }

  export type GetEpisodeAggregateType<T extends EpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisode[P]>
      : GetScalarType<T[P], AggregateEpisode[P]>
  }




  export type EpisodeGroupByArgs = {
    where?: EpisodeWhereInput
    orderBy?: Enumerable<EpisodeOrderByWithAggregationInput>
    by: Array<EpisodeScalarFieldEnum>
    having?: EpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodeCountAggregateInputType | true
    _avg?: EpisodeAvgAggregateInputType
    _sum?: EpisodeSumAggregateInputType
    _min?: EpisodeMinAggregateInputType
    _max?: EpisodeMaxAggregateInputType
  }


  export type EpisodeGroupByOutputType = {
    episodeId: number
    showId: number
    season: number
    number: number
    name: string | null
    poster: string | null
    summary: string | null
    releaseYear: number | null
    length: number | null
    createdAt: Date
    updatedAt: Date
    _count: EpisodeCountAggregateOutputType | null
    _avg: EpisodeAvgAggregateOutputType | null
    _sum: EpisodeSumAggregateOutputType | null
    _min: EpisodeMinAggregateOutputType | null
    _max: EpisodeMaxAggregateOutputType | null
  }

  type GetEpisodeGroupByPayload<T extends EpisodeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodeGroupByOutputType[P]>
        }
      >
    >


  export type EpisodeSelect = {
    episodeId?: boolean
    show?: boolean | ShowArgs
    showId?: boolean
    season?: boolean
    number?: boolean
    name?: boolean
    poster?: boolean
    summary?: boolean
    releaseYear?: boolean
    length?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SeriesServer?: boolean | SeriesServerFindManyArgs
    _count?: boolean | EpisodeCountOutputTypeArgs
  }

  export type EpisodeInclude = {
    show?: boolean | ShowArgs
    SeriesServer?: boolean | SeriesServerFindManyArgs
    _count?: boolean | EpisodeCountOutputTypeArgs
  }

  export type EpisodeGetPayload<
    S extends boolean | null | undefined | EpisodeArgs,
    U = keyof S
      > = S extends true
        ? Episode
    : S extends undefined
    ? never
    : S extends EpisodeArgs | EpisodeFindManyArgs
    ?'include' extends U
    ? Episode  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'SeriesServer' ? Array < SeriesServerGetPayload<S['include'][P]>>  :
        P extends '_count' ? EpisodeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'SeriesServer' ? Array < SeriesServerGetPayload<S['select'][P]>>  :
        P extends '_count' ? EpisodeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Episode ? Episode[P] : never
  } 
    : Episode
  : Episode


  type EpisodeCountArgs = Merge<
    Omit<EpisodeFindManyArgs, 'select' | 'include'> & {
      select?: EpisodeCountAggregateInputType | true
    }
  >

  export interface EpisodeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Episode that matches the filter.
     * @param {EpisodeFindUniqueArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EpisodeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EpisodeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Episode'> extends True ? CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>> : CheckSelect<T, Prisma__EpisodeClient<Episode | null >, Prisma__EpisodeClient<EpisodeGetPayload<T> | null >>

    /**
     * Find the first Episode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EpisodeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EpisodeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Episode'> extends True ? CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>> : CheckSelect<T, Prisma__EpisodeClient<Episode | null >, Prisma__EpisodeClient<EpisodeGetPayload<T> | null >>

    /**
     * Find zero or more Episodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Episodes
     * const episodes = await prisma.episode.findMany()
     * 
     * // Get first 10 Episodes
     * const episodes = await prisma.episode.findMany({ take: 10 })
     * 
     * // Only select the `episodeId`
     * const episodeWithEpisodeIdOnly = await prisma.episode.findMany({ select: { episodeId: true } })
     * 
    **/
    findMany<T extends EpisodeFindManyArgs>(
      args?: SelectSubset<T, EpisodeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Episode>>, PrismaPromise<Array<EpisodeGetPayload<T>>>>

    /**
     * Create a Episode.
     * @param {EpisodeCreateArgs} args - Arguments to create a Episode.
     * @example
     * // Create one Episode
     * const Episode = await prisma.episode.create({
     *   data: {
     *     // ... data to create a Episode
     *   }
     * })
     * 
    **/
    create<T extends EpisodeCreateArgs>(
      args: SelectSubset<T, EpisodeCreateArgs>
    ): CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>>

    /**
     * Create many Episodes.
     *     @param {EpisodeCreateManyArgs} args - Arguments to create many Episodes.
     *     @example
     *     // Create many Episodes
     *     const episode = await prisma.episode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EpisodeCreateManyArgs>(
      args?: SelectSubset<T, EpisodeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Episode.
     * @param {EpisodeDeleteArgs} args - Arguments to delete one Episode.
     * @example
     * // Delete one Episode
     * const Episode = await prisma.episode.delete({
     *   where: {
     *     // ... filter to delete one Episode
     *   }
     * })
     * 
    **/
    delete<T extends EpisodeDeleteArgs>(
      args: SelectSubset<T, EpisodeDeleteArgs>
    ): CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>>

    /**
     * Update one Episode.
     * @param {EpisodeUpdateArgs} args - Arguments to update one Episode.
     * @example
     * // Update one Episode
     * const episode = await prisma.episode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EpisodeUpdateArgs>(
      args: SelectSubset<T, EpisodeUpdateArgs>
    ): CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>>

    /**
     * Delete zero or more Episodes.
     * @param {EpisodeDeleteManyArgs} args - Arguments to filter Episodes to delete.
     * @example
     * // Delete a few Episodes
     * const { count } = await prisma.episode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EpisodeDeleteManyArgs>(
      args?: SelectSubset<T, EpisodeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Episodes
     * const episode = await prisma.episode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EpisodeUpdateManyArgs>(
      args: SelectSubset<T, EpisodeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Episode.
     * @param {EpisodeUpsertArgs} args - Arguments to update or create a Episode.
     * @example
     * // Update or create a Episode
     * const episode = await prisma.episode.upsert({
     *   create: {
     *     // ... data to create a Episode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Episode we want to update
     *   }
     * })
    **/
    upsert<T extends EpisodeUpsertArgs>(
      args: SelectSubset<T, EpisodeUpsertArgs>
    ): CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>>

    /**
     * Find one Episode that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {EpisodeFindUniqueOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EpisodeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EpisodeFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>>

    /**
     * Find the first Episode that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeFindFirstOrThrowArgs} args - Arguments to find a Episode
     * @example
     * // Get one Episode
     * const episode = await prisma.episode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EpisodeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EpisodeFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__EpisodeClient<Episode>, Prisma__EpisodeClient<EpisodeGetPayload<T>>>

    /**
     * Count the number of Episodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeCountArgs} args - Arguments to filter Episodes to count.
     * @example
     * // Count the number of Episodes
     * const count = await prisma.episode.count({
     *   where: {
     *     // ... the filter for the Episodes we want to count
     *   }
     * })
    **/
    count<T extends EpisodeCountArgs>(
      args?: Subset<T, EpisodeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodeAggregateArgs>(args: Subset<T, EpisodeAggregateArgs>): PrismaPromise<GetEpisodeAggregateType<T>>

    /**
     * Group by Episode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodeGroupByArgs['orderBy'] }
        : { orderBy?: EpisodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Episode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EpisodeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    SeriesServer<T extends SeriesServerFindManyArgs = {}>(args?: Subset<T, SeriesServerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SeriesServer>>, PrismaPromise<Array<SeriesServerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Episode base type for findUnique actions
   */
  export type EpisodeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * Filter, which Episode to fetch.
     * 
    **/
    where: EpisodeWhereUniqueInput
  }

  /**
   * Episode: findUnique
   */
  export interface EpisodeFindUniqueArgs extends EpisodeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Episode base type for findFirst actions
   */
  export type EpisodeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * Filter, which Episode to fetch.
     * 
    **/
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     * 
    **/
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Episodes.
     * 
    **/
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Episodes.
     * 
    **/
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }

  /**
   * Episode: findFirst
   */
  export interface EpisodeFindFirstArgs extends EpisodeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Episode findMany
   */
  export type EpisodeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * Filter, which Episodes to fetch.
     * 
    **/
    where?: EpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Episodes to fetch.
     * 
    **/
    orderBy?: Enumerable<EpisodeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Episodes.
     * 
    **/
    cursor?: EpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Episodes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Episodes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EpisodeScalarFieldEnum>
  }


  /**
   * Episode create
   */
  export type EpisodeCreateArgs = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * The data needed to create a Episode.
     * 
    **/
    data: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
  }


  /**
   * Episode createMany
   */
  export type EpisodeCreateManyArgs = {
    /**
     * The data used to create many Episodes.
     * 
    **/
    data: Enumerable<EpisodeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Episode update
   */
  export type EpisodeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * The data needed to update a Episode.
     * 
    **/
    data: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
    /**
     * Choose, which Episode to update.
     * 
    **/
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode updateMany
   */
  export type EpisodeUpdateManyArgs = {
    /**
     * The data used to update Episodes.
     * 
    **/
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyInput>
    /**
     * Filter which Episodes to update
     * 
    **/
    where?: EpisodeWhereInput
  }


  /**
   * Episode upsert
   */
  export type EpisodeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * The filter to search for the Episode to update in case it exists.
     * 
    **/
    where: EpisodeWhereUniqueInput
    /**
     * In case the Episode found by the `where` argument doesn't exist, create a new Episode with this data.
     * 
    **/
    create: XOR<EpisodeCreateInput, EpisodeUncheckedCreateInput>
    /**
     * In case the Episode was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EpisodeUpdateInput, EpisodeUncheckedUpdateInput>
  }


  /**
   * Episode delete
   */
  export type EpisodeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
    /**
     * Filter which Episode to delete.
     * 
    **/
    where: EpisodeWhereUniqueInput
  }


  /**
   * Episode deleteMany
   */
  export type EpisodeDeleteManyArgs = {
    /**
     * Filter which Episodes to delete
     * 
    **/
    where?: EpisodeWhereInput
  }


  /**
   * Episode: findUniqueOrThrow
   */
  export type EpisodeFindUniqueOrThrowArgs = EpisodeFindUniqueArgsBase
      

  /**
   * Episode: findFirstOrThrow
   */
  export type EpisodeFindFirstOrThrowArgs = EpisodeFindFirstArgsBase
      

  /**
   * Episode without action
   */
  export type EpisodeArgs = {
    /**
     * Select specific fields to fetch from the Episode
     * 
    **/
    select?: EpisodeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: EpisodeInclude | null
  }



  /**
   * Model Server
   */


  export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  export type ServerAvgAggregateOutputType = {
    serverId: number | null
  }

  export type ServerSumAggregateOutputType = {
    serverId: number | null
  }

  export type ServerMinAggregateOutputType = {
    serverId: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerMaxAggregateOutputType = {
    serverId: number | null
    name: string | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServerCountAggregateOutputType = {
    serverId: number
    name: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServerAvgAggregateInputType = {
    serverId?: true
  }

  export type ServerSumAggregateInputType = {
    serverId?: true
  }

  export type ServerMinAggregateInputType = {
    serverId?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerMaxAggregateInputType = {
    serverId?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServerCountAggregateInputType = {
    serverId?: true
    name?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServerAggregateArgs = {
    /**
     * Filter which Server to aggregate.
     * 
    **/
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     * 
    **/
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servers
    **/
    _count?: true | ServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServerMaxAggregateInputType
  }

  export type GetServerAggregateType<T extends ServerAggregateArgs> = {
        [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServer[P]>
      : GetScalarType<T[P], AggregateServer[P]>
  }




  export type ServerGroupByArgs = {
    where?: ServerWhereInput
    orderBy?: Enumerable<ServerOrderByWithAggregationInput>
    by: Array<ServerScalarFieldEnum>
    having?: ServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServerCountAggregateInputType | true
    _avg?: ServerAvgAggregateInputType
    _sum?: ServerSumAggregateInputType
    _min?: ServerMinAggregateInputType
    _max?: ServerMaxAggregateInputType
  }


  export type ServerGroupByOutputType = {
    serverId: number
    name: string
    url: string
    createdAt: Date
    updatedAt: Date
    _count: ServerCountAggregateOutputType | null
    _avg: ServerAvgAggregateOutputType | null
    _sum: ServerSumAggregateOutputType | null
    _min: ServerMinAggregateOutputType | null
    _max: ServerMaxAggregateOutputType | null
  }

  type GetServerGroupByPayload<T extends ServerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServerGroupByOutputType[P]>
            : GetScalarType<T[P], ServerGroupByOutputType[P]>
        }
      >
    >


  export type ServerSelect = {
    serverId?: boolean
    name?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    MovieServer?: boolean | MovieServerFindManyArgs
    SeriesServer?: boolean | SeriesServerFindManyArgs
    _count?: boolean | ServerCountOutputTypeArgs
  }

  export type ServerInclude = {
    MovieServer?: boolean | MovieServerFindManyArgs
    SeriesServer?: boolean | SeriesServerFindManyArgs
    _count?: boolean | ServerCountOutputTypeArgs
  }

  export type ServerGetPayload<
    S extends boolean | null | undefined | ServerArgs,
    U = keyof S
      > = S extends true
        ? Server
    : S extends undefined
    ? never
    : S extends ServerArgs | ServerFindManyArgs
    ?'include' extends U
    ? Server  & {
    [P in TrueKeys<S['include']>]:
        P extends 'MovieServer' ? Array < MovieServerGetPayload<S['include'][P]>>  :
        P extends 'SeriesServer' ? Array < SeriesServerGetPayload<S['include'][P]>>  :
        P extends '_count' ? ServerCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'MovieServer' ? Array < MovieServerGetPayload<S['select'][P]>>  :
        P extends 'SeriesServer' ? Array < SeriesServerGetPayload<S['select'][P]>>  :
        P extends '_count' ? ServerCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Server ? Server[P] : never
  } 
    : Server
  : Server


  type ServerCountArgs = Merge<
    Omit<ServerFindManyArgs, 'select' | 'include'> & {
      select?: ServerCountAggregateInputType | true
    }
  >

  export interface ServerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Server that matches the filter.
     * @param {ServerFindUniqueArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ServerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ServerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Server'> extends True ? CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>> : CheckSelect<T, Prisma__ServerClient<Server | null >, Prisma__ServerClient<ServerGetPayload<T> | null >>

    /**
     * Find the first Server that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ServerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ServerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Server'> extends True ? CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>> : CheckSelect<T, Prisma__ServerClient<Server | null >, Prisma__ServerClient<ServerGetPayload<T> | null >>

    /**
     * Find zero or more Servers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servers
     * const servers = await prisma.server.findMany()
     * 
     * // Get first 10 Servers
     * const servers = await prisma.server.findMany({ take: 10 })
     * 
     * // Only select the `serverId`
     * const serverWithServerIdOnly = await prisma.server.findMany({ select: { serverId: true } })
     * 
    **/
    findMany<T extends ServerFindManyArgs>(
      args?: SelectSubset<T, ServerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Server>>, PrismaPromise<Array<ServerGetPayload<T>>>>

    /**
     * Create a Server.
     * @param {ServerCreateArgs} args - Arguments to create a Server.
     * @example
     * // Create one Server
     * const Server = await prisma.server.create({
     *   data: {
     *     // ... data to create a Server
     *   }
     * })
     * 
    **/
    create<T extends ServerCreateArgs>(
      args: SelectSubset<T, ServerCreateArgs>
    ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>

    /**
     * Create many Servers.
     *     @param {ServerCreateManyArgs} args - Arguments to create many Servers.
     *     @example
     *     // Create many Servers
     *     const server = await prisma.server.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ServerCreateManyArgs>(
      args?: SelectSubset<T, ServerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Server.
     * @param {ServerDeleteArgs} args - Arguments to delete one Server.
     * @example
     * // Delete one Server
     * const Server = await prisma.server.delete({
     *   where: {
     *     // ... filter to delete one Server
     *   }
     * })
     * 
    **/
    delete<T extends ServerDeleteArgs>(
      args: SelectSubset<T, ServerDeleteArgs>
    ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>

    /**
     * Update one Server.
     * @param {ServerUpdateArgs} args - Arguments to update one Server.
     * @example
     * // Update one Server
     * const server = await prisma.server.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ServerUpdateArgs>(
      args: SelectSubset<T, ServerUpdateArgs>
    ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>

    /**
     * Delete zero or more Servers.
     * @param {ServerDeleteManyArgs} args - Arguments to filter Servers to delete.
     * @example
     * // Delete a few Servers
     * const { count } = await prisma.server.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ServerDeleteManyArgs>(
      args?: SelectSubset<T, ServerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servers
     * const server = await prisma.server.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ServerUpdateManyArgs>(
      args: SelectSubset<T, ServerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Server.
     * @param {ServerUpsertArgs} args - Arguments to update or create a Server.
     * @example
     * // Update or create a Server
     * const server = await prisma.server.upsert({
     *   create: {
     *     // ... data to create a Server
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Server we want to update
     *   }
     * })
    **/
    upsert<T extends ServerUpsertArgs>(
      args: SelectSubset<T, ServerUpsertArgs>
    ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>

    /**
     * Find one Server that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ServerFindUniqueOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ServerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>

    /**
     * Find the first Server that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerFindFirstOrThrowArgs} args - Arguments to find a Server
     * @example
     * // Get one Server
     * const server = await prisma.server.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ServerClient<Server>, Prisma__ServerClient<ServerGetPayload<T>>>

    /**
     * Count the number of Servers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerCountArgs} args - Arguments to filter Servers to count.
     * @example
     * // Count the number of Servers
     * const count = await prisma.server.count({
     *   where: {
     *     // ... the filter for the Servers we want to count
     *   }
     * })
    **/
    count<T extends ServerCountArgs>(
      args?: Subset<T, ServerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServerAggregateArgs>(args: Subset<T, ServerAggregateArgs>): PrismaPromise<GetServerAggregateType<T>>

    /**
     * Group by Server.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServerGroupByArgs['orderBy'] }
        : { orderBy?: ServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Server.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ServerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    MovieServer<T extends MovieServerFindManyArgs = {}>(args?: Subset<T, MovieServerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<MovieServer>>, PrismaPromise<Array<MovieServerGetPayload<T>>>>;

    SeriesServer<T extends SeriesServerFindManyArgs = {}>(args?: Subset<T, SeriesServerFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SeriesServer>>, PrismaPromise<Array<SeriesServerGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Server base type for findUnique actions
   */
  export type ServerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * Filter, which Server to fetch.
     * 
    **/
    where: ServerWhereUniqueInput
  }

  /**
   * Server: findUnique
   */
  export interface ServerFindUniqueArgs extends ServerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Server base type for findFirst actions
   */
  export type ServerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * Filter, which Server to fetch.
     * 
    **/
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     * 
    **/
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servers.
     * 
    **/
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servers.
     * 
    **/
    distinct?: Enumerable<ServerScalarFieldEnum>
  }

  /**
   * Server: findFirst
   */
  export interface ServerFindFirstArgs extends ServerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Server findMany
   */
  export type ServerFindManyArgs = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * Filter, which Servers to fetch.
     * 
    **/
    where?: ServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servers to fetch.
     * 
    **/
    orderBy?: Enumerable<ServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servers.
     * 
    **/
    cursor?: ServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ServerScalarFieldEnum>
  }


  /**
   * Server create
   */
  export type ServerCreateArgs = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * The data needed to create a Server.
     * 
    **/
    data: XOR<ServerCreateInput, ServerUncheckedCreateInput>
  }


  /**
   * Server createMany
   */
  export type ServerCreateManyArgs = {
    /**
     * The data used to create many Servers.
     * 
    **/
    data: Enumerable<ServerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Server update
   */
  export type ServerUpdateArgs = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * The data needed to update a Server.
     * 
    **/
    data: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
    /**
     * Choose, which Server to update.
     * 
    **/
    where: ServerWhereUniqueInput
  }


  /**
   * Server updateMany
   */
  export type ServerUpdateManyArgs = {
    /**
     * The data used to update Servers.
     * 
    **/
    data: XOR<ServerUpdateManyMutationInput, ServerUncheckedUpdateManyInput>
    /**
     * Filter which Servers to update
     * 
    **/
    where?: ServerWhereInput
  }


  /**
   * Server upsert
   */
  export type ServerUpsertArgs = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * The filter to search for the Server to update in case it exists.
     * 
    **/
    where: ServerWhereUniqueInput
    /**
     * In case the Server found by the `where` argument doesn't exist, create a new Server with this data.
     * 
    **/
    create: XOR<ServerCreateInput, ServerUncheckedCreateInput>
    /**
     * In case the Server was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ServerUpdateInput, ServerUncheckedUpdateInput>
  }


  /**
   * Server delete
   */
  export type ServerDeleteArgs = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
    /**
     * Filter which Server to delete.
     * 
    **/
    where: ServerWhereUniqueInput
  }


  /**
   * Server deleteMany
   */
  export type ServerDeleteManyArgs = {
    /**
     * Filter which Servers to delete
     * 
    **/
    where?: ServerWhereInput
  }


  /**
   * Server: findUniqueOrThrow
   */
  export type ServerFindUniqueOrThrowArgs = ServerFindUniqueArgsBase
      

  /**
   * Server: findFirstOrThrow
   */
  export type ServerFindFirstOrThrowArgs = ServerFindFirstArgsBase
      

  /**
   * Server without action
   */
  export type ServerArgs = {
    /**
     * Select specific fields to fetch from the Server
     * 
    **/
    select?: ServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ServerInclude | null
  }



  /**
   * Model Actor
   */


  export type AggregateActor = {
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  export type ActorAvgAggregateOutputType = {
    actorId: number | null
  }

  export type ActorSumAggregateOutputType = {
    actorId: number | null
  }

  export type ActorMinAggregateOutputType = {
    actorId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActorMaxAggregateOutputType = {
    actorId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ActorCountAggregateOutputType = {
    actorId: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ActorAvgAggregateInputType = {
    actorId?: true
  }

  export type ActorSumAggregateInputType = {
    actorId?: true
  }

  export type ActorMinAggregateInputType = {
    actorId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActorMaxAggregateInputType = {
    actorId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ActorCountAggregateInputType = {
    actorId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ActorAggregateArgs = {
    /**
     * Filter which Actor to aggregate.
     * 
    **/
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     * 
    **/
    orderBy?: Enumerable<ActorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actors
    **/
    _count?: true | ActorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorMaxAggregateInputType
  }

  export type GetActorAggregateType<T extends ActorAggregateArgs> = {
        [P in keyof T & keyof AggregateActor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActor[P]>
      : GetScalarType<T[P], AggregateActor[P]>
  }




  export type ActorGroupByArgs = {
    where?: ActorWhereInput
    orderBy?: Enumerable<ActorOrderByWithAggregationInput>
    by: Array<ActorScalarFieldEnum>
    having?: ActorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorCountAggregateInputType | true
    _avg?: ActorAvgAggregateInputType
    _sum?: ActorSumAggregateInputType
    _min?: ActorMinAggregateInputType
    _max?: ActorMaxAggregateInputType
  }


  export type ActorGroupByOutputType = {
    actorId: number
    name: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: ActorCountAggregateOutputType | null
    _avg: ActorAvgAggregateOutputType | null
    _sum: ActorSumAggregateOutputType | null
    _min: ActorMinAggregateOutputType | null
    _max: ActorMaxAggregateOutputType | null
  }

  type GetActorGroupByPayload<T extends ActorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ActorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorGroupByOutputType[P]>
            : GetScalarType<T[P], ActorGroupByOutputType[P]>
        }
      >
    >


  export type ActorSelect = {
    actorId?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    MovieCast?: boolean | ShowCastFindManyArgs
    _count?: boolean | ActorCountOutputTypeArgs
  }

  export type ActorInclude = {
    MovieCast?: boolean | ShowCastFindManyArgs
    _count?: boolean | ActorCountOutputTypeArgs
  }

  export type ActorGetPayload<
    S extends boolean | null | undefined | ActorArgs,
    U = keyof S
      > = S extends true
        ? Actor
    : S extends undefined
    ? never
    : S extends ActorArgs | ActorFindManyArgs
    ?'include' extends U
    ? Actor  & {
    [P in TrueKeys<S['include']>]:
        P extends 'MovieCast' ? Array < ShowCastGetPayload<S['include'][P]>>  :
        P extends '_count' ? ActorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'MovieCast' ? Array < ShowCastGetPayload<S['select'][P]>>  :
        P extends '_count' ? ActorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Actor ? Actor[P] : never
  } 
    : Actor
  : Actor


  type ActorCountArgs = Merge<
    Omit<ActorFindManyArgs, 'select' | 'include'> & {
      select?: ActorCountAggregateInputType | true
    }
  >

  export interface ActorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Actor that matches the filter.
     * @param {ActorFindUniqueArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ActorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Actor'> extends True ? CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>> : CheckSelect<T, Prisma__ActorClient<Actor | null >, Prisma__ActorClient<ActorGetPayload<T> | null >>

    /**
     * Find the first Actor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ActorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Actor'> extends True ? CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>> : CheckSelect<T, Prisma__ActorClient<Actor | null >, Prisma__ActorClient<ActorGetPayload<T> | null >>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actor.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actor.findMany({ take: 10 })
     * 
     * // Only select the `actorId`
     * const actorWithActorIdOnly = await prisma.actor.findMany({ select: { actorId: true } })
     * 
    **/
    findMany<T extends ActorFindManyArgs>(
      args?: SelectSubset<T, ActorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Actor>>, PrismaPromise<Array<ActorGetPayload<T>>>>

    /**
     * Create a Actor.
     * @param {ActorCreateArgs} args - Arguments to create a Actor.
     * @example
     * // Create one Actor
     * const Actor = await prisma.actor.create({
     *   data: {
     *     // ... data to create a Actor
     *   }
     * })
     * 
    **/
    create<T extends ActorCreateArgs>(
      args: SelectSubset<T, ActorCreateArgs>
    ): CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>>

    /**
     * Create many Actors.
     *     @param {ActorCreateManyArgs} args - Arguments to create many Actors.
     *     @example
     *     // Create many Actors
     *     const actor = await prisma.actor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActorCreateManyArgs>(
      args?: SelectSubset<T, ActorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Actor.
     * @param {ActorDeleteArgs} args - Arguments to delete one Actor.
     * @example
     * // Delete one Actor
     * const Actor = await prisma.actor.delete({
     *   where: {
     *     // ... filter to delete one Actor
     *   }
     * })
     * 
    **/
    delete<T extends ActorDeleteArgs>(
      args: SelectSubset<T, ActorDeleteArgs>
    ): CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>>

    /**
     * Update one Actor.
     * @param {ActorUpdateArgs} args - Arguments to update one Actor.
     * @example
     * // Update one Actor
     * const actor = await prisma.actor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActorUpdateArgs>(
      args: SelectSubset<T, ActorUpdateArgs>
    ): CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>>

    /**
     * Delete zero or more Actors.
     * @param {ActorDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActorDeleteManyArgs>(
      args?: SelectSubset<T, ActorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actor = await prisma.actor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActorUpdateManyArgs>(
      args: SelectSubset<T, ActorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Actor.
     * @param {ActorUpsertArgs} args - Arguments to update or create a Actor.
     * @example
     * // Update or create a Actor
     * const actor = await prisma.actor.upsert({
     *   create: {
     *     // ... data to create a Actor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actor we want to update
     *   }
     * })
    **/
    upsert<T extends ActorUpsertArgs>(
      args: SelectSubset<T, ActorUpsertArgs>
    ): CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>>

    /**
     * Find one Actor that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ActorFindUniqueOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ActorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>>

    /**
     * Find the first Actor that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorFindFirstOrThrowArgs} args - Arguments to find a Actor
     * @example
     * // Get one Actor
     * const actor = await prisma.actor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ActorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ActorClient<Actor>, Prisma__ActorClient<ActorGetPayload<T>>>

    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actor.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends ActorCountArgs>(
      args?: Subset<T, ActorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActorAggregateArgs>(args: Subset<T, ActorAggregateArgs>): PrismaPromise<GetActorAggregateType<T>>

    /**
     * Group by Actor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorGroupByArgs['orderBy'] }
        : { orderBy?: ActorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ActorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    MovieCast<T extends ShowCastFindManyArgs = {}>(args?: Subset<T, ShowCastFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowCast>>, PrismaPromise<Array<ShowCastGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Actor base type for findUnique actions
   */
  export type ActorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * Filter, which Actor to fetch.
     * 
    **/
    where: ActorWhereUniqueInput
  }

  /**
   * Actor: findUnique
   */
  export interface ActorFindUniqueArgs extends ActorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Actor base type for findFirst actions
   */
  export type ActorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * Filter, which Actor to fetch.
     * 
    **/
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     * 
    **/
    orderBy?: Enumerable<ActorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     * 
    **/
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     * 
    **/
    distinct?: Enumerable<ActorScalarFieldEnum>
  }

  /**
   * Actor: findFirst
   */
  export interface ActorFindFirstArgs extends ActorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Actor findMany
   */
  export type ActorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * Filter, which Actors to fetch.
     * 
    **/
    where?: ActorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     * 
    **/
    orderBy?: Enumerable<ActorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actors.
     * 
    **/
    cursor?: ActorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ActorScalarFieldEnum>
  }


  /**
   * Actor create
   */
  export type ActorCreateArgs = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * The data needed to create a Actor.
     * 
    **/
    data: XOR<ActorCreateInput, ActorUncheckedCreateInput>
  }


  /**
   * Actor createMany
   */
  export type ActorCreateManyArgs = {
    /**
     * The data used to create many Actors.
     * 
    **/
    data: Enumerable<ActorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Actor update
   */
  export type ActorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * The data needed to update a Actor.
     * 
    **/
    data: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
    /**
     * Choose, which Actor to update.
     * 
    **/
    where: ActorWhereUniqueInput
  }


  /**
   * Actor updateMany
   */
  export type ActorUpdateManyArgs = {
    /**
     * The data used to update Actors.
     * 
    **/
    data: XOR<ActorUpdateManyMutationInput, ActorUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     * 
    **/
    where?: ActorWhereInput
  }


  /**
   * Actor upsert
   */
  export type ActorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * The filter to search for the Actor to update in case it exists.
     * 
    **/
    where: ActorWhereUniqueInput
    /**
     * In case the Actor found by the `where` argument doesn't exist, create a new Actor with this data.
     * 
    **/
    create: XOR<ActorCreateInput, ActorUncheckedCreateInput>
    /**
     * In case the Actor was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ActorUpdateInput, ActorUncheckedUpdateInput>
  }


  /**
   * Actor delete
   */
  export type ActorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
    /**
     * Filter which Actor to delete.
     * 
    **/
    where: ActorWhereUniqueInput
  }


  /**
   * Actor deleteMany
   */
  export type ActorDeleteManyArgs = {
    /**
     * Filter which Actors to delete
     * 
    **/
    where?: ActorWhereInput
  }


  /**
   * Actor: findUniqueOrThrow
   */
  export type ActorFindUniqueOrThrowArgs = ActorFindUniqueArgsBase
      

  /**
   * Actor: findFirstOrThrow
   */
  export type ActorFindFirstOrThrowArgs = ActorFindFirstArgsBase
      

  /**
   * Actor without action
   */
  export type ActorArgs = {
    /**
     * Select specific fields to fetch from the Actor
     * 
    **/
    select?: ActorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ActorInclude | null
  }



  /**
   * Model Director
   */


  export type AggregateDirector = {
    _count: DirectorCountAggregateOutputType | null
    _avg: DirectorAvgAggregateOutputType | null
    _sum: DirectorSumAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  export type DirectorAvgAggregateOutputType = {
    directorId: number | null
  }

  export type DirectorSumAggregateOutputType = {
    directorId: number | null
  }

  export type DirectorMinAggregateOutputType = {
    directorId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectorMaxAggregateOutputType = {
    directorId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DirectorCountAggregateOutputType = {
    directorId: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DirectorAvgAggregateInputType = {
    directorId?: true
  }

  export type DirectorSumAggregateInputType = {
    directorId?: true
  }

  export type DirectorMinAggregateInputType = {
    directorId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectorMaxAggregateInputType = {
    directorId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DirectorCountAggregateInputType = {
    directorId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DirectorAggregateArgs = {
    /**
     * Filter which Director to aggregate.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directors
    **/
    _count?: true | DirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectorMaxAggregateInputType
  }

  export type GetDirectorAggregateType<T extends DirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirector[P]>
      : GetScalarType<T[P], AggregateDirector[P]>
  }




  export type DirectorGroupByArgs = {
    where?: DirectorWhereInput
    orderBy?: Enumerable<DirectorOrderByWithAggregationInput>
    by: Array<DirectorScalarFieldEnum>
    having?: DirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectorCountAggregateInputType | true
    _avg?: DirectorAvgAggregateInputType
    _sum?: DirectorSumAggregateInputType
    _min?: DirectorMinAggregateInputType
    _max?: DirectorMaxAggregateInputType
  }


  export type DirectorGroupByOutputType = {
    directorId: number
    name: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: DirectorCountAggregateOutputType | null
    _avg: DirectorAvgAggregateOutputType | null
    _sum: DirectorSumAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  type GetDirectorGroupByPayload<T extends DirectorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectorGroupByOutputType[P]>
            : GetScalarType<T[P], DirectorGroupByOutputType[P]>
        }
      >
    >


  export type DirectorSelect = {
    directorId?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ShowDirector?: boolean | ShowDirectorFindManyArgs
    _count?: boolean | DirectorCountOutputTypeArgs
  }

  export type DirectorInclude = {
    ShowDirector?: boolean | ShowDirectorFindManyArgs
    _count?: boolean | DirectorCountOutputTypeArgs
  }

  export type DirectorGetPayload<
    S extends boolean | null | undefined | DirectorArgs,
    U = keyof S
      > = S extends true
        ? Director
    : S extends undefined
    ? never
    : S extends DirectorArgs | DirectorFindManyArgs
    ?'include' extends U
    ? Director  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ShowDirector' ? Array < ShowDirectorGetPayload<S['include'][P]>>  :
        P extends '_count' ? DirectorCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ShowDirector' ? Array < ShowDirectorGetPayload<S['select'][P]>>  :
        P extends '_count' ? DirectorCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Director ? Director[P] : never
  } 
    : Director
  : Director


  type DirectorCountArgs = Merge<
    Omit<DirectorFindManyArgs, 'select' | 'include'> & {
      select?: DirectorCountAggregateInputType | true
    }
  >

  export interface DirectorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Director that matches the filter.
     * @param {DirectorFindUniqueArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirectorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirectorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Director'> extends True ? CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>> : CheckSelect<T, Prisma__DirectorClient<Director | null >, Prisma__DirectorClient<DirectorGetPayload<T> | null >>

    /**
     * Find the first Director that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindFirstArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirectorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirectorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Director'> extends True ? CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>> : CheckSelect<T, Prisma__DirectorClient<Director | null >, Prisma__DirectorClient<DirectorGetPayload<T> | null >>

    /**
     * Find zero or more Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directors
     * const directors = await prisma.director.findMany()
     * 
     * // Get first 10 Directors
     * const directors = await prisma.director.findMany({ take: 10 })
     * 
     * // Only select the `directorId`
     * const directorWithDirectorIdOnly = await prisma.director.findMany({ select: { directorId: true } })
     * 
    **/
    findMany<T extends DirectorFindManyArgs>(
      args?: SelectSubset<T, DirectorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Director>>, PrismaPromise<Array<DirectorGetPayload<T>>>>

    /**
     * Create a Director.
     * @param {DirectorCreateArgs} args - Arguments to create a Director.
     * @example
     * // Create one Director
     * const Director = await prisma.director.create({
     *   data: {
     *     // ... data to create a Director
     *   }
     * })
     * 
    **/
    create<T extends DirectorCreateArgs>(
      args: SelectSubset<T, DirectorCreateArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

    /**
     * Create many Directors.
     *     @param {DirectorCreateManyArgs} args - Arguments to create many Directors.
     *     @example
     *     // Create many Directors
     *     const director = await prisma.director.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirectorCreateManyArgs>(
      args?: SelectSubset<T, DirectorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Director.
     * @param {DirectorDeleteArgs} args - Arguments to delete one Director.
     * @example
     * // Delete one Director
     * const Director = await prisma.director.delete({
     *   where: {
     *     // ... filter to delete one Director
     *   }
     * })
     * 
    **/
    delete<T extends DirectorDeleteArgs>(
      args: SelectSubset<T, DirectorDeleteArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

    /**
     * Update one Director.
     * @param {DirectorUpdateArgs} args - Arguments to update one Director.
     * @example
     * // Update one Director
     * const director = await prisma.director.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirectorUpdateArgs>(
      args: SelectSubset<T, DirectorUpdateArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

    /**
     * Delete zero or more Directors.
     * @param {DirectorDeleteManyArgs} args - Arguments to filter Directors to delete.
     * @example
     * // Delete a few Directors
     * const { count } = await prisma.director.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirectorDeleteManyArgs>(
      args?: SelectSubset<T, DirectorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirectorUpdateManyArgs>(
      args: SelectSubset<T, DirectorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Director.
     * @param {DirectorUpsertArgs} args - Arguments to update or create a Director.
     * @example
     * // Update or create a Director
     * const director = await prisma.director.upsert({
     *   create: {
     *     // ... data to create a Director
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Director we want to update
     *   }
     * })
    **/
    upsert<T extends DirectorUpsertArgs>(
      args: SelectSubset<T, DirectorUpsertArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

    /**
     * Find one Director that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DirectorFindUniqueOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirectorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DirectorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

    /**
     * Find the first Director that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindFirstOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirectorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DirectorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

    /**
     * Count the number of Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorCountArgs} args - Arguments to filter Directors to count.
     * @example
     * // Count the number of Directors
     * const count = await prisma.director.count({
     *   where: {
     *     // ... the filter for the Directors we want to count
     *   }
     * })
    **/
    count<T extends DirectorCountArgs>(
      args?: Subset<T, DirectorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectorAggregateArgs>(args: Subset<T, DirectorAggregateArgs>): PrismaPromise<GetDirectorAggregateType<T>>

    /**
     * Group by Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectorGroupByArgs['orderBy'] }
        : { orderBy?: DirectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ShowDirector<T extends ShowDirectorFindManyArgs = {}>(args?: Subset<T, ShowDirectorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowDirector>>, PrismaPromise<Array<ShowDirectorGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Director base type for findUnique actions
   */
  export type DirectorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where: DirectorWhereUniqueInput
  }

  /**
   * Director: findUnique
   */
  export interface DirectorFindUniqueArgs extends DirectorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Director base type for findFirst actions
   */
  export type DirectorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     * 
    **/
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }

  /**
   * Director: findFirst
   */
  export interface DirectorFindFirstArgs extends DirectorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Director findMany
   */
  export type DirectorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Filter, which Directors to fetch.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directors.
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }


  /**
   * Director create
   */
  export type DirectorCreateArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * The data needed to create a Director.
     * 
    **/
    data: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
  }


  /**
   * Director createMany
   */
  export type DirectorCreateManyArgs = {
    /**
     * The data used to create many Directors.
     * 
    **/
    data: Enumerable<DirectorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Director update
   */
  export type DirectorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * The data needed to update a Director.
     * 
    **/
    data: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
    /**
     * Choose, which Director to update.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director updateMany
   */
  export type DirectorUpdateManyArgs = {
    /**
     * The data used to update Directors.
     * 
    **/
    data: XOR<DirectorUpdateManyMutationInput, DirectorUncheckedUpdateManyInput>
    /**
     * Filter which Directors to update
     * 
    **/
    where?: DirectorWhereInput
  }


  /**
   * Director upsert
   */
  export type DirectorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * The filter to search for the Director to update in case it exists.
     * 
    **/
    where: DirectorWhereUniqueInput
    /**
     * In case the Director found by the `where` argument doesn't exist, create a new Director with this data.
     * 
    **/
    create: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
    /**
     * In case the Director was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
  }


  /**
   * Director delete
   */
  export type DirectorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Filter which Director to delete.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director deleteMany
   */
  export type DirectorDeleteManyArgs = {
    /**
     * Filter which Directors to delete
     * 
    **/
    where?: DirectorWhereInput
  }


  /**
   * Director: findUniqueOrThrow
   */
  export type DirectorFindUniqueOrThrowArgs = DirectorFindUniqueArgsBase
      

  /**
   * Director: findFirstOrThrow
   */
  export type DirectorFindFirstOrThrowArgs = DirectorFindFirstArgsBase
      

  /**
   * Director without action
   */
  export type DirectorArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
  }



  /**
   * Model Genre
   */


  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    genreId: number | null
  }

  export type GenreSumAggregateOutputType = {
    genreId: number | null
  }

  export type GenreMinAggregateOutputType = {
    genreId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    genreId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    genreId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    genreId?: true
  }

  export type GenreSumAggregateInputType = {
    genreId?: true
  }

  export type GenreMinAggregateInputType = {
    genreId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreMaxAggregateInputType = {
    genreId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreCountAggregateInputType = {
    genreId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenreAggregateArgs = {
    /**
     * Filter which Genre to aggregate.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs = {
    where?: GenreWhereInput
    orderBy?: Enumerable<GenreOrderByWithAggregationInput>
    by: Array<GenreScalarFieldEnum>
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }


  export type GenreGroupByOutputType = {
    genreId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect = {
    genreId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ShowGenre?: boolean | ShowGenreFindManyArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreInclude = {
    ShowGenre?: boolean | ShowGenreFindManyArgs
    _count?: boolean | GenreCountOutputTypeArgs
  }

  export type GenreGetPayload<
    S extends boolean | null | undefined | GenreArgs,
    U = keyof S
      > = S extends true
        ? Genre
    : S extends undefined
    ? never
    : S extends GenreArgs | GenreFindManyArgs
    ?'include' extends U
    ? Genre  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ShowGenre' ? Array < ShowGenreGetPayload<S['include'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ShowGenre' ? Array < ShowGenreGetPayload<S['select'][P]>>  :
        P extends '_count' ? GenreCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Genre ? Genre[P] : never
  } 
    : Genre
  : Genre


  type GenreCountArgs = Merge<
    Omit<GenreFindManyArgs, 'select' | 'include'> & {
      select?: GenreCountAggregateInputType | true
    }
  >

  export interface GenreDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Genre'> extends True ? CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>> : CheckSelect<T, Prisma__GenreClient<Genre | null >, Prisma__GenreClient<GenreGetPayload<T> | null >>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Genre'> extends True ? CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>> : CheckSelect<T, Prisma__GenreClient<Genre | null >, Prisma__GenreClient<GenreGetPayload<T> | null >>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `genreId`
     * const genreWithGenreIdOnly = await prisma.genre.findMany({ select: { genreId: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs>(
      args?: SelectSubset<T, GenreFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Genre>>, PrismaPromise<Array<GenreGetPayload<T>>>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs>(
      args: SelectSubset<T, GenreCreateArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs>(
      args?: SelectSubset<T, GenreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs>(
      args: SelectSubset<T, GenreDeleteArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs>(
      args: SelectSubset<T, GenreUpdateArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs>(
      args?: SelectSubset<T, GenreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs>(
      args: SelectSubset<T, GenreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs>(
      args: SelectSubset<T, GenreUpsertArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Find one Genre that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Find the first Genre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__GenreClient<Genre>, Prisma__GenreClient<GenreGetPayload<T>>>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GenreClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ShowGenre<T extends ShowGenreFindManyArgs = {}>(args?: Subset<T, ShowGenreFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowGenre>>, PrismaPromise<Array<ShowGenreGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Genre base type for findUnique actions
   */
  export type GenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where: GenreWhereUniqueInput
  }

  /**
   * Genre: findUnique
   */
  export interface GenreFindUniqueArgs extends GenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre base type for findFirst actions
   */
  export type GenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genre to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     * 
    **/
    distinct?: Enumerable<GenreScalarFieldEnum>
  }

  /**
   * Genre: findFirst
   */
  export interface GenreFindFirstArgs extends GenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter, which Genres to fetch.
     * 
    **/
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     * 
    **/
    orderBy?: Enumerable<GenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     * 
    **/
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<GenreScalarFieldEnum>
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The data needed to create a Genre.
     * 
    **/
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs = {
    /**
     * The data used to create many Genres.
     * 
    **/
    data: Enumerable<GenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The data needed to update a Genre.
     * 
    **/
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs = {
    /**
     * The data used to update Genres.
     * 
    **/
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     * 
    **/
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * The filter to search for the Genre to update in case it exists.
     * 
    **/
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     * 
    **/
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
    /**
     * Filter which Genre to delete.
     * 
    **/
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs = {
    /**
     * Filter which Genres to delete
     * 
    **/
    where?: GenreWhereInput
  }


  /**
   * Genre: findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs = GenreFindUniqueArgsBase
      

  /**
   * Genre: findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs = GenreFindFirstArgsBase
      

  /**
   * Genre without action
   */
  export type GenreArgs = {
    /**
     * Select specific fields to fetch from the Genre
     * 
    **/
    select?: GenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: GenreInclude | null
  }



  /**
   * Model Language
   */


  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    languageId: number | null
  }

  export type LanguageSumAggregateOutputType = {
    languageId: number | null
  }

  export type LanguageMinAggregateOutputType = {
    languageId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    languageId: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    languageId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    languageId?: true
  }

  export type LanguageSumAggregateInputType = {
    languageId?: true
  }

  export type LanguageMinAggregateInputType = {
    languageId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageMaxAggregateInputType = {
    languageId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageCountAggregateInputType = {
    languageId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LanguageAggregateArgs = {
    /**
     * Filter which Language to aggregate.
     * 
    **/
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     * 
    **/
    orderBy?: Enumerable<LanguageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs = {
    where?: LanguageWhereInput
    orderBy?: Enumerable<LanguageOrderByWithAggregationInput>
    by: Array<LanguageScalarFieldEnum>
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }


  export type LanguageGroupByOutputType = {
    languageId: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect = {
    languageId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ShowLanguage?: boolean | ShowLanguageFindManyArgs
    _count?: boolean | LanguageCountOutputTypeArgs
  }

  export type LanguageInclude = {
    ShowLanguage?: boolean | ShowLanguageFindManyArgs
    _count?: boolean | LanguageCountOutputTypeArgs
  }

  export type LanguageGetPayload<
    S extends boolean | null | undefined | LanguageArgs,
    U = keyof S
      > = S extends true
        ? Language
    : S extends undefined
    ? never
    : S extends LanguageArgs | LanguageFindManyArgs
    ?'include' extends U
    ? Language  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ShowLanguage' ? Array < ShowLanguageGetPayload<S['include'][P]>>  :
        P extends '_count' ? LanguageCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ShowLanguage' ? Array < ShowLanguageGetPayload<S['select'][P]>>  :
        P extends '_count' ? LanguageCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Language ? Language[P] : never
  } 
    : Language
  : Language


  type LanguageCountArgs = Merge<
    Omit<LanguageFindManyArgs, 'select' | 'include'> & {
      select?: LanguageCountAggregateInputType | true
    }
  >

  export interface LanguageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LanguageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, LanguageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Language'> extends True ? CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>> : CheckSelect<T, Prisma__LanguageClient<Language | null >, Prisma__LanguageClient<LanguageGetPayload<T> | null >>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LanguageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, LanguageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Language'> extends True ? CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>> : CheckSelect<T, Prisma__LanguageClient<Language | null >, Prisma__LanguageClient<LanguageGetPayload<T> | null >>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `languageId`
     * const languageWithLanguageIdOnly = await prisma.language.findMany({ select: { languageId: true } })
     * 
    **/
    findMany<T extends LanguageFindManyArgs>(
      args?: SelectSubset<T, LanguageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Language>>, PrismaPromise<Array<LanguageGetPayload<T>>>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
    **/
    create<T extends LanguageCreateArgs>(
      args: SelectSubset<T, LanguageCreateArgs>
    ): CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>>

    /**
     * Create many Languages.
     *     @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     *     @example
     *     // Create many Languages
     *     const language = await prisma.language.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LanguageCreateManyArgs>(
      args?: SelectSubset<T, LanguageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
    **/
    delete<T extends LanguageDeleteArgs>(
      args: SelectSubset<T, LanguageDeleteArgs>
    ): CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LanguageUpdateArgs>(
      args: SelectSubset<T, LanguageUpdateArgs>
    ): CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LanguageDeleteManyArgs>(
      args?: SelectSubset<T, LanguageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LanguageUpdateManyArgs>(
      args: SelectSubset<T, LanguageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
    **/
    upsert<T extends LanguageUpsertArgs>(
      args: SelectSubset<T, LanguageUpsertArgs>
    ): CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>>

    /**
     * Find one Language that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, LanguageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>>

    /**
     * Find the first Language that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LanguageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__LanguageClient<Language>, Prisma__LanguageClient<LanguageGetPayload<T>>>

    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__LanguageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ShowLanguage<T extends ShowLanguageFindManyArgs = {}>(args?: Subset<T, ShowLanguageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowLanguage>>, PrismaPromise<Array<ShowLanguageGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Language base type for findUnique actions
   */
  export type LanguageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * Filter, which Language to fetch.
     * 
    **/
    where: LanguageWhereUniqueInput
  }

  /**
   * Language: findUnique
   */
  export interface LanguageFindUniqueArgs extends LanguageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Language base type for findFirst actions
   */
  export type LanguageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * Filter, which Language to fetch.
     * 
    **/
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     * 
    **/
    orderBy?: Enumerable<LanguageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     * 
    **/
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     * 
    **/
    distinct?: Enumerable<LanguageScalarFieldEnum>
  }

  /**
   * Language: findFirst
   */
  export interface LanguageFindFirstArgs extends LanguageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * Filter, which Languages to fetch.
     * 
    **/
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     * 
    **/
    orderBy?: Enumerable<LanguageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     * 
    **/
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<LanguageScalarFieldEnum>
  }


  /**
   * Language create
   */
  export type LanguageCreateArgs = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * The data needed to create a Language.
     * 
    **/
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }


  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs = {
    /**
     * The data used to create many Languages.
     * 
    **/
    data: Enumerable<LanguageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Language update
   */
  export type LanguageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * The data needed to update a Language.
     * 
    **/
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     * 
    **/
    where: LanguageWhereUniqueInput
  }


  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs = {
    /**
     * The data used to update Languages.
     * 
    **/
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     * 
    **/
    where?: LanguageWhereInput
  }


  /**
   * Language upsert
   */
  export type LanguageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * The filter to search for the Language to update in case it exists.
     * 
    **/
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     * 
    **/
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }


  /**
   * Language delete
   */
  export type LanguageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
    /**
     * Filter which Language to delete.
     * 
    **/
    where: LanguageWhereUniqueInput
  }


  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs = {
    /**
     * Filter which Languages to delete
     * 
    **/
    where?: LanguageWhereInput
  }


  /**
   * Language: findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs = LanguageFindUniqueArgsBase
      

  /**
   * Language: findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs = LanguageFindFirstArgsBase
      

  /**
   * Language without action
   */
  export type LanguageArgs = {
    /**
     * Select specific fields to fetch from the Language
     * 
    **/
    select?: LanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: LanguageInclude | null
  }



  /**
   * Model Studio
   */


  export type AggregateStudio = {
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  export type StudioAvgAggregateOutputType = {
    studioId: number | null
  }

  export type StudioSumAggregateOutputType = {
    studioId: number | null
  }

  export type StudioMinAggregateOutputType = {
    studioId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudioMaxAggregateOutputType = {
    studioId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudioCountAggregateOutputType = {
    studioId: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudioAvgAggregateInputType = {
    studioId?: true
  }

  export type StudioSumAggregateInputType = {
    studioId?: true
  }

  export type StudioMinAggregateInputType = {
    studioId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudioMaxAggregateInputType = {
    studioId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudioCountAggregateInputType = {
    studioId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudioAggregateArgs = {
    /**
     * Filter which Studio to aggregate.
     * 
    **/
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     * 
    **/
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Studios
    **/
    _count?: true | StudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudioMaxAggregateInputType
  }

  export type GetStudioAggregateType<T extends StudioAggregateArgs> = {
        [P in keyof T & keyof AggregateStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudio[P]>
      : GetScalarType<T[P], AggregateStudio[P]>
  }




  export type StudioGroupByArgs = {
    where?: StudioWhereInput
    orderBy?: Enumerable<StudioOrderByWithAggregationInput>
    by: Array<StudioScalarFieldEnum>
    having?: StudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudioCountAggregateInputType | true
    _avg?: StudioAvgAggregateInputType
    _sum?: StudioSumAggregateInputType
    _min?: StudioMinAggregateInputType
    _max?: StudioMaxAggregateInputType
  }


  export type StudioGroupByOutputType = {
    studioId: number
    name: string
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: StudioCountAggregateOutputType | null
    _avg: StudioAvgAggregateOutputType | null
    _sum: StudioSumAggregateOutputType | null
    _min: StudioMinAggregateOutputType | null
    _max: StudioMaxAggregateOutputType | null
  }

  type GetStudioGroupByPayload<T extends StudioGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudioGroupByOutputType[P]>
            : GetScalarType<T[P], StudioGroupByOutputType[P]>
        }
      >
    >


  export type StudioSelect = {
    studioId?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ShowStudio?: boolean | ShowStudioFindManyArgs
    _count?: boolean | StudioCountOutputTypeArgs
  }

  export type StudioInclude = {
    ShowStudio?: boolean | ShowStudioFindManyArgs
    _count?: boolean | StudioCountOutputTypeArgs
  }

  export type StudioGetPayload<
    S extends boolean | null | undefined | StudioArgs,
    U = keyof S
      > = S extends true
        ? Studio
    : S extends undefined
    ? never
    : S extends StudioArgs | StudioFindManyArgs
    ?'include' extends U
    ? Studio  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ShowStudio' ? Array < ShowStudioGetPayload<S['include'][P]>>  :
        P extends '_count' ? StudioCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ShowStudio' ? Array < ShowStudioGetPayload<S['select'][P]>>  :
        P extends '_count' ? StudioCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Studio ? Studio[P] : never
  } 
    : Studio
  : Studio


  type StudioCountArgs = Merge<
    Omit<StudioFindManyArgs, 'select' | 'include'> & {
      select?: StudioCountAggregateInputType | true
    }
  >

  export interface StudioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Studio that matches the filter.
     * @param {StudioFindUniqueArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StudioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Studio'> extends True ? CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>> : CheckSelect<T, Prisma__StudioClient<Studio | null >, Prisma__StudioClient<StudioGetPayload<T> | null >>

    /**
     * Find the first Studio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StudioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Studio'> extends True ? CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>> : CheckSelect<T, Prisma__StudioClient<Studio | null >, Prisma__StudioClient<StudioGetPayload<T> | null >>

    /**
     * Find zero or more Studios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Studios
     * const studios = await prisma.studio.findMany()
     * 
     * // Get first 10 Studios
     * const studios = await prisma.studio.findMany({ take: 10 })
     * 
     * // Only select the `studioId`
     * const studioWithStudioIdOnly = await prisma.studio.findMany({ select: { studioId: true } })
     * 
    **/
    findMany<T extends StudioFindManyArgs>(
      args?: SelectSubset<T, StudioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Studio>>, PrismaPromise<Array<StudioGetPayload<T>>>>

    /**
     * Create a Studio.
     * @param {StudioCreateArgs} args - Arguments to create a Studio.
     * @example
     * // Create one Studio
     * const Studio = await prisma.studio.create({
     *   data: {
     *     // ... data to create a Studio
     *   }
     * })
     * 
    **/
    create<T extends StudioCreateArgs>(
      args: SelectSubset<T, StudioCreateArgs>
    ): CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>>

    /**
     * Create many Studios.
     *     @param {StudioCreateManyArgs} args - Arguments to create many Studios.
     *     @example
     *     // Create many Studios
     *     const studio = await prisma.studio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudioCreateManyArgs>(
      args?: SelectSubset<T, StudioCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Studio.
     * @param {StudioDeleteArgs} args - Arguments to delete one Studio.
     * @example
     * // Delete one Studio
     * const Studio = await prisma.studio.delete({
     *   where: {
     *     // ... filter to delete one Studio
     *   }
     * })
     * 
    **/
    delete<T extends StudioDeleteArgs>(
      args: SelectSubset<T, StudioDeleteArgs>
    ): CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>>

    /**
     * Update one Studio.
     * @param {StudioUpdateArgs} args - Arguments to update one Studio.
     * @example
     * // Update one Studio
     * const studio = await prisma.studio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudioUpdateArgs>(
      args: SelectSubset<T, StudioUpdateArgs>
    ): CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>>

    /**
     * Delete zero or more Studios.
     * @param {StudioDeleteManyArgs} args - Arguments to filter Studios to delete.
     * @example
     * // Delete a few Studios
     * const { count } = await prisma.studio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudioDeleteManyArgs>(
      args?: SelectSubset<T, StudioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Studios
     * const studio = await prisma.studio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudioUpdateManyArgs>(
      args: SelectSubset<T, StudioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Studio.
     * @param {StudioUpsertArgs} args - Arguments to update or create a Studio.
     * @example
     * // Update or create a Studio
     * const studio = await prisma.studio.upsert({
     *   create: {
     *     // ... data to create a Studio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Studio we want to update
     *   }
     * })
    **/
    upsert<T extends StudioUpsertArgs>(
      args: SelectSubset<T, StudioUpsertArgs>
    ): CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>>

    /**
     * Find one Studio that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {StudioFindUniqueOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudioFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StudioFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>>

    /**
     * Find the first Studio that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioFindFirstOrThrowArgs} args - Arguments to find a Studio
     * @example
     * // Get one Studio
     * const studio = await prisma.studio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StudioFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__StudioClient<Studio>, Prisma__StudioClient<StudioGetPayload<T>>>

    /**
     * Count the number of Studios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioCountArgs} args - Arguments to filter Studios to count.
     * @example
     * // Count the number of Studios
     * const count = await prisma.studio.count({
     *   where: {
     *     // ... the filter for the Studios we want to count
     *   }
     * })
    **/
    count<T extends StudioCountArgs>(
      args?: Subset<T, StudioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudioAggregateArgs>(args: Subset<T, StudioAggregateArgs>): PrismaPromise<GetStudioAggregateType<T>>

    /**
     * Group by Studio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudioGroupByArgs['orderBy'] }
        : { orderBy?: StudioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudioGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Studio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StudioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ShowStudio<T extends ShowStudioFindManyArgs = {}>(args?: Subset<T, ShowStudioFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowStudio>>, PrismaPromise<Array<ShowStudioGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Studio base type for findUnique actions
   */
  export type StudioFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * Filter, which Studio to fetch.
     * 
    **/
    where: StudioWhereUniqueInput
  }

  /**
   * Studio: findUnique
   */
  export interface StudioFindUniqueArgs extends StudioFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Studio base type for findFirst actions
   */
  export type StudioFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * Filter, which Studio to fetch.
     * 
    **/
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     * 
    **/
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Studios.
     * 
    **/
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Studios.
     * 
    **/
    distinct?: Enumerable<StudioScalarFieldEnum>
  }

  /**
   * Studio: findFirst
   */
  export interface StudioFindFirstArgs extends StudioFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Studio findMany
   */
  export type StudioFindManyArgs = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * Filter, which Studios to fetch.
     * 
    **/
    where?: StudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Studios to fetch.
     * 
    **/
    orderBy?: Enumerable<StudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Studios.
     * 
    **/
    cursor?: StudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Studios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Studios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StudioScalarFieldEnum>
  }


  /**
   * Studio create
   */
  export type StudioCreateArgs = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * The data needed to create a Studio.
     * 
    **/
    data: XOR<StudioCreateInput, StudioUncheckedCreateInput>
  }


  /**
   * Studio createMany
   */
  export type StudioCreateManyArgs = {
    /**
     * The data used to create many Studios.
     * 
    **/
    data: Enumerable<StudioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Studio update
   */
  export type StudioUpdateArgs = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * The data needed to update a Studio.
     * 
    **/
    data: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
    /**
     * Choose, which Studio to update.
     * 
    **/
    where: StudioWhereUniqueInput
  }


  /**
   * Studio updateMany
   */
  export type StudioUpdateManyArgs = {
    /**
     * The data used to update Studios.
     * 
    **/
    data: XOR<StudioUpdateManyMutationInput, StudioUncheckedUpdateManyInput>
    /**
     * Filter which Studios to update
     * 
    **/
    where?: StudioWhereInput
  }


  /**
   * Studio upsert
   */
  export type StudioUpsertArgs = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * The filter to search for the Studio to update in case it exists.
     * 
    **/
    where: StudioWhereUniqueInput
    /**
     * In case the Studio found by the `where` argument doesn't exist, create a new Studio with this data.
     * 
    **/
    create: XOR<StudioCreateInput, StudioUncheckedCreateInput>
    /**
     * In case the Studio was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StudioUpdateInput, StudioUncheckedUpdateInput>
  }


  /**
   * Studio delete
   */
  export type StudioDeleteArgs = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
    /**
     * Filter which Studio to delete.
     * 
    **/
    where: StudioWhereUniqueInput
  }


  /**
   * Studio deleteMany
   */
  export type StudioDeleteManyArgs = {
    /**
     * Filter which Studios to delete
     * 
    **/
    where?: StudioWhereInput
  }


  /**
   * Studio: findUniqueOrThrow
   */
  export type StudioFindUniqueOrThrowArgs = StudioFindUniqueArgsBase
      

  /**
   * Studio: findFirstOrThrow
   */
  export type StudioFindFirstOrThrowArgs = StudioFindFirstArgsBase
      

  /**
   * Studio without action
   */
  export type StudioArgs = {
    /**
     * Select specific fields to fetch from the Studio
     * 
    **/
    select?: StudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StudioInclude | null
  }



  /**
   * Model Writer
   */


  export type AggregateWriter = {
    _count: WriterCountAggregateOutputType | null
    _avg: WriterAvgAggregateOutputType | null
    _sum: WriterSumAggregateOutputType | null
    _min: WriterMinAggregateOutputType | null
    _max: WriterMaxAggregateOutputType | null
  }

  export type WriterAvgAggregateOutputType = {
    writerId: number | null
  }

  export type WriterSumAggregateOutputType = {
    writerId: number | null
  }

  export type WriterMinAggregateOutputType = {
    writerId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WriterMaxAggregateOutputType = {
    writerId: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WriterCountAggregateOutputType = {
    writerId: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WriterAvgAggregateInputType = {
    writerId?: true
  }

  export type WriterSumAggregateInputType = {
    writerId?: true
  }

  export type WriterMinAggregateInputType = {
    writerId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WriterMaxAggregateInputType = {
    writerId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WriterCountAggregateInputType = {
    writerId?: true
    name?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WriterAggregateArgs = {
    /**
     * Filter which Writer to aggregate.
     * 
    **/
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     * 
    **/
    orderBy?: Enumerable<WriterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Writers
    **/
    _count?: true | WriterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WriterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WriterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WriterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WriterMaxAggregateInputType
  }

  export type GetWriterAggregateType<T extends WriterAggregateArgs> = {
        [P in keyof T & keyof AggregateWriter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWriter[P]>
      : GetScalarType<T[P], AggregateWriter[P]>
  }




  export type WriterGroupByArgs = {
    where?: WriterWhereInput
    orderBy?: Enumerable<WriterOrderByWithAggregationInput>
    by: Array<WriterScalarFieldEnum>
    having?: WriterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WriterCountAggregateInputType | true
    _avg?: WriterAvgAggregateInputType
    _sum?: WriterSumAggregateInputType
    _min?: WriterMinAggregateInputType
    _max?: WriterMaxAggregateInputType
  }


  export type WriterGroupByOutputType = {
    writerId: number
    name: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: WriterCountAggregateOutputType | null
    _avg: WriterAvgAggregateOutputType | null
    _sum: WriterSumAggregateOutputType | null
    _min: WriterMinAggregateOutputType | null
    _max: WriterMaxAggregateOutputType | null
  }

  type GetWriterGroupByPayload<T extends WriterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<WriterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WriterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WriterGroupByOutputType[P]>
            : GetScalarType<T[P], WriterGroupByOutputType[P]>
        }
      >
    >


  export type WriterSelect = {
    writerId?: boolean
    name?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ShowWriter?: boolean | ShowWriterFindManyArgs
    _count?: boolean | WriterCountOutputTypeArgs
  }

  export type WriterInclude = {
    ShowWriter?: boolean | ShowWriterFindManyArgs
    _count?: boolean | WriterCountOutputTypeArgs
  }

  export type WriterGetPayload<
    S extends boolean | null | undefined | WriterArgs,
    U = keyof S
      > = S extends true
        ? Writer
    : S extends undefined
    ? never
    : S extends WriterArgs | WriterFindManyArgs
    ?'include' extends U
    ? Writer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'ShowWriter' ? Array < ShowWriterGetPayload<S['include'][P]>>  :
        P extends '_count' ? WriterCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'ShowWriter' ? Array < ShowWriterGetPayload<S['select'][P]>>  :
        P extends '_count' ? WriterCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Writer ? Writer[P] : never
  } 
    : Writer
  : Writer


  type WriterCountArgs = Merge<
    Omit<WriterFindManyArgs, 'select' | 'include'> & {
      select?: WriterCountAggregateInputType | true
    }
  >

  export interface WriterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Writer that matches the filter.
     * @param {WriterFindUniqueArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WriterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WriterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Writer'> extends True ? CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>> : CheckSelect<T, Prisma__WriterClient<Writer | null >, Prisma__WriterClient<WriterGetPayload<T> | null >>

    /**
     * Find the first Writer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindFirstArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WriterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WriterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Writer'> extends True ? CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>> : CheckSelect<T, Prisma__WriterClient<Writer | null >, Prisma__WriterClient<WriterGetPayload<T> | null >>

    /**
     * Find zero or more Writers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Writers
     * const writers = await prisma.writer.findMany()
     * 
     * // Get first 10 Writers
     * const writers = await prisma.writer.findMany({ take: 10 })
     * 
     * // Only select the `writerId`
     * const writerWithWriterIdOnly = await prisma.writer.findMany({ select: { writerId: true } })
     * 
    **/
    findMany<T extends WriterFindManyArgs>(
      args?: SelectSubset<T, WriterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Writer>>, PrismaPromise<Array<WriterGetPayload<T>>>>

    /**
     * Create a Writer.
     * @param {WriterCreateArgs} args - Arguments to create a Writer.
     * @example
     * // Create one Writer
     * const Writer = await prisma.writer.create({
     *   data: {
     *     // ... data to create a Writer
     *   }
     * })
     * 
    **/
    create<T extends WriterCreateArgs>(
      args: SelectSubset<T, WriterCreateArgs>
    ): CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>>

    /**
     * Create many Writers.
     *     @param {WriterCreateManyArgs} args - Arguments to create many Writers.
     *     @example
     *     // Create many Writers
     *     const writer = await prisma.writer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WriterCreateManyArgs>(
      args?: SelectSubset<T, WriterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Writer.
     * @param {WriterDeleteArgs} args - Arguments to delete one Writer.
     * @example
     * // Delete one Writer
     * const Writer = await prisma.writer.delete({
     *   where: {
     *     // ... filter to delete one Writer
     *   }
     * })
     * 
    **/
    delete<T extends WriterDeleteArgs>(
      args: SelectSubset<T, WriterDeleteArgs>
    ): CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>>

    /**
     * Update one Writer.
     * @param {WriterUpdateArgs} args - Arguments to update one Writer.
     * @example
     * // Update one Writer
     * const writer = await prisma.writer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WriterUpdateArgs>(
      args: SelectSubset<T, WriterUpdateArgs>
    ): CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>>

    /**
     * Delete zero or more Writers.
     * @param {WriterDeleteManyArgs} args - Arguments to filter Writers to delete.
     * @example
     * // Delete a few Writers
     * const { count } = await prisma.writer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WriterDeleteManyArgs>(
      args?: SelectSubset<T, WriterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Writers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Writers
     * const writer = await prisma.writer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WriterUpdateManyArgs>(
      args: SelectSubset<T, WriterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Writer.
     * @param {WriterUpsertArgs} args - Arguments to update or create a Writer.
     * @example
     * // Update or create a Writer
     * const writer = await prisma.writer.upsert({
     *   create: {
     *     // ... data to create a Writer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Writer we want to update
     *   }
     * })
    **/
    upsert<T extends WriterUpsertArgs>(
      args: SelectSubset<T, WriterUpsertArgs>
    ): CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>>

    /**
     * Find one Writer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {WriterFindUniqueOrThrowArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WriterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WriterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>>

    /**
     * Find the first Writer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterFindFirstOrThrowArgs} args - Arguments to find a Writer
     * @example
     * // Get one Writer
     * const writer = await prisma.writer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WriterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WriterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__WriterClient<Writer>, Prisma__WriterClient<WriterGetPayload<T>>>

    /**
     * Count the number of Writers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterCountArgs} args - Arguments to filter Writers to count.
     * @example
     * // Count the number of Writers
     * const count = await prisma.writer.count({
     *   where: {
     *     // ... the filter for the Writers we want to count
     *   }
     * })
    **/
    count<T extends WriterCountArgs>(
      args?: Subset<T, WriterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WriterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Writer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WriterAggregateArgs>(args: Subset<T, WriterAggregateArgs>): PrismaPromise<GetWriterAggregateType<T>>

    /**
     * Group by Writer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WriterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WriterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WriterGroupByArgs['orderBy'] }
        : { orderBy?: WriterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WriterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWriterGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Writer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WriterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    ShowWriter<T extends ShowWriterFindManyArgs = {}>(args?: Subset<T, ShowWriterFindManyArgs>): CheckSelect<T, PrismaPromise<Array<ShowWriter>>, PrismaPromise<Array<ShowWriterGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Writer base type for findUnique actions
   */
  export type WriterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * Filter, which Writer to fetch.
     * 
    **/
    where: WriterWhereUniqueInput
  }

  /**
   * Writer: findUnique
   */
  export interface WriterFindUniqueArgs extends WriterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Writer base type for findFirst actions
   */
  export type WriterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * Filter, which Writer to fetch.
     * 
    **/
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     * 
    **/
    orderBy?: Enumerable<WriterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Writers.
     * 
    **/
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Writers.
     * 
    **/
    distinct?: Enumerable<WriterScalarFieldEnum>
  }

  /**
   * Writer: findFirst
   */
  export interface WriterFindFirstArgs extends WriterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Writer findMany
   */
  export type WriterFindManyArgs = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * Filter, which Writers to fetch.
     * 
    **/
    where?: WriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Writers to fetch.
     * 
    **/
    orderBy?: Enumerable<WriterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Writers.
     * 
    **/
    cursor?: WriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Writers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Writers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WriterScalarFieldEnum>
  }


  /**
   * Writer create
   */
  export type WriterCreateArgs = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * The data needed to create a Writer.
     * 
    **/
    data: XOR<WriterCreateInput, WriterUncheckedCreateInput>
  }


  /**
   * Writer createMany
   */
  export type WriterCreateManyArgs = {
    /**
     * The data used to create many Writers.
     * 
    **/
    data: Enumerable<WriterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Writer update
   */
  export type WriterUpdateArgs = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * The data needed to update a Writer.
     * 
    **/
    data: XOR<WriterUpdateInput, WriterUncheckedUpdateInput>
    /**
     * Choose, which Writer to update.
     * 
    **/
    where: WriterWhereUniqueInput
  }


  /**
   * Writer updateMany
   */
  export type WriterUpdateManyArgs = {
    /**
     * The data used to update Writers.
     * 
    **/
    data: XOR<WriterUpdateManyMutationInput, WriterUncheckedUpdateManyInput>
    /**
     * Filter which Writers to update
     * 
    **/
    where?: WriterWhereInput
  }


  /**
   * Writer upsert
   */
  export type WriterUpsertArgs = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * The filter to search for the Writer to update in case it exists.
     * 
    **/
    where: WriterWhereUniqueInput
    /**
     * In case the Writer found by the `where` argument doesn't exist, create a new Writer with this data.
     * 
    **/
    create: XOR<WriterCreateInput, WriterUncheckedCreateInput>
    /**
     * In case the Writer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<WriterUpdateInput, WriterUncheckedUpdateInput>
  }


  /**
   * Writer delete
   */
  export type WriterDeleteArgs = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
    /**
     * Filter which Writer to delete.
     * 
    **/
    where: WriterWhereUniqueInput
  }


  /**
   * Writer deleteMany
   */
  export type WriterDeleteManyArgs = {
    /**
     * Filter which Writers to delete
     * 
    **/
    where?: WriterWhereInput
  }


  /**
   * Writer: findUniqueOrThrow
   */
  export type WriterFindUniqueOrThrowArgs = WriterFindUniqueArgsBase
      

  /**
   * Writer: findFirstOrThrow
   */
  export type WriterFindFirstOrThrowArgs = WriterFindFirstArgsBase
      

  /**
   * Writer without action
   */
  export type WriterArgs = {
    /**
     * Select specific fields to fetch from the Writer
     * 
    **/
    select?: WriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: WriterInclude | null
  }



  /**
   * Model Video
   */


  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    videoId: number | null
    showId: number | null
    quality: number | null
  }

  export type VideoSumAggregateOutputType = {
    videoId: number | null
    showId: number | null
    quality: number | null
  }

  export type VideoMinAggregateOutputType = {
    videoId: number | null
    showId: number | null
    name: string | null
    url: string | null
    site: string | null
    quality: number | null
    type: string | null
    official: boolean | null
    language: string | null
    isDefault: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    videoId: number | null
    showId: number | null
    name: string | null
    url: string | null
    site: string | null
    quality: number | null
    type: string | null
    official: boolean | null
    language: string | null
    isDefault: boolean | null
    publishedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    videoId: number
    showId: number
    name: number
    url: number
    site: number
    quality: number
    type: number
    official: number
    language: number
    isDefault: number
    publishedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    videoId?: true
    showId?: true
    quality?: true
  }

  export type VideoSumAggregateInputType = {
    videoId?: true
    showId?: true
    quality?: true
  }

  export type VideoMinAggregateInputType = {
    videoId?: true
    showId?: true
    name?: true
    url?: true
    site?: true
    quality?: true
    type?: true
    official?: true
    language?: true
    isDefault?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoMaxAggregateInputType = {
    videoId?: true
    showId?: true
    name?: true
    url?: true
    site?: true
    quality?: true
    type?: true
    official?: true
    language?: true
    isDefault?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VideoCountAggregateInputType = {
    videoId?: true
    showId?: true
    name?: true
    url?: true
    site?: true
    quality?: true
    type?: true
    official?: true
    language?: true
    isDefault?: true
    publishedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VideoAggregateArgs = {
    /**
     * Filter which Video to aggregate.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs = {
    where?: VideoWhereInput
    orderBy?: Enumerable<VideoOrderByWithAggregationInput>
    by: Array<VideoScalarFieldEnum>
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }


  export type VideoGroupByOutputType = {
    videoId: number
    showId: number
    name: string | null
    url: string
    site: string | null
    quality: number | null
    type: string | null
    official: boolean | null
    language: string | null
    isDefault: boolean
    publishedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect = {
    videoId?: boolean
    show?: boolean | ShowArgs
    showId?: boolean
    name?: boolean
    url?: boolean
    site?: boolean
    quality?: boolean
    type?: boolean
    official?: boolean
    language?: boolean
    isDefault?: boolean
    publishedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VideoInclude = {
    show?: boolean | ShowArgs
  }

  export type VideoGetPayload<
    S extends boolean | null | undefined | VideoArgs,
    U = keyof S
      > = S extends true
        ? Video
    : S extends undefined
    ? never
    : S extends VideoArgs | VideoFindManyArgs
    ?'include' extends U
    ? Video  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :  P extends keyof Video ? Video[P] : never
  } 
    : Video
  : Video


  type VideoCountArgs = Merge<
    Omit<VideoFindManyArgs, 'select' | 'include'> & {
      select?: VideoCountAggregateInputType | true
    }
  >

  export interface VideoDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VideoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VideoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Video'> extends True ? CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>> : CheckSelect<T, Prisma__VideoClient<Video | null >, Prisma__VideoClient<VideoGetPayload<T> | null >>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VideoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VideoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Video'> extends True ? CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>> : CheckSelect<T, Prisma__VideoClient<Video | null >, Prisma__VideoClient<VideoGetPayload<T> | null >>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `videoId`
     * const videoWithVideoIdOnly = await prisma.video.findMany({ select: { videoId: true } })
     * 
    **/
    findMany<T extends VideoFindManyArgs>(
      args?: SelectSubset<T, VideoFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Video>>, PrismaPromise<Array<VideoGetPayload<T>>>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
    **/
    create<T extends VideoCreateArgs>(
      args: SelectSubset<T, VideoCreateArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Create many Videos.
     *     @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     *     @example
     *     // Create many Videos
     *     const video = await prisma.video.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VideoCreateManyArgs>(
      args?: SelectSubset<T, VideoCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
    **/
    delete<T extends VideoDeleteArgs>(
      args: SelectSubset<T, VideoDeleteArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VideoUpdateArgs>(
      args: SelectSubset<T, VideoUpdateArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VideoDeleteManyArgs>(
      args?: SelectSubset<T, VideoDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VideoUpdateManyArgs>(
      args: SelectSubset<T, VideoUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
    **/
    upsert<T extends VideoUpsertArgs>(
      args: SelectSubset<T, VideoUpsertArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Find one Video that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VideoFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Find the first Video that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VideoFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VideoClient<Video>, Prisma__VideoClient<VideoGetPayload<T>>>

    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VideoClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Video base type for findUnique actions
   */
  export type VideoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     * 
    **/
    where: VideoWhereUniqueInput
  }

  /**
   * Video: findUnique
   */
  export interface VideoFindUniqueArgs extends VideoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video base type for findFirst actions
   */
  export type VideoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Video to fetch.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     * 
    **/
    distinct?: Enumerable<VideoScalarFieldEnum>
  }

  /**
   * Video: findFirst
   */
  export interface VideoFindFirstArgs extends VideoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Video findMany
   */
  export type VideoFindManyArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter, which Videos to fetch.
     * 
    **/
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     * 
    **/
    orderBy?: Enumerable<VideoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     * 
    **/
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VideoScalarFieldEnum>
  }


  /**
   * Video create
   */
  export type VideoCreateArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The data needed to create a Video.
     * 
    **/
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }


  /**
   * Video createMany
   */
  export type VideoCreateManyArgs = {
    /**
     * The data used to create many Videos.
     * 
    **/
    data: Enumerable<VideoCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Video update
   */
  export type VideoUpdateArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The data needed to update a Video.
     * 
    **/
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs = {
    /**
     * The data used to update Videos.
     * 
    **/
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     * 
    **/
    where?: VideoWhereInput
  }


  /**
   * Video upsert
   */
  export type VideoUpsertArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * The filter to search for the Video to update in case it exists.
     * 
    **/
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     * 
    **/
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }


  /**
   * Video delete
   */
  export type VideoDeleteArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
    /**
     * Filter which Video to delete.
     * 
    **/
    where: VideoWhereUniqueInput
  }


  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs = {
    /**
     * Filter which Videos to delete
     * 
    **/
    where?: VideoWhereInput
  }


  /**
   * Video: findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs = VideoFindUniqueArgsBase
      

  /**
   * Video: findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs = VideoFindFirstArgsBase
      

  /**
   * Video without action
   */
  export type VideoArgs = {
    /**
     * Select specific fields to fetch from the Video
     * 
    **/
    select?: VideoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VideoInclude | null
  }



  /**
   * Model Image
   */


  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    imageId: number | null
    showId: number | null
    height: number | null
    width: number | null
    aspectRatio: number | null
  }

  export type ImageSumAggregateOutputType = {
    imageId: number | null
    showId: number | null
    height: number | null
    width: number | null
    aspectRatio: number | null
  }

  export type ImageMinAggregateOutputType = {
    imageId: number | null
    showId: number | null
    url: string | null
    type: string | null
    height: number | null
    width: number | null
    aspectRatio: number | null
    language: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    imageId: number | null
    showId: number | null
    url: string | null
    type: string | null
    height: number | null
    width: number | null
    aspectRatio: number | null
    language: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    imageId: number
    showId: number
    url: number
    type: number
    height: number
    width: number
    aspectRatio: number
    language: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    imageId?: true
    showId?: true
    height?: true
    width?: true
    aspectRatio?: true
  }

  export type ImageSumAggregateInputType = {
    imageId?: true
    showId?: true
    height?: true
    width?: true
    aspectRatio?: true
  }

  export type ImageMinAggregateInputType = {
    imageId?: true
    showId?: true
    url?: true
    type?: true
    height?: true
    width?: true
    aspectRatio?: true
    language?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageMaxAggregateInputType = {
    imageId?: true
    showId?: true
    url?: true
    type?: true
    height?: true
    width?: true
    aspectRatio?: true
    language?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImageCountAggregateInputType = {
    imageId?: true
    showId?: true
    url?: true
    type?: true
    height?: true
    width?: true
    aspectRatio?: true
    language?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImageAggregateArgs = {
    /**
     * Filter which Image to aggregate.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs = {
    where?: ImageWhereInput
    orderBy?: Enumerable<ImageOrderByWithAggregationInput>
    by: Array<ImageScalarFieldEnum>
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }


  export type ImageGroupByOutputType = {
    imageId: number
    showId: number
    url: string
    type: string | null
    height: number | null
    width: number | null
    aspectRatio: number | null
    language: string | null
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect = {
    imageId?: boolean
    show?: boolean | ShowArgs
    showId?: boolean
    url?: boolean
    type?: boolean
    height?: boolean
    width?: boolean
    aspectRatio?: boolean
    language?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ImageInclude = {
    show?: boolean | ShowArgs
  }

  export type ImageGetPayload<
    S extends boolean | null | undefined | ImageArgs,
    U = keyof S
      > = S extends true
        ? Image
    : S extends undefined
    ? never
    : S extends ImageArgs | ImageFindManyArgs
    ?'include' extends U
    ? Image  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :  P extends keyof Image ? Image[P] : never
  } 
    : Image
  : Image


  type ImageCountArgs = Merge<
    Omit<ImageFindManyArgs, 'select' | 'include'> & {
      select?: ImageCountAggregateInputType | true
    }
  >

  export interface ImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Image'> extends True ? CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>> : CheckSelect<T, Prisma__ImageClient<Image | null >, Prisma__ImageClient<ImageGetPayload<T> | null >>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `imageId`
     * const imageWithImageIdOnly = await prisma.image.findMany({ select: { imageId: true } })
     * 
    **/
    findMany<T extends ImageFindManyArgs>(
      args?: SelectSubset<T, ImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Image>>, PrismaPromise<Array<ImageGetPayload<T>>>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
    **/
    create<T extends ImageCreateArgs>(
      args: SelectSubset<T, ImageCreateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Create many Images.
     *     @param {ImageCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const image = await prisma.image.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImageCreateManyArgs>(
      args?: SelectSubset<T, ImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
    **/
    delete<T extends ImageDeleteArgs>(
      args: SelectSubset<T, ImageDeleteArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImageUpdateArgs>(
      args: SelectSubset<T, ImageUpdateArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImageDeleteManyArgs>(
      args?: SelectSubset<T, ImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImageUpdateManyArgs>(
      args: SelectSubset<T, ImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
    **/
    upsert<T extends ImageUpsertArgs>(
      args: SelectSubset<T, ImageUpsertArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Find one Image that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Find the first Image that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ImageClient<Image>, Prisma__ImageClient<ImageGetPayload<T>>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Image base type for findUnique actions
   */
  export type ImageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where: ImageWhereUniqueInput
  }

  /**
   * Image: findUnique
   */
  export interface ImageFindUniqueArgs extends ImageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image base type for findFirst actions
   */
  export type ImageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Image to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImageScalarFieldEnum>
  }

  /**
   * Image: findFirst
   */
  export interface ImageFindFirstArgs extends ImageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Image findMany
   */
  export type ImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImageScalarFieldEnum>
  }


  /**
   * Image create
   */
  export type ImageCreateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to create a Image.
     * 
    **/
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }


  /**
   * Image createMany
   */
  export type ImageCreateManyArgs = {
    /**
     * The data used to create many Images.
     * 
    **/
    data: Enumerable<ImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Image update
   */
  export type ImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The data needed to update a Image.
     * 
    **/
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs = {
    /**
     * The data used to update Images.
     * 
    **/
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image upsert
   */
  export type ImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * The filter to search for the Image to update in case it exists.
     * 
    **/
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     * 
    **/
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }


  /**
   * Image delete
   */
  export type ImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
    /**
     * Filter which Image to delete.
     * 
    **/
    where: ImageWhereUniqueInput
  }


  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs = {
    /**
     * Filter which Images to delete
     * 
    **/
    where?: ImageWhereInput
  }


  /**
   * Image: findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs = ImageFindUniqueArgsBase
      

  /**
   * Image: findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs = ImageFindFirstArgsBase
      

  /**
   * Image without action
   */
  export type ImageArgs = {
    /**
     * Select specific fields to fetch from the Image
     * 
    **/
    select?: ImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImageInclude | null
  }



  /**
   * Model MovieServer
   */


  export type AggregateMovieServer = {
    _count: MovieServerCountAggregateOutputType | null
    _avg: MovieServerAvgAggregateOutputType | null
    _sum: MovieServerSumAggregateOutputType | null
    _min: MovieServerMinAggregateOutputType | null
    _max: MovieServerMaxAggregateOutputType | null
  }

  export type MovieServerAvgAggregateOutputType = {
    movieId: number | null
    serverId: number | null
  }

  export type MovieServerSumAggregateOutputType = {
    movieId: number | null
    serverId: number | null
  }

  export type MovieServerMinAggregateOutputType = {
    movieId: number | null
    serverId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieServerMaxAggregateOutputType = {
    movieId: number | null
    serverId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MovieServerCountAggregateOutputType = {
    movieId: number
    serverId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MovieServerAvgAggregateInputType = {
    movieId?: true
    serverId?: true
  }

  export type MovieServerSumAggregateInputType = {
    movieId?: true
    serverId?: true
  }

  export type MovieServerMinAggregateInputType = {
    movieId?: true
    serverId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieServerMaxAggregateInputType = {
    movieId?: true
    serverId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MovieServerCountAggregateInputType = {
    movieId?: true
    serverId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MovieServerAggregateArgs = {
    /**
     * Filter which MovieServer to aggregate.
     * 
    **/
    where?: MovieServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieServers to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieServers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieServers
    **/
    _count?: true | MovieServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieServerMaxAggregateInputType
  }

  export type GetMovieServerAggregateType<T extends MovieServerAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieServer[P]>
      : GetScalarType<T[P], AggregateMovieServer[P]>
  }




  export type MovieServerGroupByArgs = {
    where?: MovieServerWhereInput
    orderBy?: Enumerable<MovieServerOrderByWithAggregationInput>
    by: Array<MovieServerScalarFieldEnum>
    having?: MovieServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieServerCountAggregateInputType | true
    _avg?: MovieServerAvgAggregateInputType
    _sum?: MovieServerSumAggregateInputType
    _min?: MovieServerMinAggregateInputType
    _max?: MovieServerMaxAggregateInputType
  }


  export type MovieServerGroupByOutputType = {
    movieId: number
    serverId: number
    url: string
    createdAt: Date
    updatedAt: Date
    _count: MovieServerCountAggregateOutputType | null
    _avg: MovieServerAvgAggregateOutputType | null
    _sum: MovieServerSumAggregateOutputType | null
    _min: MovieServerMinAggregateOutputType | null
    _max: MovieServerMaxAggregateOutputType | null
  }

  type GetMovieServerGroupByPayload<T extends MovieServerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieServerGroupByOutputType[P]>
            : GetScalarType<T[P], MovieServerGroupByOutputType[P]>
        }
      >
    >


  export type MovieServerSelect = {
    movie?: boolean | MovieArgs
    movieId?: boolean
    server?: boolean | ServerArgs
    serverId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MovieServerInclude = {
    movie?: boolean | MovieArgs
    server?: boolean | ServerArgs
  }

  export type MovieServerGetPayload<
    S extends boolean | null | undefined | MovieServerArgs,
    U = keyof S
      > = S extends true
        ? MovieServer
    : S extends undefined
    ? never
    : S extends MovieServerArgs | MovieServerFindManyArgs
    ?'include' extends U
    ? MovieServer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'movie' ? MovieGetPayload<S['include'][P]> :
        P extends 'server' ? ServerGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'movie' ? MovieGetPayload<S['select'][P]> :
        P extends 'server' ? ServerGetPayload<S['select'][P]> :  P extends keyof MovieServer ? MovieServer[P] : never
  } 
    : MovieServer
  : MovieServer


  type MovieServerCountArgs = Merge<
    Omit<MovieServerFindManyArgs, 'select' | 'include'> & {
      select?: MovieServerCountAggregateInputType | true
    }
  >

  export interface MovieServerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one MovieServer that matches the filter.
     * @param {MovieServerFindUniqueArgs} args - Arguments to find a MovieServer
     * @example
     * // Get one MovieServer
     * const movieServer = await prisma.movieServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieServerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieServerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MovieServer'> extends True ? CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>> : CheckSelect<T, Prisma__MovieServerClient<MovieServer | null >, Prisma__MovieServerClient<MovieServerGetPayload<T> | null >>

    /**
     * Find the first MovieServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerFindFirstArgs} args - Arguments to find a MovieServer
     * @example
     * // Get one MovieServer
     * const movieServer = await prisma.movieServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieServerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieServerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MovieServer'> extends True ? CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>> : CheckSelect<T, Prisma__MovieServerClient<MovieServer | null >, Prisma__MovieServerClient<MovieServerGetPayload<T> | null >>

    /**
     * Find zero or more MovieServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieServers
     * const movieServers = await prisma.movieServer.findMany()
     * 
     * // Get first 10 MovieServers
     * const movieServers = await prisma.movieServer.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieServerWithMovieIdOnly = await prisma.movieServer.findMany({ select: { movieId: true } })
     * 
    **/
    findMany<T extends MovieServerFindManyArgs>(
      args?: SelectSubset<T, MovieServerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<MovieServer>>, PrismaPromise<Array<MovieServerGetPayload<T>>>>

    /**
     * Create a MovieServer.
     * @param {MovieServerCreateArgs} args - Arguments to create a MovieServer.
     * @example
     * // Create one MovieServer
     * const MovieServer = await prisma.movieServer.create({
     *   data: {
     *     // ... data to create a MovieServer
     *   }
     * })
     * 
    **/
    create<T extends MovieServerCreateArgs>(
      args: SelectSubset<T, MovieServerCreateArgs>
    ): CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>>

    /**
     * Create many MovieServers.
     *     @param {MovieServerCreateManyArgs} args - Arguments to create many MovieServers.
     *     @example
     *     // Create many MovieServers
     *     const movieServer = await prisma.movieServer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieServerCreateManyArgs>(
      args?: SelectSubset<T, MovieServerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MovieServer.
     * @param {MovieServerDeleteArgs} args - Arguments to delete one MovieServer.
     * @example
     * // Delete one MovieServer
     * const MovieServer = await prisma.movieServer.delete({
     *   where: {
     *     // ... filter to delete one MovieServer
     *   }
     * })
     * 
    **/
    delete<T extends MovieServerDeleteArgs>(
      args: SelectSubset<T, MovieServerDeleteArgs>
    ): CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>>

    /**
     * Update one MovieServer.
     * @param {MovieServerUpdateArgs} args - Arguments to update one MovieServer.
     * @example
     * // Update one MovieServer
     * const movieServer = await prisma.movieServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieServerUpdateArgs>(
      args: SelectSubset<T, MovieServerUpdateArgs>
    ): CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>>

    /**
     * Delete zero or more MovieServers.
     * @param {MovieServerDeleteManyArgs} args - Arguments to filter MovieServers to delete.
     * @example
     * // Delete a few MovieServers
     * const { count } = await prisma.movieServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieServerDeleteManyArgs>(
      args?: SelectSubset<T, MovieServerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieServers
     * const movieServer = await prisma.movieServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieServerUpdateManyArgs>(
      args: SelectSubset<T, MovieServerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieServer.
     * @param {MovieServerUpsertArgs} args - Arguments to update or create a MovieServer.
     * @example
     * // Update or create a MovieServer
     * const movieServer = await prisma.movieServer.upsert({
     *   create: {
     *     // ... data to create a MovieServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieServer we want to update
     *   }
     * })
    **/
    upsert<T extends MovieServerUpsertArgs>(
      args: SelectSubset<T, MovieServerUpsertArgs>
    ): CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>>

    /**
     * Find one MovieServer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MovieServerFindUniqueOrThrowArgs} args - Arguments to find a MovieServer
     * @example
     * // Get one MovieServer
     * const movieServer = await prisma.movieServer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieServerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MovieServerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>>

    /**
     * Find the first MovieServer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerFindFirstOrThrowArgs} args - Arguments to find a MovieServer
     * @example
     * // Get one MovieServer
     * const movieServer = await prisma.movieServer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieServerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MovieServerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MovieServerClient<MovieServer>, Prisma__MovieServerClient<MovieServerGetPayload<T>>>

    /**
     * Count the number of MovieServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerCountArgs} args - Arguments to filter MovieServers to count.
     * @example
     * // Count the number of MovieServers
     * const count = await prisma.movieServer.count({
     *   where: {
     *     // ... the filter for the MovieServers we want to count
     *   }
     * })
    **/
    count<T extends MovieServerCountArgs>(
      args?: Subset<T, MovieServerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieServerAggregateArgs>(args: Subset<T, MovieServerAggregateArgs>): PrismaPromise<GetMovieServerAggregateType<T>>

    /**
     * Group by MovieServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieServerGroupByArgs['orderBy'] }
        : { orderBy?: MovieServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieServerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieServerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movie<T extends MovieArgs = {}>(args?: Subset<T, MovieArgs>): CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>;

    server<T extends ServerArgs = {}>(args?: Subset<T, ServerArgs>): CheckSelect<T, Prisma__ServerClient<Server | null >, Prisma__ServerClient<ServerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * MovieServer base type for findUnique actions
   */
  export type MovieServerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * Filter, which MovieServer to fetch.
     * 
    **/
    where: MovieServerWhereUniqueInput
  }

  /**
   * MovieServer: findUnique
   */
  export interface MovieServerFindUniqueArgs extends MovieServerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovieServer base type for findFirst actions
   */
  export type MovieServerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * Filter, which MovieServer to fetch.
     * 
    **/
    where?: MovieServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieServers to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieServers.
     * 
    **/
    cursor?: MovieServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieServers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieServers.
     * 
    **/
    distinct?: Enumerable<MovieServerScalarFieldEnum>
  }

  /**
   * MovieServer: findFirst
   */
  export interface MovieServerFindFirstArgs extends MovieServerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MovieServer findMany
   */
  export type MovieServerFindManyArgs = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * Filter, which MovieServers to fetch.
     * 
    **/
    where?: MovieServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieServers to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieServers.
     * 
    **/
    cursor?: MovieServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieServers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieServerScalarFieldEnum>
  }


  /**
   * MovieServer create
   */
  export type MovieServerCreateArgs = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * The data needed to create a MovieServer.
     * 
    **/
    data: XOR<MovieServerCreateInput, MovieServerUncheckedCreateInput>
  }


  /**
   * MovieServer createMany
   */
  export type MovieServerCreateManyArgs = {
    /**
     * The data used to create many MovieServers.
     * 
    **/
    data: Enumerable<MovieServerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MovieServer update
   */
  export type MovieServerUpdateArgs = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * The data needed to update a MovieServer.
     * 
    **/
    data: XOR<MovieServerUpdateInput, MovieServerUncheckedUpdateInput>
    /**
     * Choose, which MovieServer to update.
     * 
    **/
    where: MovieServerWhereUniqueInput
  }


  /**
   * MovieServer updateMany
   */
  export type MovieServerUpdateManyArgs = {
    /**
     * The data used to update MovieServers.
     * 
    **/
    data: XOR<MovieServerUpdateManyMutationInput, MovieServerUncheckedUpdateManyInput>
    /**
     * Filter which MovieServers to update
     * 
    **/
    where?: MovieServerWhereInput
  }


  /**
   * MovieServer upsert
   */
  export type MovieServerUpsertArgs = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * The filter to search for the MovieServer to update in case it exists.
     * 
    **/
    where: MovieServerWhereUniqueInput
    /**
     * In case the MovieServer found by the `where` argument doesn't exist, create a new MovieServer with this data.
     * 
    **/
    create: XOR<MovieServerCreateInput, MovieServerUncheckedCreateInput>
    /**
     * In case the MovieServer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieServerUpdateInput, MovieServerUncheckedUpdateInput>
  }


  /**
   * MovieServer delete
   */
  export type MovieServerDeleteArgs = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
    /**
     * Filter which MovieServer to delete.
     * 
    **/
    where: MovieServerWhereUniqueInput
  }


  /**
   * MovieServer deleteMany
   */
  export type MovieServerDeleteManyArgs = {
    /**
     * Filter which MovieServers to delete
     * 
    **/
    where?: MovieServerWhereInput
  }


  /**
   * MovieServer: findUniqueOrThrow
   */
  export type MovieServerFindUniqueOrThrowArgs = MovieServerFindUniqueArgsBase
      

  /**
   * MovieServer: findFirstOrThrow
   */
  export type MovieServerFindFirstOrThrowArgs = MovieServerFindFirstArgsBase
      

  /**
   * MovieServer without action
   */
  export type MovieServerArgs = {
    /**
     * Select specific fields to fetch from the MovieServer
     * 
    **/
    select?: MovieServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieServerInclude | null
  }



  /**
   * Model SeriesServer
   */


  export type AggregateSeriesServer = {
    _count: SeriesServerCountAggregateOutputType | null
    _avg: SeriesServerAvgAggregateOutputType | null
    _sum: SeriesServerSumAggregateOutputType | null
    _min: SeriesServerMinAggregateOutputType | null
    _max: SeriesServerMaxAggregateOutputType | null
  }

  export type SeriesServerAvgAggregateOutputType = {
    episodeId: number | null
    serverId: number | null
  }

  export type SeriesServerSumAggregateOutputType = {
    episodeId: number | null
    serverId: number | null
  }

  export type SeriesServerMinAggregateOutputType = {
    episodeId: number | null
    serverId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesServerMaxAggregateOutputType = {
    episodeId: number | null
    serverId: number | null
    url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SeriesServerCountAggregateOutputType = {
    episodeId: number
    serverId: number
    url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SeriesServerAvgAggregateInputType = {
    episodeId?: true
    serverId?: true
  }

  export type SeriesServerSumAggregateInputType = {
    episodeId?: true
    serverId?: true
  }

  export type SeriesServerMinAggregateInputType = {
    episodeId?: true
    serverId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesServerMaxAggregateInputType = {
    episodeId?: true
    serverId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SeriesServerCountAggregateInputType = {
    episodeId?: true
    serverId?: true
    url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SeriesServerAggregateArgs = {
    /**
     * Filter which SeriesServer to aggregate.
     * 
    **/
    where?: SeriesServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesServers to fetch.
     * 
    **/
    orderBy?: Enumerable<SeriesServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SeriesServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesServers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeriesServers
    **/
    _count?: true | SeriesServerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeriesServerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeriesServerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeriesServerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeriesServerMaxAggregateInputType
  }

  export type GetSeriesServerAggregateType<T extends SeriesServerAggregateArgs> = {
        [P in keyof T & keyof AggregateSeriesServer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeriesServer[P]>
      : GetScalarType<T[P], AggregateSeriesServer[P]>
  }




  export type SeriesServerGroupByArgs = {
    where?: SeriesServerWhereInput
    orderBy?: Enumerable<SeriesServerOrderByWithAggregationInput>
    by: Array<SeriesServerScalarFieldEnum>
    having?: SeriesServerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeriesServerCountAggregateInputType | true
    _avg?: SeriesServerAvgAggregateInputType
    _sum?: SeriesServerSumAggregateInputType
    _min?: SeriesServerMinAggregateInputType
    _max?: SeriesServerMaxAggregateInputType
  }


  export type SeriesServerGroupByOutputType = {
    episodeId: number
    serverId: number
    url: string
    createdAt: Date
    updatedAt: Date
    _count: SeriesServerCountAggregateOutputType | null
    _avg: SeriesServerAvgAggregateOutputType | null
    _sum: SeriesServerSumAggregateOutputType | null
    _min: SeriesServerMinAggregateOutputType | null
    _max: SeriesServerMaxAggregateOutputType | null
  }

  type GetSeriesServerGroupByPayload<T extends SeriesServerGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SeriesServerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeriesServerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeriesServerGroupByOutputType[P]>
            : GetScalarType<T[P], SeriesServerGroupByOutputType[P]>
        }
      >
    >


  export type SeriesServerSelect = {
    episode?: boolean | EpisodeArgs
    episodeId?: boolean
    server?: boolean | ServerArgs
    serverId?: boolean
    url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SeriesServerInclude = {
    episode?: boolean | EpisodeArgs
    server?: boolean | ServerArgs
  }

  export type SeriesServerGetPayload<
    S extends boolean | null | undefined | SeriesServerArgs,
    U = keyof S
      > = S extends true
        ? SeriesServer
    : S extends undefined
    ? never
    : S extends SeriesServerArgs | SeriesServerFindManyArgs
    ?'include' extends U
    ? SeriesServer  & {
    [P in TrueKeys<S['include']>]:
        P extends 'episode' ? EpisodeGetPayload<S['include'][P]> :
        P extends 'server' ? ServerGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'episode' ? EpisodeGetPayload<S['select'][P]> :
        P extends 'server' ? ServerGetPayload<S['select'][P]> :  P extends keyof SeriesServer ? SeriesServer[P] : never
  } 
    : SeriesServer
  : SeriesServer


  type SeriesServerCountArgs = Merge<
    Omit<SeriesServerFindManyArgs, 'select' | 'include'> & {
      select?: SeriesServerCountAggregateInputType | true
    }
  >

  export interface SeriesServerDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SeriesServer that matches the filter.
     * @param {SeriesServerFindUniqueArgs} args - Arguments to find a SeriesServer
     * @example
     * // Get one SeriesServer
     * const seriesServer = await prisma.seriesServer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeriesServerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SeriesServerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SeriesServer'> extends True ? CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>> : CheckSelect<T, Prisma__SeriesServerClient<SeriesServer | null >, Prisma__SeriesServerClient<SeriesServerGetPayload<T> | null >>

    /**
     * Find the first SeriesServer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerFindFirstArgs} args - Arguments to find a SeriesServer
     * @example
     * // Get one SeriesServer
     * const seriesServer = await prisma.seriesServer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeriesServerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SeriesServerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SeriesServer'> extends True ? CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>> : CheckSelect<T, Prisma__SeriesServerClient<SeriesServer | null >, Prisma__SeriesServerClient<SeriesServerGetPayload<T> | null >>

    /**
     * Find zero or more SeriesServers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeriesServers
     * const seriesServers = await prisma.seriesServer.findMany()
     * 
     * // Get first 10 SeriesServers
     * const seriesServers = await prisma.seriesServer.findMany({ take: 10 })
     * 
     * // Only select the `episodeId`
     * const seriesServerWithEpisodeIdOnly = await prisma.seriesServer.findMany({ select: { episodeId: true } })
     * 
    **/
    findMany<T extends SeriesServerFindManyArgs>(
      args?: SelectSubset<T, SeriesServerFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SeriesServer>>, PrismaPromise<Array<SeriesServerGetPayload<T>>>>

    /**
     * Create a SeriesServer.
     * @param {SeriesServerCreateArgs} args - Arguments to create a SeriesServer.
     * @example
     * // Create one SeriesServer
     * const SeriesServer = await prisma.seriesServer.create({
     *   data: {
     *     // ... data to create a SeriesServer
     *   }
     * })
     * 
    **/
    create<T extends SeriesServerCreateArgs>(
      args: SelectSubset<T, SeriesServerCreateArgs>
    ): CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>>

    /**
     * Create many SeriesServers.
     *     @param {SeriesServerCreateManyArgs} args - Arguments to create many SeriesServers.
     *     @example
     *     // Create many SeriesServers
     *     const seriesServer = await prisma.seriesServer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeriesServerCreateManyArgs>(
      args?: SelectSubset<T, SeriesServerCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SeriesServer.
     * @param {SeriesServerDeleteArgs} args - Arguments to delete one SeriesServer.
     * @example
     * // Delete one SeriesServer
     * const SeriesServer = await prisma.seriesServer.delete({
     *   where: {
     *     // ... filter to delete one SeriesServer
     *   }
     * })
     * 
    **/
    delete<T extends SeriesServerDeleteArgs>(
      args: SelectSubset<T, SeriesServerDeleteArgs>
    ): CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>>

    /**
     * Update one SeriesServer.
     * @param {SeriesServerUpdateArgs} args - Arguments to update one SeriesServer.
     * @example
     * // Update one SeriesServer
     * const seriesServer = await prisma.seriesServer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeriesServerUpdateArgs>(
      args: SelectSubset<T, SeriesServerUpdateArgs>
    ): CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>>

    /**
     * Delete zero or more SeriesServers.
     * @param {SeriesServerDeleteManyArgs} args - Arguments to filter SeriesServers to delete.
     * @example
     * // Delete a few SeriesServers
     * const { count } = await prisma.seriesServer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeriesServerDeleteManyArgs>(
      args?: SelectSubset<T, SeriesServerDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeriesServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeriesServers
     * const seriesServer = await prisma.seriesServer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeriesServerUpdateManyArgs>(
      args: SelectSubset<T, SeriesServerUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SeriesServer.
     * @param {SeriesServerUpsertArgs} args - Arguments to update or create a SeriesServer.
     * @example
     * // Update or create a SeriesServer
     * const seriesServer = await prisma.seriesServer.upsert({
     *   create: {
     *     // ... data to create a SeriesServer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeriesServer we want to update
     *   }
     * })
    **/
    upsert<T extends SeriesServerUpsertArgs>(
      args: SelectSubset<T, SeriesServerUpsertArgs>
    ): CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>>

    /**
     * Find one SeriesServer that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SeriesServerFindUniqueOrThrowArgs} args - Arguments to find a SeriesServer
     * @example
     * // Get one SeriesServer
     * const seriesServer = await prisma.seriesServer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeriesServerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SeriesServerFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>>

    /**
     * Find the first SeriesServer that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerFindFirstOrThrowArgs} args - Arguments to find a SeriesServer
     * @example
     * // Get one SeriesServer
     * const seriesServer = await prisma.seriesServer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeriesServerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SeriesServerFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SeriesServerClient<SeriesServer>, Prisma__SeriesServerClient<SeriesServerGetPayload<T>>>

    /**
     * Count the number of SeriesServers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerCountArgs} args - Arguments to filter SeriesServers to count.
     * @example
     * // Count the number of SeriesServers
     * const count = await prisma.seriesServer.count({
     *   where: {
     *     // ... the filter for the SeriesServers we want to count
     *   }
     * })
    **/
    count<T extends SeriesServerCountArgs>(
      args?: Subset<T, SeriesServerCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeriesServerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeriesServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeriesServerAggregateArgs>(args: Subset<T, SeriesServerAggregateArgs>): PrismaPromise<GetSeriesServerAggregateType<T>>

    /**
     * Group by SeriesServer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeriesServerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeriesServerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeriesServerGroupByArgs['orderBy'] }
        : { orderBy?: SeriesServerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeriesServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeriesServerGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SeriesServer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SeriesServerClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    episode<T extends EpisodeArgs = {}>(args?: Subset<T, EpisodeArgs>): CheckSelect<T, Prisma__EpisodeClient<Episode | null >, Prisma__EpisodeClient<EpisodeGetPayload<T> | null >>;

    server<T extends ServerArgs = {}>(args?: Subset<T, ServerArgs>): CheckSelect<T, Prisma__ServerClient<Server | null >, Prisma__ServerClient<ServerGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SeriesServer base type for findUnique actions
   */
  export type SeriesServerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * Filter, which SeriesServer to fetch.
     * 
    **/
    where: SeriesServerWhereUniqueInput
  }

  /**
   * SeriesServer: findUnique
   */
  export interface SeriesServerFindUniqueArgs extends SeriesServerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SeriesServer base type for findFirst actions
   */
  export type SeriesServerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * Filter, which SeriesServer to fetch.
     * 
    **/
    where?: SeriesServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesServers to fetch.
     * 
    **/
    orderBy?: Enumerable<SeriesServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeriesServers.
     * 
    **/
    cursor?: SeriesServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesServers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeriesServers.
     * 
    **/
    distinct?: Enumerable<SeriesServerScalarFieldEnum>
  }

  /**
   * SeriesServer: findFirst
   */
  export interface SeriesServerFindFirstArgs extends SeriesServerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SeriesServer findMany
   */
  export type SeriesServerFindManyArgs = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * Filter, which SeriesServers to fetch.
     * 
    **/
    where?: SeriesServerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeriesServers to fetch.
     * 
    **/
    orderBy?: Enumerable<SeriesServerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeriesServers.
     * 
    **/
    cursor?: SeriesServerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeriesServers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeriesServers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SeriesServerScalarFieldEnum>
  }


  /**
   * SeriesServer create
   */
  export type SeriesServerCreateArgs = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * The data needed to create a SeriesServer.
     * 
    **/
    data: XOR<SeriesServerCreateInput, SeriesServerUncheckedCreateInput>
  }


  /**
   * SeriesServer createMany
   */
  export type SeriesServerCreateManyArgs = {
    /**
     * The data used to create many SeriesServers.
     * 
    **/
    data: Enumerable<SeriesServerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SeriesServer update
   */
  export type SeriesServerUpdateArgs = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * The data needed to update a SeriesServer.
     * 
    **/
    data: XOR<SeriesServerUpdateInput, SeriesServerUncheckedUpdateInput>
    /**
     * Choose, which SeriesServer to update.
     * 
    **/
    where: SeriesServerWhereUniqueInput
  }


  /**
   * SeriesServer updateMany
   */
  export type SeriesServerUpdateManyArgs = {
    /**
     * The data used to update SeriesServers.
     * 
    **/
    data: XOR<SeriesServerUpdateManyMutationInput, SeriesServerUncheckedUpdateManyInput>
    /**
     * Filter which SeriesServers to update
     * 
    **/
    where?: SeriesServerWhereInput
  }


  /**
   * SeriesServer upsert
   */
  export type SeriesServerUpsertArgs = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * The filter to search for the SeriesServer to update in case it exists.
     * 
    **/
    where: SeriesServerWhereUniqueInput
    /**
     * In case the SeriesServer found by the `where` argument doesn't exist, create a new SeriesServer with this data.
     * 
    **/
    create: XOR<SeriesServerCreateInput, SeriesServerUncheckedCreateInput>
    /**
     * In case the SeriesServer was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SeriesServerUpdateInput, SeriesServerUncheckedUpdateInput>
  }


  /**
   * SeriesServer delete
   */
  export type SeriesServerDeleteArgs = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
    /**
     * Filter which SeriesServer to delete.
     * 
    **/
    where: SeriesServerWhereUniqueInput
  }


  /**
   * SeriesServer deleteMany
   */
  export type SeriesServerDeleteManyArgs = {
    /**
     * Filter which SeriesServers to delete
     * 
    **/
    where?: SeriesServerWhereInput
  }


  /**
   * SeriesServer: findUniqueOrThrow
   */
  export type SeriesServerFindUniqueOrThrowArgs = SeriesServerFindUniqueArgsBase
      

  /**
   * SeriesServer: findFirstOrThrow
   */
  export type SeriesServerFindFirstOrThrowArgs = SeriesServerFindFirstArgsBase
      

  /**
   * SeriesServer without action
   */
  export type SeriesServerArgs = {
    /**
     * Select specific fields to fetch from the SeriesServer
     * 
    **/
    select?: SeriesServerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeriesServerInclude | null
  }



  /**
   * Model ShowCast
   */


  export type AggregateShowCast = {
    _count: ShowCastCountAggregateOutputType | null
    _avg: ShowCastAvgAggregateOutputType | null
    _sum: ShowCastSumAggregateOutputType | null
    _min: ShowCastMinAggregateOutputType | null
    _max: ShowCastMaxAggregateOutputType | null
  }

  export type ShowCastAvgAggregateOutputType = {
    showId: number | null
    actorId: number | null
  }

  export type ShowCastSumAggregateOutputType = {
    showId: number | null
    actorId: number | null
  }

  export type ShowCastMinAggregateOutputType = {
    showId: number | null
    actorId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCastMaxAggregateOutputType = {
    showId: number | null
    actorId: number | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowCastCountAggregateOutputType = {
    showId: number
    actorId: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowCastAvgAggregateInputType = {
    showId?: true
    actorId?: true
  }

  export type ShowCastSumAggregateInputType = {
    showId?: true
    actorId?: true
  }

  export type ShowCastMinAggregateInputType = {
    showId?: true
    actorId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCastMaxAggregateInputType = {
    showId?: true
    actorId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowCastCountAggregateInputType = {
    showId?: true
    actorId?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowCastAggregateArgs = {
    /**
     * Filter which ShowCast to aggregate.
     * 
    **/
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowCastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowCasts
    **/
    _count?: true | ShowCastCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowCastAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowCastSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowCastMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowCastMaxAggregateInputType
  }

  export type GetShowCastAggregateType<T extends ShowCastAggregateArgs> = {
        [P in keyof T & keyof AggregateShowCast]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowCast[P]>
      : GetScalarType<T[P], AggregateShowCast[P]>
  }




  export type ShowCastGroupByArgs = {
    where?: ShowCastWhereInput
    orderBy?: Enumerable<ShowCastOrderByWithAggregationInput>
    by: Array<ShowCastScalarFieldEnum>
    having?: ShowCastScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowCastCountAggregateInputType | true
    _avg?: ShowCastAvgAggregateInputType
    _sum?: ShowCastSumAggregateInputType
    _min?: ShowCastMinAggregateInputType
    _max?: ShowCastMaxAggregateInputType
  }


  export type ShowCastGroupByOutputType = {
    showId: number
    actorId: number
    role: string
    createdAt: Date
    updatedAt: Date
    _count: ShowCastCountAggregateOutputType | null
    _avg: ShowCastAvgAggregateOutputType | null
    _sum: ShowCastSumAggregateOutputType | null
    _min: ShowCastMinAggregateOutputType | null
    _max: ShowCastMaxAggregateOutputType | null
  }

  type GetShowCastGroupByPayload<T extends ShowCastGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowCastGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowCastGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowCastGroupByOutputType[P]>
            : GetScalarType<T[P], ShowCastGroupByOutputType[P]>
        }
      >
    >


  export type ShowCastSelect = {
    show?: boolean | ShowArgs
    showId?: boolean
    actor?: boolean | ActorArgs
    actorId?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowCastInclude = {
    show?: boolean | ShowArgs
    actor?: boolean | ActorArgs
  }

  export type ShowCastGetPayload<
    S extends boolean | null | undefined | ShowCastArgs,
    U = keyof S
      > = S extends true
        ? ShowCast
    : S extends undefined
    ? never
    : S extends ShowCastArgs | ShowCastFindManyArgs
    ?'include' extends U
    ? ShowCast  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'actor' ? ActorGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'actor' ? ActorGetPayload<S['select'][P]> :  P extends keyof ShowCast ? ShowCast[P] : never
  } 
    : ShowCast
  : ShowCast


  type ShowCastCountArgs = Merge<
    Omit<ShowCastFindManyArgs, 'select' | 'include'> & {
      select?: ShowCastCountAggregateInputType | true
    }
  >

  export interface ShowCastDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShowCast that matches the filter.
     * @param {ShowCastFindUniqueArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowCastFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowCastFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShowCast'> extends True ? CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>> : CheckSelect<T, Prisma__ShowCastClient<ShowCast | null >, Prisma__ShowCastClient<ShowCastGetPayload<T> | null >>

    /**
     * Find the first ShowCast that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastFindFirstArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowCastFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowCastFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShowCast'> extends True ? CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>> : CheckSelect<T, Prisma__ShowCastClient<ShowCast | null >, Prisma__ShowCastClient<ShowCastGetPayload<T> | null >>

    /**
     * Find zero or more ShowCasts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowCasts
     * const showCasts = await prisma.showCast.findMany()
     * 
     * // Get first 10 ShowCasts
     * const showCasts = await prisma.showCast.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showCastWithShowIdOnly = await prisma.showCast.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowCastFindManyArgs>(
      args?: SelectSubset<T, ShowCastFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShowCast>>, PrismaPromise<Array<ShowCastGetPayload<T>>>>

    /**
     * Create a ShowCast.
     * @param {ShowCastCreateArgs} args - Arguments to create a ShowCast.
     * @example
     * // Create one ShowCast
     * const ShowCast = await prisma.showCast.create({
     *   data: {
     *     // ... data to create a ShowCast
     *   }
     * })
     * 
    **/
    create<T extends ShowCastCreateArgs>(
      args: SelectSubset<T, ShowCastCreateArgs>
    ): CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>>

    /**
     * Create many ShowCasts.
     *     @param {ShowCastCreateManyArgs} args - Arguments to create many ShowCasts.
     *     @example
     *     // Create many ShowCasts
     *     const showCast = await prisma.showCast.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowCastCreateManyArgs>(
      args?: SelectSubset<T, ShowCastCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShowCast.
     * @param {ShowCastDeleteArgs} args - Arguments to delete one ShowCast.
     * @example
     * // Delete one ShowCast
     * const ShowCast = await prisma.showCast.delete({
     *   where: {
     *     // ... filter to delete one ShowCast
     *   }
     * })
     * 
    **/
    delete<T extends ShowCastDeleteArgs>(
      args: SelectSubset<T, ShowCastDeleteArgs>
    ): CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>>

    /**
     * Update one ShowCast.
     * @param {ShowCastUpdateArgs} args - Arguments to update one ShowCast.
     * @example
     * // Update one ShowCast
     * const showCast = await prisma.showCast.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowCastUpdateArgs>(
      args: SelectSubset<T, ShowCastUpdateArgs>
    ): CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>>

    /**
     * Delete zero or more ShowCasts.
     * @param {ShowCastDeleteManyArgs} args - Arguments to filter ShowCasts to delete.
     * @example
     * // Delete a few ShowCasts
     * const { count } = await prisma.showCast.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowCastDeleteManyArgs>(
      args?: SelectSubset<T, ShowCastDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowCasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowCasts
     * const showCast = await prisma.showCast.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowCastUpdateManyArgs>(
      args: SelectSubset<T, ShowCastUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowCast.
     * @param {ShowCastUpsertArgs} args - Arguments to update or create a ShowCast.
     * @example
     * // Update or create a ShowCast
     * const showCast = await prisma.showCast.upsert({
     *   create: {
     *     // ... data to create a ShowCast
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowCast we want to update
     *   }
     * })
    **/
    upsert<T extends ShowCastUpsertArgs>(
      args: SelectSubset<T, ShowCastUpsertArgs>
    ): CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>>

    /**
     * Find one ShowCast that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowCastFindUniqueOrThrowArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowCastFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowCastFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>>

    /**
     * Find the first ShowCast that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastFindFirstOrThrowArgs} args - Arguments to find a ShowCast
     * @example
     * // Get one ShowCast
     * const showCast = await prisma.showCast.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowCastFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowCastFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowCastClient<ShowCast>, Prisma__ShowCastClient<ShowCastGetPayload<T>>>

    /**
     * Count the number of ShowCasts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastCountArgs} args - Arguments to filter ShowCasts to count.
     * @example
     * // Count the number of ShowCasts
     * const count = await prisma.showCast.count({
     *   where: {
     *     // ... the filter for the ShowCasts we want to count
     *   }
     * })
    **/
    count<T extends ShowCastCountArgs>(
      args?: Subset<T, ShowCastCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowCastCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowCast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowCastAggregateArgs>(args: Subset<T, ShowCastAggregateArgs>): PrismaPromise<GetShowCastAggregateType<T>>

    /**
     * Group by ShowCast.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowCastGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowCastGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowCastGroupByArgs['orderBy'] }
        : { orderBy?: ShowCastGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowCastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowCastGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowCast.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowCastClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    actor<T extends ActorArgs = {}>(args?: Subset<T, ActorArgs>): CheckSelect<T, Prisma__ActorClient<Actor | null >, Prisma__ActorClient<ActorGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShowCast base type for findUnique actions
   */
  export type ShowCastFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * Filter, which ShowCast to fetch.
     * 
    **/
    where: ShowCastWhereUniqueInput
  }

  /**
   * ShowCast: findUnique
   */
  export interface ShowCastFindUniqueArgs extends ShowCastFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowCast base type for findFirst actions
   */
  export type ShowCastFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * Filter, which ShowCast to fetch.
     * 
    **/
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowCastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowCasts.
     * 
    **/
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowCasts.
     * 
    **/
    distinct?: Enumerable<ShowCastScalarFieldEnum>
  }

  /**
   * ShowCast: findFirst
   */
  export interface ShowCastFindFirstArgs extends ShowCastFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowCast findMany
   */
  export type ShowCastFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * Filter, which ShowCasts to fetch.
     * 
    **/
    where?: ShowCastWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowCasts to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowCastOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowCasts.
     * 
    **/
    cursor?: ShowCastWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowCasts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowCasts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowCastScalarFieldEnum>
  }


  /**
   * ShowCast create
   */
  export type ShowCastCreateArgs = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * The data needed to create a ShowCast.
     * 
    **/
    data: XOR<ShowCastCreateInput, ShowCastUncheckedCreateInput>
  }


  /**
   * ShowCast createMany
   */
  export type ShowCastCreateManyArgs = {
    /**
     * The data used to create many ShowCasts.
     * 
    **/
    data: Enumerable<ShowCastCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShowCast update
   */
  export type ShowCastUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * The data needed to update a ShowCast.
     * 
    **/
    data: XOR<ShowCastUpdateInput, ShowCastUncheckedUpdateInput>
    /**
     * Choose, which ShowCast to update.
     * 
    **/
    where: ShowCastWhereUniqueInput
  }


  /**
   * ShowCast updateMany
   */
  export type ShowCastUpdateManyArgs = {
    /**
     * The data used to update ShowCasts.
     * 
    **/
    data: XOR<ShowCastUpdateManyMutationInput, ShowCastUncheckedUpdateManyInput>
    /**
     * Filter which ShowCasts to update
     * 
    **/
    where?: ShowCastWhereInput
  }


  /**
   * ShowCast upsert
   */
  export type ShowCastUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * The filter to search for the ShowCast to update in case it exists.
     * 
    **/
    where: ShowCastWhereUniqueInput
    /**
     * In case the ShowCast found by the `where` argument doesn't exist, create a new ShowCast with this data.
     * 
    **/
    create: XOR<ShowCastCreateInput, ShowCastUncheckedCreateInput>
    /**
     * In case the ShowCast was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowCastUpdateInput, ShowCastUncheckedUpdateInput>
  }


  /**
   * ShowCast delete
   */
  export type ShowCastDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
    /**
     * Filter which ShowCast to delete.
     * 
    **/
    where: ShowCastWhereUniqueInput
  }


  /**
   * ShowCast deleteMany
   */
  export type ShowCastDeleteManyArgs = {
    /**
     * Filter which ShowCasts to delete
     * 
    **/
    where?: ShowCastWhereInput
  }


  /**
   * ShowCast: findUniqueOrThrow
   */
  export type ShowCastFindUniqueOrThrowArgs = ShowCastFindUniqueArgsBase
      

  /**
   * ShowCast: findFirstOrThrow
   */
  export type ShowCastFindFirstOrThrowArgs = ShowCastFindFirstArgsBase
      

  /**
   * ShowCast without action
   */
  export type ShowCastArgs = {
    /**
     * Select specific fields to fetch from the ShowCast
     * 
    **/
    select?: ShowCastSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowCastInclude | null
  }



  /**
   * Model ShowDirector
   */


  export type AggregateShowDirector = {
    _count: ShowDirectorCountAggregateOutputType | null
    _avg: ShowDirectorAvgAggregateOutputType | null
    _sum: ShowDirectorSumAggregateOutputType | null
    _min: ShowDirectorMinAggregateOutputType | null
    _max: ShowDirectorMaxAggregateOutputType | null
  }

  export type ShowDirectorAvgAggregateOutputType = {
    showId: number | null
    directorId: number | null
  }

  export type ShowDirectorSumAggregateOutputType = {
    showId: number | null
    directorId: number | null
  }

  export type ShowDirectorMinAggregateOutputType = {
    showId: number | null
    directorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowDirectorMaxAggregateOutputType = {
    showId: number | null
    directorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowDirectorCountAggregateOutputType = {
    showId: number
    directorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowDirectorAvgAggregateInputType = {
    showId?: true
    directorId?: true
  }

  export type ShowDirectorSumAggregateInputType = {
    showId?: true
    directorId?: true
  }

  export type ShowDirectorMinAggregateInputType = {
    showId?: true
    directorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowDirectorMaxAggregateInputType = {
    showId?: true
    directorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowDirectorCountAggregateInputType = {
    showId?: true
    directorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowDirectorAggregateArgs = {
    /**
     * Filter which ShowDirector to aggregate.
     * 
    **/
    where?: ShowDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowDirectors to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowDirectorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowDirectors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowDirectors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowDirectors
    **/
    _count?: true | ShowDirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowDirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowDirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowDirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowDirectorMaxAggregateInputType
  }

  export type GetShowDirectorAggregateType<T extends ShowDirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateShowDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowDirector[P]>
      : GetScalarType<T[P], AggregateShowDirector[P]>
  }




  export type ShowDirectorGroupByArgs = {
    where?: ShowDirectorWhereInput
    orderBy?: Enumerable<ShowDirectorOrderByWithAggregationInput>
    by: Array<ShowDirectorScalarFieldEnum>
    having?: ShowDirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowDirectorCountAggregateInputType | true
    _avg?: ShowDirectorAvgAggregateInputType
    _sum?: ShowDirectorSumAggregateInputType
    _min?: ShowDirectorMinAggregateInputType
    _max?: ShowDirectorMaxAggregateInputType
  }


  export type ShowDirectorGroupByOutputType = {
    showId: number
    directorId: number
    createdAt: Date
    updatedAt: Date
    _count: ShowDirectorCountAggregateOutputType | null
    _avg: ShowDirectorAvgAggregateOutputType | null
    _sum: ShowDirectorSumAggregateOutputType | null
    _min: ShowDirectorMinAggregateOutputType | null
    _max: ShowDirectorMaxAggregateOutputType | null
  }

  type GetShowDirectorGroupByPayload<T extends ShowDirectorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowDirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowDirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowDirectorGroupByOutputType[P]>
            : GetScalarType<T[P], ShowDirectorGroupByOutputType[P]>
        }
      >
    >


  export type ShowDirectorSelect = {
    show?: boolean | ShowArgs
    showId?: boolean
    director?: boolean | DirectorArgs
    directorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowDirectorInclude = {
    show?: boolean | ShowArgs
    director?: boolean | DirectorArgs
  }

  export type ShowDirectorGetPayload<
    S extends boolean | null | undefined | ShowDirectorArgs,
    U = keyof S
      > = S extends true
        ? ShowDirector
    : S extends undefined
    ? never
    : S extends ShowDirectorArgs | ShowDirectorFindManyArgs
    ?'include' extends U
    ? ShowDirector  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'director' ? DirectorGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'director' ? DirectorGetPayload<S['select'][P]> :  P extends keyof ShowDirector ? ShowDirector[P] : never
  } 
    : ShowDirector
  : ShowDirector


  type ShowDirectorCountArgs = Merge<
    Omit<ShowDirectorFindManyArgs, 'select' | 'include'> & {
      select?: ShowDirectorCountAggregateInputType | true
    }
  >

  export interface ShowDirectorDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShowDirector that matches the filter.
     * @param {ShowDirectorFindUniqueArgs} args - Arguments to find a ShowDirector
     * @example
     * // Get one ShowDirector
     * const showDirector = await prisma.showDirector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowDirectorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowDirectorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShowDirector'> extends True ? CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>> : CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector | null >, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T> | null >>

    /**
     * Find the first ShowDirector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorFindFirstArgs} args - Arguments to find a ShowDirector
     * @example
     * // Get one ShowDirector
     * const showDirector = await prisma.showDirector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowDirectorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowDirectorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShowDirector'> extends True ? CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>> : CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector | null >, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T> | null >>

    /**
     * Find zero or more ShowDirectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowDirectors
     * const showDirectors = await prisma.showDirector.findMany()
     * 
     * // Get first 10 ShowDirectors
     * const showDirectors = await prisma.showDirector.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showDirectorWithShowIdOnly = await prisma.showDirector.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowDirectorFindManyArgs>(
      args?: SelectSubset<T, ShowDirectorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShowDirector>>, PrismaPromise<Array<ShowDirectorGetPayload<T>>>>

    /**
     * Create a ShowDirector.
     * @param {ShowDirectorCreateArgs} args - Arguments to create a ShowDirector.
     * @example
     * // Create one ShowDirector
     * const ShowDirector = await prisma.showDirector.create({
     *   data: {
     *     // ... data to create a ShowDirector
     *   }
     * })
     * 
    **/
    create<T extends ShowDirectorCreateArgs>(
      args: SelectSubset<T, ShowDirectorCreateArgs>
    ): CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>>

    /**
     * Create many ShowDirectors.
     *     @param {ShowDirectorCreateManyArgs} args - Arguments to create many ShowDirectors.
     *     @example
     *     // Create many ShowDirectors
     *     const showDirector = await prisma.showDirector.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowDirectorCreateManyArgs>(
      args?: SelectSubset<T, ShowDirectorCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShowDirector.
     * @param {ShowDirectorDeleteArgs} args - Arguments to delete one ShowDirector.
     * @example
     * // Delete one ShowDirector
     * const ShowDirector = await prisma.showDirector.delete({
     *   where: {
     *     // ... filter to delete one ShowDirector
     *   }
     * })
     * 
    **/
    delete<T extends ShowDirectorDeleteArgs>(
      args: SelectSubset<T, ShowDirectorDeleteArgs>
    ): CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>>

    /**
     * Update one ShowDirector.
     * @param {ShowDirectorUpdateArgs} args - Arguments to update one ShowDirector.
     * @example
     * // Update one ShowDirector
     * const showDirector = await prisma.showDirector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowDirectorUpdateArgs>(
      args: SelectSubset<T, ShowDirectorUpdateArgs>
    ): CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>>

    /**
     * Delete zero or more ShowDirectors.
     * @param {ShowDirectorDeleteManyArgs} args - Arguments to filter ShowDirectors to delete.
     * @example
     * // Delete a few ShowDirectors
     * const { count } = await prisma.showDirector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowDirectorDeleteManyArgs>(
      args?: SelectSubset<T, ShowDirectorDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowDirectors
     * const showDirector = await prisma.showDirector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowDirectorUpdateManyArgs>(
      args: SelectSubset<T, ShowDirectorUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowDirector.
     * @param {ShowDirectorUpsertArgs} args - Arguments to update or create a ShowDirector.
     * @example
     * // Update or create a ShowDirector
     * const showDirector = await prisma.showDirector.upsert({
     *   create: {
     *     // ... data to create a ShowDirector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowDirector we want to update
     *   }
     * })
    **/
    upsert<T extends ShowDirectorUpsertArgs>(
      args: SelectSubset<T, ShowDirectorUpsertArgs>
    ): CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>>

    /**
     * Find one ShowDirector that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowDirectorFindUniqueOrThrowArgs} args - Arguments to find a ShowDirector
     * @example
     * // Get one ShowDirector
     * const showDirector = await prisma.showDirector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowDirectorFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowDirectorFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>>

    /**
     * Find the first ShowDirector that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorFindFirstOrThrowArgs} args - Arguments to find a ShowDirector
     * @example
     * // Get one ShowDirector
     * const showDirector = await prisma.showDirector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowDirectorFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowDirectorFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowDirectorClient<ShowDirector>, Prisma__ShowDirectorClient<ShowDirectorGetPayload<T>>>

    /**
     * Count the number of ShowDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorCountArgs} args - Arguments to filter ShowDirectors to count.
     * @example
     * // Count the number of ShowDirectors
     * const count = await prisma.showDirector.count({
     *   where: {
     *     // ... the filter for the ShowDirectors we want to count
     *   }
     * })
    **/
    count<T extends ShowDirectorCountArgs>(
      args?: Subset<T, ShowDirectorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowDirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowDirectorAggregateArgs>(args: Subset<T, ShowDirectorAggregateArgs>): PrismaPromise<GetShowDirectorAggregateType<T>>

    /**
     * Group by ShowDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowDirectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowDirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowDirectorGroupByArgs['orderBy'] }
        : { orderBy?: ShowDirectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowDirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowDirectorGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowDirector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowDirectorClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    director<T extends DirectorArgs = {}>(args?: Subset<T, DirectorArgs>): CheckSelect<T, Prisma__DirectorClient<Director | null >, Prisma__DirectorClient<DirectorGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShowDirector base type for findUnique actions
   */
  export type ShowDirectorFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * Filter, which ShowDirector to fetch.
     * 
    **/
    where: ShowDirectorWhereUniqueInput
  }

  /**
   * ShowDirector: findUnique
   */
  export interface ShowDirectorFindUniqueArgs extends ShowDirectorFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowDirector base type for findFirst actions
   */
  export type ShowDirectorFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * Filter, which ShowDirector to fetch.
     * 
    **/
    where?: ShowDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowDirectors to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowDirectorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowDirectors.
     * 
    **/
    cursor?: ShowDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowDirectors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowDirectors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowDirectors.
     * 
    **/
    distinct?: Enumerable<ShowDirectorScalarFieldEnum>
  }

  /**
   * ShowDirector: findFirst
   */
  export interface ShowDirectorFindFirstArgs extends ShowDirectorFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowDirector findMany
   */
  export type ShowDirectorFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * Filter, which ShowDirectors to fetch.
     * 
    **/
    where?: ShowDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowDirectors to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowDirectorOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowDirectors.
     * 
    **/
    cursor?: ShowDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowDirectors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowDirectors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowDirectorScalarFieldEnum>
  }


  /**
   * ShowDirector create
   */
  export type ShowDirectorCreateArgs = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * The data needed to create a ShowDirector.
     * 
    **/
    data: XOR<ShowDirectorCreateInput, ShowDirectorUncheckedCreateInput>
  }


  /**
   * ShowDirector createMany
   */
  export type ShowDirectorCreateManyArgs = {
    /**
     * The data used to create many ShowDirectors.
     * 
    **/
    data: Enumerable<ShowDirectorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShowDirector update
   */
  export type ShowDirectorUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * The data needed to update a ShowDirector.
     * 
    **/
    data: XOR<ShowDirectorUpdateInput, ShowDirectorUncheckedUpdateInput>
    /**
     * Choose, which ShowDirector to update.
     * 
    **/
    where: ShowDirectorWhereUniqueInput
  }


  /**
   * ShowDirector updateMany
   */
  export type ShowDirectorUpdateManyArgs = {
    /**
     * The data used to update ShowDirectors.
     * 
    **/
    data: XOR<ShowDirectorUpdateManyMutationInput, ShowDirectorUncheckedUpdateManyInput>
    /**
     * Filter which ShowDirectors to update
     * 
    **/
    where?: ShowDirectorWhereInput
  }


  /**
   * ShowDirector upsert
   */
  export type ShowDirectorUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * The filter to search for the ShowDirector to update in case it exists.
     * 
    **/
    where: ShowDirectorWhereUniqueInput
    /**
     * In case the ShowDirector found by the `where` argument doesn't exist, create a new ShowDirector with this data.
     * 
    **/
    create: XOR<ShowDirectorCreateInput, ShowDirectorUncheckedCreateInput>
    /**
     * In case the ShowDirector was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowDirectorUpdateInput, ShowDirectorUncheckedUpdateInput>
  }


  /**
   * ShowDirector delete
   */
  export type ShowDirectorDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
    /**
     * Filter which ShowDirector to delete.
     * 
    **/
    where: ShowDirectorWhereUniqueInput
  }


  /**
   * ShowDirector deleteMany
   */
  export type ShowDirectorDeleteManyArgs = {
    /**
     * Filter which ShowDirectors to delete
     * 
    **/
    where?: ShowDirectorWhereInput
  }


  /**
   * ShowDirector: findUniqueOrThrow
   */
  export type ShowDirectorFindUniqueOrThrowArgs = ShowDirectorFindUniqueArgsBase
      

  /**
   * ShowDirector: findFirstOrThrow
   */
  export type ShowDirectorFindFirstOrThrowArgs = ShowDirectorFindFirstArgsBase
      

  /**
   * ShowDirector without action
   */
  export type ShowDirectorArgs = {
    /**
     * Select specific fields to fetch from the ShowDirector
     * 
    **/
    select?: ShowDirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowDirectorInclude | null
  }



  /**
   * Model ShowGenre
   */


  export type AggregateShowGenre = {
    _count: ShowGenreCountAggregateOutputType | null
    _avg: ShowGenreAvgAggregateOutputType | null
    _sum: ShowGenreSumAggregateOutputType | null
    _min: ShowGenreMinAggregateOutputType | null
    _max: ShowGenreMaxAggregateOutputType | null
  }

  export type ShowGenreAvgAggregateOutputType = {
    showId: number | null
    genreId: number | null
  }

  export type ShowGenreSumAggregateOutputType = {
    showId: number | null
    genreId: number | null
  }

  export type ShowGenreMinAggregateOutputType = {
    showId: number | null
    genreId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowGenreMaxAggregateOutputType = {
    showId: number | null
    genreId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowGenreCountAggregateOutputType = {
    showId: number
    genreId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowGenreAvgAggregateInputType = {
    showId?: true
    genreId?: true
  }

  export type ShowGenreSumAggregateInputType = {
    showId?: true
    genreId?: true
  }

  export type ShowGenreMinAggregateInputType = {
    showId?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowGenreMaxAggregateInputType = {
    showId?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowGenreCountAggregateInputType = {
    showId?: true
    genreId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowGenreAggregateArgs = {
    /**
     * Filter which ShowGenre to aggregate.
     * 
    **/
    where?: ShowGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowGenres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowGenres
    **/
    _count?: true | ShowGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowGenreMaxAggregateInputType
  }

  export type GetShowGenreAggregateType<T extends ShowGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateShowGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowGenre[P]>
      : GetScalarType<T[P], AggregateShowGenre[P]>
  }




  export type ShowGenreGroupByArgs = {
    where?: ShowGenreWhereInput
    orderBy?: Enumerable<ShowGenreOrderByWithAggregationInput>
    by: Array<ShowGenreScalarFieldEnum>
    having?: ShowGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowGenreCountAggregateInputType | true
    _avg?: ShowGenreAvgAggregateInputType
    _sum?: ShowGenreSumAggregateInputType
    _min?: ShowGenreMinAggregateInputType
    _max?: ShowGenreMaxAggregateInputType
  }


  export type ShowGenreGroupByOutputType = {
    showId: number
    genreId: number
    createdAt: Date
    updatedAt: Date
    _count: ShowGenreCountAggregateOutputType | null
    _avg: ShowGenreAvgAggregateOutputType | null
    _sum: ShowGenreSumAggregateOutputType | null
    _min: ShowGenreMinAggregateOutputType | null
    _max: ShowGenreMaxAggregateOutputType | null
  }

  type GetShowGenreGroupByPayload<T extends ShowGenreGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowGenreGroupByOutputType[P]>
            : GetScalarType<T[P], ShowGenreGroupByOutputType[P]>
        }
      >
    >


  export type ShowGenreSelect = {
    show?: boolean | ShowArgs
    showId?: boolean
    genre?: boolean | GenreArgs
    genreId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowGenreInclude = {
    show?: boolean | ShowArgs
    genre?: boolean | GenreArgs
  }

  export type ShowGenreGetPayload<
    S extends boolean | null | undefined | ShowGenreArgs,
    U = keyof S
      > = S extends true
        ? ShowGenre
    : S extends undefined
    ? never
    : S extends ShowGenreArgs | ShowGenreFindManyArgs
    ?'include' extends U
    ? ShowGenre  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'genre' ? GenreGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'genre' ? GenreGetPayload<S['select'][P]> :  P extends keyof ShowGenre ? ShowGenre[P] : never
  } 
    : ShowGenre
  : ShowGenre


  type ShowGenreCountArgs = Merge<
    Omit<ShowGenreFindManyArgs, 'select' | 'include'> & {
      select?: ShowGenreCountAggregateInputType | true
    }
  >

  export interface ShowGenreDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShowGenre that matches the filter.
     * @param {ShowGenreFindUniqueArgs} args - Arguments to find a ShowGenre
     * @example
     * // Get one ShowGenre
     * const showGenre = await prisma.showGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowGenreFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowGenreFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShowGenre'> extends True ? CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>> : CheckSelect<T, Prisma__ShowGenreClient<ShowGenre | null >, Prisma__ShowGenreClient<ShowGenreGetPayload<T> | null >>

    /**
     * Find the first ShowGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreFindFirstArgs} args - Arguments to find a ShowGenre
     * @example
     * // Get one ShowGenre
     * const showGenre = await prisma.showGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowGenreFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowGenreFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShowGenre'> extends True ? CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>> : CheckSelect<T, Prisma__ShowGenreClient<ShowGenre | null >, Prisma__ShowGenreClient<ShowGenreGetPayload<T> | null >>

    /**
     * Find zero or more ShowGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowGenres
     * const showGenres = await prisma.showGenre.findMany()
     * 
     * // Get first 10 ShowGenres
     * const showGenres = await prisma.showGenre.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showGenreWithShowIdOnly = await prisma.showGenre.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowGenreFindManyArgs>(
      args?: SelectSubset<T, ShowGenreFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShowGenre>>, PrismaPromise<Array<ShowGenreGetPayload<T>>>>

    /**
     * Create a ShowGenre.
     * @param {ShowGenreCreateArgs} args - Arguments to create a ShowGenre.
     * @example
     * // Create one ShowGenre
     * const ShowGenre = await prisma.showGenre.create({
     *   data: {
     *     // ... data to create a ShowGenre
     *   }
     * })
     * 
    **/
    create<T extends ShowGenreCreateArgs>(
      args: SelectSubset<T, ShowGenreCreateArgs>
    ): CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>>

    /**
     * Create many ShowGenres.
     *     @param {ShowGenreCreateManyArgs} args - Arguments to create many ShowGenres.
     *     @example
     *     // Create many ShowGenres
     *     const showGenre = await prisma.showGenre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowGenreCreateManyArgs>(
      args?: SelectSubset<T, ShowGenreCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShowGenre.
     * @param {ShowGenreDeleteArgs} args - Arguments to delete one ShowGenre.
     * @example
     * // Delete one ShowGenre
     * const ShowGenre = await prisma.showGenre.delete({
     *   where: {
     *     // ... filter to delete one ShowGenre
     *   }
     * })
     * 
    **/
    delete<T extends ShowGenreDeleteArgs>(
      args: SelectSubset<T, ShowGenreDeleteArgs>
    ): CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>>

    /**
     * Update one ShowGenre.
     * @param {ShowGenreUpdateArgs} args - Arguments to update one ShowGenre.
     * @example
     * // Update one ShowGenre
     * const showGenre = await prisma.showGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowGenreUpdateArgs>(
      args: SelectSubset<T, ShowGenreUpdateArgs>
    ): CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>>

    /**
     * Delete zero or more ShowGenres.
     * @param {ShowGenreDeleteManyArgs} args - Arguments to filter ShowGenres to delete.
     * @example
     * // Delete a few ShowGenres
     * const { count } = await prisma.showGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowGenreDeleteManyArgs>(
      args?: SelectSubset<T, ShowGenreDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowGenres
     * const showGenre = await prisma.showGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowGenreUpdateManyArgs>(
      args: SelectSubset<T, ShowGenreUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowGenre.
     * @param {ShowGenreUpsertArgs} args - Arguments to update or create a ShowGenre.
     * @example
     * // Update or create a ShowGenre
     * const showGenre = await prisma.showGenre.upsert({
     *   create: {
     *     // ... data to create a ShowGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowGenre we want to update
     *   }
     * })
    **/
    upsert<T extends ShowGenreUpsertArgs>(
      args: SelectSubset<T, ShowGenreUpsertArgs>
    ): CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>>

    /**
     * Find one ShowGenre that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowGenreFindUniqueOrThrowArgs} args - Arguments to find a ShowGenre
     * @example
     * // Get one ShowGenre
     * const showGenre = await prisma.showGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowGenreFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowGenreFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>>

    /**
     * Find the first ShowGenre that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreFindFirstOrThrowArgs} args - Arguments to find a ShowGenre
     * @example
     * // Get one ShowGenre
     * const showGenre = await prisma.showGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowGenreFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowGenreFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowGenreClient<ShowGenre>, Prisma__ShowGenreClient<ShowGenreGetPayload<T>>>

    /**
     * Count the number of ShowGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreCountArgs} args - Arguments to filter ShowGenres to count.
     * @example
     * // Count the number of ShowGenres
     * const count = await prisma.showGenre.count({
     *   where: {
     *     // ... the filter for the ShowGenres we want to count
     *   }
     * })
    **/
    count<T extends ShowGenreCountArgs>(
      args?: Subset<T, ShowGenreCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowGenreAggregateArgs>(args: Subset<T, ShowGenreAggregateArgs>): PrismaPromise<GetShowGenreAggregateType<T>>

    /**
     * Group by ShowGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowGenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowGenreGroupByArgs['orderBy'] }
        : { orderBy?: ShowGenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowGenreGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowGenreClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    genre<T extends GenreArgs = {}>(args?: Subset<T, GenreArgs>): CheckSelect<T, Prisma__GenreClient<Genre | null >, Prisma__GenreClient<GenreGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShowGenre base type for findUnique actions
   */
  export type ShowGenreFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * Filter, which ShowGenre to fetch.
     * 
    **/
    where: ShowGenreWhereUniqueInput
  }

  /**
   * ShowGenre: findUnique
   */
  export interface ShowGenreFindUniqueArgs extends ShowGenreFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowGenre base type for findFirst actions
   */
  export type ShowGenreFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * Filter, which ShowGenre to fetch.
     * 
    **/
    where?: ShowGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowGenres.
     * 
    **/
    cursor?: ShowGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowGenres.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowGenres.
     * 
    **/
    distinct?: Enumerable<ShowGenreScalarFieldEnum>
  }

  /**
   * ShowGenre: findFirst
   */
  export interface ShowGenreFindFirstArgs extends ShowGenreFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowGenre findMany
   */
  export type ShowGenreFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * Filter, which ShowGenres to fetch.
     * 
    **/
    where?: ShowGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowGenres to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowGenreOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowGenres.
     * 
    **/
    cursor?: ShowGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowGenres from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowGenres.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowGenreScalarFieldEnum>
  }


  /**
   * ShowGenre create
   */
  export type ShowGenreCreateArgs = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * The data needed to create a ShowGenre.
     * 
    **/
    data: XOR<ShowGenreCreateInput, ShowGenreUncheckedCreateInput>
  }


  /**
   * ShowGenre createMany
   */
  export type ShowGenreCreateManyArgs = {
    /**
     * The data used to create many ShowGenres.
     * 
    **/
    data: Enumerable<ShowGenreCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShowGenre update
   */
  export type ShowGenreUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * The data needed to update a ShowGenre.
     * 
    **/
    data: XOR<ShowGenreUpdateInput, ShowGenreUncheckedUpdateInput>
    /**
     * Choose, which ShowGenre to update.
     * 
    **/
    where: ShowGenreWhereUniqueInput
  }


  /**
   * ShowGenre updateMany
   */
  export type ShowGenreUpdateManyArgs = {
    /**
     * The data used to update ShowGenres.
     * 
    **/
    data: XOR<ShowGenreUpdateManyMutationInput, ShowGenreUncheckedUpdateManyInput>
    /**
     * Filter which ShowGenres to update
     * 
    **/
    where?: ShowGenreWhereInput
  }


  /**
   * ShowGenre upsert
   */
  export type ShowGenreUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * The filter to search for the ShowGenre to update in case it exists.
     * 
    **/
    where: ShowGenreWhereUniqueInput
    /**
     * In case the ShowGenre found by the `where` argument doesn't exist, create a new ShowGenre with this data.
     * 
    **/
    create: XOR<ShowGenreCreateInput, ShowGenreUncheckedCreateInput>
    /**
     * In case the ShowGenre was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowGenreUpdateInput, ShowGenreUncheckedUpdateInput>
  }


  /**
   * ShowGenre delete
   */
  export type ShowGenreDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
    /**
     * Filter which ShowGenre to delete.
     * 
    **/
    where: ShowGenreWhereUniqueInput
  }


  /**
   * ShowGenre deleteMany
   */
  export type ShowGenreDeleteManyArgs = {
    /**
     * Filter which ShowGenres to delete
     * 
    **/
    where?: ShowGenreWhereInput
  }


  /**
   * ShowGenre: findUniqueOrThrow
   */
  export type ShowGenreFindUniqueOrThrowArgs = ShowGenreFindUniqueArgsBase
      

  /**
   * ShowGenre: findFirstOrThrow
   */
  export type ShowGenreFindFirstOrThrowArgs = ShowGenreFindFirstArgsBase
      

  /**
   * ShowGenre without action
   */
  export type ShowGenreArgs = {
    /**
     * Select specific fields to fetch from the ShowGenre
     * 
    **/
    select?: ShowGenreSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowGenreInclude | null
  }



  /**
   * Model ShowLanguage
   */


  export type AggregateShowLanguage = {
    _count: ShowLanguageCountAggregateOutputType | null
    _avg: ShowLanguageAvgAggregateOutputType | null
    _sum: ShowLanguageSumAggregateOutputType | null
    _min: ShowLanguageMinAggregateOutputType | null
    _max: ShowLanguageMaxAggregateOutputType | null
  }

  export type ShowLanguageAvgAggregateOutputType = {
    showId: number | null
    languageId: number | null
  }

  export type ShowLanguageSumAggregateOutputType = {
    showId: number | null
    languageId: number | null
  }

  export type ShowLanguageMinAggregateOutputType = {
    showId: number | null
    languageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowLanguageMaxAggregateOutputType = {
    showId: number | null
    languageId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowLanguageCountAggregateOutputType = {
    showId: number
    languageId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowLanguageAvgAggregateInputType = {
    showId?: true
    languageId?: true
  }

  export type ShowLanguageSumAggregateInputType = {
    showId?: true
    languageId?: true
  }

  export type ShowLanguageMinAggregateInputType = {
    showId?: true
    languageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowLanguageMaxAggregateInputType = {
    showId?: true
    languageId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowLanguageCountAggregateInputType = {
    showId?: true
    languageId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowLanguageAggregateArgs = {
    /**
     * Filter which ShowLanguage to aggregate.
     * 
    **/
    where?: ShowLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowLanguages to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowLanguageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowLanguages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowLanguages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowLanguages
    **/
    _count?: true | ShowLanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowLanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowLanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowLanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowLanguageMaxAggregateInputType
  }

  export type GetShowLanguageAggregateType<T extends ShowLanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateShowLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowLanguage[P]>
      : GetScalarType<T[P], AggregateShowLanguage[P]>
  }




  export type ShowLanguageGroupByArgs = {
    where?: ShowLanguageWhereInput
    orderBy?: Enumerable<ShowLanguageOrderByWithAggregationInput>
    by: Array<ShowLanguageScalarFieldEnum>
    having?: ShowLanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowLanguageCountAggregateInputType | true
    _avg?: ShowLanguageAvgAggregateInputType
    _sum?: ShowLanguageSumAggregateInputType
    _min?: ShowLanguageMinAggregateInputType
    _max?: ShowLanguageMaxAggregateInputType
  }


  export type ShowLanguageGroupByOutputType = {
    showId: number
    languageId: number
    createdAt: Date
    updatedAt: Date
    _count: ShowLanguageCountAggregateOutputType | null
    _avg: ShowLanguageAvgAggregateOutputType | null
    _sum: ShowLanguageSumAggregateOutputType | null
    _min: ShowLanguageMinAggregateOutputType | null
    _max: ShowLanguageMaxAggregateOutputType | null
  }

  type GetShowLanguageGroupByPayload<T extends ShowLanguageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowLanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowLanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowLanguageGroupByOutputType[P]>
            : GetScalarType<T[P], ShowLanguageGroupByOutputType[P]>
        }
      >
    >


  export type ShowLanguageSelect = {
    show?: boolean | ShowArgs
    showId?: boolean
    language?: boolean | LanguageArgs
    languageId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowLanguageInclude = {
    show?: boolean | ShowArgs
    language?: boolean | LanguageArgs
  }

  export type ShowLanguageGetPayload<
    S extends boolean | null | undefined | ShowLanguageArgs,
    U = keyof S
      > = S extends true
        ? ShowLanguage
    : S extends undefined
    ? never
    : S extends ShowLanguageArgs | ShowLanguageFindManyArgs
    ?'include' extends U
    ? ShowLanguage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'language' ? LanguageGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'language' ? LanguageGetPayload<S['select'][P]> :  P extends keyof ShowLanguage ? ShowLanguage[P] : never
  } 
    : ShowLanguage
  : ShowLanguage


  type ShowLanguageCountArgs = Merge<
    Omit<ShowLanguageFindManyArgs, 'select' | 'include'> & {
      select?: ShowLanguageCountAggregateInputType | true
    }
  >

  export interface ShowLanguageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShowLanguage that matches the filter.
     * @param {ShowLanguageFindUniqueArgs} args - Arguments to find a ShowLanguage
     * @example
     * // Get one ShowLanguage
     * const showLanguage = await prisma.showLanguage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowLanguageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowLanguageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShowLanguage'> extends True ? CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>> : CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage | null >, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T> | null >>

    /**
     * Find the first ShowLanguage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageFindFirstArgs} args - Arguments to find a ShowLanguage
     * @example
     * // Get one ShowLanguage
     * const showLanguage = await prisma.showLanguage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowLanguageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowLanguageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShowLanguage'> extends True ? CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>> : CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage | null >, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T> | null >>

    /**
     * Find zero or more ShowLanguages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowLanguages
     * const showLanguages = await prisma.showLanguage.findMany()
     * 
     * // Get first 10 ShowLanguages
     * const showLanguages = await prisma.showLanguage.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showLanguageWithShowIdOnly = await prisma.showLanguage.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowLanguageFindManyArgs>(
      args?: SelectSubset<T, ShowLanguageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShowLanguage>>, PrismaPromise<Array<ShowLanguageGetPayload<T>>>>

    /**
     * Create a ShowLanguage.
     * @param {ShowLanguageCreateArgs} args - Arguments to create a ShowLanguage.
     * @example
     * // Create one ShowLanguage
     * const ShowLanguage = await prisma.showLanguage.create({
     *   data: {
     *     // ... data to create a ShowLanguage
     *   }
     * })
     * 
    **/
    create<T extends ShowLanguageCreateArgs>(
      args: SelectSubset<T, ShowLanguageCreateArgs>
    ): CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>>

    /**
     * Create many ShowLanguages.
     *     @param {ShowLanguageCreateManyArgs} args - Arguments to create many ShowLanguages.
     *     @example
     *     // Create many ShowLanguages
     *     const showLanguage = await prisma.showLanguage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowLanguageCreateManyArgs>(
      args?: SelectSubset<T, ShowLanguageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShowLanguage.
     * @param {ShowLanguageDeleteArgs} args - Arguments to delete one ShowLanguage.
     * @example
     * // Delete one ShowLanguage
     * const ShowLanguage = await prisma.showLanguage.delete({
     *   where: {
     *     // ... filter to delete one ShowLanguage
     *   }
     * })
     * 
    **/
    delete<T extends ShowLanguageDeleteArgs>(
      args: SelectSubset<T, ShowLanguageDeleteArgs>
    ): CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>>

    /**
     * Update one ShowLanguage.
     * @param {ShowLanguageUpdateArgs} args - Arguments to update one ShowLanguage.
     * @example
     * // Update one ShowLanguage
     * const showLanguage = await prisma.showLanguage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowLanguageUpdateArgs>(
      args: SelectSubset<T, ShowLanguageUpdateArgs>
    ): CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>>

    /**
     * Delete zero or more ShowLanguages.
     * @param {ShowLanguageDeleteManyArgs} args - Arguments to filter ShowLanguages to delete.
     * @example
     * // Delete a few ShowLanguages
     * const { count } = await prisma.showLanguage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowLanguageDeleteManyArgs>(
      args?: SelectSubset<T, ShowLanguageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowLanguages
     * const showLanguage = await prisma.showLanguage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowLanguageUpdateManyArgs>(
      args: SelectSubset<T, ShowLanguageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowLanguage.
     * @param {ShowLanguageUpsertArgs} args - Arguments to update or create a ShowLanguage.
     * @example
     * // Update or create a ShowLanguage
     * const showLanguage = await prisma.showLanguage.upsert({
     *   create: {
     *     // ... data to create a ShowLanguage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowLanguage we want to update
     *   }
     * })
    **/
    upsert<T extends ShowLanguageUpsertArgs>(
      args: SelectSubset<T, ShowLanguageUpsertArgs>
    ): CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>>

    /**
     * Find one ShowLanguage that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowLanguageFindUniqueOrThrowArgs} args - Arguments to find a ShowLanguage
     * @example
     * // Get one ShowLanguage
     * const showLanguage = await prisma.showLanguage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowLanguageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowLanguageFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>>

    /**
     * Find the first ShowLanguage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageFindFirstOrThrowArgs} args - Arguments to find a ShowLanguage
     * @example
     * // Get one ShowLanguage
     * const showLanguage = await prisma.showLanguage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowLanguageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowLanguageFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowLanguageClient<ShowLanguage>, Prisma__ShowLanguageClient<ShowLanguageGetPayload<T>>>

    /**
     * Count the number of ShowLanguages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageCountArgs} args - Arguments to filter ShowLanguages to count.
     * @example
     * // Count the number of ShowLanguages
     * const count = await prisma.showLanguage.count({
     *   where: {
     *     // ... the filter for the ShowLanguages we want to count
     *   }
     * })
    **/
    count<T extends ShowLanguageCountArgs>(
      args?: Subset<T, ShowLanguageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowLanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowLanguageAggregateArgs>(args: Subset<T, ShowLanguageAggregateArgs>): PrismaPromise<GetShowLanguageAggregateType<T>>

    /**
     * Group by ShowLanguage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowLanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowLanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowLanguageGroupByArgs['orderBy'] }
        : { orderBy?: ShowLanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowLanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowLanguageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowLanguage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowLanguageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    language<T extends LanguageArgs = {}>(args?: Subset<T, LanguageArgs>): CheckSelect<T, Prisma__LanguageClient<Language | null >, Prisma__LanguageClient<LanguageGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShowLanguage base type for findUnique actions
   */
  export type ShowLanguageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * Filter, which ShowLanguage to fetch.
     * 
    **/
    where: ShowLanguageWhereUniqueInput
  }

  /**
   * ShowLanguage: findUnique
   */
  export interface ShowLanguageFindUniqueArgs extends ShowLanguageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowLanguage base type for findFirst actions
   */
  export type ShowLanguageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * Filter, which ShowLanguage to fetch.
     * 
    **/
    where?: ShowLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowLanguages to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowLanguageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowLanguages.
     * 
    **/
    cursor?: ShowLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowLanguages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowLanguages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowLanguages.
     * 
    **/
    distinct?: Enumerable<ShowLanguageScalarFieldEnum>
  }

  /**
   * ShowLanguage: findFirst
   */
  export interface ShowLanguageFindFirstArgs extends ShowLanguageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowLanguage findMany
   */
  export type ShowLanguageFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * Filter, which ShowLanguages to fetch.
     * 
    **/
    where?: ShowLanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowLanguages to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowLanguageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowLanguages.
     * 
    **/
    cursor?: ShowLanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowLanguages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowLanguages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowLanguageScalarFieldEnum>
  }


  /**
   * ShowLanguage create
   */
  export type ShowLanguageCreateArgs = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * The data needed to create a ShowLanguage.
     * 
    **/
    data: XOR<ShowLanguageCreateInput, ShowLanguageUncheckedCreateInput>
  }


  /**
   * ShowLanguage createMany
   */
  export type ShowLanguageCreateManyArgs = {
    /**
     * The data used to create many ShowLanguages.
     * 
    **/
    data: Enumerable<ShowLanguageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShowLanguage update
   */
  export type ShowLanguageUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * The data needed to update a ShowLanguage.
     * 
    **/
    data: XOR<ShowLanguageUpdateInput, ShowLanguageUncheckedUpdateInput>
    /**
     * Choose, which ShowLanguage to update.
     * 
    **/
    where: ShowLanguageWhereUniqueInput
  }


  /**
   * ShowLanguage updateMany
   */
  export type ShowLanguageUpdateManyArgs = {
    /**
     * The data used to update ShowLanguages.
     * 
    **/
    data: XOR<ShowLanguageUpdateManyMutationInput, ShowLanguageUncheckedUpdateManyInput>
    /**
     * Filter which ShowLanguages to update
     * 
    **/
    where?: ShowLanguageWhereInput
  }


  /**
   * ShowLanguage upsert
   */
  export type ShowLanguageUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * The filter to search for the ShowLanguage to update in case it exists.
     * 
    **/
    where: ShowLanguageWhereUniqueInput
    /**
     * In case the ShowLanguage found by the `where` argument doesn't exist, create a new ShowLanguage with this data.
     * 
    **/
    create: XOR<ShowLanguageCreateInput, ShowLanguageUncheckedCreateInput>
    /**
     * In case the ShowLanguage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowLanguageUpdateInput, ShowLanguageUncheckedUpdateInput>
  }


  /**
   * ShowLanguage delete
   */
  export type ShowLanguageDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
    /**
     * Filter which ShowLanguage to delete.
     * 
    **/
    where: ShowLanguageWhereUniqueInput
  }


  /**
   * ShowLanguage deleteMany
   */
  export type ShowLanguageDeleteManyArgs = {
    /**
     * Filter which ShowLanguages to delete
     * 
    **/
    where?: ShowLanguageWhereInput
  }


  /**
   * ShowLanguage: findUniqueOrThrow
   */
  export type ShowLanguageFindUniqueOrThrowArgs = ShowLanguageFindUniqueArgsBase
      

  /**
   * ShowLanguage: findFirstOrThrow
   */
  export type ShowLanguageFindFirstOrThrowArgs = ShowLanguageFindFirstArgsBase
      

  /**
   * ShowLanguage without action
   */
  export type ShowLanguageArgs = {
    /**
     * Select specific fields to fetch from the ShowLanguage
     * 
    **/
    select?: ShowLanguageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowLanguageInclude | null
  }



  /**
   * Model ShowStudio
   */


  export type AggregateShowStudio = {
    _count: ShowStudioCountAggregateOutputType | null
    _avg: ShowStudioAvgAggregateOutputType | null
    _sum: ShowStudioSumAggregateOutputType | null
    _min: ShowStudioMinAggregateOutputType | null
    _max: ShowStudioMaxAggregateOutputType | null
  }

  export type ShowStudioAvgAggregateOutputType = {
    showId: number | null
    studioId: number | null
  }

  export type ShowStudioSumAggregateOutputType = {
    showId: number | null
    studioId: number | null
  }

  export type ShowStudioMinAggregateOutputType = {
    showId: number | null
    studioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowStudioMaxAggregateOutputType = {
    showId: number | null
    studioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowStudioCountAggregateOutputType = {
    showId: number
    studioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowStudioAvgAggregateInputType = {
    showId?: true
    studioId?: true
  }

  export type ShowStudioSumAggregateInputType = {
    showId?: true
    studioId?: true
  }

  export type ShowStudioMinAggregateInputType = {
    showId?: true
    studioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowStudioMaxAggregateInputType = {
    showId?: true
    studioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowStudioCountAggregateInputType = {
    showId?: true
    studioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowStudioAggregateArgs = {
    /**
     * Filter which ShowStudio to aggregate.
     * 
    **/
    where?: ShowStudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowStudios to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowStudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowStudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowStudios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowStudios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowStudios
    **/
    _count?: true | ShowStudioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowStudioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowStudioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowStudioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowStudioMaxAggregateInputType
  }

  export type GetShowStudioAggregateType<T extends ShowStudioAggregateArgs> = {
        [P in keyof T & keyof AggregateShowStudio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowStudio[P]>
      : GetScalarType<T[P], AggregateShowStudio[P]>
  }




  export type ShowStudioGroupByArgs = {
    where?: ShowStudioWhereInput
    orderBy?: Enumerable<ShowStudioOrderByWithAggregationInput>
    by: Array<ShowStudioScalarFieldEnum>
    having?: ShowStudioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowStudioCountAggregateInputType | true
    _avg?: ShowStudioAvgAggregateInputType
    _sum?: ShowStudioSumAggregateInputType
    _min?: ShowStudioMinAggregateInputType
    _max?: ShowStudioMaxAggregateInputType
  }


  export type ShowStudioGroupByOutputType = {
    showId: number
    studioId: number
    createdAt: Date
    updatedAt: Date
    _count: ShowStudioCountAggregateOutputType | null
    _avg: ShowStudioAvgAggregateOutputType | null
    _sum: ShowStudioSumAggregateOutputType | null
    _min: ShowStudioMinAggregateOutputType | null
    _max: ShowStudioMaxAggregateOutputType | null
  }

  type GetShowStudioGroupByPayload<T extends ShowStudioGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowStudioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowStudioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowStudioGroupByOutputType[P]>
            : GetScalarType<T[P], ShowStudioGroupByOutputType[P]>
        }
      >
    >


  export type ShowStudioSelect = {
    show?: boolean | ShowArgs
    showId?: boolean
    studio?: boolean | StudioArgs
    studioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowStudioInclude = {
    show?: boolean | ShowArgs
    studio?: boolean | StudioArgs
  }

  export type ShowStudioGetPayload<
    S extends boolean | null | undefined | ShowStudioArgs,
    U = keyof S
      > = S extends true
        ? ShowStudio
    : S extends undefined
    ? never
    : S extends ShowStudioArgs | ShowStudioFindManyArgs
    ?'include' extends U
    ? ShowStudio  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'studio' ? StudioGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'studio' ? StudioGetPayload<S['select'][P]> :  P extends keyof ShowStudio ? ShowStudio[P] : never
  } 
    : ShowStudio
  : ShowStudio


  type ShowStudioCountArgs = Merge<
    Omit<ShowStudioFindManyArgs, 'select' | 'include'> & {
      select?: ShowStudioCountAggregateInputType | true
    }
  >

  export interface ShowStudioDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShowStudio that matches the filter.
     * @param {ShowStudioFindUniqueArgs} args - Arguments to find a ShowStudio
     * @example
     * // Get one ShowStudio
     * const showStudio = await prisma.showStudio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowStudioFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowStudioFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShowStudio'> extends True ? CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>> : CheckSelect<T, Prisma__ShowStudioClient<ShowStudio | null >, Prisma__ShowStudioClient<ShowStudioGetPayload<T> | null >>

    /**
     * Find the first ShowStudio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioFindFirstArgs} args - Arguments to find a ShowStudio
     * @example
     * // Get one ShowStudio
     * const showStudio = await prisma.showStudio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowStudioFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowStudioFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShowStudio'> extends True ? CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>> : CheckSelect<T, Prisma__ShowStudioClient<ShowStudio | null >, Prisma__ShowStudioClient<ShowStudioGetPayload<T> | null >>

    /**
     * Find zero or more ShowStudios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowStudios
     * const showStudios = await prisma.showStudio.findMany()
     * 
     * // Get first 10 ShowStudios
     * const showStudios = await prisma.showStudio.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showStudioWithShowIdOnly = await prisma.showStudio.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowStudioFindManyArgs>(
      args?: SelectSubset<T, ShowStudioFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShowStudio>>, PrismaPromise<Array<ShowStudioGetPayload<T>>>>

    /**
     * Create a ShowStudio.
     * @param {ShowStudioCreateArgs} args - Arguments to create a ShowStudio.
     * @example
     * // Create one ShowStudio
     * const ShowStudio = await prisma.showStudio.create({
     *   data: {
     *     // ... data to create a ShowStudio
     *   }
     * })
     * 
    **/
    create<T extends ShowStudioCreateArgs>(
      args: SelectSubset<T, ShowStudioCreateArgs>
    ): CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>>

    /**
     * Create many ShowStudios.
     *     @param {ShowStudioCreateManyArgs} args - Arguments to create many ShowStudios.
     *     @example
     *     // Create many ShowStudios
     *     const showStudio = await prisma.showStudio.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowStudioCreateManyArgs>(
      args?: SelectSubset<T, ShowStudioCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShowStudio.
     * @param {ShowStudioDeleteArgs} args - Arguments to delete one ShowStudio.
     * @example
     * // Delete one ShowStudio
     * const ShowStudio = await prisma.showStudio.delete({
     *   where: {
     *     // ... filter to delete one ShowStudio
     *   }
     * })
     * 
    **/
    delete<T extends ShowStudioDeleteArgs>(
      args: SelectSubset<T, ShowStudioDeleteArgs>
    ): CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>>

    /**
     * Update one ShowStudio.
     * @param {ShowStudioUpdateArgs} args - Arguments to update one ShowStudio.
     * @example
     * // Update one ShowStudio
     * const showStudio = await prisma.showStudio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowStudioUpdateArgs>(
      args: SelectSubset<T, ShowStudioUpdateArgs>
    ): CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>>

    /**
     * Delete zero or more ShowStudios.
     * @param {ShowStudioDeleteManyArgs} args - Arguments to filter ShowStudios to delete.
     * @example
     * // Delete a few ShowStudios
     * const { count } = await prisma.showStudio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowStudioDeleteManyArgs>(
      args?: SelectSubset<T, ShowStudioDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowStudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowStudios
     * const showStudio = await prisma.showStudio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowStudioUpdateManyArgs>(
      args: SelectSubset<T, ShowStudioUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowStudio.
     * @param {ShowStudioUpsertArgs} args - Arguments to update or create a ShowStudio.
     * @example
     * // Update or create a ShowStudio
     * const showStudio = await prisma.showStudio.upsert({
     *   create: {
     *     // ... data to create a ShowStudio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowStudio we want to update
     *   }
     * })
    **/
    upsert<T extends ShowStudioUpsertArgs>(
      args: SelectSubset<T, ShowStudioUpsertArgs>
    ): CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>>

    /**
     * Find one ShowStudio that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowStudioFindUniqueOrThrowArgs} args - Arguments to find a ShowStudio
     * @example
     * // Get one ShowStudio
     * const showStudio = await prisma.showStudio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowStudioFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowStudioFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>>

    /**
     * Find the first ShowStudio that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioFindFirstOrThrowArgs} args - Arguments to find a ShowStudio
     * @example
     * // Get one ShowStudio
     * const showStudio = await prisma.showStudio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowStudioFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowStudioFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowStudioClient<ShowStudio>, Prisma__ShowStudioClient<ShowStudioGetPayload<T>>>

    /**
     * Count the number of ShowStudios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioCountArgs} args - Arguments to filter ShowStudios to count.
     * @example
     * // Count the number of ShowStudios
     * const count = await prisma.showStudio.count({
     *   where: {
     *     // ... the filter for the ShowStudios we want to count
     *   }
     * })
    **/
    count<T extends ShowStudioCountArgs>(
      args?: Subset<T, ShowStudioCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowStudioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowStudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowStudioAggregateArgs>(args: Subset<T, ShowStudioAggregateArgs>): PrismaPromise<GetShowStudioAggregateType<T>>

    /**
     * Group by ShowStudio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowStudioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowStudioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowStudioGroupByArgs['orderBy'] }
        : { orderBy?: ShowStudioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowStudioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowStudioGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowStudio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowStudioClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    studio<T extends StudioArgs = {}>(args?: Subset<T, StudioArgs>): CheckSelect<T, Prisma__StudioClient<Studio | null >, Prisma__StudioClient<StudioGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShowStudio base type for findUnique actions
   */
  export type ShowStudioFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * Filter, which ShowStudio to fetch.
     * 
    **/
    where: ShowStudioWhereUniqueInput
  }

  /**
   * ShowStudio: findUnique
   */
  export interface ShowStudioFindUniqueArgs extends ShowStudioFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowStudio base type for findFirst actions
   */
  export type ShowStudioFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * Filter, which ShowStudio to fetch.
     * 
    **/
    where?: ShowStudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowStudios to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowStudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowStudios.
     * 
    **/
    cursor?: ShowStudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowStudios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowStudios.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowStudios.
     * 
    **/
    distinct?: Enumerable<ShowStudioScalarFieldEnum>
  }

  /**
   * ShowStudio: findFirst
   */
  export interface ShowStudioFindFirstArgs extends ShowStudioFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowStudio findMany
   */
  export type ShowStudioFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * Filter, which ShowStudios to fetch.
     * 
    **/
    where?: ShowStudioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowStudios to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowStudioOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowStudios.
     * 
    **/
    cursor?: ShowStudioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowStudios from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowStudios.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowStudioScalarFieldEnum>
  }


  /**
   * ShowStudio create
   */
  export type ShowStudioCreateArgs = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * The data needed to create a ShowStudio.
     * 
    **/
    data: XOR<ShowStudioCreateInput, ShowStudioUncheckedCreateInput>
  }


  /**
   * ShowStudio createMany
   */
  export type ShowStudioCreateManyArgs = {
    /**
     * The data used to create many ShowStudios.
     * 
    **/
    data: Enumerable<ShowStudioCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShowStudio update
   */
  export type ShowStudioUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * The data needed to update a ShowStudio.
     * 
    **/
    data: XOR<ShowStudioUpdateInput, ShowStudioUncheckedUpdateInput>
    /**
     * Choose, which ShowStudio to update.
     * 
    **/
    where: ShowStudioWhereUniqueInput
  }


  /**
   * ShowStudio updateMany
   */
  export type ShowStudioUpdateManyArgs = {
    /**
     * The data used to update ShowStudios.
     * 
    **/
    data: XOR<ShowStudioUpdateManyMutationInput, ShowStudioUncheckedUpdateManyInput>
    /**
     * Filter which ShowStudios to update
     * 
    **/
    where?: ShowStudioWhereInput
  }


  /**
   * ShowStudio upsert
   */
  export type ShowStudioUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * The filter to search for the ShowStudio to update in case it exists.
     * 
    **/
    where: ShowStudioWhereUniqueInput
    /**
     * In case the ShowStudio found by the `where` argument doesn't exist, create a new ShowStudio with this data.
     * 
    **/
    create: XOR<ShowStudioCreateInput, ShowStudioUncheckedCreateInput>
    /**
     * In case the ShowStudio was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowStudioUpdateInput, ShowStudioUncheckedUpdateInput>
  }


  /**
   * ShowStudio delete
   */
  export type ShowStudioDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
    /**
     * Filter which ShowStudio to delete.
     * 
    **/
    where: ShowStudioWhereUniqueInput
  }


  /**
   * ShowStudio deleteMany
   */
  export type ShowStudioDeleteManyArgs = {
    /**
     * Filter which ShowStudios to delete
     * 
    **/
    where?: ShowStudioWhereInput
  }


  /**
   * ShowStudio: findUniqueOrThrow
   */
  export type ShowStudioFindUniqueOrThrowArgs = ShowStudioFindUniqueArgsBase
      

  /**
   * ShowStudio: findFirstOrThrow
   */
  export type ShowStudioFindFirstOrThrowArgs = ShowStudioFindFirstArgsBase
      

  /**
   * ShowStudio without action
   */
  export type ShowStudioArgs = {
    /**
     * Select specific fields to fetch from the ShowStudio
     * 
    **/
    select?: ShowStudioSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowStudioInclude | null
  }



  /**
   * Model ShowWriter
   */


  export type AggregateShowWriter = {
    _count: ShowWriterCountAggregateOutputType | null
    _avg: ShowWriterAvgAggregateOutputType | null
    _sum: ShowWriterSumAggregateOutputType | null
    _min: ShowWriterMinAggregateOutputType | null
    _max: ShowWriterMaxAggregateOutputType | null
  }

  export type ShowWriterAvgAggregateOutputType = {
    showId: number | null
    writerId: number | null
  }

  export type ShowWriterSumAggregateOutputType = {
    showId: number | null
    writerId: number | null
  }

  export type ShowWriterMinAggregateOutputType = {
    showId: number | null
    writerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowWriterMaxAggregateOutputType = {
    showId: number | null
    writerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShowWriterCountAggregateOutputType = {
    showId: number
    writerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShowWriterAvgAggregateInputType = {
    showId?: true
    writerId?: true
  }

  export type ShowWriterSumAggregateInputType = {
    showId?: true
    writerId?: true
  }

  export type ShowWriterMinAggregateInputType = {
    showId?: true
    writerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowWriterMaxAggregateInputType = {
    showId?: true
    writerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShowWriterCountAggregateInputType = {
    showId?: true
    writerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShowWriterAggregateArgs = {
    /**
     * Filter which ShowWriter to aggregate.
     * 
    **/
    where?: ShowWriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowWriters to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowWriterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ShowWriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowWriters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowWriters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShowWriters
    **/
    _count?: true | ShowWriterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShowWriterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShowWriterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShowWriterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShowWriterMaxAggregateInputType
  }

  export type GetShowWriterAggregateType<T extends ShowWriterAggregateArgs> = {
        [P in keyof T & keyof AggregateShowWriter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShowWriter[P]>
      : GetScalarType<T[P], AggregateShowWriter[P]>
  }




  export type ShowWriterGroupByArgs = {
    where?: ShowWriterWhereInput
    orderBy?: Enumerable<ShowWriterOrderByWithAggregationInput>
    by: Array<ShowWriterScalarFieldEnum>
    having?: ShowWriterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShowWriterCountAggregateInputType | true
    _avg?: ShowWriterAvgAggregateInputType
    _sum?: ShowWriterSumAggregateInputType
    _min?: ShowWriterMinAggregateInputType
    _max?: ShowWriterMaxAggregateInputType
  }


  export type ShowWriterGroupByOutputType = {
    showId: number
    writerId: number
    createdAt: Date
    updatedAt: Date
    _count: ShowWriterCountAggregateOutputType | null
    _avg: ShowWriterAvgAggregateOutputType | null
    _sum: ShowWriterSumAggregateOutputType | null
    _min: ShowWriterMinAggregateOutputType | null
    _max: ShowWriterMaxAggregateOutputType | null
  }

  type GetShowWriterGroupByPayload<T extends ShowWriterGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ShowWriterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShowWriterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShowWriterGroupByOutputType[P]>
            : GetScalarType<T[P], ShowWriterGroupByOutputType[P]>
        }
      >
    >


  export type ShowWriterSelect = {
    show?: boolean | ShowArgs
    showId?: boolean
    writer?: boolean | WriterArgs
    writerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShowWriterInclude = {
    show?: boolean | ShowArgs
    writer?: boolean | WriterArgs
  }

  export type ShowWriterGetPayload<
    S extends boolean | null | undefined | ShowWriterArgs,
    U = keyof S
      > = S extends true
        ? ShowWriter
    : S extends undefined
    ? never
    : S extends ShowWriterArgs | ShowWriterFindManyArgs
    ?'include' extends U
    ? ShowWriter  & {
    [P in TrueKeys<S['include']>]:
        P extends 'show' ? ShowGetPayload<S['include'][P]> :
        P extends 'writer' ? WriterGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'show' ? ShowGetPayload<S['select'][P]> :
        P extends 'writer' ? WriterGetPayload<S['select'][P]> :  P extends keyof ShowWriter ? ShowWriter[P] : never
  } 
    : ShowWriter
  : ShowWriter


  type ShowWriterCountArgs = Merge<
    Omit<ShowWriterFindManyArgs, 'select' | 'include'> & {
      select?: ShowWriterCountAggregateInputType | true
    }
  >

  export interface ShowWriterDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one ShowWriter that matches the filter.
     * @param {ShowWriterFindUniqueArgs} args - Arguments to find a ShowWriter
     * @example
     * // Get one ShowWriter
     * const showWriter = await prisma.showWriter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShowWriterFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ShowWriterFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ShowWriter'> extends True ? CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>> : CheckSelect<T, Prisma__ShowWriterClient<ShowWriter | null >, Prisma__ShowWriterClient<ShowWriterGetPayload<T> | null >>

    /**
     * Find the first ShowWriter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterFindFirstArgs} args - Arguments to find a ShowWriter
     * @example
     * // Get one ShowWriter
     * const showWriter = await prisma.showWriter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShowWriterFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ShowWriterFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ShowWriter'> extends True ? CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>> : CheckSelect<T, Prisma__ShowWriterClient<ShowWriter | null >, Prisma__ShowWriterClient<ShowWriterGetPayload<T> | null >>

    /**
     * Find zero or more ShowWriters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShowWriters
     * const showWriters = await prisma.showWriter.findMany()
     * 
     * // Get first 10 ShowWriters
     * const showWriters = await prisma.showWriter.findMany({ take: 10 })
     * 
     * // Only select the `showId`
     * const showWriterWithShowIdOnly = await prisma.showWriter.findMany({ select: { showId: true } })
     * 
    **/
    findMany<T extends ShowWriterFindManyArgs>(
      args?: SelectSubset<T, ShowWriterFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<ShowWriter>>, PrismaPromise<Array<ShowWriterGetPayload<T>>>>

    /**
     * Create a ShowWriter.
     * @param {ShowWriterCreateArgs} args - Arguments to create a ShowWriter.
     * @example
     * // Create one ShowWriter
     * const ShowWriter = await prisma.showWriter.create({
     *   data: {
     *     // ... data to create a ShowWriter
     *   }
     * })
     * 
    **/
    create<T extends ShowWriterCreateArgs>(
      args: SelectSubset<T, ShowWriterCreateArgs>
    ): CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>>

    /**
     * Create many ShowWriters.
     *     @param {ShowWriterCreateManyArgs} args - Arguments to create many ShowWriters.
     *     @example
     *     // Create many ShowWriters
     *     const showWriter = await prisma.showWriter.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ShowWriterCreateManyArgs>(
      args?: SelectSubset<T, ShowWriterCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ShowWriter.
     * @param {ShowWriterDeleteArgs} args - Arguments to delete one ShowWriter.
     * @example
     * // Delete one ShowWriter
     * const ShowWriter = await prisma.showWriter.delete({
     *   where: {
     *     // ... filter to delete one ShowWriter
     *   }
     * })
     * 
    **/
    delete<T extends ShowWriterDeleteArgs>(
      args: SelectSubset<T, ShowWriterDeleteArgs>
    ): CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>>

    /**
     * Update one ShowWriter.
     * @param {ShowWriterUpdateArgs} args - Arguments to update one ShowWriter.
     * @example
     * // Update one ShowWriter
     * const showWriter = await prisma.showWriter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShowWriterUpdateArgs>(
      args: SelectSubset<T, ShowWriterUpdateArgs>
    ): CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>>

    /**
     * Delete zero or more ShowWriters.
     * @param {ShowWriterDeleteManyArgs} args - Arguments to filter ShowWriters to delete.
     * @example
     * // Delete a few ShowWriters
     * const { count } = await prisma.showWriter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShowWriterDeleteManyArgs>(
      args?: SelectSubset<T, ShowWriterDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShowWriters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShowWriters
     * const showWriter = await prisma.showWriter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShowWriterUpdateManyArgs>(
      args: SelectSubset<T, ShowWriterUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ShowWriter.
     * @param {ShowWriterUpsertArgs} args - Arguments to update or create a ShowWriter.
     * @example
     * // Update or create a ShowWriter
     * const showWriter = await prisma.showWriter.upsert({
     *   create: {
     *     // ... data to create a ShowWriter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShowWriter we want to update
     *   }
     * })
    **/
    upsert<T extends ShowWriterUpsertArgs>(
      args: SelectSubset<T, ShowWriterUpsertArgs>
    ): CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>>

    /**
     * Find one ShowWriter that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {ShowWriterFindUniqueOrThrowArgs} args - Arguments to find a ShowWriter
     * @example
     * // Get one ShowWriter
     * const showWriter = await prisma.showWriter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShowWriterFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ShowWriterFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>>

    /**
     * Find the first ShowWriter that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterFindFirstOrThrowArgs} args - Arguments to find a ShowWriter
     * @example
     * // Get one ShowWriter
     * const showWriter = await prisma.showWriter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShowWriterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ShowWriterFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__ShowWriterClient<ShowWriter>, Prisma__ShowWriterClient<ShowWriterGetPayload<T>>>

    /**
     * Count the number of ShowWriters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterCountArgs} args - Arguments to filter ShowWriters to count.
     * @example
     * // Count the number of ShowWriters
     * const count = await prisma.showWriter.count({
     *   where: {
     *     // ... the filter for the ShowWriters we want to count
     *   }
     * })
    **/
    count<T extends ShowWriterCountArgs>(
      args?: Subset<T, ShowWriterCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShowWriterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShowWriter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShowWriterAggregateArgs>(args: Subset<T, ShowWriterAggregateArgs>): PrismaPromise<GetShowWriterAggregateType<T>>

    /**
     * Group by ShowWriter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShowWriterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShowWriterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShowWriterGroupByArgs['orderBy'] }
        : { orderBy?: ShowWriterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShowWriterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShowWriterGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShowWriter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ShowWriterClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    show<T extends ShowArgs = {}>(args?: Subset<T, ShowArgs>): CheckSelect<T, Prisma__ShowClient<Show | null >, Prisma__ShowClient<ShowGetPayload<T> | null >>;

    writer<T extends WriterArgs = {}>(args?: Subset<T, WriterArgs>): CheckSelect<T, Prisma__WriterClient<Writer | null >, Prisma__WriterClient<WriterGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * ShowWriter base type for findUnique actions
   */
  export type ShowWriterFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * Filter, which ShowWriter to fetch.
     * 
    **/
    where: ShowWriterWhereUniqueInput
  }

  /**
   * ShowWriter: findUnique
   */
  export interface ShowWriterFindUniqueArgs extends ShowWriterFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowWriter base type for findFirst actions
   */
  export type ShowWriterFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * Filter, which ShowWriter to fetch.
     * 
    **/
    where?: ShowWriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowWriters to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowWriterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShowWriters.
     * 
    **/
    cursor?: ShowWriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowWriters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowWriters.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShowWriters.
     * 
    **/
    distinct?: Enumerable<ShowWriterScalarFieldEnum>
  }

  /**
   * ShowWriter: findFirst
   */
  export interface ShowWriterFindFirstArgs extends ShowWriterFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ShowWriter findMany
   */
  export type ShowWriterFindManyArgs = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * Filter, which ShowWriters to fetch.
     * 
    **/
    where?: ShowWriterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShowWriters to fetch.
     * 
    **/
    orderBy?: Enumerable<ShowWriterOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShowWriters.
     * 
    **/
    cursor?: ShowWriterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShowWriters from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShowWriters.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ShowWriterScalarFieldEnum>
  }


  /**
   * ShowWriter create
   */
  export type ShowWriterCreateArgs = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * The data needed to create a ShowWriter.
     * 
    **/
    data: XOR<ShowWriterCreateInput, ShowWriterUncheckedCreateInput>
  }


  /**
   * ShowWriter createMany
   */
  export type ShowWriterCreateManyArgs = {
    /**
     * The data used to create many ShowWriters.
     * 
    **/
    data: Enumerable<ShowWriterCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ShowWriter update
   */
  export type ShowWriterUpdateArgs = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * The data needed to update a ShowWriter.
     * 
    **/
    data: XOR<ShowWriterUpdateInput, ShowWriterUncheckedUpdateInput>
    /**
     * Choose, which ShowWriter to update.
     * 
    **/
    where: ShowWriterWhereUniqueInput
  }


  /**
   * ShowWriter updateMany
   */
  export type ShowWriterUpdateManyArgs = {
    /**
     * The data used to update ShowWriters.
     * 
    **/
    data: XOR<ShowWriterUpdateManyMutationInput, ShowWriterUncheckedUpdateManyInput>
    /**
     * Filter which ShowWriters to update
     * 
    **/
    where?: ShowWriterWhereInput
  }


  /**
   * ShowWriter upsert
   */
  export type ShowWriterUpsertArgs = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * The filter to search for the ShowWriter to update in case it exists.
     * 
    **/
    where: ShowWriterWhereUniqueInput
    /**
     * In case the ShowWriter found by the `where` argument doesn't exist, create a new ShowWriter with this data.
     * 
    **/
    create: XOR<ShowWriterCreateInput, ShowWriterUncheckedCreateInput>
    /**
     * In case the ShowWriter was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ShowWriterUpdateInput, ShowWriterUncheckedUpdateInput>
  }


  /**
   * ShowWriter delete
   */
  export type ShowWriterDeleteArgs = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
    /**
     * Filter which ShowWriter to delete.
     * 
    **/
    where: ShowWriterWhereUniqueInput
  }


  /**
   * ShowWriter deleteMany
   */
  export type ShowWriterDeleteManyArgs = {
    /**
     * Filter which ShowWriters to delete
     * 
    **/
    where?: ShowWriterWhereInput
  }


  /**
   * ShowWriter: findUniqueOrThrow
   */
  export type ShowWriterFindUniqueOrThrowArgs = ShowWriterFindUniqueArgsBase
      

  /**
   * ShowWriter: findFirstOrThrow
   */
  export type ShowWriterFindFirstOrThrowArgs = ShowWriterFindFirstArgsBase
      

  /**
   * ShowWriter without action
   */
  export type ShowWriterArgs = {
    /**
     * Select specific fields to fetch from the ShowWriter
     * 
    **/
    select?: ShowWriterSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ShowWriterInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ActorScalarFieldEnum: {
    actorId: 'actorId',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ActorScalarFieldEnum = (typeof ActorScalarFieldEnum)[keyof typeof ActorScalarFieldEnum]


  export const DirectorScalarFieldEnum: {
    directorId: 'directorId',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum]


  export const EpisodeScalarFieldEnum: {
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
  };

  export type EpisodeScalarFieldEnum = (typeof EpisodeScalarFieldEnum)[keyof typeof EpisodeScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    genreId: 'genreId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const ImageScalarFieldEnum: {
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
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ImdbScalarFieldEnum: {
    imdbId: 'imdbId',
    showId: 'showId',
    rating: 'rating',
    voteCount: 'voteCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImdbScalarFieldEnum = (typeof ImdbScalarFieldEnum)[keyof typeof ImdbScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    languageId: 'languageId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    movieId: 'movieId',
    showId: 'showId',
    length: 'length',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const MovieServerScalarFieldEnum: {
    movieId: 'movieId',
    serverId: 'serverId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MovieServerScalarFieldEnum = (typeof MovieServerScalarFieldEnum)[keyof typeof MovieServerScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SeriesServerScalarFieldEnum: {
    episodeId: 'episodeId',
    serverId: 'serverId',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SeriesServerScalarFieldEnum = (typeof SeriesServerScalarFieldEnum)[keyof typeof SeriesServerScalarFieldEnum]


  export const ServerScalarFieldEnum: {
    serverId: 'serverId',
    name: 'name',
    url: 'url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServerScalarFieldEnum = (typeof ServerScalarFieldEnum)[keyof typeof ServerScalarFieldEnum]


  export const ShowCastScalarFieldEnum: {
    showId: 'showId',
    actorId: 'actorId',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowCastScalarFieldEnum = (typeof ShowCastScalarFieldEnum)[keyof typeof ShowCastScalarFieldEnum]


  export const ShowDirectorScalarFieldEnum: {
    showId: 'showId',
    directorId: 'directorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowDirectorScalarFieldEnum = (typeof ShowDirectorScalarFieldEnum)[keyof typeof ShowDirectorScalarFieldEnum]


  export const ShowGenreScalarFieldEnum: {
    showId: 'showId',
    genreId: 'genreId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowGenreScalarFieldEnum = (typeof ShowGenreScalarFieldEnum)[keyof typeof ShowGenreScalarFieldEnum]


  export const ShowLanguageScalarFieldEnum: {
    showId: 'showId',
    languageId: 'languageId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowLanguageScalarFieldEnum = (typeof ShowLanguageScalarFieldEnum)[keyof typeof ShowLanguageScalarFieldEnum]


  export const ShowScalarFieldEnum: {
    showId: 'showId',
    name: 'name',
    releaseYear: 'releaseYear',
    summary: 'summary',
    pgRating: 'pgRating',
    budget: 'budget',
    revenue: 'revenue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowScalarFieldEnum = (typeof ShowScalarFieldEnum)[keyof typeof ShowScalarFieldEnum]


  export const ShowStudioScalarFieldEnum: {
    showId: 'showId',
    studioId: 'studioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowStudioScalarFieldEnum = (typeof ShowStudioScalarFieldEnum)[keyof typeof ShowStudioScalarFieldEnum]


  export const ShowWriterScalarFieldEnum: {
    showId: 'showId',
    writerId: 'writerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShowWriterScalarFieldEnum = (typeof ShowWriterScalarFieldEnum)[keyof typeof ShowWriterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudioScalarFieldEnum: {
    studioId: 'studioId',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudioScalarFieldEnum = (typeof StudioScalarFieldEnum)[keyof typeof StudioScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VideoScalarFieldEnum: {
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
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const WriterScalarFieldEnum: {
    writerId: 'writerId',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WriterScalarFieldEnum = (typeof WriterScalarFieldEnum)[keyof typeof WriterScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ShowWhereInput = {
    AND?: Enumerable<ShowWhereInput>
    OR?: Enumerable<ShowWhereInput>
    NOT?: Enumerable<ShowWhereInput>
    showId?: IntFilter | number
    name?: StringFilter | string
    releaseYear?: IntFilter | number
    summary?: StringNullableFilter | string | null
    pgRating?: StringNullableFilter | string | null
    budget?: IntNullableFilter | number | null
    revenue?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Imdb?: XOR<ImdbRelationFilter, ImdbWhereInput> | null
    Movie?: XOR<MovieRelationFilter, MovieWhereInput> | null
    Episode?: EpisodeListRelationFilter
    Image?: ImageListRelationFilter
    Video?: VideoListRelationFilter
    ShowCast?: ShowCastListRelationFilter
    ShowDirector?: ShowDirectorListRelationFilter
    ShowGenre?: ShowGenreListRelationFilter
    ShowLanguage?: ShowLanguageListRelationFilter
    ShowStudio?: ShowStudioListRelationFilter
    ShowWriter?: ShowWriterListRelationFilter
  }

  export type ShowOrderByWithRelationInput = {
    showId?: SortOrder
    name?: SortOrder
    releaseYear?: SortOrder
    summary?: SortOrder
    pgRating?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Imdb?: ImdbOrderByWithRelationInput
    Movie?: MovieOrderByWithRelationInput
    Episode?: EpisodeOrderByRelationAggregateInput
    Image?: ImageOrderByRelationAggregateInput
    Video?: VideoOrderByRelationAggregateInput
    ShowCast?: ShowCastOrderByRelationAggregateInput
    ShowDirector?: ShowDirectorOrderByRelationAggregateInput
    ShowGenre?: ShowGenreOrderByRelationAggregateInput
    ShowLanguage?: ShowLanguageOrderByRelationAggregateInput
    ShowStudio?: ShowStudioOrderByRelationAggregateInput
    ShowWriter?: ShowWriterOrderByRelationAggregateInput
  }

  export type ShowWhereUniqueInput = {
    showId?: number
    name_releaseYear?: ShowNameReleaseYearCompoundUniqueInput
  }

  export type ShowOrderByWithAggregationInput = {
    showId?: SortOrder
    name?: SortOrder
    releaseYear?: SortOrder
    summary?: SortOrder
    pgRating?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowCountOrderByAggregateInput
    _avg?: ShowAvgOrderByAggregateInput
    _max?: ShowMaxOrderByAggregateInput
    _min?: ShowMinOrderByAggregateInput
    _sum?: ShowSumOrderByAggregateInput
  }

  export type ShowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    releaseYear?: IntWithAggregatesFilter | number
    summary?: StringNullableWithAggregatesFilter | string | null
    pgRating?: StringNullableWithAggregatesFilter | string | null
    budget?: IntNullableWithAggregatesFilter | number | null
    revenue?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImdbWhereInput = {
    AND?: Enumerable<ImdbWhereInput>
    OR?: Enumerable<ImdbWhereInput>
    NOT?: Enumerable<ImdbWhereInput>
    imdbId?: StringFilter | string
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    rating?: FloatNullableFilter | number | null
    voteCount?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImdbOrderByWithRelationInput = {
    imdbId?: SortOrder
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImdbWhereUniqueInput = {
    imdbId?: string
    showId?: number
  }

  export type ImdbOrderByWithAggregationInput = {
    imdbId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImdbCountOrderByAggregateInput
    _avg?: ImdbAvgOrderByAggregateInput
    _max?: ImdbMaxOrderByAggregateInput
    _min?: ImdbMinOrderByAggregateInput
    _sum?: ImdbSumOrderByAggregateInput
  }

  export type ImdbScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImdbScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImdbScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImdbScalarWhereWithAggregatesInput>
    imdbId?: StringWithAggregatesFilter | string
    showId?: IntWithAggregatesFilter | number
    rating?: FloatNullableWithAggregatesFilter | number | null
    voteCount?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MovieWhereInput = {
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    movieId?: IntFilter | number
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    length?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    MovieServer?: MovieServerListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    movieId?: SortOrder
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    MovieServer?: MovieServerOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = {
    movieId?: number
    showId?: number
  }

  export type MovieOrderByWithAggregationInput = {
    movieId?: SortOrder
    showId?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _avg?: MovieAvgOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
    _sum?: MovieSumOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieScalarWhereWithAggregatesInput>
    movieId?: IntWithAggregatesFilter | number
    showId?: IntWithAggregatesFilter | number
    length?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type EpisodeWhereInput = {
    AND?: Enumerable<EpisodeWhereInput>
    OR?: Enumerable<EpisodeWhereInput>
    NOT?: Enumerable<EpisodeWhereInput>
    episodeId?: IntFilter | number
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    season?: IntFilter | number
    number?: IntFilter | number
    name?: StringNullableFilter | string | null
    poster?: StringNullableFilter | string | null
    summary?: StringNullableFilter | string | null
    releaseYear?: IntNullableFilter | number | null
    length?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    SeriesServer?: SeriesServerListRelationFilter
  }

  export type EpisodeOrderByWithRelationInput = {
    episodeId?: SortOrder
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SeriesServer?: SeriesServerOrderByRelationAggregateInput
  }

  export type EpisodeWhereUniqueInput = {
    episodeId?: number
    number_season_showId?: EpisodeNumberSeasonShowIdCompoundUniqueInput
  }

  export type EpisodeOrderByWithAggregationInput = {
    episodeId?: SortOrder
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EpisodeCountOrderByAggregateInput
    _avg?: EpisodeAvgOrderByAggregateInput
    _max?: EpisodeMaxOrderByAggregateInput
    _min?: EpisodeMinOrderByAggregateInput
    _sum?: EpisodeSumOrderByAggregateInput
  }

  export type EpisodeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EpisodeScalarWhereWithAggregatesInput>
    OR?: Enumerable<EpisodeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EpisodeScalarWhereWithAggregatesInput>
    episodeId?: IntWithAggregatesFilter | number
    showId?: IntWithAggregatesFilter | number
    season?: IntWithAggregatesFilter | number
    number?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    poster?: StringNullableWithAggregatesFilter | string | null
    summary?: StringNullableWithAggregatesFilter | string | null
    releaseYear?: IntNullableWithAggregatesFilter | number | null
    length?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ServerWhereInput = {
    AND?: Enumerable<ServerWhereInput>
    OR?: Enumerable<ServerWhereInput>
    NOT?: Enumerable<ServerWhereInput>
    serverId?: IntFilter | number
    name?: StringFilter | string
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    MovieServer?: MovieServerListRelationFilter
    SeriesServer?: SeriesServerListRelationFilter
  }

  export type ServerOrderByWithRelationInput = {
    serverId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    MovieServer?: MovieServerOrderByRelationAggregateInput
    SeriesServer?: SeriesServerOrderByRelationAggregateInput
  }

  export type ServerWhereUniqueInput = {
    serverId?: number
    name?: string
    url?: string
  }

  export type ServerOrderByWithAggregationInput = {
    serverId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServerCountOrderByAggregateInput
    _avg?: ServerAvgOrderByAggregateInput
    _max?: ServerMaxOrderByAggregateInput
    _min?: ServerMinOrderByAggregateInput
    _sum?: ServerSumOrderByAggregateInput
  }

  export type ServerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ServerScalarWhereWithAggregatesInput>
    OR?: Enumerable<ServerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ServerScalarWhereWithAggregatesInput>
    serverId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ActorWhereInput = {
    AND?: Enumerable<ActorWhereInput>
    OR?: Enumerable<ActorWhereInput>
    NOT?: Enumerable<ActorWhereInput>
    actorId?: IntFilter | number
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    MovieCast?: ShowCastListRelationFilter
  }

  export type ActorOrderByWithRelationInput = {
    actorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    MovieCast?: ShowCastOrderByRelationAggregateInput
  }

  export type ActorWhereUniqueInput = {
    actorId?: number
    name_image?: ActorNameImageCompoundUniqueInput
  }

  export type ActorOrderByWithAggregationInput = {
    actorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ActorCountOrderByAggregateInput
    _avg?: ActorAvgOrderByAggregateInput
    _max?: ActorMaxOrderByAggregateInput
    _min?: ActorMinOrderByAggregateInput
    _sum?: ActorSumOrderByAggregateInput
  }

  export type ActorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ActorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ActorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ActorScalarWhereWithAggregatesInput>
    actorId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DirectorWhereInput = {
    AND?: Enumerable<DirectorWhereInput>
    OR?: Enumerable<DirectorWhereInput>
    NOT?: Enumerable<DirectorWhereInput>
    directorId?: IntFilter | number
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ShowDirector?: ShowDirectorListRelationFilter
  }

  export type DirectorOrderByWithRelationInput = {
    directorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ShowDirector?: ShowDirectorOrderByRelationAggregateInput
  }

  export type DirectorWhereUniqueInput = {
    directorId?: number
    name_image?: DirectorNameImageCompoundUniqueInput
  }

  export type DirectorOrderByWithAggregationInput = {
    directorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DirectorCountOrderByAggregateInput
    _avg?: DirectorAvgOrderByAggregateInput
    _max?: DirectorMaxOrderByAggregateInput
    _min?: DirectorMinOrderByAggregateInput
    _sum?: DirectorSumOrderByAggregateInput
  }

  export type DirectorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirectorScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirectorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirectorScalarWhereWithAggregatesInput>
    directorId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type GenreWhereInput = {
    AND?: Enumerable<GenreWhereInput>
    OR?: Enumerable<GenreWhereInput>
    NOT?: Enumerable<GenreWhereInput>
    genreId?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ShowGenre?: ShowGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    genreId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ShowGenre?: ShowGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = {
    genreId?: number
    name?: string
  }

  export type GenreOrderByWithAggregationInput = {
    genreId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<GenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GenreScalarWhereWithAggregatesInput>
    genreId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type LanguageWhereInput = {
    AND?: Enumerable<LanguageWhereInput>
    OR?: Enumerable<LanguageWhereInput>
    NOT?: Enumerable<LanguageWhereInput>
    languageId?: IntFilter | number
    name?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ShowLanguage?: ShowLanguageListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    languageId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ShowLanguage?: ShowLanguageOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = {
    languageId?: number
    name?: string
  }

  export type LanguageOrderByWithAggregationInput = {
    languageId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<LanguageScalarWhereWithAggregatesInput>
    OR?: Enumerable<LanguageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<LanguageScalarWhereWithAggregatesInput>
    languageId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type StudioWhereInput = {
    AND?: Enumerable<StudioWhereInput>
    OR?: Enumerable<StudioWhereInput>
    NOT?: Enumerable<StudioWhereInput>
    studioId?: IntFilter | number
    name?: StringFilter | string
    image?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ShowStudio?: ShowStudioListRelationFilter
  }

  export type StudioOrderByWithRelationInput = {
    studioId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ShowStudio?: ShowStudioOrderByRelationAggregateInput
  }

  export type StudioWhereUniqueInput = {
    studioId?: number
    name?: string
  }

  export type StudioOrderByWithAggregationInput = {
    studioId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudioCountOrderByAggregateInput
    _avg?: StudioAvgOrderByAggregateInput
    _max?: StudioMaxOrderByAggregateInput
    _min?: StudioMinOrderByAggregateInput
    _sum?: StudioSumOrderByAggregateInput
  }

  export type StudioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StudioScalarWhereWithAggregatesInput>
    OR?: Enumerable<StudioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StudioScalarWhereWithAggregatesInput>
    studioId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WriterWhereInput = {
    AND?: Enumerable<WriterWhereInput>
    OR?: Enumerable<WriterWhereInput>
    NOT?: Enumerable<WriterWhereInput>
    writerId?: IntFilter | number
    name?: StringFilter | string
    image?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    ShowWriter?: ShowWriterListRelationFilter
  }

  export type WriterOrderByWithRelationInput = {
    writerId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ShowWriter?: ShowWriterOrderByRelationAggregateInput
  }

  export type WriterWhereUniqueInput = {
    writerId?: number
    name_image?: WriterNameImageCompoundUniqueInput
  }

  export type WriterOrderByWithAggregationInput = {
    writerId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WriterCountOrderByAggregateInput
    _avg?: WriterAvgOrderByAggregateInput
    _max?: WriterMaxOrderByAggregateInput
    _min?: WriterMinOrderByAggregateInput
    _sum?: WriterSumOrderByAggregateInput
  }

  export type WriterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WriterScalarWhereWithAggregatesInput>
    OR?: Enumerable<WriterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WriterScalarWhereWithAggregatesInput>
    writerId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VideoWhereInput = {
    AND?: Enumerable<VideoWhereInput>
    OR?: Enumerable<VideoWhereInput>
    NOT?: Enumerable<VideoWhereInput>
    videoId?: IntFilter | number
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    name?: StringNullableFilter | string | null
    url?: StringFilter | string
    site?: StringNullableFilter | string | null
    quality?: IntNullableFilter | number | null
    type?: StringNullableFilter | string | null
    official?: BoolNullableFilter | boolean | null
    language?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    publishedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VideoOrderByWithRelationInput = {
    videoId?: SortOrder
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    site?: SortOrder
    quality?: SortOrder
    type?: SortOrder
    official?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoWhereUniqueInput = {
    videoId?: number
    url?: string
  }

  export type VideoOrderByWithAggregationInput = {
    videoId?: SortOrder
    showId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    site?: SortOrder
    quality?: SortOrder
    type?: SortOrder
    official?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VideoScalarWhereWithAggregatesInput>
    OR?: Enumerable<VideoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VideoScalarWhereWithAggregatesInput>
    videoId?: IntWithAggregatesFilter | number
    showId?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    url?: StringWithAggregatesFilter | string
    site?: StringNullableWithAggregatesFilter | string | null
    quality?: IntNullableWithAggregatesFilter | number | null
    type?: StringNullableWithAggregatesFilter | string | null
    official?: BoolNullableWithAggregatesFilter | boolean | null
    language?: StringNullableWithAggregatesFilter | string | null
    isDefault?: BoolWithAggregatesFilter | boolean
    publishedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImageWhereInput = {
    AND?: Enumerable<ImageWhereInput>
    OR?: Enumerable<ImageWhereInput>
    NOT?: Enumerable<ImageWhereInput>
    imageId?: IntFilter | number
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    url?: StringFilter | string
    type?: StringNullableFilter | string | null
    height?: IntNullableFilter | number | null
    width?: IntNullableFilter | number | null
    aspectRatio?: FloatNullableFilter | number | null
    language?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImageOrderByWithRelationInput = {
    imageId?: SortOrder
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageWhereUniqueInput = {
    imageId?: number
    url?: string
  }

  export type ImageOrderByWithAggregationInput = {
    imageId?: SortOrder
    showId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImageScalarWhereWithAggregatesInput>
    imageId?: IntWithAggregatesFilter | number
    showId?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    type?: StringNullableWithAggregatesFilter | string | null
    height?: IntNullableWithAggregatesFilter | number | null
    width?: IntNullableWithAggregatesFilter | number | null
    aspectRatio?: FloatNullableWithAggregatesFilter | number | null
    language?: StringNullableWithAggregatesFilter | string | null
    isDefault?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MovieServerWhereInput = {
    AND?: Enumerable<MovieServerWhereInput>
    OR?: Enumerable<MovieServerWhereInput>
    NOT?: Enumerable<MovieServerWhereInput>
    movie?: XOR<MovieRelationFilter, MovieWhereInput>
    movieId?: IntFilter | number
    server?: XOR<ServerRelationFilter, ServerWhereInput>
    serverId?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MovieServerOrderByWithRelationInput = {
    movie?: MovieOrderByWithRelationInput
    movieId?: SortOrder
    server?: ServerOrderByWithRelationInput
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieServerWhereUniqueInput = {
    movieId_serverId?: MovieServerMovieIdServerIdCompoundUniqueInput
  }

  export type MovieServerOrderByWithAggregationInput = {
    movieId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MovieServerCountOrderByAggregateInput
    _avg?: MovieServerAvgOrderByAggregateInput
    _max?: MovieServerMaxOrderByAggregateInput
    _min?: MovieServerMinOrderByAggregateInput
    _sum?: MovieServerSumOrderByAggregateInput
  }

  export type MovieServerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieServerScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieServerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieServerScalarWhereWithAggregatesInput>
    movieId?: IntWithAggregatesFilter | number
    serverId?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SeriesServerWhereInput = {
    AND?: Enumerable<SeriesServerWhereInput>
    OR?: Enumerable<SeriesServerWhereInput>
    NOT?: Enumerable<SeriesServerWhereInput>
    episode?: XOR<EpisodeRelationFilter, EpisodeWhereInput>
    episodeId?: IntFilter | number
    server?: XOR<ServerRelationFilter, ServerWhereInput>
    serverId?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type SeriesServerOrderByWithRelationInput = {
    episode?: EpisodeOrderByWithRelationInput
    episodeId?: SortOrder
    server?: ServerOrderByWithRelationInput
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesServerWhereUniqueInput = {
    serverId_episodeId?: SeriesServerServerIdEpisodeIdCompoundUniqueInput
  }

  export type SeriesServerOrderByWithAggregationInput = {
    episodeId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SeriesServerCountOrderByAggregateInput
    _avg?: SeriesServerAvgOrderByAggregateInput
    _max?: SeriesServerMaxOrderByAggregateInput
    _min?: SeriesServerMinOrderByAggregateInput
    _sum?: SeriesServerSumOrderByAggregateInput
  }

  export type SeriesServerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SeriesServerScalarWhereWithAggregatesInput>
    OR?: Enumerable<SeriesServerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SeriesServerScalarWhereWithAggregatesInput>
    episodeId?: IntWithAggregatesFilter | number
    serverId?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowCastWhereInput = {
    AND?: Enumerable<ShowCastWhereInput>
    OR?: Enumerable<ShowCastWhereInput>
    NOT?: Enumerable<ShowCastWhereInput>
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    actor?: XOR<ActorRelationFilter, ActorWhereInput>
    actorId?: IntFilter | number
    role?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowCastOrderByWithRelationInput = {
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    actor?: ActorOrderByWithRelationInput
    actorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCastWhereUniqueInput = {
    showId_actorId?: ShowCastShowIdActorIdCompoundUniqueInput
  }

  export type ShowCastOrderByWithAggregationInput = {
    showId?: SortOrder
    actorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowCastCountOrderByAggregateInput
    _avg?: ShowCastAvgOrderByAggregateInput
    _max?: ShowCastMaxOrderByAggregateInput
    _min?: ShowCastMinOrderByAggregateInput
    _sum?: ShowCastSumOrderByAggregateInput
  }

  export type ShowCastScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowCastScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowCastScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowCastScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    actorId?: IntWithAggregatesFilter | number
    role?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowDirectorWhereInput = {
    AND?: Enumerable<ShowDirectorWhereInput>
    OR?: Enumerable<ShowDirectorWhereInput>
    NOT?: Enumerable<ShowDirectorWhereInput>
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    director?: XOR<DirectorRelationFilter, DirectorWhereInput>
    directorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowDirectorOrderByWithRelationInput = {
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    director?: DirectorOrderByWithRelationInput
    directorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowDirectorWhereUniqueInput = {
    showId_directorId?: ShowDirectorShowIdDirectorIdCompoundUniqueInput
  }

  export type ShowDirectorOrderByWithAggregationInput = {
    showId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowDirectorCountOrderByAggregateInput
    _avg?: ShowDirectorAvgOrderByAggregateInput
    _max?: ShowDirectorMaxOrderByAggregateInput
    _min?: ShowDirectorMinOrderByAggregateInput
    _sum?: ShowDirectorSumOrderByAggregateInput
  }

  export type ShowDirectorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowDirectorScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowDirectorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowDirectorScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    directorId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowGenreWhereInput = {
    AND?: Enumerable<ShowGenreWhereInput>
    OR?: Enumerable<ShowGenreWhereInput>
    NOT?: Enumerable<ShowGenreWhereInput>
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    genreId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowGenreOrderByWithRelationInput = {
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    genre?: GenreOrderByWithRelationInput
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowGenreWhereUniqueInput = {
    showId_genreId?: ShowGenreShowIdGenreIdCompoundUniqueInput
  }

  export type ShowGenreOrderByWithAggregationInput = {
    showId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowGenreCountOrderByAggregateInput
    _avg?: ShowGenreAvgOrderByAggregateInput
    _max?: ShowGenreMaxOrderByAggregateInput
    _min?: ShowGenreMinOrderByAggregateInput
    _sum?: ShowGenreSumOrderByAggregateInput
  }

  export type ShowGenreScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowGenreScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowGenreScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowGenreScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    genreId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowLanguageWhereInput = {
    AND?: Enumerable<ShowLanguageWhereInput>
    OR?: Enumerable<ShowLanguageWhereInput>
    NOT?: Enumerable<ShowLanguageWhereInput>
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    language?: XOR<LanguageRelationFilter, LanguageWhereInput>
    languageId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowLanguageOrderByWithRelationInput = {
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    language?: LanguageOrderByWithRelationInput
    languageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowLanguageWhereUniqueInput = {
    showId_languageId?: ShowLanguageShowIdLanguageIdCompoundUniqueInput
  }

  export type ShowLanguageOrderByWithAggregationInput = {
    showId?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowLanguageCountOrderByAggregateInput
    _avg?: ShowLanguageAvgOrderByAggregateInput
    _max?: ShowLanguageMaxOrderByAggregateInput
    _min?: ShowLanguageMinOrderByAggregateInput
    _sum?: ShowLanguageSumOrderByAggregateInput
  }

  export type ShowLanguageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowLanguageScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowLanguageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowLanguageScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    languageId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowStudioWhereInput = {
    AND?: Enumerable<ShowStudioWhereInput>
    OR?: Enumerable<ShowStudioWhereInput>
    NOT?: Enumerable<ShowStudioWhereInput>
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    studio?: XOR<StudioRelationFilter, StudioWhereInput>
    studioId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowStudioOrderByWithRelationInput = {
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    studio?: StudioOrderByWithRelationInput
    studioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowStudioWhereUniqueInput = {
    showId_studioId?: ShowStudioShowIdStudioIdCompoundUniqueInput
  }

  export type ShowStudioOrderByWithAggregationInput = {
    showId?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowStudioCountOrderByAggregateInput
    _avg?: ShowStudioAvgOrderByAggregateInput
    _max?: ShowStudioMaxOrderByAggregateInput
    _min?: ShowStudioMinOrderByAggregateInput
    _sum?: ShowStudioSumOrderByAggregateInput
  }

  export type ShowStudioScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowStudioScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowStudioScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowStudioScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    studioId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowWriterWhereInput = {
    AND?: Enumerable<ShowWriterWhereInput>
    OR?: Enumerable<ShowWriterWhereInput>
    NOT?: Enumerable<ShowWriterWhereInput>
    show?: XOR<ShowRelationFilter, ShowWhereInput>
    showId?: IntFilter | number
    writer?: XOR<WriterRelationFilter, WriterWhereInput>
    writerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowWriterOrderByWithRelationInput = {
    show?: ShowOrderByWithRelationInput
    showId?: SortOrder
    writer?: WriterOrderByWithRelationInput
    writerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowWriterWhereUniqueInput = {
    showId_writerId?: ShowWriterShowIdWriterIdCompoundUniqueInput
  }

  export type ShowWriterOrderByWithAggregationInput = {
    showId?: SortOrder
    writerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShowWriterCountOrderByAggregateInput
    _avg?: ShowWriterAvgOrderByAggregateInput
    _max?: ShowWriterMaxOrderByAggregateInput
    _min?: ShowWriterMinOrderByAggregateInput
    _sum?: ShowWriterSumOrderByAggregateInput
  }

  export type ShowWriterScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ShowWriterScalarWhereWithAggregatesInput>
    OR?: Enumerable<ShowWriterScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ShowWriterScalarWhereWithAggregatesInput>
    showId?: IntWithAggregatesFilter | number
    writerId?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ShowCreateInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateManyInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImdbCreateInput = {
    imdbId: string
    show: ShowCreateNestedOneWithoutImdbInput
    rating?: number | null
    voteCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImdbUncheckedCreateInput = {
    imdbId: string
    showId: number
    rating?: number | null
    voteCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImdbUpdateInput = {
    imdbId?: StringFieldUpdateOperationsInput | string
    show?: ShowUpdateOneRequiredWithoutImdbNestedInput
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    voteCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImdbUncheckedUpdateInput = {
    imdbId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    voteCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImdbCreateManyInput = {
    imdbId: string
    showId: number
    rating?: number | null
    voteCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImdbUpdateManyMutationInput = {
    imdbId?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    voteCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImdbUncheckedUpdateManyInput = {
    imdbId?: StringFieldUpdateOperationsInput | string
    showId?: IntFieldUpdateOperationsInput | number
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    voteCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCreateInput = {
    show: ShowCreateNestedOneWithoutMovieInput
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    movieId?: number
    showId: number
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutMovieNestedInput
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    movieId?: number
    showId: number
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUpdateManyMutationInput = {
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateInput = {
    show: ShowCreateNestedOneWithoutEpisodeInput
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SeriesServer?: SeriesServerCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateInput = {
    episodeId?: number
    showId: number
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SeriesServer?: SeriesServerUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutEpisodeNestedInput
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeriesServer?: SeriesServerUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeriesServer?: SeriesServerUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeCreateManyInput = {
    episodeId?: number
    showId: number
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateManyMutationInput = {
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateManyInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerCreateInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerCreateNestedManyWithoutServerInput
    SeriesServer?: SeriesServerCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateInput = {
    serverId?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerUncheckedCreateNestedManyWithoutServerInput
    SeriesServer?: SeriesServerUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUpdateManyWithoutServerNestedInput
    SeriesServer?: SeriesServerUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUncheckedUpdateManyWithoutServerNestedInput
    SeriesServer?: SeriesServerUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ServerCreateManyInput = {
    serverId?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUncheckedUpdateManyInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorCreateInput = {
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieCast?: ShowCastCreateNestedManyWithoutActorInput
  }

  export type ActorUncheckedCreateInput = {
    actorId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieCast?: ShowCastUncheckedCreateNestedManyWithoutActorInput
  }

  export type ActorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieCast?: ShowCastUpdateManyWithoutActorNestedInput
  }

  export type ActorUncheckedUpdateInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieCast?: ShowCastUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ActorCreateManyInput = {
    actorId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorUncheckedUpdateManyInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectorCreateInput = {
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowDirector?: ShowDirectorCreateNestedManyWithoutDirectorInput
  }

  export type DirectorUncheckedCreateInput = {
    directorId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutDirectorInput
  }

  export type DirectorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowDirector?: ShowDirectorUpdateManyWithoutDirectorNestedInput
  }

  export type DirectorUncheckedUpdateInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutDirectorNestedInput
  }

  export type DirectorCreateManyInput = {
    directorId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectorUncheckedUpdateManyInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowGenre?: ShowGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    genreId?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowGenre?: ShowGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    genreId?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    languageId?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowLanguage?: ShowLanguageUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    languageId?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioCreateInput = {
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowStudio?: ShowStudioCreateNestedManyWithoutStudioInput
  }

  export type StudioUncheckedCreateInput = {
    studioId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutStudioInput
  }

  export type StudioUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowStudio?: ShowStudioUpdateManyWithoutStudioNestedInput
  }

  export type StudioUncheckedUpdateInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutStudioNestedInput
  }

  export type StudioCreateManyInput = {
    studioId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudioUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUncheckedUpdateManyInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterCreateInput = {
    name: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowWriter?: ShowWriterCreateNestedManyWithoutWriterInput
  }

  export type WriterUncheckedCreateInput = {
    writerId?: number
    name: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutWriterInput
  }

  export type WriterUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowWriter?: ShowWriterUpdateManyWithoutWriterNestedInput
  }

  export type WriterUncheckedUpdateInput = {
    writerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutWriterNestedInput
  }

  export type WriterCreateManyInput = {
    writerId?: number
    name: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WriterUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterUncheckedUpdateManyInput = {
    writerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    show: ShowCreateNestedOneWithoutVideoInput
    name?: string | null
    url: string
    site?: string | null
    quality?: number | null
    type?: string | null
    official?: boolean | null
    language?: string | null
    isDefault?: boolean
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUncheckedCreateInput = {
    videoId?: number
    showId: number
    name?: string | null
    url: string
    site?: string | null
    quality?: number | null
    type?: string | null
    official?: boolean | null
    language?: string | null
    isDefault?: boolean
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutVideoNestedInput
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    videoId?: number
    showId: number
    name?: string | null
    url: string
    site?: string | null
    quality?: number | null
    type?: string | null
    official?: boolean | null
    language?: string | null
    isDefault?: boolean
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    show: ShowCreateNestedOneWithoutImageInput
    url: string
    type?: string | null
    height?: number | null
    width?: number | null
    aspectRatio?: number | null
    language?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateInput = {
    imageId?: number
    showId: number
    url: string
    type?: string | null
    height?: number | null
    width?: number | null
    aspectRatio?: number | null
    language?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutImageNestedInput
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateManyInput = {
    imageId?: number
    showId: number
    url: string
    type?: string | null
    height?: number | null
    width?: number | null
    aspectRatio?: number | null
    language?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerCreateInput = {
    movie: MovieCreateNestedOneWithoutMovieServerInput
    server: ServerCreateNestedOneWithoutMovieServerInput
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUncheckedCreateInput = {
    movieId: number
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUpdateInput = {
    movie?: MovieUpdateOneRequiredWithoutMovieServerNestedInput
    server?: ServerUpdateOneRequiredWithoutMovieServerNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerCreateManyInput = {
    movieId: number
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerCreateInput = {
    episode: EpisodeCreateNestedOneWithoutSeriesServerInput
    server: ServerCreateNestedOneWithoutSeriesServerInput
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerUncheckedCreateInput = {
    episodeId: number
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerUpdateInput = {
    episode?: EpisodeUpdateOneRequiredWithoutSeriesServerNestedInput
    server?: ServerUpdateOneRequiredWithoutSeriesServerNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerUncheckedUpdateInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerCreateManyInput = {
    episodeId: number
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerUncheckedUpdateManyInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastCreateInput = {
    show: ShowCreateNestedOneWithoutShowCastInput
    actor: ActorCreateNestedOneWithoutMovieCastInput
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastUncheckedCreateInput = {
    showId: number
    actorId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutShowCastNestedInput
    actor?: ActorUpdateOneRequiredWithoutMovieCastNestedInput
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    actorId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastCreateManyInput = {
    showId: number
    actorId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    actorId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorCreateInput = {
    show: ShowCreateNestedOneWithoutShowDirectorInput
    director: DirectorCreateNestedOneWithoutShowDirectorInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorUncheckedCreateInput = {
    showId: number
    directorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutShowDirectorNestedInput
    director?: DirectorUpdateOneRequiredWithoutShowDirectorNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorCreateManyInput = {
    showId: number
    directorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreCreateInput = {
    show: ShowCreateNestedOneWithoutShowGenreInput
    genre: GenreCreateNestedOneWithoutShowGenreInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreUncheckedCreateInput = {
    showId: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutShowGenreNestedInput
    genre?: GenreUpdateOneRequiredWithoutShowGenreNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreCreateManyInput = {
    showId: number
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageCreateInput = {
    show: ShowCreateNestedOneWithoutShowLanguageInput
    language: LanguageCreateNestedOneWithoutShowLanguageInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageUncheckedCreateInput = {
    showId: number
    languageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutShowLanguageNestedInput
    language?: LanguageUpdateOneRequiredWithoutShowLanguageNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageCreateManyInput = {
    showId: number
    languageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioCreateInput = {
    show: ShowCreateNestedOneWithoutShowStudioInput
    studio: StudioCreateNestedOneWithoutShowStudioInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioUncheckedCreateInput = {
    showId: number
    studioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutShowStudioNestedInput
    studio?: StudioUpdateOneRequiredWithoutShowStudioNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    studioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioCreateManyInput = {
    showId: number
    studioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    studioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterCreateInput = {
    show: ShowCreateNestedOneWithoutShowWriterInput
    writer: WriterCreateNestedOneWithoutShowWriterInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterUncheckedCreateInput = {
    showId: number
    writerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterUpdateInput = {
    show?: ShowUpdateOneRequiredWithoutShowWriterNestedInput
    writer?: WriterUpdateOneRequiredWithoutShowWriterNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterUncheckedUpdateInput = {
    showId?: IntFieldUpdateOperationsInput | number
    writerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterCreateManyInput = {
    showId: number
    writerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterUncheckedUpdateManyInput = {
    showId?: IntFieldUpdateOperationsInput | number
    writerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type ImdbRelationFilter = {
    is?: ImdbWhereInput | null
    isNot?: ImdbWhereInput | null
  }

  export type MovieRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type EpisodeListRelationFilter = {
    every?: EpisodeWhereInput
    some?: EpisodeWhereInput
    none?: EpisodeWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type VideoListRelationFilter = {
    every?: VideoWhereInput
    some?: VideoWhereInput
    none?: VideoWhereInput
  }

  export type ShowCastListRelationFilter = {
    every?: ShowCastWhereInput
    some?: ShowCastWhereInput
    none?: ShowCastWhereInput
  }

  export type ShowDirectorListRelationFilter = {
    every?: ShowDirectorWhereInput
    some?: ShowDirectorWhereInput
    none?: ShowDirectorWhereInput
  }

  export type ShowGenreListRelationFilter = {
    every?: ShowGenreWhereInput
    some?: ShowGenreWhereInput
    none?: ShowGenreWhereInput
  }

  export type ShowLanguageListRelationFilter = {
    every?: ShowLanguageWhereInput
    some?: ShowLanguageWhereInput
    none?: ShowLanguageWhereInput
  }

  export type ShowStudioListRelationFilter = {
    every?: ShowStudioWhereInput
    some?: ShowStudioWhereInput
    none?: ShowStudioWhereInput
  }

  export type ShowWriterListRelationFilter = {
    every?: ShowWriterWhereInput
    some?: ShowWriterWhereInput
    none?: ShowWriterWhereInput
  }

  export type EpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VideoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowCastOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowDirectorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowLanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowStudioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowWriterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShowNameReleaseYearCompoundUniqueInput = {
    name: string
    releaseYear: number
  }

  export type ShowCountOrderByAggregateInput = {
    showId?: SortOrder
    name?: SortOrder
    releaseYear?: SortOrder
    summary?: SortOrder
    pgRating?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowAvgOrderByAggregateInput = {
    showId?: SortOrder
    releaseYear?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
  }

  export type ShowMaxOrderByAggregateInput = {
    showId?: SortOrder
    name?: SortOrder
    releaseYear?: SortOrder
    summary?: SortOrder
    pgRating?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowMinOrderByAggregateInput = {
    showId?: SortOrder
    name?: SortOrder
    releaseYear?: SortOrder
    summary?: SortOrder
    pgRating?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowSumOrderByAggregateInput = {
    showId?: SortOrder
    releaseYear?: SortOrder
    budget?: SortOrder
    revenue?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ShowRelationFilter = {
    is?: ShowWhereInput
    isNot?: ShowWhereInput
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type ImdbCountOrderByAggregateInput = {
    imdbId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImdbAvgOrderByAggregateInput = {
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
  }

  export type ImdbMaxOrderByAggregateInput = {
    imdbId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImdbMinOrderByAggregateInput = {
    imdbId?: SortOrder
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImdbSumOrderByAggregateInput = {
    showId?: SortOrder
    rating?: SortOrder
    voteCount?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type MovieServerListRelationFilter = {
    every?: MovieServerWhereInput
    some?: MovieServerWhereInput
    none?: MovieServerWhereInput
  }

  export type MovieServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    movieId?: SortOrder
    showId?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieAvgOrderByAggregateInput = {
    movieId?: SortOrder
    showId?: SortOrder
    length?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    movieId?: SortOrder
    showId?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    movieId?: SortOrder
    showId?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieSumOrderByAggregateInput = {
    movieId?: SortOrder
    showId?: SortOrder
    length?: SortOrder
  }

  export type SeriesServerListRelationFilter = {
    every?: SeriesServerWhereInput
    some?: SeriesServerWhereInput
    none?: SeriesServerWhereInput
  }

  export type SeriesServerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodeNumberSeasonShowIdCompoundUniqueInput = {
    number: number
    season: number
    showId: number
  }

  export type EpisodeCountOrderByAggregateInput = {
    episodeId?: SortOrder
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeAvgOrderByAggregateInput = {
    episodeId?: SortOrder
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
  }

  export type EpisodeMaxOrderByAggregateInput = {
    episodeId?: SortOrder
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeMinOrderByAggregateInput = {
    episodeId?: SortOrder
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    name?: SortOrder
    poster?: SortOrder
    summary?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EpisodeSumOrderByAggregateInput = {
    episodeId?: SortOrder
    showId?: SortOrder
    season?: SortOrder
    number?: SortOrder
    releaseYear?: SortOrder
    length?: SortOrder
  }

  export type ServerCountOrderByAggregateInput = {
    serverId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerAvgOrderByAggregateInput = {
    serverId?: SortOrder
  }

  export type ServerMaxOrderByAggregateInput = {
    serverId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerMinOrderByAggregateInput = {
    serverId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServerSumOrderByAggregateInput = {
    serverId?: SortOrder
  }

  export type ActorNameImageCompoundUniqueInput = {
    name: string
    image: string
  }

  export type ActorCountOrderByAggregateInput = {
    actorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActorAvgOrderByAggregateInput = {
    actorId?: SortOrder
  }

  export type ActorMaxOrderByAggregateInput = {
    actorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActorMinOrderByAggregateInput = {
    actorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ActorSumOrderByAggregateInput = {
    actorId?: SortOrder
  }

  export type DirectorNameImageCompoundUniqueInput = {
    name: string
    image: string
  }

  export type DirectorCountOrderByAggregateInput = {
    directorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectorAvgOrderByAggregateInput = {
    directorId?: SortOrder
  }

  export type DirectorMaxOrderByAggregateInput = {
    directorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectorMinOrderByAggregateInput = {
    directorId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DirectorSumOrderByAggregateInput = {
    directorId?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    genreId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    genreId?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    genreId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    genreId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    genreId?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    languageId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    languageId?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    languageId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    languageId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    languageId?: SortOrder
  }

  export type StudioCountOrderByAggregateInput = {
    studioId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudioAvgOrderByAggregateInput = {
    studioId?: SortOrder
  }

  export type StudioMaxOrderByAggregateInput = {
    studioId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudioMinOrderByAggregateInput = {
    studioId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudioSumOrderByAggregateInput = {
    studioId?: SortOrder
  }

  export type WriterNameImageCompoundUniqueInput = {
    name: string
    image: string
  }

  export type WriterCountOrderByAggregateInput = {
    writerId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WriterAvgOrderByAggregateInput = {
    writerId?: SortOrder
  }

  export type WriterMaxOrderByAggregateInput = {
    writerId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WriterMinOrderByAggregateInput = {
    writerId?: SortOrder
    name?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WriterSumOrderByAggregateInput = {
    writerId?: SortOrder
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type VideoCountOrderByAggregateInput = {
    videoId?: SortOrder
    showId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    site?: SortOrder
    quality?: SortOrder
    type?: SortOrder
    official?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    videoId?: SortOrder
    showId?: SortOrder
    quality?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    videoId?: SortOrder
    showId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    site?: SortOrder
    quality?: SortOrder
    type?: SortOrder
    official?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    videoId?: SortOrder
    showId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    site?: SortOrder
    quality?: SortOrder
    type?: SortOrder
    official?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    publishedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    videoId?: SortOrder
    showId?: SortOrder
    quality?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ImageCountOrderByAggregateInput = {
    imageId?: SortOrder
    showId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    imageId?: SortOrder
    showId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    imageId?: SortOrder
    showId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    imageId?: SortOrder
    showId?: SortOrder
    url?: SortOrder
    type?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
    language?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    imageId?: SortOrder
    showId?: SortOrder
    height?: SortOrder
    width?: SortOrder
    aspectRatio?: SortOrder
  }

  export type ServerRelationFilter = {
    is?: ServerWhereInput
    isNot?: ServerWhereInput
  }

  export type MovieServerMovieIdServerIdCompoundUniqueInput = {
    movieId: number
    serverId: number
  }

  export type MovieServerCountOrderByAggregateInput = {
    movieId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieServerAvgOrderByAggregateInput = {
    movieId?: SortOrder
    serverId?: SortOrder
  }

  export type MovieServerMaxOrderByAggregateInput = {
    movieId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieServerMinOrderByAggregateInput = {
    movieId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MovieServerSumOrderByAggregateInput = {
    movieId?: SortOrder
    serverId?: SortOrder
  }

  export type EpisodeRelationFilter = {
    is?: EpisodeWhereInput
    isNot?: EpisodeWhereInput
  }

  export type SeriesServerServerIdEpisodeIdCompoundUniqueInput = {
    serverId: number
    episodeId: number
  }

  export type SeriesServerCountOrderByAggregateInput = {
    episodeId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesServerAvgOrderByAggregateInput = {
    episodeId?: SortOrder
    serverId?: SortOrder
  }

  export type SeriesServerMaxOrderByAggregateInput = {
    episodeId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesServerMinOrderByAggregateInput = {
    episodeId?: SortOrder
    serverId?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SeriesServerSumOrderByAggregateInput = {
    episodeId?: SortOrder
    serverId?: SortOrder
  }

  export type ActorRelationFilter = {
    is?: ActorWhereInput
    isNot?: ActorWhereInput
  }

  export type ShowCastShowIdActorIdCompoundUniqueInput = {
    showId: number
    actorId: number
  }

  export type ShowCastCountOrderByAggregateInput = {
    showId?: SortOrder
    actorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCastAvgOrderByAggregateInput = {
    showId?: SortOrder
    actorId?: SortOrder
  }

  export type ShowCastMaxOrderByAggregateInput = {
    showId?: SortOrder
    actorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCastMinOrderByAggregateInput = {
    showId?: SortOrder
    actorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowCastSumOrderByAggregateInput = {
    showId?: SortOrder
    actorId?: SortOrder
  }

  export type DirectorRelationFilter = {
    is?: DirectorWhereInput
    isNot?: DirectorWhereInput
  }

  export type ShowDirectorShowIdDirectorIdCompoundUniqueInput = {
    showId: number
    directorId: number
  }

  export type ShowDirectorCountOrderByAggregateInput = {
    showId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowDirectorAvgOrderByAggregateInput = {
    showId?: SortOrder
    directorId?: SortOrder
  }

  export type ShowDirectorMaxOrderByAggregateInput = {
    showId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowDirectorMinOrderByAggregateInput = {
    showId?: SortOrder
    directorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowDirectorSumOrderByAggregateInput = {
    showId?: SortOrder
    directorId?: SortOrder
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type ShowGenreShowIdGenreIdCompoundUniqueInput = {
    showId: number
    genreId: number
  }

  export type ShowGenreCountOrderByAggregateInput = {
    showId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowGenreAvgOrderByAggregateInput = {
    showId?: SortOrder
    genreId?: SortOrder
  }

  export type ShowGenreMaxOrderByAggregateInput = {
    showId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowGenreMinOrderByAggregateInput = {
    showId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowGenreSumOrderByAggregateInput = {
    showId?: SortOrder
    genreId?: SortOrder
  }

  export type LanguageRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type ShowLanguageShowIdLanguageIdCompoundUniqueInput = {
    showId: number
    languageId: number
  }

  export type ShowLanguageCountOrderByAggregateInput = {
    showId?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowLanguageAvgOrderByAggregateInput = {
    showId?: SortOrder
    languageId?: SortOrder
  }

  export type ShowLanguageMaxOrderByAggregateInput = {
    showId?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowLanguageMinOrderByAggregateInput = {
    showId?: SortOrder
    languageId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowLanguageSumOrderByAggregateInput = {
    showId?: SortOrder
    languageId?: SortOrder
  }

  export type StudioRelationFilter = {
    is?: StudioWhereInput
    isNot?: StudioWhereInput
  }

  export type ShowStudioShowIdStudioIdCompoundUniqueInput = {
    showId: number
    studioId: number
  }

  export type ShowStudioCountOrderByAggregateInput = {
    showId?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowStudioAvgOrderByAggregateInput = {
    showId?: SortOrder
    studioId?: SortOrder
  }

  export type ShowStudioMaxOrderByAggregateInput = {
    showId?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowStudioMinOrderByAggregateInput = {
    showId?: SortOrder
    studioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowStudioSumOrderByAggregateInput = {
    showId?: SortOrder
    studioId?: SortOrder
  }

  export type WriterRelationFilter = {
    is?: WriterWhereInput
    isNot?: WriterWhereInput
  }

  export type ShowWriterShowIdWriterIdCompoundUniqueInput = {
    showId: number
    writerId: number
  }

  export type ShowWriterCountOrderByAggregateInput = {
    showId?: SortOrder
    writerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowWriterAvgOrderByAggregateInput = {
    showId?: SortOrder
    writerId?: SortOrder
  }

  export type ShowWriterMaxOrderByAggregateInput = {
    showId?: SortOrder
    writerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowWriterMinOrderByAggregateInput = {
    showId?: SortOrder
    writerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShowWriterSumOrderByAggregateInput = {
    showId?: SortOrder
    writerId?: SortOrder
  }

  export type ImdbCreateNestedOneWithoutShowInput = {
    create?: XOR<ImdbCreateWithoutShowInput, ImdbUncheckedCreateWithoutShowInput>
    connectOrCreate?: ImdbCreateOrConnectWithoutShowInput
    connect?: ImdbWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutShowInput = {
    create?: XOR<MovieCreateWithoutShowInput, MovieUncheckedCreateWithoutShowInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowInput
    connect?: MovieWhereUniqueInput
  }

  export type EpisodeCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutShowInput>, Enumerable<EpisodeUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutShowInput>
    createMany?: EpisodeCreateManyShowInputEnvelope
    connect?: Enumerable<EpisodeWhereUniqueInput>
  }

  export type ImageCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ImageCreateWithoutShowInput>, Enumerable<ImageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutShowInput>
    createMany?: ImageCreateManyShowInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type VideoCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<VideoCreateWithoutShowInput>, Enumerable<VideoUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutShowInput>
    createMany?: VideoCreateManyShowInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type ShowCastCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutShowInput>, Enumerable<ShowCastUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutShowInput>
    createMany?: ShowCastCreateManyShowInputEnvelope
    connect?: Enumerable<ShowCastWhereUniqueInput>
  }

  export type ShowDirectorCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutShowInput>, Enumerable<ShowDirectorUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutShowInput>
    createMany?: ShowDirectorCreateManyShowInputEnvelope
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
  }

  export type ShowGenreCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutShowInput>, Enumerable<ShowGenreUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutShowInput>
    createMany?: ShowGenreCreateManyShowInputEnvelope
    connect?: Enumerable<ShowGenreWhereUniqueInput>
  }

  export type ShowLanguageCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutShowInput>, Enumerable<ShowLanguageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutShowInput>
    createMany?: ShowLanguageCreateManyShowInputEnvelope
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
  }

  export type ShowStudioCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutShowInput>, Enumerable<ShowStudioUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutShowInput>
    createMany?: ShowStudioCreateManyShowInputEnvelope
    connect?: Enumerable<ShowStudioWhereUniqueInput>
  }

  export type ShowWriterCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutShowInput>, Enumerable<ShowWriterUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutShowInput>
    createMany?: ShowWriterCreateManyShowInputEnvelope
    connect?: Enumerable<ShowWriterWhereUniqueInput>
  }

  export type ImdbUncheckedCreateNestedOneWithoutShowInput = {
    create?: XOR<ImdbCreateWithoutShowInput, ImdbUncheckedCreateWithoutShowInput>
    connectOrCreate?: ImdbCreateOrConnectWithoutShowInput
    connect?: ImdbWhereUniqueInput
  }

  export type MovieUncheckedCreateNestedOneWithoutShowInput = {
    create?: XOR<MovieCreateWithoutShowInput, MovieUncheckedCreateWithoutShowInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowInput
    connect?: MovieWhereUniqueInput
  }

  export type EpisodeUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutShowInput>, Enumerable<EpisodeUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutShowInput>
    createMany?: EpisodeCreateManyShowInputEnvelope
    connect?: Enumerable<EpisodeWhereUniqueInput>
  }

  export type ImageUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ImageCreateWithoutShowInput>, Enumerable<ImageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutShowInput>
    createMany?: ImageCreateManyShowInputEnvelope
    connect?: Enumerable<ImageWhereUniqueInput>
  }

  export type VideoUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<VideoCreateWithoutShowInput>, Enumerable<VideoUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutShowInput>
    createMany?: VideoCreateManyShowInputEnvelope
    connect?: Enumerable<VideoWhereUniqueInput>
  }

  export type ShowCastUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutShowInput>, Enumerable<ShowCastUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutShowInput>
    createMany?: ShowCastCreateManyShowInputEnvelope
    connect?: Enumerable<ShowCastWhereUniqueInput>
  }

  export type ShowDirectorUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutShowInput>, Enumerable<ShowDirectorUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutShowInput>
    createMany?: ShowDirectorCreateManyShowInputEnvelope
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
  }

  export type ShowGenreUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutShowInput>, Enumerable<ShowGenreUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutShowInput>
    createMany?: ShowGenreCreateManyShowInputEnvelope
    connect?: Enumerable<ShowGenreWhereUniqueInput>
  }

  export type ShowLanguageUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutShowInput>, Enumerable<ShowLanguageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutShowInput>
    createMany?: ShowLanguageCreateManyShowInputEnvelope
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
  }

  export type ShowStudioUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutShowInput>, Enumerable<ShowStudioUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutShowInput>
    createMany?: ShowStudioCreateManyShowInputEnvelope
    connect?: Enumerable<ShowStudioWhereUniqueInput>
  }

  export type ShowWriterUncheckedCreateNestedManyWithoutShowInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutShowInput>, Enumerable<ShowWriterUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutShowInput>
    createMany?: ShowWriterCreateManyShowInputEnvelope
    connect?: Enumerable<ShowWriterWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ImdbUpdateOneWithoutShowNestedInput = {
    create?: XOR<ImdbCreateWithoutShowInput, ImdbUncheckedCreateWithoutShowInput>
    connectOrCreate?: ImdbCreateOrConnectWithoutShowInput
    upsert?: ImdbUpsertWithoutShowInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImdbWhereUniqueInput
    update?: XOR<ImdbUpdateWithoutShowInput, ImdbUncheckedUpdateWithoutShowInput>
  }

  export type MovieUpdateOneWithoutShowNestedInput = {
    create?: XOR<MovieCreateWithoutShowInput, MovieUncheckedCreateWithoutShowInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowInput
    upsert?: MovieUpsertWithoutShowInput
    disconnect?: boolean
    delete?: boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutShowInput, MovieUncheckedUpdateWithoutShowInput>
  }

  export type EpisodeUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutShowInput>, Enumerable<EpisodeUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<EpisodeUpsertWithWhereUniqueWithoutShowInput>
    createMany?: EpisodeCreateManyShowInputEnvelope
    set?: Enumerable<EpisodeWhereUniqueInput>
    disconnect?: Enumerable<EpisodeWhereUniqueInput>
    delete?: Enumerable<EpisodeWhereUniqueInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
    update?: Enumerable<EpisodeUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<EpisodeUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<EpisodeScalarWhereInput>
  }

  export type ImageUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutShowInput>, Enumerable<ImageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ImageCreateManyShowInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type VideoUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutShowInput>, Enumerable<VideoUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutShowInput>
    createMany?: VideoCreateManyShowInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type ShowCastUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutShowInput>, Enumerable<ShowCastUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowCastUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowCastCreateManyShowInputEnvelope
    set?: Enumerable<ShowCastWhereUniqueInput>
    disconnect?: Enumerable<ShowCastWhereUniqueInput>
    delete?: Enumerable<ShowCastWhereUniqueInput>
    connect?: Enumerable<ShowCastWhereUniqueInput>
    update?: Enumerable<ShowCastUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowCastUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowCastScalarWhereInput>
  }

  export type ShowDirectorUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutShowInput>, Enumerable<ShowDirectorUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowDirectorUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowDirectorCreateManyShowInputEnvelope
    set?: Enumerable<ShowDirectorWhereUniqueInput>
    disconnect?: Enumerable<ShowDirectorWhereUniqueInput>
    delete?: Enumerable<ShowDirectorWhereUniqueInput>
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
    update?: Enumerable<ShowDirectorUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowDirectorUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowDirectorScalarWhereInput>
  }

  export type ShowGenreUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutShowInput>, Enumerable<ShowGenreUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowGenreUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowGenreCreateManyShowInputEnvelope
    set?: Enumerable<ShowGenreWhereUniqueInput>
    disconnect?: Enumerable<ShowGenreWhereUniqueInput>
    delete?: Enumerable<ShowGenreWhereUniqueInput>
    connect?: Enumerable<ShowGenreWhereUniqueInput>
    update?: Enumerable<ShowGenreUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowGenreUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowGenreScalarWhereInput>
  }

  export type ShowLanguageUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutShowInput>, Enumerable<ShowLanguageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowLanguageUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowLanguageCreateManyShowInputEnvelope
    set?: Enumerable<ShowLanguageWhereUniqueInput>
    disconnect?: Enumerable<ShowLanguageWhereUniqueInput>
    delete?: Enumerable<ShowLanguageWhereUniqueInput>
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
    update?: Enumerable<ShowLanguageUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowLanguageUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowLanguageScalarWhereInput>
  }

  export type ShowStudioUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutShowInput>, Enumerable<ShowStudioUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowStudioUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowStudioCreateManyShowInputEnvelope
    set?: Enumerable<ShowStudioWhereUniqueInput>
    disconnect?: Enumerable<ShowStudioWhereUniqueInput>
    delete?: Enumerable<ShowStudioWhereUniqueInput>
    connect?: Enumerable<ShowStudioWhereUniqueInput>
    update?: Enumerable<ShowStudioUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowStudioUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowStudioScalarWhereInput>
  }

  export type ShowWriterUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutShowInput>, Enumerable<ShowWriterUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowWriterUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowWriterCreateManyShowInputEnvelope
    set?: Enumerable<ShowWriterWhereUniqueInput>
    disconnect?: Enumerable<ShowWriterWhereUniqueInput>
    delete?: Enumerable<ShowWriterWhereUniqueInput>
    connect?: Enumerable<ShowWriterWhereUniqueInput>
    update?: Enumerable<ShowWriterUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowWriterUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowWriterScalarWhereInput>
  }

  export type ImdbUncheckedUpdateOneWithoutShowNestedInput = {
    create?: XOR<ImdbCreateWithoutShowInput, ImdbUncheckedCreateWithoutShowInput>
    connectOrCreate?: ImdbCreateOrConnectWithoutShowInput
    upsert?: ImdbUpsertWithoutShowInput
    disconnect?: boolean
    delete?: boolean
    connect?: ImdbWhereUniqueInput
    update?: XOR<ImdbUpdateWithoutShowInput, ImdbUncheckedUpdateWithoutShowInput>
  }

  export type MovieUncheckedUpdateOneWithoutShowNestedInput = {
    create?: XOR<MovieCreateWithoutShowInput, MovieUncheckedCreateWithoutShowInput>
    connectOrCreate?: MovieCreateOrConnectWithoutShowInput
    upsert?: MovieUpsertWithoutShowInput
    disconnect?: boolean
    delete?: boolean
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutShowInput, MovieUncheckedUpdateWithoutShowInput>
  }

  export type EpisodeUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<EpisodeCreateWithoutShowInput>, Enumerable<EpisodeUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<EpisodeCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<EpisodeUpsertWithWhereUniqueWithoutShowInput>
    createMany?: EpisodeCreateManyShowInputEnvelope
    set?: Enumerable<EpisodeWhereUniqueInput>
    disconnect?: Enumerable<EpisodeWhereUniqueInput>
    delete?: Enumerable<EpisodeWhereUniqueInput>
    connect?: Enumerable<EpisodeWhereUniqueInput>
    update?: Enumerable<EpisodeUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<EpisodeUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<EpisodeScalarWhereInput>
  }

  export type ImageUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ImageCreateWithoutShowInput>, Enumerable<ImageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ImageCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ImageUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ImageCreateManyShowInputEnvelope
    set?: Enumerable<ImageWhereUniqueInput>
    disconnect?: Enumerable<ImageWhereUniqueInput>
    delete?: Enumerable<ImageWhereUniqueInput>
    connect?: Enumerable<ImageWhereUniqueInput>
    update?: Enumerable<ImageUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ImageUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ImageScalarWhereInput>
  }

  export type VideoUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<VideoCreateWithoutShowInput>, Enumerable<VideoUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<VideoCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<VideoUpsertWithWhereUniqueWithoutShowInput>
    createMany?: VideoCreateManyShowInputEnvelope
    set?: Enumerable<VideoWhereUniqueInput>
    disconnect?: Enumerable<VideoWhereUniqueInput>
    delete?: Enumerable<VideoWhereUniqueInput>
    connect?: Enumerable<VideoWhereUniqueInput>
    update?: Enumerable<VideoUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<VideoUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<VideoScalarWhereInput>
  }

  export type ShowCastUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutShowInput>, Enumerable<ShowCastUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowCastUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowCastCreateManyShowInputEnvelope
    set?: Enumerable<ShowCastWhereUniqueInput>
    disconnect?: Enumerable<ShowCastWhereUniqueInput>
    delete?: Enumerable<ShowCastWhereUniqueInput>
    connect?: Enumerable<ShowCastWhereUniqueInput>
    update?: Enumerable<ShowCastUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowCastUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowCastScalarWhereInput>
  }

  export type ShowDirectorUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutShowInput>, Enumerable<ShowDirectorUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowDirectorUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowDirectorCreateManyShowInputEnvelope
    set?: Enumerable<ShowDirectorWhereUniqueInput>
    disconnect?: Enumerable<ShowDirectorWhereUniqueInput>
    delete?: Enumerable<ShowDirectorWhereUniqueInput>
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
    update?: Enumerable<ShowDirectorUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowDirectorUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowDirectorScalarWhereInput>
  }

  export type ShowGenreUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutShowInput>, Enumerable<ShowGenreUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowGenreUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowGenreCreateManyShowInputEnvelope
    set?: Enumerable<ShowGenreWhereUniqueInput>
    disconnect?: Enumerable<ShowGenreWhereUniqueInput>
    delete?: Enumerable<ShowGenreWhereUniqueInput>
    connect?: Enumerable<ShowGenreWhereUniqueInput>
    update?: Enumerable<ShowGenreUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowGenreUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowGenreScalarWhereInput>
  }

  export type ShowLanguageUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutShowInput>, Enumerable<ShowLanguageUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowLanguageUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowLanguageCreateManyShowInputEnvelope
    set?: Enumerable<ShowLanguageWhereUniqueInput>
    disconnect?: Enumerable<ShowLanguageWhereUniqueInput>
    delete?: Enumerable<ShowLanguageWhereUniqueInput>
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
    update?: Enumerable<ShowLanguageUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowLanguageUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowLanguageScalarWhereInput>
  }

  export type ShowStudioUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutShowInput>, Enumerable<ShowStudioUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowStudioUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowStudioCreateManyShowInputEnvelope
    set?: Enumerable<ShowStudioWhereUniqueInput>
    disconnect?: Enumerable<ShowStudioWhereUniqueInput>
    delete?: Enumerable<ShowStudioWhereUniqueInput>
    connect?: Enumerable<ShowStudioWhereUniqueInput>
    update?: Enumerable<ShowStudioUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowStudioUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowStudioScalarWhereInput>
  }

  export type ShowWriterUncheckedUpdateManyWithoutShowNestedInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutShowInput>, Enumerable<ShowWriterUncheckedCreateWithoutShowInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutShowInput>
    upsert?: Enumerable<ShowWriterUpsertWithWhereUniqueWithoutShowInput>
    createMany?: ShowWriterCreateManyShowInputEnvelope
    set?: Enumerable<ShowWriterWhereUniqueInput>
    disconnect?: Enumerable<ShowWriterWhereUniqueInput>
    delete?: Enumerable<ShowWriterWhereUniqueInput>
    connect?: Enumerable<ShowWriterWhereUniqueInput>
    update?: Enumerable<ShowWriterUpdateWithWhereUniqueWithoutShowInput>
    updateMany?: Enumerable<ShowWriterUpdateManyWithWhereWithoutShowInput>
    deleteMany?: Enumerable<ShowWriterScalarWhereInput>
  }

  export type ShowCreateNestedOneWithoutImdbInput = {
    create?: XOR<ShowCreateWithoutImdbInput, ShowUncheckedCreateWithoutImdbInput>
    connectOrCreate?: ShowCreateOrConnectWithoutImdbInput
    connect?: ShowWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutImdbNestedInput = {
    create?: XOR<ShowCreateWithoutImdbInput, ShowUncheckedCreateWithoutImdbInput>
    connectOrCreate?: ShowCreateOrConnectWithoutImdbInput
    upsert?: ShowUpsertWithoutImdbInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutImdbInput, ShowUncheckedUpdateWithoutImdbInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShowCreateNestedOneWithoutMovieInput = {
    create?: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput>
    connectOrCreate?: ShowCreateOrConnectWithoutMovieInput
    connect?: ShowWhereUniqueInput
  }

  export type MovieServerCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutMovieInput>, Enumerable<MovieServerUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutMovieInput>
    createMany?: MovieServerCreateManyMovieInputEnvelope
    connect?: Enumerable<MovieServerWhereUniqueInput>
  }

  export type MovieServerUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutMovieInput>, Enumerable<MovieServerUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutMovieInput>
    createMany?: MovieServerCreateManyMovieInputEnvelope
    connect?: Enumerable<MovieServerWhereUniqueInput>
  }

  export type ShowUpdateOneRequiredWithoutMovieNestedInput = {
    create?: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput>
    connectOrCreate?: ShowCreateOrConnectWithoutMovieInput
    upsert?: ShowUpsertWithoutMovieInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutMovieInput, ShowUncheckedUpdateWithoutMovieInput>
  }

  export type MovieServerUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutMovieInput>, Enumerable<MovieServerUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<MovieServerUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: MovieServerCreateManyMovieInputEnvelope
    set?: Enumerable<MovieServerWhereUniqueInput>
    disconnect?: Enumerable<MovieServerWhereUniqueInput>
    delete?: Enumerable<MovieServerWhereUniqueInput>
    connect?: Enumerable<MovieServerWhereUniqueInput>
    update?: Enumerable<MovieServerUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<MovieServerUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<MovieServerScalarWhereInput>
  }

  export type MovieServerUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutMovieInput>, Enumerable<MovieServerUncheckedCreateWithoutMovieInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutMovieInput>
    upsert?: Enumerable<MovieServerUpsertWithWhereUniqueWithoutMovieInput>
    createMany?: MovieServerCreateManyMovieInputEnvelope
    set?: Enumerable<MovieServerWhereUniqueInput>
    disconnect?: Enumerable<MovieServerWhereUniqueInput>
    delete?: Enumerable<MovieServerWhereUniqueInput>
    connect?: Enumerable<MovieServerWhereUniqueInput>
    update?: Enumerable<MovieServerUpdateWithWhereUniqueWithoutMovieInput>
    updateMany?: Enumerable<MovieServerUpdateManyWithWhereWithoutMovieInput>
    deleteMany?: Enumerable<MovieServerScalarWhereInput>
  }

  export type ShowCreateNestedOneWithoutEpisodeInput = {
    create?: XOR<ShowCreateWithoutEpisodeInput, ShowUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: ShowCreateOrConnectWithoutEpisodeInput
    connect?: ShowWhereUniqueInput
  }

  export type SeriesServerCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutEpisodeInput>, Enumerable<SeriesServerUncheckedCreateWithoutEpisodeInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutEpisodeInput>
    createMany?: SeriesServerCreateManyEpisodeInputEnvelope
    connect?: Enumerable<SeriesServerWhereUniqueInput>
  }

  export type SeriesServerUncheckedCreateNestedManyWithoutEpisodeInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutEpisodeInput>, Enumerable<SeriesServerUncheckedCreateWithoutEpisodeInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutEpisodeInput>
    createMany?: SeriesServerCreateManyEpisodeInputEnvelope
    connect?: Enumerable<SeriesServerWhereUniqueInput>
  }

  export type ShowUpdateOneRequiredWithoutEpisodeNestedInput = {
    create?: XOR<ShowCreateWithoutEpisodeInput, ShowUncheckedCreateWithoutEpisodeInput>
    connectOrCreate?: ShowCreateOrConnectWithoutEpisodeInput
    upsert?: ShowUpsertWithoutEpisodeInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutEpisodeInput, ShowUncheckedUpdateWithoutEpisodeInput>
  }

  export type SeriesServerUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutEpisodeInput>, Enumerable<SeriesServerUncheckedCreateWithoutEpisodeInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutEpisodeInput>
    upsert?: Enumerable<SeriesServerUpsertWithWhereUniqueWithoutEpisodeInput>
    createMany?: SeriesServerCreateManyEpisodeInputEnvelope
    set?: Enumerable<SeriesServerWhereUniqueInput>
    disconnect?: Enumerable<SeriesServerWhereUniqueInput>
    delete?: Enumerable<SeriesServerWhereUniqueInput>
    connect?: Enumerable<SeriesServerWhereUniqueInput>
    update?: Enumerable<SeriesServerUpdateWithWhereUniqueWithoutEpisodeInput>
    updateMany?: Enumerable<SeriesServerUpdateManyWithWhereWithoutEpisodeInput>
    deleteMany?: Enumerable<SeriesServerScalarWhereInput>
  }

  export type SeriesServerUncheckedUpdateManyWithoutEpisodeNestedInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutEpisodeInput>, Enumerable<SeriesServerUncheckedCreateWithoutEpisodeInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutEpisodeInput>
    upsert?: Enumerable<SeriesServerUpsertWithWhereUniqueWithoutEpisodeInput>
    createMany?: SeriesServerCreateManyEpisodeInputEnvelope
    set?: Enumerable<SeriesServerWhereUniqueInput>
    disconnect?: Enumerable<SeriesServerWhereUniqueInput>
    delete?: Enumerable<SeriesServerWhereUniqueInput>
    connect?: Enumerable<SeriesServerWhereUniqueInput>
    update?: Enumerable<SeriesServerUpdateWithWhereUniqueWithoutEpisodeInput>
    updateMany?: Enumerable<SeriesServerUpdateManyWithWhereWithoutEpisodeInput>
    deleteMany?: Enumerable<SeriesServerScalarWhereInput>
  }

  export type MovieServerCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutServerInput>, Enumerable<MovieServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutServerInput>
    createMany?: MovieServerCreateManyServerInputEnvelope
    connect?: Enumerable<MovieServerWhereUniqueInput>
  }

  export type SeriesServerCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutServerInput>, Enumerable<SeriesServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutServerInput>
    createMany?: SeriesServerCreateManyServerInputEnvelope
    connect?: Enumerable<SeriesServerWhereUniqueInput>
  }

  export type MovieServerUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutServerInput>, Enumerable<MovieServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutServerInput>
    createMany?: MovieServerCreateManyServerInputEnvelope
    connect?: Enumerable<MovieServerWhereUniqueInput>
  }

  export type SeriesServerUncheckedCreateNestedManyWithoutServerInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutServerInput>, Enumerable<SeriesServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutServerInput>
    createMany?: SeriesServerCreateManyServerInputEnvelope
    connect?: Enumerable<SeriesServerWhereUniqueInput>
  }

  export type MovieServerUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutServerInput>, Enumerable<MovieServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<MovieServerUpsertWithWhereUniqueWithoutServerInput>
    createMany?: MovieServerCreateManyServerInputEnvelope
    set?: Enumerable<MovieServerWhereUniqueInput>
    disconnect?: Enumerable<MovieServerWhereUniqueInput>
    delete?: Enumerable<MovieServerWhereUniqueInput>
    connect?: Enumerable<MovieServerWhereUniqueInput>
    update?: Enumerable<MovieServerUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<MovieServerUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<MovieServerScalarWhereInput>
  }

  export type SeriesServerUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutServerInput>, Enumerable<SeriesServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<SeriesServerUpsertWithWhereUniqueWithoutServerInput>
    createMany?: SeriesServerCreateManyServerInputEnvelope
    set?: Enumerable<SeriesServerWhereUniqueInput>
    disconnect?: Enumerable<SeriesServerWhereUniqueInput>
    delete?: Enumerable<SeriesServerWhereUniqueInput>
    connect?: Enumerable<SeriesServerWhereUniqueInput>
    update?: Enumerable<SeriesServerUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<SeriesServerUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<SeriesServerScalarWhereInput>
  }

  export type MovieServerUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<MovieServerCreateWithoutServerInput>, Enumerable<MovieServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<MovieServerCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<MovieServerUpsertWithWhereUniqueWithoutServerInput>
    createMany?: MovieServerCreateManyServerInputEnvelope
    set?: Enumerable<MovieServerWhereUniqueInput>
    disconnect?: Enumerable<MovieServerWhereUniqueInput>
    delete?: Enumerable<MovieServerWhereUniqueInput>
    connect?: Enumerable<MovieServerWhereUniqueInput>
    update?: Enumerable<MovieServerUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<MovieServerUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<MovieServerScalarWhereInput>
  }

  export type SeriesServerUncheckedUpdateManyWithoutServerNestedInput = {
    create?: XOR<Enumerable<SeriesServerCreateWithoutServerInput>, Enumerable<SeriesServerUncheckedCreateWithoutServerInput>>
    connectOrCreate?: Enumerable<SeriesServerCreateOrConnectWithoutServerInput>
    upsert?: Enumerable<SeriesServerUpsertWithWhereUniqueWithoutServerInput>
    createMany?: SeriesServerCreateManyServerInputEnvelope
    set?: Enumerable<SeriesServerWhereUniqueInput>
    disconnect?: Enumerable<SeriesServerWhereUniqueInput>
    delete?: Enumerable<SeriesServerWhereUniqueInput>
    connect?: Enumerable<SeriesServerWhereUniqueInput>
    update?: Enumerable<SeriesServerUpdateWithWhereUniqueWithoutServerInput>
    updateMany?: Enumerable<SeriesServerUpdateManyWithWhereWithoutServerInput>
    deleteMany?: Enumerable<SeriesServerScalarWhereInput>
  }

  export type ShowCastCreateNestedManyWithoutActorInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutActorInput>, Enumerable<ShowCastUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutActorInput>
    createMany?: ShowCastCreateManyActorInputEnvelope
    connect?: Enumerable<ShowCastWhereUniqueInput>
  }

  export type ShowCastUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutActorInput>, Enumerable<ShowCastUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutActorInput>
    createMany?: ShowCastCreateManyActorInputEnvelope
    connect?: Enumerable<ShowCastWhereUniqueInput>
  }

  export type ShowCastUpdateManyWithoutActorNestedInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutActorInput>, Enumerable<ShowCastUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutActorInput>
    upsert?: Enumerable<ShowCastUpsertWithWhereUniqueWithoutActorInput>
    createMany?: ShowCastCreateManyActorInputEnvelope
    set?: Enumerable<ShowCastWhereUniqueInput>
    disconnect?: Enumerable<ShowCastWhereUniqueInput>
    delete?: Enumerable<ShowCastWhereUniqueInput>
    connect?: Enumerable<ShowCastWhereUniqueInput>
    update?: Enumerable<ShowCastUpdateWithWhereUniqueWithoutActorInput>
    updateMany?: Enumerable<ShowCastUpdateManyWithWhereWithoutActorInput>
    deleteMany?: Enumerable<ShowCastScalarWhereInput>
  }

  export type ShowCastUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<Enumerable<ShowCastCreateWithoutActorInput>, Enumerable<ShowCastUncheckedCreateWithoutActorInput>>
    connectOrCreate?: Enumerable<ShowCastCreateOrConnectWithoutActorInput>
    upsert?: Enumerable<ShowCastUpsertWithWhereUniqueWithoutActorInput>
    createMany?: ShowCastCreateManyActorInputEnvelope
    set?: Enumerable<ShowCastWhereUniqueInput>
    disconnect?: Enumerable<ShowCastWhereUniqueInput>
    delete?: Enumerable<ShowCastWhereUniqueInput>
    connect?: Enumerable<ShowCastWhereUniqueInput>
    update?: Enumerable<ShowCastUpdateWithWhereUniqueWithoutActorInput>
    updateMany?: Enumerable<ShowCastUpdateManyWithWhereWithoutActorInput>
    deleteMany?: Enumerable<ShowCastScalarWhereInput>
  }

  export type ShowDirectorCreateNestedManyWithoutDirectorInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutDirectorInput>, Enumerable<ShowDirectorUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutDirectorInput>
    createMany?: ShowDirectorCreateManyDirectorInputEnvelope
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
  }

  export type ShowDirectorUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutDirectorInput>, Enumerable<ShowDirectorUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutDirectorInput>
    createMany?: ShowDirectorCreateManyDirectorInputEnvelope
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
  }

  export type ShowDirectorUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutDirectorInput>, Enumerable<ShowDirectorUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutDirectorInput>
    upsert?: Enumerable<ShowDirectorUpsertWithWhereUniqueWithoutDirectorInput>
    createMany?: ShowDirectorCreateManyDirectorInputEnvelope
    set?: Enumerable<ShowDirectorWhereUniqueInput>
    disconnect?: Enumerable<ShowDirectorWhereUniqueInput>
    delete?: Enumerable<ShowDirectorWhereUniqueInput>
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
    update?: Enumerable<ShowDirectorUpdateWithWhereUniqueWithoutDirectorInput>
    updateMany?: Enumerable<ShowDirectorUpdateManyWithWhereWithoutDirectorInput>
    deleteMany?: Enumerable<ShowDirectorScalarWhereInput>
  }

  export type ShowDirectorUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<Enumerable<ShowDirectorCreateWithoutDirectorInput>, Enumerable<ShowDirectorUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<ShowDirectorCreateOrConnectWithoutDirectorInput>
    upsert?: Enumerable<ShowDirectorUpsertWithWhereUniqueWithoutDirectorInput>
    createMany?: ShowDirectorCreateManyDirectorInputEnvelope
    set?: Enumerable<ShowDirectorWhereUniqueInput>
    disconnect?: Enumerable<ShowDirectorWhereUniqueInput>
    delete?: Enumerable<ShowDirectorWhereUniqueInput>
    connect?: Enumerable<ShowDirectorWhereUniqueInput>
    update?: Enumerable<ShowDirectorUpdateWithWhereUniqueWithoutDirectorInput>
    updateMany?: Enumerable<ShowDirectorUpdateManyWithWhereWithoutDirectorInput>
    deleteMany?: Enumerable<ShowDirectorScalarWhereInput>
  }

  export type ShowGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutGenreInput>, Enumerable<ShowGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutGenreInput>
    createMany?: ShowGenreCreateManyGenreInputEnvelope
    connect?: Enumerable<ShowGenreWhereUniqueInput>
  }

  export type ShowGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutGenreInput>, Enumerable<ShowGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutGenreInput>
    createMany?: ShowGenreCreateManyGenreInputEnvelope
    connect?: Enumerable<ShowGenreWhereUniqueInput>
  }

  export type ShowGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutGenreInput>, Enumerable<ShowGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<ShowGenreUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: ShowGenreCreateManyGenreInputEnvelope
    set?: Enumerable<ShowGenreWhereUniqueInput>
    disconnect?: Enumerable<ShowGenreWhereUniqueInput>
    delete?: Enumerable<ShowGenreWhereUniqueInput>
    connect?: Enumerable<ShowGenreWhereUniqueInput>
    update?: Enumerable<ShowGenreUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<ShowGenreUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<ShowGenreScalarWhereInput>
  }

  export type ShowGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<Enumerable<ShowGenreCreateWithoutGenreInput>, Enumerable<ShowGenreUncheckedCreateWithoutGenreInput>>
    connectOrCreate?: Enumerable<ShowGenreCreateOrConnectWithoutGenreInput>
    upsert?: Enumerable<ShowGenreUpsertWithWhereUniqueWithoutGenreInput>
    createMany?: ShowGenreCreateManyGenreInputEnvelope
    set?: Enumerable<ShowGenreWhereUniqueInput>
    disconnect?: Enumerable<ShowGenreWhereUniqueInput>
    delete?: Enumerable<ShowGenreWhereUniqueInput>
    connect?: Enumerable<ShowGenreWhereUniqueInput>
    update?: Enumerable<ShowGenreUpdateWithWhereUniqueWithoutGenreInput>
    updateMany?: Enumerable<ShowGenreUpdateManyWithWhereWithoutGenreInput>
    deleteMany?: Enumerable<ShowGenreScalarWhereInput>
  }

  export type ShowLanguageCreateNestedManyWithoutLanguageInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutLanguageInput>, Enumerable<ShowLanguageUncheckedCreateWithoutLanguageInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutLanguageInput>
    createMany?: ShowLanguageCreateManyLanguageInputEnvelope
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
  }

  export type ShowLanguageUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutLanguageInput>, Enumerable<ShowLanguageUncheckedCreateWithoutLanguageInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutLanguageInput>
    createMany?: ShowLanguageCreateManyLanguageInputEnvelope
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
  }

  export type ShowLanguageUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutLanguageInput>, Enumerable<ShowLanguageUncheckedCreateWithoutLanguageInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutLanguageInput>
    upsert?: Enumerable<ShowLanguageUpsertWithWhereUniqueWithoutLanguageInput>
    createMany?: ShowLanguageCreateManyLanguageInputEnvelope
    set?: Enumerable<ShowLanguageWhereUniqueInput>
    disconnect?: Enumerable<ShowLanguageWhereUniqueInput>
    delete?: Enumerable<ShowLanguageWhereUniqueInput>
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
    update?: Enumerable<ShowLanguageUpdateWithWhereUniqueWithoutLanguageInput>
    updateMany?: Enumerable<ShowLanguageUpdateManyWithWhereWithoutLanguageInput>
    deleteMany?: Enumerable<ShowLanguageScalarWhereInput>
  }

  export type ShowLanguageUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<Enumerable<ShowLanguageCreateWithoutLanguageInput>, Enumerable<ShowLanguageUncheckedCreateWithoutLanguageInput>>
    connectOrCreate?: Enumerable<ShowLanguageCreateOrConnectWithoutLanguageInput>
    upsert?: Enumerable<ShowLanguageUpsertWithWhereUniqueWithoutLanguageInput>
    createMany?: ShowLanguageCreateManyLanguageInputEnvelope
    set?: Enumerable<ShowLanguageWhereUniqueInput>
    disconnect?: Enumerable<ShowLanguageWhereUniqueInput>
    delete?: Enumerable<ShowLanguageWhereUniqueInput>
    connect?: Enumerable<ShowLanguageWhereUniqueInput>
    update?: Enumerable<ShowLanguageUpdateWithWhereUniqueWithoutLanguageInput>
    updateMany?: Enumerable<ShowLanguageUpdateManyWithWhereWithoutLanguageInput>
    deleteMany?: Enumerable<ShowLanguageScalarWhereInput>
  }

  export type ShowStudioCreateNestedManyWithoutStudioInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutStudioInput>, Enumerable<ShowStudioUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutStudioInput>
    createMany?: ShowStudioCreateManyStudioInputEnvelope
    connect?: Enumerable<ShowStudioWhereUniqueInput>
  }

  export type ShowStudioUncheckedCreateNestedManyWithoutStudioInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutStudioInput>, Enumerable<ShowStudioUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutStudioInput>
    createMany?: ShowStudioCreateManyStudioInputEnvelope
    connect?: Enumerable<ShowStudioWhereUniqueInput>
  }

  export type ShowStudioUpdateManyWithoutStudioNestedInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutStudioInput>, Enumerable<ShowStudioUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutStudioInput>
    upsert?: Enumerable<ShowStudioUpsertWithWhereUniqueWithoutStudioInput>
    createMany?: ShowStudioCreateManyStudioInputEnvelope
    set?: Enumerable<ShowStudioWhereUniqueInput>
    disconnect?: Enumerable<ShowStudioWhereUniqueInput>
    delete?: Enumerable<ShowStudioWhereUniqueInput>
    connect?: Enumerable<ShowStudioWhereUniqueInput>
    update?: Enumerable<ShowStudioUpdateWithWhereUniqueWithoutStudioInput>
    updateMany?: Enumerable<ShowStudioUpdateManyWithWhereWithoutStudioInput>
    deleteMany?: Enumerable<ShowStudioScalarWhereInput>
  }

  export type ShowStudioUncheckedUpdateManyWithoutStudioNestedInput = {
    create?: XOR<Enumerable<ShowStudioCreateWithoutStudioInput>, Enumerable<ShowStudioUncheckedCreateWithoutStudioInput>>
    connectOrCreate?: Enumerable<ShowStudioCreateOrConnectWithoutStudioInput>
    upsert?: Enumerable<ShowStudioUpsertWithWhereUniqueWithoutStudioInput>
    createMany?: ShowStudioCreateManyStudioInputEnvelope
    set?: Enumerable<ShowStudioWhereUniqueInput>
    disconnect?: Enumerable<ShowStudioWhereUniqueInput>
    delete?: Enumerable<ShowStudioWhereUniqueInput>
    connect?: Enumerable<ShowStudioWhereUniqueInput>
    update?: Enumerable<ShowStudioUpdateWithWhereUniqueWithoutStudioInput>
    updateMany?: Enumerable<ShowStudioUpdateManyWithWhereWithoutStudioInput>
    deleteMany?: Enumerable<ShowStudioScalarWhereInput>
  }

  export type ShowWriterCreateNestedManyWithoutWriterInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutWriterInput>, Enumerable<ShowWriterUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutWriterInput>
    createMany?: ShowWriterCreateManyWriterInputEnvelope
    connect?: Enumerable<ShowWriterWhereUniqueInput>
  }

  export type ShowWriterUncheckedCreateNestedManyWithoutWriterInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutWriterInput>, Enumerable<ShowWriterUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutWriterInput>
    createMany?: ShowWriterCreateManyWriterInputEnvelope
    connect?: Enumerable<ShowWriterWhereUniqueInput>
  }

  export type ShowWriterUpdateManyWithoutWriterNestedInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutWriterInput>, Enumerable<ShowWriterUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutWriterInput>
    upsert?: Enumerable<ShowWriterUpsertWithWhereUniqueWithoutWriterInput>
    createMany?: ShowWriterCreateManyWriterInputEnvelope
    set?: Enumerable<ShowWriterWhereUniqueInput>
    disconnect?: Enumerable<ShowWriterWhereUniqueInput>
    delete?: Enumerable<ShowWriterWhereUniqueInput>
    connect?: Enumerable<ShowWriterWhereUniqueInput>
    update?: Enumerable<ShowWriterUpdateWithWhereUniqueWithoutWriterInput>
    updateMany?: Enumerable<ShowWriterUpdateManyWithWhereWithoutWriterInput>
    deleteMany?: Enumerable<ShowWriterScalarWhereInput>
  }

  export type ShowWriterUncheckedUpdateManyWithoutWriterNestedInput = {
    create?: XOR<Enumerable<ShowWriterCreateWithoutWriterInput>, Enumerable<ShowWriterUncheckedCreateWithoutWriterInput>>
    connectOrCreate?: Enumerable<ShowWriterCreateOrConnectWithoutWriterInput>
    upsert?: Enumerable<ShowWriterUpsertWithWhereUniqueWithoutWriterInput>
    createMany?: ShowWriterCreateManyWriterInputEnvelope
    set?: Enumerable<ShowWriterWhereUniqueInput>
    disconnect?: Enumerable<ShowWriterWhereUniqueInput>
    delete?: Enumerable<ShowWriterWhereUniqueInput>
    connect?: Enumerable<ShowWriterWhereUniqueInput>
    update?: Enumerable<ShowWriterUpdateWithWhereUniqueWithoutWriterInput>
    updateMany?: Enumerable<ShowWriterUpdateManyWithWhereWithoutWriterInput>
    deleteMany?: Enumerable<ShowWriterScalarWhereInput>
  }

  export type ShowCreateNestedOneWithoutVideoInput = {
    create?: XOR<ShowCreateWithoutVideoInput, ShowUncheckedCreateWithoutVideoInput>
    connectOrCreate?: ShowCreateOrConnectWithoutVideoInput
    connect?: ShowWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutVideoNestedInput = {
    create?: XOR<ShowCreateWithoutVideoInput, ShowUncheckedCreateWithoutVideoInput>
    connectOrCreate?: ShowCreateOrConnectWithoutVideoInput
    upsert?: ShowUpsertWithoutVideoInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutVideoInput, ShowUncheckedUpdateWithoutVideoInput>
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ShowCreateNestedOneWithoutImageInput = {
    create?: XOR<ShowCreateWithoutImageInput, ShowUncheckedCreateWithoutImageInput>
    connectOrCreate?: ShowCreateOrConnectWithoutImageInput
    connect?: ShowWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<ShowCreateWithoutImageInput, ShowUncheckedCreateWithoutImageInput>
    connectOrCreate?: ShowCreateOrConnectWithoutImageInput
    upsert?: ShowUpsertWithoutImageInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutImageInput, ShowUncheckedUpdateWithoutImageInput>
  }

  export type MovieCreateNestedOneWithoutMovieServerInput = {
    create?: XOR<MovieCreateWithoutMovieServerInput, MovieUncheckedCreateWithoutMovieServerInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieServerInput
    connect?: MovieWhereUniqueInput
  }

  export type ServerCreateNestedOneWithoutMovieServerInput = {
    create?: XOR<ServerCreateWithoutMovieServerInput, ServerUncheckedCreateWithoutMovieServerInput>
    connectOrCreate?: ServerCreateOrConnectWithoutMovieServerInput
    connect?: ServerWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutMovieServerNestedInput = {
    create?: XOR<MovieCreateWithoutMovieServerInput, MovieUncheckedCreateWithoutMovieServerInput>
    connectOrCreate?: MovieCreateOrConnectWithoutMovieServerInput
    upsert?: MovieUpsertWithoutMovieServerInput
    connect?: MovieWhereUniqueInput
    update?: XOR<MovieUpdateWithoutMovieServerInput, MovieUncheckedUpdateWithoutMovieServerInput>
  }

  export type ServerUpdateOneRequiredWithoutMovieServerNestedInput = {
    create?: XOR<ServerCreateWithoutMovieServerInput, ServerUncheckedCreateWithoutMovieServerInput>
    connectOrCreate?: ServerCreateOrConnectWithoutMovieServerInput
    upsert?: ServerUpsertWithoutMovieServerInput
    connect?: ServerWhereUniqueInput
    update?: XOR<ServerUpdateWithoutMovieServerInput, ServerUncheckedUpdateWithoutMovieServerInput>
  }

  export type EpisodeCreateNestedOneWithoutSeriesServerInput = {
    create?: XOR<EpisodeCreateWithoutSeriesServerInput, EpisodeUncheckedCreateWithoutSeriesServerInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesServerInput
    connect?: EpisodeWhereUniqueInput
  }

  export type ServerCreateNestedOneWithoutSeriesServerInput = {
    create?: XOR<ServerCreateWithoutSeriesServerInput, ServerUncheckedCreateWithoutSeriesServerInput>
    connectOrCreate?: ServerCreateOrConnectWithoutSeriesServerInput
    connect?: ServerWhereUniqueInput
  }

  export type EpisodeUpdateOneRequiredWithoutSeriesServerNestedInput = {
    create?: XOR<EpisodeCreateWithoutSeriesServerInput, EpisodeUncheckedCreateWithoutSeriesServerInput>
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeriesServerInput
    upsert?: EpisodeUpsertWithoutSeriesServerInput
    connect?: EpisodeWhereUniqueInput
    update?: XOR<EpisodeUpdateWithoutSeriesServerInput, EpisodeUncheckedUpdateWithoutSeriesServerInput>
  }

  export type ServerUpdateOneRequiredWithoutSeriesServerNestedInput = {
    create?: XOR<ServerCreateWithoutSeriesServerInput, ServerUncheckedCreateWithoutSeriesServerInput>
    connectOrCreate?: ServerCreateOrConnectWithoutSeriesServerInput
    upsert?: ServerUpsertWithoutSeriesServerInput
    connect?: ServerWhereUniqueInput
    update?: XOR<ServerUpdateWithoutSeriesServerInput, ServerUncheckedUpdateWithoutSeriesServerInput>
  }

  export type ShowCreateNestedOneWithoutShowCastInput = {
    create?: XOR<ShowCreateWithoutShowCastInput, ShowUncheckedCreateWithoutShowCastInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowCastInput
    connect?: ShowWhereUniqueInput
  }

  export type ActorCreateNestedOneWithoutMovieCastInput = {
    create?: XOR<ActorCreateWithoutMovieCastInput, ActorUncheckedCreateWithoutMovieCastInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMovieCastInput
    connect?: ActorWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutShowCastNestedInput = {
    create?: XOR<ShowCreateWithoutShowCastInput, ShowUncheckedCreateWithoutShowCastInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowCastInput
    upsert?: ShowUpsertWithoutShowCastInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutShowCastInput, ShowUncheckedUpdateWithoutShowCastInput>
  }

  export type ActorUpdateOneRequiredWithoutMovieCastNestedInput = {
    create?: XOR<ActorCreateWithoutMovieCastInput, ActorUncheckedCreateWithoutMovieCastInput>
    connectOrCreate?: ActorCreateOrConnectWithoutMovieCastInput
    upsert?: ActorUpsertWithoutMovieCastInput
    connect?: ActorWhereUniqueInput
    update?: XOR<ActorUpdateWithoutMovieCastInput, ActorUncheckedUpdateWithoutMovieCastInput>
  }

  export type ShowCreateNestedOneWithoutShowDirectorInput = {
    create?: XOR<ShowCreateWithoutShowDirectorInput, ShowUncheckedCreateWithoutShowDirectorInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowDirectorInput
    connect?: ShowWhereUniqueInput
  }

  export type DirectorCreateNestedOneWithoutShowDirectorInput = {
    create?: XOR<DirectorCreateWithoutShowDirectorInput, DirectorUncheckedCreateWithoutShowDirectorInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutShowDirectorInput
    connect?: DirectorWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutShowDirectorNestedInput = {
    create?: XOR<ShowCreateWithoutShowDirectorInput, ShowUncheckedCreateWithoutShowDirectorInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowDirectorInput
    upsert?: ShowUpsertWithoutShowDirectorInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutShowDirectorInput, ShowUncheckedUpdateWithoutShowDirectorInput>
  }

  export type DirectorUpdateOneRequiredWithoutShowDirectorNestedInput = {
    create?: XOR<DirectorCreateWithoutShowDirectorInput, DirectorUncheckedCreateWithoutShowDirectorInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutShowDirectorInput
    upsert?: DirectorUpsertWithoutShowDirectorInput
    connect?: DirectorWhereUniqueInput
    update?: XOR<DirectorUpdateWithoutShowDirectorInput, DirectorUncheckedUpdateWithoutShowDirectorInput>
  }

  export type ShowCreateNestedOneWithoutShowGenreInput = {
    create?: XOR<ShowCreateWithoutShowGenreInput, ShowUncheckedCreateWithoutShowGenreInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowGenreInput
    connect?: ShowWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutShowGenreInput = {
    create?: XOR<GenreCreateWithoutShowGenreInput, GenreUncheckedCreateWithoutShowGenreInput>
    connectOrCreate?: GenreCreateOrConnectWithoutShowGenreInput
    connect?: GenreWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutShowGenreNestedInput = {
    create?: XOR<ShowCreateWithoutShowGenreInput, ShowUncheckedCreateWithoutShowGenreInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowGenreInput
    upsert?: ShowUpsertWithoutShowGenreInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutShowGenreInput, ShowUncheckedUpdateWithoutShowGenreInput>
  }

  export type GenreUpdateOneRequiredWithoutShowGenreNestedInput = {
    create?: XOR<GenreCreateWithoutShowGenreInput, GenreUncheckedCreateWithoutShowGenreInput>
    connectOrCreate?: GenreCreateOrConnectWithoutShowGenreInput
    upsert?: GenreUpsertWithoutShowGenreInput
    connect?: GenreWhereUniqueInput
    update?: XOR<GenreUpdateWithoutShowGenreInput, GenreUncheckedUpdateWithoutShowGenreInput>
  }

  export type ShowCreateNestedOneWithoutShowLanguageInput = {
    create?: XOR<ShowCreateWithoutShowLanguageInput, ShowUncheckedCreateWithoutShowLanguageInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowLanguageInput
    connect?: ShowWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutShowLanguageInput = {
    create?: XOR<LanguageCreateWithoutShowLanguageInput, LanguageUncheckedCreateWithoutShowLanguageInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutShowLanguageInput
    connect?: LanguageWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutShowLanguageNestedInput = {
    create?: XOR<ShowCreateWithoutShowLanguageInput, ShowUncheckedCreateWithoutShowLanguageInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowLanguageInput
    upsert?: ShowUpsertWithoutShowLanguageInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutShowLanguageInput, ShowUncheckedUpdateWithoutShowLanguageInput>
  }

  export type LanguageUpdateOneRequiredWithoutShowLanguageNestedInput = {
    create?: XOR<LanguageCreateWithoutShowLanguageInput, LanguageUncheckedCreateWithoutShowLanguageInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutShowLanguageInput
    upsert?: LanguageUpsertWithoutShowLanguageInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<LanguageUpdateWithoutShowLanguageInput, LanguageUncheckedUpdateWithoutShowLanguageInput>
  }

  export type ShowCreateNestedOneWithoutShowStudioInput = {
    create?: XOR<ShowCreateWithoutShowStudioInput, ShowUncheckedCreateWithoutShowStudioInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowStudioInput
    connect?: ShowWhereUniqueInput
  }

  export type StudioCreateNestedOneWithoutShowStudioInput = {
    create?: XOR<StudioCreateWithoutShowStudioInput, StudioUncheckedCreateWithoutShowStudioInput>
    connectOrCreate?: StudioCreateOrConnectWithoutShowStudioInput
    connect?: StudioWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutShowStudioNestedInput = {
    create?: XOR<ShowCreateWithoutShowStudioInput, ShowUncheckedCreateWithoutShowStudioInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowStudioInput
    upsert?: ShowUpsertWithoutShowStudioInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutShowStudioInput, ShowUncheckedUpdateWithoutShowStudioInput>
  }

  export type StudioUpdateOneRequiredWithoutShowStudioNestedInput = {
    create?: XOR<StudioCreateWithoutShowStudioInput, StudioUncheckedCreateWithoutShowStudioInput>
    connectOrCreate?: StudioCreateOrConnectWithoutShowStudioInput
    upsert?: StudioUpsertWithoutShowStudioInput
    connect?: StudioWhereUniqueInput
    update?: XOR<StudioUpdateWithoutShowStudioInput, StudioUncheckedUpdateWithoutShowStudioInput>
  }

  export type ShowCreateNestedOneWithoutShowWriterInput = {
    create?: XOR<ShowCreateWithoutShowWriterInput, ShowUncheckedCreateWithoutShowWriterInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowWriterInput
    connect?: ShowWhereUniqueInput
  }

  export type WriterCreateNestedOneWithoutShowWriterInput = {
    create?: XOR<WriterCreateWithoutShowWriterInput, WriterUncheckedCreateWithoutShowWriterInput>
    connectOrCreate?: WriterCreateOrConnectWithoutShowWriterInput
    connect?: WriterWhereUniqueInput
  }

  export type ShowUpdateOneRequiredWithoutShowWriterNestedInput = {
    create?: XOR<ShowCreateWithoutShowWriterInput, ShowUncheckedCreateWithoutShowWriterInput>
    connectOrCreate?: ShowCreateOrConnectWithoutShowWriterInput
    upsert?: ShowUpsertWithoutShowWriterInput
    connect?: ShowWhereUniqueInput
    update?: XOR<ShowUpdateWithoutShowWriterInput, ShowUncheckedUpdateWithoutShowWriterInput>
  }

  export type WriterUpdateOneRequiredWithoutShowWriterNestedInput = {
    create?: XOR<WriterCreateWithoutShowWriterInput, WriterUncheckedCreateWithoutShowWriterInput>
    connectOrCreate?: WriterCreateOrConnectWithoutShowWriterInput
    upsert?: WriterUpsertWithoutShowWriterInput
    connect?: WriterWhereUniqueInput
    update?: XOR<WriterUpdateWithoutShowWriterInput, WriterUncheckedUpdateWithoutShowWriterInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ImdbCreateWithoutShowInput = {
    imdbId: string
    rating?: number | null
    voteCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImdbUncheckedCreateWithoutShowInput = {
    imdbId: string
    rating?: number | null
    voteCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImdbCreateOrConnectWithoutShowInput = {
    where: ImdbWhereUniqueInput
    create: XOR<ImdbCreateWithoutShowInput, ImdbUncheckedCreateWithoutShowInput>
  }

  export type MovieCreateWithoutShowInput = {
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutShowInput = {
    movieId?: number
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutShowInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutShowInput, MovieUncheckedCreateWithoutShowInput>
  }

  export type EpisodeCreateWithoutShowInput = {
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SeriesServer?: SeriesServerCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeUncheckedCreateWithoutShowInput = {
    episodeId?: number
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SeriesServer?: SeriesServerUncheckedCreateNestedManyWithoutEpisodeInput
  }

  export type EpisodeCreateOrConnectWithoutShowInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput>
  }

  export type EpisodeCreateManyShowInputEnvelope = {
    data: Enumerable<EpisodeCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ImageCreateWithoutShowInput = {
    url: string
    type?: string | null
    height?: number | null
    width?: number | null
    aspectRatio?: number | null
    language?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageUncheckedCreateWithoutShowInput = {
    imageId?: number
    url: string
    type?: string | null
    height?: number | null
    width?: number | null
    aspectRatio?: number | null
    language?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateOrConnectWithoutShowInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutShowInput, ImageUncheckedCreateWithoutShowInput>
  }

  export type ImageCreateManyShowInputEnvelope = {
    data: Enumerable<ImageCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type VideoCreateWithoutShowInput = {
    name?: string | null
    url: string
    site?: string | null
    quality?: number | null
    type?: string | null
    official?: boolean | null
    language?: string | null
    isDefault?: boolean
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoUncheckedCreateWithoutShowInput = {
    videoId?: number
    name?: string | null
    url: string
    site?: string | null
    quality?: number | null
    type?: string | null
    official?: boolean | null
    language?: string | null
    isDefault?: boolean
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateOrConnectWithoutShowInput = {
    where: VideoWhereUniqueInput
    create: XOR<VideoCreateWithoutShowInput, VideoUncheckedCreateWithoutShowInput>
  }

  export type VideoCreateManyShowInputEnvelope = {
    data: Enumerable<VideoCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ShowCastCreateWithoutShowInput = {
    actor: ActorCreateNestedOneWithoutMovieCastInput
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastUncheckedCreateWithoutShowInput = {
    actorId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastCreateOrConnectWithoutShowInput = {
    where: ShowCastWhereUniqueInput
    create: XOR<ShowCastCreateWithoutShowInput, ShowCastUncheckedCreateWithoutShowInput>
  }

  export type ShowCastCreateManyShowInputEnvelope = {
    data: Enumerable<ShowCastCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ShowDirectorCreateWithoutShowInput = {
    director: DirectorCreateNestedOneWithoutShowDirectorInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorUncheckedCreateWithoutShowInput = {
    directorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorCreateOrConnectWithoutShowInput = {
    where: ShowDirectorWhereUniqueInput
    create: XOR<ShowDirectorCreateWithoutShowInput, ShowDirectorUncheckedCreateWithoutShowInput>
  }

  export type ShowDirectorCreateManyShowInputEnvelope = {
    data: Enumerable<ShowDirectorCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ShowGenreCreateWithoutShowInput = {
    genre: GenreCreateNestedOneWithoutShowGenreInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreUncheckedCreateWithoutShowInput = {
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreCreateOrConnectWithoutShowInput = {
    where: ShowGenreWhereUniqueInput
    create: XOR<ShowGenreCreateWithoutShowInput, ShowGenreUncheckedCreateWithoutShowInput>
  }

  export type ShowGenreCreateManyShowInputEnvelope = {
    data: Enumerable<ShowGenreCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ShowLanguageCreateWithoutShowInput = {
    language: LanguageCreateNestedOneWithoutShowLanguageInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageUncheckedCreateWithoutShowInput = {
    languageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageCreateOrConnectWithoutShowInput = {
    where: ShowLanguageWhereUniqueInput
    create: XOR<ShowLanguageCreateWithoutShowInput, ShowLanguageUncheckedCreateWithoutShowInput>
  }

  export type ShowLanguageCreateManyShowInputEnvelope = {
    data: Enumerable<ShowLanguageCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ShowStudioCreateWithoutShowInput = {
    studio: StudioCreateNestedOneWithoutShowStudioInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioUncheckedCreateWithoutShowInput = {
    studioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioCreateOrConnectWithoutShowInput = {
    where: ShowStudioWhereUniqueInput
    create: XOR<ShowStudioCreateWithoutShowInput, ShowStudioUncheckedCreateWithoutShowInput>
  }

  export type ShowStudioCreateManyShowInputEnvelope = {
    data: Enumerable<ShowStudioCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ShowWriterCreateWithoutShowInput = {
    writer: WriterCreateNestedOneWithoutShowWriterInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterUncheckedCreateWithoutShowInput = {
    writerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterCreateOrConnectWithoutShowInput = {
    where: ShowWriterWhereUniqueInput
    create: XOR<ShowWriterCreateWithoutShowInput, ShowWriterUncheckedCreateWithoutShowInput>
  }

  export type ShowWriterCreateManyShowInputEnvelope = {
    data: Enumerable<ShowWriterCreateManyShowInput>
    skipDuplicates?: boolean
  }

  export type ImdbUpsertWithoutShowInput = {
    update: XOR<ImdbUpdateWithoutShowInput, ImdbUncheckedUpdateWithoutShowInput>
    create: XOR<ImdbCreateWithoutShowInput, ImdbUncheckedCreateWithoutShowInput>
  }

  export type ImdbUpdateWithoutShowInput = {
    imdbId?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    voteCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImdbUncheckedUpdateWithoutShowInput = {
    imdbId?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    voteCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUpsertWithoutShowInput = {
    update: XOR<MovieUpdateWithoutShowInput, MovieUncheckedUpdateWithoutShowInput>
    create: XOR<MovieCreateWithoutShowInput, MovieUncheckedCreateWithoutShowInput>
  }

  export type MovieUpdateWithoutShowInput = {
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutShowInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type EpisodeUpsertWithWhereUniqueWithoutShowInput = {
    where: EpisodeWhereUniqueInput
    update: XOR<EpisodeUpdateWithoutShowInput, EpisodeUncheckedUpdateWithoutShowInput>
    create: XOR<EpisodeCreateWithoutShowInput, EpisodeUncheckedCreateWithoutShowInput>
  }

  export type EpisodeUpdateWithWhereUniqueWithoutShowInput = {
    where: EpisodeWhereUniqueInput
    data: XOR<EpisodeUpdateWithoutShowInput, EpisodeUncheckedUpdateWithoutShowInput>
  }

  export type EpisodeUpdateManyWithWhereWithoutShowInput = {
    where: EpisodeScalarWhereInput
    data: XOR<EpisodeUpdateManyMutationInput, EpisodeUncheckedUpdateManyWithoutEpisodeInput>
  }

  export type EpisodeScalarWhereInput = {
    AND?: Enumerable<EpisodeScalarWhereInput>
    OR?: Enumerable<EpisodeScalarWhereInput>
    NOT?: Enumerable<EpisodeScalarWhereInput>
    episodeId?: IntFilter | number
    showId?: IntFilter | number
    season?: IntFilter | number
    number?: IntFilter | number
    name?: StringNullableFilter | string | null
    poster?: StringNullableFilter | string | null
    summary?: StringNullableFilter | string | null
    releaseYear?: IntNullableFilter | number | null
    length?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutShowInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutShowInput, ImageUncheckedUpdateWithoutShowInput>
    create: XOR<ImageCreateWithoutShowInput, ImageUncheckedCreateWithoutShowInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutShowInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutShowInput, ImageUncheckedUpdateWithoutShowInput>
  }

  export type ImageUpdateManyWithWhereWithoutShowInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutImageInput>
  }

  export type ImageScalarWhereInput = {
    AND?: Enumerable<ImageScalarWhereInput>
    OR?: Enumerable<ImageScalarWhereInput>
    NOT?: Enumerable<ImageScalarWhereInput>
    imageId?: IntFilter | number
    showId?: IntFilter | number
    url?: StringFilter | string
    type?: StringNullableFilter | string | null
    height?: IntNullableFilter | number | null
    width?: IntNullableFilter | number | null
    aspectRatio?: FloatNullableFilter | number | null
    language?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VideoUpsertWithWhereUniqueWithoutShowInput = {
    where: VideoWhereUniqueInput
    update: XOR<VideoUpdateWithoutShowInput, VideoUncheckedUpdateWithoutShowInput>
    create: XOR<VideoCreateWithoutShowInput, VideoUncheckedCreateWithoutShowInput>
  }

  export type VideoUpdateWithWhereUniqueWithoutShowInput = {
    where: VideoWhereUniqueInput
    data: XOR<VideoUpdateWithoutShowInput, VideoUncheckedUpdateWithoutShowInput>
  }

  export type VideoUpdateManyWithWhereWithoutShowInput = {
    where: VideoScalarWhereInput
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyWithoutVideoInput>
  }

  export type VideoScalarWhereInput = {
    AND?: Enumerable<VideoScalarWhereInput>
    OR?: Enumerable<VideoScalarWhereInput>
    NOT?: Enumerable<VideoScalarWhereInput>
    videoId?: IntFilter | number
    showId?: IntFilter | number
    name?: StringNullableFilter | string | null
    url?: StringFilter | string
    site?: StringNullableFilter | string | null
    quality?: IntNullableFilter | number | null
    type?: StringNullableFilter | string | null
    official?: BoolNullableFilter | boolean | null
    language?: StringNullableFilter | string | null
    isDefault?: BoolFilter | boolean
    publishedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowCastUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowCastWhereUniqueInput
    update: XOR<ShowCastUpdateWithoutShowInput, ShowCastUncheckedUpdateWithoutShowInput>
    create: XOR<ShowCastCreateWithoutShowInput, ShowCastUncheckedCreateWithoutShowInput>
  }

  export type ShowCastUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowCastWhereUniqueInput
    data: XOR<ShowCastUpdateWithoutShowInput, ShowCastUncheckedUpdateWithoutShowInput>
  }

  export type ShowCastUpdateManyWithWhereWithoutShowInput = {
    where: ShowCastScalarWhereInput
    data: XOR<ShowCastUpdateManyMutationInput, ShowCastUncheckedUpdateManyWithoutShowCastInput>
  }

  export type ShowCastScalarWhereInput = {
    AND?: Enumerable<ShowCastScalarWhereInput>
    OR?: Enumerable<ShowCastScalarWhereInput>
    NOT?: Enumerable<ShowCastScalarWhereInput>
    showId?: IntFilter | number
    actorId?: IntFilter | number
    role?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowDirectorUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowDirectorWhereUniqueInput
    update: XOR<ShowDirectorUpdateWithoutShowInput, ShowDirectorUncheckedUpdateWithoutShowInput>
    create: XOR<ShowDirectorCreateWithoutShowInput, ShowDirectorUncheckedCreateWithoutShowInput>
  }

  export type ShowDirectorUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowDirectorWhereUniqueInput
    data: XOR<ShowDirectorUpdateWithoutShowInput, ShowDirectorUncheckedUpdateWithoutShowInput>
  }

  export type ShowDirectorUpdateManyWithWhereWithoutShowInput = {
    where: ShowDirectorScalarWhereInput
    data: XOR<ShowDirectorUpdateManyMutationInput, ShowDirectorUncheckedUpdateManyWithoutShowDirectorInput>
  }

  export type ShowDirectorScalarWhereInput = {
    AND?: Enumerable<ShowDirectorScalarWhereInput>
    OR?: Enumerable<ShowDirectorScalarWhereInput>
    NOT?: Enumerable<ShowDirectorScalarWhereInput>
    showId?: IntFilter | number
    directorId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowGenreUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowGenreWhereUniqueInput
    update: XOR<ShowGenreUpdateWithoutShowInput, ShowGenreUncheckedUpdateWithoutShowInput>
    create: XOR<ShowGenreCreateWithoutShowInput, ShowGenreUncheckedCreateWithoutShowInput>
  }

  export type ShowGenreUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowGenreWhereUniqueInput
    data: XOR<ShowGenreUpdateWithoutShowInput, ShowGenreUncheckedUpdateWithoutShowInput>
  }

  export type ShowGenreUpdateManyWithWhereWithoutShowInput = {
    where: ShowGenreScalarWhereInput
    data: XOR<ShowGenreUpdateManyMutationInput, ShowGenreUncheckedUpdateManyWithoutShowGenreInput>
  }

  export type ShowGenreScalarWhereInput = {
    AND?: Enumerable<ShowGenreScalarWhereInput>
    OR?: Enumerable<ShowGenreScalarWhereInput>
    NOT?: Enumerable<ShowGenreScalarWhereInput>
    showId?: IntFilter | number
    genreId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowLanguageUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowLanguageWhereUniqueInput
    update: XOR<ShowLanguageUpdateWithoutShowInput, ShowLanguageUncheckedUpdateWithoutShowInput>
    create: XOR<ShowLanguageCreateWithoutShowInput, ShowLanguageUncheckedCreateWithoutShowInput>
  }

  export type ShowLanguageUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowLanguageWhereUniqueInput
    data: XOR<ShowLanguageUpdateWithoutShowInput, ShowLanguageUncheckedUpdateWithoutShowInput>
  }

  export type ShowLanguageUpdateManyWithWhereWithoutShowInput = {
    where: ShowLanguageScalarWhereInput
    data: XOR<ShowLanguageUpdateManyMutationInput, ShowLanguageUncheckedUpdateManyWithoutShowLanguageInput>
  }

  export type ShowLanguageScalarWhereInput = {
    AND?: Enumerable<ShowLanguageScalarWhereInput>
    OR?: Enumerable<ShowLanguageScalarWhereInput>
    NOT?: Enumerable<ShowLanguageScalarWhereInput>
    showId?: IntFilter | number
    languageId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowStudioUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowStudioWhereUniqueInput
    update: XOR<ShowStudioUpdateWithoutShowInput, ShowStudioUncheckedUpdateWithoutShowInput>
    create: XOR<ShowStudioCreateWithoutShowInput, ShowStudioUncheckedCreateWithoutShowInput>
  }

  export type ShowStudioUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowStudioWhereUniqueInput
    data: XOR<ShowStudioUpdateWithoutShowInput, ShowStudioUncheckedUpdateWithoutShowInput>
  }

  export type ShowStudioUpdateManyWithWhereWithoutShowInput = {
    where: ShowStudioScalarWhereInput
    data: XOR<ShowStudioUpdateManyMutationInput, ShowStudioUncheckedUpdateManyWithoutShowStudioInput>
  }

  export type ShowStudioScalarWhereInput = {
    AND?: Enumerable<ShowStudioScalarWhereInput>
    OR?: Enumerable<ShowStudioScalarWhereInput>
    NOT?: Enumerable<ShowStudioScalarWhereInput>
    showId?: IntFilter | number
    studioId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowWriterUpsertWithWhereUniqueWithoutShowInput = {
    where: ShowWriterWhereUniqueInput
    update: XOR<ShowWriterUpdateWithoutShowInput, ShowWriterUncheckedUpdateWithoutShowInput>
    create: XOR<ShowWriterCreateWithoutShowInput, ShowWriterUncheckedCreateWithoutShowInput>
  }

  export type ShowWriterUpdateWithWhereUniqueWithoutShowInput = {
    where: ShowWriterWhereUniqueInput
    data: XOR<ShowWriterUpdateWithoutShowInput, ShowWriterUncheckedUpdateWithoutShowInput>
  }

  export type ShowWriterUpdateManyWithWhereWithoutShowInput = {
    where: ShowWriterScalarWhereInput
    data: XOR<ShowWriterUpdateManyMutationInput, ShowWriterUncheckedUpdateManyWithoutShowWriterInput>
  }

  export type ShowWriterScalarWhereInput = {
    AND?: Enumerable<ShowWriterScalarWhereInput>
    OR?: Enumerable<ShowWriterScalarWhereInput>
    NOT?: Enumerable<ShowWriterScalarWhereInput>
    showId?: IntFilter | number
    writerId?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowCreateWithoutImdbInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutImdbInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutImdbInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutImdbInput, ShowUncheckedCreateWithoutImdbInput>
  }

  export type ShowUpsertWithoutImdbInput = {
    update: XOR<ShowUpdateWithoutImdbInput, ShowUncheckedUpdateWithoutImdbInput>
    create: XOR<ShowCreateWithoutImdbInput, ShowUncheckedCreateWithoutImdbInput>
  }

  export type ShowUpdateWithoutImdbInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutImdbInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateWithoutMovieInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutMovieInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutMovieInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput>
  }

  export type MovieServerCreateWithoutMovieInput = {
    server: ServerCreateNestedOneWithoutMovieServerInput
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUncheckedCreateWithoutMovieInput = {
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerCreateOrConnectWithoutMovieInput = {
    where: MovieServerWhereUniqueInput
    create: XOR<MovieServerCreateWithoutMovieInput, MovieServerUncheckedCreateWithoutMovieInput>
  }

  export type MovieServerCreateManyMovieInputEnvelope = {
    data: Enumerable<MovieServerCreateManyMovieInput>
    skipDuplicates?: boolean
  }

  export type ShowUpsertWithoutMovieInput = {
    update: XOR<ShowUpdateWithoutMovieInput, ShowUncheckedUpdateWithoutMovieInput>
    create: XOR<ShowCreateWithoutMovieInput, ShowUncheckedCreateWithoutMovieInput>
  }

  export type ShowUpdateWithoutMovieInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutMovieInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type MovieServerUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieServerWhereUniqueInput
    update: XOR<MovieServerUpdateWithoutMovieInput, MovieServerUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieServerCreateWithoutMovieInput, MovieServerUncheckedCreateWithoutMovieInput>
  }

  export type MovieServerUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieServerWhereUniqueInput
    data: XOR<MovieServerUpdateWithoutMovieInput, MovieServerUncheckedUpdateWithoutMovieInput>
  }

  export type MovieServerUpdateManyWithWhereWithoutMovieInput = {
    where: MovieServerScalarWhereInput
    data: XOR<MovieServerUpdateManyMutationInput, MovieServerUncheckedUpdateManyWithoutMovieServerInput>
  }

  export type MovieServerScalarWhereInput = {
    AND?: Enumerable<MovieServerScalarWhereInput>
    OR?: Enumerable<MovieServerScalarWhereInput>
    NOT?: Enumerable<MovieServerScalarWhereInput>
    movieId?: IntFilter | number
    serverId?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ShowCreateWithoutEpisodeInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutEpisodeInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutEpisodeInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutEpisodeInput, ShowUncheckedCreateWithoutEpisodeInput>
  }

  export type SeriesServerCreateWithoutEpisodeInput = {
    server: ServerCreateNestedOneWithoutSeriesServerInput
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerUncheckedCreateWithoutEpisodeInput = {
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerCreateOrConnectWithoutEpisodeInput = {
    where: SeriesServerWhereUniqueInput
    create: XOR<SeriesServerCreateWithoutEpisodeInput, SeriesServerUncheckedCreateWithoutEpisodeInput>
  }

  export type SeriesServerCreateManyEpisodeInputEnvelope = {
    data: Enumerable<SeriesServerCreateManyEpisodeInput>
    skipDuplicates?: boolean
  }

  export type ShowUpsertWithoutEpisodeInput = {
    update: XOR<ShowUpdateWithoutEpisodeInput, ShowUncheckedUpdateWithoutEpisodeInput>
    create: XOR<ShowCreateWithoutEpisodeInput, ShowUncheckedCreateWithoutEpisodeInput>
  }

  export type ShowUpdateWithoutEpisodeInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutEpisodeInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type SeriesServerUpsertWithWhereUniqueWithoutEpisodeInput = {
    where: SeriesServerWhereUniqueInput
    update: XOR<SeriesServerUpdateWithoutEpisodeInput, SeriesServerUncheckedUpdateWithoutEpisodeInput>
    create: XOR<SeriesServerCreateWithoutEpisodeInput, SeriesServerUncheckedCreateWithoutEpisodeInput>
  }

  export type SeriesServerUpdateWithWhereUniqueWithoutEpisodeInput = {
    where: SeriesServerWhereUniqueInput
    data: XOR<SeriesServerUpdateWithoutEpisodeInput, SeriesServerUncheckedUpdateWithoutEpisodeInput>
  }

  export type SeriesServerUpdateManyWithWhereWithoutEpisodeInput = {
    where: SeriesServerScalarWhereInput
    data: XOR<SeriesServerUpdateManyMutationInput, SeriesServerUncheckedUpdateManyWithoutSeriesServerInput>
  }

  export type SeriesServerScalarWhereInput = {
    AND?: Enumerable<SeriesServerScalarWhereInput>
    OR?: Enumerable<SeriesServerScalarWhereInput>
    NOT?: Enumerable<SeriesServerScalarWhereInput>
    episodeId?: IntFilter | number
    serverId?: IntFilter | number
    url?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MovieServerCreateWithoutServerInput = {
    movie: MovieCreateNestedOneWithoutMovieServerInput
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUncheckedCreateWithoutServerInput = {
    movieId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerCreateOrConnectWithoutServerInput = {
    where: MovieServerWhereUniqueInput
    create: XOR<MovieServerCreateWithoutServerInput, MovieServerUncheckedCreateWithoutServerInput>
  }

  export type MovieServerCreateManyServerInputEnvelope = {
    data: Enumerable<MovieServerCreateManyServerInput>
    skipDuplicates?: boolean
  }

  export type SeriesServerCreateWithoutServerInput = {
    episode: EpisodeCreateNestedOneWithoutSeriesServerInput
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerUncheckedCreateWithoutServerInput = {
    episodeId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerCreateOrConnectWithoutServerInput = {
    where: SeriesServerWhereUniqueInput
    create: XOR<SeriesServerCreateWithoutServerInput, SeriesServerUncheckedCreateWithoutServerInput>
  }

  export type SeriesServerCreateManyServerInputEnvelope = {
    data: Enumerable<SeriesServerCreateManyServerInput>
    skipDuplicates?: boolean
  }

  export type MovieServerUpsertWithWhereUniqueWithoutServerInput = {
    where: MovieServerWhereUniqueInput
    update: XOR<MovieServerUpdateWithoutServerInput, MovieServerUncheckedUpdateWithoutServerInput>
    create: XOR<MovieServerCreateWithoutServerInput, MovieServerUncheckedCreateWithoutServerInput>
  }

  export type MovieServerUpdateWithWhereUniqueWithoutServerInput = {
    where: MovieServerWhereUniqueInput
    data: XOR<MovieServerUpdateWithoutServerInput, MovieServerUncheckedUpdateWithoutServerInput>
  }

  export type MovieServerUpdateManyWithWhereWithoutServerInput = {
    where: MovieServerScalarWhereInput
    data: XOR<MovieServerUpdateManyMutationInput, MovieServerUncheckedUpdateManyWithoutMovieServerInput>
  }

  export type SeriesServerUpsertWithWhereUniqueWithoutServerInput = {
    where: SeriesServerWhereUniqueInput
    update: XOR<SeriesServerUpdateWithoutServerInput, SeriesServerUncheckedUpdateWithoutServerInput>
    create: XOR<SeriesServerCreateWithoutServerInput, SeriesServerUncheckedCreateWithoutServerInput>
  }

  export type SeriesServerUpdateWithWhereUniqueWithoutServerInput = {
    where: SeriesServerWhereUniqueInput
    data: XOR<SeriesServerUpdateWithoutServerInput, SeriesServerUncheckedUpdateWithoutServerInput>
  }

  export type SeriesServerUpdateManyWithWhereWithoutServerInput = {
    where: SeriesServerScalarWhereInput
    data: XOR<SeriesServerUpdateManyMutationInput, SeriesServerUncheckedUpdateManyWithoutSeriesServerInput>
  }

  export type ShowCastCreateWithoutActorInput = {
    show: ShowCreateNestedOneWithoutShowCastInput
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastUncheckedCreateWithoutActorInput = {
    showId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastCreateOrConnectWithoutActorInput = {
    where: ShowCastWhereUniqueInput
    create: XOR<ShowCastCreateWithoutActorInput, ShowCastUncheckedCreateWithoutActorInput>
  }

  export type ShowCastCreateManyActorInputEnvelope = {
    data: Enumerable<ShowCastCreateManyActorInput>
    skipDuplicates?: boolean
  }

  export type ShowCastUpsertWithWhereUniqueWithoutActorInput = {
    where: ShowCastWhereUniqueInput
    update: XOR<ShowCastUpdateWithoutActorInput, ShowCastUncheckedUpdateWithoutActorInput>
    create: XOR<ShowCastCreateWithoutActorInput, ShowCastUncheckedCreateWithoutActorInput>
  }

  export type ShowCastUpdateWithWhereUniqueWithoutActorInput = {
    where: ShowCastWhereUniqueInput
    data: XOR<ShowCastUpdateWithoutActorInput, ShowCastUncheckedUpdateWithoutActorInput>
  }

  export type ShowCastUpdateManyWithWhereWithoutActorInput = {
    where: ShowCastScalarWhereInput
    data: XOR<ShowCastUpdateManyMutationInput, ShowCastUncheckedUpdateManyWithoutMovieCastInput>
  }

  export type ShowDirectorCreateWithoutDirectorInput = {
    show: ShowCreateNestedOneWithoutShowDirectorInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorUncheckedCreateWithoutDirectorInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorCreateOrConnectWithoutDirectorInput = {
    where: ShowDirectorWhereUniqueInput
    create: XOR<ShowDirectorCreateWithoutDirectorInput, ShowDirectorUncheckedCreateWithoutDirectorInput>
  }

  export type ShowDirectorCreateManyDirectorInputEnvelope = {
    data: Enumerable<ShowDirectorCreateManyDirectorInput>
    skipDuplicates?: boolean
  }

  export type ShowDirectorUpsertWithWhereUniqueWithoutDirectorInput = {
    where: ShowDirectorWhereUniqueInput
    update: XOR<ShowDirectorUpdateWithoutDirectorInput, ShowDirectorUncheckedUpdateWithoutDirectorInput>
    create: XOR<ShowDirectorCreateWithoutDirectorInput, ShowDirectorUncheckedCreateWithoutDirectorInput>
  }

  export type ShowDirectorUpdateWithWhereUniqueWithoutDirectorInput = {
    where: ShowDirectorWhereUniqueInput
    data: XOR<ShowDirectorUpdateWithoutDirectorInput, ShowDirectorUncheckedUpdateWithoutDirectorInput>
  }

  export type ShowDirectorUpdateManyWithWhereWithoutDirectorInput = {
    where: ShowDirectorScalarWhereInput
    data: XOR<ShowDirectorUpdateManyMutationInput, ShowDirectorUncheckedUpdateManyWithoutShowDirectorInput>
  }

  export type ShowGenreCreateWithoutGenreInput = {
    show: ShowCreateNestedOneWithoutShowGenreInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreUncheckedCreateWithoutGenreInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreCreateOrConnectWithoutGenreInput = {
    where: ShowGenreWhereUniqueInput
    create: XOR<ShowGenreCreateWithoutGenreInput, ShowGenreUncheckedCreateWithoutGenreInput>
  }

  export type ShowGenreCreateManyGenreInputEnvelope = {
    data: Enumerable<ShowGenreCreateManyGenreInput>
    skipDuplicates?: boolean
  }

  export type ShowGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: ShowGenreWhereUniqueInput
    update: XOR<ShowGenreUpdateWithoutGenreInput, ShowGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<ShowGenreCreateWithoutGenreInput, ShowGenreUncheckedCreateWithoutGenreInput>
  }

  export type ShowGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: ShowGenreWhereUniqueInput
    data: XOR<ShowGenreUpdateWithoutGenreInput, ShowGenreUncheckedUpdateWithoutGenreInput>
  }

  export type ShowGenreUpdateManyWithWhereWithoutGenreInput = {
    where: ShowGenreScalarWhereInput
    data: XOR<ShowGenreUpdateManyMutationInput, ShowGenreUncheckedUpdateManyWithoutShowGenreInput>
  }

  export type ShowLanguageCreateWithoutLanguageInput = {
    show: ShowCreateNestedOneWithoutShowLanguageInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageUncheckedCreateWithoutLanguageInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageCreateOrConnectWithoutLanguageInput = {
    where: ShowLanguageWhereUniqueInput
    create: XOR<ShowLanguageCreateWithoutLanguageInput, ShowLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type ShowLanguageCreateManyLanguageInputEnvelope = {
    data: Enumerable<ShowLanguageCreateManyLanguageInput>
    skipDuplicates?: boolean
  }

  export type ShowLanguageUpsertWithWhereUniqueWithoutLanguageInput = {
    where: ShowLanguageWhereUniqueInput
    update: XOR<ShowLanguageUpdateWithoutLanguageInput, ShowLanguageUncheckedUpdateWithoutLanguageInput>
    create: XOR<ShowLanguageCreateWithoutLanguageInput, ShowLanguageUncheckedCreateWithoutLanguageInput>
  }

  export type ShowLanguageUpdateWithWhereUniqueWithoutLanguageInput = {
    where: ShowLanguageWhereUniqueInput
    data: XOR<ShowLanguageUpdateWithoutLanguageInput, ShowLanguageUncheckedUpdateWithoutLanguageInput>
  }

  export type ShowLanguageUpdateManyWithWhereWithoutLanguageInput = {
    where: ShowLanguageScalarWhereInput
    data: XOR<ShowLanguageUpdateManyMutationInput, ShowLanguageUncheckedUpdateManyWithoutShowLanguageInput>
  }

  export type ShowStudioCreateWithoutStudioInput = {
    show: ShowCreateNestedOneWithoutShowStudioInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioUncheckedCreateWithoutStudioInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioCreateOrConnectWithoutStudioInput = {
    where: ShowStudioWhereUniqueInput
    create: XOR<ShowStudioCreateWithoutStudioInput, ShowStudioUncheckedCreateWithoutStudioInput>
  }

  export type ShowStudioCreateManyStudioInputEnvelope = {
    data: Enumerable<ShowStudioCreateManyStudioInput>
    skipDuplicates?: boolean
  }

  export type ShowStudioUpsertWithWhereUniqueWithoutStudioInput = {
    where: ShowStudioWhereUniqueInput
    update: XOR<ShowStudioUpdateWithoutStudioInput, ShowStudioUncheckedUpdateWithoutStudioInput>
    create: XOR<ShowStudioCreateWithoutStudioInput, ShowStudioUncheckedCreateWithoutStudioInput>
  }

  export type ShowStudioUpdateWithWhereUniqueWithoutStudioInput = {
    where: ShowStudioWhereUniqueInput
    data: XOR<ShowStudioUpdateWithoutStudioInput, ShowStudioUncheckedUpdateWithoutStudioInput>
  }

  export type ShowStudioUpdateManyWithWhereWithoutStudioInput = {
    where: ShowStudioScalarWhereInput
    data: XOR<ShowStudioUpdateManyMutationInput, ShowStudioUncheckedUpdateManyWithoutShowStudioInput>
  }

  export type ShowWriterCreateWithoutWriterInput = {
    show: ShowCreateNestedOneWithoutShowWriterInput
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterUncheckedCreateWithoutWriterInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterCreateOrConnectWithoutWriterInput = {
    where: ShowWriterWhereUniqueInput
    create: XOR<ShowWriterCreateWithoutWriterInput, ShowWriterUncheckedCreateWithoutWriterInput>
  }

  export type ShowWriterCreateManyWriterInputEnvelope = {
    data: Enumerable<ShowWriterCreateManyWriterInput>
    skipDuplicates?: boolean
  }

  export type ShowWriterUpsertWithWhereUniqueWithoutWriterInput = {
    where: ShowWriterWhereUniqueInput
    update: XOR<ShowWriterUpdateWithoutWriterInput, ShowWriterUncheckedUpdateWithoutWriterInput>
    create: XOR<ShowWriterCreateWithoutWriterInput, ShowWriterUncheckedCreateWithoutWriterInput>
  }

  export type ShowWriterUpdateWithWhereUniqueWithoutWriterInput = {
    where: ShowWriterWhereUniqueInput
    data: XOR<ShowWriterUpdateWithoutWriterInput, ShowWriterUncheckedUpdateWithoutWriterInput>
  }

  export type ShowWriterUpdateManyWithWhereWithoutWriterInput = {
    where: ShowWriterScalarWhereInput
    data: XOR<ShowWriterUpdateManyMutationInput, ShowWriterUncheckedUpdateManyWithoutShowWriterInput>
  }

  export type ShowCreateWithoutVideoInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutVideoInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutVideoInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutVideoInput, ShowUncheckedCreateWithoutVideoInput>
  }

  export type ShowUpsertWithoutVideoInput = {
    update: XOR<ShowUpdateWithoutVideoInput, ShowUncheckedUpdateWithoutVideoInput>
    create: XOR<ShowCreateWithoutVideoInput, ShowUncheckedCreateWithoutVideoInput>
  }

  export type ShowUpdateWithoutVideoInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutVideoInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ShowCreateWithoutImageInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutImageInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutImageInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutImageInput, ShowUncheckedCreateWithoutImageInput>
  }

  export type ShowUpsertWithoutImageInput = {
    update: XOR<ShowUpdateWithoutImageInput, ShowUncheckedUpdateWithoutImageInput>
    create: XOR<ShowCreateWithoutImageInput, ShowUncheckedCreateWithoutImageInput>
  }

  export type ShowUpdateWithoutImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutImageInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type MovieCreateWithoutMovieServerInput = {
    show: ShowCreateNestedOneWithoutMovieInput
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieUncheckedCreateWithoutMovieServerInput = {
    movieId?: number
    showId: number
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCreateOrConnectWithoutMovieServerInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutMovieServerInput, MovieUncheckedCreateWithoutMovieServerInput>
  }

  export type ServerCreateWithoutMovieServerInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SeriesServer?: SeriesServerCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutMovieServerInput = {
    serverId?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    SeriesServer?: SeriesServerUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutMovieServerInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutMovieServerInput, ServerUncheckedCreateWithoutMovieServerInput>
  }

  export type MovieUpsertWithoutMovieServerInput = {
    update: XOR<MovieUpdateWithoutMovieServerInput, MovieUncheckedUpdateWithoutMovieServerInput>
    create: XOR<MovieCreateWithoutMovieServerInput, MovieUncheckedCreateWithoutMovieServerInput>
  }

  export type MovieUpdateWithoutMovieServerInput = {
    show?: ShowUpdateOneRequiredWithoutMovieNestedInput
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieUncheckedUpdateWithoutMovieServerInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUpsertWithoutMovieServerInput = {
    update: XOR<ServerUpdateWithoutMovieServerInput, ServerUncheckedUpdateWithoutMovieServerInput>
    create: XOR<ServerCreateWithoutMovieServerInput, ServerUncheckedCreateWithoutMovieServerInput>
  }

  export type ServerUpdateWithoutMovieServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeriesServer?: SeriesServerUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutMovieServerInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeriesServer?: SeriesServerUncheckedUpdateManyWithoutServerNestedInput
  }

  export type EpisodeCreateWithoutSeriesServerInput = {
    show: ShowCreateNestedOneWithoutEpisodeInput
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUncheckedCreateWithoutSeriesServerInput = {
    episodeId?: number
    showId: number
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeCreateOrConnectWithoutSeriesServerInput = {
    where: EpisodeWhereUniqueInput
    create: XOR<EpisodeCreateWithoutSeriesServerInput, EpisodeUncheckedCreateWithoutSeriesServerInput>
  }

  export type ServerCreateWithoutSeriesServerInput = {
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerCreateNestedManyWithoutServerInput
  }

  export type ServerUncheckedCreateWithoutSeriesServerInput = {
    serverId?: number
    name: string
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
    MovieServer?: MovieServerUncheckedCreateNestedManyWithoutServerInput
  }

  export type ServerCreateOrConnectWithoutSeriesServerInput = {
    where: ServerWhereUniqueInput
    create: XOR<ServerCreateWithoutSeriesServerInput, ServerUncheckedCreateWithoutSeriesServerInput>
  }

  export type EpisodeUpsertWithoutSeriesServerInput = {
    update: XOR<EpisodeUpdateWithoutSeriesServerInput, EpisodeUncheckedUpdateWithoutSeriesServerInput>
    create: XOR<EpisodeCreateWithoutSeriesServerInput, EpisodeUncheckedCreateWithoutSeriesServerInput>
  }

  export type EpisodeUpdateWithoutSeriesServerInput = {
    show?: ShowUpdateOneRequiredWithoutEpisodeNestedInput
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeUncheckedUpdateWithoutSeriesServerInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    showId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServerUpsertWithoutSeriesServerInput = {
    update: XOR<ServerUpdateWithoutSeriesServerInput, ServerUncheckedUpdateWithoutSeriesServerInput>
    create: XOR<ServerCreateWithoutSeriesServerInput, ServerUncheckedCreateWithoutSeriesServerInput>
  }

  export type ServerUpdateWithoutSeriesServerInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUpdateManyWithoutServerNestedInput
  }

  export type ServerUncheckedUpdateWithoutSeriesServerInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MovieServer?: MovieServerUncheckedUpdateManyWithoutServerNestedInput
  }

  export type ShowCreateWithoutShowCastInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutShowCastInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutShowCastInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutShowCastInput, ShowUncheckedCreateWithoutShowCastInput>
  }

  export type ActorCreateWithoutMovieCastInput = {
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActorUncheckedCreateWithoutMovieCastInput = {
    actorId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActorCreateOrConnectWithoutMovieCastInput = {
    where: ActorWhereUniqueInput
    create: XOR<ActorCreateWithoutMovieCastInput, ActorUncheckedCreateWithoutMovieCastInput>
  }

  export type ShowUpsertWithoutShowCastInput = {
    update: XOR<ShowUpdateWithoutShowCastInput, ShowUncheckedUpdateWithoutShowCastInput>
    create: XOR<ShowCreateWithoutShowCastInput, ShowUncheckedCreateWithoutShowCastInput>
  }

  export type ShowUpdateWithoutShowCastInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutShowCastInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type ActorUpsertWithoutMovieCastInput = {
    update: XOR<ActorUpdateWithoutMovieCastInput, ActorUncheckedUpdateWithoutMovieCastInput>
    create: XOR<ActorCreateWithoutMovieCastInput, ActorUncheckedCreateWithoutMovieCastInput>
  }

  export type ActorUpdateWithoutMovieCastInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActorUncheckedUpdateWithoutMovieCastInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateWithoutShowDirectorInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutShowDirectorInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutShowDirectorInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutShowDirectorInput, ShowUncheckedCreateWithoutShowDirectorInput>
  }

  export type DirectorCreateWithoutShowDirectorInput = {
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectorUncheckedCreateWithoutShowDirectorInput = {
    directorId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DirectorCreateOrConnectWithoutShowDirectorInput = {
    where: DirectorWhereUniqueInput
    create: XOR<DirectorCreateWithoutShowDirectorInput, DirectorUncheckedCreateWithoutShowDirectorInput>
  }

  export type ShowUpsertWithoutShowDirectorInput = {
    update: XOR<ShowUpdateWithoutShowDirectorInput, ShowUncheckedUpdateWithoutShowDirectorInput>
    create: XOR<ShowCreateWithoutShowDirectorInput, ShowUncheckedCreateWithoutShowDirectorInput>
  }

  export type ShowUpdateWithoutShowDirectorInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutShowDirectorInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type DirectorUpsertWithoutShowDirectorInput = {
    update: XOR<DirectorUpdateWithoutShowDirectorInput, DirectorUncheckedUpdateWithoutShowDirectorInput>
    create: XOR<DirectorCreateWithoutShowDirectorInput, DirectorUncheckedCreateWithoutShowDirectorInput>
  }

  export type DirectorUpdateWithoutShowDirectorInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DirectorUncheckedUpdateWithoutShowDirectorInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateWithoutShowGenreInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutShowGenreInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutShowGenreInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutShowGenreInput, ShowUncheckedCreateWithoutShowGenreInput>
  }

  export type GenreCreateWithoutShowGenreInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutShowGenreInput = {
    genreId?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutShowGenreInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutShowGenreInput, GenreUncheckedCreateWithoutShowGenreInput>
  }

  export type ShowUpsertWithoutShowGenreInput = {
    update: XOR<ShowUpdateWithoutShowGenreInput, ShowUncheckedUpdateWithoutShowGenreInput>
    create: XOR<ShowCreateWithoutShowGenreInput, ShowUncheckedCreateWithoutShowGenreInput>
  }

  export type ShowUpdateWithoutShowGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutShowGenreInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type GenreUpsertWithoutShowGenreInput = {
    update: XOR<GenreUpdateWithoutShowGenreInput, GenreUncheckedUpdateWithoutShowGenreInput>
    create: XOR<GenreCreateWithoutShowGenreInput, GenreUncheckedCreateWithoutShowGenreInput>
  }

  export type GenreUpdateWithoutShowGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutShowGenreInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateWithoutShowLanguageInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutShowLanguageInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutShowLanguageInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutShowLanguageInput, ShowUncheckedCreateWithoutShowLanguageInput>
  }

  export type LanguageCreateWithoutShowLanguageInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUncheckedCreateWithoutShowLanguageInput = {
    languageId?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageCreateOrConnectWithoutShowLanguageInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutShowLanguageInput, LanguageUncheckedCreateWithoutShowLanguageInput>
  }

  export type ShowUpsertWithoutShowLanguageInput = {
    update: XOR<ShowUpdateWithoutShowLanguageInput, ShowUncheckedUpdateWithoutShowLanguageInput>
    create: XOR<ShowCreateWithoutShowLanguageInput, ShowUncheckedCreateWithoutShowLanguageInput>
  }

  export type ShowUpdateWithoutShowLanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutShowLanguageInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type LanguageUpsertWithoutShowLanguageInput = {
    update: XOR<LanguageUpdateWithoutShowLanguageInput, LanguageUncheckedUpdateWithoutShowLanguageInput>
    create: XOR<LanguageCreateWithoutShowLanguageInput, LanguageUncheckedCreateWithoutShowLanguageInput>
  }

  export type LanguageUpdateWithoutShowLanguageInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateWithoutShowLanguageInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateWithoutShowStudioInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutShowStudioInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowWriter?: ShowWriterUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutShowStudioInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutShowStudioInput, ShowUncheckedCreateWithoutShowStudioInput>
  }

  export type StudioCreateWithoutShowStudioInput = {
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudioUncheckedCreateWithoutShowStudioInput = {
    studioId?: number
    name: string
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudioCreateOrConnectWithoutShowStudioInput = {
    where: StudioWhereUniqueInput
    create: XOR<StudioCreateWithoutShowStudioInput, StudioUncheckedCreateWithoutShowStudioInput>
  }

  export type ShowUpsertWithoutShowStudioInput = {
    update: XOR<ShowUpdateWithoutShowStudioInput, ShowUncheckedUpdateWithoutShowStudioInput>
    create: XOR<ShowCreateWithoutShowStudioInput, ShowUncheckedCreateWithoutShowStudioInput>
  }

  export type ShowUpdateWithoutShowStudioInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutShowStudioInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowWriter?: ShowWriterUncheckedUpdateManyWithoutShowNestedInput
  }

  export type StudioUpsertWithoutShowStudioInput = {
    update: XOR<StudioUpdateWithoutShowStudioInput, StudioUncheckedUpdateWithoutShowStudioInput>
    create: XOR<StudioCreateWithoutShowStudioInput, StudioUncheckedCreateWithoutShowStudioInput>
  }

  export type StudioUpdateWithoutShowStudioInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudioUncheckedUpdateWithoutShowStudioInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCreateWithoutShowWriterInput = {
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbCreateNestedOneWithoutShowInput
    Movie?: MovieCreateNestedOneWithoutShowInput
    Episode?: EpisodeCreateNestedManyWithoutShowInput
    Image?: ImageCreateNestedManyWithoutShowInput
    Video?: VideoCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioCreateNestedManyWithoutShowInput
  }

  export type ShowUncheckedCreateWithoutShowWriterInput = {
    showId?: number
    name: string
    releaseYear: number
    summary?: string | null
    pgRating?: string | null
    budget?: number | null
    revenue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Imdb?: ImdbUncheckedCreateNestedOneWithoutShowInput
    Movie?: MovieUncheckedCreateNestedOneWithoutShowInput
    Episode?: EpisodeUncheckedCreateNestedManyWithoutShowInput
    Image?: ImageUncheckedCreateNestedManyWithoutShowInput
    Video?: VideoUncheckedCreateNestedManyWithoutShowInput
    ShowCast?: ShowCastUncheckedCreateNestedManyWithoutShowInput
    ShowDirector?: ShowDirectorUncheckedCreateNestedManyWithoutShowInput
    ShowGenre?: ShowGenreUncheckedCreateNestedManyWithoutShowInput
    ShowLanguage?: ShowLanguageUncheckedCreateNestedManyWithoutShowInput
    ShowStudio?: ShowStudioUncheckedCreateNestedManyWithoutShowInput
  }

  export type ShowCreateOrConnectWithoutShowWriterInput = {
    where: ShowWhereUniqueInput
    create: XOR<ShowCreateWithoutShowWriterInput, ShowUncheckedCreateWithoutShowWriterInput>
  }

  export type WriterCreateWithoutShowWriterInput = {
    name: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WriterUncheckedCreateWithoutShowWriterInput = {
    writerId?: number
    name: string
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WriterCreateOrConnectWithoutShowWriterInput = {
    where: WriterWhereUniqueInput
    create: XOR<WriterCreateWithoutShowWriterInput, WriterUncheckedCreateWithoutShowWriterInput>
  }

  export type ShowUpsertWithoutShowWriterInput = {
    update: XOR<ShowUpdateWithoutShowWriterInput, ShowUncheckedUpdateWithoutShowWriterInput>
    create: XOR<ShowCreateWithoutShowWriterInput, ShowUncheckedCreateWithoutShowWriterInput>
  }

  export type ShowUpdateWithoutShowWriterInput = {
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUpdateOneWithoutShowNestedInput
    Movie?: MovieUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUpdateManyWithoutShowNestedInput
    Image?: ImageUpdateManyWithoutShowNestedInput
    Video?: VideoUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUpdateManyWithoutShowNestedInput
  }

  export type ShowUncheckedUpdateWithoutShowWriterInput = {
    showId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseYear?: IntFieldUpdateOperationsInput | number
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pgRating?: NullableStringFieldUpdateOperationsInput | string | null
    budget?: NullableIntFieldUpdateOperationsInput | number | null
    revenue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Imdb?: ImdbUncheckedUpdateOneWithoutShowNestedInput
    Movie?: MovieUncheckedUpdateOneWithoutShowNestedInput
    Episode?: EpisodeUncheckedUpdateManyWithoutShowNestedInput
    Image?: ImageUncheckedUpdateManyWithoutShowNestedInput
    Video?: VideoUncheckedUpdateManyWithoutShowNestedInput
    ShowCast?: ShowCastUncheckedUpdateManyWithoutShowNestedInput
    ShowDirector?: ShowDirectorUncheckedUpdateManyWithoutShowNestedInput
    ShowGenre?: ShowGenreUncheckedUpdateManyWithoutShowNestedInput
    ShowLanguage?: ShowLanguageUncheckedUpdateManyWithoutShowNestedInput
    ShowStudio?: ShowStudioUncheckedUpdateManyWithoutShowNestedInput
  }

  export type WriterUpsertWithoutShowWriterInput = {
    update: XOR<WriterUpdateWithoutShowWriterInput, WriterUncheckedUpdateWithoutShowWriterInput>
    create: XOR<WriterCreateWithoutShowWriterInput, WriterUncheckedCreateWithoutShowWriterInput>
  }

  export type WriterUpdateWithoutShowWriterInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WriterUncheckedUpdateWithoutShowWriterInput = {
    writerId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EpisodeCreateManyShowInput = {
    episodeId?: number
    season: number
    number: number
    name?: string | null
    poster?: string | null
    summary?: string | null
    releaseYear?: number | null
    length?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImageCreateManyShowInput = {
    imageId?: number
    url: string
    type?: string | null
    height?: number | null
    width?: number | null
    aspectRatio?: number | null
    language?: string | null
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VideoCreateManyShowInput = {
    videoId?: number
    name?: string | null
    url: string
    site?: string | null
    quality?: number | null
    type?: string | null
    official?: boolean | null
    language?: string | null
    isDefault?: boolean
    publishedAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastCreateManyShowInput = {
    actorId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorCreateManyShowInput = {
    directorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreCreateManyShowInput = {
    genreId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageCreateManyShowInput = {
    languageId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioCreateManyShowInput = {
    studioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterCreateManyShowInput = {
    writerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EpisodeUpdateWithoutShowInput = {
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeriesServer?: SeriesServerUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateWithoutShowInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SeriesServer?: SeriesServerUncheckedUpdateManyWithoutEpisodeNestedInput
  }

  export type EpisodeUncheckedUpdateManyWithoutEpisodeInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    season?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    poster?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    releaseYear?: NullableIntFieldUpdateOperationsInput | number | null
    length?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutShowInput = {
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateWithoutShowInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyWithoutImageInput = {
    imageId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    aspectRatio?: NullableFloatFieldUpdateOperationsInput | number | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUpdateWithoutShowInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateWithoutShowInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyWithoutVideoInput = {
    videoId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    url?: StringFieldUpdateOperationsInput | string
    site?: NullableStringFieldUpdateOperationsInput | string | null
    quality?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    official?: NullableBoolFieldUpdateOperationsInput | boolean | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUpdateWithoutShowInput = {
    actor?: ActorUpdateOneRequiredWithoutMovieCastNestedInput
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUncheckedUpdateWithoutShowInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUncheckedUpdateManyWithoutShowCastInput = {
    actorId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorUpdateWithoutShowInput = {
    director?: DirectorUpdateOneRequiredWithoutShowDirectorNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorUncheckedUpdateWithoutShowInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorUncheckedUpdateManyWithoutShowDirectorInput = {
    directorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreUpdateWithoutShowInput = {
    genre?: GenreUpdateOneRequiredWithoutShowGenreNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreUncheckedUpdateWithoutShowInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreUncheckedUpdateManyWithoutShowGenreInput = {
    genreId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageUpdateWithoutShowInput = {
    language?: LanguageUpdateOneRequiredWithoutShowLanguageNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageUncheckedUpdateWithoutShowInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageUncheckedUpdateManyWithoutShowLanguageInput = {
    languageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioUpdateWithoutShowInput = {
    studio?: StudioUpdateOneRequiredWithoutShowStudioNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioUncheckedUpdateWithoutShowInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioUncheckedUpdateManyWithoutShowStudioInput = {
    studioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterUpdateWithoutShowInput = {
    writer?: WriterUpdateOneRequiredWithoutShowWriterNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterUncheckedUpdateWithoutShowInput = {
    writerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterUncheckedUpdateManyWithoutShowWriterInput = {
    writerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerCreateManyMovieInput = {
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUpdateWithoutMovieInput = {
    server?: ServerUpdateOneRequiredWithoutMovieServerNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerUncheckedUpdateWithoutMovieInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerUncheckedUpdateManyWithoutMovieServerInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerCreateManyEpisodeInput = {
    serverId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerUpdateWithoutEpisodeInput = {
    server?: ServerUpdateOneRequiredWithoutSeriesServerNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerUncheckedUpdateWithoutEpisodeInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerUncheckedUpdateManyWithoutSeriesServerInput = {
    serverId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerCreateManyServerInput = {
    movieId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SeriesServerCreateManyServerInput = {
    episodeId: number
    url: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieServerUpdateWithoutServerInput = {
    movie?: MovieUpdateOneRequiredWithoutMovieServerNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieServerUncheckedUpdateWithoutServerInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerUpdateWithoutServerInput = {
    episode?: EpisodeUpdateOneRequiredWithoutSeriesServerNestedInput
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeriesServerUncheckedUpdateWithoutServerInput = {
    episodeId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastCreateManyActorInput = {
    showId: number
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowCastUpdateWithoutActorInput = {
    show?: ShowUpdateOneRequiredWithoutShowCastNestedInput
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUncheckedUpdateWithoutActorInput = {
    showId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowCastUncheckedUpdateManyWithoutMovieCastInput = {
    showId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorCreateManyDirectorInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowDirectorUpdateWithoutDirectorInput = {
    show?: ShowUpdateOneRequiredWithoutShowDirectorNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowDirectorUncheckedUpdateWithoutDirectorInput = {
    showId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreCreateManyGenreInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowGenreUpdateWithoutGenreInput = {
    show?: ShowUpdateOneRequiredWithoutShowGenreNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowGenreUncheckedUpdateWithoutGenreInput = {
    showId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageCreateManyLanguageInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowLanguageUpdateWithoutLanguageInput = {
    show?: ShowUpdateOneRequiredWithoutShowLanguageNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowLanguageUncheckedUpdateWithoutLanguageInput = {
    showId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioCreateManyStudioInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowStudioUpdateWithoutStudioInput = {
    show?: ShowUpdateOneRequiredWithoutShowStudioNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowStudioUncheckedUpdateWithoutStudioInput = {
    showId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterCreateManyWriterInput = {
    showId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShowWriterUpdateWithoutWriterInput = {
    show?: ShowUpdateOneRequiredWithoutShowWriterNestedInput
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShowWriterUncheckedUpdateWithoutWriterInput = {
    showId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}