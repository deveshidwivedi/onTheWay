import React from 'react';

const LocationSearchPanel = (props) => {
    console.log(props);

    const locations = [
        "Flat No. 12B, DLF Tower, Rajendra Place, New Delhi – 110008",
        "301, Oberoi Apartments Andheri West, Mumbai – 400053",
        "56, Malviya Nagar, Near K Tower, Jaipur – 302017",
        "18, Park Street, Near Park Hotel, Kolkata – 700016",
    ];

    return (
        <div>
            {locations.map((location, index) => (
                <div
                    onClick={() => {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }}
                    key={index} className='flex gap-3 border-2 p-3 border-gray-50 active:border-black rounded-xl my-2 items-center justify-start'>
                    <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                        <i className="ri-map-pin-fill"></i>
                    </h2>
                    <h4 className='font-medium'>{location}</h4>
                </div>
            ))}
        </div>
    );
}

export default LocationSearchPanel;
