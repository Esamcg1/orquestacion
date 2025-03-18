package com.flight.app.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.flight.app.entities.flight;
import com.flight.app.repositories.FligthRepository;

@Service
public class FligthServiceImpl implements FligthService {

    @Autowired
    private FligthRepository fligthRepository;

    @Override
    public List<flight> findAll() {
        return (List<flight>) fligthRepository.findAll();
    }

    @Override
    public Optional<flight> findById(Long id) {
        return fligthRepository.findById(id);
        
    }

}
