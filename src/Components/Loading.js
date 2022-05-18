import React from 'react';

const Loading = ({ loadingColor }) => {
    return (
        <div className='flex h-screen items-center justify-center'>
            <progress className={`progress ${loadingColor} w-56`} />
        </div>
    );
};

export default Loading;