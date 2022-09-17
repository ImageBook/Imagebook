import React, { useContext } from "react";
import home from "../images/Feed/home.svg";
import film from "../images/Feed/filmBlue.svg";
import people from "../images/Home/people.svg";
import person from "../images/Home/profile.svg";
import { useNavigate } from "react-router-dom";
import plus from '../images/Home/plus.svg';
import UserContext from "../store/userContext";
import video from '../images/Feed/1.mp4';
import sortIcon from '../images/Feed/sortBy.svg';
import emoji1 from '../images/Profile/Expand extention.svg';
import emoji2 from '../images/Profile/Reward Trust.svg';
import emoji4 from '../images/Profile/Polygon_16.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const GoodWorkFeed = () => {
    const userCtx = useContext(UserContext);
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home');
    }
    const openSearchHandler = () => {
        navigate("/giveResectSearch");
    };
    const navigateProfileHandler = () => {
        navigate(`/${userCtx.loggedInUser.number}`)
    }

    return (
        <div className=' '>
            <p className="fixed top-6 left-3 text-white text-lg font-medium z-50">Feed</p>
            <img className="fixed top-6 right-3 z-50" src={sortIcon} alt="" />
            <div className="">
                <div className="relative">
                    <video style={{ minHeight: 'calc(100vh - 55px)' }} className='w-full' autoplay loop src={video}></video>
                    <div className='absolute right-4 bottom-36 '>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <img className='' src={emoji1} alt="" />
                            <img className='' src={emoji2} alt="" />
                            <img className='pt-1 z-50' src={emoji4} alt="" />
                        </div>
                    </div>
                    <div className='absolute bottom-20 right-[26px] flex justify-center items-center'>
                        <MoreVertIcon className='text-white w-[20px] h-[20px]'></MoreVertIcon>
                    </div>
                    <div className='absolute bottom-[70px] left-3'>
                        <div className='flex items-center space-x-3 text-white'>
                            <AccountCircleIcon style={{ width: '50px', height: '50px' }} className=''></AccountCircleIcon>
                            <div className='flex flex-col items-start space-y-1'>
                                <p className='text-sm w-[270px]'>Arush <span className='font-bold'>Respected</span> Ariful</p>
                                <div className='flex items-center space-x-1'>
                                    <AccessTimeIcon style={{ width: '18px', height: '18px' }} className='text-white'></AccessTimeIcon>
                                    <p className='font-medium text-xs'>45 min ago.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <video style={{ minHeight: 'calc(100vh - 55px)' }} className='w-full' autoplay loop src={video}></video>
                    <div className='absolute right-4 bottom-28 '>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <img className='' src={emoji1} alt="" />
                            <img className='' src={emoji2} alt="" />
                            <img className='pt-1 z-50' src={emoji4} alt="" />
                        </div>
                    </div>
                    <div className='absolute bottom-20 right-[26px] flex justify-center items-center'>
                        <MoreVertIcon className='text-white w-[20px] h-[20px]'></MoreVertIcon>
                    </div>
                    <div className='absolute bottom-[70px] left-3'>
                        <div className='flex items-center space-x-3 text-white'>
                            <AccountCircleIcon style={{ width: '50px', height: '50px' }} className=''></AccountCircleIcon>
                            <div className='flex flex-col items-start space-y-1'>
                                <p className='text-sm w-[270px]'>Bhageerathi <span className='font-bold'>Respected</span> Ariful</p>
                                <div className='flex items-center space-x-1'>
                                    <AccessTimeIcon style={{ width: '18px', height: '18px' }} className='text-white'></AccessTimeIcon>
                                    <p className='font-medium text-xs'>45 min ago.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <video style={{ minHeight: 'calc(100vh - 55px)' }} className='w-full' autoplay loop src={video}></video>
                    <div className='absolute right-4 bottom-28 '>
                        <div className='space-y-3 flex flex-col justify-center items-center'>
                            <img className='' src={emoji1} alt="" />
                            <img className='' src={emoji2} alt="" />
                            <img className='pt-1 z-50' src={emoji4} alt="" />
                        </div>
                    </div>
                    <div className='absolute bottom-20 right-[26px] flex justify-center items-center'>
                        <MoreVertIcon className='text-white w-[20px] h-[20px]'></MoreVertIcon>
                    </div>
                    <div className='absolute bottom-[70px] left-3'>
                        <div className='flex items-center space-x-3 text-white'>
                            <AccountCircleIcon style={{ width: '50px', height: '50px' }} className=''></AccountCircleIcon>
                            <div className='flex flex-col items-start space-y-1'>
                                <p className='text-sm w-[270px]'>Everyone <span className='font-bold'>Respected</span> Ariful</p>
                                <div className='flex items-center space-x-1'>
                                    <AccessTimeIcon style={{ width: '18px', height: '18px' }} className='text-white'></AccessTimeIcon>
                                    <p className='font-medium text-xs'>45 min ago.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Footer */}
            <div className="w-full bg-white fixed bottom-0 z-50">
                <div className="flex items-center justify-between w-11/12 mx-auto py-4">
                    <img onClick={goHome} src={home} alt="" />
                    <img src={film} alt="" />

                    <div
                        style={{
                            backgroundColor: "white",
                            padding: "20px",
                            width: "4.5rem",
                            height: "4.5rem",
                            marginTop: "-50px",
                            borderRadius: "9999px"
                        }}
                    >
                        <div className="bg-[#1363DF] rounded-full w-16 h-16 m-[5px] shadow " style={{
                            marginTop: "-15px",
                            marginLeft: "-15px"
                        }}>
                            <div
                                className="flex items-center justify-center"
                                onClick={openSearchHandler}
                            >
                                <img className="mt-[20px]" src={plus} alt="" />
                            </div>
                        </div>
                    </div>
                    <img src={people} alt="" />
                    <img src={person} onClick={navigateProfileHandler} alt="" />
                </div>
            </div>
        </div>
    );
};

export default GoodWorkFeed;