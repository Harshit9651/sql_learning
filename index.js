const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/db');
const User = require('./models/user');
const Contact = require('./models/contect');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello user');
});

app.post('/users', async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const newUser = await User.create({firstName,lastName})
       console.log("data added succeesfully")
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true }); // force: true will drop the table if it already exists
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Error creating database & tables:', error);
    }
};

syncDatabase();

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
