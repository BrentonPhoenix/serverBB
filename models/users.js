const{DataTypes} = require("sequelize");
const db = require("../db");

// USER MODEL EMAIL, PASSWORD, BIO -will need to see if the password DataTypes.STRING(5-100) will work
const User = db.define("user", {
    email: {
        require: true,
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        require: true,
        type: DataTypes.STRING,
        allowNull: false,
    },
    bio: {
        require: false,
        type: DataTypes.STRING
    }
});

module.exports = User;