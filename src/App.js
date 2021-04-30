import React, { Fragment, useState } from 'react'
import Form from './components/Form'
import Appointments from './components/Appointments'


function App() {

  // Saves each appointment object into an array
  const [appointments, saveAppointments ] = useState([])

  // Function that creates an appointment
  const createAppointment = appointment => {
    saveAppointments([ ...appointments, appointment ])
  }

  // Function that  eliminates appointment
  const eliminateAppointment = id => {
    const newAppointments = appointments.filter(appointment => (
      appointment.id !== id
    ))
    saveAppointments(newAppointments);
  }

  // Title
  const title = appointments.length === 0 ? "No appointments": "Manage your appointments"
  return (
    <Fragment>
      <h1>Online Consultation</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment =>  (
              <Appointments
                key={appointment.id} 
                appointment={appointment}
                eliminateAppointment={eliminateAppointment}
              />
            ))}
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default App;
