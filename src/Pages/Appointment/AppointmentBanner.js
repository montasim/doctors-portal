import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../Assets/images/bg.png';
import chair from '../../Assets/images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} class="hero min-h-screen">
            <div class="hero-content flex justify-between items-center">
                <div>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                </div>

                <img src={chair} alt="chair " class="block max-w-lg rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default AppointmentBanner;