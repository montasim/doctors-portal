import React from 'react';
import chair from '../../Assets/images/chair.png';

const About = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse lg:justify-between">
                <img src={chair} alt="chair " class="max-w-md rounded-lg shadow-2xl" />
                <div className='w-5/12'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts
                        Here</h1>
                    <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="border-0 btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] text-white font-bold uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;