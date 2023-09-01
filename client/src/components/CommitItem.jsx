import React from 'react';

const CommitItem = ({ name, photo, date, time, id, username }) => {
    return (
        <>
            {/* Desktop layout: Will be hidden on smaller screens */}
            <div className="hidden sm:flex justify-between items-center border-b border-[#390062] p-4">
                <div className="flex w-4/5">
                    <div className="flex-grow">
                        <div className="text-white mb-2"># {name}</div>
                        <div className="flex items-center">
                            <img src={photo} alt="User" className="w-10 h-10 rounded-full mr-4" />
                            <div className="mr-4">{username}</div>
                            <div className="mr-4">{date}</div>
                            <div>{time}</div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/5  p-2 sm:p-4 rounded text-center">
                    <div className=" bg-[#8b2fc9] p-2 rounded-lg">{id}</div>
                </div>
            </div>

            {/* Mobile layout: Will be displayed on smaller screens */}
            <div className="sm:hidden flex justify-between items-center border-b border-white p-4">
                <div className="flex w-3/4 flex-col">
                    <div className="mb-2">{name}</div>
                    <div className="flex items-center mb-2">
                        <img src={photo} alt="User" className="w-10 h-10 rounded-full mr-4" />
                        <div className="mr-4">{username}</div>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <div>{date}</div>
                        <div>{time}</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/4 ml-auto p-2 rounded text-center">
                    <div className=" bg-[#8b2fc9] p-1 rounded-lg mb-24">{id}</div>
                </div>
            </div>
        </>
    );
};

export default CommitItem;