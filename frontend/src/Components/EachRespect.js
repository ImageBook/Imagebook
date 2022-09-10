import React from 'react';
import girl from '../images/girl.png';
import clock from '../images/clock.png';
import smallImg from '../images/Small Card Images.png';
import dots from '../images/more-horizontal.png';
import playVideo from '../images/playVideo.png';

const EachRespect = () => {
    return (
        <div className='bg-white h-[250px] my-6'>
            <div className='w-11/12 mx-auto rounded-2xl '>
                <div className='relative'>
                    <img className='rounded-t-2xl w-full' src={girl} alt="" />
                    <img className='absolute bottom-4 left-4' src={playVideo} alt="" />
                </div>
                <div className='flex items-center justify-evenly bg-[#F2F6F8] rounded-b-2xl py-3 '>
                    <img className='w-[72px] h-[72px]' src={smallImg} alt="" />
                    <div className='flex flex-col items-start space-y-1'>
                        <p className='text-[#1B2328] text-sm '>Bhageerathi <span className='font-bold'>Respected</span> Arush</p>
                        <div className='flex items-center space-x-1'>
                            <img className='' src={clock} alt="" />
                            <p className='text-[#5E849C] font-medium text-xs'>45 min. ago</p>
                        </div>
                    </div>
                    <div>
                        <img src={dots} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachRespect;