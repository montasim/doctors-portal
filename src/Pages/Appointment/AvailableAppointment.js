import React from 'react';

const AvailableAppointment = ({ appointment, setBookAppointment }) => {
    const { name, slots } = appointment;

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-[#19D3AE] mb-2">{name}</h2>
                <p>{slots.length ? slots[0] : <span className='text-red-400'>No Slot Available!</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div class="card-actions mt-4">
                    <label onClick={() => setBookAppointment(appointment)} disabled={slots.length < 1} for="book-appointment" class="btn btn-primary uppercase text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;