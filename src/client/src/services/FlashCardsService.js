import axios from 'axios';

const URL = 'http://localhost:8080'

class FlashCardsService {

    retrieveAllCards(userId){
        return axios.get(`http://localhost:8080/api/flashcards/user/${userId}`);
    }

    createCard(flashcard) {
        return axios.post(`${URL}/api/flashcards/create/${flashcard.user_id}`,flashcard);
    }

    retrieveUserCards(id) {
        return axios.get(`${URL}/api/flashcards/user/${id}`);
    }

    updateCard(flashcard) {
        return axios.put(`${URL}/api/flashcards/edit`,flashcard);
    }
    deleteCard(id) {
        return axios.delete(`${URL}/api/flashcards/${id}`);
    }

}

export default new FlashCardsService()