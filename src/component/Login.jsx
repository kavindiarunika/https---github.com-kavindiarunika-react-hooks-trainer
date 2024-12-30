import { useContext, useRef } from "react"
import { userData } from "../Context/UserAuth"
import {submitHandle} from '../Utils/Authvalidate'
const Login = () => {
    const {  userDetail,setUserDetail } =useContext(userData)
    
    const usernameref =useRef()
    const passwordref =useRef()
 

   
    return (
    <div>
        {userDetail.userID?
        (
        <p>your are logged in{userDetail.name}</p>
    ):(
        <>
         <span>Username:</span>
        <input type='text' ref={usernameref} placeholder="enter your username.."/>
        <br/>
        <span>Password:</span>
        <input type='password' ref={passwordref} placeholder="enter your password.."/>
        <br/>
         <button onClick={()=>submitHandle(usernameref,passwordref,setUserDetail)}>submit</button> 
        </>

        )}
       
    </div>
  )
}

export default Login
