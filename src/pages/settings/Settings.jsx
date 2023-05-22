import './settings.css'
import SideBar from "../../components/sidebar/SideBar"

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">
              Update Your Account
            </span>
            <span className="settingDeleteTitle"> Delete Account</span>
          </div>
          <forms className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="images/stock.jpg" alt="" />
              <label htmlFor="fileInput">
              <i className="settingsPPIconfa-solid fa-user"></i>
              </label>
              <input type="file" id='fileInput' style={{display:"none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder='Safak'/>
            <label>Email</label>
            <input type="email" placeholder='safak@gmail.com'/>
            <label>Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </forms>
        </div>
        <SideBar/>
    </div>
  )
}
