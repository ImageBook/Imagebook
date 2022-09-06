import React from 'react';
import home from '../images/Home/bxs_home.png';
import film from '../images/Home/film-fill.png';
import trophy from '../images/Home/fluent_trophy-24-filled.png';
import person from '../images/Home/carbon_user-filled.png';
import plus from '../images/Home/plus.png';

const FooterHome = () => {
    return (
            <div className='w-full bg-white fixed bottom-0 z-50'>
                    <div className='flex items-center justify-between mt-10 w-11/12 mx-auto py-4'>
                        <img src={home} alt="" />
                        <img src={film} alt="" />
                        <div className='bg-[#1363DF] rounded-full w-16 h-16 relative shadow -mt-14'>
                            <div className='flex items-center justify-center'>
                                <img className='absolute top-[15px]' src={plus} alt="" />
                            </div>
                        </div>
                        <img src={trophy} alt="" />
                        <img src={person} alt="" />
                    </div>
            </div>

    );
};

export default FooterHome;