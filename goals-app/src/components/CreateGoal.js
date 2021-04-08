import { Modal, FormControl, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import {useState} from 'react';

export default function CreateGoal() {
    const [show, setShow] = useState(true);
    const [goalName, setGoalName] = useState();
    const [goalAchieveBy, setGoalAchieveBy] = useState();
    const [notes, setNotes] = useState();
    function handleSubmit(){
        setShow(false);
    }
    console.log("RAN");
    return (
        <Modal size="lg" show={show}>
            <Modal.Header>
                <Modal.Title>Create New Goal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <FormLabel>Goal Name</FormLabel>
                        <FormControl required placeholder="Enter Goal Name">
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>When should this be accomplished?</FormLabel>
                        <FormControl required type="date" placeholder="Date">
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Additional Notes</FormLabel>
                        <FormControl type="textarea" placeholder="...">
                        </FormControl>
                    </FormGroup>
                    <Button variant="dark" type="submit">
                        Create Goal
    </Button>
                </Form>

            </Modal.Body>

        </Modal>
    )

}