package com.example.dayToDay.repository;

import com.example.dayToDay.model.User;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    // Unneeded because username and password are authenticated with jwt
//    public User login(String username, String password);

    @Query("FROM User u WHERE u.username = ?1 and u.password = ?2")
    public User findByUsername(String username);
}
