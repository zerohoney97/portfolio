import React, { useEffect } from 'react'
import Slider from 'react-slick'
import './slide.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const ImageAndVideoSlider = ({ images, videos }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div
                style={{
                    backgroundColor: '#ddd',
                    borderRadius: '10px',
                    padding: '10px',
                }}
            >
                <ul style={{ margin: '0px' }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: '30px',
                    color: 'blue',
                    border: '1px blue solid',
                }}
            >
                {i + 1}
            </div>
        ),
    }

    return (
        <div >
            {' '}
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default ImageAndVideoSlider
