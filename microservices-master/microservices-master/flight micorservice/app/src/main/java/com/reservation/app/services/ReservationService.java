package com.reservation.app.services;

import java.util.List;

import com.reservation.app.entities.Reservation;

public interface ReservationService {

    List<Reservation> findAll();
}
