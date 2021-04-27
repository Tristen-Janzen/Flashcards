import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import {Table, Space, Popconfirm,Button} from 'antd';
import DataService from '../service/DataService';
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
        DataService.retrieveUserCards(1)
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
        DataService.deleteCard(id)
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
        this.props.history.push(`/flashcards/create/1`)
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
                   
                   
                   {/*<table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>Product Name</th>
                               <th>Price</th>
                               <th>Image</th>
                               <th>Details</th>
                               <th>Stock</th>
                               <th>Preferred Stock</th>
                               <th>Ordered</th>
                               <th>Delete</th>
                               <th>Update</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.flashcards.map (
                                   flashcards => 
                                   <tr style={{textAlign: "center"}} key={flashcards.id}>
                                       <td>{flashcards.id}</td>
                                       <td>{flashcards.product_name}</td>
                                       <td>{flashcards.price}</td>
                                       <img src={flashcards.image_url} alt="description" class="image"></img>
                                       <td>{flashcards.details}</td>
                                       <td>{flashcards.stock}</td>
                                       <td>{flashcards.preferred_stock}</td>
                                       <td>{flashcards.ordered}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteProductClicked(flashcards.id, flashcards.product_name, flashcards.price)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateProductClicked(flashcards.id, flashcards.product_name)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                        </table>*/}
                   {/*<div className="row">
                       <br/>
                       <button className="btn btn-success" onClick={() => {this.addProductClicked()}}>Add Product</button>
                    </div>*/}
               {/*</div>
               </div>*/}
               </Table>
               <div>
               <Button type="primary" onClick={() => this.addCardClicked()}>Add</Button>               </div>
            </div>
       )
   } 
}

export default withRouter(Manage); 