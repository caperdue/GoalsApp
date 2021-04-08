import { Form, Button } from 'react-bootstrap';
import './SignIn.css';
import { Auth } from "aws-amplify";
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useAppContext } from "../index.js"

function SignIn() {
    const { userHasAuthenticated } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    return (
        <div className="center">
            <div>
                <h1>Sign In / Sign Up</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="light" type="submit" onClick={handleSignUp}>
                        Sign Up
    </Button>
                    <Button variant="light" type="submit" onClick={handleSignIn}>
                        Sign In
    </Button>
                </Form>
            </div>
        </div >
    )
    async function handleSignUp(e) {
        e.preventDefault()
        try {
            const user = await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email: email,
                }
            })
            let code = prompt("Please enter your verification code sent to email.")
            await Auth.confirmSignUp(email, code);
            userHasAuthenticated(true);
            history.push("/goals");

        }
        catch (e) {
            alert(e.message)

        }
    }

    async function handleSignIn(e) {
        e.preventDefault()
        try {
            const user = await Auth.signIn(email, password);
            userHasAuthenticated(true);
            history.push("/goals");
        } catch (error) {
            alert('error signing in', error);
        }
    }

}

export default SignIn