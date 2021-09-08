const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    ssl: process.env.ENVIROMENT === 'production'
})

// const sequelize = new Sequelize("postgres://postgres:" + process.env.PASSWORD + "@localhost:5432/BlueBadge");

module.exports = sequelize;