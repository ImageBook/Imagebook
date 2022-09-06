import React from 'react';
import leftIcon from '../images/Home/Left Icon.png';
import loveIcon from '../images/Home/Right Icon.png';
import notification from '../images/Home/Right Icon (1).png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto my-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <img className='hover:cursor-pointer' src={leftIcon} alt="" />
                        <Link to='/home'><p className='font-medium text-xl text-[#06283D]'>ImageBook</p></Link>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <img className='hover:cursor-pointer' src={loveIcon} alt="" />
                        <img className='hover:cursor-pointer' src={notification} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;