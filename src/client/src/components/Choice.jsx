import React, { Component } from 'react';
import {Button, Space} from 'antd';
import { withRouter} from 'react-router-dom';
import '../antd.css';


class Choice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: 1
        }
        {/*  set user_id in state to this.props.location.state once Roger gets login working  */}
        console.log(this.props.location.state)
        this.onClickView = this.onClickView.bind(this);
        this.onClickManage = this.onClickManage.bind(this);
    }
    onClickView(record){
        console.log('User chose to view.')
        this.props.history.push({pathname:`/view`,state: record
    })
    }
    onClickManage(record){
        console.log('User chose to manage.')
        this.props.history.push({pathname:`/manage`,state: record
    })
    }
    
 
   render() {
       return(
            <div className="choicePage">
                <Space size={100} >
               <Button type="primary" size="large" onClick={() => this.onClickView(this.state.user_id)}>Study Flashcards  </Button>
               
               <Button type="primary" size="large" onClick={() => this.onClickManage(this.state.user_id)} >Manage Flashcards</Button>
               </Space>
            </div>
       )
   } 
}

export default withRouter(Choice); 