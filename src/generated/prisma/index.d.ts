
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>
/**
 * Model Notifications
 * 
 */
export type Notifications = $Result.DefaultSelection<Prisma.$NotificationsPayload>
/**
 * Model Towers
 * 
 */
export type Towers = $Result.DefaultSelection<Prisma.$TowersPayload>
/**
 * Model Telemetry
 * 
 */
export type Telemetry = $Result.DefaultSelection<Prisma.$TelemetryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notifications`: Exposes CRUD operations for the **Notifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notifications.findMany()
    * ```
    */
  get notifications(): Prisma.NotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.towers`: Exposes CRUD operations for the **Towers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towers
    * const towers = await prisma.towers.findMany()
    * ```
    */
  get towers(): Prisma.TowersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telemetry`: Exposes CRUD operations for the **Telemetry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telemetries
    * const telemetries = await prisma.telemetry.findMany()
    * ```
    */
  get telemetry(): Prisma.TelemetryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
  : T extends Uint8Array
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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Settings: 'Settings',
    Notifications: 'Notifications',
    Towers: 'Towers',
    Telemetry: 'Telemetry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "settings" | "notifications" | "towers" | "telemetry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
          }
        }
      }
      Notifications: {
        payload: Prisma.$NotificationsPayload<ExtArgs>
        fields: Prisma.NotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findFirst: {
            args: Prisma.NotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          findMany: {
            args: Prisma.NotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          create: {
            args: Prisma.NotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          createMany: {
            args: Prisma.NotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          delete: {
            args: Prisma.NotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          update: {
            args: Prisma.NotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>[]
          }
          upsert: {
            args: Prisma.NotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationsPayload>
          }
          aggregate: {
            args: Prisma.NotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifications>
          }
          groupBy: {
            args: Prisma.NotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationsCountAggregateOutputType> | number
          }
        }
      }
      Towers: {
        payload: Prisma.$TowersPayload<ExtArgs>
        fields: Prisma.TowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TowersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TowersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>
          }
          findFirst: {
            args: Prisma.TowersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TowersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>
          }
          findMany: {
            args: Prisma.TowersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>[]
          }
          create: {
            args: Prisma.TowersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>
          }
          createMany: {
            args: Prisma.TowersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TowersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>[]
          }
          delete: {
            args: Prisma.TowersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>
          }
          update: {
            args: Prisma.TowersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>
          }
          deleteMany: {
            args: Prisma.TowersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TowersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TowersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>[]
          }
          upsert: {
            args: Prisma.TowersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TowersPayload>
          }
          aggregate: {
            args: Prisma.TowersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTowers>
          }
          groupBy: {
            args: Prisma.TowersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TowersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TowersCountArgs<ExtArgs>
            result: $Utils.Optional<TowersCountAggregateOutputType> | number
          }
        }
      }
      Telemetry: {
        payload: Prisma.$TelemetryPayload<ExtArgs>
        fields: Prisma.TelemetryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelemetryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelemetryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          findFirst: {
            args: Prisma.TelemetryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelemetryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          findMany: {
            args: Prisma.TelemetryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>[]
          }
          create: {
            args: Prisma.TelemetryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          createMany: {
            args: Prisma.TelemetryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelemetryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>[]
          }
          delete: {
            args: Prisma.TelemetryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          update: {
            args: Prisma.TelemetryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          deleteMany: {
            args: Prisma.TelemetryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelemetryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelemetryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>[]
          }
          upsert: {
            args: Prisma.TelemetryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelemetryPayload>
          }
          aggregate: {
            args: Prisma.TelemetryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelemetry>
          }
          groupBy: {
            args: Prisma.TelemetryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelemetryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelemetryCountArgs<ExtArgs>
            result: $Utils.Optional<TelemetryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    settings?: SettingsOmit
    notifications?: NotificationsOmit
    towers?: TowersOmit
    telemetry?: TelemetryOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    address_id: number | null
    country_code: number | null
    phone_number: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    address_id: number | null
    country_code: number | null
    phone_number: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    address_id: number | null
    country_code: number | null
    phone_number: number | null
    customer_type: string | null
    password_hash: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    address_id: number | null
    country_code: number | null
    phone_number: number | null
    customer_type: string | null
    password_hash: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address_id: number
    country_code: number
    phone_number: number
    customer_type: number
    password_hash: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    address_id?: true
    country_code?: true
    phone_number?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    address_id?: true
    country_code?: true
    phone_number?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address_id?: true
    country_code?: true
    phone_number?: true
    customer_type?: true
    password_hash?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address_id?: true
    country_code?: true
    phone_number?: true
    customer_type?: true
    password_hash?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address_id?: true
    country_code?: true
    phone_number?: true
    customer_type?: true
    password_hash?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number: number | null
    customer_type: string
    password_hash: string
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    country_code?: boolean
    phone_number?: boolean
    customer_type?: boolean
    password_hash?: boolean
    setting?: boolean | Customer$settingArgs<ExtArgs>
    notification?: boolean | Customer$notificationArgs<ExtArgs>
    tower?: boolean | Customer$towerArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    country_code?: boolean
    phone_number?: boolean
    customer_type?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    country_code?: boolean
    phone_number?: boolean
    customer_type?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    country_code?: boolean
    phone_number?: boolean
    customer_type?: boolean
    password_hash?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address_id" | "country_code" | "phone_number" | "customer_type" | "password_hash", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    setting?: boolean | Customer$settingArgs<ExtArgs>
    notification?: boolean | Customer$notificationArgs<ExtArgs>
    tower?: boolean | Customer$towerArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      setting: Prisma.$SettingsPayload<ExtArgs> | null
      notification: Prisma.$NotificationsPayload<ExtArgs> | null
      tower: Prisma.$TowersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      address_id: number
      country_code: number
      phone_number: number | null
      customer_type: string
      password_hash: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    setting<T extends Customer$settingArgs<ExtArgs> = {}>(args?: Subset<T, Customer$settingArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notification<T extends Customer$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Customer$notificationArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tower<T extends Customer$towerArgs<ExtArgs> = {}>(args?: Subset<T, Customer$towerArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly address_id: FieldRef<"Customer", 'Int'>
    readonly country_code: FieldRef<"Customer", 'Int'>
    readonly phone_number: FieldRef<"Customer", 'Int'>
    readonly customer_type: FieldRef<"Customer", 'String'>
    readonly password_hash: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.setting
   */
  export type Customer$settingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    where?: SettingsWhereInput
  }

  /**
   * Customer.notification
   */
  export type Customer$notificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    where?: NotificationsWhereInput
  }

  /**
   * Customer.tower
   */
  export type Customer$towerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    where?: TowersWhereInput
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    settings_id: number | null
    customer_id: number | null
  }

  export type SettingsSumAggregateOutputType = {
    settings_id: number | null
    customer_id: number | null
  }

  export type SettingsMinAggregateOutputType = {
    settings_id: number | null
    customer_id: number | null
    theme: string | null
    time_zone: string | null
    text_size: string | null
    bold_text: boolean | null
    update_frequency: string | null
    region: string | null
    language: string | null
    twentyfourhourtime: boolean | null
    last_login_device: string | null
    last_login: Date | null
    email_recovery: string | null
    phone_recovery: string | null
  }

  export type SettingsMaxAggregateOutputType = {
    settings_id: number | null
    customer_id: number | null
    theme: string | null
    time_zone: string | null
    text_size: string | null
    bold_text: boolean | null
    update_frequency: string | null
    region: string | null
    language: string | null
    twentyfourhourtime: boolean | null
    last_login_device: string | null
    last_login: Date | null
    email_recovery: string | null
    phone_recovery: string | null
  }

  export type SettingsCountAggregateOutputType = {
    settings_id: number
    customer_id: number
    theme: number
    time_zone: number
    text_size: number
    bold_text: number
    update_frequency: number
    region: number
    language: number
    twentyfourhourtime: number
    last_login_device: number
    last_login: number
    email_recovery: number
    phone_recovery: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    settings_id?: true
    customer_id?: true
  }

  export type SettingsSumAggregateInputType = {
    settings_id?: true
    customer_id?: true
  }

  export type SettingsMinAggregateInputType = {
    settings_id?: true
    customer_id?: true
    theme?: true
    time_zone?: true
    text_size?: true
    bold_text?: true
    update_frequency?: true
    region?: true
    language?: true
    twentyfourhourtime?: true
    last_login_device?: true
    last_login?: true
    email_recovery?: true
    phone_recovery?: true
  }

  export type SettingsMaxAggregateInputType = {
    settings_id?: true
    customer_id?: true
    theme?: true
    time_zone?: true
    text_size?: true
    bold_text?: true
    update_frequency?: true
    region?: true
    language?: true
    twentyfourhourtime?: true
    last_login_device?: true
    last_login?: true
    email_recovery?: true
    phone_recovery?: true
  }

  export type SettingsCountAggregateInputType = {
    settings_id?: true
    customer_id?: true
    theme?: true
    time_zone?: true
    text_size?: true
    bold_text?: true
    update_frequency?: true
    region?: true
    language?: true
    twentyfourhourtime?: true
    last_login_device?: true
    last_login?: true
    email_recovery?: true
    phone_recovery?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    settings_id: number
    customer_id: number
    theme: string
    time_zone: string
    text_size: string
    bold_text: boolean
    update_frequency: string
    region: string
    language: string
    twentyfourhourtime: boolean
    last_login_device: string
    last_login: Date | null
    email_recovery: string | null
    phone_recovery: string | null
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    settings_id?: boolean
    customer_id?: boolean
    theme?: boolean
    time_zone?: boolean
    text_size?: boolean
    bold_text?: boolean
    update_frequency?: boolean
    region?: boolean
    language?: boolean
    twentyfourhourtime?: boolean
    last_login_device?: boolean
    last_login?: boolean
    email_recovery?: boolean
    phone_recovery?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    settings_id?: boolean
    customer_id?: boolean
    theme?: boolean
    time_zone?: boolean
    text_size?: boolean
    bold_text?: boolean
    update_frequency?: boolean
    region?: boolean
    language?: boolean
    twentyfourhourtime?: boolean
    last_login_device?: boolean
    last_login?: boolean
    email_recovery?: boolean
    phone_recovery?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    settings_id?: boolean
    customer_id?: boolean
    theme?: boolean
    time_zone?: boolean
    text_size?: boolean
    bold_text?: boolean
    update_frequency?: boolean
    region?: boolean
    language?: boolean
    twentyfourhourtime?: boolean
    last_login_device?: boolean
    last_login?: boolean
    email_recovery?: boolean
    phone_recovery?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    settings_id?: boolean
    customer_id?: boolean
    theme?: boolean
    time_zone?: boolean
    text_size?: boolean
    bold_text?: boolean
    update_frequency?: boolean
    region?: boolean
    language?: boolean
    twentyfourhourtime?: boolean
    last_login_device?: boolean
    last_login?: boolean
    email_recovery?: boolean
    phone_recovery?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"settings_id" | "customer_id" | "theme" | "time_zone" | "text_size" | "bold_text" | "update_frequency" | "region" | "language" | "twentyfourhourtime" | "last_login_device" | "last_login" | "email_recovery" | "phone_recovery", ExtArgs["result"]["settings"]>
  export type SettingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      settings_id: number
      customer_id: number
      theme: string
      time_zone: string
      text_size: string
      bold_text: boolean
      update_frequency: string
      region: string
      language: string
      twentyfourhourtime: boolean
      last_login_device: string
      last_login: Date | null
      email_recovery: string | null
      phone_recovery: string | null
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `settings_id`
     * const settingsWithSettings_idOnly = await prisma.settings.findMany({ select: { settings_id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `settings_id`
     * const settingsWithSettings_idOnly = await prisma.settings.createManyAndReturn({
     *   select: { settings_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `settings_id`
     * const settingsWithSettings_idOnly = await prisma.settings.updateManyAndReturn({
     *   select: { settings_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly settings_id: FieldRef<"Settings", 'Int'>
    readonly customer_id: FieldRef<"Settings", 'Int'>
    readonly theme: FieldRef<"Settings", 'String'>
    readonly time_zone: FieldRef<"Settings", 'String'>
    readonly text_size: FieldRef<"Settings", 'String'>
    readonly bold_text: FieldRef<"Settings", 'Boolean'>
    readonly update_frequency: FieldRef<"Settings", 'String'>
    readonly region: FieldRef<"Settings", 'String'>
    readonly language: FieldRef<"Settings", 'String'>
    readonly twentyfourhourtime: FieldRef<"Settings", 'Boolean'>
    readonly last_login_device: FieldRef<"Settings", 'String'>
    readonly last_login: FieldRef<"Settings", 'DateTime'>
    readonly email_recovery: FieldRef<"Settings", 'String'>
    readonly phone_recovery: FieldRef<"Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingsInclude<ExtArgs> | null
  }


  /**
   * Model Notifications
   */

  export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  export type NotificationsAvgAggregateOutputType = {
    notifications_id: number | null
    customer_id: number | null
  }

  export type NotificationsSumAggregateOutputType = {
    notifications_id: number | null
    customer_id: number | null
  }

  export type NotificationsMinAggregateOutputType = {
    notifications_id: number | null
    customer_id: number | null
    push_notifications_enabled: boolean | null
    push_notify_login: boolean | null
    notification_tone: string | null
    email_marketing: boolean | null
    email_account_activity: boolean | null
    email_newsletter: boolean | null
    sms_password_changes: boolean | null
    sms_login_attempts: boolean | null
  }

  export type NotificationsMaxAggregateOutputType = {
    notifications_id: number | null
    customer_id: number | null
    push_notifications_enabled: boolean | null
    push_notify_login: boolean | null
    notification_tone: string | null
    email_marketing: boolean | null
    email_account_activity: boolean | null
    email_newsletter: boolean | null
    sms_password_changes: boolean | null
    sms_login_attempts: boolean | null
  }

  export type NotificationsCountAggregateOutputType = {
    notifications_id: number
    customer_id: number
    push_notifications_enabled: number
    push_notify_login: number
    notification_tone: number
    email_marketing: number
    email_account_activity: number
    email_newsletter: number
    sms_password_changes: number
    sms_login_attempts: number
    _all: number
  }


  export type NotificationsAvgAggregateInputType = {
    notifications_id?: true
    customer_id?: true
  }

  export type NotificationsSumAggregateInputType = {
    notifications_id?: true
    customer_id?: true
  }

  export type NotificationsMinAggregateInputType = {
    notifications_id?: true
    customer_id?: true
    push_notifications_enabled?: true
    push_notify_login?: true
    notification_tone?: true
    email_marketing?: true
    email_account_activity?: true
    email_newsletter?: true
    sms_password_changes?: true
    sms_login_attempts?: true
  }

  export type NotificationsMaxAggregateInputType = {
    notifications_id?: true
    customer_id?: true
    push_notifications_enabled?: true
    push_notify_login?: true
    notification_tone?: true
    email_marketing?: true
    email_account_activity?: true
    email_newsletter?: true
    sms_password_changes?: true
    sms_login_attempts?: true
  }

  export type NotificationsCountAggregateInputType = {
    notifications_id?: true
    customer_id?: true
    push_notifications_enabled?: true
    push_notify_login?: true
    notification_tone?: true
    email_marketing?: true
    email_account_activity?: true
    email_newsletter?: true
    sms_password_changes?: true
    sms_login_attempts?: true
    _all?: true
  }

  export type NotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to aggregate.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationsMaxAggregateInputType
  }

  export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifications[P]>
      : GetScalarType<T[P], AggregateNotifications[P]>
  }




  export type NotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationsWhereInput
    orderBy?: NotificationsOrderByWithAggregationInput | NotificationsOrderByWithAggregationInput[]
    by: NotificationsScalarFieldEnum[] | NotificationsScalarFieldEnum
    having?: NotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationsCountAggregateInputType | true
    _avg?: NotificationsAvgAggregateInputType
    _sum?: NotificationsSumAggregateInputType
    _min?: NotificationsMinAggregateInputType
    _max?: NotificationsMaxAggregateInputType
  }

  export type NotificationsGroupByOutputType = {
    notifications_id: number
    customer_id: number
    push_notifications_enabled: boolean
    push_notify_login: boolean
    notification_tone: string
    email_marketing: boolean
    email_account_activity: boolean
    email_newsletter: boolean
    sms_password_changes: boolean
    sms_login_attempts: boolean
    _count: NotificationsCountAggregateOutputType | null
    _avg: NotificationsAvgAggregateOutputType | null
    _sum: NotificationsSumAggregateOutputType | null
    _min: NotificationsMinAggregateOutputType | null
    _max: NotificationsMaxAggregateOutputType | null
  }

  type GetNotificationsGroupByPayload<T extends NotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notifications_id?: boolean
    customer_id?: boolean
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: boolean
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notifications_id?: boolean
    customer_id?: boolean
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: boolean
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notifications_id?: boolean
    customer_id?: boolean
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: boolean
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifications"]>

  export type NotificationsSelectScalar = {
    notifications_id?: boolean
    customer_id?: boolean
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: boolean
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
  }

  export type NotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notifications_id" | "customer_id" | "push_notifications_enabled" | "push_notify_login" | "notification_tone" | "email_marketing" | "email_account_activity" | "email_newsletter" | "sms_password_changes" | "sms_login_attempts", ExtArgs["result"]["notifications"]>
  export type NotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notifications_id: number
      customer_id: number
      push_notifications_enabled: boolean
      push_notify_login: boolean
      notification_tone: string
      email_marketing: boolean
      email_account_activity: boolean
      email_newsletter: boolean
      sms_password_changes: boolean
      sms_login_attempts: boolean
    }, ExtArgs["result"]["notifications"]>
    composites: {}
  }

  type NotificationsGetPayload<S extends boolean | null | undefined | NotificationsDefaultArgs> = $Result.GetResult<Prisma.$NotificationsPayload, S>

  type NotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationsCountAggregateInputType | true
    }

  export interface NotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifications'], meta: { name: 'Notifications' } }
    /**
     * Find zero or one Notifications that matches the filter.
     * @param {NotificationsFindUniqueArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationsFindUniqueArgs>(args: SelectSubset<T, NotificationsFindUniqueArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationsFindUniqueOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationsFindFirstArgs>(args?: SelectSubset<T, NotificationsFindFirstArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindFirstOrThrowArgs} args - Arguments to find a Notifications
     * @example
     * // Get one Notifications
     * const notifications = await prisma.notifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notifications.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notifications.findMany({ take: 10 })
     * 
     * // Only select the `notifications_id`
     * const notificationsWithNotifications_idOnly = await prisma.notifications.findMany({ select: { notifications_id: true } })
     * 
     */
    findMany<T extends NotificationsFindManyArgs>(args?: SelectSubset<T, NotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notifications.
     * @param {NotificationsCreateArgs} args - Arguments to create a Notifications.
     * @example
     * // Create one Notifications
     * const Notifications = await prisma.notifications.create({
     *   data: {
     *     // ... data to create a Notifications
     *   }
     * })
     * 
     */
    create<T extends NotificationsCreateArgs>(args: SelectSubset<T, NotificationsCreateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationsCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationsCreateManyArgs>(args?: SelectSubset<T, NotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationsCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notifications = await prisma.notifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notifications_id`
     * const notificationsWithNotifications_idOnly = await prisma.notifications.createManyAndReturn({
     *   select: { notifications_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notifications.
     * @param {NotificationsDeleteArgs} args - Arguments to delete one Notifications.
     * @example
     * // Delete one Notifications
     * const Notifications = await prisma.notifications.delete({
     *   where: {
     *     // ... filter to delete one Notifications
     *   }
     * })
     * 
     */
    delete<T extends NotificationsDeleteArgs>(args: SelectSubset<T, NotificationsDeleteArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notifications.
     * @param {NotificationsUpdateArgs} args - Arguments to update one Notifications.
     * @example
     * // Update one Notifications
     * const notifications = await prisma.notifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationsUpdateArgs>(args: SelectSubset<T, NotificationsUpdateArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationsDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationsDeleteManyArgs>(args?: SelectSubset<T, NotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationsUpdateManyArgs>(args: SelectSubset<T, NotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationsUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notifications = await prisma.notifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notifications_id`
     * const notificationsWithNotifications_idOnly = await prisma.notifications.updateManyAndReturn({
     *   select: { notifications_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notifications.
     * @param {NotificationsUpsertArgs} args - Arguments to update or create a Notifications.
     * @example
     * // Update or create a Notifications
     * const notifications = await prisma.notifications.upsert({
     *   create: {
     *     // ... data to create a Notifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifications we want to update
     *   }
     * })
     */
    upsert<T extends NotificationsUpsertArgs>(args: SelectSubset<T, NotificationsUpsertArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notifications.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationsCountArgs>(
      args?: Subset<T, NotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationsAggregateArgs>(args: Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>

    /**
     * Group by Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationsGroupByArgs} args - Group by arguments.
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
      T extends NotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifications model
   */
  readonly fields: NotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifications model
   */
  interface NotificationsFieldRefs {
    readonly notifications_id: FieldRef<"Notifications", 'Int'>
    readonly customer_id: FieldRef<"Notifications", 'Int'>
    readonly push_notifications_enabled: FieldRef<"Notifications", 'Boolean'>
    readonly push_notify_login: FieldRef<"Notifications", 'Boolean'>
    readonly notification_tone: FieldRef<"Notifications", 'String'>
    readonly email_marketing: FieldRef<"Notifications", 'Boolean'>
    readonly email_account_activity: FieldRef<"Notifications", 'Boolean'>
    readonly email_newsletter: FieldRef<"Notifications", 'Boolean'>
    readonly sms_password_changes: FieldRef<"Notifications", 'Boolean'>
    readonly sms_login_attempts: FieldRef<"Notifications", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notifications findUnique
   */
  export type NotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findUniqueOrThrow
   */
  export type NotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications findFirst
   */
  export type NotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findFirstOrThrow
   */
  export type NotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications findMany
   */
  export type NotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationsOrderByWithRelationInput | NotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationsScalarFieldEnum | NotificationsScalarFieldEnum[]
  }

  /**
   * Notifications create
   */
  export type NotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifications.
     */
    data: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
  }

  /**
   * Notifications createMany
   */
  export type NotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifications createManyAndReturn
   */
  export type NotificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationsCreateManyInput | NotificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications update
   */
  export type NotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifications.
     */
    data: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
    /**
     * Choose, which Notifications to update.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications updateMany
   */
  export type NotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notifications updateManyAndReturn
   */
  export type NotificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationsUpdateManyMutationInput, NotificationsUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifications upsert
   */
  export type NotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifications to update in case it exists.
     */
    where: NotificationsWhereUniqueInput
    /**
     * In case the Notifications found by the `where` argument doesn't exist, create a new Notifications with this data.
     */
    create: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
    /**
     * In case the Notifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationsUpdateInput, NotificationsUncheckedUpdateInput>
  }

  /**
   * Notifications delete
   */
  export type NotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
    /**
     * Filter which Notifications to delete.
     */
    where: NotificationsWhereUniqueInput
  }

  /**
   * Notifications deleteMany
   */
  export type NotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationsWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notifications without action
   */
  export type NotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifications
     */
    select?: NotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notifications
     */
    omit?: NotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationsInclude<ExtArgs> | null
  }


  /**
   * Model Towers
   */

  export type AggregateTowers = {
    _count: TowersCountAggregateOutputType | null
    _avg: TowersAvgAggregateOutputType | null
    _sum: TowersSumAggregateOutputType | null
    _min: TowersMinAggregateOutputType | null
    _max: TowersMaxAggregateOutputType | null
  }

  export type TowersAvgAggregateOutputType = {
    id: number | null
    model: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    customer_id: number | null
    order_id: number | null
    state: number | null
    c_group: number | null
    error_state: number | null
    length: number | null
    height: number | null
    width: number | null
  }

  export type TowersSumAggregateOutputType = {
    id: number | null
    model: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    customer_id: number | null
    order_id: number | null
    state: number | null
    c_group: number | null
    error_state: number | null
    length: number | null
    height: number | null
    width: number | null
  }

  export type TowersMinAggregateOutputType = {
    id: number | null
    model: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    customer_id: number | null
    order_id: number | null
    state: number | null
    c_group: number | null
    error_state: number | null
    length: number | null
    height: number | null
    width: number | null
    software_version: string | null
  }

  export type TowersMaxAggregateOutputType = {
    id: number | null
    model: number | null
    latitude: Decimal | null
    longitude: Decimal | null
    customer_id: number | null
    order_id: number | null
    state: number | null
    c_group: number | null
    error_state: number | null
    length: number | null
    height: number | null
    width: number | null
    software_version: string | null
  }

  export type TowersCountAggregateOutputType = {
    id: number
    model: number
    latitude: number
    longitude: number
    customer_id: number
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: number
    _all: number
  }


  export type TowersAvgAggregateInputType = {
    id?: true
    model?: true
    latitude?: true
    longitude?: true
    customer_id?: true
    order_id?: true
    state?: true
    c_group?: true
    error_state?: true
    length?: true
    height?: true
    width?: true
  }

  export type TowersSumAggregateInputType = {
    id?: true
    model?: true
    latitude?: true
    longitude?: true
    customer_id?: true
    order_id?: true
    state?: true
    c_group?: true
    error_state?: true
    length?: true
    height?: true
    width?: true
  }

  export type TowersMinAggregateInputType = {
    id?: true
    model?: true
    latitude?: true
    longitude?: true
    customer_id?: true
    order_id?: true
    state?: true
    c_group?: true
    error_state?: true
    length?: true
    height?: true
    width?: true
    software_version?: true
  }

  export type TowersMaxAggregateInputType = {
    id?: true
    model?: true
    latitude?: true
    longitude?: true
    customer_id?: true
    order_id?: true
    state?: true
    c_group?: true
    error_state?: true
    length?: true
    height?: true
    width?: true
    software_version?: true
  }

  export type TowersCountAggregateInputType = {
    id?: true
    model?: true
    latitude?: true
    longitude?: true
    customer_id?: true
    order_id?: true
    state?: true
    c_group?: true
    error_state?: true
    length?: true
    height?: true
    width?: true
    software_version?: true
    _all?: true
  }

  export type TowersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Towers to aggregate.
     */
    where?: TowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowersOrderByWithRelationInput | TowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Towers
    **/
    _count?: true | TowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TowersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TowersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TowersMaxAggregateInputType
  }

  export type GetTowersAggregateType<T extends TowersAggregateArgs> = {
        [P in keyof T & keyof AggregateTowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTowers[P]>
      : GetScalarType<T[P], AggregateTowers[P]>
  }




  export type TowersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TowersWhereInput
    orderBy?: TowersOrderByWithAggregationInput | TowersOrderByWithAggregationInput[]
    by: TowersScalarFieldEnum[] | TowersScalarFieldEnum
    having?: TowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TowersCountAggregateInputType | true
    _avg?: TowersAvgAggregateInputType
    _sum?: TowersSumAggregateInputType
    _min?: TowersMinAggregateInputType
    _max?: TowersMaxAggregateInputType
  }

  export type TowersGroupByOutputType = {
    id: number
    model: number
    latitude: Decimal
    longitude: Decimal
    customer_id: number
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
    _count: TowersCountAggregateOutputType | null
    _avg: TowersAvgAggregateOutputType | null
    _sum: TowersSumAggregateOutputType | null
    _min: TowersMinAggregateOutputType | null
    _max: TowersMaxAggregateOutputType | null
  }

  type GetTowersGroupByPayload<T extends TowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TowersGroupByOutputType[P]>
            : GetScalarType<T[P], TowersGroupByOutputType[P]>
        }
      >
    >


  export type TowersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    latitude?: boolean
    longitude?: boolean
    customer_id?: boolean
    order_id?: boolean
    state?: boolean
    c_group?: boolean
    error_state?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    software_version?: boolean
    telemetry?: boolean | Towers$telemetryArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["towers"]>

  export type TowersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    latitude?: boolean
    longitude?: boolean
    customer_id?: boolean
    order_id?: boolean
    state?: boolean
    c_group?: boolean
    error_state?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    software_version?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["towers"]>

  export type TowersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    model?: boolean
    latitude?: boolean
    longitude?: boolean
    customer_id?: boolean
    order_id?: boolean
    state?: boolean
    c_group?: boolean
    error_state?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    software_version?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["towers"]>

  export type TowersSelectScalar = {
    id?: boolean
    model?: boolean
    latitude?: boolean
    longitude?: boolean
    customer_id?: boolean
    order_id?: boolean
    state?: boolean
    c_group?: boolean
    error_state?: boolean
    length?: boolean
    height?: boolean
    width?: boolean
    software_version?: boolean
  }

  export type TowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "latitude" | "longitude" | "customer_id" | "order_id" | "state" | "c_group" | "error_state" | "length" | "height" | "width" | "software_version", ExtArgs["result"]["towers"]>
  export type TowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telemetry?: boolean | Towers$telemetryArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type TowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type TowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $TowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Towers"
    objects: {
      telemetry: Prisma.$TelemetryPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: number
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      customer_id: number
      order_id: number
      state: number
      c_group: number
      error_state: number
      length: number
      height: number
      width: number
      software_version: string
    }, ExtArgs["result"]["towers"]>
    composites: {}
  }

  type TowersGetPayload<S extends boolean | null | undefined | TowersDefaultArgs> = $Result.GetResult<Prisma.$TowersPayload, S>

  type TowersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TowersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TowersCountAggregateInputType | true
    }

  export interface TowersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Towers'], meta: { name: 'Towers' } }
    /**
     * Find zero or one Towers that matches the filter.
     * @param {TowersFindUniqueArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TowersFindUniqueArgs>(args: SelectSubset<T, TowersFindUniqueArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Towers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TowersFindUniqueOrThrowArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TowersFindUniqueOrThrowArgs>(args: SelectSubset<T, TowersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersFindFirstArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TowersFindFirstArgs>(args?: SelectSubset<T, TowersFindFirstArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Towers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersFindFirstOrThrowArgs} args - Arguments to find a Towers
     * @example
     * // Get one Towers
     * const towers = await prisma.towers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TowersFindFirstOrThrowArgs>(args?: SelectSubset<T, TowersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Towers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towers
     * const towers = await prisma.towers.findMany()
     * 
     * // Get first 10 Towers
     * const towers = await prisma.towers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const towersWithIdOnly = await prisma.towers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TowersFindManyArgs>(args?: SelectSubset<T, TowersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Towers.
     * @param {TowersCreateArgs} args - Arguments to create a Towers.
     * @example
     * // Create one Towers
     * const Towers = await prisma.towers.create({
     *   data: {
     *     // ... data to create a Towers
     *   }
     * })
     * 
     */
    create<T extends TowersCreateArgs>(args: SelectSubset<T, TowersCreateArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Towers.
     * @param {TowersCreateManyArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const towers = await prisma.towers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TowersCreateManyArgs>(args?: SelectSubset<T, TowersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Towers and returns the data saved in the database.
     * @param {TowersCreateManyAndReturnArgs} args - Arguments to create many Towers.
     * @example
     * // Create many Towers
     * const towers = await prisma.towers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Towers and only return the `id`
     * const towersWithIdOnly = await prisma.towers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TowersCreateManyAndReturnArgs>(args?: SelectSubset<T, TowersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Towers.
     * @param {TowersDeleteArgs} args - Arguments to delete one Towers.
     * @example
     * // Delete one Towers
     * const Towers = await prisma.towers.delete({
     *   where: {
     *     // ... filter to delete one Towers
     *   }
     * })
     * 
     */
    delete<T extends TowersDeleteArgs>(args: SelectSubset<T, TowersDeleteArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Towers.
     * @param {TowersUpdateArgs} args - Arguments to update one Towers.
     * @example
     * // Update one Towers
     * const towers = await prisma.towers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TowersUpdateArgs>(args: SelectSubset<T, TowersUpdateArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Towers.
     * @param {TowersDeleteManyArgs} args - Arguments to filter Towers to delete.
     * @example
     * // Delete a few Towers
     * const { count } = await prisma.towers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TowersDeleteManyArgs>(args?: SelectSubset<T, TowersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towers
     * const towers = await prisma.towers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TowersUpdateManyArgs>(args: SelectSubset<T, TowersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towers and returns the data updated in the database.
     * @param {TowersUpdateManyAndReturnArgs} args - Arguments to update many Towers.
     * @example
     * // Update many Towers
     * const towers = await prisma.towers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Towers and only return the `id`
     * const towersWithIdOnly = await prisma.towers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TowersUpdateManyAndReturnArgs>(args: SelectSubset<T, TowersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Towers.
     * @param {TowersUpsertArgs} args - Arguments to update or create a Towers.
     * @example
     * // Update or create a Towers
     * const towers = await prisma.towers.upsert({
     *   create: {
     *     // ... data to create a Towers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Towers we want to update
     *   }
     * })
     */
    upsert<T extends TowersUpsertArgs>(args: SelectSubset<T, TowersUpsertArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersCountArgs} args - Arguments to filter Towers to count.
     * @example
     * // Count the number of Towers
     * const count = await prisma.towers.count({
     *   where: {
     *     // ... the filter for the Towers we want to count
     *   }
     * })
    **/
    count<T extends TowersCountArgs>(
      args?: Subset<T, TowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TowersAggregateArgs>(args: Subset<T, TowersAggregateArgs>): Prisma.PrismaPromise<GetTowersAggregateType<T>>

    /**
     * Group by Towers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TowersGroupByArgs} args - Group by arguments.
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
      T extends TowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TowersGroupByArgs['orderBy'] }
        : { orderBy?: TowersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Towers model
   */
  readonly fields: TowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Towers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TowersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telemetry<T extends Towers$telemetryArgs<ExtArgs> = {}>(args?: Subset<T, Towers$telemetryArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Towers model
   */
  interface TowersFieldRefs {
    readonly id: FieldRef<"Towers", 'Int'>
    readonly model: FieldRef<"Towers", 'Int'>
    readonly latitude: FieldRef<"Towers", 'Decimal'>
    readonly longitude: FieldRef<"Towers", 'Decimal'>
    readonly customer_id: FieldRef<"Towers", 'Int'>
    readonly order_id: FieldRef<"Towers", 'Int'>
    readonly state: FieldRef<"Towers", 'Int'>
    readonly c_group: FieldRef<"Towers", 'Int'>
    readonly error_state: FieldRef<"Towers", 'Int'>
    readonly length: FieldRef<"Towers", 'Int'>
    readonly height: FieldRef<"Towers", 'Int'>
    readonly width: FieldRef<"Towers", 'Int'>
    readonly software_version: FieldRef<"Towers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Towers findUnique
   */
  export type TowersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where: TowersWhereUniqueInput
  }

  /**
   * Towers findUniqueOrThrow
   */
  export type TowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where: TowersWhereUniqueInput
  }

  /**
   * Towers findFirst
   */
  export type TowersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where?: TowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowersOrderByWithRelationInput | TowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towers.
     */
    cursor?: TowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * Towers findFirstOrThrow
   */
  export type TowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where?: TowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowersOrderByWithRelationInput | TowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Towers.
     */
    cursor?: TowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Towers.
     */
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * Towers findMany
   */
  export type TowersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * Filter, which Towers to fetch.
     */
    where?: TowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Towers to fetch.
     */
    orderBy?: TowersOrderByWithRelationInput | TowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Towers.
     */
    cursor?: TowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Towers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Towers.
     */
    skip?: number
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * Towers create
   */
  export type TowersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * The data needed to create a Towers.
     */
    data: XOR<TowersCreateInput, TowersUncheckedCreateInput>
  }

  /**
   * Towers createMany
   */
  export type TowersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Towers.
     */
    data: TowersCreateManyInput | TowersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Towers createManyAndReturn
   */
  export type TowersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * The data used to create many Towers.
     */
    data: TowersCreateManyInput | TowersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Towers update
   */
  export type TowersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * The data needed to update a Towers.
     */
    data: XOR<TowersUpdateInput, TowersUncheckedUpdateInput>
    /**
     * Choose, which Towers to update.
     */
    where: TowersWhereUniqueInput
  }

  /**
   * Towers updateMany
   */
  export type TowersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Towers.
     */
    data: XOR<TowersUpdateManyMutationInput, TowersUncheckedUpdateManyInput>
    /**
     * Filter which Towers to update
     */
    where?: TowersWhereInput
    /**
     * Limit how many Towers to update.
     */
    limit?: number
  }

  /**
   * Towers updateManyAndReturn
   */
  export type TowersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * The data used to update Towers.
     */
    data: XOR<TowersUpdateManyMutationInput, TowersUncheckedUpdateManyInput>
    /**
     * Filter which Towers to update
     */
    where?: TowersWhereInput
    /**
     * Limit how many Towers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Towers upsert
   */
  export type TowersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * The filter to search for the Towers to update in case it exists.
     */
    where: TowersWhereUniqueInput
    /**
     * In case the Towers found by the `where` argument doesn't exist, create a new Towers with this data.
     */
    create: XOR<TowersCreateInput, TowersUncheckedCreateInput>
    /**
     * In case the Towers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TowersUpdateInput, TowersUncheckedUpdateInput>
  }

  /**
   * Towers delete
   */
  export type TowersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
    /**
     * Filter which Towers to delete.
     */
    where: TowersWhereUniqueInput
  }

  /**
   * Towers deleteMany
   */
  export type TowersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Towers to delete
     */
    where?: TowersWhereInput
    /**
     * Limit how many Towers to delete.
     */
    limit?: number
  }

  /**
   * Towers.telemetry
   */
  export type Towers$telemetryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    where?: TelemetryWhereInput
  }

  /**
   * Towers without action
   */
  export type TowersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Towers
     */
    select?: TowersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Towers
     */
    omit?: TowersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TowersInclude<ExtArgs> | null
  }


  /**
   * Model Telemetry
   */

  export type AggregateTelemetry = {
    _count: TelemetryCountAggregateOutputType | null
    _avg: TelemetryAvgAggregateOutputType | null
    _sum: TelemetrySumAggregateOutputType | null
    _min: TelemetryMinAggregateOutputType | null
    _max: TelemetryMaxAggregateOutputType | null
  }

  export type TelemetryAvgAggregateOutputType = {
    id: number | null
    tower_id: number | null
    humidity: number | null
    temperature: number | null
    pressure: number | null
    status: number | null
    power_output: number | null
    solar_flux: number | null
    angle: number | null
  }

  export type TelemetrySumAggregateOutputType = {
    id: number | null
    tower_id: number | null
    humidity: number | null
    temperature: number | null
    pressure: number | null
    status: number | null
    power_output: number | null
    solar_flux: number | null
    angle: number | null
  }

  export type TelemetryMinAggregateOutputType = {
    id: number | null
    date_time: Date | null
    tower_id: number | null
    humidity: number | null
    temperature: number | null
    pressure: number | null
    status: number | null
    power_output: number | null
    clouds: boolean | null
    solar_flux: number | null
    angle: number | null
  }

  export type TelemetryMaxAggregateOutputType = {
    id: number | null
    date_time: Date | null
    tower_id: number | null
    humidity: number | null
    temperature: number | null
    pressure: number | null
    status: number | null
    power_output: number | null
    clouds: boolean | null
    solar_flux: number | null
    angle: number | null
  }

  export type TelemetryCountAggregateOutputType = {
    id: number
    date_time: number
    tower_id: number
    humidity: number
    temperature: number
    pressure: number
    status: number
    power_output: number
    clouds: number
    solar_flux: number
    angle: number
    _all: number
  }


  export type TelemetryAvgAggregateInputType = {
    id?: true
    tower_id?: true
    humidity?: true
    temperature?: true
    pressure?: true
    status?: true
    power_output?: true
    solar_flux?: true
    angle?: true
  }

  export type TelemetrySumAggregateInputType = {
    id?: true
    tower_id?: true
    humidity?: true
    temperature?: true
    pressure?: true
    status?: true
    power_output?: true
    solar_flux?: true
    angle?: true
  }

  export type TelemetryMinAggregateInputType = {
    id?: true
    date_time?: true
    tower_id?: true
    humidity?: true
    temperature?: true
    pressure?: true
    status?: true
    power_output?: true
    clouds?: true
    solar_flux?: true
    angle?: true
  }

  export type TelemetryMaxAggregateInputType = {
    id?: true
    date_time?: true
    tower_id?: true
    humidity?: true
    temperature?: true
    pressure?: true
    status?: true
    power_output?: true
    clouds?: true
    solar_flux?: true
    angle?: true
  }

  export type TelemetryCountAggregateInputType = {
    id?: true
    date_time?: true
    tower_id?: true
    humidity?: true
    temperature?: true
    pressure?: true
    status?: true
    power_output?: true
    clouds?: true
    solar_flux?: true
    angle?: true
    _all?: true
  }

  export type TelemetryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telemetry to aggregate.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telemetries
    **/
    _count?: true | TelemetryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelemetryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelemetrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelemetryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelemetryMaxAggregateInputType
  }

  export type GetTelemetryAggregateType<T extends TelemetryAggregateArgs> = {
        [P in keyof T & keyof AggregateTelemetry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelemetry[P]>
      : GetScalarType<T[P], AggregateTelemetry[P]>
  }




  export type TelemetryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelemetryWhereInput
    orderBy?: TelemetryOrderByWithAggregationInput | TelemetryOrderByWithAggregationInput[]
    by: TelemetryScalarFieldEnum[] | TelemetryScalarFieldEnum
    having?: TelemetryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelemetryCountAggregateInputType | true
    _avg?: TelemetryAvgAggregateInputType
    _sum?: TelemetrySumAggregateInputType
    _min?: TelemetryMinAggregateInputType
    _max?: TelemetryMaxAggregateInputType
  }

  export type TelemetryGroupByOutputType = {
    id: number
    date_time: Date
    tower_id: number
    humidity: number
    temperature: number
    pressure: number
    status: number
    power_output: number
    clouds: boolean
    solar_flux: number
    angle: number
    _count: TelemetryCountAggregateOutputType | null
    _avg: TelemetryAvgAggregateOutputType | null
    _sum: TelemetrySumAggregateOutputType | null
    _min: TelemetryMinAggregateOutputType | null
    _max: TelemetryMaxAggregateOutputType | null
  }

  type GetTelemetryGroupByPayload<T extends TelemetryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelemetryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelemetryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelemetryGroupByOutputType[P]>
            : GetScalarType<T[P], TelemetryGroupByOutputType[P]>
        }
      >
    >


  export type TelemetrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_time?: boolean
    tower_id?: boolean
    humidity?: boolean
    temperature?: boolean
    pressure?: boolean
    status?: boolean
    power_output?: boolean
    clouds?: boolean
    solar_flux?: boolean
    angle?: boolean
    towers?: boolean | TowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetry"]>

  export type TelemetrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_time?: boolean
    tower_id?: boolean
    humidity?: boolean
    temperature?: boolean
    pressure?: boolean
    status?: boolean
    power_output?: boolean
    clouds?: boolean
    solar_flux?: boolean
    angle?: boolean
    towers?: boolean | TowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetry"]>

  export type TelemetrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date_time?: boolean
    tower_id?: boolean
    humidity?: boolean
    temperature?: boolean
    pressure?: boolean
    status?: boolean
    power_output?: boolean
    clouds?: boolean
    solar_flux?: boolean
    angle?: boolean
    towers?: boolean | TowersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telemetry"]>

  export type TelemetrySelectScalar = {
    id?: boolean
    date_time?: boolean
    tower_id?: boolean
    humidity?: boolean
    temperature?: boolean
    pressure?: boolean
    status?: boolean
    power_output?: boolean
    clouds?: boolean
    solar_flux?: boolean
    angle?: boolean
  }

  export type TelemetryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date_time" | "tower_id" | "humidity" | "temperature" | "pressure" | "status" | "power_output" | "clouds" | "solar_flux" | "angle", ExtArgs["result"]["telemetry"]>
  export type TelemetryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towers?: boolean | TowersDefaultArgs<ExtArgs>
  }
  export type TelemetryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towers?: boolean | TowersDefaultArgs<ExtArgs>
  }
  export type TelemetryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towers?: boolean | TowersDefaultArgs<ExtArgs>
  }

  export type $TelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telemetry"
    objects: {
      towers: Prisma.$TowersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date_time: Date
      tower_id: number
      humidity: number
      temperature: number
      pressure: number
      status: number
      power_output: number
      clouds: boolean
      solar_flux: number
      angle: number
    }, ExtArgs["result"]["telemetry"]>
    composites: {}
  }

  type TelemetryGetPayload<S extends boolean | null | undefined | TelemetryDefaultArgs> = $Result.GetResult<Prisma.$TelemetryPayload, S>

  type TelemetryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelemetryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelemetryCountAggregateInputType | true
    }

  export interface TelemetryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telemetry'], meta: { name: 'Telemetry' } }
    /**
     * Find zero or one Telemetry that matches the filter.
     * @param {TelemetryFindUniqueArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelemetryFindUniqueArgs>(args: SelectSubset<T, TelemetryFindUniqueArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telemetry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelemetryFindUniqueOrThrowArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelemetryFindUniqueOrThrowArgs>(args: SelectSubset<T, TelemetryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telemetry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryFindFirstArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelemetryFindFirstArgs>(args?: SelectSubset<T, TelemetryFindFirstArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telemetry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryFindFirstOrThrowArgs} args - Arguments to find a Telemetry
     * @example
     * // Get one Telemetry
     * const telemetry = await prisma.telemetry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelemetryFindFirstOrThrowArgs>(args?: SelectSubset<T, TelemetryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telemetries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telemetries
     * const telemetries = await prisma.telemetry.findMany()
     * 
     * // Get first 10 Telemetries
     * const telemetries = await prisma.telemetry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telemetryWithIdOnly = await prisma.telemetry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelemetryFindManyArgs>(args?: SelectSubset<T, TelemetryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telemetry.
     * @param {TelemetryCreateArgs} args - Arguments to create a Telemetry.
     * @example
     * // Create one Telemetry
     * const Telemetry = await prisma.telemetry.create({
     *   data: {
     *     // ... data to create a Telemetry
     *   }
     * })
     * 
     */
    create<T extends TelemetryCreateArgs>(args: SelectSubset<T, TelemetryCreateArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telemetries.
     * @param {TelemetryCreateManyArgs} args - Arguments to create many Telemetries.
     * @example
     * // Create many Telemetries
     * const telemetry = await prisma.telemetry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelemetryCreateManyArgs>(args?: SelectSubset<T, TelemetryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Telemetries and returns the data saved in the database.
     * @param {TelemetryCreateManyAndReturnArgs} args - Arguments to create many Telemetries.
     * @example
     * // Create many Telemetries
     * const telemetry = await prisma.telemetry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Telemetries and only return the `id`
     * const telemetryWithIdOnly = await prisma.telemetry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelemetryCreateManyAndReturnArgs>(args?: SelectSubset<T, TelemetryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Telemetry.
     * @param {TelemetryDeleteArgs} args - Arguments to delete one Telemetry.
     * @example
     * // Delete one Telemetry
     * const Telemetry = await prisma.telemetry.delete({
     *   where: {
     *     // ... filter to delete one Telemetry
     *   }
     * })
     * 
     */
    delete<T extends TelemetryDeleteArgs>(args: SelectSubset<T, TelemetryDeleteArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telemetry.
     * @param {TelemetryUpdateArgs} args - Arguments to update one Telemetry.
     * @example
     * // Update one Telemetry
     * const telemetry = await prisma.telemetry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelemetryUpdateArgs>(args: SelectSubset<T, TelemetryUpdateArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telemetries.
     * @param {TelemetryDeleteManyArgs} args - Arguments to filter Telemetries to delete.
     * @example
     * // Delete a few Telemetries
     * const { count } = await prisma.telemetry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelemetryDeleteManyArgs>(args?: SelectSubset<T, TelemetryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telemetries
     * const telemetry = await prisma.telemetry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelemetryUpdateManyArgs>(args: SelectSubset<T, TelemetryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telemetries and returns the data updated in the database.
     * @param {TelemetryUpdateManyAndReturnArgs} args - Arguments to update many Telemetries.
     * @example
     * // Update many Telemetries
     * const telemetry = await prisma.telemetry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Telemetries and only return the `id`
     * const telemetryWithIdOnly = await prisma.telemetry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TelemetryUpdateManyAndReturnArgs>(args: SelectSubset<T, TelemetryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Telemetry.
     * @param {TelemetryUpsertArgs} args - Arguments to update or create a Telemetry.
     * @example
     * // Update or create a Telemetry
     * const telemetry = await prisma.telemetry.upsert({
     *   create: {
     *     // ... data to create a Telemetry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telemetry we want to update
     *   }
     * })
     */
    upsert<T extends TelemetryUpsertArgs>(args: SelectSubset<T, TelemetryUpsertArgs<ExtArgs>>): Prisma__TelemetryClient<$Result.GetResult<Prisma.$TelemetryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telemetries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryCountArgs} args - Arguments to filter Telemetries to count.
     * @example
     * // Count the number of Telemetries
     * const count = await prisma.telemetry.count({
     *   where: {
     *     // ... the filter for the Telemetries we want to count
     *   }
     * })
    **/
    count<T extends TelemetryCountArgs>(
      args?: Subset<T, TelemetryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelemetryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelemetryAggregateArgs>(args: Subset<T, TelemetryAggregateArgs>): Prisma.PrismaPromise<GetTelemetryAggregateType<T>>

    /**
     * Group by Telemetry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelemetryGroupByArgs} args - Group by arguments.
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
      T extends TelemetryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelemetryGroupByArgs['orderBy'] }
        : { orderBy?: TelemetryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TelemetryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelemetryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telemetry model
   */
  readonly fields: TelemetryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telemetry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelemetryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    towers<T extends TowersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TowersDefaultArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Telemetry model
   */
  interface TelemetryFieldRefs {
    readonly id: FieldRef<"Telemetry", 'Int'>
    readonly date_time: FieldRef<"Telemetry", 'DateTime'>
    readonly tower_id: FieldRef<"Telemetry", 'Int'>
    readonly humidity: FieldRef<"Telemetry", 'Float'>
    readonly temperature: FieldRef<"Telemetry", 'Float'>
    readonly pressure: FieldRef<"Telemetry", 'Float'>
    readonly status: FieldRef<"Telemetry", 'Int'>
    readonly power_output: FieldRef<"Telemetry", 'Int'>
    readonly clouds: FieldRef<"Telemetry", 'Boolean'>
    readonly solar_flux: FieldRef<"Telemetry", 'Int'>
    readonly angle: FieldRef<"Telemetry", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Telemetry findUnique
   */
  export type TelemetryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry findUniqueOrThrow
   */
  export type TelemetryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry findFirst
   */
  export type TelemetryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telemetries.
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telemetries.
     */
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Telemetry findFirstOrThrow
   */
  export type TelemetryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetry to fetch.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telemetries.
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telemetries.
     */
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Telemetry findMany
   */
  export type TelemetryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter, which Telemetries to fetch.
     */
    where?: TelemetryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telemetries to fetch.
     */
    orderBy?: TelemetryOrderByWithRelationInput | TelemetryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telemetries.
     */
    cursor?: TelemetryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telemetries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telemetries.
     */
    skip?: number
    distinct?: TelemetryScalarFieldEnum | TelemetryScalarFieldEnum[]
  }

  /**
   * Telemetry create
   */
  export type TelemetryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * The data needed to create a Telemetry.
     */
    data: XOR<TelemetryCreateInput, TelemetryUncheckedCreateInput>
  }

  /**
   * Telemetry createMany
   */
  export type TelemetryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telemetries.
     */
    data: TelemetryCreateManyInput | TelemetryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telemetry createManyAndReturn
   */
  export type TelemetryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * The data used to create many Telemetries.
     */
    data: TelemetryCreateManyInput | TelemetryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Telemetry update
   */
  export type TelemetryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * The data needed to update a Telemetry.
     */
    data: XOR<TelemetryUpdateInput, TelemetryUncheckedUpdateInput>
    /**
     * Choose, which Telemetry to update.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry updateMany
   */
  export type TelemetryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telemetries.
     */
    data: XOR<TelemetryUpdateManyMutationInput, TelemetryUncheckedUpdateManyInput>
    /**
     * Filter which Telemetries to update
     */
    where?: TelemetryWhereInput
    /**
     * Limit how many Telemetries to update.
     */
    limit?: number
  }

  /**
   * Telemetry updateManyAndReturn
   */
  export type TelemetryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * The data used to update Telemetries.
     */
    data: XOR<TelemetryUpdateManyMutationInput, TelemetryUncheckedUpdateManyInput>
    /**
     * Filter which Telemetries to update
     */
    where?: TelemetryWhereInput
    /**
     * Limit how many Telemetries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Telemetry upsert
   */
  export type TelemetryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * The filter to search for the Telemetry to update in case it exists.
     */
    where: TelemetryWhereUniqueInput
    /**
     * In case the Telemetry found by the `where` argument doesn't exist, create a new Telemetry with this data.
     */
    create: XOR<TelemetryCreateInput, TelemetryUncheckedCreateInput>
    /**
     * In case the Telemetry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelemetryUpdateInput, TelemetryUncheckedUpdateInput>
  }

  /**
   * Telemetry delete
   */
  export type TelemetryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
    /**
     * Filter which Telemetry to delete.
     */
    where: TelemetryWhereUniqueInput
  }

  /**
   * Telemetry deleteMany
   */
  export type TelemetryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telemetries to delete
     */
    where?: TelemetryWhereInput
    /**
     * Limit how many Telemetries to delete.
     */
    limit?: number
  }

  /**
   * Telemetry without action
   */
  export type TelemetryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telemetry
     */
    select?: TelemetrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telemetry
     */
    omit?: TelemetryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelemetryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    address_id: 'address_id',
    country_code: 'country_code',
    phone_number: 'phone_number',
    customer_type: 'customer_type',
    password_hash: 'password_hash'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    settings_id: 'settings_id',
    customer_id: 'customer_id',
    theme: 'theme',
    time_zone: 'time_zone',
    text_size: 'text_size',
    bold_text: 'bold_text',
    update_frequency: 'update_frequency',
    region: 'region',
    language: 'language',
    twentyfourhourtime: 'twentyfourhourtime',
    last_login_device: 'last_login_device',
    last_login: 'last_login',
    email_recovery: 'email_recovery',
    phone_recovery: 'phone_recovery'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


  export const NotificationsScalarFieldEnum: {
    notifications_id: 'notifications_id',
    customer_id: 'customer_id',
    push_notifications_enabled: 'push_notifications_enabled',
    push_notify_login: 'push_notify_login',
    notification_tone: 'notification_tone',
    email_marketing: 'email_marketing',
    email_account_activity: 'email_account_activity',
    email_newsletter: 'email_newsletter',
    sms_password_changes: 'sms_password_changes',
    sms_login_attempts: 'sms_login_attempts'
  };

  export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum]


  export const TowersScalarFieldEnum: {
    id: 'id',
    model: 'model',
    latitude: 'latitude',
    longitude: 'longitude',
    customer_id: 'customer_id',
    order_id: 'order_id',
    state: 'state',
    c_group: 'c_group',
    error_state: 'error_state',
    length: 'length',
    height: 'height',
    width: 'width',
    software_version: 'software_version'
  };

  export type TowersScalarFieldEnum = (typeof TowersScalarFieldEnum)[keyof typeof TowersScalarFieldEnum]


  export const TelemetryScalarFieldEnum: {
    id: 'id',
    date_time: 'date_time',
    tower_id: 'tower_id',
    humidity: 'humidity',
    temperature: 'temperature',
    pressure: 'pressure',
    status: 'status',
    power_output: 'power_output',
    clouds: 'clouds',
    solar_flux: 'solar_flux',
    angle: 'angle'
  };

  export type TelemetryScalarFieldEnum = (typeof TelemetryScalarFieldEnum)[keyof typeof TelemetryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    address_id?: IntFilter<"Customer"> | number
    country_code?: IntFilter<"Customer"> | number
    phone_number?: IntNullableFilter<"Customer"> | number | null
    customer_type?: StringFilter<"Customer"> | string
    password_hash?: StringFilter<"Customer"> | string
    setting?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    notification?: XOR<NotificationsNullableScalarRelationFilter, NotificationsWhereInput> | null
    tower?: XOR<TowersNullableScalarRelationFilter, TowersWhereInput> | null
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
    setting?: SettingsOrderByWithRelationInput
    notification?: NotificationsOrderByWithRelationInput
    tower?: TowersOrderByWithRelationInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone_number?: number
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address_id?: IntFilter<"Customer"> | number
    country_code?: IntFilter<"Customer"> | number
    customer_type?: StringFilter<"Customer"> | string
    password_hash?: StringFilter<"Customer"> | string
    setting?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    notification?: XOR<NotificationsNullableScalarRelationFilter, NotificationsWhereInput> | null
    tower?: XOR<TowersNullableScalarRelationFilter, TowersWhereInput> | null
  }, "id" | "email" | "phone_number">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    address_id?: IntWithAggregatesFilter<"Customer"> | number
    country_code?: IntWithAggregatesFilter<"Customer"> | number
    phone_number?: IntNullableWithAggregatesFilter<"Customer"> | number | null
    customer_type?: StringWithAggregatesFilter<"Customer"> | string
    password_hash?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    settings_id?: IntFilter<"Settings"> | number
    customer_id?: IntFilter<"Settings"> | number
    theme?: StringFilter<"Settings"> | string
    time_zone?: StringFilter<"Settings"> | string
    text_size?: StringFilter<"Settings"> | string
    bold_text?: BoolFilter<"Settings"> | boolean
    update_frequency?: StringFilter<"Settings"> | string
    region?: StringFilter<"Settings"> | string
    language?: StringFilter<"Settings"> | string
    twentyfourhourtime?: BoolFilter<"Settings"> | boolean
    last_login_device?: StringFilter<"Settings"> | string
    last_login?: DateTimeNullableFilter<"Settings"> | Date | string | null
    email_recovery?: StringNullableFilter<"Settings"> | string | null
    phone_recovery?: StringNullableFilter<"Settings"> | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type SettingsOrderByWithRelationInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
    theme?: SortOrder
    time_zone?: SortOrder
    text_size?: SortOrder
    bold_text?: SortOrder
    update_frequency?: SortOrder
    region?: SortOrder
    language?: SortOrder
    twentyfourhourtime?: SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrderInput | SortOrder
    email_recovery?: SortOrderInput | SortOrder
    phone_recovery?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    settings_id?: number
    customer_id?: number
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    theme?: StringFilter<"Settings"> | string
    time_zone?: StringFilter<"Settings"> | string
    text_size?: StringFilter<"Settings"> | string
    bold_text?: BoolFilter<"Settings"> | boolean
    update_frequency?: StringFilter<"Settings"> | string
    region?: StringFilter<"Settings"> | string
    language?: StringFilter<"Settings"> | string
    twentyfourhourtime?: BoolFilter<"Settings"> | boolean
    last_login_device?: StringFilter<"Settings"> | string
    last_login?: DateTimeNullableFilter<"Settings"> | Date | string | null
    email_recovery?: StringNullableFilter<"Settings"> | string | null
    phone_recovery?: StringNullableFilter<"Settings"> | string | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "settings_id" | "customer_id">

  export type SettingsOrderByWithAggregationInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
    theme?: SortOrder
    time_zone?: SortOrder
    text_size?: SortOrder
    bold_text?: SortOrder
    update_frequency?: SortOrder
    region?: SortOrder
    language?: SortOrder
    twentyfourhourtime?: SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrderInput | SortOrder
    email_recovery?: SortOrderInput | SortOrder
    phone_recovery?: SortOrderInput | SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    settings_id?: IntWithAggregatesFilter<"Settings"> | number
    customer_id?: IntWithAggregatesFilter<"Settings"> | number
    theme?: StringWithAggregatesFilter<"Settings"> | string
    time_zone?: StringWithAggregatesFilter<"Settings"> | string
    text_size?: StringWithAggregatesFilter<"Settings"> | string
    bold_text?: BoolWithAggregatesFilter<"Settings"> | boolean
    update_frequency?: StringWithAggregatesFilter<"Settings"> | string
    region?: StringWithAggregatesFilter<"Settings"> | string
    language?: StringWithAggregatesFilter<"Settings"> | string
    twentyfourhourtime?: BoolWithAggregatesFilter<"Settings"> | boolean
    last_login_device?: StringWithAggregatesFilter<"Settings"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"Settings"> | Date | string | null
    email_recovery?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    phone_recovery?: StringNullableWithAggregatesFilter<"Settings"> | string | null
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    notifications_id?: IntFilter<"Notifications"> | number
    customer_id?: IntFilter<"Notifications"> | number
    push_notifications_enabled?: BoolFilter<"Notifications"> | boolean
    push_notify_login?: BoolFilter<"Notifications"> | boolean
    notification_tone?: StringFilter<"Notifications"> | string
    email_marketing?: BoolFilter<"Notifications"> | boolean
    email_account_activity?: BoolFilter<"Notifications"> | boolean
    email_newsletter?: BoolFilter<"Notifications"> | boolean
    sms_password_changes?: BoolFilter<"Notifications"> | boolean
    sms_login_attempts?: BoolFilter<"Notifications"> | boolean
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type NotificationsOrderByWithRelationInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
    push_notifications_enabled?: SortOrder
    push_notify_login?: SortOrder
    notification_tone?: SortOrder
    email_marketing?: SortOrder
    email_account_activity?: SortOrder
    email_newsletter?: SortOrder
    sms_password_changes?: SortOrder
    sms_login_attempts?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    notifications_id?: number
    customer_id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    push_notifications_enabled?: BoolFilter<"Notifications"> | boolean
    push_notify_login?: BoolFilter<"Notifications"> | boolean
    notification_tone?: StringFilter<"Notifications"> | string
    email_marketing?: BoolFilter<"Notifications"> | boolean
    email_account_activity?: BoolFilter<"Notifications"> | boolean
    email_newsletter?: BoolFilter<"Notifications"> | boolean
    sms_password_changes?: BoolFilter<"Notifications"> | boolean
    sms_login_attempts?: BoolFilter<"Notifications"> | boolean
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "notifications_id" | "customer_id">

  export type NotificationsOrderByWithAggregationInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
    push_notifications_enabled?: SortOrder
    push_notify_login?: SortOrder
    notification_tone?: SortOrder
    email_marketing?: SortOrder
    email_account_activity?: SortOrder
    email_newsletter?: SortOrder
    sms_password_changes?: SortOrder
    sms_login_attempts?: SortOrder
    _count?: NotificationsCountOrderByAggregateInput
    _avg?: NotificationsAvgOrderByAggregateInput
    _max?: NotificationsMaxOrderByAggregateInput
    _min?: NotificationsMinOrderByAggregateInput
    _sum?: NotificationsSumOrderByAggregateInput
  }

  export type NotificationsScalarWhereWithAggregatesInput = {
    AND?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    OR?: NotificationsScalarWhereWithAggregatesInput[]
    NOT?: NotificationsScalarWhereWithAggregatesInput | NotificationsScalarWhereWithAggregatesInput[]
    notifications_id?: IntWithAggregatesFilter<"Notifications"> | number
    customer_id?: IntWithAggregatesFilter<"Notifications"> | number
    push_notifications_enabled?: BoolWithAggregatesFilter<"Notifications"> | boolean
    push_notify_login?: BoolWithAggregatesFilter<"Notifications"> | boolean
    notification_tone?: StringWithAggregatesFilter<"Notifications"> | string
    email_marketing?: BoolWithAggregatesFilter<"Notifications"> | boolean
    email_account_activity?: BoolWithAggregatesFilter<"Notifications"> | boolean
    email_newsletter?: BoolWithAggregatesFilter<"Notifications"> | boolean
    sms_password_changes?: BoolWithAggregatesFilter<"Notifications"> | boolean
    sms_login_attempts?: BoolWithAggregatesFilter<"Notifications"> | boolean
  }

  export type TowersWhereInput = {
    AND?: TowersWhereInput | TowersWhereInput[]
    OR?: TowersWhereInput[]
    NOT?: TowersWhereInput | TowersWhereInput[]
    id?: IntFilter<"Towers"> | number
    model?: IntFilter<"Towers"> | number
    latitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    customer_id?: IntFilter<"Towers"> | number
    order_id?: IntFilter<"Towers"> | number
    state?: IntFilter<"Towers"> | number
    c_group?: IntFilter<"Towers"> | number
    error_state?: IntFilter<"Towers"> | number
    length?: IntFilter<"Towers"> | number
    height?: IntFilter<"Towers"> | number
    width?: IntFilter<"Towers"> | number
    software_version?: StringFilter<"Towers"> | string
    telemetry?: XOR<TelemetryNullableScalarRelationFilter, TelemetryWhereInput> | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type TowersOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrder
    telemetry?: TelemetryOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
  }

  export type TowersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    customer_id?: number
    order_id?: number
    AND?: TowersWhereInput | TowersWhereInput[]
    OR?: TowersWhereInput[]
    NOT?: TowersWhereInput | TowersWhereInput[]
    model?: IntFilter<"Towers"> | number
    latitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    state?: IntFilter<"Towers"> | number
    c_group?: IntFilter<"Towers"> | number
    error_state?: IntFilter<"Towers"> | number
    length?: IntFilter<"Towers"> | number
    height?: IntFilter<"Towers"> | number
    width?: IntFilter<"Towers"> | number
    software_version?: StringFilter<"Towers"> | string
    telemetry?: XOR<TelemetryNullableScalarRelationFilter, TelemetryWhereInput> | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id" | "customer_id" | "order_id">

  export type TowersOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrder
    _count?: TowersCountOrderByAggregateInput
    _avg?: TowersAvgOrderByAggregateInput
    _max?: TowersMaxOrderByAggregateInput
    _min?: TowersMinOrderByAggregateInput
    _sum?: TowersSumOrderByAggregateInput
  }

  export type TowersScalarWhereWithAggregatesInput = {
    AND?: TowersScalarWhereWithAggregatesInput | TowersScalarWhereWithAggregatesInput[]
    OR?: TowersScalarWhereWithAggregatesInput[]
    NOT?: TowersScalarWhereWithAggregatesInput | TowersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Towers"> | number
    model?: IntWithAggregatesFilter<"Towers"> | number
    latitude?: DecimalWithAggregatesFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    customer_id?: IntWithAggregatesFilter<"Towers"> | number
    order_id?: IntWithAggregatesFilter<"Towers"> | number
    state?: IntWithAggregatesFilter<"Towers"> | number
    c_group?: IntWithAggregatesFilter<"Towers"> | number
    error_state?: IntWithAggregatesFilter<"Towers"> | number
    length?: IntWithAggregatesFilter<"Towers"> | number
    height?: IntWithAggregatesFilter<"Towers"> | number
    width?: IntWithAggregatesFilter<"Towers"> | number
    software_version?: StringWithAggregatesFilter<"Towers"> | string
  }

  export type TelemetryWhereInput = {
    AND?: TelemetryWhereInput | TelemetryWhereInput[]
    OR?: TelemetryWhereInput[]
    NOT?: TelemetryWhereInput | TelemetryWhereInput[]
    id?: IntFilter<"Telemetry"> | number
    date_time?: DateTimeFilter<"Telemetry"> | Date | string
    tower_id?: IntFilter<"Telemetry"> | number
    humidity?: FloatFilter<"Telemetry"> | number
    temperature?: FloatFilter<"Telemetry"> | number
    pressure?: FloatFilter<"Telemetry"> | number
    status?: IntFilter<"Telemetry"> | number
    power_output?: IntFilter<"Telemetry"> | number
    clouds?: BoolFilter<"Telemetry"> | boolean
    solar_flux?: IntFilter<"Telemetry"> | number
    angle?: FloatFilter<"Telemetry"> | number
    towers?: XOR<TowersScalarRelationFilter, TowersWhereInput>
  }

  export type TelemetryOrderByWithRelationInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    clouds?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
    towers?: TowersOrderByWithRelationInput
  }

  export type TelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    tower_id?: number
    AND?: TelemetryWhereInput | TelemetryWhereInput[]
    OR?: TelemetryWhereInput[]
    NOT?: TelemetryWhereInput | TelemetryWhereInput[]
    date_time?: DateTimeFilter<"Telemetry"> | Date | string
    humidity?: FloatFilter<"Telemetry"> | number
    temperature?: FloatFilter<"Telemetry"> | number
    pressure?: FloatFilter<"Telemetry"> | number
    status?: IntFilter<"Telemetry"> | number
    power_output?: IntFilter<"Telemetry"> | number
    clouds?: BoolFilter<"Telemetry"> | boolean
    solar_flux?: IntFilter<"Telemetry"> | number
    angle?: FloatFilter<"Telemetry"> | number
    towers?: XOR<TowersScalarRelationFilter, TowersWhereInput>
  }, "id" | "tower_id">

  export type TelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    clouds?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
    _count?: TelemetryCountOrderByAggregateInput
    _avg?: TelemetryAvgOrderByAggregateInput
    _max?: TelemetryMaxOrderByAggregateInput
    _min?: TelemetryMinOrderByAggregateInput
    _sum?: TelemetrySumOrderByAggregateInput
  }

  export type TelemetryScalarWhereWithAggregatesInput = {
    AND?: TelemetryScalarWhereWithAggregatesInput | TelemetryScalarWhereWithAggregatesInput[]
    OR?: TelemetryScalarWhereWithAggregatesInput[]
    NOT?: TelemetryScalarWhereWithAggregatesInput | TelemetryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Telemetry"> | number
    date_time?: DateTimeWithAggregatesFilter<"Telemetry"> | Date | string
    tower_id?: IntWithAggregatesFilter<"Telemetry"> | number
    humidity?: FloatWithAggregatesFilter<"Telemetry"> | number
    temperature?: FloatWithAggregatesFilter<"Telemetry"> | number
    pressure?: FloatWithAggregatesFilter<"Telemetry"> | number
    status?: IntWithAggregatesFilter<"Telemetry"> | number
    power_output?: IntWithAggregatesFilter<"Telemetry"> | number
    clouds?: BoolWithAggregatesFilter<"Telemetry"> | boolean
    solar_flux?: IntWithAggregatesFilter<"Telemetry"> | number
    angle?: FloatWithAggregatesFilter<"Telemetry"> | number
  }

  export type CustomerCreateInput = {
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    tower?: TowersCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    tower?: TowersUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    tower?: TowersUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    tower?: TowersUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
  }

  export type SettingsCreateInput = {
    theme?: string
    time_zone?: string
    text_size?: string
    bold_text?: boolean
    update_frequency?: string
    region?: string
    language?: string
    twentyfourhourtime?: boolean
    last_login_device?: string
    last_login?: Date | string | null
    email_recovery?: string | null
    phone_recovery?: string | null
    customer: CustomerCreateNestedOneWithoutSettingInput
  }

  export type SettingsUncheckedCreateInput = {
    settings_id?: number
    customer_id: number
    theme?: string
    time_zone?: string
    text_size?: string
    bold_text?: boolean
    update_frequency?: string
    region?: string
    language?: string
    twentyfourhourtime?: boolean
    last_login_device?: string
    last_login?: Date | string | null
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsUpdateInput = {
    theme?: StringFieldUpdateOperationsInput | string
    time_zone?: StringFieldUpdateOperationsInput | string
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: BoolFieldUpdateOperationsInput | boolean
    update_frequency?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    twentyfourhourtime?: BoolFieldUpdateOperationsInput | boolean
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneRequiredWithoutSettingNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    settings_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    theme?: StringFieldUpdateOperationsInput | string
    time_zone?: StringFieldUpdateOperationsInput | string
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: BoolFieldUpdateOperationsInput | boolean
    update_frequency?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    twentyfourhourtime?: BoolFieldUpdateOperationsInput | boolean
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateManyInput = {
    settings_id?: number
    customer_id: number
    theme?: string
    time_zone?: string
    text_size?: string
    bold_text?: boolean
    update_frequency?: string
    region?: string
    language?: string
    twentyfourhourtime?: boolean
    last_login_device?: string
    last_login?: Date | string | null
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsUpdateManyMutationInput = {
    theme?: StringFieldUpdateOperationsInput | string
    time_zone?: StringFieldUpdateOperationsInput | string
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: BoolFieldUpdateOperationsInput | boolean
    update_frequency?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    twentyfourhourtime?: BoolFieldUpdateOperationsInput | boolean
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateManyInput = {
    settings_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    theme?: StringFieldUpdateOperationsInput | string
    time_zone?: StringFieldUpdateOperationsInput | string
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: BoolFieldUpdateOperationsInput | boolean
    update_frequency?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    twentyfourhourtime?: BoolFieldUpdateOperationsInput | boolean
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationsCreateInput = {
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: string
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
    customer: CustomerCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateInput = {
    notifications_id?: number
    customer_id: number
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: string
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
  }

  export type NotificationsUpdateInput = {
    push_notifications_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_notify_login?: BoolFieldUpdateOperationsInput | boolean
    notification_tone?: StringFieldUpdateOperationsInput | string
    email_marketing?: BoolFieldUpdateOperationsInput | boolean
    email_account_activity?: BoolFieldUpdateOperationsInput | boolean
    email_newsletter?: BoolFieldUpdateOperationsInput | boolean
    sms_password_changes?: BoolFieldUpdateOperationsInput | boolean
    sms_login_attempts?: BoolFieldUpdateOperationsInput | boolean
    customer?: CustomerUpdateOneRequiredWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    notifications_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    push_notifications_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_notify_login?: BoolFieldUpdateOperationsInput | boolean
    notification_tone?: StringFieldUpdateOperationsInput | string
    email_marketing?: BoolFieldUpdateOperationsInput | boolean
    email_account_activity?: BoolFieldUpdateOperationsInput | boolean
    email_newsletter?: BoolFieldUpdateOperationsInput | boolean
    sms_password_changes?: BoolFieldUpdateOperationsInput | boolean
    sms_login_attempts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsCreateManyInput = {
    notifications_id?: number
    customer_id: number
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: string
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
  }

  export type NotificationsUpdateManyMutationInput = {
    push_notifications_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_notify_login?: BoolFieldUpdateOperationsInput | boolean
    notification_tone?: StringFieldUpdateOperationsInput | string
    email_marketing?: BoolFieldUpdateOperationsInput | boolean
    email_account_activity?: BoolFieldUpdateOperationsInput | boolean
    email_newsletter?: BoolFieldUpdateOperationsInput | boolean
    sms_password_changes?: BoolFieldUpdateOperationsInput | boolean
    sms_login_attempts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateManyInput = {
    notifications_id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    push_notifications_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_notify_login?: BoolFieldUpdateOperationsInput | boolean
    notification_tone?: StringFieldUpdateOperationsInput | string
    email_marketing?: BoolFieldUpdateOperationsInput | boolean
    email_account_activity?: BoolFieldUpdateOperationsInput | boolean
    email_newsletter?: BoolFieldUpdateOperationsInput | boolean
    sms_password_changes?: BoolFieldUpdateOperationsInput | boolean
    sms_login_attempts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TowersCreateInput = {
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
    telemetry?: TelemetryCreateNestedOneWithoutTowersInput
    customer: CustomerCreateNestedOneWithoutTowerInput
  }

  export type TowersUncheckedCreateInput = {
    id?: number
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
    telemetry?: TelemetryUncheckedCreateNestedOneWithoutTowersInput
  }

  export type TowersUpdateInput = {
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
    telemetry?: TelemetryUpdateOneWithoutTowersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
  }

  export type TowersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
    telemetry?: TelemetryUncheckedUpdateOneWithoutTowersNestedInput
  }

  export type TowersCreateManyInput = {
    id?: number
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
  }

  export type TowersUpdateManyMutationInput = {
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
  }

  export type TowersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
  }

  export type TelemetryCreateInput = {
    date_time?: Date | string
    humidity: number
    temperature: number
    pressure?: number
    status: number
    power_output: number
    clouds?: boolean
    solar_flux: number
    angle: number
    towers: TowersCreateNestedOneWithoutTelemetryInput
  }

  export type TelemetryUncheckedCreateInput = {
    id?: number
    date_time?: Date | string
    tower_id: number
    humidity: number
    temperature: number
    pressure?: number
    status: number
    power_output: number
    clouds?: boolean
    solar_flux: number
    angle: number
  }

  export type TelemetryUpdateInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    power_output?: IntFieldUpdateOperationsInput | number
    clouds?: BoolFieldUpdateOperationsInput | boolean
    solar_flux?: IntFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
    towers?: TowersUpdateOneRequiredWithoutTelemetryNestedInput
  }

  export type TelemetryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: IntFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    power_output?: IntFieldUpdateOperationsInput | number
    clouds?: BoolFieldUpdateOperationsInput | boolean
    solar_flux?: IntFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
  }

  export type TelemetryCreateManyInput = {
    id?: number
    date_time?: Date | string
    tower_id: number
    humidity: number
    temperature: number
    pressure?: number
    status: number
    power_output: number
    clouds?: boolean
    solar_flux: number
    angle: number
  }

  export type TelemetryUpdateManyMutationInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    power_output?: IntFieldUpdateOperationsInput | number
    clouds?: BoolFieldUpdateOperationsInput | boolean
    solar_flux?: IntFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
  }

  export type TelemetryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: IntFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    power_output?: IntFieldUpdateOperationsInput | number
    clouds?: BoolFieldUpdateOperationsInput | boolean
    solar_flux?: IntFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SettingsNullableScalarRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type NotificationsNullableScalarRelationFilter = {
    is?: NotificationsWhereInput | null
    isNot?: NotificationsWhereInput | null
  }

  export type TowersNullableScalarRelationFilter = {
    is?: TowersWhereInput | null
    isNot?: TowersWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
    country_code?: SortOrder
    phone_number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SettingsCountOrderByAggregateInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
    theme?: SortOrder
    time_zone?: SortOrder
    text_size?: SortOrder
    bold_text?: SortOrder
    update_frequency?: SortOrder
    region?: SortOrder
    language?: SortOrder
    twentyfourhourtime?: SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrder
    email_recovery?: SortOrder
    phone_recovery?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
    theme?: SortOrder
    time_zone?: SortOrder
    text_size?: SortOrder
    bold_text?: SortOrder
    update_frequency?: SortOrder
    region?: SortOrder
    language?: SortOrder
    twentyfourhourtime?: SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrder
    email_recovery?: SortOrder
    phone_recovery?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
    theme?: SortOrder
    time_zone?: SortOrder
    text_size?: SortOrder
    bold_text?: SortOrder
    update_frequency?: SortOrder
    region?: SortOrder
    language?: SortOrder
    twentyfourhourtime?: SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrder
    email_recovery?: SortOrder
    phone_recovery?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    settings_id?: SortOrder
    customer_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NotificationsCountOrderByAggregateInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
    push_notifications_enabled?: SortOrder
    push_notify_login?: SortOrder
    notification_tone?: SortOrder
    email_marketing?: SortOrder
    email_account_activity?: SortOrder
    email_newsletter?: SortOrder
    sms_password_changes?: SortOrder
    sms_login_attempts?: SortOrder
  }

  export type NotificationsAvgOrderByAggregateInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
  }

  export type NotificationsMaxOrderByAggregateInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
    push_notifications_enabled?: SortOrder
    push_notify_login?: SortOrder
    notification_tone?: SortOrder
    email_marketing?: SortOrder
    email_account_activity?: SortOrder
    email_newsletter?: SortOrder
    sms_password_changes?: SortOrder
    sms_login_attempts?: SortOrder
  }

  export type NotificationsMinOrderByAggregateInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
    push_notifications_enabled?: SortOrder
    push_notify_login?: SortOrder
    notification_tone?: SortOrder
    email_marketing?: SortOrder
    email_account_activity?: SortOrder
    email_newsletter?: SortOrder
    sms_password_changes?: SortOrder
    sms_login_attempts?: SortOrder
  }

  export type NotificationsSumOrderByAggregateInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type TelemetryNullableScalarRelationFilter = {
    is?: TelemetryWhereInput | null
    isNot?: TelemetryWhereInput | null
  }

  export type TowersCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrder
  }

  export type TowersAvgOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type TowersMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrder
  }

  export type TowersMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrder
  }

  export type TowersSumOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TowersScalarRelationFilter = {
    is?: TowersWhereInput
    isNot?: TowersWhereInput
  }

  export type TelemetryCountOrderByAggregateInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    clouds?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
  }

  export type TelemetryAvgOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
  }

  export type TelemetryMaxOrderByAggregateInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    clouds?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
  }

  export type TelemetryMinOrderByAggregateInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    clouds?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
  }

  export type TelemetrySumOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    pressure?: SortOrder
    status?: SortOrder
    power_output?: SortOrder
    solar_flux?: SortOrder
    angle?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SettingsCreateNestedOneWithoutCustomerInput = {
    create?: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutCustomerInput
    connect?: SettingsWhereUniqueInput
  }

  export type NotificationsCreateNestedOneWithoutCustomerInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    connect?: NotificationsWhereUniqueInput
  }

  export type TowersCreateNestedOneWithoutCustomerInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput
    connect?: TowersWhereUniqueInput
  }

  export type SettingsUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutCustomerInput
    connect?: SettingsWhereUniqueInput
  }

  export type NotificationsUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    connect?: NotificationsWhereUniqueInput
  }

  export type TowersUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput
    connect?: TowersWhereUniqueInput
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SettingsUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutCustomerInput
    upsert?: SettingsUpsertWithoutCustomerInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutCustomerInput, SettingsUpdateWithoutCustomerInput>, SettingsUncheckedUpdateWithoutCustomerInput>
  }

  export type NotificationsUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    upsert?: NotificationsUpsertWithoutCustomerInput
    disconnect?: NotificationsWhereInput | boolean
    delete?: NotificationsWhereInput | boolean
    connect?: NotificationsWhereUniqueInput
    update?: XOR<XOR<NotificationsUpdateToOneWithWhereWithoutCustomerInput, NotificationsUpdateWithoutCustomerInput>, NotificationsUncheckedUpdateWithoutCustomerInput>
  }

  export type TowersUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput
    upsert?: TowersUpsertWithoutCustomerInput
    disconnect?: TowersWhereInput | boolean
    delete?: TowersWhereInput | boolean
    connect?: TowersWhereUniqueInput
    update?: XOR<XOR<TowersUpdateToOneWithWhereWithoutCustomerInput, TowersUpdateWithoutCustomerInput>, TowersUncheckedUpdateWithoutCustomerInput>
  }

  export type SettingsUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutCustomerInput
    upsert?: SettingsUpsertWithoutCustomerInput
    disconnect?: SettingsWhereInput | boolean
    delete?: SettingsWhereInput | boolean
    connect?: SettingsWhereUniqueInput
    update?: XOR<XOR<SettingsUpdateToOneWithWhereWithoutCustomerInput, SettingsUpdateWithoutCustomerInput>, SettingsUncheckedUpdateWithoutCustomerInput>
  }

  export type NotificationsUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    upsert?: NotificationsUpsertWithoutCustomerInput
    disconnect?: NotificationsWhereInput | boolean
    delete?: NotificationsWhereInput | boolean
    connect?: NotificationsWhereUniqueInput
    update?: XOR<XOR<NotificationsUpdateToOneWithWhereWithoutCustomerInput, NotificationsUpdateWithoutCustomerInput>, NotificationsUncheckedUpdateWithoutCustomerInput>
  }

  export type TowersUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput
    upsert?: TowersUpsertWithoutCustomerInput
    disconnect?: TowersWhereInput | boolean
    delete?: TowersWhereInput | boolean
    connect?: TowersWhereUniqueInput
    update?: XOR<XOR<TowersUpdateToOneWithWhereWithoutCustomerInput, TowersUpdateWithoutCustomerInput>, TowersUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerCreateNestedOneWithoutSettingInput = {
    create?: XOR<CustomerCreateWithoutSettingInput, CustomerUncheckedCreateWithoutSettingInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSettingInput
    connect?: CustomerWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CustomerUpdateOneRequiredWithoutSettingNestedInput = {
    create?: XOR<CustomerCreateWithoutSettingInput, CustomerUncheckedCreateWithoutSettingInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSettingInput
    upsert?: CustomerUpsertWithoutSettingInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSettingInput, CustomerUpdateWithoutSettingInput>, CustomerUncheckedUpdateWithoutSettingInput>
  }

  export type CustomerCreateNestedOneWithoutNotificationInput = {
    create?: XOR<CustomerCreateWithoutNotificationInput, CustomerUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutNotificationInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutNotificationNestedInput = {
    create?: XOR<CustomerCreateWithoutNotificationInput, CustomerUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutNotificationInput
    upsert?: CustomerUpsertWithoutNotificationInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutNotificationInput, CustomerUpdateWithoutNotificationInput>, CustomerUncheckedUpdateWithoutNotificationInput>
  }

  export type TelemetryCreateNestedOneWithoutTowersInput = {
    create?: XOR<TelemetryCreateWithoutTowersInput, TelemetryUncheckedCreateWithoutTowersInput>
    connectOrCreate?: TelemetryCreateOrConnectWithoutTowersInput
    connect?: TelemetryWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutTowerInput = {
    create?: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTowerInput
    connect?: CustomerWhereUniqueInput
  }

  export type TelemetryUncheckedCreateNestedOneWithoutTowersInput = {
    create?: XOR<TelemetryCreateWithoutTowersInput, TelemetryUncheckedCreateWithoutTowersInput>
    connectOrCreate?: TelemetryCreateOrConnectWithoutTowersInput
    connect?: TelemetryWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TelemetryUpdateOneWithoutTowersNestedInput = {
    create?: XOR<TelemetryCreateWithoutTowersInput, TelemetryUncheckedCreateWithoutTowersInput>
    connectOrCreate?: TelemetryCreateOrConnectWithoutTowersInput
    upsert?: TelemetryUpsertWithoutTowersInput
    disconnect?: TelemetryWhereInput | boolean
    delete?: TelemetryWhereInput | boolean
    connect?: TelemetryWhereUniqueInput
    update?: XOR<XOR<TelemetryUpdateToOneWithWhereWithoutTowersInput, TelemetryUpdateWithoutTowersInput>, TelemetryUncheckedUpdateWithoutTowersInput>
  }

  export type CustomerUpdateOneRequiredWithoutTowerNestedInput = {
    create?: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTowerInput
    upsert?: CustomerUpsertWithoutTowerInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTowerInput, CustomerUpdateWithoutTowerInput>, CustomerUncheckedUpdateWithoutTowerInput>
  }

  export type TelemetryUncheckedUpdateOneWithoutTowersNestedInput = {
    create?: XOR<TelemetryCreateWithoutTowersInput, TelemetryUncheckedCreateWithoutTowersInput>
    connectOrCreate?: TelemetryCreateOrConnectWithoutTowersInput
    upsert?: TelemetryUpsertWithoutTowersInput
    disconnect?: TelemetryWhereInput | boolean
    delete?: TelemetryWhereInput | boolean
    connect?: TelemetryWhereUniqueInput
    update?: XOR<XOR<TelemetryUpdateToOneWithWhereWithoutTowersInput, TelemetryUpdateWithoutTowersInput>, TelemetryUncheckedUpdateWithoutTowersInput>
  }

  export type TowersCreateNestedOneWithoutTelemetryInput = {
    create?: XOR<TowersCreateWithoutTelemetryInput, TowersUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: TowersCreateOrConnectWithoutTelemetryInput
    connect?: TowersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TowersUpdateOneRequiredWithoutTelemetryNestedInput = {
    create?: XOR<TowersCreateWithoutTelemetryInput, TowersUncheckedCreateWithoutTelemetryInput>
    connectOrCreate?: TowersCreateOrConnectWithoutTelemetryInput
    upsert?: TowersUpsertWithoutTelemetryInput
    connect?: TowersWhereUniqueInput
    update?: XOR<XOR<TowersUpdateToOneWithWhereWithoutTelemetryInput, TowersUpdateWithoutTelemetryInput>, TowersUncheckedUpdateWithoutTelemetryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type SettingsCreateWithoutCustomerInput = {
    theme?: string
    time_zone?: string
    text_size?: string
    bold_text?: boolean
    update_frequency?: string
    region?: string
    language?: string
    twentyfourhourtime?: boolean
    last_login_device?: string
    last_login?: Date | string | null
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsUncheckedCreateWithoutCustomerInput = {
    settings_id?: number
    theme?: string
    time_zone?: string
    text_size?: string
    bold_text?: boolean
    update_frequency?: string
    region?: string
    language?: string
    twentyfourhourtime?: boolean
    last_login_device?: string
    last_login?: Date | string | null
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsCreateOrConnectWithoutCustomerInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
  }

  export type NotificationsCreateWithoutCustomerInput = {
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: string
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
  }

  export type NotificationsUncheckedCreateWithoutCustomerInput = {
    notifications_id?: number
    push_notifications_enabled?: boolean
    push_notify_login?: boolean
    notification_tone?: string
    email_marketing?: boolean
    email_account_activity?: boolean
    email_newsletter?: boolean
    sms_password_changes?: boolean
    sms_login_attempts?: boolean
  }

  export type NotificationsCreateOrConnectWithoutCustomerInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
  }

  export type TowersCreateWithoutCustomerInput = {
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
    telemetry?: TelemetryCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateWithoutCustomerInput = {
    id?: number
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
    telemetry?: TelemetryUncheckedCreateNestedOneWithoutTowersInput
  }

  export type TowersCreateOrConnectWithoutCustomerInput = {
    where: TowersWhereUniqueInput
    create: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
  }

  export type SettingsUpsertWithoutCustomerInput = {
    update: XOR<SettingsUpdateWithoutCustomerInput, SettingsUncheckedUpdateWithoutCustomerInput>
    create: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    where?: SettingsWhereInput
  }

  export type SettingsUpdateToOneWithWhereWithoutCustomerInput = {
    where?: SettingsWhereInput
    data: XOR<SettingsUpdateWithoutCustomerInput, SettingsUncheckedUpdateWithoutCustomerInput>
  }

  export type SettingsUpdateWithoutCustomerInput = {
    theme?: StringFieldUpdateOperationsInput | string
    time_zone?: StringFieldUpdateOperationsInput | string
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: BoolFieldUpdateOperationsInput | boolean
    update_frequency?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    twentyfourhourtime?: BoolFieldUpdateOperationsInput | boolean
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateWithoutCustomerInput = {
    settings_id?: IntFieldUpdateOperationsInput | number
    theme?: StringFieldUpdateOperationsInput | string
    time_zone?: StringFieldUpdateOperationsInput | string
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: BoolFieldUpdateOperationsInput | boolean
    update_frequency?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    twentyfourhourtime?: BoolFieldUpdateOperationsInput | boolean
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationsUpsertWithoutCustomerInput = {
    update: XOR<NotificationsUpdateWithoutCustomerInput, NotificationsUncheckedUpdateWithoutCustomerInput>
    create: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    where?: NotificationsWhereInput
  }

  export type NotificationsUpdateToOneWithWhereWithoutCustomerInput = {
    where?: NotificationsWhereInput
    data: XOR<NotificationsUpdateWithoutCustomerInput, NotificationsUncheckedUpdateWithoutCustomerInput>
  }

  export type NotificationsUpdateWithoutCustomerInput = {
    push_notifications_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_notify_login?: BoolFieldUpdateOperationsInput | boolean
    notification_tone?: StringFieldUpdateOperationsInput | string
    email_marketing?: BoolFieldUpdateOperationsInput | boolean
    email_account_activity?: BoolFieldUpdateOperationsInput | boolean
    email_newsletter?: BoolFieldUpdateOperationsInput | boolean
    sms_password_changes?: BoolFieldUpdateOperationsInput | boolean
    sms_login_attempts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationsUncheckedUpdateWithoutCustomerInput = {
    notifications_id?: IntFieldUpdateOperationsInput | number
    push_notifications_enabled?: BoolFieldUpdateOperationsInput | boolean
    push_notify_login?: BoolFieldUpdateOperationsInput | boolean
    notification_tone?: StringFieldUpdateOperationsInput | string
    email_marketing?: BoolFieldUpdateOperationsInput | boolean
    email_account_activity?: BoolFieldUpdateOperationsInput | boolean
    email_newsletter?: BoolFieldUpdateOperationsInput | boolean
    sms_password_changes?: BoolFieldUpdateOperationsInput | boolean
    sms_login_attempts?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TowersUpsertWithoutCustomerInput = {
    update: XOR<TowersUpdateWithoutCustomerInput, TowersUncheckedUpdateWithoutCustomerInput>
    create: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
    where?: TowersWhereInput
  }

  export type TowersUpdateToOneWithWhereWithoutCustomerInput = {
    where?: TowersWhereInput
    data: XOR<TowersUpdateWithoutCustomerInput, TowersUncheckedUpdateWithoutCustomerInput>
  }

  export type TowersUpdateWithoutCustomerInput = {
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
    telemetry?: TelemetryUpdateOneWithoutTowersNestedInput
  }

  export type TowersUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
    telemetry?: TelemetryUncheckedUpdateOneWithoutTowersNestedInput
  }

  export type CustomerCreateWithoutSettingInput = {
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    tower?: TowersCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSettingInput = {
    id?: number
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    tower?: TowersUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSettingInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSettingInput, CustomerUncheckedCreateWithoutSettingInput>
  }

  export type CustomerUpsertWithoutSettingInput = {
    update: XOR<CustomerUpdateWithoutSettingInput, CustomerUncheckedUpdateWithoutSettingInput>
    create: XOR<CustomerCreateWithoutSettingInput, CustomerUncheckedCreateWithoutSettingInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSettingInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSettingInput, CustomerUncheckedUpdateWithoutSettingInput>
  }

  export type CustomerUpdateWithoutSettingInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    tower?: TowersUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    tower?: TowersUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutNotificationInput = {
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    tower?: TowersCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutNotificationInput = {
    id?: number
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    tower?: TowersUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutNotificationInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutNotificationInput, CustomerUncheckedCreateWithoutNotificationInput>
  }

  export type CustomerUpsertWithoutNotificationInput = {
    update: XOR<CustomerUpdateWithoutNotificationInput, CustomerUncheckedUpdateWithoutNotificationInput>
    create: XOR<CustomerCreateWithoutNotificationInput, CustomerUncheckedCreateWithoutNotificationInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutNotificationInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutNotificationInput, CustomerUncheckedUpdateWithoutNotificationInput>
  }

  export type CustomerUpdateWithoutNotificationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    tower?: TowersUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    tower?: TowersUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type TelemetryCreateWithoutTowersInput = {
    date_time?: Date | string
    humidity: number
    temperature: number
    pressure?: number
    status: number
    power_output: number
    clouds?: boolean
    solar_flux: number
    angle: number
  }

  export type TelemetryUncheckedCreateWithoutTowersInput = {
    id?: number
    date_time?: Date | string
    humidity: number
    temperature: number
    pressure?: number
    status: number
    power_output: number
    clouds?: boolean
    solar_flux: number
    angle: number
  }

  export type TelemetryCreateOrConnectWithoutTowersInput = {
    where: TelemetryWhereUniqueInput
    create: XOR<TelemetryCreateWithoutTowersInput, TelemetryUncheckedCreateWithoutTowersInput>
  }

  export type CustomerCreateWithoutTowerInput = {
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTowerInput = {
    id?: number
    name: string
    email: string
    address_id: number
    country_code: number
    phone_number?: number | null
    customer_type: string
    password_hash: string
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTowerInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
  }

  export type TelemetryUpsertWithoutTowersInput = {
    update: XOR<TelemetryUpdateWithoutTowersInput, TelemetryUncheckedUpdateWithoutTowersInput>
    create: XOR<TelemetryCreateWithoutTowersInput, TelemetryUncheckedCreateWithoutTowersInput>
    where?: TelemetryWhereInput
  }

  export type TelemetryUpdateToOneWithWhereWithoutTowersInput = {
    where?: TelemetryWhereInput
    data: XOR<TelemetryUpdateWithoutTowersInput, TelemetryUncheckedUpdateWithoutTowersInput>
  }

  export type TelemetryUpdateWithoutTowersInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    power_output?: IntFieldUpdateOperationsInput | number
    clouds?: BoolFieldUpdateOperationsInput | boolean
    solar_flux?: IntFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
  }

  export type TelemetryUncheckedUpdateWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    pressure?: FloatFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    power_output?: IntFieldUpdateOperationsInput | number
    clouds?: BoolFieldUpdateOperationsInput | boolean
    solar_flux?: IntFieldUpdateOperationsInput | number
    angle?: FloatFieldUpdateOperationsInput | number
  }

  export type CustomerUpsertWithoutTowerInput = {
    update: XOR<CustomerUpdateWithoutTowerInput, CustomerUncheckedUpdateWithoutTowerInput>
    create: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTowerInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTowerInput, CustomerUncheckedUpdateWithoutTowerInput>
  }

  export type CustomerUpdateWithoutTowerInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    country_code?: IntFieldUpdateOperationsInput | number
    phone_number?: NullableIntFieldUpdateOperationsInput | number | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
  }

  export type TowersCreateWithoutTelemetryInput = {
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
    customer: CustomerCreateNestedOneWithoutTowerInput
  }

  export type TowersUncheckedCreateWithoutTelemetryInput = {
    id?: number
    model?: number
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state: number
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string
  }

  export type TowersCreateOrConnectWithoutTelemetryInput = {
    where: TowersWhereUniqueInput
    create: XOR<TowersCreateWithoutTelemetryInput, TowersUncheckedCreateWithoutTelemetryInput>
  }

  export type TowersUpsertWithoutTelemetryInput = {
    update: XOR<TowersUpdateWithoutTelemetryInput, TowersUncheckedUpdateWithoutTelemetryInput>
    create: XOR<TowersCreateWithoutTelemetryInput, TowersUncheckedCreateWithoutTelemetryInput>
    where?: TowersWhereInput
  }

  export type TowersUpdateToOneWithWhereWithoutTelemetryInput = {
    where?: TowersWhereInput
    data: XOR<TowersUpdateWithoutTelemetryInput, TowersUncheckedUpdateWithoutTelemetryInput>
  }

  export type TowersUpdateWithoutTelemetryInput = {
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
  }

  export type TowersUncheckedUpdateWithoutTelemetryInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: IntFieldUpdateOperationsInput | number
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: IntFieldUpdateOperationsInput | number
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: StringFieldUpdateOperationsInput | string
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