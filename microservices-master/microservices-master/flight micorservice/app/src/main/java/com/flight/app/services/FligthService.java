package com.flight.app.services;

import java.util.List;
import java.util.Optional;

import com.flight.app.entities.flight;

public interface FligthService {

    List<flight> findAll();

    
    Optional<flight> findById(Long id);
}