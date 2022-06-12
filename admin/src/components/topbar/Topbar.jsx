import React from "react";
import "./topbar.css";
import { ExitToApp} from "@material-ui/icons";
import { Link } from "react-router-dom";
export default function Topbar() {
  //const admin = true;
  const admin = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin;
  const handleClick=()=>{
    //era para ser o logout mas se clicar vai dar merda ta desativado por enquanto
    //admin = JSON.parse(JSON.parse(localStorage.removeItem("persist:root")).user).currentUser ;
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Double Biceps</span>
        </div>
     
        <div className="topRight">
       {admin === true ? 
          <div className="topbarIconContainer">
            <Link onClick={handleClick}>
              <ExitToApp />
            </Link>       
          </div>
            :
          <div className="topbarIconContainer">
            <Link to="/login">
              <h2>Login</h2>
            </Link> 
          </div> }
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>

      </div>
    </div>
  );
}
