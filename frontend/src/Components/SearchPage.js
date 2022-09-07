import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import leftIcon from '../images/Notifications/Left Icon.png';
import loveIcon from '../images/Home/Right Icon.png';
import notification from '../images/Home/Right Icon (1).png';
import person from '../images/Notifications/Vector.png';
import search from '../images/Notifications/search.png';

const SearchPage = () => {
    const navigate = useNavigate();
    const goToNotifications = () => {
        navigate('/notifications');
    }
    return (
        <div>
            <div className='w-11/12 mx-auto my-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <Link to='/home'><img className='hover:cursor-pointer' src={leftIcon} alt="" /></Link>
                        <Link to='/home'><p className='font-medium text-xl text-[#06283D]'>ImageBook</p></Link>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img className='hover:cursor-pointer' src={loveIcon} alt="" />
                        <img onClick={goToNotifications} className='hover:cursor-pointer' src={notification} alt="" />
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='w-11/12 mx-auto mt-12 flex items-center space-x-3'>
                    <input className='focus:outline-none border-2 border-[#EBF1F4] rounded-[10px] w-[300px] h-12 pl-3 text-[#5E849C] text-lg' type="text" placeholder='Type Here!' name="" id="" />
                    <div className='w-[44px] h-12 shadow-lg rounded-xl flex items-center justify-center'>
                        <img src={person} alt="" />
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 mt-24'>
                    <img src={search} alt="" />
                    <p className='text-[#416C87] text-sm text-center'>Search people by <br /> number</p>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;