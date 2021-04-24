package com.example.flashcards.dao;

import com.example.flashcards.entity.User;

public interface UserDAO {
    public void save(User theUser);
    public User findById(int theId);
}
