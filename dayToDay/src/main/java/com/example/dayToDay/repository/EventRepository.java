package com.example.dayToDay.repository;

import com.example.dayToDay.model.Event;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {
    @Query("FROM events e WHERE e.user_id = ?0")
    public List<Event> findEventsByUserId(Long userId);

    @Query("FROM events e WHERE e.user_id = ?0 AND e.date = ?1")
    public List<Event> findUserEventsFromDate(Long userId);
}
