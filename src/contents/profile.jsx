import { Hero } from '../components/common'
import { IoLogoGithub } from 'react-icons/io'
import { TfiEmail } from 'react-icons/tfi'
import { FaBlogger } from 'react-icons/fa6'
import { useState, useRef, useEffect } from 'react'
import profileImg from '../profileImg.jpg'
const Profile = () => {
    const [isVisible, setIsVisible] = useState(false)
    const animatedElementRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (animatedElementRef.current) {
            observer.observe(animatedElementRef.current)
        }

        return () => {
            if (animatedElementRef.current) {
                observer.unobserve(animatedElementRef.current)
            }
        }
    }, [])

    return (
        <div
            ref={animatedElementRef}
            className={`flex flex-row items-center justify-between gap-[38px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="w-[280px]  md:w-[28%] ">
                <img
                    src={profileImg}
                    aria-hidden
                    alt="profile image"
                    className="w-[100vw] h-[280px] m-auto rounded-full border-2 border-slate-500"
                />
            </div>
            <div className="w-[100%] box-border md:w-[70%] md:p-[10px] ">
                <Hero>
                    이무헌 <span className="text-[16px] text-slate-400 font-normal">web7722</span>
                </Hero>
                <p className="text-slate-700 pt-[5px] md:text-[24px] md:pt-[10px] text-[16px]">
                    항상 배우고 노력하는 개발자
                </p>
                <p className="flex flex-col text-[16px] items-left pt-[7px] md:pt-[5px] md:text-[14px]">
                    <a href="mailto:web7722@gmail.com" className="flex items-center gap-[5px] text-slate-600">
                        <TfiEmail />
                        zerohoney97@gmail.com
                    </a>
                    <a href="https://github.com/zerohoney97" className="flex items-center gap-[5px] text-slate-600">
                        <IoLogoGithub />
                        zerohoney
                    </a>
                    <a href="https://velog.io/@ecoco97" className="flex items-center gap-[5px] text-slate-600">
                        <FaBlogger />
                        velog
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Profile
