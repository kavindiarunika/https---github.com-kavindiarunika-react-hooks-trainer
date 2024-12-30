import { useContext, useRef } from "react"
import { userActivity } from "../Context/UserActivity";
import { userData } from "../Context/UserAuth";

import {Action} from '../Reducers/UserActivityReducer'
const Userinput = () => {
  const {
   state,setstate 
}=useContext(userActivity);

const {userDetail} =useContext(userData)
  const imageref =useRef();
  const nameref =useRef();
  const cityref =useRef();
  const positionref =useRef();

  return (
    <div>
      {userDetail.userID?
      (<div>
        <span>Image</span>
        <input type='text' ref={imageref}  placeholder="image url"/><br />
        <span>Name: </span>
        <input type ='text'ref={nameref}  placeholder="your name"/><br />
        <span>City:</span>
        <input type ='text'ref={cityref}  placeholder="your city"/><br />
        <span>position</span>
        <input type='text' ref={positionref} placeholder="your position"/>
       <br />
       <button onClick={()=>setstate({
         type:Action.setData,
         data:{
          image:imageref.current.value,
          name:nameref.current.value,
          city:cityref.current.value,
          position:positionref.current.value
         }
       })}>Submit</button>
       
        <br /><br />
        <p>{state.image}</p>
        <p>{state.name}</p>
        <p>{state.city}</p>
        <p>{state.position}</p>
       
      </div>)
      :
      (<>
        
      </>)} 
    </div>
  );
};

export default Userinput
