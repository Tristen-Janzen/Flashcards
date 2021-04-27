import React, { Component, useState } from 'react';
import { Input, Button, Radio} from 'antd';
import { Formik, Form, Field } from 'formik';
import DataService from '../service/DataService';
import '../antd.css';


class FlashcardEdit extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            question: this.props.location.state.question,
            answer: this.props.location.state.answer,
            user_id: this.props.location.state.user_id
        }
        this.onSubmit = this.onSubmit.bind(this)
        
    }

    onSubmit(values) {
        let card = {
            id: this.props.location.state.id,
            question: values.question,
            answer: values.answer,
            user_id: this.props.location.state.user_id
        }

            DataService.updateCard(card)
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
                                    <Button className="btn btn-success" htmlType="submit">Save</Button>
                                </Form>
                            )
                        } 
                    </Formik>
                </div>


        )

    }
}

export default FlashcardEdit