package com.example.flashcards.service;

import com.example.flashcards.dao.UserDAO;
import com.example.flashcards.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class UserServiceImpl implements UserService{
    private UserDAO userDAO;

    @Autowired
    public UserServiceImpl(UserDAO theUserDAO){userDAO = theUserDAO;}

    @Override
    @Transactional
    public void save(User theUser) {
        userDAO.save(theUser);
    }

    @Override
    @Transactional
    public User findById(int userId) {
        return userDAO.findById(userId);
    }
}
