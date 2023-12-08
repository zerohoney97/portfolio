import React, { useEffect } from 'react'

const ImageAndVideoSlider = ({ images, videos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    }
    useEffect(() => {
        console.log(images)
    }, [images])

    return (
        <div className="w-[500px] absolute left-[50%] -translate-x-[50%]">
        </div>
    )
}

export default ImageAndVideoSlider
