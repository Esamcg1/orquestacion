class ReservationController {
    constructor(reservationService) {
        this.reservationService = reservationService;
    }

    async createReservation(req, res) {
        try {
            const reservationData = req.body;
            const newReservation = await this.reservationService.createReservation(reservationData);
            return res.status(201).json(newReservation);
        } catch (error) {
            return res.status(500).json({ message: 'Error creating reservation', error: error.message });
        }
    }
}

export default ReservationController;