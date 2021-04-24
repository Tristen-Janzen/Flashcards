package com.example.flashcards.dao;

import com.example.flashcards.entity.Flashcard;

import java.util.List;

public interface FlashcardDAO {
    public List<Flashcard> findAll();
    public Flashcard findById(int theId);
    public void save(Flashcard theFlashcard);
    public void deleteById(int theId);
    public List<Flashcard> getRandom();
}
