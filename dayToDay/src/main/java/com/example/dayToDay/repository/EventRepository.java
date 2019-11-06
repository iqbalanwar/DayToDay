package com.example.dayToDay.repository;

import com.example.dayToDay.model.Event;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {

    @Query("SELECT * FROM Event e WHERE e.date =:date AND e.user_id = :id")
    public List<Event> findEventByDateAndUser(@Param("date") Timestamp timestamp,
                                           @Param("id") Long userId);

    // Maybe this should be specified for the month? Might be an refactoring problem
    // I'll worry about that later...
    @Query("FROM Event e WHERE e.user_id = ?0")
    public List<Event> findEventsByUserId(Long userId);
}