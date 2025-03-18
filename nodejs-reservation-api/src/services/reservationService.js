class ReservationService {
    constructor(reservationRepository) {
        this.reservationRepository = reservationRepository;
    }

    async createReservation(reservationData) {
        
        this.validateReservationData(reservationData);

        const reservation = await this.reservationRepository.addReservation(reservationData);
        return reservation;
    }

    validateReservationData(reservationData) {
        if (!reservationData.name || !reservationData.date || !reservationData.time) {
            throw new Error('Missing required reservation fields: name, date, and time are required.');
        }

    }
}

export default ReservationService;