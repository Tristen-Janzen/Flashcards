import React, { Component } from 'react';
import {Button, Space} from 'antd';
import { withRouter} from 'react-router-dom';
import '../antd.css';


class Logout extends Component {
    constructor(props) {
        super(props)
        this.onClickLogin = this.onClickLogin.bind(this);
    }
    onClickLogin(){
        console.log('User chose to login.')
        this.props.history.push({pathname:`/`
    })
    }
    
 
   render() {
       return(
            <div className="choicePage">
                <Space size={100}>
                <h1>Thank you for using flashcards!</h1>
               <Button type="primary" size="large" onClick={() => this.onClickLogin()} >Login</Button>
               </Space>
            </div>
       )
   } 
}

export default withRouter(Logout); 