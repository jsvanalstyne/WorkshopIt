import React from "react";
import "./ReviewCards.css";


function ReviewCards(props){

    return(
        <div className="postedReviews">
           <p>Posted by: {props.author}</p> 
            <p>Date: {props.date}</p>
            <p>Comments:{props.body}</p>
            <p>Rating: {props.rating}</p>
        </div>
    )

}

export default ReviewCards;