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
            `https://imagebook-digilabs.herokuapp.com/getUsers/${props.sender}`
        );
        const data = res?.data;
        setSender(data[0]);
    };

    const getReciever = async () => {
        const res = await axios.get(
            `https://imagebook-digilabs.herokuapp.com/getUsers/${props.reciever}`
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
                senderImage: sender?.image,
                cameraUsed: props.cameraUsed
            }
        });
    }

    return (
        <div className="mx-auto" onClick={goToDisplayVideo}>
            
                <video
                    style={{ height: "250px", minHeight: "200px", transform: props.cameraUsed === 'user' ? "scaleX(-1)" : '' }}
                    className=" w-full h-[100px]"
                    src={props.url}
                    alt=""
                />
                
        </div>
    );
};

export default EachRespect;
