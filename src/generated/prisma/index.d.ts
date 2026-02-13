
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
 * Model energy
 * 
 */
export type energy = $Result.DefaultSelection<Prisma.$energyPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model software_tickets
 * 
 */
export type software_tickets = $Result.DefaultSelection<Prisma.$software_ticketsPayload>
/**
 * Model tower_logs
 * 
 */
export type tower_logs = $Result.DefaultSelection<Prisma.$tower_logsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model customer_system
 * 
 */
export type customer_system = $Result.DefaultSelection<Prisma.$customer_systemPayload>

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

  /**
   * `prisma.energy`: Exposes CRUD operations for the **energy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Energy
    * const energy = await prisma.energy.findMany()
    * ```
    */
  get energy(): Prisma.energyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.tower_logs`: Exposes CRUD operations for the **tower_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tower_logs
    * const tower_logs = await prisma.tower_logs.findMany()
    * ```
    */
  get tower_logs(): Prisma.tower_logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer_system`: Exposes CRUD operations for the **customer_system** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_systems
    * const customer_systems = await prisma.customer_system.findMany()
    * ```
    */
  get customer_system(): Prisma.customer_systemDelegate<ExtArgs, ClientOptions>;
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
    Notifications: 'Notifications',
    Towers: 'Towers',
    Telemetry: 'Telemetry',
    energy: 'energy',
    orders: 'orders',
    software_tickets: 'software_tickets',
    tower_logs: 'tower_logs',
    users: 'users',
    customer_system: 'customer_system'
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
      modelProps: "customer" | "settings" | "systems" | "notifications" | "towers" | "telemetry" | "energy" | "orders" | "software_tickets" | "tower_logs" | "users" | "customer_system"
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
      energy: {
        payload: Prisma.$energyPayload<ExtArgs>
        fields: Prisma.energyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.energyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.energyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>
          }
          findFirst: {
            args: Prisma.energyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.energyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>
          }
          findMany: {
            args: Prisma.energyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>[]
          }
          create: {
            args: Prisma.energyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>
          }
          createMany: {
            args: Prisma.energyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.energyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>[]
          }
          delete: {
            args: Prisma.energyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>
          }
          update: {
            args: Prisma.energyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>
          }
          deleteMany: {
            args: Prisma.energyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.energyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.energyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>[]
          }
          upsert: {
            args: Prisma.energyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$energyPayload>
          }
          aggregate: {
            args: Prisma.EnergyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnergy>
          }
          groupBy: {
            args: Prisma.energyGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnergyGroupByOutputType>[]
          }
          count: {
            args: Prisma.energyCountArgs<ExtArgs>
            result: $Utils.Optional<EnergyCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
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
      tower_logs: {
        payload: Prisma.$tower_logsPayload<ExtArgs>
        fields: Prisma.tower_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tower_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tower_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>
          }
          findFirst: {
            args: Prisma.tower_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tower_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>
          }
          findMany: {
            args: Prisma.tower_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>[]
          }
          create: {
            args: Prisma.tower_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>
          }
          createMany: {
            args: Prisma.tower_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tower_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>[]
          }
          delete: {
            args: Prisma.tower_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>
          }
          update: {
            args: Prisma.tower_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>
          }
          deleteMany: {
            args: Prisma.tower_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tower_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tower_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>[]
          }
          upsert: {
            args: Prisma.tower_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tower_logsPayload>
          }
          aggregate: {
            args: Prisma.Tower_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTower_logs>
          }
          groupBy: {
            args: Prisma.tower_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tower_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tower_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Tower_logsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    notifications?: NotificationsOmit
    towers?: TowersOmit
    telemetry?: TelemetryOmit
    energy?: energyOmit
    orders?: ordersOmit
    software_tickets?: software_ticketsOmit
    tower_logs?: tower_logsOmit
    users?: usersOmit
    customer_system?: customer_systemOmit
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
    orders: number
    software_tickets: number
    tower_logs: number
    tower: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_system?: boolean | CustomerCountOutputTypeCountCustomer_systemArgs
    orders?: boolean | CustomerCountOutputTypeCountOrdersArgs
    software_tickets?: boolean | CustomerCountOutputTypeCountSoftware_ticketsArgs
    tower_logs?: boolean | CustomerCountOutputTypeCountTower_logsArgs
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
  export type CustomerCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
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
  export type CustomerCountOutputTypeCountTower_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tower_logsWhereInput
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
   * Count Type TowersCountOutputType
   */

  export type TowersCountOutputType = {
    tower_logs: number
  }

  export type TowersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tower_logs?: boolean | TowersCountOutputTypeCountTower_logsArgs
  }

  // Custom InputTypes
  /**
   * TowersCountOutputType without action
   */
  export type TowersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TowersCountOutputType
     */
    select?: TowersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TowersCountOutputType without action
   */
  export type TowersCountOutputTypeCountTower_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tower_logsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    towers: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    towers?: boolean | OrdersCountOutputTypeCountTowersArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountTowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    country_code: string | null
    phone_number: string | null
    customer_type: string | null
    password_hash: string | null
    plan_tier: $Enums.plan_tier | null
    role: $Enums.user_role | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    address_id: number | null
    country_code: string | null
    phone_number: string | null
    customer_type: string | null
    password_hash: string | null
    plan_tier: $Enums.plan_tier | null
    role: $Enums.user_role | null
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
    plan_tier: number
    role: number
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
    country_code?: true
    phone_number?: true
    customer_type?: true
    password_hash?: true
    plan_tier?: true
    role?: true
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
    plan_tier?: true
    role?: true
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
    plan_tier?: true
    role?: true
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
    country_code: string | null
    phone_number: string | null
    customer_type: string
    password_hash: string
    plan_tier: $Enums.plan_tier | null
    role: $Enums.user_role | null
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
    plan_tier?: boolean
    role?: boolean
    customer_system?: boolean | Customer$customer_systemArgs<ExtArgs>
    notification?: boolean | Customer$notificationArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    setting?: boolean | Customer$settingArgs<ExtArgs>
    software_tickets?: boolean | Customer$software_ticketsArgs<ExtArgs>
    tower_logs?: boolean | Customer$tower_logsArgs<ExtArgs>
    tower?: boolean | Customer$towerArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
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
    plan_tier?: boolean
    role?: boolean
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
    plan_tier?: boolean
    role?: boolean
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
    plan_tier?: boolean
    role?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "address_id" | "country_code" | "phone_number" | "customer_type" | "password_hash" | "plan_tier" | "role", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer_system?: boolean | Customer$customer_systemArgs<ExtArgs>
    notification?: boolean | Customer$notificationArgs<ExtArgs>
    orders?: boolean | Customer$ordersArgs<ExtArgs>
    setting?: boolean | Customer$settingArgs<ExtArgs>
    software_tickets?: boolean | Customer$software_ticketsArgs<ExtArgs>
    tower_logs?: boolean | Customer$tower_logsArgs<ExtArgs>
    tower?: boolean | Customer$towerArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      customer_system: Prisma.$customer_systemPayload<ExtArgs>[]
      notification: Prisma.$NotificationsPayload<ExtArgs> | null
      orders: Prisma.$ordersPayload<ExtArgs>[]
      setting: Prisma.$SettingsPayload<ExtArgs> | null
      software_tickets: Prisma.$software_ticketsPayload<ExtArgs>[]
      tower_logs: Prisma.$tower_logsPayload<ExtArgs>[]
      tower: Prisma.$TowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      address_id: number | null
      country_code: string | null
      phone_number: string | null
      customer_type: string
      password_hash: string
      plan_tier: $Enums.plan_tier | null
      role: $Enums.user_role | null
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
    notification<T extends Customer$notificationArgs<ExtArgs> = {}>(args?: Subset<T, Customer$notificationArgs<ExtArgs>>): Prisma__NotificationsClient<$Result.GetResult<Prisma.$NotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders<T extends Customer$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    setting<T extends Customer$settingArgs<ExtArgs> = {}>(args?: Subset<T, Customer$settingArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    software_tickets<T extends Customer$software_ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$software_ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$software_ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tower_logs<T extends Customer$tower_logsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$tower_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly country_code: FieldRef<"Customer", 'String'>
    readonly phone_number: FieldRef<"Customer", 'String'>
    readonly customer_type: FieldRef<"Customer", 'String'>
    readonly password_hash: FieldRef<"Customer", 'String'>
    readonly plan_tier: FieldRef<"Customer", 'plan_tier'>
    readonly role: FieldRef<"Customer", 'user_role'>
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
   * Customer.orders
   */
  export type Customer$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
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
   * Customer.tower_logs
   */
  export type Customer$tower_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    where?: tower_logsWhereInput
    orderBy?: tower_logsOrderByWithRelationInput | tower_logsOrderByWithRelationInput[]
    cursor?: tower_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tower_logsScalarFieldEnum | Tower_logsScalarFieldEnum[]
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
    api_key: string | null
    latitude: Decimal | null
    longitude: Decimal | null
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
    api_key: string | null
    latitude: Decimal | null
    longitude: Decimal | null
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
    api_key: number
    latitude: number
    longitude: number
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
    api_key?: true
    latitude?: true
    longitude?: true
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
    api_key?: true
    latitude?: true
    longitude?: true
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
    api_key?: true
    latitude?: true
    longitude?: true
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
    api_key: string | null
    latitude: Decimal
    longitude: Decimal
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
    api_key?: boolean
    latitude?: boolean
    longitude?: boolean
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
    api_key?: boolean
    latitude?: boolean
    longitude?: boolean
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
    api_key?: boolean
    latitude?: boolean
    longitude?: boolean
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
    api_key?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type SystemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "system_name" | "inverter_type" | "timezone" | "installation_date" | "status" | "total_towers" | "max_pv_kw" | "software_version" | "api_key" | "latitude" | "longitude", ExtArgs["result"]["systems"]>
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
      api_key: string | null
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
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
    readonly api_key: FieldRef<"Systems", 'String'>
    readonly latitude: FieldRef<"Systems", 'Decimal'>
    readonly longitude: FieldRef<"Systems", 'Decimal'>
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
    customer_id: number | null
    push_notifications_enabled: boolean | null
    push_notify_login: boolean | null
    notification_tone: string | null
    email_marketing: boolean | null
    email_account_activity: boolean | null
    email_newsletter: boolean | null
    sms_password_changes: boolean | null
    sms_login_attempts: boolean | null
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
    customer?: boolean | Notifications$customerArgs<ExtArgs>
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
    customer?: boolean | Notifications$customerArgs<ExtArgs>
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
    customer?: boolean | Notifications$customerArgs<ExtArgs>
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
    customer?: boolean | Notifications$customerArgs<ExtArgs>
  }
  export type NotificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Notifications$customerArgs<ExtArgs>
  }
  export type NotificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | Notifications$customerArgs<ExtArgs>
  }

  export type $NotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifications"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      notifications_id: number
      customer_id: number | null
      push_notifications_enabled: boolean | null
      push_notify_login: boolean | null
      notification_tone: string | null
      email_marketing: boolean | null
      email_account_activity: boolean | null
      email_newsletter: boolean | null
      sms_password_changes: boolean | null
      sms_login_attempts: boolean | null
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
    customer<T extends Notifications$customerArgs<ExtArgs> = {}>(args?: Subset<T, Notifications$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    data?: XOR<NotificationsCreateInput, NotificationsUncheckedCreateInput>
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
   * Notifications.customer
   */
  export type Notifications$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    tower_logs?: boolean | Towers$tower_logsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
    _count?: boolean | TowersCountOutputTypeDefaultArgs<ExtArgs>
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
    orders?: boolean | ordersDefaultArgs<ExtArgs>
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
    orders?: boolean | ordersDefaultArgs<ExtArgs>
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
    tower_logs?: boolean | Towers$tower_logsArgs<ExtArgs>
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
    _count?: boolean | TowersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TowersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
  }
  export type TowersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    system?: boolean | Towers$systemArgs<ExtArgs>
  }

  export type $TowersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Towers"
    objects: {
      tower_logs: Prisma.$tower_logsPayload<ExtArgs>[]
      customer: Prisma.$CustomerPayload<ExtArgs>
      orders: Prisma.$ordersPayload<ExtArgs>
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
    tower_logs<T extends Towers$tower_logsArgs<ExtArgs> = {}>(args?: Subset<T, Towers$tower_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Towers.tower_logs
   */
  export type Towers$tower_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    where?: tower_logsWhereInput
    orderBy?: tower_logsOrderByWithRelationInput | tower_logsOrderByWithRelationInput[]
    cursor?: tower_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tower_logsScalarFieldEnum | Tower_logsScalarFieldEnum[]
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
    humidity: number | null
    temperature: number | null
    pressure: number | null
    status: number | null
    power_output: number
    clouds: boolean | null
    solar_flux: number | null
    angle: number | null
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

  export type $TelemetryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telemetry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date_time: Date
      tower_id: number
      humidity: number | null
      temperature: number | null
      pressure: number | null
      status: number | null
      power_output: number
      clouds: boolean | null
      solar_flux: number | null
      angle: number | null
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
    readonly power_output: FieldRef<"Telemetry", 'Float'>
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
  }


  /**
   * Model energy
   */

  export type AggregateEnergy = {
    _count: EnergyCountAggregateOutputType | null
    _avg: EnergyAvgAggregateOutputType | null
    _sum: EnergySumAggregateOutputType | null
    _min: EnergyMinAggregateOutputType | null
    _max: EnergyMaxAggregateOutputType | null
  }

  export type EnergyAvgAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
    tower: number | null
    energy: number | null
    id: number | null
  }

  export type EnergySumAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
    tower: number | null
    energy: number | null
    id: number | null
  }

  export type EnergyMinAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
    tower: number | null
    energy: number | null
    id: number | null
  }

  export type EnergyMaxAggregateOutputType = {
    day: number | null
    month: number | null
    year: number | null
    tower: number | null
    energy: number | null
    id: number | null
  }

  export type EnergyCountAggregateOutputType = {
    day: number
    month: number
    year: number
    tower: number
    energy: number
    id: number
    _all: number
  }


  export type EnergyAvgAggregateInputType = {
    day?: true
    month?: true
    year?: true
    tower?: true
    energy?: true
    id?: true
  }

  export type EnergySumAggregateInputType = {
    day?: true
    month?: true
    year?: true
    tower?: true
    energy?: true
    id?: true
  }

  export type EnergyMinAggregateInputType = {
    day?: true
    month?: true
    year?: true
    tower?: true
    energy?: true
    id?: true
  }

  export type EnergyMaxAggregateInputType = {
    day?: true
    month?: true
    year?: true
    tower?: true
    energy?: true
    id?: true
  }

  export type EnergyCountAggregateInputType = {
    day?: true
    month?: true
    year?: true
    tower?: true
    energy?: true
    id?: true
    _all?: true
  }

  export type EnergyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which energy to aggregate.
     */
    where?: energyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of energy to fetch.
     */
    orderBy?: energyOrderByWithRelationInput | energyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: energyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned energy
    **/
    _count?: true | EnergyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnergyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnergySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnergyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnergyMaxAggregateInputType
  }

  export type GetEnergyAggregateType<T extends EnergyAggregateArgs> = {
        [P in keyof T & keyof AggregateEnergy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnergy[P]>
      : GetScalarType<T[P], AggregateEnergy[P]>
  }




  export type energyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: energyWhereInput
    orderBy?: energyOrderByWithAggregationInput | energyOrderByWithAggregationInput[]
    by: EnergyScalarFieldEnum[] | EnergyScalarFieldEnum
    having?: energyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnergyCountAggregateInputType | true
    _avg?: EnergyAvgAggregateInputType
    _sum?: EnergySumAggregateInputType
    _min?: EnergyMinAggregateInputType
    _max?: EnergyMaxAggregateInputType
  }

  export type EnergyGroupByOutputType = {
    day: number
    month: number
    year: number
    tower: number
    energy: number | null
    id: number
    _count: EnergyCountAggregateOutputType | null
    _avg: EnergyAvgAggregateOutputType | null
    _sum: EnergySumAggregateOutputType | null
    _min: EnergyMinAggregateOutputType | null
    _max: EnergyMaxAggregateOutputType | null
  }

  type GetEnergyGroupByPayload<T extends energyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnergyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnergyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnergyGroupByOutputType[P]>
            : GetScalarType<T[P], EnergyGroupByOutputType[P]>
        }
      >
    >


  export type energySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    day?: boolean
    month?: boolean
    year?: boolean
    tower?: boolean
    energy?: boolean
    id?: boolean
  }, ExtArgs["result"]["energy"]>

  export type energySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    day?: boolean
    month?: boolean
    year?: boolean
    tower?: boolean
    energy?: boolean
    id?: boolean
  }, ExtArgs["result"]["energy"]>

  export type energySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    day?: boolean
    month?: boolean
    year?: boolean
    tower?: boolean
    energy?: boolean
    id?: boolean
  }, ExtArgs["result"]["energy"]>

  export type energySelectScalar = {
    day?: boolean
    month?: boolean
    year?: boolean
    tower?: boolean
    energy?: boolean
    id?: boolean
  }

  export type energyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"day" | "month" | "year" | "tower" | "energy" | "id", ExtArgs["result"]["energy"]>

  export type $energyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "energy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      day: number
      month: number
      year: number
      tower: number
      energy: number | null
      id: number
    }, ExtArgs["result"]["energy"]>
    composites: {}
  }

  type energyGetPayload<S extends boolean | null | undefined | energyDefaultArgs> = $Result.GetResult<Prisma.$energyPayload, S>

  type energyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<energyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnergyCountAggregateInputType | true
    }

  export interface energyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['energy'], meta: { name: 'energy' } }
    /**
     * Find zero or one Energy that matches the filter.
     * @param {energyFindUniqueArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends energyFindUniqueArgs>(args: SelectSubset<T, energyFindUniqueArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Energy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {energyFindUniqueOrThrowArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends energyFindUniqueOrThrowArgs>(args: SelectSubset<T, energyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Energy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {energyFindFirstArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends energyFindFirstArgs>(args?: SelectSubset<T, energyFindFirstArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Energy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {energyFindFirstOrThrowArgs} args - Arguments to find a Energy
     * @example
     * // Get one Energy
     * const energy = await prisma.energy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends energyFindFirstOrThrowArgs>(args?: SelectSubset<T, energyFindFirstOrThrowArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Energy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {energyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Energy
     * const energy = await prisma.energy.findMany()
     * 
     * // Get first 10 Energy
     * const energy = await prisma.energy.findMany({ take: 10 })
     * 
     * // Only select the `day`
     * const energyWithDayOnly = await prisma.energy.findMany({ select: { day: true } })
     * 
     */
    findMany<T extends energyFindManyArgs>(args?: SelectSubset<T, energyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Energy.
     * @param {energyCreateArgs} args - Arguments to create a Energy.
     * @example
     * // Create one Energy
     * const Energy = await prisma.energy.create({
     *   data: {
     *     // ... data to create a Energy
     *   }
     * })
     * 
     */
    create<T extends energyCreateArgs>(args: SelectSubset<T, energyCreateArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Energy.
     * @param {energyCreateManyArgs} args - Arguments to create many Energy.
     * @example
     * // Create many Energy
     * const energy = await prisma.energy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends energyCreateManyArgs>(args?: SelectSubset<T, energyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Energy and returns the data saved in the database.
     * @param {energyCreateManyAndReturnArgs} args - Arguments to create many Energy.
     * @example
     * // Create many Energy
     * const energy = await prisma.energy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Energy and only return the `day`
     * const energyWithDayOnly = await prisma.energy.createManyAndReturn({
     *   select: { day: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends energyCreateManyAndReturnArgs>(args?: SelectSubset<T, energyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Energy.
     * @param {energyDeleteArgs} args - Arguments to delete one Energy.
     * @example
     * // Delete one Energy
     * const Energy = await prisma.energy.delete({
     *   where: {
     *     // ... filter to delete one Energy
     *   }
     * })
     * 
     */
    delete<T extends energyDeleteArgs>(args: SelectSubset<T, energyDeleteArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Energy.
     * @param {energyUpdateArgs} args - Arguments to update one Energy.
     * @example
     * // Update one Energy
     * const energy = await prisma.energy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends energyUpdateArgs>(args: SelectSubset<T, energyUpdateArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Energy.
     * @param {energyDeleteManyArgs} args - Arguments to filter Energy to delete.
     * @example
     * // Delete a few Energy
     * const { count } = await prisma.energy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends energyDeleteManyArgs>(args?: SelectSubset<T, energyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {energyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Energy
     * const energy = await prisma.energy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends energyUpdateManyArgs>(args: SelectSubset<T, energyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Energy and returns the data updated in the database.
     * @param {energyUpdateManyAndReturnArgs} args - Arguments to update many Energy.
     * @example
     * // Update many Energy
     * const energy = await prisma.energy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Energy and only return the `day`
     * const energyWithDayOnly = await prisma.energy.updateManyAndReturn({
     *   select: { day: true },
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
    updateManyAndReturn<T extends energyUpdateManyAndReturnArgs>(args: SelectSubset<T, energyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Energy.
     * @param {energyUpsertArgs} args - Arguments to update or create a Energy.
     * @example
     * // Update or create a Energy
     * const energy = await prisma.energy.upsert({
     *   create: {
     *     // ... data to create a Energy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Energy we want to update
     *   }
     * })
     */
    upsert<T extends energyUpsertArgs>(args: SelectSubset<T, energyUpsertArgs<ExtArgs>>): Prisma__energyClient<$Result.GetResult<Prisma.$energyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {energyCountArgs} args - Arguments to filter Energy to count.
     * @example
     * // Count the number of Energy
     * const count = await prisma.energy.count({
     *   where: {
     *     // ... the filter for the Energy we want to count
     *   }
     * })
    **/
    count<T extends energyCountArgs>(
      args?: Subset<T, energyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnergyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnergyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnergyAggregateArgs>(args: Subset<T, EnergyAggregateArgs>): Prisma.PrismaPromise<GetEnergyAggregateType<T>>

    /**
     * Group by Energy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {energyGroupByArgs} args - Group by arguments.
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
      T extends energyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: energyGroupByArgs['orderBy'] }
        : { orderBy?: energyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, energyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnergyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the energy model
   */
  readonly fields: energyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for energy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__energyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the energy model
   */
  interface energyFieldRefs {
    readonly day: FieldRef<"energy", 'Int'>
    readonly month: FieldRef<"energy", 'Int'>
    readonly year: FieldRef<"energy", 'Int'>
    readonly tower: FieldRef<"energy", 'Int'>
    readonly energy: FieldRef<"energy", 'Float'>
    readonly id: FieldRef<"energy", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * energy findUnique
   */
  export type energyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * Filter, which energy to fetch.
     */
    where: energyWhereUniqueInput
  }

  /**
   * energy findUniqueOrThrow
   */
  export type energyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * Filter, which energy to fetch.
     */
    where: energyWhereUniqueInput
  }

  /**
   * energy findFirst
   */
  export type energyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * Filter, which energy to fetch.
     */
    where?: energyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of energy to fetch.
     */
    orderBy?: energyOrderByWithRelationInput | energyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for energy.
     */
    cursor?: energyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of energy.
     */
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }

  /**
   * energy findFirstOrThrow
   */
  export type energyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * Filter, which energy to fetch.
     */
    where?: energyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of energy to fetch.
     */
    orderBy?: energyOrderByWithRelationInput | energyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for energy.
     */
    cursor?: energyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` energy.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of energy.
     */
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }

  /**
   * energy findMany
   */
  export type energyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * Filter, which energy to fetch.
     */
    where?: energyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of energy to fetch.
     */
    orderBy?: energyOrderByWithRelationInput | energyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing energy.
     */
    cursor?: energyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` energy from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` energy.
     */
    skip?: number
    distinct?: EnergyScalarFieldEnum | EnergyScalarFieldEnum[]
  }

  /**
   * energy create
   */
  export type energyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * The data needed to create a energy.
     */
    data: XOR<energyCreateInput, energyUncheckedCreateInput>
  }

  /**
   * energy createMany
   */
  export type energyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many energy.
     */
    data: energyCreateManyInput | energyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * energy createManyAndReturn
   */
  export type energyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * The data used to create many energy.
     */
    data: energyCreateManyInput | energyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * energy update
   */
  export type energyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * The data needed to update a energy.
     */
    data: XOR<energyUpdateInput, energyUncheckedUpdateInput>
    /**
     * Choose, which energy to update.
     */
    where: energyWhereUniqueInput
  }

  /**
   * energy updateMany
   */
  export type energyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update energy.
     */
    data: XOR<energyUpdateManyMutationInput, energyUncheckedUpdateManyInput>
    /**
     * Filter which energy to update
     */
    where?: energyWhereInput
    /**
     * Limit how many energy to update.
     */
    limit?: number
  }

  /**
   * energy updateManyAndReturn
   */
  export type energyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * The data used to update energy.
     */
    data: XOR<energyUpdateManyMutationInput, energyUncheckedUpdateManyInput>
    /**
     * Filter which energy to update
     */
    where?: energyWhereInput
    /**
     * Limit how many energy to update.
     */
    limit?: number
  }

  /**
   * energy upsert
   */
  export type energyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * The filter to search for the energy to update in case it exists.
     */
    where: energyWhereUniqueInput
    /**
     * In case the energy found by the `where` argument doesn't exist, create a new energy with this data.
     */
    create: XOR<energyCreateInput, energyUncheckedCreateInput>
    /**
     * In case the energy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<energyUpdateInput, energyUncheckedUpdateInput>
  }

  /**
   * energy delete
   */
  export type energyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
    /**
     * Filter which energy to delete.
     */
    where: energyWhereUniqueInput
  }

  /**
   * energy deleteMany
   */
  export type energyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which energy to delete
     */
    where?: energyWhereInput
    /**
     * Limit how many energy to delete.
     */
    limit?: number
  }

  /**
   * energy without action
   */
  export type energyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the energy
     */
    select?: energySelect<ExtArgs> | null
    /**
     * Omit specific fields from the energy
     */
    omit?: energyOmit<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    tower_count: number | null
    address_id: number | null
    price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    tower_count: number | null
    address_id: number | null
    price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    tower_count: number | null
    address_id: number | null
    price: number | null
    currency: string | null
    state: string | null
    date_time: Date | null
    payment_received: boolean | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    tower_count: number | null
    address_id: number | null
    price: number | null
    currency: string | null
    state: string | null
    date_time: Date | null
    payment_received: boolean | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    customer_id: number
    tower_count: number
    address_id: number
    price: number
    currency: number
    state: number
    date_time: number
    payment_received: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    customer_id?: true
    tower_count?: true
    address_id?: true
    price?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    customer_id?: true
    tower_count?: true
    address_id?: true
    price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    customer_id?: true
    tower_count?: true
    address_id?: true
    price?: true
    currency?: true
    state?: true
    date_time?: true
    payment_received?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    customer_id?: true
    tower_count?: true
    address_id?: true
    price?: true
    currency?: true
    state?: true
    date_time?: true
    payment_received?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    customer_id?: true
    tower_count?: true
    address_id?: true
    price?: true
    currency?: true
    state?: true
    date_time?: true
    payment_received?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    customer_id: number
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date
    payment_received: boolean
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    tower_count?: boolean
    address_id?: boolean
    price?: boolean
    currency?: boolean
    state?: boolean
    date_time?: boolean
    payment_received?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | orders$towersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    tower_count?: boolean
    address_id?: boolean
    price?: boolean
    currency?: boolean
    state?: boolean
    date_time?: boolean
    payment_received?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    tower_count?: boolean
    address_id?: boolean
    price?: boolean
    currency?: boolean
    state?: boolean
    date_time?: boolean
    payment_received?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    customer_id?: boolean
    tower_count?: boolean
    address_id?: boolean
    price?: boolean
    currency?: boolean
    state?: boolean
    date_time?: boolean
    payment_received?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "tower_count" | "address_id" | "price" | "currency" | "state" | "date_time" | "payment_received", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | orders$towersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>
      towers: Prisma.$TowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      tower_count: number
      address_id: number
      price: number
      currency: string
      state: string
      date_time: Date
      payment_received: boolean
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    towers<T extends orders$towersArgs<ExtArgs> = {}>(args?: Subset<T, orders$towersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly customer_id: FieldRef<"orders", 'Int'>
    readonly tower_count: FieldRef<"orders", 'Int'>
    readonly address_id: FieldRef<"orders", 'Int'>
    readonly price: FieldRef<"orders", 'Int'>
    readonly currency: FieldRef<"orders", 'String'>
    readonly state: FieldRef<"orders", 'String'>
    readonly date_time: FieldRef<"orders", 'DateTime'>
    readonly payment_received: FieldRef<"orders", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.towers
   */
  export type orders$towersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
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
   * Model tower_logs
   */

  export type AggregateTower_logs = {
    _count: Tower_logsCountAggregateOutputType | null
    _avg: Tower_logsAvgAggregateOutputType | null
    _sum: Tower_logsSumAggregateOutputType | null
    _min: Tower_logsMinAggregateOutputType | null
    _max: Tower_logsMaxAggregateOutputType | null
  }

  export type Tower_logsAvgAggregateOutputType = {
    id: number | null
    customer_id: number | null
    tower_id: number | null
  }

  export type Tower_logsSumAggregateOutputType = {
    id: number | null
    customer_id: number | null
    tower_id: number | null
  }

  export type Tower_logsMinAggregateOutputType = {
    id: number | null
    customer_id: number | null
    type: string | null
    message: string | null
    date_time: Date | null
    tower_id: number | null
    closed: boolean | null
  }

  export type Tower_logsMaxAggregateOutputType = {
    id: number | null
    customer_id: number | null
    type: string | null
    message: string | null
    date_time: Date | null
    tower_id: number | null
    closed: boolean | null
  }

  export type Tower_logsCountAggregateOutputType = {
    id: number
    customer_id: number
    type: number
    message: number
    date_time: number
    tower_id: number
    closed: number
    _all: number
  }


  export type Tower_logsAvgAggregateInputType = {
    id?: true
    customer_id?: true
    tower_id?: true
  }

  export type Tower_logsSumAggregateInputType = {
    id?: true
    customer_id?: true
    tower_id?: true
  }

  export type Tower_logsMinAggregateInputType = {
    id?: true
    customer_id?: true
    type?: true
    message?: true
    date_time?: true
    tower_id?: true
    closed?: true
  }

  export type Tower_logsMaxAggregateInputType = {
    id?: true
    customer_id?: true
    type?: true
    message?: true
    date_time?: true
    tower_id?: true
    closed?: true
  }

  export type Tower_logsCountAggregateInputType = {
    id?: true
    customer_id?: true
    type?: true
    message?: true
    date_time?: true
    tower_id?: true
    closed?: true
    _all?: true
  }

  export type Tower_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tower_logs to aggregate.
     */
    where?: tower_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_logs to fetch.
     */
    orderBy?: tower_logsOrderByWithRelationInput | tower_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tower_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tower_logs
    **/
    _count?: true | Tower_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tower_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tower_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tower_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tower_logsMaxAggregateInputType
  }

  export type GetTower_logsAggregateType<T extends Tower_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateTower_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTower_logs[P]>
      : GetScalarType<T[P], AggregateTower_logs[P]>
  }




  export type tower_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tower_logsWhereInput
    orderBy?: tower_logsOrderByWithAggregationInput | tower_logsOrderByWithAggregationInput[]
    by: Tower_logsScalarFieldEnum[] | Tower_logsScalarFieldEnum
    having?: tower_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tower_logsCountAggregateInputType | true
    _avg?: Tower_logsAvgAggregateInputType
    _sum?: Tower_logsSumAggregateInputType
    _min?: Tower_logsMinAggregateInputType
    _max?: Tower_logsMaxAggregateInputType
  }

  export type Tower_logsGroupByOutputType = {
    id: number
    customer_id: number
    type: string
    message: string
    date_time: Date
    tower_id: number | null
    closed: boolean
    _count: Tower_logsCountAggregateOutputType | null
    _avg: Tower_logsAvgAggregateOutputType | null
    _sum: Tower_logsSumAggregateOutputType | null
    _min: Tower_logsMinAggregateOutputType | null
    _max: Tower_logsMaxAggregateOutputType | null
  }

  type GetTower_logsGroupByPayload<T extends tower_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tower_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tower_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tower_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Tower_logsGroupByOutputType[P]>
        }
      >
    >


  export type tower_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    type?: boolean
    message?: boolean
    date_time?: boolean
    tower_id?: boolean
    closed?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | tower_logs$towersArgs<ExtArgs>
  }, ExtArgs["result"]["tower_logs"]>

  export type tower_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    type?: boolean
    message?: boolean
    date_time?: boolean
    tower_id?: boolean
    closed?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | tower_logs$towersArgs<ExtArgs>
  }, ExtArgs["result"]["tower_logs"]>

  export type tower_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customer_id?: boolean
    type?: boolean
    message?: boolean
    date_time?: boolean
    tower_id?: boolean
    closed?: boolean
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | tower_logs$towersArgs<ExtArgs>
  }, ExtArgs["result"]["tower_logs"]>

  export type tower_logsSelectScalar = {
    id?: boolean
    customer_id?: boolean
    type?: boolean
    message?: boolean
    date_time?: boolean
    tower_id?: boolean
    closed?: boolean
  }

  export type tower_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customer_id" | "type" | "message" | "date_time" | "tower_id" | "closed", ExtArgs["result"]["tower_logs"]>
  export type tower_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | tower_logs$towersArgs<ExtArgs>
  }
  export type tower_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | tower_logs$towersArgs<ExtArgs>
  }
  export type tower_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | CustomerDefaultArgs<ExtArgs>
    towers?: boolean | tower_logs$towersArgs<ExtArgs>
  }

  export type $tower_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tower_logs"
    objects: {
      customers: Prisma.$CustomerPayload<ExtArgs>
      towers: Prisma.$TowersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customer_id: number
      type: string
      message: string
      date_time: Date
      tower_id: number | null
      closed: boolean
    }, ExtArgs["result"]["tower_logs"]>
    composites: {}
  }

  type tower_logsGetPayload<S extends boolean | null | undefined | tower_logsDefaultArgs> = $Result.GetResult<Prisma.$tower_logsPayload, S>

  type tower_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tower_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tower_logsCountAggregateInputType | true
    }

  export interface tower_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tower_logs'], meta: { name: 'tower_logs' } }
    /**
     * Find zero or one Tower_logs that matches the filter.
     * @param {tower_logsFindUniqueArgs} args - Arguments to find a Tower_logs
     * @example
     * // Get one Tower_logs
     * const tower_logs = await prisma.tower_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tower_logsFindUniqueArgs>(args: SelectSubset<T, tower_logsFindUniqueArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tower_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tower_logsFindUniqueOrThrowArgs} args - Arguments to find a Tower_logs
     * @example
     * // Get one Tower_logs
     * const tower_logs = await prisma.tower_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tower_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, tower_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_logsFindFirstArgs} args - Arguments to find a Tower_logs
     * @example
     * // Get one Tower_logs
     * const tower_logs = await prisma.tower_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tower_logsFindFirstArgs>(args?: SelectSubset<T, tower_logsFindFirstArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tower_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_logsFindFirstOrThrowArgs} args - Arguments to find a Tower_logs
     * @example
     * // Get one Tower_logs
     * const tower_logs = await prisma.tower_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tower_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, tower_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tower_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tower_logs
     * const tower_logs = await prisma.tower_logs.findMany()
     * 
     * // Get first 10 Tower_logs
     * const tower_logs = await prisma.tower_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tower_logsWithIdOnly = await prisma.tower_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tower_logsFindManyArgs>(args?: SelectSubset<T, tower_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tower_logs.
     * @param {tower_logsCreateArgs} args - Arguments to create a Tower_logs.
     * @example
     * // Create one Tower_logs
     * const Tower_logs = await prisma.tower_logs.create({
     *   data: {
     *     // ... data to create a Tower_logs
     *   }
     * })
     * 
     */
    create<T extends tower_logsCreateArgs>(args: SelectSubset<T, tower_logsCreateArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tower_logs.
     * @param {tower_logsCreateManyArgs} args - Arguments to create many Tower_logs.
     * @example
     * // Create many Tower_logs
     * const tower_logs = await prisma.tower_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tower_logsCreateManyArgs>(args?: SelectSubset<T, tower_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tower_logs and returns the data saved in the database.
     * @param {tower_logsCreateManyAndReturnArgs} args - Arguments to create many Tower_logs.
     * @example
     * // Create many Tower_logs
     * const tower_logs = await prisma.tower_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tower_logs and only return the `id`
     * const tower_logsWithIdOnly = await prisma.tower_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tower_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, tower_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tower_logs.
     * @param {tower_logsDeleteArgs} args - Arguments to delete one Tower_logs.
     * @example
     * // Delete one Tower_logs
     * const Tower_logs = await prisma.tower_logs.delete({
     *   where: {
     *     // ... filter to delete one Tower_logs
     *   }
     * })
     * 
     */
    delete<T extends tower_logsDeleteArgs>(args: SelectSubset<T, tower_logsDeleteArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tower_logs.
     * @param {tower_logsUpdateArgs} args - Arguments to update one Tower_logs.
     * @example
     * // Update one Tower_logs
     * const tower_logs = await prisma.tower_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tower_logsUpdateArgs>(args: SelectSubset<T, tower_logsUpdateArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tower_logs.
     * @param {tower_logsDeleteManyArgs} args - Arguments to filter Tower_logs to delete.
     * @example
     * // Delete a few Tower_logs
     * const { count } = await prisma.tower_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tower_logsDeleteManyArgs>(args?: SelectSubset<T, tower_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tower_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tower_logs
     * const tower_logs = await prisma.tower_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tower_logsUpdateManyArgs>(args: SelectSubset<T, tower_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tower_logs and returns the data updated in the database.
     * @param {tower_logsUpdateManyAndReturnArgs} args - Arguments to update many Tower_logs.
     * @example
     * // Update many Tower_logs
     * const tower_logs = await prisma.tower_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tower_logs and only return the `id`
     * const tower_logsWithIdOnly = await prisma.tower_logs.updateManyAndReturn({
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
    updateManyAndReturn<T extends tower_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, tower_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tower_logs.
     * @param {tower_logsUpsertArgs} args - Arguments to update or create a Tower_logs.
     * @example
     * // Update or create a Tower_logs
     * const tower_logs = await prisma.tower_logs.upsert({
     *   create: {
     *     // ... data to create a Tower_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tower_logs we want to update
     *   }
     * })
     */
    upsert<T extends tower_logsUpsertArgs>(args: SelectSubset<T, tower_logsUpsertArgs<ExtArgs>>): Prisma__tower_logsClient<$Result.GetResult<Prisma.$tower_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tower_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_logsCountArgs} args - Arguments to filter Tower_logs to count.
     * @example
     * // Count the number of Tower_logs
     * const count = await prisma.tower_logs.count({
     *   where: {
     *     // ... the filter for the Tower_logs we want to count
     *   }
     * })
    **/
    count<T extends tower_logsCountArgs>(
      args?: Subset<T, tower_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tower_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tower_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tower_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tower_logsAggregateArgs>(args: Subset<T, Tower_logsAggregateArgs>): Prisma.PrismaPromise<GetTower_logsAggregateType<T>>

    /**
     * Group by Tower_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tower_logsGroupByArgs} args - Group by arguments.
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
      T extends tower_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tower_logsGroupByArgs['orderBy'] }
        : { orderBy?: tower_logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tower_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTower_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tower_logs model
   */
  readonly fields: tower_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tower_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tower_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customers<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    towers<T extends tower_logs$towersArgs<ExtArgs> = {}>(args?: Subset<T, tower_logs$towersArgs<ExtArgs>>): Prisma__TowersClient<$Result.GetResult<Prisma.$TowersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tower_logs model
   */
  interface tower_logsFieldRefs {
    readonly id: FieldRef<"tower_logs", 'Int'>
    readonly customer_id: FieldRef<"tower_logs", 'Int'>
    readonly type: FieldRef<"tower_logs", 'String'>
    readonly message: FieldRef<"tower_logs", 'String'>
    readonly date_time: FieldRef<"tower_logs", 'DateTime'>
    readonly tower_id: FieldRef<"tower_logs", 'Int'>
    readonly closed: FieldRef<"tower_logs", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * tower_logs findUnique
   */
  export type tower_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * Filter, which tower_logs to fetch.
     */
    where: tower_logsWhereUniqueInput
  }

  /**
   * tower_logs findUniqueOrThrow
   */
  export type tower_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * Filter, which tower_logs to fetch.
     */
    where: tower_logsWhereUniqueInput
  }

  /**
   * tower_logs findFirst
   */
  export type tower_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * Filter, which tower_logs to fetch.
     */
    where?: tower_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_logs to fetch.
     */
    orderBy?: tower_logsOrderByWithRelationInput | tower_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tower_logs.
     */
    cursor?: tower_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tower_logs.
     */
    distinct?: Tower_logsScalarFieldEnum | Tower_logsScalarFieldEnum[]
  }

  /**
   * tower_logs findFirstOrThrow
   */
  export type tower_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * Filter, which tower_logs to fetch.
     */
    where?: tower_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_logs to fetch.
     */
    orderBy?: tower_logsOrderByWithRelationInput | tower_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tower_logs.
     */
    cursor?: tower_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tower_logs.
     */
    distinct?: Tower_logsScalarFieldEnum | Tower_logsScalarFieldEnum[]
  }

  /**
   * tower_logs findMany
   */
  export type tower_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * Filter, which tower_logs to fetch.
     */
    where?: tower_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tower_logs to fetch.
     */
    orderBy?: tower_logsOrderByWithRelationInput | tower_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tower_logs.
     */
    cursor?: tower_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tower_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tower_logs.
     */
    skip?: number
    distinct?: Tower_logsScalarFieldEnum | Tower_logsScalarFieldEnum[]
  }

  /**
   * tower_logs create
   */
  export type tower_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a tower_logs.
     */
    data: XOR<tower_logsCreateInput, tower_logsUncheckedCreateInput>
  }

  /**
   * tower_logs createMany
   */
  export type tower_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tower_logs.
     */
    data: tower_logsCreateManyInput | tower_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tower_logs createManyAndReturn
   */
  export type tower_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * The data used to create many tower_logs.
     */
    data: tower_logsCreateManyInput | tower_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tower_logs update
   */
  export type tower_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a tower_logs.
     */
    data: XOR<tower_logsUpdateInput, tower_logsUncheckedUpdateInput>
    /**
     * Choose, which tower_logs to update.
     */
    where: tower_logsWhereUniqueInput
  }

  /**
   * tower_logs updateMany
   */
  export type tower_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tower_logs.
     */
    data: XOR<tower_logsUpdateManyMutationInput, tower_logsUncheckedUpdateManyInput>
    /**
     * Filter which tower_logs to update
     */
    where?: tower_logsWhereInput
    /**
     * Limit how many tower_logs to update.
     */
    limit?: number
  }

  /**
   * tower_logs updateManyAndReturn
   */
  export type tower_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * The data used to update tower_logs.
     */
    data: XOR<tower_logsUpdateManyMutationInput, tower_logsUncheckedUpdateManyInput>
    /**
     * Filter which tower_logs to update
     */
    where?: tower_logsWhereInput
    /**
     * Limit how many tower_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tower_logs upsert
   */
  export type tower_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the tower_logs to update in case it exists.
     */
    where: tower_logsWhereUniqueInput
    /**
     * In case the tower_logs found by the `where` argument doesn't exist, create a new tower_logs with this data.
     */
    create: XOR<tower_logsCreateInput, tower_logsUncheckedCreateInput>
    /**
     * In case the tower_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tower_logsUpdateInput, tower_logsUncheckedUpdateInput>
  }

  /**
   * tower_logs delete
   */
  export type tower_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
    /**
     * Filter which tower_logs to delete.
     */
    where: tower_logsWhereUniqueInput
  }

  /**
   * tower_logs deleteMany
   */
  export type tower_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tower_logs to delete
     */
    where?: tower_logsWhereInput
    /**
     * Limit how many tower_logs to delete.
     */
    limit?: number
  }

  /**
   * tower_logs.towers
   */
  export type tower_logs$towersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * tower_logs without action
   */
  export type tower_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tower_logs
     */
    select?: tower_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tower_logs
     */
    omit?: tower_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tower_logsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email", ExtArgs["result"]["users"]>

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
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
    password_hash: 'password_hash',
    plan_tier: 'plan_tier',
    role: 'role'
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
    api_key: 'api_key',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type SystemsScalarFieldEnum = (typeof SystemsScalarFieldEnum)[keyof typeof SystemsScalarFieldEnum]


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
    software_version: 'software_version',
    current_angle: 'current_angle',
    system_id: 'system_id'
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


  export const EnergyScalarFieldEnum: {
    day: 'day',
    month: 'month',
    year: 'year',
    tower: 'tower',
    energy: 'energy',
    id: 'id'
  };

  export type EnergyScalarFieldEnum = (typeof EnergyScalarFieldEnum)[keyof typeof EnergyScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    tower_count: 'tower_count',
    address_id: 'address_id',
    price: 'price',
    currency: 'currency',
    state: 'state',
    date_time: 'date_time',
    payment_received: 'payment_received'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


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


  export const Tower_logsScalarFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    type: 'type',
    message: 'message',
    date_time: 'date_time',
    tower_id: 'tower_id',
    closed: 'closed'
  };

  export type Tower_logsScalarFieldEnum = (typeof Tower_logsScalarFieldEnum)[keyof typeof Tower_logsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Customer_systemScalarFieldEnum: {
    customer_id: 'customer_id',
    system_id: 'system_id',
    role: 'role'
  };

  export type Customer_systemScalarFieldEnum = (typeof Customer_systemScalarFieldEnum)[keyof typeof Customer_systemScalarFieldEnum]


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
    address_id?: IntNullableFilter<"Customer"> | number | null
    country_code?: StringNullableFilter<"Customer"> | string | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    customer_type?: StringFilter<"Customer"> | string
    password_hash?: StringFilter<"Customer"> | string
    plan_tier?: Enumplan_tierNullableFilter<"Customer"> | $Enums.plan_tier | null
    role?: Enumuser_roleNullableFilter<"Customer"> | $Enums.user_role | null
    customer_system?: Customer_systemListRelationFilter
    notification?: XOR<NotificationsNullableScalarRelationFilter, NotificationsWhereInput> | null
    orders?: OrdersListRelationFilter
    setting?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    software_tickets?: Software_ticketsListRelationFilter
    tower_logs?: Tower_logsListRelationFilter
    tower?: TowersListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    customer_system?: customer_systemOrderByRelationAggregateInput
    notification?: NotificationsOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    setting?: SettingsOrderByWithRelationInput
    software_tickets?: software_ticketsOrderByRelationAggregateInput
    tower_logs?: tower_logsOrderByRelationAggregateInput
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
    country_code?: StringNullableFilter<"Customer"> | string | null
    phone_number?: StringNullableFilter<"Customer"> | string | null
    customer_type?: StringFilter<"Customer"> | string
    password_hash?: StringFilter<"Customer"> | string
    plan_tier?: Enumplan_tierNullableFilter<"Customer"> | $Enums.plan_tier | null
    role?: Enumuser_roleNullableFilter<"Customer"> | $Enums.user_role | null
    customer_system?: Customer_systemListRelationFilter
    notification?: XOR<NotificationsNullableScalarRelationFilter, NotificationsWhereInput> | null
    orders?: OrdersListRelationFilter
    setting?: XOR<SettingsNullableScalarRelationFilter, SettingsWhereInput> | null
    software_tickets?: Software_ticketsListRelationFilter
    tower_logs?: Tower_logsListRelationFilter
    tower?: TowersListRelationFilter
  }, "id" | "email">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    address_id?: SortOrderInput | SortOrder
    country_code?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
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
    country_code?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    customer_type?: StringWithAggregatesFilter<"Customer"> | string
    password_hash?: StringWithAggregatesFilter<"Customer"> | string
    plan_tier?: Enumplan_tierNullableWithAggregatesFilter<"Customer"> | $Enums.plan_tier | null
    role?: Enumuser_roleNullableWithAggregatesFilter<"Customer"> | $Enums.user_role | null
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
    api_key?: StringNullableFilter<"Systems"> | string | null
    latitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
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
    api_key?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    customer_system?: customer_systemOrderByRelationAggregateInput
    towers?: TowersOrderByRelationAggregateInput
  }

  export type SystemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
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
    api_key?: StringNullableFilter<"Systems"> | string | null
    latitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    customer_system?: Customer_systemListRelationFilter
    towers?: TowersListRelationFilter
  }, "id">

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
    api_key?: SortOrderInput | SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    api_key?: StringNullableWithAggregatesFilter<"Systems"> | string | null
    latitude?: DecimalWithAggregatesFilter<"Systems"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"Systems"> | Decimal | DecimalJsLike | number | string
  }

  export type NotificationsWhereInput = {
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    notifications_id?: IntFilter<"Notifications"> | number
    customer_id?: IntNullableFilter<"Notifications"> | number | null
    push_notifications_enabled?: BoolNullableFilter<"Notifications"> | boolean | null
    push_notify_login?: BoolNullableFilter<"Notifications"> | boolean | null
    notification_tone?: StringNullableFilter<"Notifications"> | string | null
    email_marketing?: BoolNullableFilter<"Notifications"> | boolean | null
    email_account_activity?: BoolNullableFilter<"Notifications"> | boolean | null
    email_newsletter?: BoolNullableFilter<"Notifications"> | boolean | null
    sms_password_changes?: BoolNullableFilter<"Notifications"> | boolean | null
    sms_login_attempts?: BoolNullableFilter<"Notifications"> | boolean | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }

  export type NotificationsOrderByWithRelationInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    push_notifications_enabled?: SortOrderInput | SortOrder
    push_notify_login?: SortOrderInput | SortOrder
    notification_tone?: SortOrderInput | SortOrder
    email_marketing?: SortOrderInput | SortOrder
    email_account_activity?: SortOrderInput | SortOrder
    email_newsletter?: SortOrderInput | SortOrder
    sms_password_changes?: SortOrderInput | SortOrder
    sms_login_attempts?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type NotificationsWhereUniqueInput = Prisma.AtLeast<{
    notifications_id?: number
    customer_id?: number
    AND?: NotificationsWhereInput | NotificationsWhereInput[]
    OR?: NotificationsWhereInput[]
    NOT?: NotificationsWhereInput | NotificationsWhereInput[]
    push_notifications_enabled?: BoolNullableFilter<"Notifications"> | boolean | null
    push_notify_login?: BoolNullableFilter<"Notifications"> | boolean | null
    notification_tone?: StringNullableFilter<"Notifications"> | string | null
    email_marketing?: BoolNullableFilter<"Notifications"> | boolean | null
    email_account_activity?: BoolNullableFilter<"Notifications"> | boolean | null
    email_newsletter?: BoolNullableFilter<"Notifications"> | boolean | null
    sms_password_changes?: BoolNullableFilter<"Notifications"> | boolean | null
    sms_login_attempts?: BoolNullableFilter<"Notifications"> | boolean | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
  }, "notifications_id" | "customer_id">

  export type NotificationsOrderByWithAggregationInput = {
    notifications_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    push_notifications_enabled?: SortOrderInput | SortOrder
    push_notify_login?: SortOrderInput | SortOrder
    notification_tone?: SortOrderInput | SortOrder
    email_marketing?: SortOrderInput | SortOrder
    email_account_activity?: SortOrderInput | SortOrder
    email_newsletter?: SortOrderInput | SortOrder
    sms_password_changes?: SortOrderInput | SortOrder
    sms_login_attempts?: SortOrderInput | SortOrder
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
    customer_id?: IntNullableWithAggregatesFilter<"Notifications"> | number | null
    push_notifications_enabled?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    push_notify_login?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    notification_tone?: StringNullableWithAggregatesFilter<"Notifications"> | string | null
    email_marketing?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    email_account_activity?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    email_newsletter?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    sms_password_changes?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
    sms_login_attempts?: BoolNullableWithAggregatesFilter<"Notifications"> | boolean | null
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
    tower_logs?: Tower_logsListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
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
    tower_logs?: tower_logsOrderByRelationAggregateInput
    customer?: CustomerOrderByWithRelationInput
    orders?: ordersOrderByWithRelationInput
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
    tower_logs?: Tower_logsListRelationFilter
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
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

  export type TelemetryWhereInput = {
    AND?: TelemetryWhereInput | TelemetryWhereInput[]
    OR?: TelemetryWhereInput[]
    NOT?: TelemetryWhereInput | TelemetryWhereInput[]
    id?: IntFilter<"Telemetry"> | number
    date_time?: DateTimeFilter<"Telemetry"> | Date | string
    tower_id?: IntFilter<"Telemetry"> | number
    humidity?: FloatNullableFilter<"Telemetry"> | number | null
    temperature?: FloatNullableFilter<"Telemetry"> | number | null
    pressure?: FloatNullableFilter<"Telemetry"> | number | null
    status?: IntNullableFilter<"Telemetry"> | number | null
    power_output?: FloatFilter<"Telemetry"> | number
    clouds?: BoolNullableFilter<"Telemetry"> | boolean | null
    solar_flux?: IntNullableFilter<"Telemetry"> | number | null
    angle?: FloatNullableFilter<"Telemetry"> | number | null
  }

  export type TelemetryOrderByWithRelationInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    pressure?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    power_output?: SortOrder
    clouds?: SortOrderInput | SortOrder
    solar_flux?: SortOrderInput | SortOrder
    angle?: SortOrderInput | SortOrder
  }

  export type TelemetryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TelemetryWhereInput | TelemetryWhereInput[]
    OR?: TelemetryWhereInput[]
    NOT?: TelemetryWhereInput | TelemetryWhereInput[]
    date_time?: DateTimeFilter<"Telemetry"> | Date | string
    tower_id?: IntFilter<"Telemetry"> | number
    humidity?: FloatNullableFilter<"Telemetry"> | number | null
    temperature?: FloatNullableFilter<"Telemetry"> | number | null
    pressure?: FloatNullableFilter<"Telemetry"> | number | null
    status?: IntNullableFilter<"Telemetry"> | number | null
    power_output?: FloatFilter<"Telemetry"> | number
    clouds?: BoolNullableFilter<"Telemetry"> | boolean | null
    solar_flux?: IntNullableFilter<"Telemetry"> | number | null
    angle?: FloatNullableFilter<"Telemetry"> | number | null
  }, "id">

  export type TelemetryOrderByWithAggregationInput = {
    id?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    humidity?: SortOrderInput | SortOrder
    temperature?: SortOrderInput | SortOrder
    pressure?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    power_output?: SortOrder
    clouds?: SortOrderInput | SortOrder
    solar_flux?: SortOrderInput | SortOrder
    angle?: SortOrderInput | SortOrder
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
    humidity?: FloatNullableWithAggregatesFilter<"Telemetry"> | number | null
    temperature?: FloatNullableWithAggregatesFilter<"Telemetry"> | number | null
    pressure?: FloatNullableWithAggregatesFilter<"Telemetry"> | number | null
    status?: IntNullableWithAggregatesFilter<"Telemetry"> | number | null
    power_output?: FloatWithAggregatesFilter<"Telemetry"> | number
    clouds?: BoolNullableWithAggregatesFilter<"Telemetry"> | boolean | null
    solar_flux?: IntNullableWithAggregatesFilter<"Telemetry"> | number | null
    angle?: FloatNullableWithAggregatesFilter<"Telemetry"> | number | null
  }

  export type energyWhereInput = {
    AND?: energyWhereInput | energyWhereInput[]
    OR?: energyWhereInput[]
    NOT?: energyWhereInput | energyWhereInput[]
    day?: IntFilter<"energy"> | number
    month?: IntFilter<"energy"> | number
    year?: IntFilter<"energy"> | number
    tower?: IntFilter<"energy"> | number
    energy?: FloatNullableFilter<"energy"> | number | null
    id?: IntFilter<"energy"> | number
  }

  export type energyOrderByWithRelationInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrderInput | SortOrder
    id?: SortOrder
  }

  export type energyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: energyWhereInput | energyWhereInput[]
    OR?: energyWhereInput[]
    NOT?: energyWhereInput | energyWhereInput[]
    day?: IntFilter<"energy"> | number
    month?: IntFilter<"energy"> | number
    year?: IntFilter<"energy"> | number
    tower?: IntFilter<"energy"> | number
    energy?: FloatNullableFilter<"energy"> | number | null
  }, "id">

  export type energyOrderByWithAggregationInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrderInput | SortOrder
    id?: SortOrder
    _count?: energyCountOrderByAggregateInput
    _avg?: energyAvgOrderByAggregateInput
    _max?: energyMaxOrderByAggregateInput
    _min?: energyMinOrderByAggregateInput
    _sum?: energySumOrderByAggregateInput
  }

  export type energyScalarWhereWithAggregatesInput = {
    AND?: energyScalarWhereWithAggregatesInput | energyScalarWhereWithAggregatesInput[]
    OR?: energyScalarWhereWithAggregatesInput[]
    NOT?: energyScalarWhereWithAggregatesInput | energyScalarWhereWithAggregatesInput[]
    day?: IntWithAggregatesFilter<"energy"> | number
    month?: IntWithAggregatesFilter<"energy"> | number
    year?: IntWithAggregatesFilter<"energy"> | number
    tower?: IntWithAggregatesFilter<"energy"> | number
    energy?: FloatNullableWithAggregatesFilter<"energy"> | number | null
    id?: IntWithAggregatesFilter<"energy"> | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    customer_id?: IntFilter<"orders"> | number
    tower_count?: IntFilter<"orders"> | number
    address_id?: IntFilter<"orders"> | number
    price?: IntFilter<"orders"> | number
    currency?: StringFilter<"orders"> | string
    state?: StringFilter<"orders"> | string
    date_time?: DateTimeFilter<"orders"> | Date | string
    payment_received?: BoolFilter<"orders"> | boolean
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    towers?: TowersListRelationFilter
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    state?: SortOrder
    date_time?: SortOrder
    payment_received?: SortOrder
    customers?: CustomerOrderByWithRelationInput
    towers?: TowersOrderByRelationAggregateInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_id?: IntFilter<"orders"> | number
    tower_count?: IntFilter<"orders"> | number
    address_id?: IntFilter<"orders"> | number
    price?: IntFilter<"orders"> | number
    currency?: StringFilter<"orders"> | string
    state?: StringFilter<"orders"> | string
    date_time?: DateTimeFilter<"orders"> | Date | string
    payment_received?: BoolFilter<"orders"> | boolean
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    towers?: TowersListRelationFilter
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    state?: SortOrder
    date_time?: SortOrder
    payment_received?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    customer_id?: IntWithAggregatesFilter<"orders"> | number
    tower_count?: IntWithAggregatesFilter<"orders"> | number
    address_id?: IntWithAggregatesFilter<"orders"> | number
    price?: IntWithAggregatesFilter<"orders"> | number
    currency?: StringWithAggregatesFilter<"orders"> | string
    state?: StringWithAggregatesFilter<"orders"> | string
    date_time?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    payment_received?: BoolWithAggregatesFilter<"orders"> | boolean
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

  export type tower_logsWhereInput = {
    AND?: tower_logsWhereInput | tower_logsWhereInput[]
    OR?: tower_logsWhereInput[]
    NOT?: tower_logsWhereInput | tower_logsWhereInput[]
    id?: IntFilter<"tower_logs"> | number
    customer_id?: IntFilter<"tower_logs"> | number
    type?: StringFilter<"tower_logs"> | string
    message?: StringFilter<"tower_logs"> | string
    date_time?: DateTimeFilter<"tower_logs"> | Date | string
    tower_id?: IntNullableFilter<"tower_logs"> | number | null
    closed?: BoolFilter<"tower_logs"> | boolean
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    towers?: XOR<TowersNullableScalarRelationFilter, TowersWhereInput> | null
  }

  export type tower_logsOrderByWithRelationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrderInput | SortOrder
    closed?: SortOrder
    customers?: CustomerOrderByWithRelationInput
    towers?: TowersOrderByWithRelationInput
  }

  export type tower_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tower_logsWhereInput | tower_logsWhereInput[]
    OR?: tower_logsWhereInput[]
    NOT?: tower_logsWhereInput | tower_logsWhereInput[]
    customer_id?: IntFilter<"tower_logs"> | number
    type?: StringFilter<"tower_logs"> | string
    message?: StringFilter<"tower_logs"> | string
    date_time?: DateTimeFilter<"tower_logs"> | Date | string
    tower_id?: IntNullableFilter<"tower_logs"> | number | null
    closed?: BoolFilter<"tower_logs"> | boolean
    customers?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    towers?: XOR<TowersNullableScalarRelationFilter, TowersWhereInput> | null
  }, "id">

  export type tower_logsOrderByWithAggregationInput = {
    id?: SortOrder
    customer_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrderInput | SortOrder
    closed?: SortOrder
    _count?: tower_logsCountOrderByAggregateInput
    _avg?: tower_logsAvgOrderByAggregateInput
    _max?: tower_logsMaxOrderByAggregateInput
    _min?: tower_logsMinOrderByAggregateInput
    _sum?: tower_logsSumOrderByAggregateInput
  }

  export type tower_logsScalarWhereWithAggregatesInput = {
    AND?: tower_logsScalarWhereWithAggregatesInput | tower_logsScalarWhereWithAggregatesInput[]
    OR?: tower_logsScalarWhereWithAggregatesInput[]
    NOT?: tower_logsScalarWhereWithAggregatesInput | tower_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tower_logs"> | number
    customer_id?: IntWithAggregatesFilter<"tower_logs"> | number
    type?: StringWithAggregatesFilter<"tower_logs"> | string
    message?: StringWithAggregatesFilter<"tower_logs"> | string
    date_time?: DateTimeWithAggregatesFilter<"tower_logs"> | Date | string
    tower_id?: IntNullableWithAggregatesFilter<"tower_logs"> | number | null
    closed?: BoolWithAggregatesFilter<"tower_logs"> | boolean
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
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

  export type CustomerCreateInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type NotificationsCreateInput = {
    push_notifications_enabled?: boolean | null
    push_notify_login?: boolean | null
    notification_tone?: string | null
    email_marketing?: boolean | null
    email_account_activity?: boolean | null
    email_newsletter?: boolean | null
    sms_password_changes?: boolean | null
    sms_login_attempts?: boolean | null
    customer?: CustomerCreateNestedOneWithoutNotificationInput
  }

  export type NotificationsUncheckedCreateInput = {
    notifications_id?: number
    customer_id?: number | null
    push_notifications_enabled?: boolean | null
    push_notify_login?: boolean | null
    notification_tone?: string | null
    email_marketing?: boolean | null
    email_account_activity?: boolean | null
    email_newsletter?: boolean | null
    sms_password_changes?: boolean | null
    sms_login_attempts?: boolean | null
  }

  export type NotificationsUpdateInput = {
    push_notifications_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    push_notify_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_tone?: NullableStringFieldUpdateOperationsInput | string | null
    email_marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_account_activity?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_newsletter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_password_changes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_login_attempts?: NullableBoolFieldUpdateOperationsInput | boolean | null
    customer?: CustomerUpdateOneWithoutNotificationNestedInput
  }

  export type NotificationsUncheckedUpdateInput = {
    notifications_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    push_notifications_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    push_notify_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_tone?: NullableStringFieldUpdateOperationsInput | string | null
    email_marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_account_activity?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_newsletter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_password_changes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_login_attempts?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationsCreateManyInput = {
    notifications_id?: number
    customer_id?: number | null
    push_notifications_enabled?: boolean | null
    push_notify_login?: boolean | null
    notification_tone?: string | null
    email_marketing?: boolean | null
    email_account_activity?: boolean | null
    email_newsletter?: boolean | null
    sms_password_changes?: boolean | null
    sms_login_attempts?: boolean | null
  }

  export type NotificationsUpdateManyMutationInput = {
    push_notifications_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    push_notify_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_tone?: NullableStringFieldUpdateOperationsInput | string | null
    email_marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_account_activity?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_newsletter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_password_changes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_login_attempts?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationsUncheckedUpdateManyInput = {
    notifications_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    push_notifications_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    push_notify_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_tone?: NullableStringFieldUpdateOperationsInput | string | null
    email_marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_account_activity?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_newsletter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_password_changes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_login_attempts?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type TowersCreateInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsCreateNestedManyWithoutTowersInput
    customer: CustomerCreateNestedOneWithoutTowerInput
    orders: ordersCreateNestedOneWithoutTowersInput
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
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutTowersInput
  }

  export type TowersUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsUpdateManyWithoutTowersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
    orders?: ordersUpdateOneRequiredWithoutTowersNestedInput
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
    tower_logs?: tower_logsUncheckedUpdateManyWithoutTowersNestedInput
  }

  export type TowersCreateManyInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group: number
    error_state: number
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

  export type TelemetryCreateInput = {
    date_time?: Date | string
    tower_id: number
    humidity?: number | null
    temperature?: number | null
    pressure?: number | null
    status?: number | null
    power_output: number
    clouds?: boolean | null
    solar_flux?: number | null
    angle?: number | null
  }

  export type TelemetryUncheckedCreateInput = {
    id?: number
    date_time?: Date | string
    tower_id: number
    humidity?: number | null
    temperature?: number | null
    pressure?: number | null
    status?: number | null
    power_output: number
    clouds?: boolean | null
    solar_flux?: number | null
    angle?: number | null
  }

  export type TelemetryUpdateInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: IntFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    power_output?: FloatFieldUpdateOperationsInput | number
    clouds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    solar_flux?: NullableIntFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TelemetryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: IntFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    power_output?: FloatFieldUpdateOperationsInput | number
    clouds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    solar_flux?: NullableIntFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TelemetryCreateManyInput = {
    id?: number
    date_time?: Date | string
    tower_id: number
    humidity?: number | null
    temperature?: number | null
    pressure?: number | null
    status?: number | null
    power_output: number
    clouds?: boolean | null
    solar_flux?: number | null
    angle?: number | null
  }

  export type TelemetryUpdateManyMutationInput = {
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: IntFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    power_output?: FloatFieldUpdateOperationsInput | number
    clouds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    solar_flux?: NullableIntFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type TelemetryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: IntFieldUpdateOperationsInput | number
    humidity?: NullableFloatFieldUpdateOperationsInput | number | null
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    pressure?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableIntFieldUpdateOperationsInput | number | null
    power_output?: FloatFieldUpdateOperationsInput | number
    clouds?: NullableBoolFieldUpdateOperationsInput | boolean | null
    solar_flux?: NullableIntFieldUpdateOperationsInput | number | null
    angle?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type energyCreateInput = {
    day: number
    month: number
    year: number
    tower: number
    energy?: number | null
  }

  export type energyUncheckedCreateInput = {
    day: number
    month: number
    year: number
    tower: number
    energy?: number | null
    id?: number
  }

  export type energyUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tower?: IntFieldUpdateOperationsInput | number
    energy?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type energyUncheckedUpdateInput = {
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tower?: IntFieldUpdateOperationsInput | number
    energy?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type energyCreateManyInput = {
    day: number
    month: number
    year: number
    tower: number
    energy?: number | null
    id?: number
  }

  export type energyUpdateManyMutationInput = {
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tower?: IntFieldUpdateOperationsInput | number
    energy?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type energyUncheckedUpdateManyInput = {
    day?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    tower?: IntFieldUpdateOperationsInput | number
    energy?: NullableFloatFieldUpdateOperationsInput | number | null
    id?: IntFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
    customers: CustomerCreateNestedOneWithoutOrdersInput
    towers?: TowersCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    customer_id: number
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
    towers?: TowersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
    towers?: TowersUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
    towers?: TowersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    customer_id: number
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
  }

  export type ordersUpdateManyMutationInput = {
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
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

  export type tower_logsCreateInput = {
    id: number
    type: string
    message: string
    date_time?: Date | string
    closed: boolean
    customers: CustomerCreateNestedOneWithoutTower_logsInput
    towers?: TowersCreateNestedOneWithoutTower_logsInput
  }

  export type tower_logsUncheckedCreateInput = {
    id: number
    customer_id: number
    type: string
    message: string
    date_time?: Date | string
    tower_id?: number | null
    closed: boolean
  }

  export type tower_logsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateOneRequiredWithoutTower_logsNestedInput
    towers?: TowersUpdateOneWithoutTower_logsNestedInput
  }

  export type tower_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: NullableIntFieldUpdateOperationsInput | number | null
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tower_logsCreateManyInput = {
    id: number
    customer_id: number
    type: string
    message: string
    date_time?: Date | string
    tower_id?: number | null
    closed: boolean
  }

  export type tower_logsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tower_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: NullableIntFieldUpdateOperationsInput | number | null
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type usersCreateInput = {
    name: string
    email: string
  }

  export type usersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
  }

  export type usersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usersCreateManyInput = {
    id?: number
    name: string
    email: string
  }

  export type usersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
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

  export type Customer_systemListRelationFilter = {
    every?: customer_systemWhereInput
    some?: customer_systemWhereInput
    none?: customer_systemWhereInput
  }

  export type NotificationsNullableScalarRelationFilter = {
    is?: NotificationsWhereInput | null
    isNot?: NotificationsWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
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

  export type Tower_logsListRelationFilter = {
    every?: tower_logsWhereInput
    some?: tower_logsWhereInput
    none?: tower_logsWhereInput
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

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type software_ticketsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tower_logsOrderByRelationAggregateInput = {
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
    country_code?: SortOrder
    phone_number?: SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrder
    role?: SortOrder
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
    country_code?: SortOrder
    phone_number?: SortOrder
    customer_type?: SortOrder
    password_hash?: SortOrder
    plan_tier?: SortOrder
    role?: SortOrder
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
    plan_tier?: SortOrder
    role?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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
    api_key?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    api_key?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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
    api_key?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
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

  export type energyCountOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrder
    id?: SortOrder
  }

  export type energyAvgOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrder
    id?: SortOrder
  }

  export type energyMaxOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrder
    id?: SortOrder
  }

  export type energyMinOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrder
    id?: SortOrder
  }

  export type energySumOrderByAggregateInput = {
    day?: SortOrder
    month?: SortOrder
    year?: SortOrder
    tower?: SortOrder
    energy?: SortOrder
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    state?: SortOrder
    date_time?: SortOrder
    payment_received?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    state?: SortOrder
    date_time?: SortOrder
    payment_received?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    state?: SortOrder
    date_time?: SortOrder
    payment_received?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_count?: SortOrder
    address_id?: SortOrder
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TowersNullableScalarRelationFilter = {
    is?: TowersWhereInput | null
    isNot?: TowersWhereInput | null
  }

  export type tower_logsCountOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    closed?: SortOrder
  }

  export type tower_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_id?: SortOrder
  }

  export type tower_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    closed?: SortOrder
  }

  export type tower_logsMinOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    type?: SortOrder
    message?: SortOrder
    date_time?: SortOrder
    tower_id?: SortOrder
    closed?: SortOrder
  }

  export type tower_logsSumOrderByAggregateInput = {
    id?: SortOrder
    customer_id?: SortOrder
    tower_id?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type customer_systemCreateNestedManyWithoutCustomersInput = {
    create?: XOR<customer_systemCreateWithoutCustomersInput, customer_systemUncheckedCreateWithoutCustomersInput> | customer_systemCreateWithoutCustomersInput[] | customer_systemUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: customer_systemCreateOrConnectWithoutCustomersInput | customer_systemCreateOrConnectWithoutCustomersInput[]
    createMany?: customer_systemCreateManyCustomersInputEnvelope
    connect?: customer_systemWhereUniqueInput | customer_systemWhereUniqueInput[]
  }

  export type NotificationsCreateNestedOneWithoutCustomerInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    connect?: NotificationsWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
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

  export type tower_logsCreateNestedManyWithoutCustomersInput = {
    create?: XOR<tower_logsCreateWithoutCustomersInput, tower_logsUncheckedCreateWithoutCustomersInput> | tower_logsCreateWithoutCustomersInput[] | tower_logsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutCustomersInput | tower_logsCreateOrConnectWithoutCustomersInput[]
    createMany?: tower_logsCreateManyCustomersInputEnvelope
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
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

  export type NotificationsUncheckedCreateNestedOneWithoutCustomerInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    connect?: NotificationsWhereUniqueInput
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
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

  export type tower_logsUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<tower_logsCreateWithoutCustomersInput, tower_logsUncheckedCreateWithoutCustomersInput> | tower_logsCreateWithoutCustomersInput[] | tower_logsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutCustomersInput | tower_logsCreateOrConnectWithoutCustomersInput[]
    createMany?: tower_logsCreateManyCustomersInputEnvelope
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
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

  export type NotificationsUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    upsert?: NotificationsUpsertWithoutCustomerInput
    disconnect?: NotificationsWhereInput | boolean
    delete?: NotificationsWhereInput | boolean
    connect?: NotificationsWhereUniqueInput
    update?: XOR<XOR<NotificationsUpdateToOneWithWhereWithoutCustomerInput, NotificationsUpdateWithoutCustomerInput>, NotificationsUncheckedUpdateWithoutCustomerInput>
  }

  export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
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

  export type tower_logsUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<tower_logsCreateWithoutCustomersInput, tower_logsUncheckedCreateWithoutCustomersInput> | tower_logsCreateWithoutCustomersInput[] | tower_logsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutCustomersInput | tower_logsCreateOrConnectWithoutCustomersInput[]
    upsert?: tower_logsUpsertWithWhereUniqueWithoutCustomersInput | tower_logsUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: tower_logsCreateManyCustomersInputEnvelope
    set?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    disconnect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    delete?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    update?: tower_logsUpdateWithWhereUniqueWithoutCustomersInput | tower_logsUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: tower_logsUpdateManyWithWhereWithoutCustomersInput | tower_logsUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: tower_logsScalarWhereInput | tower_logsScalarWhereInput[]
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

  export type NotificationsUncheckedUpdateOneWithoutCustomerNestedInput = {
    create?: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: NotificationsCreateOrConnectWithoutCustomerInput
    upsert?: NotificationsUpsertWithoutCustomerInput
    disconnect?: NotificationsWhereInput | boolean
    delete?: NotificationsWhereInput | boolean
    connect?: NotificationsWhereUniqueInput
    update?: XOR<XOR<NotificationsUpdateToOneWithWhereWithoutCustomerInput, NotificationsUpdateWithoutCustomerInput>, NotificationsUncheckedUpdateWithoutCustomerInput>
  }

  export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
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

  export type tower_logsUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<tower_logsCreateWithoutCustomersInput, tower_logsUncheckedCreateWithoutCustomersInput> | tower_logsCreateWithoutCustomersInput[] | tower_logsUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutCustomersInput | tower_logsCreateOrConnectWithoutCustomersInput[]
    upsert?: tower_logsUpsertWithWhereUniqueWithoutCustomersInput | tower_logsUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: tower_logsCreateManyCustomersInputEnvelope
    set?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    disconnect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    delete?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    update?: tower_logsUpdateWithWhereUniqueWithoutCustomersInput | tower_logsUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: tower_logsUpdateManyWithWhereWithoutCustomersInput | tower_logsUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: tower_logsScalarWhereInput | tower_logsScalarWhereInput[]
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

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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

  export type CustomerCreateNestedOneWithoutNotificationInput = {
    create?: XOR<CustomerCreateWithoutNotificationInput, CustomerUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutNotificationInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneWithoutNotificationNestedInput = {
    create?: XOR<CustomerCreateWithoutNotificationInput, CustomerUncheckedCreateWithoutNotificationInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutNotificationInput
    upsert?: CustomerUpsertWithoutNotificationInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutNotificationInput, CustomerUpdateWithoutNotificationInput>, CustomerUncheckedUpdateWithoutNotificationInput>
  }

  export type tower_logsCreateNestedManyWithoutTowersInput = {
    create?: XOR<tower_logsCreateWithoutTowersInput, tower_logsUncheckedCreateWithoutTowersInput> | tower_logsCreateWithoutTowersInput[] | tower_logsUncheckedCreateWithoutTowersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutTowersInput | tower_logsCreateOrConnectWithoutTowersInput[]
    createMany?: tower_logsCreateManyTowersInputEnvelope
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
  }

  export type CustomerCreateNestedOneWithoutTowerInput = {
    create?: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTowerInput
    connect?: CustomerWhereUniqueInput
  }

  export type ordersCreateNestedOneWithoutTowersInput = {
    create?: XOR<ordersCreateWithoutTowersInput, ordersUncheckedCreateWithoutTowersInput>
    connectOrCreate?: ordersCreateOrConnectWithoutTowersInput
    connect?: ordersWhereUniqueInput
  }

  export type SystemsCreateNestedOneWithoutTowersInput = {
    create?: XOR<SystemsCreateWithoutTowersInput, SystemsUncheckedCreateWithoutTowersInput>
    connectOrCreate?: SystemsCreateOrConnectWithoutTowersInput
    connect?: SystemsWhereUniqueInput
  }

  export type tower_logsUncheckedCreateNestedManyWithoutTowersInput = {
    create?: XOR<tower_logsCreateWithoutTowersInput, tower_logsUncheckedCreateWithoutTowersInput> | tower_logsCreateWithoutTowersInput[] | tower_logsUncheckedCreateWithoutTowersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutTowersInput | tower_logsCreateOrConnectWithoutTowersInput[]
    createMany?: tower_logsCreateManyTowersInputEnvelope
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
  }

  export type tower_logsUpdateManyWithoutTowersNestedInput = {
    create?: XOR<tower_logsCreateWithoutTowersInput, tower_logsUncheckedCreateWithoutTowersInput> | tower_logsCreateWithoutTowersInput[] | tower_logsUncheckedCreateWithoutTowersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutTowersInput | tower_logsCreateOrConnectWithoutTowersInput[]
    upsert?: tower_logsUpsertWithWhereUniqueWithoutTowersInput | tower_logsUpsertWithWhereUniqueWithoutTowersInput[]
    createMany?: tower_logsCreateManyTowersInputEnvelope
    set?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    disconnect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    delete?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    update?: tower_logsUpdateWithWhereUniqueWithoutTowersInput | tower_logsUpdateWithWhereUniqueWithoutTowersInput[]
    updateMany?: tower_logsUpdateManyWithWhereWithoutTowersInput | tower_logsUpdateManyWithWhereWithoutTowersInput[]
    deleteMany?: tower_logsScalarWhereInput | tower_logsScalarWhereInput[]
  }

  export type CustomerUpdateOneRequiredWithoutTowerNestedInput = {
    create?: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTowerInput
    upsert?: CustomerUpsertWithoutTowerInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTowerInput, CustomerUpdateWithoutTowerInput>, CustomerUncheckedUpdateWithoutTowerInput>
  }

  export type ordersUpdateOneRequiredWithoutTowersNestedInput = {
    create?: XOR<ordersCreateWithoutTowersInput, ordersUncheckedCreateWithoutTowersInput>
    connectOrCreate?: ordersCreateOrConnectWithoutTowersInput
    upsert?: ordersUpsertWithoutTowersInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutTowersInput, ordersUpdateWithoutTowersInput>, ordersUncheckedUpdateWithoutTowersInput>
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

  export type tower_logsUncheckedUpdateManyWithoutTowersNestedInput = {
    create?: XOR<tower_logsCreateWithoutTowersInput, tower_logsUncheckedCreateWithoutTowersInput> | tower_logsCreateWithoutTowersInput[] | tower_logsUncheckedCreateWithoutTowersInput[]
    connectOrCreate?: tower_logsCreateOrConnectWithoutTowersInput | tower_logsCreateOrConnectWithoutTowersInput[]
    upsert?: tower_logsUpsertWithWhereUniqueWithoutTowersInput | tower_logsUpsertWithWhereUniqueWithoutTowersInput[]
    createMany?: tower_logsCreateManyTowersInputEnvelope
    set?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    disconnect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    delete?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    connect?: tower_logsWhereUniqueInput | tower_logsWhereUniqueInput[]
    update?: tower_logsUpdateWithWhereUniqueWithoutTowersInput | tower_logsUpdateWithWhereUniqueWithoutTowersInput[]
    updateMany?: tower_logsUpdateManyWithWhereWithoutTowersInput | tower_logsUpdateManyWithWhereWithoutTowersInput[]
    deleteMany?: tower_logsScalarWhereInput | tower_logsScalarWhereInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
  }

  export type TowersCreateNestedManyWithoutOrdersInput = {
    create?: XOR<TowersCreateWithoutOrdersInput, TowersUncheckedCreateWithoutOrdersInput> | TowersCreateWithoutOrdersInput[] | TowersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutOrdersInput | TowersCreateOrConnectWithoutOrdersInput[]
    createMany?: TowersCreateManyOrdersInputEnvelope
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
  }

  export type TowersUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<TowersCreateWithoutOrdersInput, TowersUncheckedCreateWithoutOrdersInput> | TowersCreateWithoutOrdersInput[] | TowersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutOrdersInput | TowersCreateOrConnectWithoutOrdersInput[]
    createMany?: TowersCreateManyOrdersInputEnvelope
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CustomerUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutOrdersInput
    upsert?: CustomerUpsertWithoutOrdersInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutOrdersInput, CustomerUpdateWithoutOrdersInput>, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type TowersUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<TowersCreateWithoutOrdersInput, TowersUncheckedCreateWithoutOrdersInput> | TowersCreateWithoutOrdersInput[] | TowersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutOrdersInput | TowersCreateOrConnectWithoutOrdersInput[]
    upsert?: TowersUpsertWithWhereUniqueWithoutOrdersInput | TowersUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: TowersCreateManyOrdersInputEnvelope
    set?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    disconnect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    delete?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    update?: TowersUpdateWithWhereUniqueWithoutOrdersInput | TowersUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: TowersUpdateManyWithWhereWithoutOrdersInput | TowersUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: TowersScalarWhereInput | TowersScalarWhereInput[]
  }

  export type TowersUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<TowersCreateWithoutOrdersInput, TowersUncheckedCreateWithoutOrdersInput> | TowersCreateWithoutOrdersInput[] | TowersUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: TowersCreateOrConnectWithoutOrdersInput | TowersCreateOrConnectWithoutOrdersInput[]
    upsert?: TowersUpsertWithWhereUniqueWithoutOrdersInput | TowersUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: TowersCreateManyOrdersInputEnvelope
    set?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    disconnect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    delete?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    connect?: TowersWhereUniqueInput | TowersWhereUniqueInput[]
    update?: TowersUpdateWithWhereUniqueWithoutOrdersInput | TowersUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: TowersUpdateManyWithWhereWithoutOrdersInput | TowersUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: TowersScalarWhereInput | TowersScalarWhereInput[]
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

  export type CustomerCreateNestedOneWithoutTower_logsInput = {
    create?: XOR<CustomerCreateWithoutTower_logsInput, CustomerUncheckedCreateWithoutTower_logsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTower_logsInput
    connect?: CustomerWhereUniqueInput
  }

  export type TowersCreateNestedOneWithoutTower_logsInput = {
    create?: XOR<TowersCreateWithoutTower_logsInput, TowersUncheckedCreateWithoutTower_logsInput>
    connectOrCreate?: TowersCreateOrConnectWithoutTower_logsInput
    connect?: TowersWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutTower_logsNestedInput = {
    create?: XOR<CustomerCreateWithoutTower_logsInput, CustomerUncheckedCreateWithoutTower_logsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutTower_logsInput
    upsert?: CustomerUpsertWithoutTower_logsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutTower_logsInput, CustomerUpdateWithoutTower_logsInput>, CustomerUncheckedUpdateWithoutTower_logsInput>
  }

  export type TowersUpdateOneWithoutTower_logsNestedInput = {
    create?: XOR<TowersCreateWithoutTower_logsInput, TowersUncheckedCreateWithoutTower_logsInput>
    connectOrCreate?: TowersCreateOrConnectWithoutTower_logsInput
    upsert?: TowersUpsertWithoutTower_logsInput
    disconnect?: TowersWhereInput | boolean
    delete?: TowersWhereInput | boolean
    connect?: TowersWhereUniqueInput
    update?: XOR<XOR<TowersUpdateToOneWithWhereWithoutTower_logsInput, TowersUpdateWithoutTower_logsInput>, TowersUncheckedUpdateWithoutTower_logsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NotificationsCreateWithoutCustomerInput = {
    push_notifications_enabled?: boolean | null
    push_notify_login?: boolean | null
    notification_tone?: string | null
    email_marketing?: boolean | null
    email_account_activity?: boolean | null
    email_newsletter?: boolean | null
    sms_password_changes?: boolean | null
    sms_login_attempts?: boolean | null
  }

  export type NotificationsUncheckedCreateWithoutCustomerInput = {
    notifications_id?: number
    push_notifications_enabled?: boolean | null
    push_notify_login?: boolean | null
    notification_tone?: string | null
    email_marketing?: boolean | null
    email_account_activity?: boolean | null
    email_newsletter?: boolean | null
    sms_password_changes?: boolean | null
    sms_login_attempts?: boolean | null
  }

  export type NotificationsCreateOrConnectWithoutCustomerInput = {
    where: NotificationsWhereUniqueInput
    create: XOR<NotificationsCreateWithoutCustomerInput, NotificationsUncheckedCreateWithoutCustomerInput>
  }

  export type ordersCreateWithoutCustomersInput = {
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
    towers?: TowersCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutCustomersInput = {
    id?: number
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
    towers?: TowersUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersCreateManyCustomersInputEnvelope = {
    data: ordersCreateManyCustomersInput | ordersCreateManyCustomersInput[]
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

  export type tower_logsCreateWithoutCustomersInput = {
    id: number
    type: string
    message: string
    date_time?: Date | string
    closed: boolean
    towers?: TowersCreateNestedOneWithoutTower_logsInput
  }

  export type tower_logsUncheckedCreateWithoutCustomersInput = {
    id: number
    type: string
    message: string
    date_time?: Date | string
    tower_id?: number | null
    closed: boolean
  }

  export type tower_logsCreateOrConnectWithoutCustomersInput = {
    where: tower_logsWhereUniqueInput
    create: XOR<tower_logsCreateWithoutCustomersInput, tower_logsUncheckedCreateWithoutCustomersInput>
  }

  export type tower_logsCreateManyCustomersInputEnvelope = {
    data: tower_logsCreateManyCustomersInput | tower_logsCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type TowersCreateWithoutCustomerInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsCreateNestedManyWithoutTowersInput
    orders: ordersCreateNestedOneWithoutTowersInput
    system?: SystemsCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateWithoutCustomerInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutTowersInput
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
    push_notifications_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    push_notify_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_tone?: NullableStringFieldUpdateOperationsInput | string | null
    email_marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_account_activity?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_newsletter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_password_changes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_login_attempts?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type NotificationsUncheckedUpdateWithoutCustomerInput = {
    notifications_id?: IntFieldUpdateOperationsInput | number
    push_notifications_enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    push_notify_login?: NullableBoolFieldUpdateOperationsInput | boolean | null
    notification_tone?: NullableStringFieldUpdateOperationsInput | string | null
    email_marketing?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_account_activity?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_newsletter?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_password_changes?: NullableBoolFieldUpdateOperationsInput | boolean | null
    sms_login_attempts?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    customer_id?: IntFilter<"orders"> | number
    tower_count?: IntFilter<"orders"> | number
    address_id?: IntFilter<"orders"> | number
    price?: IntFilter<"orders"> | number
    currency?: StringFilter<"orders"> | string
    state?: StringFilter<"orders"> | string
    date_time?: DateTimeFilter<"orders"> | Date | string
    payment_received?: BoolFilter<"orders"> | boolean
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

  export type tower_logsUpsertWithWhereUniqueWithoutCustomersInput = {
    where: tower_logsWhereUniqueInput
    update: XOR<tower_logsUpdateWithoutCustomersInput, tower_logsUncheckedUpdateWithoutCustomersInput>
    create: XOR<tower_logsCreateWithoutCustomersInput, tower_logsUncheckedCreateWithoutCustomersInput>
  }

  export type tower_logsUpdateWithWhereUniqueWithoutCustomersInput = {
    where: tower_logsWhereUniqueInput
    data: XOR<tower_logsUpdateWithoutCustomersInput, tower_logsUncheckedUpdateWithoutCustomersInput>
  }

  export type tower_logsUpdateManyWithWhereWithoutCustomersInput = {
    where: tower_logsScalarWhereInput
    data: XOR<tower_logsUpdateManyMutationInput, tower_logsUncheckedUpdateManyWithoutCustomersInput>
  }

  export type tower_logsScalarWhereInput = {
    AND?: tower_logsScalarWhereInput | tower_logsScalarWhereInput[]
    OR?: tower_logsScalarWhereInput[]
    NOT?: tower_logsScalarWhereInput | tower_logsScalarWhereInput[]
    id?: IntFilter<"tower_logs"> | number
    customer_id?: IntFilter<"tower_logs"> | number
    type?: StringFilter<"tower_logs"> | string
    message?: StringFilter<"tower_logs"> | string
    date_time?: DateTimeFilter<"tower_logs"> | Date | string
    tower_id?: IntNullableFilter<"tower_logs"> | number | null
    closed?: BoolFilter<"tower_logs"> | boolean
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
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSettingInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
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
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSettingInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
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
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsCreateNestedManyWithoutTowersInput
    customer: CustomerCreateNestedOneWithoutTowerInput
    orders: ordersCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateWithoutSystemInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutTowersInput
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

  export type CustomerCreateWithoutNotificationInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutNotificationInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
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
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutNotificationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type tower_logsCreateWithoutTowersInput = {
    id: number
    type: string
    message: string
    date_time?: Date | string
    closed: boolean
    customers: CustomerCreateNestedOneWithoutTower_logsInput
  }

  export type tower_logsUncheckedCreateWithoutTowersInput = {
    id: number
    customer_id: number
    type: string
    message: string
    date_time?: Date | string
    closed: boolean
  }

  export type tower_logsCreateOrConnectWithoutTowersInput = {
    where: tower_logsWhereUniqueInput
    create: XOR<tower_logsCreateWithoutTowersInput, tower_logsUncheckedCreateWithoutTowersInput>
  }

  export type tower_logsCreateManyTowersInputEnvelope = {
    data: tower_logsCreateManyTowersInput | tower_logsCreateManyTowersInput[]
    skipDuplicates?: boolean
  }

  export type CustomerCreateWithoutTowerInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
  }

  export type CustomerUncheckedCreateWithoutTowerInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type CustomerCreateOrConnectWithoutTowerInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTowerInput, CustomerUncheckedCreateWithoutTowerInput>
  }

  export type ordersCreateWithoutTowersInput = {
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
    customers: CustomerCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutTowersInput = {
    id?: number
    customer_id: number
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
  }

  export type ordersCreateOrConnectWithoutTowersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutTowersInput, ordersUncheckedCreateWithoutTowersInput>
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutSystemsInput
  }

  export type SystemsCreateOrConnectWithoutTowersInput = {
    where: SystemsWhereUniqueInput
    create: XOR<SystemsCreateWithoutTowersInput, SystemsUncheckedCreateWithoutTowersInput>
  }

  export type tower_logsUpsertWithWhereUniqueWithoutTowersInput = {
    where: tower_logsWhereUniqueInput
    update: XOR<tower_logsUpdateWithoutTowersInput, tower_logsUncheckedUpdateWithoutTowersInput>
    create: XOR<tower_logsCreateWithoutTowersInput, tower_logsUncheckedCreateWithoutTowersInput>
  }

  export type tower_logsUpdateWithWhereUniqueWithoutTowersInput = {
    where: tower_logsWhereUniqueInput
    data: XOR<tower_logsUpdateWithoutTowersInput, tower_logsUncheckedUpdateWithoutTowersInput>
  }

  export type tower_logsUpdateManyWithWhereWithoutTowersInput = {
    where: tower_logsScalarWhereInput
    data: XOR<tower_logsUpdateManyMutationInput, tower_logsUncheckedUpdateManyWithoutTowersInput>
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
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTowerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type ordersUpsertWithoutTowersInput = {
    update: XOR<ordersUpdateWithoutTowersInput, ordersUncheckedUpdateWithoutTowersInput>
    create: XOR<ordersCreateWithoutTowersInput, ordersUncheckedCreateWithoutTowersInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutTowersInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutTowersInput, ordersUncheckedUpdateWithoutTowersInput>
  }

  export type ordersUpdateWithoutTowersInput = {
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_system?: customer_systemUncheckedUpdateManyWithoutSystemsNestedInput
  }

  export type CustomerCreateWithoutOrdersInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutOrdersInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutOrdersInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
  }

  export type TowersCreateWithoutOrdersInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsCreateNestedManyWithoutTowersInput
    customer: CustomerCreateNestedOneWithoutTowerInput
    system?: SystemsCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateWithoutOrdersInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutTowersInput
  }

  export type TowersCreateOrConnectWithoutOrdersInput = {
    where: TowersWhereUniqueInput
    create: XOR<TowersCreateWithoutOrdersInput, TowersUncheckedCreateWithoutOrdersInput>
  }

  export type TowersCreateManyOrdersInputEnvelope = {
    data: TowersCreateManyOrdersInput | TowersCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutOrdersInput = {
    update: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
    create: XOR<CustomerCreateWithoutOrdersInput, CustomerUncheckedCreateWithoutOrdersInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutOrdersInput, CustomerUncheckedUpdateWithoutOrdersInput>
  }

  export type CustomerUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TowersUpsertWithWhereUniqueWithoutOrdersInput = {
    where: TowersWhereUniqueInput
    update: XOR<TowersUpdateWithoutOrdersInput, TowersUncheckedUpdateWithoutOrdersInput>
    create: XOR<TowersCreateWithoutOrdersInput, TowersUncheckedCreateWithoutOrdersInput>
  }

  export type TowersUpdateWithWhereUniqueWithoutOrdersInput = {
    where: TowersWhereUniqueInput
    data: XOR<TowersUpdateWithoutOrdersInput, TowersUncheckedUpdateWithoutOrdersInput>
  }

  export type TowersUpdateManyWithWhereWithoutOrdersInput = {
    where: TowersScalarWhereInput
    data: XOR<TowersUpdateManyMutationInput, TowersUncheckedUpdateManyWithoutOrdersInput>
  }

  export type CustomerCreateWithoutSoftware_ticketsInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSoftware_ticketsInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
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
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSoftware_ticketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateWithoutTower_logsInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemCreateNestedManyWithoutCustomersInput
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutTower_logsInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    customer_system?: customer_systemUncheckedCreateNestedManyWithoutCustomersInput
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower?: TowersUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutTower_logsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutTower_logsInput, CustomerUncheckedCreateWithoutTower_logsInput>
  }

  export type TowersCreateWithoutTower_logsInput = {
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    customer: CustomerCreateNestedOneWithoutTowerInput
    orders: ordersCreateNestedOneWithoutTowersInput
    system?: SystemsCreateNestedOneWithoutTowersInput
  }

  export type TowersUncheckedCreateWithoutTower_logsInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    order_id: number
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
  }

  export type TowersCreateOrConnectWithoutTower_logsInput = {
    where: TowersWhereUniqueInput
    create: XOR<TowersCreateWithoutTower_logsInput, TowersUncheckedCreateWithoutTower_logsInput>
  }

  export type CustomerUpsertWithoutTower_logsInput = {
    update: XOR<CustomerUpdateWithoutTower_logsInput, CustomerUncheckedUpdateWithoutTower_logsInput>
    create: XOR<CustomerCreateWithoutTower_logsInput, CustomerUncheckedCreateWithoutTower_logsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutTower_logsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutTower_logsInput, CustomerUncheckedUpdateWithoutTower_logsInput>
  }

  export type CustomerUpdateWithoutTower_logsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutTower_logsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    customer_system?: customer_systemUncheckedUpdateManyWithoutCustomersNestedInput
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower?: TowersUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type TowersUpsertWithoutTower_logsInput = {
    update: XOR<TowersUpdateWithoutTower_logsInput, TowersUncheckedUpdateWithoutTower_logsInput>
    create: XOR<TowersCreateWithoutTower_logsInput, TowersUncheckedCreateWithoutTower_logsInput>
    where?: TowersWhereInput
  }

  export type TowersUpdateToOneWithWhereWithoutTower_logsInput = {
    where?: TowersWhereInput
    data: XOR<TowersUpdateWithoutTower_logsInput, TowersUncheckedUpdateWithoutTower_logsInput>
  }

  export type TowersUpdateWithoutTower_logsInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
    orders?: ordersUpdateOneRequiredWithoutTowersNestedInput
    system?: SystemsUpdateOneWithoutTowersNestedInput
  }

  export type TowersUncheckedUpdateWithoutTower_logsInput = {
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

  export type CustomerCreateWithoutCustomer_systemInput = {
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    notification?: NotificationsCreateNestedOneWithoutCustomerInput
    orders?: ordersCreateNestedManyWithoutCustomersInput
    setting?: SettingsCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsCreateNestedManyWithoutCustomersInput
    tower?: TowersCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutCustomer_systemInput = {
    id?: number
    name: string
    email: string
    address_id?: number | null
    country_code?: string | null
    phone_number?: string | null
    customer_type: string
    password_hash: string
    plan_tier?: $Enums.plan_tier | null
    role?: $Enums.user_role | null
    notification?: NotificationsUncheckedCreateNestedOneWithoutCustomerInput
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
    setting?: SettingsUncheckedCreateNestedOneWithoutCustomerInput
    software_tickets?: software_ticketsUncheckedCreateNestedManyWithoutCustomersInput
    tower_logs?: tower_logsUncheckedCreateNestedManyWithoutCustomersInput
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
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
    api_key?: string | null
    latitude?: Decimal | DecimalJsLike | number | string
    longitude?: Decimal | DecimalJsLike | number | string
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
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    notification?: NotificationsUpdateOneWithoutCustomerNestedInput
    orders?: ordersUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUpdateManyWithoutCustomersNestedInput
    tower?: TowersUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutCustomer_systemInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address_id?: NullableIntFieldUpdateOperationsInput | number | null
    country_code?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    customer_type?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    plan_tier?: NullableEnumplan_tierFieldUpdateOperationsInput | $Enums.plan_tier | null
    role?: NullableEnumuser_roleFieldUpdateOperationsInput | $Enums.user_role | null
    notification?: NotificationsUncheckedUpdateOneWithoutCustomerNestedInput
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
    setting?: SettingsUncheckedUpdateOneWithoutCustomerNestedInput
    software_tickets?: software_ticketsUncheckedUpdateManyWithoutCustomersNestedInput
    tower_logs?: tower_logsUncheckedUpdateManyWithoutCustomersNestedInput
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
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
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    towers?: TowersUncheckedUpdateManyWithoutSystemNestedInput
  }

  export type customer_systemCreateManyCustomersInput = {
    system_id: number
    role?: string | null
  }

  export type ordersCreateManyCustomersInput = {
    id?: number
    tower_count: number
    address_id: number
    price: number
    currency: string
    state: string
    date_time: Date | string
    payment_received: boolean
  }

  export type software_ticketsCreateManyCustomersInput = {
    id?: number
    email: string
    subject: string
    message: string
    date_time?: Date | string
    handled: boolean
  }

  export type tower_logsCreateManyCustomersInput = {
    id: number
    type: string
    message: string
    date_time?: Date | string
    tower_id?: number | null
    closed: boolean
  }

  export type TowersCreateManyCustomerInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    order_id: number
    state?: number | null
    c_group: number
    error_state: number
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

  export type ordersUpdateWithoutCustomersInput = {
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
    towers?: TowersUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
    towers?: TowersUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tower_count?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    payment_received?: BoolFieldUpdateOperationsInput | boolean
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

  export type tower_logsUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    towers?: TowersUpdateOneWithoutTower_logsNestedInput
  }

  export type tower_logsUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: NullableIntFieldUpdateOperationsInput | number | null
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tower_logsUncheckedUpdateManyWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    tower_id?: NullableIntFieldUpdateOperationsInput | number | null
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TowersUpdateWithoutCustomerInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsUpdateManyWithoutTowersNestedInput
    orders?: ordersUpdateOneRequiredWithoutTowersNestedInput
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
    tower_logs?: tower_logsUncheckedUpdateManyWithoutTowersNestedInput
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
    c_group: number
    error_state: number
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
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsUpdateManyWithoutTowersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
    orders?: ordersUpdateOneRequiredWithoutTowersNestedInput
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
    tower_logs?: tower_logsUncheckedUpdateManyWithoutTowersNestedInput
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

  export type tower_logsCreateManyTowersInput = {
    id: number
    customer_id: number
    type: string
    message: string
    date_time?: Date | string
    closed: boolean
  }

  export type tower_logsUpdateWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
    customers?: CustomerUpdateOneRequiredWithoutTower_logsNestedInput
  }

  export type tower_logsUncheckedUpdateWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type tower_logsUncheckedUpdateManyWithoutTowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    customer_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date_time?: DateTimeFieldUpdateOperationsInput | Date | string
    closed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TowersCreateManyOrdersInput = {
    id?: number
    model: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    customer_id: number
    state?: number | null
    c_group: number
    error_state: number
    length: number
    height: number
    width: number
    software_version?: string | null
    current_angle?: Decimal | DecimalJsLike | number | string | null
    system_id?: number | null
  }

  export type TowersUpdateWithoutOrdersInput = {
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    tower_logs?: tower_logsUpdateManyWithoutTowersNestedInput
    customer?: CustomerUpdateOneRequiredWithoutTowerNestedInput
    system?: SystemsUpdateOneWithoutTowersNestedInput
  }

  export type TowersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    c_group?: IntFieldUpdateOperationsInput | number
    error_state?: IntFieldUpdateOperationsInput | number
    length?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    width?: IntFieldUpdateOperationsInput | number
    software_version?: NullableStringFieldUpdateOperationsInput | string | null
    current_angle?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    system_id?: NullableIntFieldUpdateOperationsInput | number | null
    tower_logs?: tower_logsUncheckedUpdateManyWithoutTowersNestedInput
  }

  export type TowersUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    customer_id?: IntFieldUpdateOperationsInput | number
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