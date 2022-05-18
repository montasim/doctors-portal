import React from 'react';

const Testimonial = ({ img, name, location }) => {
    return (
        <div className='shadow-lg rounded-lg p-5'>
            <div>
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            </div>
            <div className='mt-5'>
                <div class="card card-side bg-base-100">
                    <figure><img src={img} alt="Movie" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;