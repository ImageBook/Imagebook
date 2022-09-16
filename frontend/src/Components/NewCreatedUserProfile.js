import axios from "axios";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import how_to_reg from '../Assets/how_to_reg.png'

const NewCreatedUserProfile = ()=>{
    const [user,setUser] = useState({});
    const location = useLocation();

    useEffect(()=>{
        loadUser();
    },[])
    const loadUser = async ()=>{
        const res = await axios.get(`http://localhost:5000/getUsers/${location.state.id}`)
        const data = res.data;

        setUser({name:data[0].name,
            image:data[0].image,
        number:data[0].number,
        registered:data[0].registered})
    }

    return(
        <><div className="flex flex-col w-full items-center gap-1 mt-[80px]">
            <img style={{height:"70px",width:"70px",borderRadius:"100px"}} src={user?.image} />
            <p className="text-xl font-semibold">{user?.name}</p>
            <p>{user?.number}</p>
        </div>
        <div className="mt-[180px] flex flex-col items-center text-center">
            <img src={how_to_reg} />
            <p className="text-[#DADADA] w-1/2 mx-auto">This profile has been generated.</p>
        </div>
        <button  style={{
            backgroundColor: "#1363DF",
            color: "white",
            width: "90%",
            height: "52px",
            borderRadius: "10px",
            margin: "24px",
          }}
          className="absolute bottom-0">Record Respect</button>
        </>
    )
}
export default NewCreatedUserProfile