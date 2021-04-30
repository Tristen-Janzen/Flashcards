import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FlashcardCreate from './FlashcardCreate'
import FlashcardEdit from './FlashcardEdit'
import Manage from './Manage'
import App from './App.jsx'
import { withRouter} from 'react-router-dom';
import ViewCardsComponent from './ViewCardsComponent.jsx'
import Choice from './Choice'
import Logout from './Logout'
import {Menu} from 'antd'
import {AppstoreOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;

class RouterComponent extends Component {
      handleClick = e => {
        console.log(e);
        if(e.key==5){
            window.location.href = "http://localhost:3000/logout";
        }
        if(e.key==6){
            window.location.href = "http://localhost:3000/choice";
        }
      };
   render() {
       let record = 1;
       return(
           <div>
            <Router>
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                mode="inline">

<SubMenu key="sub1" icon={<AppstoreOutlined />} title="Profile">
          <Menu.Item key="5">Logout</Menu.Item>
          <Menu.Item key="6">Menu</Menu.Item>
 </SubMenu>





                </Menu>

                    <Switch>
                        <Route exact path="/"><App/></Route>
                        <Route exact path="/manage"><Manage /></Route>
                        <Route exact path="/choice"><Choice to={{state: record}} /></Route>
                        <Route exact path="/view"><ViewCardsComponent/></Route>
                        <Route exact path="/flashcards/edit/:id" component={FlashcardEdit} />
                        <Route exact path="/flashcards/create/:id" component={FlashcardCreate} />
                        <Route exact path="/logout"><Logout/></Route>
                    </Switch>
            </ Router>
            </div>
       )
   } 
}

export default RouterComponent; 