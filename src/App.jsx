import Fixer from "../Components/Fixer/Fixer";
import Main from "../Components/Main/Main";
import Profile from "../Components/Profile/Profile";
import Header  from "/Components/Header/Header.jsx";
import WarningEl from "../Components/warning/WarningEl"
import {Routes, Route} from 'react-router'
import Login from "../Components/Login/Login";
import Friends from "../Components/Friends/Friends";
import Requests from "../Components/Requests/Requests";

export default function App() {
  return (
    <>
  <div className="holder">


    <Routes>
      <Route  path='/' element={<Fixer/>}/>
      <Route  path='/Posts' element={[<Header/>,<Main/>]}/>
      <Route  path='/Profile/User_1' element={[<Header/>,<Profile/>]}/>
      <Route  path='/Login' element={[<Login/>]}/>
      <Route  path='/Friends' element={[<Header />,<Friends/>]}/>
      <Route  path='/Friends/Requests' element={[<Header />,<Requests/>]}/>
      <Route  path='*' element={<WarningEl/>} status={404}/>
    </Routes>
  </div>
    </>
  )
}


