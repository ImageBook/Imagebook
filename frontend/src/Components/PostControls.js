import styles from "./VideoRecorder.module.css";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import PauseIcon from "@mui/icons-material/Pause";

const PostControls = (props) => {
  const [playing, setPlaying] = useState(false);
  const playHandler = () => {
    setPlaying(true);
    props.playHandler("play");
  };
  const pauseHandler = () => {
    setPlaying(false);
    props.playHandler("pause");
  };
  return (
    <div className={styles.controlsWrapper}>
    <div className={styles.controls}>
      <button
        className={styles.buttonWhite}
        onClick={(e) => props.SetRecordingHandler("def")}
      >
        <ReplayIcon />
      </button>
      {!playing && (
        <button
          style={{ color: "white" }}
          className={styles.button}
          onClick={playHandler}
        >
          <PlayArrowIcon />
        </button>
      )}
      {playing && (
        <button
          style={{ color: "white" }}
          className={styles.button}
          onClick={pauseHandler}
        >
          <PauseIcon />
        </button>
      )}

      <button
        className={styles.buttonWhite}
        onClick={(e) => props.submitHandler()}
      >
        <CheckIcon />
      </button>
    </div>
    <div style={{backgroundColor:"white",height:"8px",width:"80%",margin:"auto",borderRadius:"10px"}}>
        <div style={{
            width:props.progress,
            backgroundColor:"#47B5FF",
            height:"8px",borderRadius:"10px"
        }}>

        </div>
    </div>
    </div>
  );
};
export default PostControls;
