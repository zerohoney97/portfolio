import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { SiNextdotjs, SiTypescript } from 'react-icons/si'
import { DiTrello } from 'react-icons/di'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()

    return (
        <Wrapper>
            <Heading>프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023.11 ~ 2023.12</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Block Explore(기업 협약프로젝트)
                            <a href="https://www.bouncexplorer.site/">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            내가 어디 회사랑 협약을 했는데 말이야~ 와 좀만 젊었어도 다 해결했을텐데 말야~ 진짜
                            어쩌구저쩌구 궁시렁 궁시렁 진짜 해줄거 다해줬는데 안해주네~~~
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiTypescript />
                            <DiTrello />
                            <DiReact />
                            <SiNextdotjs />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                            <li>
                                내가 어떤걸 주요하게 했냐 이말이야~ 하나 쯤은 길게 쓸수 있을 거 같지
                                않니이이이이이이이이이이이이잉이이이이 ?
                            </li>
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                        </ul>
                    </div>
                </li>

                {/* 첫번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ46OGp74qW6aKXJJYfhbfYniV48BQIVpWHUpDZMzzbg&s"
                            className="w-full"
                            alt="어떤어떤 프로젝트"
                        />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023. 12. 06 ~ 현재</li>
                            <li>front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal2}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            NFT 마켓 플레이스(협얍프로젝트){' '}
                            <a href="https://naver.com">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            내가 어디 회사랑 협약을 했는데 말이야~ 와 좀만 젊었어도 다 해결했을텐데 말야~ 진짜
                            어쩌구저쩌구 궁시렁 궁시렁 진짜 해줄거 다해줬는데 안해주네~~~
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiJavascript />
                            <DiNodejs />
                            <DiGithubBadge />
                            <SiTypescript />
                            <DiTrello />
                            <DiReact />
                            <SiNextdotjs />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                            <li>
                                내가 어떤걸 주요하게 했냐 이말이야~ 하나 쯤은 길게 쓸수 있을 거 같지
                                않니이이이이이이이이이이이이잉이이이이 ?
                            </li>
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                            <li>내가 어떤걸 주요하게 했냐 이말이야~</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                test
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                test2222
            </Modal>
        </Wrapper>
    )
}

export default Projects
