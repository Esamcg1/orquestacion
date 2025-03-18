const express = require('express');
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservationRoutes');
const { sequelize } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/reservations', reservationRoutes);

sequelize.sync()
    .then(() => {
        console.log('Database connected successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});