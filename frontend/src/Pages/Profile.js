import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navigator from "../components/Navigator";
import ShieldIcon from "@mui/icons-material/Shield";
import VideocamIcon from '@mui/icons-material/Videocam';

const Profile = () => {
  const arr = [
    {
      name: "Aarush Mishra",
      number: "+9189237348934",
      img: "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
    },
    {
      name: "Bhageerathi Patel",
      number: "+9189237348999",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];
  const params = useParams();
  const [obj, setObj] = useState({});
  const [type, setType] = useState('given')
  const navigate = useNavigate()

  useEffect(() => {
    setObj(arr.find((obj) => obj.number === params.id));
  }, []);

  const videoOpenHandler = () => {
    navigate('/video')
  }

  const backHandler = ()=>{
    navigate('/home')
  }
  return (
    <>
      <Navigator heading="Profile" backHandler={backHandler} icon="share" />
      <div className="flex flex-col items-center gap-3 justify-center mt-[40px]">
        <img
          style={{ width: "75px", height: "75px", borderRadius: "50%" }}
          src={obj?.img?obj?.img:'https://i.stack.imgur.com/l60Hf.png'}
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
          <p className="text-sm font-semibold">134%</p>
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
            205
          </p>
        </div>
        <div style={{ backgroundColor: type === 'recieved' ? 'white' : '' }} className=" flex gap-2 justify-center items-center w-1/2 ml-[2px] mr-[2px] h-[46px] rounded-md" onClick={(e) => setType('recieved')}>
          <p style={{ color: "#416C87" }}>Recieved</p>
          <p
            style={{ borderColor: "#416C87" }}
            className="border-2 text-xs rounded-md px-1"
          >
            300
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#1363DF", borderRadius: "100px" }} className="fixed bottom-[50px] right-[35px] text-white p-5 rounded-4xl" onClick={videoOpenHandler}>
        <VideocamIcon style={{ fontSize: "30px" }} />
      </div>
    </>
  );
};
export default Profile;
