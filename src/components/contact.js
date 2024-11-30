import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com'; // Import emailjs

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // JavaScript Validation Functions
  const validateForm = () => {
    const { name, email, phone, message } = formData;
    let isValid = true;
    let errors = '';

    // Name validation (only alphabet characters)
    if (!name || !/^[A-Za-z\s]+$/.test(name)) {
      isValid = false;
      errors += 'Please enter a valid name (only alphabets).\n';
    }

    // Email validation (simple regex)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      errors += 'Please enter a valid email address.\n';
    }

    // Phone number validation (simple regex for phone format)
    const phonePattern = /[0-9]$/;
    if (phone && !phonePattern.test(phone)) {
      isValid = false;
      errors += 'Phone number must be in the format: 123-456-7890.\n';
    }

    // Message validation
    if (!message) {
      isValid = false;
      errors += 'Please enter a message.\n';
    }

    if (!isValid) {
      setErrorMessage(errors);
    }

    return isValid;
  };

  // Handle form submission using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true); // Set submitting state to true
    setErrorMessage(''); // Clear error message

    emailjs
      .send(
        'service_4p8trbp', // Your EmailJS service ID
        'template_749scqd', // Your EmailJS template ID
        formData,
        'rWgXSa0KbpaavWPFC' // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setIsSubmitted(true); // Set success state
          setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form fields
        },
        (error) => {
          console.log('FAILED...', error);
          setErrorMessage('There was an error submitting the form. Please try again.');
        }
      )
      .finally(() => {
        setIsSubmitting(false); // Reset submitting state
      });
  };

  return (
    <Container className="contact-container"  >
      <h2 className="text-center mb-4">Contact Me</h2>

      {/* Success Message */}
      {isSubmitted && (
        <div className="alert alert-success mb-4" role="alert">
          Thank you for your message! I'll get back to you as soon as possible.
        </div>
      )}

      {/* Error Message */}
      {errorMessage && (
        <div className="alert alert-danger mb-4" role="alert">
          {errorMessage}
        </div>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        {/* Phone Number Field */}
        <Form.Group controlId="formPhone" className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone number (e.g. 123-456-7890)"
          />
        </Form.Group>

        <Form.Group controlId="formMessage" className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Send Message'}
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
