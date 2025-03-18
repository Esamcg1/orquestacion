package com.flight.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.flight.app.entities.flight;
import com.flight.app.services.FligthService;


@RestController
@RequestMapping("/api/flight")
public class FlightController {

    @Autowired
    private FligthService flightService;

    @GetMapping("/all")
    public ResponseEntity <?> findAll() {
        return ResponseEntity.ok(flightService.findAll());
    }
    @GetMapping("/{id}")
    public ResponseEntity<?> findById(@PathVariable("id") long id) {
        java.util.Optional<flight> fligth = flightService.findById(id);
        if (fligth.isPresent()) {
            return ResponseEntity.ok(fligth.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
