import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Card from "./Card";
import dataSeries from "./dataSeries";

// function nCard(val){
// return(
//   <Card
//   imgSrc={val.imgSrc}
//   title={val.title}
//   link={val.link}
//   />
//   );
// }
ReactDOM.render(
  <>
    <h1 className="heading_style">
      Latest Netflix Series Recommended For You !!!
    </h1>
    ,
    {dataSeries.map((val) => {
      return <Card imgSrc={val.imgSrc} title={val.title} link={val.link} />;
    })}
  </>,

  document.getElementById("root")
);

reportWebVitals();
