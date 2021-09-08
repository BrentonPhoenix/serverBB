const { DataTypes } = require('sequelize');
const db = require('../db');

const Monster = db.define('monsters', {
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
        
    },
    hitpoints: {
        type: DataTypes.STRING,
        
    },
    armorclass: {
        type: DataTypes.STRING,
        
    },
    speed : {
        type: DataTypes.STRING,
        
    },
    rating: {
        type: DataTypes.STRING,
        
    },
    description: {
        type: DataTypes.STRING(1234),

    },

    owner: {
        type: DataTypes.INTEGER
    }
});

module.exports = Monster;