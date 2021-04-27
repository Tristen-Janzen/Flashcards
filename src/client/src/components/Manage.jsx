import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import {Table, Popconfirm,Button} from 'antd';
import FlashCardsService from '../services/FlashCardsService';
import '../antd.css';

const{Column} = Table;

class Manage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flashcards: []
        }
        this.refereshCards = this.refereshCards.bind(this)
        this.deleteCardClicked = this.deleteCardClicked.bind(this)
        this.upDateCardClicked = this.updateCardClicked.bind(this)
        this.addCardClicked = this.addCardClicked.bind(this)
    }
    
    componentDidMount() {
        this.refereshCards();
    }
    componentDidUpdate() {
        this.refereshCards();
    }

    refereshCards() {
        FlashCardsService.retrieveUserCards(this.props.location.state.user_id)
        .then(
            response => {
                this.setState({
                    flashcards: response.data,
                })
            }
        )
    }

    deleteCardClicked(id) {
        console.log('Delete Card Clicked')
        FlashCardsService.deleteCard(id)
        .then(
            response => {
                this.setState({message: `Deleted Card: ${id}`})
                alert(this.state.message)
                this.refereshCards(); 
            }
        )
    }
    
    updateCardClicked(record) {
        console.log('Update Card Clicked')
        this.props.history.push({pathname:`/flashcards/edit/${record.id}`,state: record
    })
    }

    addCardClicked() {
        console.log('Add Card Clicked')
        this.props.history.push(`/flashcards/create/${this.props.location.state.user_id}`)
    }
 
   render() {
       return(
           <div>
                   <Table dataSource={this.state.flashcards}>
                        <Column title="ID" dataIndex="id" key="id"/>
                       <Column title="Question" dataIndex="question" key="question"/>
                       <Column title="Answer" dataIndex="answer" key="answer"/>
                       <Column title="User ID" dataIndex="user_id" key="user_id"/>
                       <Column title="Edit" key="Edit" render=
                       {(text,record) => (
                        <Popconfirm title="Are you sure you wish to edit?" onConfirm={() => this.updateCardClicked(record)}>
                        <a>Edit</a>
                        </Popconfirm>                        )}
                    />
                        <Column title="Delete" key="Delete" render=
                        {(text,record) => (
                            <Popconfirm title="Are you sure you wish to delete?" onConfirm={() => this.deleteCardClicked(record.id)}>
                            <a>Delete</a>
                            </Popconfirm>                        )}
                        />
               </Table>
               <div>
               <Button type="primary" onClick={() => this.addCardClicked()}>Add</Button>               </div>
            </div>
       )
   } 
}

export default withRouter(Manage); 