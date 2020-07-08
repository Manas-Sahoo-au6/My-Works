//REQUIRING A SETTING UP ALL
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
module.exports= new Sequelize('postgres', 'manas', 'password', {
  host: 'localhost',
  dialect: 'postgres',   /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});