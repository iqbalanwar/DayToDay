package com.example.dayToDay.service;

import com.example.dayToDay.model.Event;
import com.example.dayToDay.model.User;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface UserService extends UserDetailsService {
    public User getUser(String username);

    public String createUser(User newUser);

    public String login(User user);

    public ResponseEntity deleteUserById(Long userId);
}
