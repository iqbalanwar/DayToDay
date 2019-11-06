package com.example.dayToDay.controller;

import com.example.dayToDay.model.Event;
import com.example.dayToDay.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
public class EventController {
    @Autowired
    EventService eventService;

    @PostMapping("/event")
    public Event userCreateEvent(@RequestBody Event event) { return eventService.createEventInDB(event); }

    @GetMapping("/event/list")
    public Iterable<Event> listAllEvents() { return eventService.listUserEvents(); }

    @GetMapping("/event/list/{date}")
    public Iterable<Event> listEventsByDate(@PathVariable Long date) { return eventService.listUserEventsFromDate(date); }

    @DeleteMapping("/event/{eventId}")
    public ResponseEntity deleteEventById(@PathVariable Long eventId) { return eventService.deleteEventByIdInDB(eventId); }
}
