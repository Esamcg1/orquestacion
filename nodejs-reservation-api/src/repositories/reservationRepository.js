class ReservationRepository {
    constructor(database) {
        this.database = database;
    }

    async addReservation(reservationData) {
        try {
            const reservation = await this.database.Reservation.create(reservationData);
            return reservation;
        } catch (error) {
            throw new Error('Error adding reservation: ' + error.message);
        }
    }

    async getReservationById(reservationId) {
        try {
            const reservation = await this.database.Reservation.findByPk(reservationId);
            return reservation;
        } catch (error) {
            throw new Error('Error fetching reservation: ' + error.message);
        }
    }

    async getAllReservations() {
        try {
            const reservations = await this.database.Reservation.findAll();
            return reservations;
        } catch (error) {
            throw new Error('Error fetching reservations: ' + error.message);
        }
    }

    async updateReservation(reservationId, updatedData) {
        try {
            const reservation = await this.getReservationById(reservationId);
            if (!reservation) {
                throw new Error('Reservation not found');
            }
            await reservation.update(updatedData);
            return reservation;
        } catch (error) {
            throw new Error('Error updating reservation: ' + error.message);
        }
    }

    async deleteReservation(reservationId) {
        try {
            const reservation = await this.getReservationById(reservationId);
            if (!reservation) {
                throw new Error('Reservation not found');
            }
            await reservation.destroy();
            return true;
        } catch (error) {
            throw new Error('Error deleting reservation: ' + error.message);
        }
    }
}

module.exports = ReservationRepository;