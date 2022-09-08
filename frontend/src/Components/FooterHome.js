import React from "react";
import home from "../images/Home/bxs_home.png";
import film from "../images/Home/film-fill.png";
import trophy from "../images/Home/fluent_trophy-24-filled.png";
import person from "../images/Home/carbon_user-filled.png";
import plus from "../images/Home/plus.png";
import { useNavigate } from "react-router-dom";
import { borderRadius } from "@mui/system";

const FooterHome = () => {
  const navigate = useNavigate();
  const openSearchHandler = () => {
    navigate("/giveResectSearch");
  };

  return (
    <div className="w-full bg-[#F7F7F7] fixed bottom-0 z-50">
      <div className="flex items-center justify-between w-11/12 mx-auto py-4">
        <img src={home} alt="" />
        <img src={film} alt="" />

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            width: "4.5rem",
            height: "4.5rem",
            marginTop:"-50px",
            borderRadius:"9999px"
          }}
        >
          <div className="bg-[#1363DF] rounded-full w-16 h-16 m-[5px] shadow " style={{marginTop: "-15px",
    marginLeft: "-15px"}}>
            <div
              className="flex items-center justify-center"
              onClick={openSearchHandler}
            >
              <img className="mt-[15px]" src={plus} alt="" />
            </div>
          </div>
        </div>
        <img src={trophy} alt="" />
        <img src={person} alt="" />
      </div>
    </div>
  );
};

export default FooterHome;
