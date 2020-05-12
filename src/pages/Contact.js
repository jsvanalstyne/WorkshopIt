import React, {Component} from "react";
import Wrapper from "../components/Wrapper";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/BackDrop/BackDrop";
import Footer from "../components/Footer/Footer"
import "./home.css";


class Contact extends Component {

    
    state ={
        sideDrawerOpen: false
      };
      drawerToggleClickHandler = () => {
        this.setState((prevState)=> {
          return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
      };
      backDropClickHandler = () =>{
        this.setState({sideDrawerOpen: false})
      }
      render(){
        let backDrop;
        if(this.state.sideDrawerOpen){
            backDrop= <Backdrop click={this.backDropClickHandler}/>
         
        }
return (
<Wrapper>
<div style={{height: "100%"}}>
     <Toolbar drawerClikHandler={this.drawerToggleClickHandler}/>
     <SideDrawer show={this.state.sideDrawerOpen}/>
     {backDrop}
     

    
</div>
<div className="home">
<div className="contactCard">
<form>
    <div>Contact Workshop</div>
    <div className="contactForm">
        <div>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  </div>
  <div>
  <label>
    Email:
    <input type="email" name="email" />
  </label>
  </div>
  <label>
    Message:
   
    <textarea type="text" name="message" />
  </label>
  <input type="submit" value="Submit" className="contactSubmit" />
  </div>
</form>
</div>
</div>
 
<Footer/>

</Wrapper>
)
}
}

export default Contact;