import React, { useEffect, useState } from 'react';
import girl from '../images/girl.png';
import clock from '../images/clock.png';
import smallImg from '../images/Small Card Images.png';
import dots from '../images/more-horizontal.png';
import playVideo from '../images/playVideo.png';
import reacts from '../images/Thumbnail reaction indicator.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const EachRespect = (props) => {
    const [reciever, setReciever] = useState({});
    const [sender, setSender] = useState({});
    const navigate = useNavigate();

    const videoData = {
        senderName: sender?.name,
        recieverName: reciever?.name,
        video: props.url,
        senderImage: sender?.image
    };
    // 

    useEffect(() => {
        getSender();
        getReciever();
    }, []);

    const getSender = async () => {
        const res = await axios.get(
            `http://localhost:5000/getUsers/${props.sender}`
        );
        const data = res?.data;
        setSender(data[0]);
    };

    const getReciever = async () => {
        const res = await axios.get(
            `http://localhost:5000/getUsers/${props.reciever}`
        );
        const data = res?.data;
        setReciever(data[0]);
    };

    // const id = props.id;
    // console.log('id', id);

    const goToDisplayVideo = () => {
        navigate(`/watch-video`, {
            state: {
                senderName: sender?.name,
                recieverName: reciever?.name,
                video: props.url,
                senderImage: sender?.image
            }
        });
    }

    return (
        <div className="w-11/12 mx-auto rounded-2xl ">
            <div onClick={goToDisplayVideo} className="relative">
                <video
                    style={{ height: "200px", minHeight: "200px", transform: props.cameraUsed === 'user' ? "scaleX(-1)" : '' }}
                    className="rounded-t-2xl w-full h-[100px]"
                    src={props.url}
                    alt=""
                />
                <img className="absolute bottom-4 left-4" src={playVideo} alt="" />
            </div>
            <div className="flex items-center justify-between bg-[#F2F6F8] rounded-b-2xl py-3 ">
                <div className="pl-[10px] flex gap-2 items-center">
                    <img
                        className="w-[50px] h-[50px]"
                        style={{ borderRadius: "100px" }}
                        src={sender?.image}
                        alt=""
                    />
                    <div className="flex flex-col items-start space-y-1">
                        <p className="text-[#1B2328] text-sm ">
                            {sender?.name} <span className="font-bold">Respected</span>{" "}
                            {reciever?.name}
                        </p>
                        <div className="flex items-center space-x-1">
                            <img className="" src={clock} alt="" />
                            <p className="text-[#5E849C] font-medium text-xs">45 min. ago</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={dots} alt="" />
                </div>
            </div>
        </div>
    );
};

export default EachRespect;
