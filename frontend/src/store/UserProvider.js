import axios from "axios";
import { useReducer } from "react";
import UserContext from "./userContext";

const defaultUserCtx = {
    isLoggedIn: false,
    loggedInUser:{

    }
}

const userReducer = (state,action)=>{

    if(action.type==='SETLOGIN'){
        
        console.log('hi')
            return{
                isLoggedIn: true,
                loggedInUser:{
                    registered:action.user.registered,
                    accountCreationDate:action.user.accountCreationDate,
                    name:action.user.name,
                    number:action.user.number,
                    image:action.user.image,
                    dateOfBirth:action.user.dateOfBirth,
                    verified:action.user.verified,
                    trustScore:action.user.trustScore,
                    location: action.user.location,
                    gender:action.user.gender,
                    givenRespects:action.user.givenRespects,
                    recievedRespects:action.user.recievedRespects,
                }
            }
    }

        
    

    // if(action.type==='CHANGE'){
    //     return{

    //     }
    // }
}

const UserProvider = (props)=>{

    const [UserState,dispatchUserState] = useReducer(userReducer,defaultUserCtx);

    
    const setLogin = (user)=>{
        dispatchUserState({type: "SETLOGIN",user:user});
    }  

    const userContext = {
        isLoggedIn:UserState.isLoggedIn,
        loggedInUser:UserState.loggedInUser,
        setLogin:setLogin,
        
    }

    return(
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider;