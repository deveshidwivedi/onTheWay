import React from 'react';

const LocationSearchPanel = () => {
    return (
        <div>
            <div className='flex gap-3 border-2 p-3 border-gray-50 active:border-black  rounded-xl my-2 items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'> Flat No. 12B, DLF Tower, Rajendra Place, New Delhi – 110008</h4>
            </div>
            <div className='flex gap-3 border-2 p-3 border-gray-50 active:border-black  rounded-xl my-2 items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>301, Oberoi Apartments Andheri West, Mumbai – 400053</h4>
            </div>
            <div className='flex gap-3 border-2 p-3 border-gray-50 active:border-black  rounded-xl my-2 items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>56, Malviya Nagar, Near K Tower, Jaipur – 302017</h4>
            </div>
            <div className='flex gap-3 border-2 p-3 border-gray-50 active:border-black  rounded-xl my-2 items-center justify-start'>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i class="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'> 18, Park Street, Near Park Hotel, Kolkata – 700016</h4>
            </div>
        </div>
    );
}

export default LocationSearchPanel;