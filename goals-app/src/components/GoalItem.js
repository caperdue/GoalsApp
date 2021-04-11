import './GoalItem.css';
import { Row, Container, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { API } from "aws-amplify";

function GoalItem(props) {

    const [isNewGoal, setGoal] = useState();
    async function handleDelete() {
        await API.del("notes", '/notes');
    }
    return (
        <div className="container goals-item p-3 m-3">
            <div className="row">
                <button onClick={handleDelete} type="button" className="deleteButton btn btn-danger">Delete</button>
            </div>
            <div className="row">
                <div className="pt-4 col-md-8">
                    <h2>{props.goalName}</h2>
                </div>
                <div className="col-md-4">
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <p>Set to be achieved by: {props.date}</p>
                </div>
            </div>
            <button type="button" className="btn btn-success">Completed</button>

        </div>
    )

}


export default GoalItem