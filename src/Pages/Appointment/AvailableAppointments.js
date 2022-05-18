import React, { useEffect, useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import { format } from 'date-fns';
import BookAppointment from './BookAppointment';

const AvailableAppointments = ({ date }) => {
    const [appointments, setAppointments] = useState([]);
    const [bookAppointment, setBookAppointment] = useState(null);

    useEffect(() => {
        fetch('appointments.json')
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, []);
    return (
        <div className='my-20'>
            <h3 className='text-2xl text-center text-[#19D3AE]'>Available Appointments on {format(date, 'PP')}</h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-20'>
                {
                    appointments.map(appointment => <AvailableAppointment appointment={appointment} setBookAppointment={setBookAppointment} />)
                }
                {
                    bookAppointment && <BookAppointment date={date} bookAppointment={bookAppointment} setBookAppointment={setBookAppointment} />
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;