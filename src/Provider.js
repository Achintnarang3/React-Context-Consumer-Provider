import React,{useState} from 'react';
import MyContext from './Context'
const Provider=(props)=>{
    const[mission,setMission]=useState({
        name:"Achint",
        id:"007",
        accept:"Not Accepted"

    })

    return(
        <MyContext.Provider value={{
            data:mission,
            isMissionAccepted:()=>{
                setMission({...mission,accept:"ACCEPTED"})
            }
        }}>
            {props.children}
        </MyContext.Provider>
    )

}
export default Provider;
