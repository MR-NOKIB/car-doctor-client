import React from 'react';
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";

const Info = () => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-3 bg-[#151515] text-white px-6 py-16 rounded-lg mt-24'>
            <div className='flex justify-center items-center gap-6'>
                <RiCalendarScheduleLine className='text-4xl text-orange-600' />
                <div>
                    <p className='text-xs font-thin'>We are open monday-friday</p>
                    <h4 className='text-xl'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <FiPhoneCall className='text-4xl text-orange-600' />
                <div>
                    <p className='text-xs font-thin'>We are open monday-friday</p>
                    <h4 className='text-xl'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex justify-center items-center gap-6'>
                <IoLocationSharp  className='text-4xl text-orange-600' />
                <div>
                    <p className='text-xs font-thin'>We are open monday-friday</p>
                    <h4 className='text-xl'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
        </div>
    );
};

export default Info;