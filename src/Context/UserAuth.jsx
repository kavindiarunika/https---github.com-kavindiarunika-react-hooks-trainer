import { createContext,useState } from "react"

export const userData =createContext({});
const UserAuth = ({children}) => {
    const [userDetail,setUserDetail] =useState({
        name:'',
        password:'',
        userID:'',
    });
  return (
   <userData.Provider value={{
    userDetail,setUserDetail
   }}>
        {children}
   </userData.Provider>
  )
}

export default UserAuth
