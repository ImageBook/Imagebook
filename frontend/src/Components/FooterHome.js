import React, { useContext } from "react";
import home from "../images/Home/home.svg";
import film from "../images/Home/film-fill.svg";
import people from "../images/Home/people.svg";
import person from "../images/Home/profile.svg";
// import plus from "../images/Home/plus.png";
import { useNavigate } from "react-router-dom";
import { borderRadius } from "@mui/system";
import UserContext from "../store/userContext";
import plus from '../images/Home/plus.svg';

const FooterHome = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const openSearchHandler = () => {
    navigate("/giveResectSearch");
  };

  const navigateProfileHandler = () => {
    navigate(`/${userCtx.loggedInUser.number}`)
  }

  const navigateToFeed = () => {
    navigate('/good-work-feed');
  }

  return (
    <div className="w-full bg-[#F7F7F7] fixed bottom-0 z-50">
      <div className="flex items-center justify-between w-11/12 mx-auto py-4">
        <img src={home} alt="" />
        <img onClick={navigateToFeed} src={film} alt="" />

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
              
            >
              <img className="mt-[20px]" src={plus} alt="" />
            </div>
          </div>
        </div>
        <img src={people} alt="" />
        <img src={person} onClick={navigateProfileHandler} alt="" />
      </div>
    </div>
  );
};

export default FooterHome;
