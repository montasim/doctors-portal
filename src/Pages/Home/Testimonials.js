import React from 'react';
import quote from '../../Assets/icons/quote.svg';
import Testimonial from './Testimonial';
import people1 from '../../Assets/images/people1.png';
import people2 from '../../Assets/images/people2.png';
import people3 from '../../Assets/images/people3.png';

const Testimonials = () => {
    return (
        <div className='mx-14'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-2xl text-[#19D3AE]'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-[192px] h-[156px]' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-12'>
                <Testimonial name={'Winson Herry'} location={'California'} img={people1} />
                <Testimonial name={'Winson Herry'} location={'Calofornia'} img={people2} />
                <Testimonial name={'Winson Herry'} location={'Calofornia'} img={people3} />
            </div>
        </div>
    );
};

export default Testimonials;