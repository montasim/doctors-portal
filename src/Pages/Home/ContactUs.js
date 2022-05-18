import React from 'react';
import appointment from '../../Assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: `url(${appointment})` }} className='my-40 p-12'>
            <div className='text-center pb-14 text-white'>
                <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-info'>
                    Contact Us
                </p>
                <h1 className='text-4xl'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>

                <button class="mt-6 border-0 btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white font-bold uppercase">Get Started</button>
            </div>
        </div>
    );
};

export default ContactUs;