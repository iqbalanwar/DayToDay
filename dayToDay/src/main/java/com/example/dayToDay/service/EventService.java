package com.example.dayToDay.service;

import com.example.dayToDay.model.Event;
import org.springframework.http.ResponseEntity;

import java.util.Date;

public interface EventService {
    public Event createEventInDB(Event event);

    public Iterable<Event> listUserEvents();

    public Iterable<Event> listUserEventsFromDate(Date eventDate);

    public ResponseEntity deleteEventByIdInDB(Long postId);
}
