import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FlashcardCreate from './FlashcardCreate'
import FlashcardEdit from './FlashcardEdit'
import Manage from './Manage'
import Login from './src/components/login/login.jsx'
import ViewCardsComponent from './src/components/ViewCardsComponent.jsx'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                    <Switch>
                        <Route exact path="/"><Login/></Route>
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