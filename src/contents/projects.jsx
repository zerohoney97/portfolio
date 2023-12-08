import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt, FaNode, FaHtml5, FaReact } from 'react-icons/fa'
import {
    SiExpress,
    SiNextdotjs,
    SiAwsamplify,
    SiRedux,
    SiMysql,
    SiSequelize,
    SiStyledcomponents,
    SiSolidity,
    SiAmazonec2,
    SiSocketdotio,
    SiMongodb,
} from 'react-icons/si'
import { DiNginx } from 'react-icons/di'
import { GrDomain } from 'react-icons/gr'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import blockExploreImg from '../img/blockExploreLogo.png'
import travelOpener from '../img/travelOpener.png'
import { FaCss3 } from 'react-icons/fa6'
import baesimza from '../img/baesimza.png'
import interNode from '../img/interNode.png'
import ECC from '../img/ECC.png'
import ImageAndVideoSlider from '../slide/ImageAndVideoSlider'
import pay from '../img/pay.png'
import payToss from '../img/payToss.png'
import talk from '../img/talk.png'
import myPage from '../img/mypage.png'
import mypage2 from '../img/mypage2.png'
const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const imgs = [pay, payToss, myPage, mypage2, talk]
  
    return (
        <Wrapper>
            <Heading>프로젝트</Heading>
            <ul className="flex flex-col w-full gap-[120px]">
                {/* 블록 익스플로어*/}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={blockExploreImg} className="w-full" alt="블록 익스플로어" />
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
                            <a href="https://github.com/zerohoney97/blockExploreFront">
                                <FaExternalLinkAlt />
                            </a>
                            <a href="https://www.bouncexplorer.site/">
                                <GrDomain />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            바운스 코드 회사와 협력하여 만든 반응형 웹 사이트입니다. 프라이빗 네트워크에서 블록의
                            데이터를 조회하여 사용자에게 보여줄 수 있습니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <FaReact />
                            <SiNextdotjs />
                            <SiAwsamplify />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                App Routing 디렉토리 설계: next13에서 사용되는 app routing을 사용하기 위하여 디렉토리를
                                설계 하였습니다. 특히 동적라우팅을 하는 디렉토리는 트랜잭션,블록,EOA,CA 카테고리별로
                                나누어 그 하위폴더로 지정하여 직관성을 향상 시켰습니다.
                            </li>
                            <br />
                            <li>
                                Component 설계: 페이지 특성상 테이블 컴포넌트가 반복해서 등장합니다. 또한
                                트랜잭션,토큰의 리스트를 return 하는 테이블 같은 경우는 마지막 필드부분의 값만 다르다는
                                점을 이용하여 테이블의 데이터,마지막 필드값,height 데이터를 props로 받아 재사용가능한
                                component를 설계하였습니다. 이를 통해 다른 페이지에서 같은 테이블을 사용할 때 간편하게
                                props값만 전달해주어 개발이 가능하였습니다.
                            </li>
                            <br />
                            <li>
                                Data Fetch 및 Cache:각 서버컴포넌트에서 데이터를 가져오는 fetch작업을 모아둔 _api폴더를
                                만들어 각 페이지에 fetch 메서드를 작업하였습니다. 리스트를 가져오는 메서드는 캐시 작업을
                                하였고, 다시 방문할 확률이 적은 디테일 페이지 데이터는 캐싱하지 않게 하여 페이지간의
                                전환 속도를 향상시켰습니다.
                            </li>
                            <br />
                            <li>
                                ABI json의 signature를 추출하여 서버에 전달: 어떤 트랜잭션이 있을 때 해당 트랜잭션의
                                메서드를 확인하기 위해서는 배포된 CA의 ABI값이 필요합니다. 객체형태로 되어 있는 ABI에서
                                web3 라이브러리를 통해 signature를 추출하여 서버에 전달하였습니다. 이를 분석하여 hex로
                                되어 있는 메서드가 Transfer와 같은 실행시킨 함수 이름으로 변경됨을 확인하였습니다.
                            </li>
                            <br />
                            <li>
                                커스텀 훅 (hydration과 pagination): react tree가 실제 DOM과 일치하지 않아 생기는
                                hydration 에러를 커스텀훅을 통하여 해결하였습니다. 또한 타입을 제네릭으로 받는
                                페이지네이션 훅을 만들어 구현하였습니다.
                            </li>
                            <br />
                            <li>
                                작업한 페이지: 트랜잭션 리스트,트랜잭션 디테일,토큰 디테일, 토큰과 NFT거래 리스트 페이지
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 트래벌 오프너 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={travelOpener} className="w-full" alt="트래벌 오프너" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023.08 ~ 2023.09</li>
                            <li>front-end,back-end</li>
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
                            Travel-Opener
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            기존 여행지 추천 사이트는 사람이 직접 입력하여 추천하는 여행지가 제한적이었습니다. 이에 AI를
                            활용하여 어느 나라나 도시를 입력하여도 여행지를 추천해주는 반응형 사이트를 만들었습니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <FaReact />
                            <FaNode />
                            <SiExpress />
                            <SiRedux />
                            <SiStyledcomponents />
                            <SiMysql />
                            <SiSequelize />
                            <DiNginx />
                            <SiAmazonec2 />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                Open Ai API 연결 및 prompt 규칙 설계: 본 프로젝트의 중심은 chat gpt입니다. 사용자
                                여행지를 입력하면 입력정보를 미리 설계한 prompt에 넣어 gpt가 이를 토대로 ouptput을
                                response하여 사용자에게 보여지게 됩니다.
                            </li>
                            <br />
                            <li>
                                Pixa Bay API로 여행지 사진 출력: AI로 어느 여행지를 입력하여도 추천여행지를 보여줘야
                                했기 때문에 해당 여행지에 대한 이미지도 동적으로 삽입할 필요가있었습니다. Pixa Bay API를
                                활용하여 해당 여행지를 파라미터로 전달합니다.이 때 response로 Pixa Bay사이트에서 해당
                                여행지로 검색된 사진이 옵니다. 가장 많이 사용된 첫번째이미지를 출력함으로써 이미지처리를
                                동적으로 하였습니다.
                            </li>
                            <br />
                            <li>
                                redux toolkit으로 상태관리: 서버에서 받은 데이터를 redux toolkit 라이브러리를 통하여
                                관리하였습니다. 특히, nearAttraction과 같은 상태변수는 많은 페이지에서 공통적으로
                                사용되었습니다. 때문에 redux로 관리하여 데이터를 가져오고, 처리하는 과정이 편해졌습니다.
                            </li>
                            <br />
                            <li>
                                Back-End 라우팅 설계:사용자가 선택한 여행지와 주변 여행지 리스트를 전달받아 controller로
                                전달받는 과정을 설계하였습니다.
                            </li>
                            <br />
                            <li>
                                EC2 배포: Amazon EC2로 프론트엔드(react)와 백엔드(nodeJS)를 하나의 인스턴스에서
                                배포하였습니다. 웹 어플리케이션 서버는 nginx로 하였습니다. 다만 블로그에 정리된 글을
                                토대로 배포하여 원하는대로 다루기에 아직 무리가 있어 더 공부할 예정입니다.
                            </li>
                            <br />
                            <li>
                                작업한 페이지: 여행지 추천 리스트 , 여행지 선택 , 회원가입,로그인, 전체적인 모바일 화면
                            </li>
                        </ul>
                    </div>
                </li>

                {/* 배심자들 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={baesimza} className="w-full" alt="배심자들" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023.08 </li>
                            <li>front-end,solidity</li>
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
                            배심자들
                            <a href="https://github.com/zerohoney97/SWF2023-baesimja">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            서울 2023 블록체인 해커톤에서 제작하였습니다. 블록체인 NFT의 특징 중 하나인 불변성을
                            이용하여 어떤 판결에 대해 시민들이 배심자 역할을 하여 판결하고 이를 NFT 토큰으로 발행하는
                            사이트 입니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <FaReact />
                            <SiRedux />
                            <SiStyledcomponents />
                            <SiSolidity />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>NFT 발행: NFT를 발행하는 스마트 컨트랙트를 작업하였습니다.</li>
                            <br />
                            <li>
                                Remix로 배포: 작업한 스마트 컨트랙트를 remix를 활용하여 해커톤에서 제시한 네트워크에
                                배포하였습니다.
                            </li>
                            <br />
                            <li>작업한 페이지: My Nft 리스트</li>
                        </ul>
                    </div>
                </li>

                {/* 인터 노드 */}

                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={interNode} className="w-full" alt="inter node" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (4명)</li>
                            <li className="text-stone-500">2023.06 </li>
                            <li>front-end,back-end</li>
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
                            InterNode
                            <a href="https://github.com/zerohoney97/interNode">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            socket과 node.js를 결합하여 실시간으로 사용자에게 정보를 전달할 수 있는 사이트를 만들고
                            싶었습니다. 인터파크와같은 자리예약 사이트는 원하는 자리를 클릭했을 때 다음 화면으로
                            넘어가서야 누군가가 이미 예약했다는 알림을 받을 수 있습니다. 이를 보완하고자 socket 기술을
                            융합하여 실시간으로 다른유저들이 자리를 선택하는것을 확인할 수 있는 사이트를 만들었습니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <FaHtml5 />
                            <FaCss3 />
                            <FaNode />
                            <SiExpress />
                            <SiMysql />
                            <SiSocketdotio />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                로그인 유저 JWT 토큰 발행: 로그인한 유저의 토큰을 발행하고 페이지 이동시 로그인을
                                확인하는 미들웨어를 설계하였습니다.
                            </li>
                            <br />
                            <li>
                                toss API 가상 입금 시스템: toss의 API를 활용하여 가상 무통장 입금 시스템을 프로젝트에
                                도입하였습니다. 사용자는 자리를 예매한 후 가상계좌를 통해 결제하고 toss 개발자 센터에서
                                이를 수락함으로써 실제 무통장 입금과 비슷한 결제 시스템을 작업하었습니다.
                            </li>
                            <br />
                            <li>
                                socket으로 실시간 채팅방: socket라이브러리를 활용하여 admin과 일반유저의 실시간 채팅방을
                                작업하였습니다.
                            </li>
                            <br />
                            <li>작업한 페이지:예약 확인, 어드민 , 마이페이지</li>
                        </ul>
                    </div>
                </li>
                {/* ECC */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={ECC} className="w-full" alt="ECC" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">개인 프로젝트</li>
                            <li className="text-stone-500">2022.10~2022.12 </li>
                            <li>front-end,back-end</li>
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
                            ECC
                            <a href="https://github.com/zerohoney97/NewEccProject">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            react를 배울 초창기에 전북맹아학교 측에서 맹우분들을 평가하기 위한 웹사이트를 요청해주셔서
                            개발 연습과 병행하여 제작하였습니다. ECC란 미국에서 시행되고 있는 맹우분들 평가 지표입니다.
                            맹우분들이 일상생활을 함에 있어서 얼마나 불편함이 있는지 평가하는 지표 입니다.
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <FaReact />
                            <FaNode />
                            <SiExpress />
                            <SiMongodb />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>
                                평가 지표 웹화: 평가 지표를 모두 웹화 시켜서 서면으로 저장해야 했던 것을 데이터 베이스에
                                저장하여 언제든 확인이 가능하도록 하였습니다.
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}></Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <ImageAndVideoSlider images={imgs} />
            </Modal>
        </Wrapper>
    )
}

export default Projects
