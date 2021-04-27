import axios from 'axios';

class FlashCardsService {

    retrieveAllCards(userId){
        return axios.get(`http://localhost:8080/api/flashcards/user/${userId}`);
    }


}

export default new FlashCardsService()