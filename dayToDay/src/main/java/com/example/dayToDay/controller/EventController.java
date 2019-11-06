package com.example.dayToDay.controller;

import com.example.dayToDay.model.Event;
import com.example.dayToDay.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController("/event")
public class EventController {
    @Autowired
    EventService eventService;

    @PostMapping
    public Event userCreateEvent(@RequestBody Event event) { return eventService.createEventInDB(event); }

    @GetMapping("/list")
    public Iterable<Event> listAllEvents() { return eventService.listUserEvents(); }

    @GetMapping("/list/{date}")
    public Iterable<Event> listEventsByDate(@PathVariable Date date) { return eventService.listUserEventsFromDate(date); }

    @DeleteMapping("/{eventId}")
    public ResponseEntity deleteEventById(@PathVariable Long eventId) { return eventService.deleteEventByIdInDB(eventId); }
}
