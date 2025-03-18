const express = require('express');
const ReservationController = require('../controllers/reservationController');

const router = express.Router();
const reservationController = new ReservationController();

const setReservationRoutes = (app) => {
    router.post('/reservations', reservationController.createReservation.bind(reservationController));
    app.use('/api', router);
};

module.exports = setReservationRoutes;