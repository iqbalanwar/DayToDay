package com.example.dayToDay.service;

import com.example.dayToDay.controller.SecurityController;
import com.example.dayToDay.model.Event;
import com.example.dayToDay.model.User;
import com.example.dayToDay.repository.EventRepository;
import com.example.dayToDay.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class EventServiceImpl implements EventService {
    @Autowired
    EventRepository eventRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    SecurityController securityController;

    @Override
    public Event createEventInDB(Event event) {
        String username = securityController.getCurrentUserName();
        User user = userRepository.findByUsername(username);
        event.setUser(user);
        return eventRepository.save(event);
    }

    @Override
    public Iterable<Event> listUserEvents() {
        String username = securityController.getCurrentUserName();
        Long userId = userRepository.findByUsername(username).getId();
        return eventRepository.findEventsByUserId(userId);
    }

    @Override
    public Iterable<Event> listUserEventsFromDate(Long eventDate) {
        String username = securityController.getCurrentUserName();
        Long userId = userRepository.findByUsername(username).getId();

        Date date = new Date(eventDate);

        return eventRepository.findEventByDateAndUser(date, userId);
    }

    @Override
    public ResponseEntity deleteEventByIdInDB(Long postId) {
        String username = securityController.getCurrentUserName();
        if(eventRepository.findById(postId).get().getUser().getUsername().equals(username)) {
            eventRepository.deleteById(postId);
            return new ResponseEntity(HttpStatus.valueOf(200));
        } else {
            return new ResponseEntity(HttpStatus.valueOf(405));
        }
    }
}
