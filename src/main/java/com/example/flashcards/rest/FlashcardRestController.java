package com.example.flashcards.rest;


import com.example.flashcards.entity.Flashcard;
import com.example.flashcards.service.FlashcardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping("/api")
public class FlashcardRestController {
    private FlashcardService flashcardService;

    @Autowired
    public FlashcardRestController(FlashcardService theFlashcardService){flashcardService = theFlashcardService;}

    @GetMapping("/flashcards")
    public List<Flashcard> findAll() {return flashcardService.findAll();}

    @GetMapping("/flashcards/{flashcardId}")
    public Flashcard getFlashcard(@PathVariable int flashcardId){
        Flashcard theFlashcard = flashcardService.findById(flashcardId);
        if(theFlashcard == null){
            throw new RuntimeException("Flashcard id not found - "+flashcardId);
        }
        return theFlashcard;
    }

    @GetMapping("/flashcards/random")
    public List<Flashcard> getRandom(){return flashcardService.getRandom();}

    @PostMapping("/flashcards/create/{userId}")
    public Flashcard addFlashcard(@PathVariable int userId,@RequestBody Flashcard theFlashcard){
        theFlashcard.setId(0);
        theFlashcard.setUser_id(userId);
        flashcardService.save(theFlashcard);
        return theFlashcard;
    }

    @PutMapping("/flashcards/edit")
    public Flashcard updateFlashcard(@RequestBody Flashcard theFlashcard){
        flashcardService.save(theFlashcard);
        return theFlashcard;
    }

    @DeleteMapping("/flashcards/{flashcardId}")
    public String deleteFlashcard(@PathVariable int flashcardId){
        Flashcard tempFlashcard = flashcardService.findById(flashcardId);
        if(tempFlashcard == null){
            throw new RuntimeException("Flashcard is not found - "+flashcardId);
        }
        flashcardService.deleteById(flashcardId);
        return ("Deleted flashcard id - "+flashcardId);
    }
}
