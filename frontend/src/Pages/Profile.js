import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navigator from "../components/Navigator";
import ShieldIcon from "@mui/icons-material/Shield";
import axios from 'axios'
import VideocamIcon from '@mui/icons-material/Videocam';
import UserContext from "../store/userContext";
import EachRespect from "../components/EachRespect";

const Profile = () => {

  const userCtx = useContext(UserContext)
  const params = useParams();
  const [obj, setObj] = useState({});
  const [type, setType] = useState('given')
  const navigate = useNavigate()
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [notExist, setNotExist] = useState(false);


  useEffect(() => {
    getUser();

    if (params.id === userCtx.loggedInUser.number) {
      setIsMyProfile(true);
    }

  }, []);

  const getUser = async () => {
    const response = await axios.get(`https://imagebook-digilabs.herokuapp.com/getUsers/${params.id}`)
    const data = response?.data;
    if (data.length === 0) {
      setNotExist(true);
    }
    setObj(data[0]);
  }



  const videoOpenHandler = () => {
    navigate('/video', { state: { id: params.id } })
  }

  const backHandler = () => {
    navigate('/home')
  }
  return (
    <>

      <Navigator heading="Profile" backHandler={backHandler} icon="share" />
      {!notExist && <><div className="flex flex-col items-center gap-3 justify-center mt-[40px]">
        <img
          style={{ width: "75px", height: "75px", borderRadius: "50%" }}
          src={obj?.image}
        />
        <p className="text-xl font-semibold">{obj?.name}</p>
        <p style={{ color: "#5E849C" }} className="text-sm font-semibold">
          {obj?.number}
        </p>
        <div
          style={{
            background: "linear-gradient(270deg, #6A11CB 0%, #2575FC 100%)",
          }}
          className="flex items-center gap-1 text-white px-[10px] py-[2px] rounded-xl"
        >
          <ShieldIcon style={{ fontSize: "17px" }} />
          <p className="text-sm font-semibold">{`${(obj.recievedRespects?.length / obj.givenRespects?.length) * 100}%`}</p>
        </div>
      </div>
        <div
          style={{ backgroundColor: "#EBF1F4" }}
          className=" flex text-center items-center w-11/12 mt-[24px] mx-auto h-[50px] rounded-md"
        >
          <div style={{ backgroundColor: type === 'given' ? 'white' : '' }} className="flex gap-2 justify-center items-center w-1/2 ml-[2px] mr-[2px] h-[46px] rounded-md" onClick={(e) => setType('given')}>
            <p style={{ color: "#416C87" }}>Given</p>
            <p
              style={{ borderColor: "#416C87" }}
              className="border-2 text-xs rounded-md px-1"
            >
              {obj?.givenRespects?.length}
            </p>
          </div>
          <div style={{ backgroundColor: type === 'recieved' ? 'white' : '' }} className=" flex gap-2 justify-center items-center w-1/2 ml-[2px] mr-[2px] h-[46px] rounded-md" onClick={(e) => setType('recieved')}>
            <p style={{ color: "#416C87" }}>Recieved</p>
            <p
              style={{ borderColor: "#416C87" }}
              className="border-2 text-xs rounded-md px-1"
            >
              {obj?.recievedRespects?.length}
            </p>
          </div>
        </div>
        <div className="mt-[20px]">
          {type === 'given' && obj?.givenRespects?.map((each) => <EachRespect sender={each.postedBy} url={each.url} reciever={each.postedFor} />)}
          {type === 'recieved' && obj?.recievedRespects?.map((each) => <EachRespect sender={each.postedBy} url={each.url} reciever={each.postedFor} />)}
        </div>
        {!isMyProfile && <div style={{ backgroundColor: "#1363DF", borderRadius: "100px" }} className="fixed bottom-[50px] right-[35px] text-white p-5 rounded-4xl" onClick={videoOpenHandler}>
          <VideocamIcon style={{ fontSize: "30px" }} />
        </div>}</>}
      {notExist && <h1 style={{ height: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: "800" }}>User Does Not Exist</h1>}
    </>
  );
};
export default Profile;
