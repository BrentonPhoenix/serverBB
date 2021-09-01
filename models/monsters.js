const { DataTypes } = require('sequelize');
const db = require('../db');

const Log = db.define('log', {
    creature: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    campaign: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hitpoints: {
        type: DataTypes.STRING,
        allowNull:false,
    },
    armorclass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    speed : {
        type: DataTypes.STRING,
        allowNull:false,
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    result: {
        type: DataTypes.STRING,
        allowNull: false
    },
    owner: {
        type: DataTypes. INTEGER
    }
});

module.exports = Log;