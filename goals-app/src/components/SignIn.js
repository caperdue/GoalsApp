import { Form, Button } from 'react-bootstrap'
import './SignIn.css'

function SignIn() {
    return (
        <div className="center">
            <div>
                <h1>Sign In / Sign Up</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="light" type="submit">
                        Submit
    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn