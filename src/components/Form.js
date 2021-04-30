import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4'
const Form = ({createAppointment}) => {

    // Creates a state f appoint 
    const [appointment, setAppointment] = useState({
        name: '',
        description: '',
        date: '',
        time: '',
        symptoms: ''

    })
    // State if there is an error
    const [error, setError] = useState(false)

    // function that executes everytime user types on an input field
    const handleInputChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
            // appointment is an object, here it saves name and value, and ... is used to keep all properties
        })
    }

    // destructuring the props from appointments
    const{name, description, date, time, symptoms} = appointment;

    // Function that handles submit
    const handleSubmit = (e) =>{

        e.preventDefault()

        // Validate form 
        if(name.trim() === '' || description.trim() === '' || date.trim() === '' || time.trim() === '' || symptoms.trim() === ''){
            setError(true)
            return;
        } 
        setError(false)

        // Give ID for each appointment
        appointment.id = uuid()

        // calls the function that saves new appointment object into string
        createAppointment(appointment);

        // Empties fields
        setAppointment({
            name: '',
            description: '',
            date: '',
            time: '',
            symptoms: ''
        })
    }
    return (
        <Fragment>
          <h2>Request appointment</h2>
          { error ? <p className="alert">All fields are required</p>:null}
          <form onSubmit={handleSubmit}>

              <label>Patient Name</label>
              <input 
                type="text"
                name="name"
                placeholder="patient name"
                className="u-full-width"
                onChange={handleInputChange}
                value={name}
              />

              <label>Where does it hurt?</label>
              <input 
                type="text"
                name="description"
                placeholder="wrist and shoulders"
                className="u-full-width"
                onChange={handleInputChange}
                value={description}
              />
              <label>Pick a day</label>
              <input 
                type="date"
                name="date"
                placeholder="time"
                className="u-full-width"
                onChange={handleInputChange}
                value={date}
              />
              <label>Pick a spot available</label>
              <input 
                type="time"
                name="time"
                className="u-full-width"
                onChange={handleInputChange}
                value={time}
              />
              <label>Describe Symptoms</label>
              <textarea
                type="time"
                name="symptoms"
                placeholder="Mild cough and fever..."
                className="u-full-width"
                onChange={handleInputChange}
                value={symptoms}
              ></textarea>
              <button
                type="submit"
                className="u-full-width button-primary"
              >Add appointment</button>
          </form>
        </Fragment>
    )
}

export default Form