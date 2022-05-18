import React from 'react';
import doctor from '../../Assets/images/doctor.png';
import appointment from '../../Assets/images/appointment.png';

const AboutAppointment = () => {
    return (

        <div style={{ backgroundImage: `url(${appointment})` }} className='my-40 p-12'>
            <div class="hero-content flex-col lg:flex-row-reverse lg:justify-between">
                <div className='w-5/12 text-white'>
                    <h1 className='text-2xl text-[#19D3AE]'>Appointment</h1>
                    <h1 class="text-5xl font-bold">Make an appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="border-0 btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white font-bold uppercase">Get Started</button>
                </div>
                <img style={{ marginTop: '-180px' }} src={doctor} alt="chair " class="max-w-lg" />
            </div>
        </div>
    );
};

export default AboutAppointment;