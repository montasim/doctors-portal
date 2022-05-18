import React from 'react';
import appointment from '../../Assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }} className='my-40 p-12'>
            <div className='text-center text-white'>
                <h3 className='text-2xl text-[#19D3AE]'>Contact Us</h3>
                <h2 className='text-4xl'>Stay connected with us</h2>
            </div>
            <form className='flex flex-col justify-center items-center mt-10'>
                <input type="email" placeholder="Email Address" class="input input-bordered input-md w-full max-w-xs" />
                <input type="text" placeholder="Subject" class="input input-bordered input-md w-full max-w-xs my-4" />
                <textarea placeholder="Your Message" class="textarea input-bordered input-lg w-full h-32 max-w-xs" />
            </form>
            <button class="border-0 btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white font-bold uppercase block mx-auto mt-10 px-8">Submit</button>
        </div>
    );
};

export default ContactUs;