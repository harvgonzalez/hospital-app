import React from 'react';

const Appointments = ({appointment, eliminateAppointment}) => {
    return (
        <div className="cita">
            <p>Name: <span>{appointment.name}</span></p>
            <p>Description: <span>{appointment.description}</span></p>
            <p>Date: <span>{appointment.date}</span></p>
            <p>Time: <span>{appointment.time}</span></p>
            <p>Symptoms: <span>{appointment.symptoms}</span></p>

            <button
                className="button eliminar u-full-width"
                onClick={ () => eliminateAppointment(appointment.id)  }
        >Eliminar &times;</button>
        </div>
    )
}

export default Appointments;