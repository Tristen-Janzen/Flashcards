import React, { Component,useState } from 'react'
import FlashCardsService from '../services/FlashCardsService';
import FlashCardsList from './FlashCardsList';

export default class ViewCardsComponent extends Component {
    constructor(props){
        super(props)
        this.state ={
            flashcards: []
        }

        this.refreshCardsList = this.refreshCardsList.bind(this)
        this.showData = this.showData.bind(this)
    }

    componentDidMount(){
        this.refreshCardsList(1)
        //console.log(this.state.flashcards)
        
    }

    refreshCardsList(id){
        FlashCardsService.retrieveAllCards(id)
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
                <h1>
                    Hello World
                </h1>
               <button  onClick = {this.showData}>Click</button>
                
            </div>
        )
    }
}
