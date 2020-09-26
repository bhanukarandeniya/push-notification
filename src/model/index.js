const Sequelize = require('sequelize');
const { DB } = require('../../config/config');

const sequelize = new Sequelize(DB.schema, DB.user, DB.password, {
    host: DB.host,
    dialect: DB.dialect,
    operatorsAliases: false,
    pool: {
        max: DB.pool.max,
        min: DB.pool.min,
        acquire: DB.pool.acquire,
        idle: DB.pool.idle
    },
    define: {
        freezeTableName: true
    }
});

const db = {};
db.sequelize = sequelize;
db.District = require('./district')(sequelize);

module.exports = db
