import React from 'react';
import leftIcon from '../images/Notifications/Left Icon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import emoji1 from '../images/Profile/Expand extention.svg';
import emoji2 from '../images/Profile/Reward Trust.svg';
import emoji3 from '../images/Send Clap.png';
import emoji4 from '../images/Profile/Polygon_16.svg';
import dots from '../images/more-horizontal.png';
import clock from '../images/clock.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const DisplayVideo = () => {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate(-1);
    }

    const { state } = useLocation();
    // const video = location.state.video;
    // console.log('video', state.video);
    const video = state.video;

    return (
        <div>
            <div className='relative object-cover w-full'>
                <video className='object-cover w-full h-screen' autoPlay loop src={video.url}></video>
                <div className='absolute right-4 bottom-28 '>
                    <div className='space-y-3 flex flex-col justify-center items-center'>
                        <img className='' src={emoji1} alt="" />
                        <img className='' src={emoji2} alt="" />
                        <img className='pt-1' src={emoji4} alt="" />
                    </div>
                </div>
                <div className='absolute top-6 left-3'>
                    <div className='flex items-center space-x-2'>
                        <ArrowBackIcon onClick={goToProfile} className='text-white w-[18px] h-[16px]'></ArrowBackIcon>
                        <p className='font-medium text-xl text-white'>Watch Video</p>
                    </div>
                </div>
                <div className='absolute bottom-12 right-[26px] flex justify-center items-center'>
                    <MoreVertIcon className='text-white w-[20px] h-[20px]'></MoreVertIcon>
                </div>
                <div className='absolute bottom-6 left-3'>
                    <div className='flex items-center space-x-3 text-white'>
                        {/* <img src={emoji3} alt="" /> */}
                        <AccountCircleIcon style={{width: '50px', height: '50px'}} className=''></AccountCircleIcon>
                        <div className='flex flex-col items-start space-y-1'>
                            <p className='text-sm w-[270px]'>{video.postedBy} <span className='font-bold'>Respected</span> {video.postedFor}</p>
                            <div className='flex items-center space-x-1'>
                                <AccessTimeIcon style={{width: '18px', height: '18px'}} className='text-white'></AccessTimeIcon>
                                <p className='font-medium text-xs'>45 min ago.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DisplayVideo;