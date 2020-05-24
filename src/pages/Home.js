import React, {Component} from "react";
import Wrapper from "../components/Wrapper";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/BackDrop/BackDrop";
import Footer from "../components/Footer/Footer"
import SubmitForm from '../components/SumbitForm/SubmitForm';
import Document from "../components/DocumentUpload/Document";
import "./home.css";


class Home extends Component {

   
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
            {/* <SubmitForm/>
             */}
             <div className="home">
             
               <div className="Card">
                 <form>
                 <span className="Title">Upload Files</span>
                   <label className="documentInformation">
                     Title:
                     <input type="text" name="title"/>
                   </label>
                   {/* <label>
                     Text:
                     <input type="text" name="text"/>
                   </label> */}
                   <Document/>
                   <input type="submit" value="Submit"/>
                 </form>
              
               </div>
             </div>
             
            <Footer/>
            
        </Wrapper>
          );
        }

}
// }

export default Home;