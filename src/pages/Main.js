import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/BackDrop/BackDrop";
import Footer from "../components/Footer/Footer"
import SubmitForm from '../components/SumbitForm/SubmitForm';
import Login from "../components/Login/Login";
import Register from "../components/Login/Register";
import "./Main.scss";
import writingImage from "../images/027-content writing.svg";

class Main extends Component {
  state = {
    sideDrawerOpen: false,
    isLogginActive: true
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }
  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />

    }
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <Wrapper>
       
        <div style={{ height: "100%" }}>
          <Toolbar drawerClikHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}
        </div>
        <div className="App">
        <div className="login">

        <div className="aboutWorkshop">
               <img className="writing" src={writingImage} />

            <p>Need someone to take a second look? Workshop is here to help! Workshop allows users to upload their writing for analysis. We provide recommendations and styling. </p>
          </div>
          </div>
          <div className="login">
        
            <div className="container" ref={ref => (this.container = ref)}>
              {isLogginActive && (
                <Login containerRef={ref => (this.current = ref)} />
              )}
              {!isLogginActive && (
                <Register containerRef={ref => (this.current = ref)} />
              )}
            </div>
            <RightSide
              current={current}
              currentActive={currentActive}
              containerRef={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            />
          </div>
        </div>

        <Footer />

      </Wrapper>
    );
  }


}
const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
export default Main;







