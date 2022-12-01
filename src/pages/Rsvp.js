import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Rsvp = (props) => {
    const [name, setName] = useState('');
    const [rsvp, setRsvp] = useState('');

    return (
        <main>
            <h1>Hotel Information</h1>
            <p>The reception will take place at the Hilton Garden Inn in Sun Prairie. If you wish to reserve a room in advance, please <a href="https://www.hilton.com/en/attend-my-event/msnspgi-shw-6a89bcdc-16cc-4384-890c-cc386e044046/">click here to get a room in our reserved block with a discounted rate.</a></p>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRSVP">
                <Form.Label>RSVP</Form.Label>
                <Form.Select>
                    <option>Yes</option>
                    <option>No</option>
                </Form.Select>
            </Form.Group>            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </main>
    );
}