import React from 'react';
import Service from './Service';
import fluoride from '../../Assets/images/fluoride.png';
import cavity from '../../Assets/images/cavity.png';
import whitening from '../../Assets/images/whitening.png';

const Services = () => {
    return (
        <div className='mx-14 my-40'>
            <div className='text-center'>
                <h3 className='text-xl text-[#19D3AE]'>OUR SERVICES</h3>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
                <Service cardTitle="Fluoride Treatment" cardBody="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={fluoride} />
                <Service cardTitle="Cavity Filling" cardBody="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={cavity} />
                <Service cardTitle="Teeth Whitening" cardBody="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={whitening} />
            </div>
        </div>
    );
};

export default Services;