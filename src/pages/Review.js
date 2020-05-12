import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import Toolbar from "../components/Toolbar";
import SideDrawer from "../components/SideDrawer/SideDrawer";
import Backdrop from "../components/BackDrop/BackDrop";
import Footer from "../components/Footer/Footer";
import "./home.css";
import ReviewCards from "../components/ReviewCards/ReviewCards";




class Review extends Component {


  state = {
    sideDrawerOpen: false,
    reviews: [
      {
        author: "user1",
        date: "May 1, 2020",
        body: "Love it!",
        rating: "5"
      },
      {
        author: "user2",
        date: "May 2, 2020",
        body: "Really works!",
        rating: "5"
      },
      {
        author: "user3",
        date: "May 4, 2020",
        body: "Learned so much about myself!",
        rating: "5"
      },
      {
        author: "user4",
        date: "May 3, 2020",
        body: "Room for improvement",
        rating: "4"
      }
    ]
  };
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    });
  };
  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }
  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />

    }
    return (
      <Wrapper>
        <div style={{ height: "100%" }}>
          <Toolbar drawerClikHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backDrop}



        </div>
  <div className="reviewForm">
    <form>
        <div>Reviews</div>
          <div className="reviewForm">
        <div>
          <label>
            Author
            <input type="text" name="name" />
          </label>
        </div>
        <div>
           <label>
            Rating:
            <input type="text" name="name" />
            </label>
          </div>
            <label>
              Comments:
   
            <textarea type="text" name="Comments" />
            </label>
          <input type="submit" value="Submit" className="contactSubmit" />
         </div>
      </form>
  </div>

  <div>
    <h3>Past Reivews of Workshop</h3>
    {this.state.reviews.map(review=> (
    <ReviewCards
      author={review.author}
      date={review.date}
      body={review.body}
      rating={review.rating}
    />
   ))}

  </div>

        <Footer />

      </Wrapper>
    )
  }
}

export default Review;