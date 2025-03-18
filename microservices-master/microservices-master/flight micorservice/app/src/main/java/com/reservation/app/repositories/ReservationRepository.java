package com.reservation.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reservation.app.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
