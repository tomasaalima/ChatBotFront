import React from "react";

function Video(props){
    const {link} = props;
    const {description} = props;

    return (
        <div className="h-5/6 w-5/6 m-auto flex items-center justify-center text-white flex-col">
            <iframe  src={`${link}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen className="w-5/6 h-5/6"></iframe>
            <p className="text-center text-footer font-error text-lg font-medium mt-1">{description}</p>
        </div>
    )
}

export default Video;