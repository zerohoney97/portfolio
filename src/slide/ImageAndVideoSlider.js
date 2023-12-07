import React, { useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ImageAndVideoSlider = ({ images, videos }) => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        arrows: false,
    }
    useEffect(() => {
        console.log(images)
    }, [images])

    return (
        <Slider {...settings}>
            {images.map((imageUrl, index) => {
                console.log(imageUrl)
                return (
                    <div key={index} style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <img width={'400px'} height={'300px'} src={imageUrl} alt={`이미지 ${index + 1}`} />
                    </div>
                )
            })}
        </Slider>
    )
}

export default ImageAndVideoSlider
