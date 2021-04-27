import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FlashcardCreate from './FlashcardCreate'
import FlashcardEdit from './FlashcardEdit'
import Manage from './Manage'

class RouterComponent extends Component {
   render() {
       return(
           <div>
            <Router>
                    <Switch>
                        <Route exact path="/"><Manage/></Route>                       
                        <Route exact path="/flashcards/edit/:id" component={FlashcardEdit} />
                        <Route exact path="/flashcards/create/:id" component={FlashcardCreate} />
                    </Switch>
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 