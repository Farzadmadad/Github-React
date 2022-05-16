import React from "react";

export default function Result (props){
    return(
        <div>
            <li>
                <a target = 'blank' href={props.qoute.clone_url}>{props.qoute.name}</a>:{props.qoute.description}
            </li>
        </div>
    )
}