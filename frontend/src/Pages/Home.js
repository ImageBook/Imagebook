import React from 'react';
import Navbar from '../components/Navbar';
import RespectReceived from '../components/RespectReceived';
import trophy from '../images/Home/trophy.png';
import SpreadRespect from '../components/SpreadRespect';
import InvitePeople from '../components/InvitePeople';
import FooterHome from '../components/FooterHome';

const Home = () => {
    return (
        <div className='font-poppins relative flex flex-col justify-between min-h-screen'>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto mb-6'>
                <input className='w-full h-12 rounded-[10px] border-2 border-[#EBF1F4] pl-4 focus:outline-none text-lg text-[#5E849C]' type="text" name="" id="" placeholder='Find Respected People' />
            </div>
            <div className='w-11/12 mx-auto flex items-center justify-between space-x-3 mb-6'>
                <button className='w-[180px] h-[52px] rounded-lg font-semibold text-lg text-white bg-[#1363DF]'>Join Contest</button>
                <button className='w-[180px] h-[52px] rounded-lg font-semibold text-lg text-[#416C87]  bg-[#DFF6FF]'>Mission</button>
            </div>
            <div className='w-11/12 h-32 mx-auto mb-6 bg-gradient-to-r from-[#B74CD5] to-[#774CD5] rounded-[10px] relative'>
                <div className='absolute top-[16px] left-[16px]'>
                    <p className='font-semibold text-[22px] text-white leading-none'>Kon Banega, <br /> Respect Pati</p>
                </div>
                <div className='absolute bottom-[16px] left-[16px]'>
                    <p className='font-semibold text-[12px] text-[#E2CCFF]'>Win Minimum ₹5000</p>
                </div>
                <div className='absolute right-[14px] -top-[10px]'>
                    <img src={trophy} alt="" />
                </div>
            </div>
            <RespectReceived></RespectReceived>
            <SpreadRespect></SpreadRespect>
            <InvitePeople></InvitePeople>
            <FooterHome></FooterHome>
        </div>
    );
};

export default Home;