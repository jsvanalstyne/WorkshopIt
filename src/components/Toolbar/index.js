import React from "react";
import "./style.css";
import ToggleButton from "../SideDrawer/ToggleButton";
import documenetImage from "../../images/folder.svg";
import reviewImage from "../../images/review.svg";
import contactImage from "../../images/contact.svg";


const Toolbar = props => {
  return(
  <header className="toolbar">
    <nav className="toolbarNav"> 
      <div>
        <ToggleButton click={props.drawerClikHandler}/>
      </div>
      <div className="logoToolbar"><a href="/">Workshop</a></div>
      <div className="spacing"></div>
      <div className="linksToolbarItems">
      <ul>
        {/* <li><a href="#">Sign-up</a></li> */}
        <li><a href="/document"><img className="toolbarImages" src={documenetImage} />Documents</a></li>
        <li><a href="/review"><img className="toolbarImages" src={reviewImage} />Reviews</a></li>
        <li><a href="/contact"><img className="toolbarImages" src={contactImage} />Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>)
}
export default Toolbar;