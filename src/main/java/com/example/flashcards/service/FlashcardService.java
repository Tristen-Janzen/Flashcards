package com.example.flashcards.service;


import com.example.flashcards.entity.Flashcard;

import java.util.List;

public interface FlashcardService {
    public List<Flashcard> findAll();
    public Flashcard findById(int theId);
    public void save(Flashcard theFlashcard);
    public void deleteById(int theId);
    public List<Flashcard> getRandom();
    public List<Flashcard> getUserCards(int theId);
}
