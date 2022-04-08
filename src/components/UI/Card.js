import React from "react";
 import './Card.css';
 function Card(props) {
     //here we need white space plus class name
     const classes= "card " + props.className;
 
     return <div className={classes}>{props.children}</div>;
 }

 export default Card;