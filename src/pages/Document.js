
import React, {Component} from "react";
import Wrapper from "../components/Wrapper";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/BackDrop/BackDrop";
import Footer from "../components/Footer/Footer";
import "./home.css";
import DocumentDisplayCard from "../components/DocumentDisplayCard/DocumentDisplayCard";
import API from "../utils/API";





class Document extends Component {
   
    
        state ={
            sideDrawerOpen: false,
            documentArray : [
              // {
              //   title: "Document1",
              //   date: "May 1, 2020"
              // },
              // {
              //   title: "Document2",
              //   date: "May 2, 2020"
              // },
              // {
              //   title: "Document3",
              //   date: "May 3, 2020"
              // },
              // {
              //   title: "Document4",
              //   date: "May 1, 2020"
              // },
              // {
              //   title: "Document5",
              //   date: "May 1, 2020"
              // },
              // {
              //   title: "Document6",
              //   date: "May 1, 2020"
              // }

            
            ]
          };
          componentDidMount = () =>{
            this.getAllDocuments();
          }
          getAllDocuments = () => {
            API.getAllDocuments()
              .then(res =>{
                console.log(res);
                console.log(res.data);
                // this.setState({documentArray : res.data})
              })
            
          }
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
    
    <div className="documentHeader"><h1>Your Workshop Documents</h1></div>
   <div className="documentContainer">
   
   {this.state.documentArray.map(documents=> (
    <DocumentDisplayCard
      title={documents.title}
      date={documents.date}
    />
   ))}
     
   </div>
     
    <Footer/>
    
</Wrapper>
  )
}
}

export default Document;