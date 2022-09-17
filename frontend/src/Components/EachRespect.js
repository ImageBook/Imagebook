import React, { useEffect, useState } from 'react';
import girl from '../images/girl.png';
import clock from '../images/clock.png';
import smallImg from '../images/Small Card Images.png';
import dots from '../images/more-horizontal.png';
import playVideo from '../images/playVideo.png';
import reacts from '../images/Thumbnail reaction indicator.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import playIcon from '../images/Profile/play_circle.svg';


const EachRespect = (props) => {
    // const [reciever, setReciever] = useState({});
    // const [sender, setSender] = useState({});
    const navigate = useNavigate();

    // const videoData = {
    //     senderName: sender?.name,
    //     recieverName: reciever?.name,
    //     video: props.url,
    //     senderImage: sender?.image
    // };
    const { each } = props;


    // useEffect(() => {
    //     getSender();
    //     getReciever();
    // }, []);

    // const getSender = async () => {
    //     const res = await axios.get(
    //         `https://imagebook-digilabs.herokuapp.com/getUsers/${props.sender}`
    //     );
    //     const data = res?.data;
    //     setSender(data[0]);
    // };

    // const getReciever = async () => {
    //     const res = await axios.get(
    //         `https://imagebook-digilabs.herokuapp.com/getUsers/${props.reciever}`
    //     );
    //     const data = res?.data;
    //     setReciever(data[0]);
    // };

    const goToDisplayVideo = () => {
        navigate(`/watch-video`, { state: { video: each } });
    }

    return (
        <div onClick={goToDisplayVideo} className='mx-auto relative hover:cursor-pointer'>
            <video
                style={{ height: "180px", minHeight: "180px" }}
                className=" w-[120px] h-[100px] rounded-lg"
                src={each.url}
                alt=""
            />
            <img className='absolute bottom-3 left-3' src={playIcon} alt="" />
            <p className='absolute bottom-3 right-3 text-white text-sm font-semibold'>1.1K</p>
        </div>
        // <div className="mx-auto" onClick={goToDisplayVideo}>

        //         <video
        //             style={{ height: "250px", minHeight: "200px", transform: props.cameraUsed === 'user' ? "scaleX(-1)" : '' }}
        //             className=" w-full h-[100px]"
        //             src={props.url}
        //             alt=""
        //         />

        // </div>
    );
};

export default EachRespect;
