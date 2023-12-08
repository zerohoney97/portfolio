import React from 'react'
import YouTube from 'react-youtube'
const YoutubeVideo = ({ videoId }) => {
    const opts = {
        height: '320', // Set the desired height
        width: '600', // Set the desired width
    }

    return <YouTube videoId={videoId} opts={opts} />
}

export default YoutubeVideo
