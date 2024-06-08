const { DataTypes, Model } = require('sequelize');
const sequelize = require('./db');

const user = sequelize.define('User', {
  userdata:{
type:DataTypes.STRING,
allowNull:false
  },
    Employee_dataname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'contect',
    timestamps: true, // For createdAt and updatedAt
})
module.exports = 'user';