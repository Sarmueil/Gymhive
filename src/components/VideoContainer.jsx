import React from 'react'

const VideoContainer = ({video}) => {
    return (
        <div className='max-w-[90%] bg-slate-200 h-[50vh] md:h-[80vh] mx-auto mb-7'>
            <video autoPlay={true} playsinline preload="auto" loop muted className="w-full h-full object-cover">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoContainer