import React from "react";
import "/image.css";

export default function Image(props) {
    return (
        <span>
            <img   
                src = {props.src}
                alt = {props.alt}
                id = {props.id}
                key = {props.id}
                onclick = {()=>props.clickme(props)}
                />
        </span>
    )
}