package com.flight.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.flight.app.entities.flight;

public interface FligthRepository extends JpaRepository<flight, Long> {

}
