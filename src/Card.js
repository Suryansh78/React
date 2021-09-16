import React from 'react'

export default function Card(props) {
    return (
       
        <div className="cards">
            <div className="card">
                <img src={props.imgSrc} className="card_img" alt="myPic"/>
                <div className="card_info">
                    <span className="card_category">A Netflix Orignal Seies</span>
                    <h3 className="card_title">{props.title}</h3>
                    <a href={props.link} rel="noreferrer" target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </div>
       
       
    )
}
