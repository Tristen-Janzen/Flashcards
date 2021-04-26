package com.example.flashcards.dao;

import com.example.flashcards.entity.Flashcard;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Repository
public class FlashcardDAOImpl implements FlashcardDAO{
    private EntityManager entityManager;

    @Autowired
    public FlashcardDAOImpl(EntityManager entityManager) {this.entityManager = entityManager;}


    @Override
    public List<Flashcard> findAll() {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Flashcard> theQuery = currentSession.createQuery("from Flashcard",Flashcard.class);
        List<Flashcard> flashcards = theQuery.getResultList();
        return flashcards;
    }

    @Override
    public Flashcard findById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Flashcard flashcard = currentSession.get(Flashcard.class,theId);
        return flashcard;
    }

    @Override
    public void save(Flashcard theFlashcard) {
        Session currentSession = entityManager.unwrap(Session.class);
        currentSession.saveOrUpdate(theFlashcard);
    }

    @Override
    public void deleteById(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query theQuery = currentSession.createQuery("delete from Flashcard where id=:flashcardId");
        theQuery.setParameter("flashcardId",theId);
        theQuery.executeUpdate();
    }

    @Override
    public List<Flashcard> getRandom() {
        Session currentSession = entityManager.unwrap(Session.class);
        Random rand = new Random();
        int randInt = 0;
        var all = findAll();
        List<Flashcard> randoms = new ArrayList<>();
        for(var cards:all){
            randInt = rand.nextInt(1000);
            if(randInt%2==1){
                randoms.add(cards);
            }
        }
        return randoms;
    }

    @Override
    public List<Flashcard> getUserCards(int theId) {
        Session currentSession = entityManager.unwrap(Session.class);
        Query<Flashcard> theQuery = currentSession.createQuery("from Flashcard where user_id=:userId",Flashcard.class);
        theQuery.setParameter("userId",theId);
        List<Flashcard> flashcards = theQuery.getResultList();
        return flashcards;
    }
}
