const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('OFFICEDATA', 'root', 'harshit9660@', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, // Disable logging; default: console.log
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;
