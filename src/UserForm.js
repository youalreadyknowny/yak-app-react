import React, { Component } from 'react';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      age: '',
      phoneNumber: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, age, phoneNumber } = this.state;
    alert("Thank you for submitting, an email will await you shortly!");

    // Create an object with the form data
    const formData = {
      name,
      email,
      age,
      phoneNumber,
    };

    // Send a POST request to your Node.js server
    fetch('http://localhost:3001/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submission response:', data);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  render() {
    return (
      <div>
        <h1>Yak's 'You Already Know!' Airsoft Tournament</h1>
        <h4>"Cadet Confirmation"</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </div>
          
          <button type="submit">Submit</button>
        </form>
      


  
        
{/* Video Player */}
<div style={{ flex: 1 }}>
        <video width="25%" controls>
          <source src="asv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
        
      
    );
  }
}

export default UserForm;
