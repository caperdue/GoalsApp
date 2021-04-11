
import GoalItem from './GoalItem';
import React, { useState, useEffect } from 'react';
import './MyGoals.css';
import { useAppContext } from '../index.js'
import { Auth, API } from 'aws-amplify';
import CreateGoal from './CreateGoal.js';
import { Modal, Row, Col, Grid, Container, Button} from "react-bootstrap";

export default function MyGoals() {
    const { isAuthenticated } = useAppContext();
    const [goals, setGoals] = useState([]);
    const [show, showModal] = useState(false);

    //Load notes  when component first loads
    useEffect(() => {
        async function loadGoals() {
            let goals = await API.get("goals", "/goals");
            setGoals(goals);
        }
        loadGoals();
    }, [isAuthenticated]);

    function handleCreate() {
        showModal(true);
    }

    async function closeModal() {
        showModal(false);
    }

    return (
        <Container>
            <Modal size="lg" show={show}>
                <Modal.Header>
                    <Modal.Title>Create New Goal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateGoal handleCancel={closeModal} closeModal={closeModal} />
                </Modal.Body>
            </Modal>
            <Row>
                <h1 className="p-2 col-md-9">My Goals</h1>
            </Row>
            <Row>
                <Col md={12}>
                    <Button onClick={handleCreate} type="button" className="addGoalBtn btn btn-info">Add Goal</Button>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    {goals.map((goal) => {
                        return <GoalItem goalName={goal.goalName} date={goal.goalAchieveBy} key={goal.goalId} />
                    })}
                </Col>
            </Row>
        </Container>
    )


}
