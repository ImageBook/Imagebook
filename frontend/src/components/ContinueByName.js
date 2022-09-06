import { useNavigate } from 'react-router-dom';
import React from 'react';
import rightIcon from '../images/num-pad/arrow-right.png';

const ContinueByName = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    return (
        <div className='flex flex-col justify-center h-full'>
            <p className='font-semibold text-[#00386D] text-lg ml-8 mb-2'>Enter Your Name</p>
            <form onSubmit={handleSubmit} className=' mx-6'>
                <input className='w-full border-2 border-[#D3DBE3] rounded-[10px] h-12 pl-4 focus:outline-none mb-2' type="text" placeholder='First Name' name="f-name" id="" required />
                <input className='w-full border-2 border-[#D3DBE3] rounded-[10px] h-12 pl-4 focus:outline-none mb-4' type="text" placeholder='Last Name' name="l-name" id="" required />
                <button type='submit' className=' flex items-center justify-center space-x-2 bg-[#1363DF] w-full h-[52px] rounded text-white font-semibold text-lg'>
                    <p>Continue</p>
                    <img src={rightIcon} alt="" />
                </button>
            </form>
        </div>
    );
};

export default ContinueByName;