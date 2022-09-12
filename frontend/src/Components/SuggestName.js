import Navigator from "./Navigator";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ContactIcon from "../Assets/smartphone.png";
import { useState } from "react";
import DoYouKnowImage from "../Assets/doYouKnowImage.png";
import yes from "../Assets/yes.png";
import no from "../Assets/no.png";
import RespectModal from "./RespectModal";
import { useLocation, useNavigate } from "react-router-dom";

const SuggestName = () => {
  const [name, setName] = useState("");
  const [modal, setModal] = useState(false);
  const [yesNo,setYesNo] = useState('');
  const navigate = useNavigate(); 
  const location = useLocation();


  const backHandler = () => {
    navigate(-1);
  };

  const closeHandler = () => {
    setModal(false);
  };
  const modalOpenHandler = () => {
    setModal(true);
  };
  return (
    <>
      <Navigator heading="Suggest Name" backHandler={backHandler} />
      <div className="flex items-center gap-2 box-border border-2 rounded-md w-5/6 m-auto mt-[30px]">
        <PersonAddIcon style={{ color: "#5E849C", fontSize: "20px" }} />
        <input
          className="placeholder-gray-500"
          style={{ outline: "none", height: "48px" }}
          type="text"
          placeholder="First Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {name.length === 0 && (
        <div className="flex flex-col gap-8 text-center items-center mt-[100px]">
          <img src={ContactIcon} />
          <p style={{ width: "85%", margin: "auto" }}>
            Please suggest correct first name only else your respect wouldn't
            get Counted
          </p>
        </div>
      )}
      {name.length !== 0 && (
        <>
          <div className="flex flex-col items-center justify-center">
            <img src={DoYouKnowImage} className="mt-[50px]" />
            <div className="flex flex-col gap-[30px]">
              <p className="font-semibold text-lg text-center">
                Does that person know you?
              </p>
              <div className="flex flex-row justify-center gap-4">
                <div
                  className="flex items-center gap-1"
                  style={{
                    backgroundColor: "#D4F7E9",
                    padding: "5px",
                    borderRadius: "5px",
                    opacity:yesNo==='Yes'?"1":"0.5",
                  }}
                  onClick={(e)=>setYesNo('Yes')}
                >
                  <img src={yes} />
                  <p className="text-[#24BF81]">Yes</p>
                </div>
                <div
                  
                  className="flex items-center gap-1"
                  style={{
                    backgroundColor: "#FED4CD",
                    padding: "5px",
                    borderRadius: "5px",
                    opacity:yesNo==='No'?"1":"0.5",
                  }}
                  
                  onClick={(e)=>setYesNo('No')}
                >
                  <img src={no} />
                  <p className="text-[#FC5337]">No</p>
                </div>
              </div>
            </div>
            <button
            disabled={(yesNo!="Yes"&&yesNo!="No")}
              onClick={modalOpenHandler}
              style={{
                backgroundColor: "#1363DF",
                color: "white",
                width: "90%",
                height: "52px",
                borderRadius: "10px",
                margin: "24px",
                opacity: yesNo!==''?"1":"0.5"
              }}
              className="absolute bottom-0"
            >
              Select Purpose
            </button>
          </div>
          {modal && (
            <RespectModal
              name={name}
              number={location.state.id}
              closeHandler={closeHandler}
            />
          )}
        </>
      )}
    </>
  );
};
export default SuggestName;
