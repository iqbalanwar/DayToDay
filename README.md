# DayToDay
Calendar App

## Tech Stack
- React.js
- Java (Spring Boot)
- PostgreSQL

## Design Decisions

## Completions

## General Approach 

## Challenges

- As of now, there is one table that holds Events (for all Users), and I would have to authenticate that an Event is attached to a User. One of the things I was thinking about was about why I was authenticating in the first place. A calendar instance should have a single user by default, so should it need authenticating? Well, since I'm using a single Event table for all user events, I would have to parse through and retrieve events of a user. Instead, if user events were aligned in memory, or there are separate event tables for given users. These were challenges in scalability, which I considered but did not implement. 

- In react, when doing the "events on a date" query to the backend, I have to convert from a date format to milliseconds before doing the get request (because Date objects in Java only accepts time in milliseconds from 1/1/1970)
