package com.reservation.app.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.math.BigDecimal;

@Entity
@Table(name = "reservation")
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservation_seq")
    @SequenceGenerator(name = "reservation_seq", sequenceName = "reservation_id_seq", allocationSize = 1)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "flight_id", nullable = false)
    private Reservation reservation; 

    @Column(name = "passenger_name", length = 100, nullable = false)
    private String passengerName;

    @Column(name = "passenger_email", length = 100, nullable = false)
    private String passengerEmail;

    @Column(name = "passenger_phone", length = 20)
    private String passengerPhone;

    @Column(name = "seat_number", length = 10)
    private String seatNumber;

    @Column(name = "booking_status", length = 20, nullable = false)
    private String bookingStatus = "Pending";

    @Column(name = "payment_status", length = 20, nullable = false)
    private String paymentStatus = "Unpaid"; 

    @Column(name = "total_price", precision = 10, scale = 2, nullable = false)
    private BigDecimal totalPrice;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}
