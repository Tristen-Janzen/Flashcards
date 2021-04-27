import React from 'react'
import FlashCard from './FlashCard'
export default function FlashCardsList({flashcards}) {
    return (
        <div className = "card-grid">
            {flashcards.map(flashcard =>{
                return <FlashCard flashcard = {flashcard} key={flashcard.id}/>
            })}
            
        </div>
    )
}
