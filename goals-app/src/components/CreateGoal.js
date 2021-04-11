import { Modal, FormControl, Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import { useState } from 'react';
import { Auth, API } from 'aws-amplify';

export default function CreateGoal(props) {
    const [goalName, setGoalName] = useState();
    const [achieveBy, setAchieveBy] = useState();
    const [notes, setNotes] = useState();

    async function createNote(e) {
        e.preventDefault();
        try {
        let newGoal = await API.post("goals", "/goals", {
            body: {
                goalName: goalName,
                achieveBy: achieveBy,
                completed: false,
                notes: notes,
            }
        });
        props.closeModal()
         }
       catch (err) {
           console.log(err);
       }
    }
    return (
        <>
            <Form onSubmit={createNote}>
                <FormGroup>
                    <FormLabel>Goal Name</FormLabel>
                    <FormControl required placeholder="Enter Goal Name" onChange={e=>{setGoalName(e.target.value)}}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>When should this be accomplished?</FormLabel>
                    <FormControl required type="date" placeholder="Date" onChange={e=>{setAchieveBy(e.target.value)}}>
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <FormLabel>Additional Notes</FormLabel>
                    <FormControl type="textarea" placeholder="..." onChange={e=>{setNotes(e.target.value)}}>
                    </FormControl>
                </FormGroup>
                <Button variant="dark" type="submit">
                    Create Goal
    </Button>
            </Form>
            <Button variant="alert" type="cancel" onClick={props.handleCancel}>
                Cancel
    </Button>


        </>
    )

}