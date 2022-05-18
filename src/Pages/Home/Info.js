import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../Assets/icons/clock.svg';
import marker from '../../Assets/icons/marker.svg';
import phone from '../../Assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='mx-14 grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" cardTitle="Opening Hours" cardDespriction="Lorem Ipsum is simply dummy text of the pri" img={clock} />
            <InfoCard bgClass="bg-[#3A4256]" cardTitle="Visit our location" cardDespriction="Brooklyn, NY 10036, United States" img={marker} />
            <InfoCard bgClass="bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC]" cardTitle="Contact us now" cardDespriction="+000 123 456789" img={phone} />
        </div>
    );
};

export default Info;