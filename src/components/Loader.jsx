import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-116px)]'>
            <ScaleLoader></ScaleLoader>
        </div>
    );
};

export default Loader;