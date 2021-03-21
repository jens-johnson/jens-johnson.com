import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { submit_contact } from '~/utilities/contact';

class Contact extends Component {
  render() {
    return(
      <Form onSubmit={submit_contact}>
        <Form.Row>
          <Form.Group as={Col} controlId="contactFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control placeholder="Enter first name" />
          </Form.Group>

          <Form.Group as={Col} controlId="contactLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control placeholder="Enter last name" />
          </Form.Group>
        </Form.Row>

        <Form.Group controlId="contactEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>

        <Form.Group controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>

        <Form.Group controlId="contactEmailList">
          <Form.Check type="checkbox" label="Join email list" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    );
  }
}

export default Contact;
