import React from "react";
import "./DocumentDisplayCard.css";
import Article from "../../images/article.svg"

function DocumentDisplayCard(props){
return (
    <div className="documentCardImage" >
        <img className="documentImage" src={Article} alt="articlePreview"/>
        <div className="documentTitle">{props.title}</div>
        <div className="documentDate">{props.date}</div>
    </div>
)
}

export default DocumentDisplayCard;