package com.example.flashcards.service;

import com.example.flashcards.entity.User;

public interface UserService {
    public void save(User theUser);
    public User findById(int userId);
}
