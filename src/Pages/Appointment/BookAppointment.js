import React from 'react';
import { format } from 'date-fns';

const BookAppointment = ({ date, bookAppointment, setBookAppointment }) => {
    const { name, slots } = bookAppointment;

    const handleBookAppointment = event => {
        event.preventDefault();

        const bookTime = event.target.timeSlot.value;
        const userName = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;

        setBookAppointment(null);

        console.log(name, bookTime, userName, phone, email);
    }

    return (
        <div>
            <input type="checkbox" id="book-appointment" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <div className='flex items-center'>
                        <h3 class="font-bold text-lg ">{name}</h3>
                        <label for="book-appointment" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <form onSubmit={handleBookAppointment} className='flex flex-col justify-center items-center mt-10'>
                        <input type="text" value={format(date, 'PP')} disabled class="input input-bordered input-md w-full" />
                        <select name='timeSlot' class="select select-bordered w-full my-4">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" class="input input-bordered input-md w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" class="input input-bordered input-md w-full my-4" />
                        <input name='email' type="email" placeholder="Email" class="input input-bordered input-md w-full" />
                        <input type="submit" value="Submit" class="border-0 btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white font-bold uppercase block mx-auto mt-10 w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;