
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
 * Model Systems
 * 
 */
export type Systems = $Result.DefaultSelection<Prisma.$SystemsPayload>
/**
 * Model Towers
 * 
 */
export type Towers = $Result.DefaultSelection<Prisma.$TowersPayload>
/**
 * Model software_tickets
 * 
 */
export type software_tickets = $Result.DefaultSelection<Prisma.$software_ticketsPayload>
/**
 * Model customer_system
 * 
 */
export type customer_system = $Result.DefaultSelection<Prisma.$customer_systemPayload>
/**
 * Model tower_data
 * 
 */
export type tower_data = $Result.DefaultSelection<Prisma.$tower_dataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const plan_tier: {
  RESIDENTIAL: 'RESIDENTIAL',
  COMMERCIAL: 'COMMERCIAL'
};

export type plan_tier = (typeof plan_tier)[keyof typeof plan_tier]


export const user_role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type user_role = (typeof user_role)[keyof typeof user_role]

}

export type plan_tier = $Enums.plan_tier

export const plan_tier: typeof $Enums.plan_tier

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

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
   * `prisma.systems`: Exposes CRUD operations for the **Systems** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Systems
    * const systems = await prisma.systems.findMany()
    * ```
    */
  get systems(): Prisma.SystemsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.software_tickets`: Exposes CRUD operations for the **software_tickets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Software_tickets
    * const software_tickets = await prisma.software_tickets.findMany()
    * ```
    */
  get software_tickets(): Prisma.software_ticketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer_system`: Exposes CRUD operations for the **customer_system** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_systems
    * const customer_systems = await prisma.customer_system.findMany()
    * ```
    */
  get customer_system(): Prisma.customer_systemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tower_data`: Exposes CRUD operations for the **tower_data** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tower_data
    * const tower_data = await prisma.tower_data.findMany()
    * ```
    */
  get tower_data(): Prisma.tower_dataDelegate<ExtArgs, ClientOptions>;
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
    Systems: 'Systems',
    Towers: 'Towers',
    software_tickets: 'software_tickets',
    customer_system: 'customer_system',
    tower_data: 'tower_data'
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
      modelProps: "customer" | "settings" | "systems" | "towers" | "software_tickets" | "customer_system" | "tower_data"
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
      Systems: {
        payload: Prisma.$SystemsPayload<ExtArgs>
        fields: Prisma.SystemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>
          }
          findFirst: {
            args: Prisma.SystemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>
          }
          findMany: {
            args: Prisma.SystemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>[]
          }
          create: {
            args: Prisma.SystemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>
          }
          createMany: {
            args: Prisma.SystemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>[]
          }
          delete: {
            args: Prisma.SystemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>
          }
          update: {
            args: Prisma.SystemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>
          }
          deleteMany: {
            args: Prisma.SystemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>[]
          }
          upsert: {
            args: Prisma.SystemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemsPayload>
          }
          aggregate: {
            args: Prisma.SystemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystems>
          }
          groupBy: {
            args: Prisma.SystemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemsCountAggregateOutputType> | number
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
      software_tickets: {
        payload: Prisma.$software_ticketsPayload<ExtArgs>
        fields: Prisma.software_ticketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.software_ticketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.software_ticketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>
          }
          findFirst: {
            args: Prisma.software_ticketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.software_ticketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>
          }
          findMany: {
            args: Prisma.software_ticketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>[]
          }
          create: {
            args: Prisma.software_ticketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>
          }
          createMany: {
            args: Prisma.software_ticketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.software_ticketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>[]
          }
          delete: {
            args: Prisma.software_ticketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>
          }
          update: {
            args: Prisma.software_ticketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>
          }
          deleteMany: {
            args: Prisma.software_ticketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.software_ticketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.software_ticketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>[]
          }
          upsert: {
            args: Prisma.software_ticketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$software_ticketsPayload>
          }
          aggregate: {
            args: Prisma.Software_ticketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSoftware_tickets>
          }
          groupBy: {
            args: Prisma.software_ticketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Software_ticketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.software_ticketsCountArgs<ExtArgs>
            result: $Utils.Optional<Software_ticketsCountAggregateOutputType> | number
          }
        }
      }
      customer_system: {
        payload: Prisma.$customer_systemPayload<ExtArgs>
        fields: Prisma.customer_systemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customer_systemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customer_systemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>
          }
          findFirst: {
            args: Prisma.customer_systemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customer_systemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>
          }
          findMany: {
            args: Prisma.customer_systemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>[]
          }
          create: {
            args: Prisma.customer_systemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>
          }
          createMany: {
            args: Prisma.customer_systemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customer_systemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>[]
          }
          delete: {
            args: Prisma.customer_systemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>
          }
          update: {
            args: Prisma.customer_systemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>
          }
          deleteMany: {
            args: Prisma.customer_systemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customer_systemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customer_systemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>[]
          }
          upsert: {
            args: Prisma.customer_systemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customer_systemPayload>
          }
          aggregate: {
            args: Prisma.Customer_systemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer_system>
          }
          groupBy: {
            args: Prisma.customer_systemGroupByArgs<ExtArgs>
            result: $Utils.Optional<Customer_systemGroupByOutputType>[]
          }
          count: {
            args: Prisma.customer_systemCountArgs<ExtArgs>
            result: $Utils.Optional<Customer_systemCountAggregateOutputType> | number
          }
        }
      }
      tower_data: {
        payload: Prisma.$tower_dataPayload<ExtArgs>
        fields: Prisma.tower_dataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tower_dataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tower_dataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>
          }
          findFirst: {
            args: Prisma.tower_dataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tower_dataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>
          }
          findMany: {
            args: Prisma.tower_dataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>[]
          }
          create: {
            args: Prisma.tower_dataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>
          }
          createMany: {
            args: Prisma.tower_dataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tower_dataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>[]
          }
          delete: {
            args: Prisma.tower_dataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>
          }
          update: {
            args: Prisma.tower_dataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>
          }
          deleteMany: {
            args: Prisma.tower_dataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tower_dataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tower_dataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>[]
          }
          upsert: {
            args: Prisma.tower_dataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_dataPayload>
          }
          aggregate: {
            args: Prisma.Tower_dataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTower_data>
          }
          groupBy: {
            args: Prisma.tower_dataGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tower_dataGroupByOutputType>[]
          }
          count: {
            args: Prisma.tower_dataCountArgs<ExtArgs>
            result: $Utils.Optional<Tower_dataCountAggregateOutputType> | number
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
    systems?: SystemsOmit
    towers?: TowersOmit
    software_tickets?: software_ticketsOmit
    customer_system?: customer_systemOmit
    tower_data?: tower_dataOmit
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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    customer_system: number
    software_tickets: number
    tower: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_system?: boolean | CustomerCountOutputTypeCountCustomer_systemArgs
    software_tickets?: boolean | CustomerCountOutputTypeCountSoftware_ticketsArgs
    tower?: boolean | CustomerCountOutputTypeCountTowerArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCustomer_systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_systemWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSoftware_ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: software_ticketsWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountTowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TowersWhereInput
  }


  /**
   * Count Type SystemsCountOutputType
   */

  export type SystemsCountOutputType = {
    customer_system: number
    towers: number
  }

  export type SystemsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_system?: boolean | SystemsCountOutputTypeCountCustomer_systemArgs
    towers?: boolean | SystemsCountOutputTypeCountTowersArgs
  }

  // Custom InputTypes
  /**
   * SystemsCountOutputType without action
   */
  export type SystemsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemsCountOutputType
     */
    select?: SystemsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemsCountOutputType without action
   */
  export type SystemsCountOutputTypeCountCustomer_systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_systemWhereInput
  }

  /**
   * SystemsCountOutputType without action
   */
  export type SystemsCountOutputTypeCountTowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TowersWhereInput
  }


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
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    address_id: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    address_id: number | null
    phone_number: string | null
    password_hash: string | null
    plan_tier: $Enums.plan_tier | null
    role: $Enums.user_role | null
    force_password_reset: boolean | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    address_id: number | null
    phone_number: string | null
    password_hash: string | null
    plan_tier: $Enums.plan_tier | null
    role: $Enums.user_role | null
    force_password_reset: boolean | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    address_id: number
    phone_number: number
    password_hash: number
    plan_tier: number
    role: number
    force_password_reset: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type CustomerSumAggregateInputType = {
    id?: true
    address_id?: true
  }

  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address_id?: true
    phone_number?: true
    password_hash?: true
    plan_tier?: true
    role?: true
    force_password_reset?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address_id?: true
    phone_number?: true
    password_hash?: true
    plan_tier?: true
    role?: true
    force_password_reset?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    address_id?: true
    phone_number?: true
    password_hash?: true
    plan_tier?: true
    role?: true
    force_password_reset?: true
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
    address_id: number | null
    phone_number: string | null
    password_hash: string
    plan_tier: $Enums.plan_tier | null
    role: $Enums.user_role | null
    force_password_reset: boolean | null
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
    phone_number?: boolean
    password_hash?: boolean
    plan_tier?: boolean
    role?: boolean
    force_password_reset?: boolean
    customer_system?: boolean | Customer$customer_systemArgs<ExtArgs>
    setting?: boolean | Customer$settingArgs<ExtArgs>
    software_tickets?: boolean | Customer$software_ticketsArgs<ExtArgs>
    tower?: boolean | Customer$towerArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    phone_number?: boolean
    password_hash?: boolean
    plan_tier?: boolean
    role?: boolean
    force_password_reset?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    phone_number?: boolean
    password_hash?: boolean
    plan_tier?: boolean
    role?: boolean
    force_password_reset?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    address_id?: boolean
    phone_number?: boolean
    password_hash?: boolean
    plan_tier?: boolean
    role?: boolean
    force_password_reset?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address_id" | "phone_number" | "password_hash" | "plan_tier" | "role" | "force_password_reset", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_system?: boolean | Customer$customer_systemArgs<ExtArgs>
    setting?: boolean | Customer$settingArgs<ExtArgs>
    software_tickets?: boolean | Customer$software_ticketsArgs<ExtArgs>
    tower?: boolean | Customer$towerArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      customer_system: Prisma.$customer_systemPayload<ExtArgs>[]
      setting: Prisma.$SettingsPayload<ExtArgs> | null
      software_tickets: Prisma.$software_ticketsPayload<ExtArgs>[]
      tower: Prisma.$TowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      address_id: number | null
      phone_number: string | null
      password_hash: string
      plan_tier: $Enums.plan_tier | null
      role: $Enums.user_role | null
      force_password_reset: boolean | null
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
    customer_system<T extends Customer$customer_systemArgs<ExtArgs> = {}>(args?: Subset<T, Customer$customer_systemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    setting<T extends Customer$settingArgs<ExtArgs> = {}>(args?: Subset<T, Customer$settingArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    software_tickets<T extends Customer$software_ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$software_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tower<T extends Customer$towerArgs<ExtArgs> = {}>(args?: Subset<T, Customer$towerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly phone_number: FieldRef<"Customer", 'String'>
    readonly password_hash: FieldRef<"Customer", 'String'>
    readonly plan_tier: FieldRef<"Customer", 'plan_tier'>
    readonly role: FieldRef<"Customer", 'user_role'>
    readonly force_password_reset: FieldRef<"Customer", 'Boolean'>
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
   * Customer.customer_system
   */
  export type Customer$customer_systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    where?: customer_systemWhereInput
    orderBy?: customer_systemOrderByWithRelationInput | customer_systemOrderByWithRelationInput[]
    cursor?: customer_systemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_systemScalarFieldEnum | Customer_systemScalarFieldEnum[]
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
   * Customer.software_tickets
   */
  export type Customer$software_ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    where?: software_ticketsWhereInput
    orderBy?: software_ticketsOrderByWithRelationInput | software_ticketsOrderByWithRelationInput[]
    cursor?: software_ticketsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Software_ticketsScalarFieldEnum | Software_ticketsScalarFieldEnum[]
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
    orderBy?: TowersOrderByWithRelationInput | TowersOrderByWithRelationInput[]
    cursor?: TowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
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
    customer_id: number | null
    theme: string | null
    time_zone: string | null
    text_size: string
    bold_text: boolean | null
    update_frequency: string | null
    region: string | null
    language: string | null
    twentyfourhourtime: boolean | null
    last_login_device: string
    last_login: Date
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
    customer?: boolean | Settings$customerArgs<ExtArgs>
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
    customer?: boolean | Settings$customerArgs<ExtArgs>
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
    customer?: boolean | Settings$customerArgs<ExtArgs>
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
    customer?: boolean | Settings$customerArgs<ExtArgs>
  }
  export type SettingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Settings$customerArgs<ExtArgs>
  }
  export type SettingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Settings$customerArgs<ExtArgs>
  }

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      settings_id: number
      customer_id: number | null
      theme: string | null
      time_zone: string | null
      text_size: string
      bold_text: boolean | null
      update_frequency: string | null
      region: string | null
      language: string | null
      twentyfourhourtime: boolean | null
      last_login_device: string
      last_login: Date
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
    customer<T extends Settings$customerArgs<ExtArgs> = {}>(args?: Subset<T, Settings$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    data?: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
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
   * Settings.customer
   */
  export type Settings$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: CustomerWhereInput
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
   * Model Systems
   */

  export type AggregateSystems = {
    _count: SystemsCountAggregateOutputType | null
    _avg: SystemsAvgAggregateOutputType | null
    _sum: SystemsSumAggregateOutputType | null
    _min: SystemsMinAggregateOutputType | null
    _max: SystemsMaxAggregateOutputType | null
  }

  export type SystemsAvgAggregateOutputType = {
    id: number | null
    total_towers: number | null
    max_pv_kw: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type SystemsSumAggregateOutputType = {
    id: number | null
    total_towers: number | null
    max_pv_kw: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type SystemsMinAggregateOutputType = {
    id: number | null
    system_name: string | null
    inverter_type: string | null
    timezone: string | null
    installation_date: Date | null
    status: string | null
    total_towers: number | null
    max_pv_kw: Decimal | null
    software_version: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    system_cipher: string | null
    system_iv: string | null
    system_tag: string | null
    has_fronius_system: boolean | null
  }

  export type SystemsMaxAggregateOutputType = {
    id: number | null
    system_name: string | null
    inverter_type: string | null
    timezone: string | null
    installation_date: Date | null
    status: string | null
    total_towers: number | null
    max_pv_kw: Decimal | null
    software_version: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    system_cipher: string | null
    system_iv: string | null
    system_tag: string | null
    has_fronius_system: boolean | null
  }

  export type SystemsCountAggregateOutputType = {
    id: number
    system_name: number
    inverter_type: number
    timezone: number
    installation_date: number
    status: number
    total_towers: number
    max_pv_kw: number
    software_version: number
    latitude: number
    longitude: number
    system_cipher: number
    system_iv: number
    system_tag: number
    has_fronius_system: number
    _all: number
  }


  export type SystemsAvgAggregateInputType = {
    id?: true
    total_towers?: true
    max_pv_kw?: true
    latitude?: true
    longitude?: true
  }

  export type SystemsSumAggregateInputType = {
    id?: true
    total_towers?: true
    max_pv_kw?: true
    latitude?: true
    longitude?: true
  }

  export type SystemsMinAggregateInputType = {
    id?: true
    system_name?: true
    inverter_type?: true
    timezone?: true
    installation_date?: true
    status?: true
    total_towers?: true
    max_pv_kw?: true
    software_version?: true
    latitude?: true
    longitude?: true
    system_cipher?: true
    system_iv?: true
    system_tag?: true
    has_fronius_system?: true
  }

  export type SystemsMaxAggregateInputType = {
    id?: true
    system_name?: true
    inverter_type?: true
    timezone?: true
    installation_date?: true
    status?: true
    total_towers?: true
    max_pv_kw?: true
    software_version?: true
    latitude?: true
    longitude?: true
    system_cipher?: true
    system_iv?: true
    system_tag?: true
    has_fronius_system?: true
  }

  export type SystemsCountAggregateInputType = {
    id?: true
    system_name?: true
    inverter_type?: true
    timezone?: true
    installation_date?: true
    status?: true
    total_towers?: true
    max_pv_kw?: true
    software_version?: true
    latitude?: true
    longitude?: true
    system_cipher?: true
    system_iv?: true
    system_tag?: true
    has_fronius_system?: true
    _all?: true
  }

  export type SystemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Systems to aggregate.
     */
    where?: SystemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemsOrderByWithRelationInput | SystemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Systems
    **/
    _count?: true | SystemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemsMaxAggregateInputType
  }

  export type GetSystemsAggregateType<T extends SystemsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystems]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystems[P]>
      : GetScalarType<T[P], AggregateSystems[P]>
  }




  export type SystemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemsWhereInput
    orderBy?: SystemsOrderByWithAggregationInput | SystemsOrderByWithAggregationInput[]
    by: SystemsScalarFieldEnum[] | SystemsScalarFieldEnum
    having?: SystemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemsCountAggregateInputType | true
    _avg?: SystemsAvgAggregateInputType
    _sum?: SystemsSumAggregateInputType
    _min?: SystemsMinAggregateInputType
    _max?: SystemsMaxAggregateInputType
  }

  export type SystemsGroupByOutputType = {
    id: number
    system_name: string
    inverter_type: string | null
    timezone: string | null
    installation_date: Date | null
    status: string | null
    total_towers: number | null
    max_pv_kw: Decimal | null
    software_version: string | null
    latitude: Decimal
    longitude: Decimal
    system_cipher: string | null
    system_iv: string | null
    system_tag: string | null
    has_fronius_system: boolean
    _count: SystemsCountAggregateOutputType | null
    _avg: SystemsAvgAggregateOutputType | null
    _sum: SystemsSumAggregateOutputType | null
    _min: SystemsMinAggregateOutputType | null
    _max: SystemsMaxAggregateOutputType | null
  }

  type GetSystemsGroupByPayload<T extends SystemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemsGroupByOutputType[P]>
        }
      >
    >


  export type SystemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    system_name?: boolean
    inverter_type?: boolean
    timezone?: boolean
    installation_date?: boolean
    status?: boolean
    total_towers?: boolean
    max_pv_kw?: boolean
    software_version?: boolean
    latitude?: boolean
    longitude?: boolean
    system_cipher?: boolean
    system_iv?: boolean
    system_tag?: boolean
    has_fronius_system?: boolean
    customer_system?: boolean | Systems$customer_systemArgs<ExtArgs>
    towers?: boolean | Systems$towersArgs<ExtArgs>
    _count?: boolean | SystemsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systems"]>

  export type SystemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    system_name?: boolean
    inverter_type?: boolean
    timezone?: boolean
    installation_date?: boolean
    status?: boolean
    total_towers?: boolean
    max_pv_kw?: boolean
    software_version?: boolean
    latitude?: boolean
    longitude?: boolean
    system_cipher?: boolean
    system_iv?: boolean
    system_tag?: boolean
    has_fronius_system?: boolean
  }, ExtArgs["result"]["systems"]>

  export type SystemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    system_name?: boolean
    inverter_type?: boolean
    timezone?: boolean
    installation_date?: boolean
    status?: boolean
    total_towers?: boolean
    max_pv_kw?: boolean
    software_version?: boolean
    latitude?: boolean
    longitude?: boolean
    system_cipher?: boolean
    system_iv?: boolean
    system_tag?: boolean
    has_fronius_system?: boolean
  }, ExtArgs["result"]["systems"]>

  export type SystemsSelectScalar = {
    id?: boolean
    system_name?: boolean
    inverter_type?: boolean
    timezone?: boolean
    installation_date?: boolean
    status?: boolean
    total_towers?: boolean
    max_pv_kw?: boolean
    software_version?: boolean
    latitude?: boolean
    longitude?: boolean
    system_cipher?: boolean
    system_iv?: boolean
    system_tag?: boolean
    has_fronius_system?: boolean
  }

  export type SystemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "system_name" | "inverter_type" | "timezone" | "installation_date" | "status" | "total_towers" | "max_pv_kw" | "software_version" | "latitude" | "longitude" | "system_cipher" | "system_iv" | "system_tag" | "has_fronius_system", ExtArgs["result"]["systems"]>
  export type SystemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_system?: boolean | Systems$customer_systemArgs<ExtArgs>
    towers?: boolean | Systems$towersArgs<ExtArgs>
    _count?: boolean | SystemsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SystemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SystemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SystemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Systems"
    objects: {
      customer_system: Prisma.$customer_systemPayload<ExtArgs>[]
      towers: Prisma.$TowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      system_name: string
      inverter_type: string | null
      timezone: string | null
      installation_date: Date | null
      status: string | null
      total_towers: number | null
      max_pv_kw: Prisma.Decimal | null
      software_version: string | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      system_cipher: string | null
      system_iv: string | null
      system_tag: string | null
      has_fronius_system: boolean
    }, ExtArgs["result"]["systems"]>
    composites: {}
  }

  type SystemsGetPayload<S extends boolean | null | undefined | SystemsDefaultArgs> = $Result.GetResult<Prisma.$SystemsPayload, S>

  type SystemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemsCountAggregateInputType | true
    }

  export interface SystemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Systems'], meta: { name: 'Systems' } }
    /**
     * Find zero or one Systems that matches the filter.
     * @param {SystemsFindUniqueArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemsFindUniqueArgs>(args: SelectSubset<T, SystemsFindUniqueArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Systems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemsFindUniqueOrThrowArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsFindFirstArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemsFindFirstArgs>(args?: SelectSubset<T, SystemsFindFirstArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Systems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsFindFirstOrThrowArgs} args - Arguments to find a Systems
     * @example
     * // Get one Systems
     * const systems = await prisma.systems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Systems
     * const systems = await prisma.systems.findMany()
     * 
     * // Get first 10 Systems
     * const systems = await prisma.systems.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemsWithIdOnly = await prisma.systems.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemsFindManyArgs>(args?: SelectSubset<T, SystemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Systems.
     * @param {SystemsCreateArgs} args - Arguments to create a Systems.
     * @example
     * // Create one Systems
     * const Systems = await prisma.systems.create({
     *   data: {
     *     // ... data to create a Systems
     *   }
     * })
     * 
     */
    create<T extends SystemsCreateArgs>(args: SelectSubset<T, SystemsCreateArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Systems.
     * @param {SystemsCreateManyArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const systems = await prisma.systems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemsCreateManyArgs>(args?: SelectSubset<T, SystemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Systems and returns the data saved in the database.
     * @param {SystemsCreateManyAndReturnArgs} args - Arguments to create many Systems.
     * @example
     * // Create many Systems
     * const systems = await prisma.systems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Systems and only return the `id`
     * const systemsWithIdOnly = await prisma.systems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemsCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Systems.
     * @param {SystemsDeleteArgs} args - Arguments to delete one Systems.
     * @example
     * // Delete one Systems
     * const Systems = await prisma.systems.delete({
     *   where: {
     *     // ... filter to delete one Systems
     *   }
     * })
     * 
     */
    delete<T extends SystemsDeleteArgs>(args: SelectSubset<T, SystemsDeleteArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Systems.
     * @param {SystemsUpdateArgs} args - Arguments to update one Systems.
     * @example
     * // Update one Systems
     * const systems = await prisma.systems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemsUpdateArgs>(args: SelectSubset<T, SystemsUpdateArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Systems.
     * @param {SystemsDeleteManyArgs} args - Arguments to filter Systems to delete.
     * @example
     * // Delete a few Systems
     * const { count } = await prisma.systems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemsDeleteManyArgs>(args?: SelectSubset<T, SystemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Systems
     * const systems = await prisma.systems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemsUpdateManyArgs>(args: SelectSubset<T, SystemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Systems and returns the data updated in the database.
     * @param {SystemsUpdateManyAndReturnArgs} args - Arguments to update many Systems.
     * @example
     * // Update many Systems
     * const systems = await prisma.systems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Systems and only return the `id`
     * const systemsWithIdOnly = await prisma.systems.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemsUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Systems.
     * @param {SystemsUpsertArgs} args - Arguments to update or create a Systems.
     * @example
     * // Update or create a Systems
     * const systems = await prisma.systems.upsert({
     *   create: {
     *     // ... data to create a Systems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Systems we want to update
     *   }
     * })
     */
    upsert<T extends SystemsUpsertArgs>(args: SelectSubset<T, SystemsUpsertArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsCountArgs} args - Arguments to filter Systems to count.
     * @example
     * // Count the number of Systems
     * const count = await prisma.systems.count({
     *   where: {
     *     // ... the filter for the Systems we want to count
     *   }
     * })
    **/
    count<T extends SystemsCountArgs>(
      args?: Subset<T, SystemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemsAggregateArgs>(args: Subset<T, SystemsAggregateArgs>): Prisma.PrismaPromise<GetSystemsAggregateType<T>>

    /**
     * Group by Systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemsGroupByArgs} args - Group by arguments.
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
      T extends SystemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemsGroupByArgs['orderBy'] }
        : { orderBy?: SystemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Systems model
   */
  readonly fields: SystemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Systems.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer_system<T extends Systems$customer_systemArgs<ExtArgs> = {}>(args?: Subset<T, Systems$customer_systemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    towers<T extends Systems$towersArgs<ExtArgs> = {}>(args?: Subset<T, Systems$towersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Systems model
   */
  interface SystemsFieldRefs {
    readonly id: FieldRef<"Systems", 'Int'>
    readonly system_name: FieldRef<"Systems", 'String'>
    readonly inverter_type: FieldRef<"Systems", 'String'>
    readonly timezone: FieldRef<"Systems", 'String'>
    readonly installation_date: FieldRef<"Systems", 'DateTime'>
    readonly status: FieldRef<"Systems", 'String'>
    readonly total_towers: FieldRef<"Systems", 'Int'>
    readonly max_pv_kw: FieldRef<"Systems", 'Decimal'>
    readonly software_version: FieldRef<"Systems", 'String'>
    readonly latitude: FieldRef<"Systems", 'Decimal'>
    readonly longitude: FieldRef<"Systems", 'Decimal'>
    readonly system_cipher: FieldRef<"Systems", 'String'>
    readonly system_iv: FieldRef<"Systems", 'String'>
    readonly system_tag: FieldRef<"Systems", 'String'>
    readonly has_fronius_system: FieldRef<"Systems", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Systems findUnique
   */
  export type SystemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where: SystemsWhereUniqueInput
  }

  /**
   * Systems findUniqueOrThrow
   */
  export type SystemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where: SystemsWhereUniqueInput
  }

  /**
   * Systems findFirst
   */
  export type SystemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where?: SystemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemsOrderByWithRelationInput | SystemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemsScalarFieldEnum | SystemsScalarFieldEnum[]
  }

  /**
   * Systems findFirstOrThrow
   */
  export type SystemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where?: SystemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemsOrderByWithRelationInput | SystemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Systems.
     */
    cursor?: SystemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Systems.
     */
    distinct?: SystemsScalarFieldEnum | SystemsScalarFieldEnum[]
  }

  /**
   * Systems findMany
   */
  export type SystemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * Filter, which Systems to fetch.
     */
    where?: SystemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Systems to fetch.
     */
    orderBy?: SystemsOrderByWithRelationInput | SystemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Systems.
     */
    cursor?: SystemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Systems.
     */
    skip?: number
    distinct?: SystemsScalarFieldEnum | SystemsScalarFieldEnum[]
  }

  /**
   * Systems create
   */
  export type SystemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * The data needed to create a Systems.
     */
    data: XOR<SystemsCreateInput, SystemsUncheckedCreateInput>
  }

  /**
   * Systems createMany
   */
  export type SystemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Systems.
     */
    data: SystemsCreateManyInput | SystemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Systems createManyAndReturn
   */
  export type SystemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * The data used to create many Systems.
     */
    data: SystemsCreateManyInput | SystemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Systems update
   */
  export type SystemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * The data needed to update a Systems.
     */
    data: XOR<SystemsUpdateInput, SystemsUncheckedUpdateInput>
    /**
     * Choose, which Systems to update.
     */
    where: SystemsWhereUniqueInput
  }

  /**
   * Systems updateMany
   */
  export type SystemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemsUpdateManyMutationInput, SystemsUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemsWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
  }

  /**
   * Systems updateManyAndReturn
   */
  export type SystemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * The data used to update Systems.
     */
    data: XOR<SystemsUpdateManyMutationInput, SystemsUncheckedUpdateManyInput>
    /**
     * Filter which Systems to update
     */
    where?: SystemsWhereInput
    /**
     * Limit how many Systems to update.
     */
    limit?: number
  }

  /**
   * Systems upsert
   */
  export type SystemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * The filter to search for the Systems to update in case it exists.
     */
    where: SystemsWhereUniqueInput
    /**
     * In case the Systems found by the `where` argument doesn't exist, create a new Systems with this data.
     */
    create: XOR<SystemsCreateInput, SystemsUncheckedCreateInput>
    /**
     * In case the Systems was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemsUpdateInput, SystemsUncheckedUpdateInput>
  }

  /**
   * Systems delete
   */
  export type SystemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    /**
     * Filter which Systems to delete.
     */
    where: SystemsWhereUniqueInput
  }

  /**
   * Systems deleteMany
   */
  export type SystemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Systems to delete
     */
    where?: SystemsWhereInput
    /**
     * Limit how many Systems to delete.
     */
    limit?: number
  }

  /**
   * Systems.customer_system
   */
  export type Systems$customer_systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    where?: customer_systemWhereInput
    orderBy?: customer_systemOrderByWithRelationInput | customer_systemOrderByWithRelationInput[]
    cursor?: customer_systemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_systemScalarFieldEnum | Customer_systemScalarFieldEnum[]
  }

  /**
   * Systems.towers
   */
  export type Systems$towersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: TowersOrderByWithRelationInput | TowersOrderByWithRelationInput[]
    cursor?: TowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TowersScalarFieldEnum | TowersScalarFieldEnum[]
  }

  /**
   * Systems without action
   */
  export type SystemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
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
    current_angle: Decimal | null
    system_id: number | null
  }

  export type TowersSumAggregateOutputType = {
    id: number | null
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
    current_angle: Decimal | null
    system_id: number | null
  }

  export type TowersMinAggregateOutputType = {
    id: number | null
    model: string | null
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
    current_angle: Decimal | null
    system_id: number | null
  }

  export type TowersMaxAggregateOutputType = {
    id: number | null
    model: string | null
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
    current_angle: Decimal | null
    system_id: number | null
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
    current_angle: number
    system_id: number
    _all: number
  }


  export type TowersAvgAggregateInputType = {
    id?: true
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
    current_angle?: true
    system_id?: true
  }

  export type TowersSumAggregateInputType = {
    id?: true
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
    current_angle?: true
    system_id?: true
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
    current_angle?: true
    system_id?: true
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
    current_angle?: true
    system_id?: true
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
    current_angle?: true
    system_id?: true
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
    model: string
    latitude: Decimal
    longitude: Decimal
    customer_id: number
    order_id: number
    state: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version: string | null
    current_angle: Decimal | null
    system_id: number | null
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
    current_angle?: boolean
    system_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
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
    current_angle?: boolean
    system_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
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
    current_angle?: boolean
    system_id?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
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
    current_angle?: boolean
    system_id?: boolean
  }

  export type TowersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "model" | "latitude" | "longitude" | "customer_id" | "order_id" | "state" | "c_group" | "error_state" | "length" | "height" | "width" | "software_version" | "current_angle" | "system_id", ExtArgs["result"]["towers"]>
  export type TowersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
  }
  export type TowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
  }
  export type TowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
  }

  export type $TowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Towers"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      system: Prisma.$SystemsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      model: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      customer_id: number
      order_id: number
      state: number | null
      c_group: number
      error_state: number
      length: number
      height: number
      width: number
      software_version: string | null
      current_angle: Prisma.Decimal | null
      system_id: number | null
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
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    system<T extends Towers$systemArgs<ExtArgs> = {}>(args?: Subset<T, Towers$systemArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly model: FieldRef<"Towers", 'String'>
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
    readonly current_angle: FieldRef<"Towers", 'Decimal'>
    readonly system_id: FieldRef<"Towers", 'Int'>
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
   * Towers.system
   */
  export type Towers$systemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Systems
     */
    select?: SystemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Systems
     */
    omit?: SystemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemsInclude<ExtArgs> | null
    where?: SystemsWhereInput
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
   * Model software_tickets
   */

  export type AggregateSoftware_tickets = {
    _count: Software_ticketsCountAggregateOutputType | null
    _avg: Software_ticketsAvgAggregateOutputType | null
    _sum: Software_ticketsSumAggregateOutputType | null
    _min: Software_ticketsMinAggregateOutputType | null
    _max: Software_ticketsMaxAggregateOutputType | null
  }

  export type Software_ticketsAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
  }

  export type Software_ticketsSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
  }

  export type Software_ticketsMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    email: string | null
    subject: string | null
    message: string | null
    date_time: Date | null
    handled: boolean | null
  }

  export type Software_ticketsMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    email: string | null
    subject: string | null
    message: string | null
    date_time: Date | null
    handled: boolean | null
  }

  export type Software_ticketsCountAggregateOutputType = {
    id: number
    customer_id: number
    email: number
    subject: number
    message: number
    date_time: number
    handled: number
    _all: number
  }


  export type Software_ticketsAvgAggregateInputType = {
    id?: true
    customer_id?: true
  }

  export type Software_ticketsSumAggregateInputType = {
    id?: true
    customer_id?: true
  }

  export type Software_ticketsMinAggregateInputType = {
    id?: true
    customer_id?: true
    email?: true
    subject?: true
    message?: true
    date_time?: true
    handled?: true
  }

  export type Software_ticketsMaxAggregateInputType = {
    id?: true
    customer_id?: true
    email?: true
    subject?: true
    message?: true
    date_time?: true
    handled?: true
  }

  export type Software_ticketsCountAggregateInputType = {
    id?: true
    customer_id?: true
    email?: true
    subject?: true
    message?: true
    date_time?: true
    handled?: true
    _all?: true
  }

  export type Software_ticketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which software_tickets to aggregate.
     */
    where?: software_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of software_tickets to fetch.
     */
    orderBy?: software_ticketsOrderByWithRelationInput | software_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: software_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` software_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` software_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned software_tickets
    **/
    _count?: true | Software_ticketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Software_ticketsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Software_ticketsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Software_ticketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Software_ticketsMaxAggregateInputType
  }

  export type GetSoftware_ticketsAggregateType<T extends Software_ticketsAggregateArgs> = {
        [P in keyof T & keyof AggregateSoftware_tickets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSoftware_tickets[P]>
      : GetScalarType<T[P], AggregateSoftware_tickets[P]>
  }




  export type software_ticketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: software_ticketsWhereInput
    orderBy?: software_ticketsOrderByWithAggregationInput | software_ticketsOrderByWithAggregationInput[]
    by: Software_ticketsScalarFieldEnum[] | Software_ticketsScalarFieldEnum
    having?: software_ticketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Software_ticketsCountAggregateInputType | true
    _avg?: Software_ticketsAvgAggregateInputType
    _sum?: Software_ticketsSumAggregateInputType
    _min?: Software_ticketsMinAggregateInputType
    _max?: Software_ticketsMaxAggregateInputType
  }

  export type Software_ticketsGroupByOutputType = {
    id: number
    customer_id: number
    email: string
    subject: string
    message: string
    date_time: Date
    handled: boolean
    _count: Software_ticketsCountAggregateOutputType | null
    _avg: Software_ticketsAvgAggregateOutputType | null
    _sum: Software_ticketsSumAggregateOutputType | null
    _min: Software_ticketsMinAggregateOutputType | null
    _max: Software_ticketsMaxAggregateOutputType | null
  }

  type GetSoftware_ticketsGroupByPayload<T extends software_ticketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Software_ticketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Software_ticketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Software_ticketsGroupByOutputType[P]>
            : GetScalarType<T[P], Software_ticketsGroupByOutputType[P]>
        }
      >
    >


  export type software_ticketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    date_time?: boolean
    handled?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["software_tickets"]>

  export type software_ticketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    date_time?: boolean
    handled?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["software_tickets"]>

  export type software_ticketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    date_time?: boolean
    handled?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["software_tickets"]>

  export type software_ticketsSelectScalar = {
    id?: boolean
    customer_id?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    date_time?: boolean
    handled?: boolean
  }

  export type software_ticketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "email" | "subject" | "message" | "date_time" | "handled", ExtArgs["result"]["software_tickets"]>
  export type software_ticketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type software_ticketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type software_ticketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $software_ticketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "software_tickets"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      email: string
      subject: string
      message: string
      date_time: Date
      handled: boolean
    }, ExtArgs["result"]["software_tickets"]>
    composites: {}
  }

  type software_ticketsGetPayload<S extends boolean | null | undefined | software_ticketsDefaultArgs> = $Result.GetResult<Prisma.$software_ticketsPayload, S>

  type software_ticketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<software_ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Software_ticketsCountAggregateInputType | true
    }

  export interface software_ticketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['software_tickets'], meta: { name: 'software_tickets' } }
    /**
     * Find zero or one Software_tickets that matches the filter.
     * @param {software_ticketsFindUniqueArgs} args - Arguments to find a Software_tickets
     * @example
     * // Get one Software_tickets
     * const software_tickets = await prisma.software_tickets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends software_ticketsFindUniqueArgs>(args: SelectSubset<T, software_ticketsFindUniqueArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Software_tickets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {software_ticketsFindUniqueOrThrowArgs} args - Arguments to find a Software_tickets
     * @example
     * // Get one Software_tickets
     * const software_tickets = await prisma.software_tickets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends software_ticketsFindUniqueOrThrowArgs>(args: SelectSubset<T, software_ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Software_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {software_ticketsFindFirstArgs} args - Arguments to find a Software_tickets
     * @example
     * // Get one Software_tickets
     * const software_tickets = await prisma.software_tickets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends software_ticketsFindFirstArgs>(args?: SelectSubset<T, software_ticketsFindFirstArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Software_tickets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {software_ticketsFindFirstOrThrowArgs} args - Arguments to find a Software_tickets
     * @example
     * // Get one Software_tickets
     * const software_tickets = await prisma.software_tickets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends software_ticketsFindFirstOrThrowArgs>(args?: SelectSubset<T, software_ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Software_tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {software_ticketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Software_tickets
     * const software_tickets = await prisma.software_tickets.findMany()
     * 
     * // Get first 10 Software_tickets
     * const software_tickets = await prisma.software_tickets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const software_ticketsWithIdOnly = await prisma.software_tickets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends software_ticketsFindManyArgs>(args?: SelectSubset<T, software_ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Software_tickets.
     * @param {software_ticketsCreateArgs} args - Arguments to create a Software_tickets.
     * @example
     * // Create one Software_tickets
     * const Software_tickets = await prisma.software_tickets.create({
     *   data: {
     *     // ... data to create a Software_tickets
     *   }
     * })
     * 
     */
    create<T extends software_ticketsCreateArgs>(args: SelectSubset<T, software_ticketsCreateArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Software_tickets.
     * @param {software_ticketsCreateManyArgs} args - Arguments to create many Software_tickets.
     * @example
     * // Create many Software_tickets
     * const software_tickets = await prisma.software_tickets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends software_ticketsCreateManyArgs>(args?: SelectSubset<T, software_ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Software_tickets and returns the data saved in the database.
     * @param {software_ticketsCreateManyAndReturnArgs} args - Arguments to create many Software_tickets.
     * @example
     * // Create many Software_tickets
     * const software_tickets = await prisma.software_tickets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Software_tickets and only return the `id`
     * const software_ticketsWithIdOnly = await prisma.software_tickets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends software_ticketsCreateManyAndReturnArgs>(args?: SelectSubset<T, software_ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Software_tickets.
     * @param {software_ticketsDeleteArgs} args - Arguments to delete one Software_tickets.
     * @example
     * // Delete one Software_tickets
     * const Software_tickets = await prisma.software_tickets.delete({
     *   where: {
     *     // ... filter to delete one Software_tickets
     *   }
     * })
     * 
     */
    delete<T extends software_ticketsDeleteArgs>(args: SelectSubset<T, software_ticketsDeleteArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Software_tickets.
     * @param {software_ticketsUpdateArgs} args - Arguments to update one Software_tickets.
     * @example
     * // Update one Software_tickets
     * const software_tickets = await prisma.software_tickets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends software_ticketsUpdateArgs>(args: SelectSubset<T, software_ticketsUpdateArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Software_tickets.
     * @param {software_ticketsDeleteManyArgs} args - Arguments to filter Software_tickets to delete.
     * @example
     * // Delete a few Software_tickets
     * const { count } = await prisma.software_tickets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends software_ticketsDeleteManyArgs>(args?: SelectSubset<T, software_ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Software_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {software_ticketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Software_tickets
     * const software_tickets = await prisma.software_tickets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends software_ticketsUpdateManyArgs>(args: SelectSubset<T, software_ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Software_tickets and returns the data updated in the database.
     * @param {software_ticketsUpdateManyAndReturnArgs} args - Arguments to update many Software_tickets.
     * @example
     * // Update many Software_tickets
     * const software_tickets = await prisma.software_tickets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Software_tickets and only return the `id`
     * const software_ticketsWithIdOnly = await prisma.software_tickets.updateManyAndReturn({
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
    updateManyAndReturn<T extends software_ticketsUpdateManyAndReturnArgs>(args: SelectSubset<T, software_ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Software_tickets.
     * @param {software_ticketsUpsertArgs} args - Arguments to update or create a Software_tickets.
     * @example
     * // Update or create a Software_tickets
     * const software_tickets = await prisma.software_tickets.upsert({
     *   create: {
     *     // ... data to create a Software_tickets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Software_tickets we want to update
     *   }
     * })
     */
    upsert<T extends software_ticketsUpsertArgs>(args: SelectSubset<T, software_ticketsUpsertArgs<ExtArgs>>): Prisma__software_ticketsClient<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Software_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {software_ticketsCountArgs} args - Arguments to filter Software_tickets to count.
     * @example
     * // Count the number of Software_tickets
     * const count = await prisma.software_tickets.count({
     *   where: {
     *     // ... the filter for the Software_tickets we want to count
     *   }
     * })
    **/
    count<T extends software_ticketsCountArgs>(
      args?: Subset<T, software_ticketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Software_ticketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Software_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Software_ticketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Software_ticketsAggregateArgs>(args: Subset<T, Software_ticketsAggregateArgs>): Prisma.PrismaPromise<GetSoftware_ticketsAggregateType<T>>

    /**
     * Group by Software_tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {software_ticketsGroupByArgs} args - Group by arguments.
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
      T extends software_ticketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: software_ticketsGroupByArgs['orderBy'] }
        : { orderBy?: software_ticketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, software_ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSoftware_ticketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the software_tickets model
   */
  readonly fields: software_ticketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for software_tickets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__software_ticketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the software_tickets model
   */
  interface software_ticketsFieldRefs {
    readonly id: FieldRef<"software_tickets", 'Int'>
    readonly customer_id: FieldRef<"software_tickets", 'Int'>
    readonly email: FieldRef<"software_tickets", 'String'>
    readonly subject: FieldRef<"software_tickets", 'String'>
    readonly message: FieldRef<"software_tickets", 'String'>
    readonly date_time: FieldRef<"software_tickets", 'DateTime'>
    readonly handled: FieldRef<"software_tickets", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * software_tickets findUnique
   */
  export type software_ticketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which software_tickets to fetch.
     */
    where: software_ticketsWhereUniqueInput
  }

  /**
   * software_tickets findUniqueOrThrow
   */
  export type software_ticketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which software_tickets to fetch.
     */
    where: software_ticketsWhereUniqueInput
  }

  /**
   * software_tickets findFirst
   */
  export type software_ticketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which software_tickets to fetch.
     */
    where?: software_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of software_tickets to fetch.
     */
    orderBy?: software_ticketsOrderByWithRelationInput | software_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for software_tickets.
     */
    cursor?: software_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` software_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` software_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of software_tickets.
     */
    distinct?: Software_ticketsScalarFieldEnum | Software_ticketsScalarFieldEnum[]
  }

  /**
   * software_tickets findFirstOrThrow
   */
  export type software_ticketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which software_tickets to fetch.
     */
    where?: software_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of software_tickets to fetch.
     */
    orderBy?: software_ticketsOrderByWithRelationInput | software_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for software_tickets.
     */
    cursor?: software_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` software_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` software_tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of software_tickets.
     */
    distinct?: Software_ticketsScalarFieldEnum | Software_ticketsScalarFieldEnum[]
  }

  /**
   * software_tickets findMany
   */
  export type software_ticketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * Filter, which software_tickets to fetch.
     */
    where?: software_ticketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of software_tickets to fetch.
     */
    orderBy?: software_ticketsOrderByWithRelationInput | software_ticketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing software_tickets.
     */
    cursor?: software_ticketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` software_tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` software_tickets.
     */
    skip?: number
    distinct?: Software_ticketsScalarFieldEnum | Software_ticketsScalarFieldEnum[]
  }

  /**
   * software_tickets create
   */
  export type software_ticketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * The data needed to create a software_tickets.
     */
    data: XOR<software_ticketsCreateInput, software_ticketsUncheckedCreateInput>
  }

  /**
   * software_tickets createMany
   */
  export type software_ticketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many software_tickets.
     */
    data: software_ticketsCreateManyInput | software_ticketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * software_tickets createManyAndReturn
   */
  export type software_ticketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * The data used to create many software_tickets.
     */
    data: software_ticketsCreateManyInput | software_ticketsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * software_tickets update
   */
  export type software_ticketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * The data needed to update a software_tickets.
     */
    data: XOR<software_ticketsUpdateInput, software_ticketsUncheckedUpdateInput>
    /**
     * Choose, which software_tickets to update.
     */
    where: software_ticketsWhereUniqueInput
  }

  /**
   * software_tickets updateMany
   */
  export type software_ticketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update software_tickets.
     */
    data: XOR<software_ticketsUpdateManyMutationInput, software_ticketsUncheckedUpdateManyInput>
    /**
     * Filter which software_tickets to update
     */
    where?: software_ticketsWhereInput
    /**
     * Limit how many software_tickets to update.
     */
    limit?: number
  }

  /**
   * software_tickets updateManyAndReturn
   */
  export type software_ticketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * The data used to update software_tickets.
     */
    data: XOR<software_ticketsUpdateManyMutationInput, software_ticketsUncheckedUpdateManyInput>
    /**
     * Filter which software_tickets to update
     */
    where?: software_ticketsWhereInput
    /**
     * Limit how many software_tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * software_tickets upsert
   */
  export type software_ticketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * The filter to search for the software_tickets to update in case it exists.
     */
    where: software_ticketsWhereUniqueInput
    /**
     * In case the software_tickets found by the `where` argument doesn't exist, create a new software_tickets with this data.
     */
    create: XOR<software_ticketsCreateInput, software_ticketsUncheckedCreateInput>
    /**
     * In case the software_tickets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<software_ticketsUpdateInput, software_ticketsUncheckedUpdateInput>
  }

  /**
   * software_tickets delete
   */
  export type software_ticketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
    /**
     * Filter which software_tickets to delete.
     */
    where: software_ticketsWhereUniqueInput
  }

  /**
   * software_tickets deleteMany
   */
  export type software_ticketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which software_tickets to delete
     */
    where?: software_ticketsWhereInput
    /**
     * Limit how many software_tickets to delete.
     */
    limit?: number
  }

  /**
   * software_tickets without action
   */
  export type software_ticketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the software_tickets
     */
    select?: software_ticketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the software_tickets
     */
    omit?: software_ticketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: software_ticketsInclude<ExtArgs> | null
  }


  /**
   * Model customer_system
   */

  export type AggregateCustomer_system = {
    _count: Customer_systemCountAggregateOutputType | null
    _avg: Customer_systemAvgAggregateOutputType | null
    _sum: Customer_systemSumAggregateOutputType | null
    _min: Customer_systemMinAggregateOutputType | null
    _max: Customer_systemMaxAggregateOutputType | null
  }

  export type Customer_systemAvgAggregateOutputType = {
    customer_id: number | null
    system_id: number | null
  }

  export type Customer_systemSumAggregateOutputType = {
    customer_id: number | null
    system_id: number | null
  }

  export type Customer_systemMinAggregateOutputType = {
    customer_id: number | null
    system_id: number | null
    role: string | null
  }

  export type Customer_systemMaxAggregateOutputType = {
    customer_id: number | null
    system_id: number | null
    role: string | null
  }

  export type Customer_systemCountAggregateOutputType = {
    customer_id: number
    system_id: number
    role: number
    _all: number
  }


  export type Customer_systemAvgAggregateInputType = {
    customer_id?: true
    system_id?: true
  }

  export type Customer_systemSumAggregateInputType = {
    customer_id?: true
    system_id?: true
  }

  export type Customer_systemMinAggregateInputType = {
    customer_id?: true
    system_id?: true
    role?: true
  }

  export type Customer_systemMaxAggregateInputType = {
    customer_id?: true
    system_id?: true
    role?: true
  }

  export type Customer_systemCountAggregateInputType = {
    customer_id?: true
    system_id?: true
    role?: true
    _all?: true
  }

  export type Customer_systemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_system to aggregate.
     */
    where?: customer_systemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_systems to fetch.
     */
    orderBy?: customer_systemOrderByWithRelationInput | customer_systemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customer_systemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customer_systems
    **/
    _count?: true | Customer_systemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Customer_systemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Customer_systemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_systemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_systemMaxAggregateInputType
  }

  export type GetCustomer_systemAggregateType<T extends Customer_systemAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_system]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_system[P]>
      : GetScalarType<T[P], AggregateCustomer_system[P]>
  }




  export type customer_systemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customer_systemWhereInput
    orderBy?: customer_systemOrderByWithAggregationInput | customer_systemOrderByWithAggregationInput[]
    by: Customer_systemScalarFieldEnum[] | Customer_systemScalarFieldEnum
    having?: customer_systemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_systemCountAggregateInputType | true
    _avg?: Customer_systemAvgAggregateInputType
    _sum?: Customer_systemSumAggregateInputType
    _min?: Customer_systemMinAggregateInputType
    _max?: Customer_systemMaxAggregateInputType
  }

  export type Customer_systemGroupByOutputType = {
    customer_id: number
    system_id: number
    role: string | null
    _count: Customer_systemCountAggregateOutputType | null
    _avg: Customer_systemAvgAggregateOutputType | null
    _sum: Customer_systemSumAggregateOutputType | null
    _min: Customer_systemMinAggregateOutputType | null
    _max: Customer_systemMaxAggregateOutputType | null
  }

  type GetCustomer_systemGroupByPayload<T extends customer_systemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_systemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_systemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_systemGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_systemGroupByOutputType[P]>
        }
      >
    >


  export type customer_systemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    system_id?: boolean
    role?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    systems?: boolean | SystemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_system"]>

  export type customer_systemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    system_id?: boolean
    role?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    systems?: boolean | SystemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_system"]>

  export type customer_systemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    system_id?: boolean
    role?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    systems?: boolean | SystemsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_system"]>

  export type customer_systemSelectScalar = {
    customer_id?: boolean
    system_id?: boolean
    role?: boolean
  }

  export type customer_systemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "system_id" | "role", ExtArgs["result"]["customer_system"]>
  export type customer_systemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    systems?: boolean | SystemsDefaultArgs<ExtArgs>
  }
  export type customer_systemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    systems?: boolean | SystemsDefaultArgs<ExtArgs>
  }
  export type customer_systemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    systems?: boolean | SystemsDefaultArgs<ExtArgs>
  }

  export type $customer_systemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer_system"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>
      systems: Prisma.$SystemsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      system_id: number
      role: string | null
    }, ExtArgs["result"]["customer_system"]>
    composites: {}
  }

  type customer_systemGetPayload<S extends boolean | null | undefined | customer_systemDefaultArgs> = $Result.GetResult<Prisma.$customer_systemPayload, S>

  type customer_systemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customer_systemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Customer_systemCountAggregateInputType | true
    }

  export interface customer_systemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer_system'], meta: { name: 'customer_system' } }
    /**
     * Find zero or one Customer_system that matches the filter.
     * @param {customer_systemFindUniqueArgs} args - Arguments to find a Customer_system
     * @example
     * // Get one Customer_system
     * const customer_system = await prisma.customer_system.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customer_systemFindUniqueArgs>(args: SelectSubset<T, customer_systemFindUniqueArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer_system that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customer_systemFindUniqueOrThrowArgs} args - Arguments to find a Customer_system
     * @example
     * // Get one Customer_system
     * const customer_system = await prisma.customer_system.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customer_systemFindUniqueOrThrowArgs>(args: SelectSubset<T, customer_systemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_system that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_systemFindFirstArgs} args - Arguments to find a Customer_system
     * @example
     * // Get one Customer_system
     * const customer_system = await prisma.customer_system.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customer_systemFindFirstArgs>(args?: SelectSubset<T, customer_systemFindFirstArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_system that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_systemFindFirstOrThrowArgs} args - Arguments to find a Customer_system
     * @example
     * // Get one Customer_system
     * const customer_system = await prisma.customer_system.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customer_systemFindFirstOrThrowArgs>(args?: SelectSubset<T, customer_systemFindFirstOrThrowArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customer_systems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_systemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_systems
     * const customer_systems = await prisma.customer_system.findMany()
     * 
     * // Get first 10 Customer_systems
     * const customer_systems = await prisma.customer_system.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customer_systemWithCustomer_idOnly = await prisma.customer_system.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends customer_systemFindManyArgs>(args?: SelectSubset<T, customer_systemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer_system.
     * @param {customer_systemCreateArgs} args - Arguments to create a Customer_system.
     * @example
     * // Create one Customer_system
     * const Customer_system = await prisma.customer_system.create({
     *   data: {
     *     // ... data to create a Customer_system
     *   }
     * })
     * 
     */
    create<T extends customer_systemCreateArgs>(args: SelectSubset<T, customer_systemCreateArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customer_systems.
     * @param {customer_systemCreateManyArgs} args - Arguments to create many Customer_systems.
     * @example
     * // Create many Customer_systems
     * const customer_system = await prisma.customer_system.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customer_systemCreateManyArgs>(args?: SelectSubset<T, customer_systemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customer_systems and returns the data saved in the database.
     * @param {customer_systemCreateManyAndReturnArgs} args - Arguments to create many Customer_systems.
     * @example
     * // Create many Customer_systems
     * const customer_system = await prisma.customer_system.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customer_systems and only return the `customer_id`
     * const customer_systemWithCustomer_idOnly = await prisma.customer_system.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customer_systemCreateManyAndReturnArgs>(args?: SelectSubset<T, customer_systemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer_system.
     * @param {customer_systemDeleteArgs} args - Arguments to delete one Customer_system.
     * @example
     * // Delete one Customer_system
     * const Customer_system = await prisma.customer_system.delete({
     *   where: {
     *     // ... filter to delete one Customer_system
     *   }
     * })
     * 
     */
    delete<T extends customer_systemDeleteArgs>(args: SelectSubset<T, customer_systemDeleteArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer_system.
     * @param {customer_systemUpdateArgs} args - Arguments to update one Customer_system.
     * @example
     * // Update one Customer_system
     * const customer_system = await prisma.customer_system.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customer_systemUpdateArgs>(args: SelectSubset<T, customer_systemUpdateArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customer_systems.
     * @param {customer_systemDeleteManyArgs} args - Arguments to filter Customer_systems to delete.
     * @example
     * // Delete a few Customer_systems
     * const { count } = await prisma.customer_system.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customer_systemDeleteManyArgs>(args?: SelectSubset<T, customer_systemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_systemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_systems
     * const customer_system = await prisma.customer_system.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customer_systemUpdateManyArgs>(args: SelectSubset<T, customer_systemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_systems and returns the data updated in the database.
     * @param {customer_systemUpdateManyAndReturnArgs} args - Arguments to update many Customer_systems.
     * @example
     * // Update many Customer_systems
     * const customer_system = await prisma.customer_system.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customer_systems and only return the `customer_id`
     * const customer_systemWithCustomer_idOnly = await prisma.customer_system.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends customer_systemUpdateManyAndReturnArgs>(args: SelectSubset<T, customer_systemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer_system.
     * @param {customer_systemUpsertArgs} args - Arguments to update or create a Customer_system.
     * @example
     * // Update or create a Customer_system
     * const customer_system = await prisma.customer_system.upsert({
     *   create: {
     *     // ... data to create a Customer_system
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_system we want to update
     *   }
     * })
     */
    upsert<T extends customer_systemUpsertArgs>(args: SelectSubset<T, customer_systemUpsertArgs<ExtArgs>>): Prisma__customer_systemClient<$Result.GetResult<Prisma.$customer_systemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customer_systems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_systemCountArgs} args - Arguments to filter Customer_systems to count.
     * @example
     * // Count the number of Customer_systems
     * const count = await prisma.customer_system.count({
     *   where: {
     *     // ... the filter for the Customer_systems we want to count
     *   }
     * })
    **/
    count<T extends customer_systemCountArgs>(
      args?: Subset<T, customer_systemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_systemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_system.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_systemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Customer_systemAggregateArgs>(args: Subset<T, Customer_systemAggregateArgs>): Prisma.PrismaPromise<GetCustomer_systemAggregateType<T>>

    /**
     * Group by Customer_system.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customer_systemGroupByArgs} args - Group by arguments.
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
      T extends customer_systemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customer_systemGroupByArgs['orderBy'] }
        : { orderBy?: customer_systemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customer_systemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_systemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer_system model
   */
  readonly fields: customer_systemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer_system.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customer_systemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    systems<T extends SystemsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemsDefaultArgs<ExtArgs>>): Prisma__SystemsClient<$Result.GetResult<Prisma.$SystemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the customer_system model
   */
  interface customer_systemFieldRefs {
    readonly customer_id: FieldRef<"customer_system", 'Int'>
    readonly system_id: FieldRef<"customer_system", 'Int'>
    readonly role: FieldRef<"customer_system", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customer_system findUnique
   */
  export type customer_systemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * Filter, which customer_system to fetch.
     */
    where: customer_systemWhereUniqueInput
  }

  /**
   * customer_system findUniqueOrThrow
   */
  export type customer_systemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * Filter, which customer_system to fetch.
     */
    where: customer_systemWhereUniqueInput
  }

  /**
   * customer_system findFirst
   */
  export type customer_systemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * Filter, which customer_system to fetch.
     */
    where?: customer_systemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_systems to fetch.
     */
    orderBy?: customer_systemOrderByWithRelationInput | customer_systemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customer_systems.
     */
    cursor?: customer_systemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customer_systems.
     */
    distinct?: Customer_systemScalarFieldEnum | Customer_systemScalarFieldEnum[]
  }

  /**
   * customer_system findFirstOrThrow
   */
  export type customer_systemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * Filter, which customer_system to fetch.
     */
    where?: customer_systemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_systems to fetch.
     */
    orderBy?: customer_systemOrderByWithRelationInput | customer_systemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customer_systems.
     */
    cursor?: customer_systemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_systems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customer_systems.
     */
    distinct?: Customer_systemScalarFieldEnum | Customer_systemScalarFieldEnum[]
  }

  /**
   * customer_system findMany
   */
  export type customer_systemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * Filter, which customer_systems to fetch.
     */
    where?: customer_systemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customer_systems to fetch.
     */
    orderBy?: customer_systemOrderByWithRelationInput | customer_systemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customer_systems.
     */
    cursor?: customer_systemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customer_systems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customer_systems.
     */
    skip?: number
    distinct?: Customer_systemScalarFieldEnum | Customer_systemScalarFieldEnum[]
  }

  /**
   * customer_system create
   */
  export type customer_systemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * The data needed to create a customer_system.
     */
    data: XOR<customer_systemCreateInput, customer_systemUncheckedCreateInput>
  }

  /**
   * customer_system createMany
   */
  export type customer_systemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customer_systems.
     */
    data: customer_systemCreateManyInput | customer_systemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer_system createManyAndReturn
   */
  export type customer_systemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * The data used to create many customer_systems.
     */
    data: customer_systemCreateManyInput | customer_systemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer_system update
   */
  export type customer_systemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * The data needed to update a customer_system.
     */
    data: XOR<customer_systemUpdateInput, customer_systemUncheckedUpdateInput>
    /**
     * Choose, which customer_system to update.
     */
    where: customer_systemWhereUniqueInput
  }

  /**
   * customer_system updateMany
   */
  export type customer_systemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customer_systems.
     */
    data: XOR<customer_systemUpdateManyMutationInput, customer_systemUncheckedUpdateManyInput>
    /**
     * Filter which customer_systems to update
     */
    where?: customer_systemWhereInput
    /**
     * Limit how many customer_systems to update.
     */
    limit?: number
  }

  /**
   * customer_system updateManyAndReturn
   */
  export type customer_systemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * The data used to update customer_systems.
     */
    data: XOR<customer_systemUpdateManyMutationInput, customer_systemUncheckedUpdateManyInput>
    /**
     * Filter which customer_systems to update
     */
    where?: customer_systemWhereInput
    /**
     * Limit how many customer_systems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * customer_system upsert
   */
  export type customer_systemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * The filter to search for the customer_system to update in case it exists.
     */
    where: customer_systemWhereUniqueInput
    /**
     * In case the customer_system found by the `where` argument doesn't exist, create a new customer_system with this data.
     */
    create: XOR<customer_systemCreateInput, customer_systemUncheckedCreateInput>
    /**
     * In case the customer_system was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customer_systemUpdateInput, customer_systemUncheckedUpdateInput>
  }

  /**
   * customer_system delete
   */
  export type customer_systemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
    /**
     * Filter which customer_system to delete.
     */
    where: customer_systemWhereUniqueInput
  }

  /**
   * customer_system deleteMany
   */
  export type customer_systemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer_systems to delete
     */
    where?: customer_systemWhereInput
    /**
     * Limit how many customer_systems to delete.
     */
    limit?: number
  }

  /**
   * customer_system without action
   */
  export type customer_systemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer_system
     */
    select?: customer_systemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer_system
     */
    omit?: customer_systemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customer_systemInclude<ExtArgs> | null
  }


  /**
   * Model tower_data
   */

  export type AggregateTower_data = {
    _count: Tower_dataCountAggregateOutputType | null
    _avg: Tower_dataAvgAggregateOutputType | null
    _sum: Tower_dataSumAggregateOutputType | null
    _min: Tower_dataMinAggregateOutputType | null
    _max: Tower_dataMaxAggregateOutputType | null
  }

  export type Tower_dataAvgAggregateOutputType = {
    id: number | null
    tower_id: number | null
    tower_angle: number | null
    error_ticks: number | null
  }

  export type Tower_dataSumAggregateOutputType = {
    id: bigint | null
    tower_id: bigint | null
    tower_angle: number | null
    error_ticks: number | null
  }

  export type Tower_dataMinAggregateOutputType = {
    id: bigint | null
    tower_id: bigint | null
    recorded_at: Date | null
    tower_angle: number | null
    error_ticks: number | null
    created_at: Date | null
  }

  export type Tower_dataMaxAggregateOutputType = {
    id: bigint | null
    tower_id: bigint | null
    recorded_at: Date | null
    tower_angle: number | null
    error_ticks: number | null
    created_at: Date | null
  }

  export type Tower_dataCountAggregateOutputType = {
    id: number
    tower_id: number
    recorded_at: number
    tower_angle: number
    error_ticks: number
    metadata: number
    created_at: number
    _all: number
  }


  export type Tower_dataAvgAggregateInputType = {
    id?: true
    tower_id?: true
    tower_angle?: true
    error_ticks?: true
  }

  export type Tower_dataSumAggregateInputType = {
    id?: true
    tower_id?: true
    tower_angle?: true
    error_ticks?: true
  }

  export type Tower_dataMinAggregateInputType = {
    id?: true
    tower_id?: true
    recorded_at?: true
    tower_angle?: true
    error_ticks?: true
    created_at?: true
  }

  export type Tower_dataMaxAggregateInputType = {
    id?: true
    tower_id?: true
    recorded_at?: true
    tower_angle?: true
    error_ticks?: true
    created_at?: true
  }

  export type Tower_dataCountAggregateInputType = {
    id?: true
    tower_id?: true
    recorded_at?: true
    tower_angle?: true
    error_ticks?: true
    metadata?: true
    created_at?: true
    _all?: true
  }

  export type Tower_dataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tower_data to aggregate.
     */
    where?: tower_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_data to fetch.
     */
    orderBy?: tower_dataOrderByWithRelationInput | tower_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tower_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tower_data
    **/
    _count?: true | Tower_dataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tower_dataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tower_dataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tower_dataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tower_dataMaxAggregateInputType
  }

  export type GetTower_dataAggregateType<T extends Tower_dataAggregateArgs> = {
        [P in keyof T & keyof AggregateTower_data]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTower_data[P]>
      : GetScalarType<T[P], AggregateTower_data[P]>
  }




  export type tower_dataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tower_dataWhereInput
    orderBy?: tower_dataOrderByWithAggregationInput | tower_dataOrderByWithAggregationInput[]
    by: Tower_dataScalarFieldEnum[] | Tower_dataScalarFieldEnum
    having?: tower_dataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tower_dataCountAggregateInputType | true
    _avg?: Tower_dataAvgAggregateInputType
    _sum?: Tower_dataSumAggregateInputType
    _min?: Tower_dataMinAggregateInputType
    _max?: Tower_dataMaxAggregateInputType
  }

  export type Tower_dataGroupByOutputType = {
    id: bigint
    tower_id: bigint
    recorded_at: Date | null
    tower_angle: number | null
    error_ticks: number | null
    metadata: JsonValue | null
    created_at: Date
    _count: Tower_dataCountAggregateOutputType | null
    _avg: Tower_dataAvgAggregateOutputType | null
    _sum: Tower_dataSumAggregateOutputType | null
    _min: Tower_dataMinAggregateOutputType | null
    _max: Tower_dataMaxAggregateOutputType | null
  }

  type GetTower_dataGroupByPayload<T extends tower_dataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tower_dataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tower_dataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tower_dataGroupByOutputType[P]>
            : GetScalarType<T[P], Tower_dataGroupByOutputType[P]>
        }
      >
    >


  export type tower_dataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tower_id?: boolean
    recorded_at?: boolean
    tower_angle?: boolean
    error_ticks?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tower_data"]>

  export type tower_dataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tower_id?: boolean
    recorded_at?: boolean
    tower_angle?: boolean
    error_ticks?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tower_data"]>

  export type tower_dataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tower_id?: boolean
    recorded_at?: boolean
    tower_angle?: boolean
    error_ticks?: boolean
    metadata?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tower_data"]>

  export type tower_dataSelectScalar = {
    id?: boolean
    tower_id?: boolean
    recorded_at?: boolean
    tower_angle?: boolean
    error_ticks?: boolean
    metadata?: boolean
    created_at?: boolean
  }

  export type tower_dataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tower_id" | "recorded_at" | "tower_angle" | "error_ticks" | "metadata" | "created_at", ExtArgs["result"]["tower_data"]>

  export type $tower_dataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tower_data"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      tower_id: bigint
      recorded_at: Date | null
      tower_angle: number | null
      error_ticks: number | null
      metadata: Prisma.JsonValue | null
      created_at: Date
    }, ExtArgs["result"]["tower_data"]>
    composites: {}
  }

  type tower_dataGetPayload<S extends boolean | null | undefined | tower_dataDefaultArgs> = $Result.GetResult<Prisma.$tower_dataPayload, S>

  type tower_dataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tower_dataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tower_dataCountAggregateInputType | true
    }

  export interface tower_dataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tower_data'], meta: { name: 'tower_data' } }
    /**
     * Find zero or one Tower_data that matches the filter.
     * @param {tower_dataFindUniqueArgs} args - Arguments to find a Tower_data
     * @example
     * // Get one Tower_data
     * const tower_data = await prisma.tower_data.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tower_dataFindUniqueArgs>(args: SelectSubset<T, tower_dataFindUniqueArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tower_data that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tower_dataFindUniqueOrThrowArgs} args - Arguments to find a Tower_data
     * @example
     * // Get one Tower_data
     * const tower_data = await prisma.tower_data.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tower_dataFindUniqueOrThrowArgs>(args: SelectSubset<T, tower_dataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_dataFindFirstArgs} args - Arguments to find a Tower_data
     * @example
     * // Get one Tower_data
     * const tower_data = await prisma.tower_data.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tower_dataFindFirstArgs>(args?: SelectSubset<T, tower_dataFindFirstArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower_data that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_dataFindFirstOrThrowArgs} args - Arguments to find a Tower_data
     * @example
     * // Get one Tower_data
     * const tower_data = await prisma.tower_data.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tower_dataFindFirstOrThrowArgs>(args?: SelectSubset<T, tower_dataFindFirstOrThrowArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tower_data that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_dataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tower_data
     * const tower_data = await prisma.tower_data.findMany()
     * 
     * // Get first 10 Tower_data
     * const tower_data = await prisma.tower_data.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tower_dataWithIdOnly = await prisma.tower_data.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tower_dataFindManyArgs>(args?: SelectSubset<T, tower_dataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tower_data.
     * @param {tower_dataCreateArgs} args - Arguments to create a Tower_data.
     * @example
     * // Create one Tower_data
     * const Tower_data = await prisma.tower_data.create({
     *   data: {
     *     // ... data to create a Tower_data
     *   }
     * })
     * 
     */
    create<T extends tower_dataCreateArgs>(args: SelectSubset<T, tower_dataCreateArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tower_data.
     * @param {tower_dataCreateManyArgs} args - Arguments to create many Tower_data.
     * @example
     * // Create many Tower_data
     * const tower_data = await prisma.tower_data.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tower_dataCreateManyArgs>(args?: SelectSubset<T, tower_dataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tower_data and returns the data saved in the database.
     * @param {tower_dataCreateManyAndReturnArgs} args - Arguments to create many Tower_data.
     * @example
     * // Create many Tower_data
     * const tower_data = await prisma.tower_data.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tower_data and only return the `id`
     * const tower_dataWithIdOnly = await prisma.tower_data.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tower_dataCreateManyAndReturnArgs>(args?: SelectSubset<T, tower_dataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tower_data.
     * @param {tower_dataDeleteArgs} args - Arguments to delete one Tower_data.
     * @example
     * // Delete one Tower_data
     * const Tower_data = await prisma.tower_data.delete({
     *   where: {
     *     // ... filter to delete one Tower_data
     *   }
     * })
     * 
     */
    delete<T extends tower_dataDeleteArgs>(args: SelectSubset<T, tower_dataDeleteArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tower_data.
     * @param {tower_dataUpdateArgs} args - Arguments to update one Tower_data.
     * @example
     * // Update one Tower_data
     * const tower_data = await prisma.tower_data.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tower_dataUpdateArgs>(args: SelectSubset<T, tower_dataUpdateArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tower_data.
     * @param {tower_dataDeleteManyArgs} args - Arguments to filter Tower_data to delete.
     * @example
     * // Delete a few Tower_data
     * const { count } = await prisma.tower_data.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tower_dataDeleteManyArgs>(args?: SelectSubset<T, tower_dataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tower_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_dataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tower_data
     * const tower_data = await prisma.tower_data.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tower_dataUpdateManyArgs>(args: SelectSubset<T, tower_dataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tower_data and returns the data updated in the database.
     * @param {tower_dataUpdateManyAndReturnArgs} args - Arguments to update many Tower_data.
     * @example
     * // Update many Tower_data
     * const tower_data = await prisma.tower_data.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tower_data and only return the `id`
     * const tower_dataWithIdOnly = await prisma.tower_data.updateManyAndReturn({
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
    updateManyAndReturn<T extends tower_dataUpdateManyAndReturnArgs>(args: SelectSubset<T, tower_dataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tower_data.
     * @param {tower_dataUpsertArgs} args - Arguments to update or create a Tower_data.
     * @example
     * // Update or create a Tower_data
     * const tower_data = await prisma.tower_data.upsert({
     *   create: {
     *     // ... data to create a Tower_data
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tower_data we want to update
     *   }
     * })
     */
    upsert<T extends tower_dataUpsertArgs>(args: SelectSubset<T, tower_dataUpsertArgs<ExtArgs>>): Prisma__tower_dataClient<$Result.GetResult<Prisma.$tower_dataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tower_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_dataCountArgs} args - Arguments to filter Tower_data to count.
     * @example
     * // Count the number of Tower_data
     * const count = await prisma.tower_data.count({
     *   where: {
     *     // ... the filter for the Tower_data we want to count
     *   }
     * })
    **/
    count<T extends tower_dataCountArgs>(
      args?: Subset<T, tower_dataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tower_dataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tower_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tower_dataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tower_dataAggregateArgs>(args: Subset<T, Tower_dataAggregateArgs>): Prisma.PrismaPromise<GetTower_dataAggregateType<T>>

    /**
     * Group by Tower_data.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_dataGroupByArgs} args - Group by arguments.
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
      T extends tower_dataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tower_dataGroupByArgs['orderBy'] }
        : { orderBy?: tower_dataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tower_dataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTower_dataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tower_data model
   */
  readonly fields: tower_dataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tower_data.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tower_dataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the tower_data model
   */
  interface tower_dataFieldRefs {
    readonly id: FieldRef<"tower_data", 'BigInt'>
    readonly tower_id: FieldRef<"tower_data", 'BigInt'>
    readonly recorded_at: FieldRef<"tower_data", 'DateTime'>
    readonly tower_angle: FieldRef<"tower_data", 'Float'>
    readonly error_ticks: FieldRef<"tower_data", 'Int'>
    readonly metadata: FieldRef<"tower_data", 'Json'>
    readonly created_at: FieldRef<"tower_data", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tower_data findUnique
   */
  export type tower_dataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * Filter, which tower_data to fetch.
     */
    where: tower_dataWhereUniqueInput
  }

  /**
   * tower_data findUniqueOrThrow
   */
  export type tower_dataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * Filter, which tower_data to fetch.
     */
    where: tower_dataWhereUniqueInput
  }

  /**
   * tower_data findFirst
   */
  export type tower_dataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * Filter, which tower_data to fetch.
     */
    where?: tower_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_data to fetch.
     */
    orderBy?: tower_dataOrderByWithRelationInput | tower_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tower_data.
     */
    cursor?: tower_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tower_data.
     */
    distinct?: Tower_dataScalarFieldEnum | Tower_dataScalarFieldEnum[]
  }

  /**
   * tower_data findFirstOrThrow
   */
  export type tower_dataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * Filter, which tower_data to fetch.
     */
    where?: tower_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_data to fetch.
     */
    orderBy?: tower_dataOrderByWithRelationInput | tower_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tower_data.
     */
    cursor?: tower_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_data.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tower_data.
     */
    distinct?: Tower_dataScalarFieldEnum | Tower_dataScalarFieldEnum[]
  }

  /**
   * tower_data findMany
   */
  export type tower_dataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * Filter, which tower_data to fetch.
     */
    where?: tower_dataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_data to fetch.
     */
    orderBy?: tower_dataOrderByWithRelationInput | tower_dataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tower_data.
     */
    cursor?: tower_dataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_data from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_data.
     */
    skip?: number
    distinct?: Tower_dataScalarFieldEnum | Tower_dataScalarFieldEnum[]
  }

  /**
   * tower_data create
   */
  export type tower_dataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * The data needed to create a tower_data.
     */
    data: XOR<tower_dataCreateInput, tower_dataUncheckedCreateInput>
  }

  /**
   * tower_data createMany
   */
  export type tower_dataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tower_data.
     */
    data: tower_dataCreateManyInput | tower_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tower_data createManyAndReturn
   */
  export type tower_dataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * The data used to create many tower_data.
     */
    data: tower_dataCreateManyInput | tower_dataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tower_data update
   */
  export type tower_dataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * The data needed to update a tower_data.
     */
    data: XOR<tower_dataUpdateInput, tower_dataUncheckedUpdateInput>
    /**
     * Choose, which tower_data to update.
     */
    where: tower_dataWhereUniqueInput
  }

  /**
   * tower_data updateMany
   */
  export type tower_dataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tower_data.
     */
    data: XOR<tower_dataUpdateManyMutationInput, tower_dataUncheckedUpdateManyInput>
    /**
     * Filter which tower_data to update
     */
    where?: tower_dataWhereInput
    /**
     * Limit how many tower_data to update.
     */
    limit?: number
  }

  /**
   * tower_data updateManyAndReturn
   */
  export type tower_dataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * The data used to update tower_data.
     */
    data: XOR<tower_dataUpdateManyMutationInput, tower_dataUncheckedUpdateManyInput>
    /**
     * Filter which tower_data to update
     */
    where?: tower_dataWhereInput
    /**
     * Limit how many tower_data to update.
     */
    limit?: number
  }

  /**
   * tower_data upsert
   */
  export type tower_dataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * The filter to search for the tower_data to update in case it exists.
     */
    where: tower_dataWhereUniqueInput
    /**
     * In case the tower_data found by the `where` argument doesn't exist, create a new tower_data with this data.
     */
    create: XOR<tower_dataCreateInput, tower_dataUncheckedCreateInput>
    /**
     * In case the tower_data was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tower_dataUpdateInput, tower_dataUncheckedUpdateInput>
  }

  /**
   * tower_data delete
   */
  export type tower_dataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
    /**
     * Filter which tower_data to delete.
     */
    where: tower_dataWhereUniqueInput
  }

  /**
   * tower_data deleteMany
   */
  export type tower_dataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tower_data to delete
     */
    where?: tower_dataWhereInput
    /**
     * Limit how many tower_data to delete.
     */
    limit?: number
  }

  /**
   * tower_data without action
   */
  export type tower_dataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_data
     */
    select?: tower_dataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_data
     */
    omit?: tower_dataOmit<ExtArgs> | null
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
    phone_number: 'phone_number',
    password_hash: 'password_hash',
    plan_tier: 'plan_tier',
    role: 'role',
    force_password_reset: 'force_password_reset'
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


  export const SystemsScalarFieldEnum: {
    id: 'id',
    system_name: 'system_name',
    inverter_type: 'inverter_type',
    timezone: 'timezone',
    installation_date: 'installation_date',
    status: 'status',
    total_towers: 'total_towers',
    max_pv_kw: 'max_pv_kw',
    software_version: 'software_version',
    latitude: 'latitude',
    longitude: 'longitude',
    system_cipher: 'system_cipher',
    system_iv: 'system_iv',
    system_tag: 'system_tag',
    has_fronius_system: 'has_fronius_system'
  };

  export type SystemsScalarFieldEnum = (typeof SystemsScalarFieldEnum)[keyof typeof SystemsScalarFieldEnum]


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
    software_version: 'software_version',
    current_angle: 'current_angle',
    system_id: 'system_id'
  };

  export type TowersScalarFieldEnum = (typeof TowersScalarFieldEnum)[keyof typeof TowersScalarFieldEnum]


  export const Software_ticketsScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    email: 'email',
    subject: 'subject',
    message: 'message',
    date_time: 'date_time',
    handled: 'handled'
  };

  export type Software_ticketsScalarFieldEnum = (typeof Software_ticketsScalarFieldEnum)[keyof typeof Software_ticketsScalarFieldEnum]


  export const Customer_systemScalarFieldEnum: {
    customer_id: 'customer_id',
    system_id: 'system_id',
    role: 'role'
  };

  export type Customer_systemScalarFieldEnum = (typeof Customer_systemScalarFieldEnum)[keyof typeof Customer_systemScalarFieldEnum]


  export const Tower_dataScalarFieldEnum: {
    id: 'id',
    tower_id: 'tower_id',
    recorded_at: 'recorded_at',
    tower_angle: 'tower_angle',
    error_ticks: 'error_ticks',
    metadata: 'metadata',
    created_at: 'created_at'
  };

  export type Tower_dataScalarFieldEnum = (typeof Tower_dataScalarFieldEnum)[keyof typeof Tower_dataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'plan_tier'
   */
  export type Enumplan_tierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_tier'>
    


  /**
   * Reference to a field of type 'plan_tier[]'
   */
  export type ListEnumplan_tierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'plan_tier[]'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    


  /**
   * Reference to a field of type 'user_role[]'
   */
  export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>
    


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
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
    address_id?: IntNullableFilter<"Customer"> | number | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    password_hash?: StringFilter<"Customer"> | string
    plan_tier?: Enumplan_tierNullableFilter<"Customer"> | $Enums.plan_tier | null
    role?: Enumuser_roleNullableFilter<"Customer"> | $Enums.user_role | null
    force_password_reset?: BoolNullableFilter<"Customer"> | boolean | null
    customer_system?: Customer_systemListRelationFilter
    setting?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    software_tickets?: Software_ticketsListRelationFilter
    tower?: TowersListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    force_password_reset?: SortOrderInput | SortOrder
    customer_system?: customer_systemOrderByRelationAggregateInput
    setting?: SettingsOrderByWithRelationInput
    software_tickets?: software_ticketsOrderByRelationAggregateInput
    tower?: TowersOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    address_id?: IntNullableFilter<"Customer"> | number | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    password_hash?: StringFilter<"Customer"> | string
    plan_tier?: Enumplan_tierNullableFilter<"Customer"> | $Enums.plan_tier | null
    role?: Enumuser_roleNullableFilter<"Customer"> | $Enums.user_role | null
    force_password_reset?: BoolNullableFilter<"Customer"> | boolean | null
    customer_system?: Customer_systemListRelationFilter
    setting?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    software_tickets?: Software_ticketsListRelationFilter
    tower?: TowersListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    force_password_reset?: SortOrderInput | SortOrder
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
    address_id?: IntNullableWithAggregatesFilter<"Customer"> | number | null
    phone_number?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    password_hash?: StringWithAggregatesFilter<"Customer"> | string
    plan_tier?: Enumplan_tierNullableWithAggregatesFilter<"Customer"> | $Enums.plan_tier | null
    role?: Enumuser_roleNullableWithAggregatesFilter<"Customer"> | $Enums.user_role | null
    force_password_reset?: BoolNullableWithAggregatesFilter<"Customer"> | boolean | null
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    settings_id?: IntFilter<"Settings"> | number
    customer_id?: IntNullableFilter<"Settings"> | number | null
    theme?: StringNullableFilter<"Settings"> | string | null
    time_zone?: StringNullableFilter<"Settings"> | string | null
    text_size?: StringFilter<"Settings"> | string
    bold_text?: BoolNullableFilter<"Settings"> | boolean | null
    update_frequency?: StringNullableFilter<"Settings"> | string | null
    region?: StringNullableFilter<"Settings"> | string | null
    language?: StringNullableFilter<"Settings"> | string | null
    twentyfourhourtime?: BoolNullableFilter<"Settings"> | boolean | null
    last_login_device?: StringFilter<"Settings"> | string
    last_login?: DateTimeFilter<"Settings"> | Date | string
    email_recovery?: StringNullableFilter<"Settings"> | string | null
    phone_recovery?: StringNullableFilter<"Settings"> | string | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type SettingsOrderByWithRelationInput = {
    settings_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    time_zone?: SortOrderInput | SortOrder
    text_size?: SortOrder
    bold_text?: SortOrderInput | SortOrder
    update_frequency?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    twentyfourhourtime?: SortOrderInput | SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrder
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
    theme?: StringNullableFilter<"Settings"> | string | null
    time_zone?: StringNullableFilter<"Settings"> | string | null
    text_size?: StringFilter<"Settings"> | string
    bold_text?: BoolNullableFilter<"Settings"> | boolean | null
    update_frequency?: StringNullableFilter<"Settings"> | string | null
    region?: StringNullableFilter<"Settings"> | string | null
    language?: StringNullableFilter<"Settings"> | string | null
    twentyfourhourtime?: BoolNullableFilter<"Settings"> | boolean | null
    last_login_device?: StringFilter<"Settings"> | string
    last_login?: DateTimeFilter<"Settings"> | Date | string
    email_recovery?: StringNullableFilter<"Settings"> | string | null
    phone_recovery?: StringNullableFilter<"Settings"> | string | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "settings_id" | "customer_id">

  export type SettingsOrderByWithAggregationInput = {
    settings_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    theme?: SortOrderInput | SortOrder
    time_zone?: SortOrderInput | SortOrder
    text_size?: SortOrder
    bold_text?: SortOrderInput | SortOrder
    update_frequency?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    language?: SortOrderInput | SortOrder
    twentyfourhourtime?: SortOrderInput | SortOrder
    last_login_device?: SortOrder
    last_login?: SortOrder
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
    customer_id?: IntNullableWithAggregatesFilter<"Settings"> | number | null
    theme?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    time_zone?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    text_size?: StringWithAggregatesFilter<"Settings"> | string
    bold_text?: BoolNullableWithAggregatesFilter<"Settings"> | boolean | null
    update_frequency?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    region?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    language?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    twentyfourhourtime?: BoolNullableWithAggregatesFilter<"Settings"> | boolean | null
    last_login_device?: StringWithAggregatesFilter<"Settings"> | string
    last_login?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
    email_recovery?: StringNullableWithAggregatesFilter<"Settings"> | string | null
    phone_recovery?: StringNullableWithAggregatesFilter<"Settings"> | string | null
  }

  export type SystemsWhereInput = {
    AND?: SystemsWhereInput | SystemsWhereInput[]
    OR?: SystemsWhereInput[]
    NOT?: SystemsWhereInput | SystemsWhereInput[]
    id?: IntFilter<"Systems"> | number
    system_name?: StringFilter<"Systems"> | string
    inverter_type?: StringNullableFilter<"Systems"> | string | null
    timezone?: StringNullableFilter<"Systems"> | string | null
    installation_date?: DateTimeNullableFilter<"Systems"> | Date | string | null
    status?: StringNullableFilter<"Systems"> | string | null
    total_towers?: IntNullableFilter<"Systems"> | number | null
    max_pv_kw?: DecimalNullableFilter<"Systems"> | Decimal | DecimalJsLike | number | string | null
    software_version?: StringNullableFilter<"Systems"> | string | null
    latitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    system_cipher?: StringNullableFilter<"Systems"> | string | null
    system_iv?: StringNullableFilter<"Systems"> | string | null
    system_tag?: StringNullableFilter<"Systems"> | string | null
    has_fronius_system?: BoolFilter<"Systems"> | boolean
    customer_system?: Customer_systemListRelationFilter
    towers?: TowersListRelationFilter
  }

  export type SystemsOrderByWithRelationInput = {
    id?: SortOrder
    system_name?: SortOrder
    inverter_type?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    installation_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total_towers?: SortOrderInput | SortOrder
    max_pv_kw?: SortOrderInput | SortOrder
    software_version?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    system_cipher?: SortOrderInput | SortOrder
    system_iv?: SortOrderInput | SortOrder
    system_tag?: SortOrderInput | SortOrder
    has_fronius_system?: SortOrder
    customer_system?: customer_systemOrderByRelationAggregateInput
    towers?: TowersOrderByRelationAggregateInput
  }

  export type SystemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    latitude_longitude?: SystemsLatitudeLongitudeCompoundUniqueInput
    AND?: SystemsWhereInput | SystemsWhereInput[]
    OR?: SystemsWhereInput[]
    NOT?: SystemsWhereInput | SystemsWhereInput[]
    system_name?: StringFilter<"Systems"> | string
    inverter_type?: StringNullableFilter<"Systems"> | string | null
    timezone?: StringNullableFilter<"Systems"> | string | null
    installation_date?: DateTimeNullableFilter<"Systems"> | Date | string | null
    status?: StringNullableFilter<"Systems"> | string | null
    total_towers?: IntNullableFilter<"Systems"> | number | null
    max_pv_kw?: DecimalNullableFilter<"Systems"> | Decimal | DecimalJsLike | number | string | null
    software_version?: StringNullableFilter<"Systems"> | string | null
    latitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    system_cipher?: StringNullableFilter<"Systems"> | string | null
    system_iv?: StringNullableFilter<"Systems"> | string | null
    system_tag?: StringNullableFilter<"Systems"> | string | null
    has_fronius_system?: BoolFilter<"Systems"> | boolean
    customer_system?: Customer_systemListRelationFilter
    towers?: TowersListRelationFilter
  }, "id" | "latitude_longitude">

  export type SystemsOrderByWithAggregationInput = {
    id?: SortOrder
    system_name?: SortOrder
    inverter_type?: SortOrderInput | SortOrder
    timezone?: SortOrderInput | SortOrder
    installation_date?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    total_towers?: SortOrderInput | SortOrder
    max_pv_kw?: SortOrderInput | SortOrder
    software_version?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    system_cipher?: SortOrderInput | SortOrder
    system_iv?: SortOrderInput | SortOrder
    system_tag?: SortOrderInput | SortOrder
    has_fronius_system?: SortOrder
    _count?: SystemsCountOrderByAggregateInput
    _avg?: SystemsAvgOrderByAggregateInput
    _max?: SystemsMaxOrderByAggregateInput
    _min?: SystemsMinOrderByAggregateInput
    _sum?: SystemsSumOrderByAggregateInput
  }

  export type SystemsScalarWhereWithAggregatesInput = {
    AND?: SystemsScalarWhereWithAggregatesInput | SystemsScalarWhereWithAggregatesInput[]
    OR?: SystemsScalarWhereWithAggregatesInput[]
    NOT?: SystemsScalarWhereWithAggregatesInput | SystemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Systems"> | number
    system_name?: StringWithAggregatesFilter<"Systems"> | string
    inverter_type?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    timezone?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    installation_date?: DateTimeNullableWithAggregatesFilter<"Systems"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    total_towers?: IntNullableWithAggregatesFilter<"Systems"> | number | null
    max_pv_kw?: DecimalNullableWithAggregatesFilter<"Systems"> | Decimal | DecimalJsLike | number | string | null
    software_version?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    latitude?: DecimalWithAggregatesFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    system_cipher?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    system_iv?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    system_tag?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    has_fronius_system?: BoolWithAggregatesFilter<"Systems"> | boolean
  }

  export type TowersWhereInput = {
    AND?: TowersWhereInput | TowersWhereInput[]
    OR?: TowersWhereInput[]
    NOT?: TowersWhereInput | TowersWhereInput[]
    id?: IntFilter<"Towers"> | number
    model?: StringFilter<"Towers"> | string
    latitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    customer_id?: IntFilter<"Towers"> | number
    order_id?: IntFilter<"Towers"> | number
    state?: IntNullableFilter<"Towers"> | number | null
    c_group?: IntFilter<"Towers"> | number
    error_state?: IntFilter<"Towers"> | number
    length?: IntFilter<"Towers"> | number
    height?: IntFilter<"Towers"> | number
    width?: IntFilter<"Towers"> | number
    software_version?: StringNullableFilter<"Towers"> | string | null
    current_angle?: DecimalNullableFilter<"Towers"> | Decimal | DecimalJsLike | number | string | null
    system_id?: IntNullableFilter<"Towers"> | number | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    system?: XOR<SystemsNullableScalarRelationFilter, SystemsWhereInput> | null
  }

  export type TowersOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrderInput | SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrderInput | SortOrder
    current_angle?: SortOrderInput | SortOrder
    system_id?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    system?: SystemsOrderByWithRelationInput
  }

  export type TowersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TowersWhereInput | TowersWhereInput[]
    OR?: TowersWhereInput[]
    NOT?: TowersWhereInput | TowersWhereInput[]
    model?: StringFilter<"Towers"> | string
    latitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    customer_id?: IntFilter<"Towers"> | number
    order_id?: IntFilter<"Towers"> | number
    state?: IntNullableFilter<"Towers"> | number | null
    c_group?: IntFilter<"Towers"> | number
    error_state?: IntFilter<"Towers"> | number
    length?: IntFilter<"Towers"> | number
    height?: IntFilter<"Towers"> | number
    width?: IntFilter<"Towers"> | number
    software_version?: StringNullableFilter<"Towers"> | string | null
    current_angle?: DecimalNullableFilter<"Towers"> | Decimal | DecimalJsLike | number | string | null
    system_id?: IntNullableFilter<"Towers"> | number | null
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    system?: XOR<SystemsNullableScalarRelationFilter, SystemsWhereInput> | null
  }, "id">

  export type TowersOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_id?: SortOrder
    order_id?: SortOrder
    state?: SortOrderInput | SortOrder
    c_group?: SortOrder
    error_state?: SortOrder
    length?: SortOrder
    height?: SortOrder
    width?: SortOrder
    software_version?: SortOrderInput | SortOrder
    current_angle?: SortOrderInput | SortOrder
    system_id?: SortOrderInput | SortOrder
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
    model?: StringWithAggregatesFilter<"Towers"> | string
    latitude?: DecimalWithAggregatesFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    customer_id?: IntWithAggregatesFilter<"Towers"> | number
    order_id?: IntWithAggregatesFilter<"Towers"> | number
    state?: IntNullableWithAggregatesFilter<"Towers"> | number | null
    c_group?: IntWithAggregatesFilter<"Towers"> | number
    error_state?: IntWithAggregatesFilter<"Towers"> | number
    length?: IntWithAggregatesFilter<"Towers"> | number
    height?: IntWithAggregatesFilter<"Towers"> | number
    width?: IntWithAggregatesFilter<"Towers"> | number
    software_version?: StringNullableWithAggregatesFilter<"Towers"> | string | null
    current_angle?: DecimalNullableWithAggregatesFilter<"Towers"> | Decimal | DecimalJsLike | number | string | null
    system_id?: IntNullableWithAggregatesFilter<"Towers"> | number | null
  }

  export type software_ticketsWhereInput = {
    AND?: software_ticketsWhereInput | software_ticketsWhereInput[]
    OR?: software_ticketsWhereInput[]
    NOT?: software_ticketsWhereInput | software_ticketsWhereInput[]
    id?: IntFilter<"software_tickets"> | number
    customer_id?: IntFilter<"software_tickets"> | number
    email?: StringFilter<"software_tickets"> | string
    subject?: StringFilter<"software_tickets"> | string
    message?: StringFilter<"software_tickets"> | string
    date_time?: DateTimeFilter<"software_tickets"> | Date | string
    handled?: BoolFilter<"software_tickets"> | boolean
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type software_ticketsOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    handled?: SortOrder
    customers?: CustomerOrderByWithRelationInput
  }

  export type software_ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: software_ticketsWhereInput | software_ticketsWhereInput[]
    OR?: software_ticketsWhereInput[]
    NOT?: software_ticketsWhereInput | software_ticketsWhereInput[]
    customer_id?: IntFilter<"software_tickets"> | number
    email?: StringFilter<"software_tickets"> | string
    subject?: StringFilter<"software_tickets"> | string
    message?: StringFilter<"software_tickets"> | string
    date_time?: DateTimeFilter<"software_tickets"> | Date | string
    handled?: BoolFilter<"software_tickets"> | boolean
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type software_ticketsOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    handled?: SortOrder
    _count?: software_ticketsCountOrderByAggregateInput
    _avg?: software_ticketsAvgOrderByAggregateInput
    _max?: software_ticketsMaxOrderByAggregateInput
    _min?: software_ticketsMinOrderByAggregateInput
    _sum?: software_ticketsSumOrderByAggregateInput
  }

  export type software_ticketsScalarWhereWithAggregatesInput = {
    AND?: software_ticketsScalarWhereWithAggregatesInput | software_ticketsScalarWhereWithAggregatesInput[]
    OR?: software_ticketsScalarWhereWithAggregatesInput[]
    NOT?: software_ticketsScalarWhereWithAggregatesInput | software_ticketsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"software_tickets"> | number
    customer_id?: IntWithAggregatesFilter<"software_tickets"> | number
    email?: StringWithAggregatesFilter<"software_tickets"> | string
    subject?: StringWithAggregatesFilter<"software_tickets"> | string
    message?: StringWithAggregatesFilter<"software_tickets"> | string
    date_time?: DateTimeWithAggregatesFilter<"software_tickets"> | Date | string
    handled?: BoolWithAggregatesFilter<"software_tickets"> | boolean
  }

  export type customer_systemWhereInput = {
    AND?: customer_systemWhereInput | customer_systemWhereInput[]
    OR?: customer_systemWhereInput[]
    NOT?: customer_systemWhereInput | customer_systemWhereInput[]
    customer_id?: IntFilter<"customer_system"> | number
    system_id?: IntFilter<"customer_system"> | number
    role?: StringNullableFilter<"customer_system"> | string | null
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    systems?: XOR<SystemsScalarRelationFilter, SystemsWhereInput>
  }

  export type customer_systemOrderByWithRelationInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
    role?: SortOrderInput | SortOrder
    customers?: CustomerOrderByWithRelationInput
    systems?: SystemsOrderByWithRelationInput
  }

  export type customer_systemWhereUniqueInput = Prisma.AtLeast<{
    customer_id_system_id?: customer_systemCustomer_idSystem_idCompoundUniqueInput
    AND?: customer_systemWhereInput | customer_systemWhereInput[]
    OR?: customer_systemWhereInput[]
    NOT?: customer_systemWhereInput | customer_systemWhereInput[]
    customer_id?: IntFilter<"customer_system"> | number
    system_id?: IntFilter<"customer_system"> | number
    role?: StringNullableFilter<"customer_system"> | string | null
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    systems?: XOR<SystemsScalarRelationFilter, SystemsWhereInput>
  }, "customer_id_system_id">

  export type customer_systemOrderByWithAggregationInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: customer_systemCountOrderByAggregateInput
    _avg?: customer_systemAvgOrderByAggregateInput
    _max?: customer_systemMaxOrderByAggregateInput
    _min?: customer_systemMinOrderByAggregateInput
    _sum?: customer_systemSumOrderByAggregateInput
  }

  export type customer_systemScalarWhereWithAggregatesInput = {
    AND?: customer_systemScalarWhereWithAggregatesInput | customer_systemScalarWhereWithAggregatesInput[]
    OR?: customer_systemScalarWhereWithAggregatesInput[]
    NOT?: customer_systemScalarWhereWithAggregatesInput | customer_systemScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"customer_system"> | number
    system_id?: IntWithAggregatesFilter<"customer_system"> | number
    role?: StringNullableWithAggregatesFilter<"customer_system"> | string | null
  }

  export type tower_dataWhereInput = {
    AND?: tower_dataWhereInput | tower_dataWhereInput[]
    OR?: tower_dataWhereInput[]
    NOT?: tower_dataWhereInput | tower_dataWhereInput[]
    id?: BigIntFilter<"tower_data"> | bigint | number
    tower_id?: BigIntFilter<"tower_data"> | bigint | number
    recorded_at?: DateTimeNullableFilter<"tower_data"> | Date | string | null
    tower_angle?: FloatNullableFilter<"tower_data"> | number | null
    error_ticks?: IntNullableFilter<"tower_data"> | number | null
    metadata?: JsonNullableFilter<"tower_data">
    created_at?: DateTimeFilter<"tower_data"> | Date | string
  }

  export type tower_dataOrderByWithRelationInput = {
    id?: SortOrder
    tower_id?: SortOrder
    recorded_at?: SortOrderInput | SortOrder
    tower_angle?: SortOrderInput | SortOrder
    error_ticks?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type tower_dataWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    tower_id?: bigint | number
    AND?: tower_dataWhereInput | tower_dataWhereInput[]
    OR?: tower_dataWhereInput[]
    NOT?: tower_dataWhereInput | tower_dataWhereInput[]
    recorded_at?: DateTimeNullableFilter<"tower_data"> | Date | string | null
    tower_angle?: FloatNullableFilter<"tower_data"> | number | null
    error_ticks?: IntNullableFilter<"tower_data"> | number | null
    metadata?: JsonNullableFilter<"tower_data">
    created_at?: DateTimeFilter<"tower_data"> | Date | string
  }, "id" | "tower_id">

  export type tower_dataOrderByWithAggregationInput = {
    id?: SortOrder
    tower_id?: SortOrder
    recorded_at?: SortOrderInput | SortOrder
    tower_angle?: SortOrderInput | SortOrder
    error_ticks?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: tower_dataCountOrderByAggregateInput
    _avg?: tower_dataAvgOrderByAggregateInput
    _max?: tower_dataMaxOrderByAggregateInput
    _min?: tower_dataMinOrderByAggregateInput
    _sum?: tower_dataSumOrderByAggregateInput
  }

  export type tower_dataScalarWhereWithAggregatesInput = {
    AND?: tower_dataScalarWhereWithAggregatesInput | tower_dataScalarWhereWithAggregatesInput[]
    OR?: tower_dataScalarWhereWithAggregatesInput[]
    NOT?: tower_dataScalarWhereWithAggregatesInput | tower_dataScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"tower_data"> | bigint | number
    tower_id?: BigIntWithAggregatesFilter<"tower_data"> | bigint | number
    recorded_at?: DateTimeNullableWithAggregatesFilter<"tower_data"> | Date | string | null
    tower_angle?: FloatNullableWithAggregatesFilter<"tower_data"> | number | null
    error_ticks?: IntNullableWithAggregatesFilter<"tower_data"> | number | null
    metadata?: JsonNullableWithAggregatesFilter<"tower_data">
    created_at?: DateTimeWithAggregatesFilter<"tower_data"> | Date | string
  }

  export type CustomerCreateInput = {
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type SettingsCreateInput = {
    theme?: string | null
    time_zone?: string | null
    text_size?: string
    bold_text?: boolean | null
    update_frequency?: string | null
    region?: string | null
    language?: string | null
    twentyfourhourtime?: boolean | null
    last_login_device?: string
    last_login?: Date | string
    email_recovery?: string | null
    phone_recovery?: string | null
    customer?: CustomerCreateNestedOneWithoutSettingInput
  }

  export type SettingsUncheckedCreateInput = {
    settings_id?: number
    customer_id?: number | null
    theme?: string | null
    time_zone?: string | null
    text_size?: string
    bold_text?: boolean | null
    update_frequency?: string | null
    region?: string | null
    language?: string | null
    twentyfourhourtime?: boolean | null
    last_login_device?: string
    last_login?: Date | string
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsUpdateInput = {
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: NullableBoolFieldUpdateOperationsInput | boolean | null
    update_frequency?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    twentyfourhourtime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    customer?: CustomerUpdateOneWithoutSettingNestedInput
  }

  export type SettingsUncheckedUpdateInput = {
    settings_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: NullableBoolFieldUpdateOperationsInput | boolean | null
    update_frequency?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    twentyfourhourtime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsCreateManyInput = {
    settings_id?: number
    customer_id?: number | null
    theme?: string | null
    time_zone?: string | null
    text_size?: string
    bold_text?: boolean | null
    update_frequency?: string | null
    region?: string | null
    language?: string | null
    twentyfourhourtime?: boolean | null
    last_login_device?: string
    last_login?: Date | string
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsUpdateManyMutationInput = {
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: NullableBoolFieldUpdateOperationsInput | boolean | null
    update_frequency?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    twentyfourhourtime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateManyInput = {
    settings_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: NullableBoolFieldUpdateOperationsInput | boolean | null
    update_frequency?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    twentyfourhourtime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SystemsCreateInput = {
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
    customer_system?: customer_systemCreateNestedManyWithoutSystemsInput
    towers?: TowersCreateNestedManyWithoutSystemInput
  }

  export type SystemsUncheckedCreateInput = {
    id?: number
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutSystemsInput
    towers?: TowersUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemsUpdateInput = {
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
    customer_system?: customer_systemUpdateManyWithoutSystemsNestedInput
    towers?: TowersUpdateManyWithoutSystemNestedInput
  }

  export type SystemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
    customer_system?: customer_systemUncheckedUpdateManyWithoutSystemsNestedInput
    towers?: TowersUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type SystemsCreateManyInput = {
    id?: number
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
  }

  export type SystemsUpdateManyMutationInput = {
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SystemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TowersCreateInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    customer: CustomerCreateNestedOneWithoutTowerInput
    system?: SystemsCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
  }

  export type TowersUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
    system?: SystemsUpdateOneWithoutTowersNestedInput
  }

  export type TowersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    system_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TowersCreateManyInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
  }

  export type TowersUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TowersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    system_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type software_ticketsCreateInput = {
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
    customers: CustomerCreateNestedOneWithoutSoftware_ticketsInput
  }

  export type software_ticketsUncheckedCreateInput = {
    id?: number
    customer_id: number
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
  }

  export type software_ticketsUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateOneRequiredWithoutSoftware_ticketsNestedInput
  }

  export type software_ticketsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type software_ticketsCreateManyInput = {
    id?: number
    customer_id: number
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
  }

  export type software_ticketsUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type software_ticketsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type customer_systemCreateInput = {
    role?: string | null
    customers: CustomerCreateNestedOneWithoutCustomer_systemInput
    systems: SystemsCreateNestedOneWithoutCustomer_systemInput
  }

  export type customer_systemUncheckedCreateInput = {
    customer_id: number
    system_id: number
    role?: string | null
  }

  export type customer_systemUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateOneRequiredWithoutCustomer_systemNestedInput
    systems?: SystemsUpdateOneRequiredWithoutCustomer_systemNestedInput
  }

  export type customer_systemUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    system_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customer_systemCreateManyInput = {
    customer_id: number
    system_id: number
    role?: string | null
  }

  export type customer_systemUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customer_systemUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    system_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tower_dataCreateInput = {
    id?: bigint | number
    tower_id: bigint | number
    recorded_at?: Date | string | null
    tower_angle?: number | null
    error_ticks?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type tower_dataUncheckedCreateInput = {
    id?: bigint | number
    tower_id: bigint | number
    recorded_at?: Date | string | null
    tower_angle?: number | null
    error_ticks?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type tower_dataUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tower_id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tower_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    error_ticks?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tower_dataUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tower_id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tower_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    error_ticks?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tower_dataCreateManyInput = {
    id?: bigint | number
    tower_id: bigint | number
    recorded_at?: Date | string | null
    tower_angle?: number | null
    error_ticks?: number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type tower_dataUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tower_id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tower_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    error_ticks?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tower_dataUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    tower_id?: BigIntFieldUpdateOperationsInput | bigint | number
    recorded_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tower_angle?: NullableFloatFieldUpdateOperationsInput | number | null
    error_ticks?: NullableIntFieldUpdateOperationsInput | number | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type Enumplan_tierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_tier | Enumplan_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumplan_tierNullableFilter<$PrismaModel> | $Enums.plan_tier | null
  }

  export type Enumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Customer_systemListRelationFilter = {
    every?: customer_systemWhereInput
    some?: customer_systemWhereInput
    none?: customer_systemWhereInput
  }

  export type SettingsNullableScalarRelationFilter = {
    is?: SettingsWhereInput | null
    isNot?: SettingsWhereInput | null
  }

  export type Software_ticketsListRelationFilter = {
    every?: software_ticketsWhereInput
    some?: software_ticketsWhereInput
    none?: software_ticketsWhereInput
  }

  export type TowersListRelationFilter = {
    every?: TowersWhereInput
    some?: TowersWhereInput
    none?: TowersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type customer_systemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type software_ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrder
    role?: SortOrder
    force_password_reset?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrder
    role?: SortOrder
    force_password_reset?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrder
    role?: SortOrder
    force_password_reset?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder
    address_id?: SortOrder
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

  export type Enumplan_tierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_tier | Enumplan_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumplan_tierNullableWithAggregatesFilter<$PrismaModel> | $Enums.plan_tier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumplan_tierNullableFilter<$PrismaModel>
    _max?: NestedEnumplan_tierNullableFilter<$PrismaModel>
  }

  export type Enumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SystemsLatitudeLongitudeCompoundUniqueInput = {
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
  }

  export type SystemsCountOrderByAggregateInput = {
    id?: SortOrder
    system_name?: SortOrder
    inverter_type?: SortOrder
    timezone?: SortOrder
    installation_date?: SortOrder
    status?: SortOrder
    total_towers?: SortOrder
    max_pv_kw?: SortOrder
    software_version?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    system_cipher?: SortOrder
    system_iv?: SortOrder
    system_tag?: SortOrder
    has_fronius_system?: SortOrder
  }

  export type SystemsAvgOrderByAggregateInput = {
    id?: SortOrder
    total_towers?: SortOrder
    max_pv_kw?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type SystemsMaxOrderByAggregateInput = {
    id?: SortOrder
    system_name?: SortOrder
    inverter_type?: SortOrder
    timezone?: SortOrder
    installation_date?: SortOrder
    status?: SortOrder
    total_towers?: SortOrder
    max_pv_kw?: SortOrder
    software_version?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    system_cipher?: SortOrder
    system_iv?: SortOrder
    system_tag?: SortOrder
    has_fronius_system?: SortOrder
  }

  export type SystemsMinOrderByAggregateInput = {
    id?: SortOrder
    system_name?: SortOrder
    inverter_type?: SortOrder
    timezone?: SortOrder
    installation_date?: SortOrder
    status?: SortOrder
    total_towers?: SortOrder
    max_pv_kw?: SortOrder
    software_version?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    system_cipher?: SortOrder
    system_iv?: SortOrder
    system_tag?: SortOrder
    has_fronius_system?: SortOrder
  }

  export type SystemsSumOrderByAggregateInput = {
    id?: SortOrder
    total_towers?: SortOrder
    max_pv_kw?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type SystemsNullableScalarRelationFilter = {
    is?: SystemsWhereInput | null
    isNot?: SystemsWhereInput | null
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
    current_angle?: SortOrder
    system_id?: SortOrder
  }

  export type TowersAvgOrderByAggregateInput = {
    id?: SortOrder
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
    current_angle?: SortOrder
    system_id?: SortOrder
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
    current_angle?: SortOrder
    system_id?: SortOrder
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
    current_angle?: SortOrder
    system_id?: SortOrder
  }

  export type TowersSumOrderByAggregateInput = {
    id?: SortOrder
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
    current_angle?: SortOrder
    system_id?: SortOrder
  }

  export type software_ticketsCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    handled?: SortOrder
  }

  export type software_ticketsAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
  }

  export type software_ticketsMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    handled?: SortOrder
  }

  export type software_ticketsMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    handled?: SortOrder
  }

  export type software_ticketsSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
  }

  export type SystemsScalarRelationFilter = {
    is?: SystemsWhereInput
    isNot?: SystemsWhereInput
  }

  export type customer_systemCustomer_idSystem_idCompoundUniqueInput = {
    customer_id: number
    system_id: number
  }

  export type customer_systemCountOrderByAggregateInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
    role?: SortOrder
  }

  export type customer_systemAvgOrderByAggregateInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
  }

  export type customer_systemMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
    role?: SortOrder
  }

  export type customer_systemMinOrderByAggregateInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
    role?: SortOrder
  }

  export type customer_systemSumOrderByAggregateInput = {
    customer_id?: SortOrder
    system_id?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type tower_dataCountOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    recorded_at?: SortOrder
    tower_angle?: SortOrder
    error_ticks?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
  }

  export type tower_dataAvgOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    tower_angle?: SortOrder
    error_ticks?: SortOrder
  }

  export type tower_dataMaxOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    recorded_at?: SortOrder
    tower_angle?: SortOrder
    error_ticks?: SortOrder
    created_at?: SortOrder
  }

  export type tower_dataMinOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    recorded_at?: SortOrder
    tower_angle?: SortOrder
    error_ticks?: SortOrder
    created_at?: SortOrder
  }

  export type tower_dataSumOrderByAggregateInput = {
    id?: SortOrder
    tower_id?: SortOrder
    tower_angle?: SortOrder
    error_ticks?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type customer_systemCreateNestedManyWithoutCustomersInput = {
    create?: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput> | customer_systemCreateWithoutCustomersInput[] | customer_systemUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutCustomersInput | customer_systemCreateOrConnectWithoutCustomersInput[]
    createMany?: customer_systemCreateManyCustomersInputEnvelope
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
  }

  export type SettingsCreateNestedOneWithoutCustomerInput = {
    create?: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutCustomerInput
    connect?: SettingsWhereUniqueInput
  }

  export type software_ticketsCreateNestedManyWithoutCustomersInput = {
    create?: XOR<software_ticketsCreateWithoutCustomersInput, software_ticketsUncheckedCreateWithoutCustomersInput> | software_ticketsCreateWithoutCustomersInput[] | software_ticketsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: software_ticketsCreateOrConnectWithoutCustomersInput | software_ticketsCreateOrConnectWithoutCustomersInput[]
    createMany?: software_ticketsCreateManyCustomersInputEnvelope
    connect?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
  }

  export type TowersCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput> | TowersCreateWithoutCustomerInput[] | TowersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput | TowersCreateOrConnectWithoutCustomerInput[]
    createMany?: TowersCreateManyCustomerInputEnvelope
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
  }

  export type customer_systemUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput> | customer_systemCreateWithoutCustomersInput[] | customer_systemUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutCustomersInput | customer_systemCreateOrConnectWithoutCustomersInput[]
    createMany?: customer_systemCreateManyCustomersInputEnvelope
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
  }

  export type SettingsUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: SettingsCreateOrConnectWithoutCustomerInput
    connect?: SettingsWhereUniqueInput
  }

  export type software_ticketsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<software_ticketsCreateWithoutCustomersInput, software_ticketsUncheckedCreateWithoutCustomersInput> | software_ticketsCreateWithoutCustomersInput[] | software_ticketsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: software_ticketsCreateOrConnectWithoutCustomersInput | software_ticketsCreateOrConnectWithoutCustomersInput[]
    createMany?: software_ticketsCreateManyCustomersInputEnvelope
    connect?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
  }

  export type TowersUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput> | TowersCreateWithoutCustomerInput[] | TowersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput | TowersCreateOrConnectWithoutCustomerInput[]
    createMany?: TowersCreateManyCustomerInputEnvelope
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumplan_tierFieldUpdateOperationsInput = {
    set?: $Enums.plan_tier | null
  }

  export type NullableEnumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type customer_systemUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput> | customer_systemCreateWithoutCustomersInput[] | customer_systemUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutCustomersInput | customer_systemCreateOrConnectWithoutCustomersInput[]
    upsert?: customer_systemUpsertWithWhereUniqueWithoutCustomersInput | customer_systemUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: customer_systemCreateManyCustomersInputEnvelope
    set?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    disconnect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    delete?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    update?: customer_systemUpdateWithWhereUniqueWithoutCustomersInput | customer_systemUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: customer_systemUpdateManyWithWhereWithoutCustomersInput | customer_systemUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: customer_systemScalarWhereInput | customer_systemScalarWhereInput[]
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

  export type software_ticketsUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<software_ticketsCreateWithoutCustomersInput, software_ticketsUncheckedCreateWithoutCustomersInput> | software_ticketsCreateWithoutCustomersInput[] | software_ticketsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: software_ticketsCreateOrConnectWithoutCustomersInput | software_ticketsCreateOrConnectWithoutCustomersInput[]
    upsert?: software_ticketsUpsertWithWhereUniqueWithoutCustomersInput | software_ticketsUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: software_ticketsCreateManyCustomersInputEnvelope
    set?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    disconnect?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    delete?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    connect?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    update?: software_ticketsUpdateWithWhereUniqueWithoutCustomersInput | software_ticketsUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: software_ticketsUpdateManyWithWhereWithoutCustomersInput | software_ticketsUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: software_ticketsScalarWhereInput | software_ticketsScalarWhereInput[]
  }

  export type TowersUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput> | TowersCreateWithoutCustomerInput[] | TowersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput | TowersCreateOrConnectWithoutCustomerInput[]
    upsert?: TowersUpsertWithWhereUniqueWithoutCustomerInput | TowersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TowersCreateManyCustomerInputEnvelope
    set?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    disconnect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    delete?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    update?: TowersUpdateWithWhereUniqueWithoutCustomerInput | TowersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TowersUpdateManyWithWhereWithoutCustomerInput | TowersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TowersScalarWhereInput | TowersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type customer_systemUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput> | customer_systemCreateWithoutCustomersInput[] | customer_systemUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutCustomersInput | customer_systemCreateOrConnectWithoutCustomersInput[]
    upsert?: customer_systemUpsertWithWhereUniqueWithoutCustomersInput | customer_systemUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: customer_systemCreateManyCustomersInputEnvelope
    set?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    disconnect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    delete?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    update?: customer_systemUpdateWithWhereUniqueWithoutCustomersInput | customer_systemUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: customer_systemUpdateManyWithWhereWithoutCustomersInput | customer_systemUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: customer_systemScalarWhereInput | customer_systemScalarWhereInput[]
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

  export type software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<software_ticketsCreateWithoutCustomersInput, software_ticketsUncheckedCreateWithoutCustomersInput> | software_ticketsCreateWithoutCustomersInput[] | software_ticketsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: software_ticketsCreateOrConnectWithoutCustomersInput | software_ticketsCreateOrConnectWithoutCustomersInput[]
    upsert?: software_ticketsUpsertWithWhereUniqueWithoutCustomersInput | software_ticketsUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: software_ticketsCreateManyCustomersInputEnvelope
    set?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    disconnect?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    delete?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    connect?: software_ticketsWhereUniqueInput | software_ticketsWhereUniqueInput[]
    update?: software_ticketsUpdateWithWhereUniqueWithoutCustomersInput | software_ticketsUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: software_ticketsUpdateManyWithWhereWithoutCustomersInput | software_ticketsUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: software_ticketsScalarWhereInput | software_ticketsScalarWhereInput[]
  }

  export type TowersUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput> | TowersCreateWithoutCustomerInput[] | TowersUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutCustomerInput | TowersCreateOrConnectWithoutCustomerInput[]
    upsert?: TowersUpsertWithWhereUniqueWithoutCustomerInput | TowersUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: TowersCreateManyCustomerInputEnvelope
    set?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    disconnect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    delete?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    update?: TowersUpdateWithWhereUniqueWithoutCustomerInput | TowersUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: TowersUpdateManyWithWhereWithoutCustomerInput | TowersUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: TowersScalarWhereInput | TowersScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutSettingInput = {
    create?: XOR<CustomerCreateWithoutSettingInput, CustomerUncheckedCreateWithoutSettingInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSettingInput
    connect?: CustomerWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerUpdateOneWithoutSettingNestedInput = {
    create?: XOR<CustomerCreateWithoutSettingInput, CustomerUncheckedCreateWithoutSettingInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSettingInput
    upsert?: CustomerUpsertWithoutSettingInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSettingInput, CustomerUpdateWithoutSettingInput>, CustomerUncheckedUpdateWithoutSettingInput>
  }

  export type customer_systemCreateNestedManyWithoutSystemsInput = {
    create?: XOR<customer_systemCreateWithoutSystemsInput, customer_systemUncheckedCreateWithoutSystemsInput> | customer_systemCreateWithoutSystemsInput[] | customer_systemUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutSystemsInput | customer_systemCreateOrConnectWithoutSystemsInput[]
    createMany?: customer_systemCreateManySystemsInputEnvelope
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
  }

  export type TowersCreateNestedManyWithoutSystemInput = {
    create?: XOR<TowersCreateWithoutSystemInput, TowersUncheckedCreateWithoutSystemInput> | TowersCreateWithoutSystemInput[] | TowersUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutSystemInput | TowersCreateOrConnectWithoutSystemInput[]
    createMany?: TowersCreateManySystemInputEnvelope
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
  }

  export type customer_systemUncheckedCreateNestedManyWithoutSystemsInput = {
    create?: XOR<customer_systemCreateWithoutSystemsInput, customer_systemUncheckedCreateWithoutSystemsInput> | customer_systemCreateWithoutSystemsInput[] | customer_systemUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutSystemsInput | customer_systemCreateOrConnectWithoutSystemsInput[]
    createMany?: customer_systemCreateManySystemsInputEnvelope
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
  }

  export type TowersUncheckedCreateNestedManyWithoutSystemInput = {
    create?: XOR<TowersCreateWithoutSystemInput, TowersUncheckedCreateWithoutSystemInput> | TowersCreateWithoutSystemInput[] | TowersUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutSystemInput | TowersCreateOrConnectWithoutSystemInput[]
    createMany?: TowersCreateManySystemInputEnvelope
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type customer_systemUpdateManyWithoutSystemsNestedInput = {
    create?: XOR<customer_systemCreateWithoutSystemsInput, customer_systemUncheckedCreateWithoutSystemsInput> | customer_systemCreateWithoutSystemsInput[] | customer_systemUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutSystemsInput | customer_systemCreateOrConnectWithoutSystemsInput[]
    upsert?: customer_systemUpsertWithWhereUniqueWithoutSystemsInput | customer_systemUpsertWithWhereUniqueWithoutSystemsInput[]
    createMany?: customer_systemCreateManySystemsInputEnvelope
    set?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    disconnect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    delete?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    update?: customer_systemUpdateWithWhereUniqueWithoutSystemsInput | customer_systemUpdateWithWhereUniqueWithoutSystemsInput[]
    updateMany?: customer_systemUpdateManyWithWhereWithoutSystemsInput | customer_systemUpdateManyWithWhereWithoutSystemsInput[]
    deleteMany?: customer_systemScalarWhereInput | customer_systemScalarWhereInput[]
  }

  export type TowersUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TowersCreateWithoutSystemInput, TowersUncheckedCreateWithoutSystemInput> | TowersCreateWithoutSystemInput[] | TowersUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutSystemInput | TowersCreateOrConnectWithoutSystemInput[]
    upsert?: TowersUpsertWithWhereUniqueWithoutSystemInput | TowersUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TowersCreateManySystemInputEnvelope
    set?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    disconnect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    delete?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    update?: TowersUpdateWithWhereUniqueWithoutSystemInput | TowersUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TowersUpdateManyWithWhereWithoutSystemInput | TowersUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TowersScalarWhereInput | TowersScalarWhereInput[]
  }

  export type customer_systemUncheckedUpdateManyWithoutSystemsNestedInput = {
    create?: XOR<customer_systemCreateWithoutSystemsInput, customer_systemUncheckedCreateWithoutSystemsInput> | customer_systemCreateWithoutSystemsInput[] | customer_systemUncheckedCreateWithoutSystemsInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutSystemsInput | customer_systemCreateOrConnectWithoutSystemsInput[]
    upsert?: customer_systemUpsertWithWhereUniqueWithoutSystemsInput | customer_systemUpsertWithWhereUniqueWithoutSystemsInput[]
    createMany?: customer_systemCreateManySystemsInputEnvelope
    set?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    disconnect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    delete?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
    update?: customer_systemUpdateWithWhereUniqueWithoutSystemsInput | customer_systemUpdateWithWhereUniqueWithoutSystemsInput[]
    updateMany?: customer_systemUpdateManyWithWhereWithoutSystemsInput | customer_systemUpdateManyWithWhereWithoutSystemsInput[]
    deleteMany?: customer_systemScalarWhereInput | customer_systemScalarWhereInput[]
  }

  export type TowersUncheckedUpdateManyWithoutSystemNestedInput = {
    create?: XOR<TowersCreateWithoutSystemInput, TowersUncheckedCreateWithoutSystemInput> | TowersCreateWithoutSystemInput[] | TowersUncheckedCreateWithoutSystemInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutSystemInput | TowersCreateOrConnectWithoutSystemInput[]
    upsert?: TowersUpsertWithWhereUniqueWithoutSystemInput | TowersUpsertWithWhereUniqueWithoutSystemInput[]
    createMany?: TowersCreateManySystemInputEnvelope
    set?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    disconnect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    delete?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    update?: TowersUpdateWithWhereUniqueWithoutSystemInput | TowersUpdateWithWhereUniqueWithoutSystemInput[]
    updateMany?: TowersUpdateManyWithWhereWithoutSystemInput | TowersUpdateManyWithWhereWithoutSystemInput[]
    deleteMany?: TowersScalarWhereInput | TowersScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutTowerInput = {
    create?: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTowerInput
    connect?: CustomerWhereUniqueInput
  }

  export type SystemsCreateNestedOneWithoutTowersInput = {
    create?: XOR<SystemsCreateWithoutTowersInput, SystemsUncheckedCreateWithoutTowersInput>
    connectOrCreate?: SystemsCreateOrConnectWithoutTowersInput
    connect?: SystemsWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutTowerNestedInput = {
    create?: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTowerInput
    upsert?: CustomerUpsertWithoutTowerInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTowerInput, CustomerUpdateWithoutTowerInput>, CustomerUncheckedUpdateWithoutTowerInput>
  }

  export type SystemsUpdateOneWithoutTowersNestedInput = {
    create?: XOR<SystemsCreateWithoutTowersInput, SystemsUncheckedCreateWithoutTowersInput>
    connectOrCreate?: SystemsCreateOrConnectWithoutTowersInput
    upsert?: SystemsUpsertWithoutTowersInput
    disconnect?: SystemsWhereInput | boolean
    delete?: SystemsWhereInput | boolean
    connect?: SystemsWhereUniqueInput
    update?: XOR<XOR<SystemsUpdateToOneWithWhereWithoutTowersInput, SystemsUpdateWithoutTowersInput>, SystemsUncheckedUpdateWithoutTowersInput>
  }

  export type CustomerCreateNestedOneWithoutSoftware_ticketsInput = {
    create?: XOR<CustomerCreateWithoutSoftware_ticketsInput, CustomerUncheckedCreateWithoutSoftware_ticketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSoftware_ticketsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutSoftware_ticketsNestedInput = {
    create?: XOR<CustomerCreateWithoutSoftware_ticketsInput, CustomerUncheckedCreateWithoutSoftware_ticketsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSoftware_ticketsInput
    upsert?: CustomerUpsertWithoutSoftware_ticketsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSoftware_ticketsInput, CustomerUpdateWithoutSoftware_ticketsInput>, CustomerUncheckedUpdateWithoutSoftware_ticketsInput>
  }

  export type CustomerCreateNestedOneWithoutCustomer_systemInput = {
    create?: XOR<CustomerCreateWithoutCustomer_systemInput, CustomerUncheckedCreateWithoutCustomer_systemInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_systemInput
    connect?: CustomerWhereUniqueInput
  }

  export type SystemsCreateNestedOneWithoutCustomer_systemInput = {
    create?: XOR<SystemsCreateWithoutCustomer_systemInput, SystemsUncheckedCreateWithoutCustomer_systemInput>
    connectOrCreate?: SystemsCreateOrConnectWithoutCustomer_systemInput
    connect?: SystemsWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutCustomer_systemNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomer_systemInput, CustomerUncheckedCreateWithoutCustomer_systemInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomer_systemInput
    upsert?: CustomerUpsertWithoutCustomer_systemInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomer_systemInput, CustomerUpdateWithoutCustomer_systemInput>, CustomerUncheckedUpdateWithoutCustomer_systemInput>
  }

  export type SystemsUpdateOneRequiredWithoutCustomer_systemNestedInput = {
    create?: XOR<SystemsCreateWithoutCustomer_systemInput, SystemsUncheckedCreateWithoutCustomer_systemInput>
    connectOrCreate?: SystemsCreateOrConnectWithoutCustomer_systemInput
    upsert?: SystemsUpsertWithoutCustomer_systemInput
    connect?: SystemsWhereUniqueInput
    update?: XOR<XOR<SystemsUpdateToOneWithWhereWithoutCustomer_systemInput, SystemsUpdateWithoutCustomer_systemInput>, SystemsUncheckedUpdateWithoutCustomer_systemInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedEnumplan_tierNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_tier | Enumplan_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumplan_tierNullableFilter<$PrismaModel> | $Enums.plan_tier | null
  }

  export type NestedEnumuser_roleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableFilter<$PrismaModel> | $Enums.user_role | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedEnumplan_tierNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.plan_tier | Enumplan_tierFieldRefInput<$PrismaModel> | null
    in?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.plan_tier[] | ListEnumplan_tierFieldRefInput<$PrismaModel> | null
    not?: NestedEnumplan_tierNullableWithAggregatesFilter<$PrismaModel> | $Enums.plan_tier | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumplan_tierNullableFilter<$PrismaModel>
    _max?: NestedEnumplan_tierNullableFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel> | null
    in?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.user_role[] | ListEnumuser_roleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumuser_roleNullableWithAggregatesFilter<$PrismaModel> | $Enums.user_role | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumuser_roleNullableFilter<$PrismaModel>
    _max?: NestedEnumuser_roleNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type customer_systemCreateWithoutCustomersInput = {
    role?: string | null
    systems: SystemsCreateNestedOneWithoutCustomer_systemInput
  }

  export type customer_systemUncheckedCreateWithoutCustomersInput = {
    system_id: number
    role?: string | null
  }

  export type customer_systemCreateOrConnectWithoutCustomersInput = {
    where: customer_systemWhereUniqueInput
    create: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput>
  }

  export type customer_systemCreateManyCustomersInputEnvelope = {
    data: customer_systemCreateManyCustomersInput | customer_systemCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type SettingsCreateWithoutCustomerInput = {
    theme?: string | null
    time_zone?: string | null
    text_size?: string
    bold_text?: boolean | null
    update_frequency?: string | null
    region?: string | null
    language?: string | null
    twentyfourhourtime?: boolean | null
    last_login_device?: string
    last_login?: Date | string
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsUncheckedCreateWithoutCustomerInput = {
    settings_id?: number
    theme?: string | null
    time_zone?: string | null
    text_size?: string
    bold_text?: boolean | null
    update_frequency?: string | null
    region?: string | null
    language?: string | null
    twentyfourhourtime?: boolean | null
    last_login_device?: string
    last_login?: Date | string
    email_recovery?: string | null
    phone_recovery?: string | null
  }

  export type SettingsCreateOrConnectWithoutCustomerInput = {
    where: SettingsWhereUniqueInput
    create: XOR<SettingsCreateWithoutCustomerInput, SettingsUncheckedCreateWithoutCustomerInput>
  }

  export type software_ticketsCreateWithoutCustomersInput = {
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
  }

  export type software_ticketsUncheckedCreateWithoutCustomersInput = {
    id?: number
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
  }

  export type software_ticketsCreateOrConnectWithoutCustomersInput = {
    where: software_ticketsWhereUniqueInput
    create: XOR<software_ticketsCreateWithoutCustomersInput, software_ticketsUncheckedCreateWithoutCustomersInput>
  }

  export type software_ticketsCreateManyCustomersInputEnvelope = {
    data: software_ticketsCreateManyCustomersInput | software_ticketsCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type TowersCreateWithoutCustomerInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system?: SystemsCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateWithoutCustomerInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
  }

  export type TowersCreateOrConnectWithoutCustomerInput = {
    where: TowersWhereUniqueInput
    create: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
  }

  export type TowersCreateManyCustomerInputEnvelope = {
    data: TowersCreateManyCustomerInput | TowersCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type customer_systemUpsertWithWhereUniqueWithoutCustomersInput = {
    where: customer_systemWhereUniqueInput
    update: XOR<customer_systemUpdateWithoutCustomersInput, customer_systemUncheckedUpdateWithoutCustomersInput>
    create: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput>
  }

  export type customer_systemUpdateWithWhereUniqueWithoutCustomersInput = {
    where: customer_systemWhereUniqueInput
    data: XOR<customer_systemUpdateWithoutCustomersInput, customer_systemUncheckedUpdateWithoutCustomersInput>
  }

  export type customer_systemUpdateManyWithWhereWithoutCustomersInput = {
    where: customer_systemScalarWhereInput
    data: XOR<customer_systemUpdateManyMutationInput, customer_systemUncheckedUpdateManyWithoutCustomersInput>
  }

  export type customer_systemScalarWhereInput = {
    AND?: customer_systemScalarWhereInput | customer_systemScalarWhereInput[]
    OR?: customer_systemScalarWhereInput[]
    NOT?: customer_systemScalarWhereInput | customer_systemScalarWhereInput[]
    customer_id?: IntFilter<"customer_system"> | number
    system_id?: IntFilter<"customer_system"> | number
    role?: StringNullableFilter<"customer_system"> | string | null
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
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: NullableBoolFieldUpdateOperationsInput | boolean | null
    update_frequency?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    twentyfourhourtime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingsUncheckedUpdateWithoutCustomerInput = {
    settings_id?: IntFieldUpdateOperationsInput | number
    theme?: NullableStringFieldUpdateOperationsInput | string | null
    time_zone?: NullableStringFieldUpdateOperationsInput | string | null
    text_size?: StringFieldUpdateOperationsInput | string
    bold_text?: NullableBoolFieldUpdateOperationsInput | boolean | null
    update_frequency?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableStringFieldUpdateOperationsInput | string | null
    language?: NullableStringFieldUpdateOperationsInput | string | null
    twentyfourhourtime?: NullableBoolFieldUpdateOperationsInput | boolean | null
    last_login_device?: StringFieldUpdateOperationsInput | string
    last_login?: DateTimeFieldUpdateOperationsInput | Date | string
    email_recovery?: NullableStringFieldUpdateOperationsInput | string | null
    phone_recovery?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type software_ticketsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: software_ticketsWhereUniqueInput
    update: XOR<software_ticketsUpdateWithoutCustomersInput, software_ticketsUncheckedUpdateWithoutCustomersInput>
    create: XOR<software_ticketsCreateWithoutCustomersInput, software_ticketsUncheckedCreateWithoutCustomersInput>
  }

  export type software_ticketsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: software_ticketsWhereUniqueInput
    data: XOR<software_ticketsUpdateWithoutCustomersInput, software_ticketsUncheckedUpdateWithoutCustomersInput>
  }

  export type software_ticketsUpdateManyWithWhereWithoutCustomersInput = {
    where: software_ticketsScalarWhereInput
    data: XOR<software_ticketsUpdateManyMutationInput, software_ticketsUncheckedUpdateManyWithoutCustomersInput>
  }

  export type software_ticketsScalarWhereInput = {
    AND?: software_ticketsScalarWhereInput | software_ticketsScalarWhereInput[]
    OR?: software_ticketsScalarWhereInput[]
    NOT?: software_ticketsScalarWhereInput | software_ticketsScalarWhereInput[]
    id?: IntFilter<"software_tickets"> | number
    customer_id?: IntFilter<"software_tickets"> | number
    email?: StringFilter<"software_tickets"> | string
    subject?: StringFilter<"software_tickets"> | string
    message?: StringFilter<"software_tickets"> | string
    date_time?: DateTimeFilter<"software_tickets"> | Date | string
    handled?: BoolFilter<"software_tickets"> | boolean
  }

  export type TowersUpsertWithWhereUniqueWithoutCustomerInput = {
    where: TowersWhereUniqueInput
    update: XOR<TowersUpdateWithoutCustomerInput, TowersUncheckedUpdateWithoutCustomerInput>
    create: XOR<TowersCreateWithoutCustomerInput, TowersUncheckedCreateWithoutCustomerInput>
  }

  export type TowersUpdateWithWhereUniqueWithoutCustomerInput = {
    where: TowersWhereUniqueInput
    data: XOR<TowersUpdateWithoutCustomerInput, TowersUncheckedUpdateWithoutCustomerInput>
  }

  export type TowersUpdateManyWithWhereWithoutCustomerInput = {
    where: TowersScalarWhereInput
    data: XOR<TowersUpdateManyMutationInput, TowersUncheckedUpdateManyWithoutCustomerInput>
  }

  export type TowersScalarWhereInput = {
    AND?: TowersScalarWhereInput | TowersScalarWhereInput[]
    OR?: TowersScalarWhereInput[]
    NOT?: TowersScalarWhereInput | TowersScalarWhereInput[]
    id?: IntFilter<"Towers"> | number
    model?: StringFilter<"Towers"> | string
    latitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Towers"> | Decimal | DecimalJsLike | number | string
    customer_id?: IntFilter<"Towers"> | number
    order_id?: IntFilter<"Towers"> | number
    state?: IntNullableFilter<"Towers"> | number | null
    c_group?: IntFilter<"Towers"> | number
    error_state?: IntFilter<"Towers"> | number
    length?: IntFilter<"Towers"> | number
    height?: IntFilter<"Towers"> | number
    width?: IntFilter<"Towers"> | number
    software_version?: StringNullableFilter<"Towers"> | string | null
    current_angle?: DecimalNullableFilter<"Towers"> | Decimal | DecimalJsLike | number | string | null
    system_id?: IntNullableFilter<"Towers"> | number | null
  }

  export type CustomerCreateWithoutSettingInput = {
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSettingInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
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
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customer_systemCreateWithoutSystemsInput = {
    role?: string | null
    customers: CustomerCreateNestedOneWithoutCustomer_systemInput
  }

  export type customer_systemUncheckedCreateWithoutSystemsInput = {
    customer_id: number
    role?: string | null
  }

  export type customer_systemCreateOrConnectWithoutSystemsInput = {
    where: customer_systemWhereUniqueInput
    create: XOR<customer_systemCreateWithoutSystemsInput, customer_systemUncheckedCreateWithoutSystemsInput>
  }

  export type customer_systemCreateManySystemsInputEnvelope = {
    data: customer_systemCreateManySystemsInput | customer_systemCreateManySystemsInput[]
    skipDuplicates?: boolean
  }

  export type TowersCreateWithoutSystemInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    customer: CustomerCreateNestedOneWithoutTowerInput
  }

  export type TowersUncheckedCreateWithoutSystemInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
  }

  export type TowersCreateOrConnectWithoutSystemInput = {
    where: TowersWhereUniqueInput
    create: XOR<TowersCreateWithoutSystemInput, TowersUncheckedCreateWithoutSystemInput>
  }

  export type TowersCreateManySystemInputEnvelope = {
    data: TowersCreateManySystemInput | TowersCreateManySystemInput[]
    skipDuplicates?: boolean
  }

  export type customer_systemUpsertWithWhereUniqueWithoutSystemsInput = {
    where: customer_systemWhereUniqueInput
    update: XOR<customer_systemUpdateWithoutSystemsInput, customer_systemUncheckedUpdateWithoutSystemsInput>
    create: XOR<customer_systemCreateWithoutSystemsInput, customer_systemUncheckedCreateWithoutSystemsInput>
  }

  export type customer_systemUpdateWithWhereUniqueWithoutSystemsInput = {
    where: customer_systemWhereUniqueInput
    data: XOR<customer_systemUpdateWithoutSystemsInput, customer_systemUncheckedUpdateWithoutSystemsInput>
  }

  export type customer_systemUpdateManyWithWhereWithoutSystemsInput = {
    where: customer_systemScalarWhereInput
    data: XOR<customer_systemUpdateManyMutationInput, customer_systemUncheckedUpdateManyWithoutSystemsInput>
  }

  export type TowersUpsertWithWhereUniqueWithoutSystemInput = {
    where: TowersWhereUniqueInput
    update: XOR<TowersUpdateWithoutSystemInput, TowersUncheckedUpdateWithoutSystemInput>
    create: XOR<TowersCreateWithoutSystemInput, TowersUncheckedCreateWithoutSystemInput>
  }

  export type TowersUpdateWithWhereUniqueWithoutSystemInput = {
    where: TowersWhereUniqueInput
    data: XOR<TowersUpdateWithoutSystemInput, TowersUncheckedUpdateWithoutSystemInput>
  }

  export type TowersUpdateManyWithWhereWithoutSystemInput = {
    where: TowersScalarWhereInput
    data: XOR<TowersUpdateManyMutationInput, TowersUncheckedUpdateManyWithoutSystemInput>
  }

  export type CustomerCreateWithoutTowerInput = {
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutTowerInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type CustomerCreateOrConnectWithoutTowerInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
  }

  export type SystemsCreateWithoutTowersInput = {
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
    customer_system?: customer_systemCreateNestedManyWithoutSystemsInput
  }

  export type SystemsUncheckedCreateWithoutTowersInput = {
    id?: number
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutSystemsInput
  }

  export type SystemsCreateOrConnectWithoutTowersInput = {
    where: SystemsWhereUniqueInput
    create: XOR<SystemsCreateWithoutTowersInput, SystemsUncheckedCreateWithoutTowersInput>
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
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type SystemsUpsertWithoutTowersInput = {
    update: XOR<SystemsUpdateWithoutTowersInput, SystemsUncheckedUpdateWithoutTowersInput>
    create: XOR<SystemsCreateWithoutTowersInput, SystemsUncheckedCreateWithoutTowersInput>
    where?: SystemsWhereInput
  }

  export type SystemsUpdateToOneWithWhereWithoutTowersInput = {
    where?: SystemsWhereInput
    data: XOR<SystemsUpdateWithoutTowersInput, SystemsUncheckedUpdateWithoutTowersInput>
  }

  export type SystemsUpdateWithoutTowersInput = {
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
    customer_system?: customer_systemUpdateManyWithoutSystemsNestedInput
  }

  export type SystemsUncheckedUpdateWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
    customer_system?: customer_systemUncheckedUpdateManyWithoutSystemsNestedInput
  }

  export type CustomerCreateWithoutSoftware_ticketsInput = {
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSoftware_ticketsInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSoftware_ticketsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSoftware_ticketsInput, CustomerUncheckedCreateWithoutSoftware_ticketsInput>
  }

  export type CustomerUpsertWithoutSoftware_ticketsInput = {
    update: XOR<CustomerUpdateWithoutSoftware_ticketsInput, CustomerUncheckedUpdateWithoutSoftware_ticketsInput>
    create: XOR<CustomerCreateWithoutSoftware_ticketsInput, CustomerUncheckedCreateWithoutSoftware_ticketsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSoftware_ticketsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSoftware_ticketsInput, CustomerUncheckedUpdateWithoutSoftware_ticketsInput>
  }

  export type CustomerUpdateWithoutSoftware_ticketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSoftware_ticketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutCustomer_systemInput = {
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCustomer_systemInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    phone_number?: string | null
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    force_password_reset?: boolean | null
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutCustomer_systemInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomer_systemInput, CustomerUncheckedCreateWithoutCustomer_systemInput>
  }

  export type SystemsCreateWithoutCustomer_systemInput = {
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
    towers?: TowersCreateNestedManyWithoutSystemInput
  }

  export type SystemsUncheckedCreateWithoutCustomer_systemInput = {
    id?: number
    system_name: string
    inverter_type?: string | null
    timezone?: string | null
    installation_date?: Date | string | null
    status?: string | null
    total_towers?: number | null
    max_pv_kw?: Decimal | DecimalJsLike | number | string | null
    software_version?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    system_cipher?: string | null
    system_iv?: string | null
    system_tag?: string | null
    has_fronius_system?: boolean
    towers?: TowersUncheckedCreateNestedManyWithoutSystemInput
  }

  export type SystemsCreateOrConnectWithoutCustomer_systemInput = {
    where: SystemsWhereUniqueInput
    create: XOR<SystemsCreateWithoutCustomer_systemInput, SystemsUncheckedCreateWithoutCustomer_systemInput>
  }

  export type CustomerUpsertWithoutCustomer_systemInput = {
    update: XOR<CustomerUpdateWithoutCustomer_systemInput, CustomerUncheckedUpdateWithoutCustomer_systemInput>
    create: XOR<CustomerCreateWithoutCustomer_systemInput, CustomerUncheckedCreateWithoutCustomer_systemInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomer_systemInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomer_systemInput, CustomerUncheckedUpdateWithoutCustomer_systemInput>
  }

  export type CustomerUpdateWithoutCustomer_systemInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCustomer_systemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    force_password_reset?: NullableBoolFieldUpdateOperationsInput | boolean | null
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SystemsUpsertWithoutCustomer_systemInput = {
    update: XOR<SystemsUpdateWithoutCustomer_systemInput, SystemsUncheckedUpdateWithoutCustomer_systemInput>
    create: XOR<SystemsCreateWithoutCustomer_systemInput, SystemsUncheckedCreateWithoutCustomer_systemInput>
    where?: SystemsWhereInput
  }

  export type SystemsUpdateToOneWithWhereWithoutCustomer_systemInput = {
    where?: SystemsWhereInput
    data: XOR<SystemsUpdateWithoutCustomer_systemInput, SystemsUncheckedUpdateWithoutCustomer_systemInput>
  }

  export type SystemsUpdateWithoutCustomer_systemInput = {
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
    towers?: TowersUpdateManyWithoutSystemNestedInput
  }

  export type SystemsUncheckedUpdateWithoutCustomer_systemInput = {
    id?: IntFieldUpdateOperationsInput | number
    system_name?: StringFieldUpdateOperationsInput | string
    inverter_type?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: NullableStringFieldUpdateOperationsInput | string | null
    installation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    total_towers?: NullableIntFieldUpdateOperationsInput | number | null
    max_pv_kw?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    system_cipher?: NullableStringFieldUpdateOperationsInput | string | null
    system_iv?: NullableStringFieldUpdateOperationsInput | string | null
    system_tag?: NullableStringFieldUpdateOperationsInput | string | null
    has_fronius_system?: BoolFieldUpdateOperationsInput | boolean
    towers?: TowersUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type customer_systemCreateManyCustomersInput = {
    system_id: number
    role?: string | null
  }

  export type software_ticketsCreateManyCustomersInput = {
    id?: number
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
  }

  export type TowersCreateManyCustomerInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
  }

  export type customer_systemUpdateWithoutCustomersInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    systems?: SystemsUpdateOneRequiredWithoutCustomer_systemNestedInput
  }

  export type customer_systemUncheckedUpdateWithoutCustomersInput = {
    system_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customer_systemUncheckedUpdateManyWithoutCustomersInput = {
    system_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type software_ticketsUpdateWithoutCustomersInput = {
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type software_ticketsUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type software_ticketsUncheckedUpdateManyWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    handled?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TowersUpdateWithoutCustomerInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    system?: SystemsUpdateOneWithoutTowersNestedInput
  }

  export type TowersUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    system_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TowersUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    system_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type customer_systemCreateManySystemsInput = {
    customer_id: number
    role?: string | null
  }

  export type TowersCreateManySystemInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group?: number
    error_state?: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
  }

  export type customer_systemUpdateWithoutSystemsInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    customers?: CustomerUpdateOneRequiredWithoutCustomer_systemNestedInput
  }

  export type customer_systemUncheckedUpdateWithoutSystemsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customer_systemUncheckedUpdateManyWithoutSystemsInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TowersUpdateWithoutSystemInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
  }

  export type TowersUncheckedUpdateWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type TowersUncheckedUpdateManyWithoutSystemInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    order_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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