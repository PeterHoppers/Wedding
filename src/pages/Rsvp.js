import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { rsvpStatus } from '../util';

import '../styles/rsvp.scss';

const formUrl = "https://script.google.com/macros/s/AKfycbyFxnSbknZegx3-Rv2yLl5XHzPZeTO7n1ax175hv-vNOm61mupqHDfQ6P_slqX7hrG3Og/exec";

export const Rsvp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [rsvp, setRsvp] = useState('Yes');
    const [extraInfo, setInfo] = useState('');

    const [isSubmitted, setSubmitted] = useState(false);

    const inputFirstHandler = (event) => {
        setFirstName(event.target.value);
    }

    const inputLastHandler = (event) => {
        setLastName(event.target.value);
    }

    const inputEmailHandler = (event) => {
        setEmail(event.target.value);
    }

    const inputStatusHandler = (event) => {
        setRsvp(event.target.value);
    }

    const inputInfoHandler = (event) => {
        setInfo(event.target.value);
    }

    const reSubmitHandler = () => {
        setSubmitted(false);
        resetForm();
    }

    const submitHander = (event) => {
        event.preventDefault();
        const submitBtn = document.getElementById("submit-btn");
        submitBtn.setAttribute("disabled", true);
        const formData = new FormData();

        formData.append('name', `${firstName} ${lastName}`);
        formData.append('email', email);
        formData.append('status', rsvp);

        let sentInfo = extraInfo;
        if (rsvp !== rsvpStatus.Partial) {
            sentInfo = "";
        }
        formData.append('info', sentInfo);

        fetch(formUrl, {
            method: 'POST', 
            body: formData,
        }).then(res => {
            setSubmitted(true);
            submitBtn.setAttribute("disabled", false);            
        })
        .catch(err => console.log(err))
    }

    const resetForm = () => {        
        setFirstName('');
        setLastName('');
        setEmail('');
        setRsvp('Yes');
        setInfo('');
    }

    const getMessageString = () => {
        let basicMsg = "Thanks for submitting!";

        if (rsvp === rsvpStatus.Yes) {
            basicMsg += " We look forward to seeing you on our big day!";
        } else if (rsvp === rsvpStatus.Partial) {
            basicMsg += " We appreciate being informed about this. We appreciate you still making some time for us on our big day.";
        } else {
            basicMsg += " While we would have loved to have you here, we greatly appricate being informed."
        }

        return basicMsg;
    }

    return (
        <main>
            <h1>RSVP</h1>
            {!isSubmitted ?
                <>                        
                    <p>Please use the following form to inform us if you'll be able to attend or not. We appreciate the communication!</p>
                    <Form onSubmit={submitHander} id="rsvp-form">
                        <div className='form-grouping'>
                            <Form.Group className="mb-3 form-holder" controlId="formFirstName">
                                <Form.Label>First Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" onChange={inputFirstHandler} size="lg" required={true} value={firstName} maxLength={25}/>                
                            </Form.Group>
                            <Form.Group className="mb-3 form-holder" controlId="formLastName">
                                <Form.Label>Last Name:</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" onChange={inputLastHandler} size="lg" required={true} value={lastName} maxLength={25}/>                
                            </Form.Group>
                        </div>    

                        <div className='form-grouping'>
                            <Form.Group className="mb-3 form-holder" controlId="formBasicEmail">
                                <Form.Label>Email address:</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" onChange={inputEmailHandler} size="lg" required={true} value={email}/>
                                <Form.Text className="text-muted">
                                    Just in case we need to provide any information as soon as possible if something happens.
                                </Form.Text>
                            </Form.Group>            

                            <Form.Group className="mb-3 form-holder" controlId="formBasicRSVP">
                                <Form.Label>Attending Status:</Form.Label>
                                <Form.Select aria-label="Options for attending" onChange={inputStatusHandler} size="lg" value={rsvp}>
                                    <option>Yes</option>
                                    <option>Partial</option>
                                    <option>No</option>
                                </Form.Select>
                            </Form.Group>
                        </div>    

                        {rsvp === rsvpStatus.Partial &&
                            <>
                                <Form.Group className="mb-3" controlId="formBasicExtraInfo">
                                    <Form.Label>Please provide more information:</Form.Label>
                                    <Form.Control as="textarea" aria-label="More information about being partial" onChange={inputInfoHandler} size="lg" value={extraInfo} maxLength={2000} required={(rsvp === rsvpStatus.Partial)}/>
                                </Form.Group>
                            </>
                        }
                    
                        <div className='form-btn-holder'>
                            <Button id="submit-btn" variant="secondary" type="submit" size="lg" disabled={isSubmitted}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                </>
            :
            <>
                <p>{getMessageString()}</p>
                <div className='form-btn-holder'>
                    <Button variant="primary" onClick={reSubmitHandler} size="lg">
                        Submit Another?
                    </Button>
                </div>
            </>
        }
        </main>
    );
}