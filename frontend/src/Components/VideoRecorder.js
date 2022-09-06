import Navigator from "./Navigator";
// import axios from 'axios'
import styles from "./VideoRecorder.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import StopCircleOutlinedIcon from "@mui/icons-material/StopCircleOutlined";
import PostControls from "./PostControls";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import StopIcon from "@mui/icons-material/Stop";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

const VideoRecorder = () => {
  const navigate = useNavigate();
  //   const location = useLocation();
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const isInitialMount = React.useRef(true);
  const [recording, recordingHandler] = useState("def");
  const [paused,setPaused] = useState(false)
  const [finalUrl, setFinalUrl] = useState("");
  const [cameraMode, setCameraMode] = useState("user");
  const [submitted, setSubmitted] = useState(false);
  const [newBlob, setNewBlob] = useState("");
  const videoRef =  React.useRef(null);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);

  
  useEffect(() => {
    if (recording === "def") {
      mutePage();
    }
  }, [cameraMode, recording]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (!capturing) {
        handleDownload();
      }
    }
  }, [recordedChunks]);

  function muteMe(elem) {
    elem.muted = true;
  }
  function mutePage() {
    document.querySelectorAll("video").forEach((elem) => muteMe(elem));
  }

  const cameraInvertHandler = () => {
    if (cameraMode === "user") {
      setCameraMode("environment");
    } else if (cameraMode === "environment") {
      setCameraMode("user");
    }
  };

  const handleStartCaptureClick = React.useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
    recordingHandler("recording");
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handlePauseClick = ()=>{
    mediaRecorderRef.current.pause();
    setPaused(true)
  }
  const handleResumeClick = ()=>{
    mediaRecorderRef.current.resume();
    setPaused(false)
  }

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
    recordingHandler("stopped");
    handleDownload();
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = () => {
    if (recordedChunks?.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });

      const myFile = new File([blob], "demo.webm", { type: "video/webm" });

      const url = URL.createObjectURL(blob);
      setNewBlob(myFile);
      setFinalUrl(url);
    }
  };
  const SetRecordingHandler = (prop) => {
    recordingHandler("def");
  };

  const playHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
      var vid = document.getElementById("video-replay");
      setVideoTime(vid.duration);
      console.log(videoTime)
    } else if (control === "pause") {
      videoRef.current.pause();
    }
  };
  const handleProgress = (e) => {
    if (isNaN(e.target.duration))   // duration is NotaNumber at Beginning.
      return;
    setProgress((e.target.currentTime / e.target.duration) * 100);
    console.log(progress)
  };

  const submitHandler = async () => {
    setSubmitted(true);
    // get secure url from our server
    //       const { url } = await fetch("https://respects-task.herokuapp.com/s3Url").then(res => res.json())

    //       // post the image direclty to the s3 bucket
    //       await fetch(url, {
    //         method: "PUT",
    //         headers: {
    //           "Access-Control-Allow-Origin":"*",
    //           "Access-Control-Request-Headers":"*",
    //           "Content-Type": "video/webm"
    //         },
    //         body: newBlob
    //       })

    //       const imageUrl = url.split('?')[0]

    //    // post requst to my server
    //       postData(imageUrl);
  };

  //   const postData = (url)=>{

  //     const obj={

  //       number: location.state.id,
  //       respects:{
  //         postedBy:"+91-1234567890",
  //         cameraUsed:cameraMode,
  //         selectedRank:location.state.selectedRank,
  //         url:url
  //       }
  //     }

  //       axios.post('https://respects-task.herokuapp.com/updateRespects',obj).then(()=>{
  //         showProfile(location.state.id);
  //       })
  //   }

  //   const showProfile =(id)=>{
  //     navigate('/profile',{state:{id:id}})
  //   }

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <>
      {!submitted && (
        <div className={styles.main}>
          <Navigator
            heading="Video Review"
            backHandler={backHandler}
            type="overlay"
          />
          <div className={styles.container}>
            <div>
              {(recording === "def" || recording === "recording") && (
                <>
                  {cameraMode === "user" && (
                    <Webcam
                      ref={webcamRef}
                      audio={true}
                      mirrored={true}
                      videoConstraints={{ facingMode: "user" }}
                    />
                  )}
                  {cameraMode === "environment" && (
                    <Webcam
                      ref={webcamRef}
                      audio={true}
                      videoConstraints={{
                        facingMode: { exact: "environment" },
                      }}
                    />
                  )}
                  <div className={styles.controlsWrapper}>
                    <div className={styles.controls}>
                    {!capturing ? (
                      <button className={styles.buttonWhite}>
                        <AutoAwesomeIcon />
                      </button>
                    ) : (
                      <button className={styles.buttonWhite}>
                        {!paused && <div onClick={handlePauseClick}><PauseCircleOutlineIcon /></div>}
                        {paused && <div onClick={handleResumeClick} ><RadioButtonCheckedOutlinedIcon style={{color:"red"}}/></div>}
                      </button>
                    )}
                    {capturing ? (
                      <button
                        className={styles.buttonWhite}
                        onClick={handleStopCaptureClick}
                        style={{ marginRight: "20px" }}
                      >
                        <CountdownCircleTimer
                          isPlaying={(capturing && !paused)}
                          duration={60}
                          colors={["#FC5337"]}
                          colorsTime={[60]}
                          strokeWidth={5}
                          rotation={0}
                          size={70}
                          onComplete={handleStopCaptureClick}
                        ></CountdownCircleTimer>
                        <StopIcon
                          style={{
                            color: "#FC5337",
                            position: "absolute",
                            marginTop: "-50px",
                            fontSize: "2rem",
                            marginLeft: "-5px",
                          }}
                        />
                      </button>
                    ) : (
                      <button
                        className={styles.button}
                        onClick={handleStartCaptureClick}
                      />
                    )}
                    <button
                      className={styles.buttonWhite}
                      onClick={cameraInvertHandler}
                    >
                      <FlipCameraAndroidIcon />
                    </button>
                  </div>
                  </div>
                </>
              )}
              {recording === "stopped" && (
                <>
                  <video
                    id="video-replay"
                    onProgress={handleProgress}
                    src={finalUrl}
                    ref={videoRef}
                    style={{
                      transform: cameraMode === "user" ? "scaleX(-1)" : "",
                    }}
                    muted={false}
                    loop
                  ></video>
                  {console.log(progress)}
                  <PostControls
                    playHandler={playHandler}
                    submitHandler={submitHandler}
                    SetRecordingHandler={SetRecordingHandler}
                    progress={progress}
                  />
                 
                </>
              )}
            </div>
          </div>
        </div>
      )}
      {submitted && <p>submitted</p>}
    </>
  );
};
export default VideoRecorder;
