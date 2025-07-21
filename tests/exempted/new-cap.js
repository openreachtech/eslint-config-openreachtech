/**
 * DATE constructor.
 *
 * @class
 */
function DATE () {
  // noop
}

const date = DATE() // ✅ `new-cap`

/**
 * STRING constructor.
 *
 * @class
 */
function STRING () {
  // noop
}

const string = STRING() // ✅ `new-cap`

/**
 * TINYINT constructor.
 *
 * @class
 */
function TINYINT () {
  // noop
}

const tinyint = TINYINT() // ✅ `new-cap`

const Sequelize = {
  ABSTRACT: () => {},
  ARRAY: () => {},
  BIGINT: () => {},
  BLOB: () => {},
  BOOLEAN: () => {},
  CHAR: () => {},
  CIDR: () => {},
  CITEXT: () => {},
  DATE: () => {},
  DATEONLY: () => {},
  DECIMAL: () => {},
  DOUBLE: () => {},
  ENUM: () => {},
  FLOAT: () => {},
  GEOGRAPHY: () => {},
  GEOMETRY: () => {},
  HSTORE: () => {},
  INET: () => {},
  INTEGER: () => {},
  JSON: () => {},
  JSONB: () => {},
  MACADDR: () => {},
  MEDIUMINT: () => {},
  NOW: () => {},
  NUMBER: () => {},
  NUMERIC: () => {},
  RANGE: () => {},
  REAL: () => {},
  SMALLINT: () => {},
  STRING: () => {},
  TEXT: () => {},
  TIME: () => {},
  TINYINT: () => {},
  TSVECTOR: () => {},
  UUID: () => {},
  VIRTUAL: () => {},
}

Sequelize.ABSTRACT() // ✅ `new-cap`
Sequelize.ARRAY() // ✅ `new-cap`
Sequelize.BIGINT() // ✅ `new-cap`
Sequelize.BLOB() // ✅ `new-cap`
Sequelize.BOOLEAN() // ✅ `new-cap`
Sequelize.CHAR() // ✅ `new-cap`
Sequelize.CIDR() // ✅ `new-cap`
Sequelize.CITEXT() // ✅ `new-cap`
Sequelize.DATE() // ✅ `new-cap`
Sequelize.DATEONLY() // ✅ `new-cap`
Sequelize.DECIMAL() // ✅ `new-cap`
Sequelize.DOUBLE() // ✅ `new-cap`
Sequelize.ENUM() // ✅ `new-cap`
Sequelize.FLOAT() // ✅ `new-cap`
Sequelize.GEOGRAPHY() // ✅ `new-cap`
Sequelize.GEOMETRY() // ✅ `new-cap`
Sequelize.HSTORE() // ✅ `new-cap`
Sequelize.INET() // ✅ `new-cap`
Sequelize.INTEGER() // ✅ `new-cap`
Sequelize.JSON() // ✅ `new-cap`
Sequelize.JSONB() // ✅ `new-cap`
Sequelize.MACADDR() // ✅ `new-cap`
Sequelize.MEDIUMINT() // ✅ `new-cap`
Sequelize.NOW() // ✅ `new-cap`
Sequelize.NUMBER() // ✅ `new-cap`
Sequelize.NUMERIC() // ✅ `new-cap`
Sequelize.RANGE() // ✅ `new-cap`
Sequelize.REAL() // ✅ `new-cap`
Sequelize.SMALLINT() // ✅ `new-cap`
Sequelize.STRING() // ✅ `new-cap`
Sequelize.TEXT() // ✅ `new-cap`
Sequelize.TIME() // ✅ `new-cap`
Sequelize.TINYINT() // ✅ `new-cap`
Sequelize.TSVECTOR() // ✅ `new-cap`
Sequelize.UUID() // ✅ `new-cap`
Sequelize.VIRTUAL() // ✅ `new-cap`

export default {
  date,
  string,
  tinyint,
}
