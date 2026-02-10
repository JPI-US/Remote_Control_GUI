
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  address_id: 'address_id',
  country_code: 'country_code',
  phone_number: 'phone_number',
  customer_type: 'customer_type',
  password_hash: 'password_hash'
};

exports.Prisma.SettingsScalarFieldEnum = {
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

exports.Prisma.SystemsScalarFieldEnum = {
  id: 'id',
  system_name: 'system_name',
  inverter_type: 'inverter_type',
  customer_id: 'customer_id',
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

exports.Prisma.NotificationsScalarFieldEnum = {
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

exports.Prisma.TowersScalarFieldEnum = {
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

exports.Prisma.TelemetryScalarFieldEnum = {
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

exports.Prisma.EnergyScalarFieldEnum = {
  day: 'day',
  month: 'month',
  year: 'year',
  tower: 'tower',
  energy: 'energy',
  id: 'id'
};

exports.Prisma.OrdersScalarFieldEnum = {
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

exports.Prisma.Software_ticketsScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  email: 'email',
  subject: 'subject',
  message: 'message',
  date_time: 'date_time',
  handled: 'handled'
};

exports.Prisma.Tower_logsScalarFieldEnum = {
  id: 'id',
  customer_id: 'customer_id',
  type: 'type',
  message: 'message',
  date_time: 'date_time',
  tower_id: 'tower_id',
  closed: 'closed'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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
  users: 'users'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
