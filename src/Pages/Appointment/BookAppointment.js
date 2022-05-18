import React from 'react';
import { format } from 'date-fns';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Hooks/Firebase.Init';

const BookAppointment = ({ date, bookAppointment, setBookAppointment }) => {
    const { name, slots } = bookAppointment;
    const [
        user,
        loading,
        error
    ] = useAuthState(auth);

    const handleBookAppointment = event => {
        event.preventDefault();

        const bookTime = event.target.timeSlot.value;
        const userName = event.target.name.value;
        const phone = event.target.phone.value;
        const email = event.target.email.value;

        setBookAppointment(null);

        console.log(name, bookTime, userName, phone, email);

        toast(<div>
            <h4 className='text-lg font-bold'>Appointment Booked</h4>
            <h5>Name: {name}</h5>
            <p>Date: {format(date, 'PP')}</p>
            <p>Time:{bookTime}</p>
        </div>)
    }

    const defaultUser = user?.email.split('@');
    const defaultUserName = defaultUser[0];

    return (
        <div>
            <input type="checkbox" id="book-appointment" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className='flex items-center'>
                        <h3 className="font-bold text-lg ">{name}</h3>
                        <label htmlFor="book-appointment" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <form onSubmit={handleBookAppointment} className='flex flex-col justify-center items-center mt-10'>
                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered input-md w-full" />
                        <select name='timeSlot' className="select select-bordered w-full my-4">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' defaultValue={user?.displayName || defaultUserName || ''} type="text" className="input input-bordered input-md w-full" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input input-bordered input-md w-full my-4" />
                        <input name='email' defaultValue={user?.email || ''} type="email" className="input input-bordered input-md w-full" />
                        <input type="submit" value="Submit" className="border-0 btn bg-gradient-to-r from-secondary to-primary text-white font-bold uppercase block mx-auto mt-10 w-full" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;