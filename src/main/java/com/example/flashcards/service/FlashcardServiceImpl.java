package com.example.flashcards.service;

import com.example.flashcards.dao.FlashcardDAO;
import com.example.flashcards.entity.Flashcard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;

import java.util.List;

@Service
public class FlashcardServiceImpl implements FlashcardService{
    private FlashcardDAO flashcardDAO;

    @Autowired
    public FlashcardServiceImpl(FlashcardDAO theFlashcardDAO){ flashcardDAO = theFlashcardDAO;}

    @Override
    @Transactional
    public List<Flashcard> findAll() { return flashcardDAO.findAll(); }

    @Override
    @Transactional
    public Flashcard findById(int theId) {
        return flashcardDAO.findById(theId);
    }

    @Override
    @Transactional
    public void save(Flashcard theFlashcard) {
        flashcardDAO.save(theFlashcard);
    }

    @Override
    @Transactional
    public void deleteById(int theId) {
        flashcardDAO.deleteById(theId);
    }

    @Override
    @Transactional
    public List<Flashcard> getRandom() {
        return flashcardDAO.getRandom();
    }

    @Override
    public List<Flashcard> getUserCards(int theId) {
        return flashcardDAO.getUserCards(theId);
    }
}
