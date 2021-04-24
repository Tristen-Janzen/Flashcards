package com.example.flashcards.dao;

import com.example.flashcards.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.Query;

@Repository
public class UserDAOImpl implements UserDAO{
    private EntityManager entityManager;

    @Autowired
    public UserDAOImpl(EntityManager entityManager){this.entityManager = entityManager;}

    @Override
    public void save(User theUser) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theUser);
    }

    @Override
    public User findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        User user = currentSession.get(User.class,theId);
        return user;
    }
}
