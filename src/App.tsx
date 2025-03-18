import Fixer from "../Components/Fixer/Fixer.tsx";
import Main from "../Components/Main/Main.tsx";
import Profile from "../Components/Profile/Profile.tsx";
import Header  from "/Components/Header/Header.tsx";
import WarningEl from "../Components/warning/WarningEl.tsx"
import {Routes, Route} from 'react-router'
import Login from "../Components/Login/Login.tsx";
import Friends from "../Components/Friends/Friends.tsx";
import Requests from "../Components/Requests/Requests.tsx";

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


