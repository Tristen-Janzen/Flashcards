import React, { Component,useState } from 'react'
import FlashCardsService from '../services/FlashCardsService';
import { withRouter} from 'react-router-dom';
import FlashCardsList from './FlashCardsList';

class ViewCardsComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            flashcards: []
        }

        this.refreshCardsList = this.refreshCardsList.bind(this)
        this.showData = this.showData.bind(this)
    }

    componentDidMount(){
        this.refreshCardsList(this.props.location.state)
        //console.log(this.state.flashcards)
        
    }

    refreshCardsList(id){
        FlashCardsService.retrieveAllCards(this.props.location.state)
        .then(
            resp =>{
                this.setState({
                    flashcards : resp.data
                })
            }
        )
    }

    showData(){
        console.log(this.state.flashcards)
    }

    render() {
        return (
            <div className ="container">
                <FlashCardsList flashcards = {this.state.flashcards}/>
            </div>
        )
    }
}

export default withRouter(ViewCardsComponent)