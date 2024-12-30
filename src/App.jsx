import React from 'react'
import UserAuth from './Context/UserAuth'
import Login from './component/LOgin'
import UserActivity from './Context/UserActivity'
import Userinput from './component/Userinput'

const App = () => {
  return (
   <UserAuth>
    <UserActivity>
    <Login/>
    <Userinput/>
    </UserActivity>
   
   </UserAuth>
  )
}

export default App