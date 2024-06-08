const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Contact = sequelize.define('Contact', {
    Employe_adderess: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Employee_dataname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'contect',
    timestamps: true, // For createdAt and updatedAt
});

module.exports = Contact;
