import React from 'react'
import './VideoRow.css';
function VideoRow({image,channel,views,subs,timestamps,description,title}) {
    return (
        <div className="videoRow">
            <img src={image} alt="" />
            <div className="videoRow__text">
                <h3>{title}</h3>
                <p className="videoRow__headline">
                    {channel} . {""}
                    <span className="videoRow__subs">
                    <span className="video_subsNumber">{subs}</span> Subscriptions 
                    </span>{""}
                    {views} . {timestamps}
                </p>
                <p className="videoRow__description">{description}</p>
            </div>
            
        </div>
    )
}

export default VideoRow
