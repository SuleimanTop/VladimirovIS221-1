import {Link} from 'react-router'

export default function Header() {
    const arr = [
        {task: 'Home', url:"../MenuImages/Home.png", id:1, href:"/"},
        {task: 'Posts', url:"../MenuImages/task.png", id:2, href:"/Posts"},
        {task: 'Profile', url:"../MenuImages/Friend.png", id:3, href:"/Profile/User_1"},
        {task: 'Friends', url:"../MenuImages/cube.png", id:4, href:"/Friends"},
        {task: 'Requests', url:" ../MenuImages/message.png", id:5, href:"/Friends/Requests"},
        {task: 'Settings', url:"../MenuImages/settings.png", id:6, href:"/Settings"},
        {task: 'Help & Support', url:"../MenuImages/card.png", id:7, href:"/Help"}
      ]
      
    return (
      <header className="header">
        <div className="header_menu_left">
        <img className="logo" src="../assets/logo.png" alt="" />
        
        <div className="input_hold">
        <input className="input_menu" placeholder="Search..." type="text" />
        <button className="button_menu">
          <img src="../assets/lupa.png" alt="" />
        </button>
  
        <ul className="burger_menu">
         {arr.map(el =>
          <Link to={el.href} className="burger_menu_li" key={el.id}><img className="image_menu" src={el.url}/>{el.task}</Link>
          )}
        </ul>
  
        <div className="warning_content">
          <img className="warning" src="../assets/warningIcon.png" alt="" />
          <p className="warning_p">Enjoy unlimited access to our app with only a small price monthly.</p>
  
          <div className="buttons">
            <button className="Dismiss">Logout</button>
            <Link to="/Login" className="GoPro">Login</Link>
          </div>
        </div>
  
        </div>
  
        </div>  
      </header>
    )
}