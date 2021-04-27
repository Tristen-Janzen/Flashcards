import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FlashcardCreate from './FlashcardCreate'
import FlashcardEdit from './FlashcardEdit'
import Manage from './Manage'
import App from './App.jsx'
import ViewCardsComponent from './ViewCardsComponent.jsx'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                    <Switch>
                        <Route exact path="/"><App/></Route>
                        <Route exact path="/manage"><Manage/></Route>
                        <Route exact path="/view"><ViewCardsComponent/></Route>
                        <Route exact path="/flashcards/edit/:id" component={FlashcardEdit} />
                        <Route exact path="/flashcards/create/:id" component={FlashcardCreate} />
                        <Route exact path="/logout"></Route>
                    </Switch>
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 