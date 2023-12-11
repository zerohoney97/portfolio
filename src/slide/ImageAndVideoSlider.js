import React, { useEffect, useState } from 'react'

const ImageAndVideoSlider = ({ images, videos }) => {
    const [translateImg, setTranslateImg] = useState(0)
    const translateImgHandler = () => {
        setTranslateImg((state) => {
            return state + 20
        })
    }
    return (
        <div className="flex w-[500%] gap-4 h-[350px] justify-center  items-center -translate-x-[20%]">
            {images &&
                images.map((ele, index) => {
                    console.log(index)
                    return (
                        <div className="w-[100%] h-auto">
                            <img className={`${index === 0 ? 'w-[60%]' : 'w-[90%]'}`} src={ele} alt="이미지 데이터" />
                        </div>
                    )
                })}
        </div>
    )
}

export default ImageAndVideoSlider
