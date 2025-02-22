import React, { useContext } from 'react';
import { CaptainDataContext } from '../context/CaptainContext';
import driver from '../assets/driver.jpg';

const CaptainDetails = () => {
    const { captain } = useContext(CaptainDataContext);

    return (
        <div>
            <div className='flex p-3 rounded-full items-center justify-between '>
                <div className='flex items-center justify-start gap-3 '>
                    <img className='h-16 w-16 rounded-full object-cover' src={driver} alt='driver' />
                    <h4 className='text-lg font-medium'>
                        {captain ? `${captain.firstName} ${captain.lastName}` : 'Loading...'}
                    </h4>
                </div>
                <div className='mr-2'>
                    <h4 className='text-xl font-semibold'>₹189.20</h4>
                    <p className='text-sm text-gray-400 text-center'>Earned</p>
                </div>
            </div>
            <div className='flex justify-center gap-5 rounded-xl p-4 items-start bg-gray-100'>
                <div className='text-center'>
                    <i className='text-2xl font-thin ri-timer-2-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-2xl font-thin ri-speed-up-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className='text-2xl font-thin ri-booklet-line'></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
            </div>
        </div>
    );
};

export default CaptainDetails;