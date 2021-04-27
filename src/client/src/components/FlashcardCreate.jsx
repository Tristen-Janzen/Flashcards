import React, { Component, useState } from 'react';
import { Input, Button, Radio} from 'antd';
import { Formik, Form, Field } from 'formik';
import FlashCardsService from '../services/FlashCardsService';
import '../antd.css';


class FlashcardCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: -1,
            question: '',
            answer: '',
            user_id: this.props.match.params.id
        }
        this.onSubmit = this.onSubmit.bind(this)
        
    }


    onSubmit(values) {
        let card = {
            id: this.state.id,
            question: values.question,
            answer: values.answer,
            user_id: this.props.match.params.id
        }
        FlashCardsService.createCard(card)
            .then(() => this.props.history.push('/'))
    }

    render() {
        let {id, question, answer, user_id} = this.state
        return(
          


<div className="container">
                    <Formik
                        initialValues={{id, question, answer, user_id}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Question</label>
                                        <Field className="form-control" type="text" name="question" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Answer</label>
                                        <Field className="form-control" type="text" name="answer" />
                                    </fieldset>
                                    <fieldset>
                                        <label>User Id</label>
                                        <Field className="form-control" type="text" name="user_id" disabled/>
                                    </fieldset>
                                    <Button className="btn btn-success" htmlType="submit">Submit</Button>
                                </Form>
                            )
                        } 
                    </Formik>
                </div>



        )

    }
}

export default FlashcardCreate

