import { Wrapper, Heading } from '../components/common'
import { DiJavascript, DiNodejs, DiGithubBadge } from 'react-icons/di'
import { FaNode } from 'react-icons/fa6'
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiExpress,
    SiReact,
    SiRedux,
    SiMysql,
    SiPostgresql,
    SiSequelize,
    SiTailwindcss,
    SiAmazonec2,
    SiAwsamplify,
    SiNginx,
    SiStyledcomponents,
    SiHtml5,
    SiCss3,
    SiSolidity,
} from 'react-icons/si'

const Skills = () => {
    return (
        <Wrapper>
            <Heading>기술 스택</Heading>
            <ul className="flex flex-col divide-y divide-gray-400">
                <li className="flex flex-row gap-[32px] py-[32px">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        언어
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiJavascript />
                                <span className="md:w-[120px]">Javascript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>변수 선언을 위한 var,let,const의 차이를 알고 목적에 맞게 사용했습니다.</li>
                                <li>연산자를 활용하여 코드를 짧고 효율적으로 작성하였습니다.</li>
                                <li>try,catch문을 활용하여 에러처리를 했습니다.</li>
                                <li>
                                    ES6문법을 숙지하여 구조 분해 할당, 클래스,템플릿 리터럴와 같은 최신 기능을
                                    사용하였습니다.
                                </li>
                                <li>동기,비동기처리를 통하여 실행순서를 효율적으로 처리하였습니다.</li>
                            </ul>
                        </li>

                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiTypescript />
                                <span className="md:w-[120px]">Typescript</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>interface를 통하여 객체의 타입을 지정하였습니다.</li>
                                <li>extends를 통하여 기존 인터페이스를 상속받아 확장시켰습니다.</li>
                                <li>
                                    제네릭타입을 사용하여 커스텀훅과 같이 재사용이 가능한 훅을 더 효율적으로 처리
                                    하였습니다.
                                </li>
                                <li>타입 가드를 사용하여 두개의 타입을 가진 변수를 효율적으로 처리하였습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        프론트 앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiReact />
                                    <span className="md:w-[120px]">React</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiRedux />
                                    <span className="md:w-[120px]">Redux</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>리액트의 장점이 무엇인지 숙지했습니다.</li>
                                <li>react의 생명주기에 대해 숙지했습니다.</li>
                                <li>react의 virtual DOM에 대해 숙지했습니다.</li>
                                <li>함수형 과 객체지향의 차이점을 숙지하였습니다.</li>
                                <li>상태관리에 대해 이해하고 redux로 state를 효율적으로 처리하였습니다.</li>
                            </ul>
                        </li>
                        <div className="  w-11/12   border-[1px] border-gray" />
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex items-center gap-[8px]">
                                <SiNextdotjs />
                                <span className="md:w-[120px]">NextJS</span>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>Client Component와 Server Component의 차이를 숙지했습니다.</li>
                                <li>next13 app-routing을 사용해 보았고, 동적 라우팅을 사용해 보았습니다.</li>
                                <li>데이터 페치를 해보았고, 상황에 맞게 캐싱작업도 해보았습니다.</li>
                                <li>loading 컴포넌트로 Server Component이동간 로딩 페이지도 작업해보았습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        백앤드
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiExpress />
                                    <span className="md:w-[120px]">Express</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <FaNode />
                                    <span className="md:w-[120px]">NodeJS</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>최대한 RestFul하게 설계하려 노력하였습니다.</li>
                                <li>Model,Controller로 웹서버의 요청을 받아 데이터를 처리 하였습니다.</li>
                                <li>JWT 토큰을 발행하여 자동로그인을 만들어 보았습니다.</li>
                                <li>cors 에러를 express의 cors로 해결한적이 있습니다.</li>
                            </ul>
                        </li>
                        <div className="  w-11/12   border-[1px] border-gray" />
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiMysql />
                                    <span className="md:w-[120px]">My SQL</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiSequelize />
                                    <span className="md:w-[120px]">Sequelize</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>ORM의 개념을 알고 데이터베이스를 관리하였습니다.</li>
                                <li>Primary Key ,Foreign Key의 개념을 숙지하고 1:1,1:N 테이블을 만들었습니다.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold w-[20%] basisc-[25%]">
                        배포
                    </h3>
                    <ul className="flex flex-col gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                        <li className="flex flex-col gap-[8px] md:gap-[32px] md:flex-row items-baseline">
                            <span className="text-[16px] text-slate-600 md:text-[24px] basis-[20%] flex md:flex-col items-center gap-[8px]">
                                <div className="flex items-center gap-[8px]">
                                    <SiAmazonec2 />
                                    <span className="md:w-[120px]">Ec2</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiAwsamplify />
                                    <span className="md:w-[120px]">Amplify</span>
                                </div>
                                <div className="flex items-center gap-[8px]">
                                    <SiNginx />
                                    <span className="md:w-[120px]">Nginx</span>
                                </div>
                            </span>
                            <ul className="list-disc list-outside leading-6 px-[20px] md:leading-8 text-[12px] md:text-[16px] ">
                                <li>EC2 로 react와 nodeJS를 한 인스턴스에 배포한 경험이 있습니다.</li>
                                <li>가비아에서 도메인을 구입하여 연결한 경험이 있습니다.</li>
                                <li>http와 https의 프로토콜 차이를 숙지하고 certBot으로 ssl인증서를 발급받았습니다.</li>
                                <li>Amplify로 Next를 배포한 경험이 있습니다.</li>
                                <li>
                                    다만, 아직 배포는 기술 블로그를 많이 참고해서 진행하였기 때문에 더 공부하고
                                    있습니다.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="flex flex-row gap-[32px] py-[32px]">
                    <div className="w-[15%] md:w-[20%]">
                        <h3 className="text-[16px] md:text-[24px] font-extrabold md:font-semibold  basisc-[25%]">
                            기타 스택
                        </h3>
                    </div>
                    <div className="w-[70%] md:w-[60%]">
                        <ul className="flex   gap-[16px] text-[16px] pb-[32px] font-medium w-full items-start">
                            <li className="flex sm:flex-wrap  gap-[8px] md:gap-[32px]  items-baseline">
                                <SiTailwindcss />
                                <span className="md:w-[120px]">Tailwindcss</span>
                                <SiStyledcomponents />
                                <span className="md:w-[120px]">Styled-Components</span>
                                <SiHtml5 />
                                <span className="md:w-[120px]">HTML</span>
                                <SiCss3 />
                                <span className="md:w-[120px]">CSS</span>
                                <SiSolidity />
                                <span className="md:w-[120px]">Solidity</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Skills
