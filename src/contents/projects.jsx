import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiMysql, DiHtml5 } from 'react-icons/di'
import { SiHtml5, SiNextdotjs, SiNotion, SiPlaycanvas, SiSolidity, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import ReactPlayer from 'react-player'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    // const [isShowingModal4, toggleModal4] = useModal()
    const videoUrl1 = process.env.PUBLIC_URL + '/spaceVideo.mov'
    const videoUrl2 = process.env.PUBLIC_URL + '/dexVideo.mp4'
    const videoUrl3 = process.env.PUBLIC_URL + '/steam100.mp4'
    // const videoUrl4 = process.env.PUBLIC_URL + '/spaceVideo.mp4'

    return (
        <Wrapper>
            <Heading>개인 프로젝트</Heading>
            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫 번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={process.env.PUBLIC_URL + '/spaceddong.png'} className="w-full" alt="spaceGame" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">개인 프로젝트</li>
                            <li className="text-stone-500">2023. 04. 05 ~ 현재</li>
                            <li>Contract & FrontEnd</li>
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
                            블록체인 2D 게임{' '}
                            <a href="https://github.com/jisub12/SpaceDDongGame">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            우주 똥 피하기 게임
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <SiSolidity />
                            <SiHtml5 />
                            <SiPlaycanvas />
                            <DiJavascript />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 기능</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            {/* <li>Javascript와 Canvas만 활용해서 구현</li> */}
                            <li>유저는 게임을 통해 토큰을 얻을 수 있다.</li>
                            <li>유저는 얻은 토큰으로 NFT를 구매할 수 있다.</li>
                            <li>유저는 구매한 NFT를 게임내 스킨으로 적용시킬 수 있다.(구현중)</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Heading>팀 프로젝트</Heading>

            <ul className="flex flex-col w-full gap-[120px]">
                {/* 첫 번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={process.env.PUBLIC_URL + '/BounsDEX.png'} className="w-full" alt="DEX거래소" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (5명)</li>
                            <li className="text-stone-500">2023. 10. 23 ~ 2023. 12. 05</li>
                            <li>Contract & FrontEnd</li>
                            <li>
                                <button
                                    onClick={toggleModal2}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            블록체인 DEX 거래소(기업협약 프로젝트){' '}
                            <a href="https://blog.naver.com/jisub44/223285457515">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            DEX거래소 구현
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <SiSolidity />
                            <SiTypescript />
                            <SiTailwindcss />
                            <DiGithubBadge />
                            <SiNotion />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>Staking Contract 기획 및 작성</li>
                            <li>Contract 요청 함수 작성 및 데이터 반환(Staking Page)</li>
                            <li>SearchBar 기능 작성</li>
                        </ul>
                    </div>
                </li>

                {/* 두 번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={process.env.PUBLIC_URL + '/steam100.png'} className="w-full" alt="steam100" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 08. 07 ~ 2023. 08. 25</li>
                            <li>Front-end</li>
                            <li>
                                <button
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                    onClick={toggleModal3}
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            Steam API를 이용한 Steam 100 추천 사이트{' '}
                            <a href="https://blog.naver.com/jisub44/223195751422">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Steam API를 이용해 Steam내 게임을 추천해주는 사이트
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiReact />
                            <DiNodejs />
                            <DiMysql />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>디렉터리 구조 생성</li>
                            <li>프론트 환경 설정</li>
                            <li>Main Page, Admin Page, Border Page 전체 작성</li>
                            <li>Dark Mode 구현</li>
                            <li>언어변환(i18n) 구현</li>
                        </ul>
                    </div>
                </li>
                {/* 세 번째 프로젝트 */}
                <li className="flex flex-col gap-[32px] md:flex-row">
                    <div className="w-full md:w-[420px] ">
                        <img src={process.env.PUBLIC_URL + '/market.png'} className="w-full" alt="중고거래 게시판" />
                        <ul className="flex text-[12px] text-slate-600 py-[8px] gap-[8px] flex-row md:flex-col items-center md:items-start">
                            <li className="text-[16px]">팀플 프로젝트 (3명)</li>
                            <li className="text-stone-500">2023. 06. 05 ~ 2023. 06. 26</li>
                            <li>Front-end & Back-end</li>
                            {/* <li>
                                <button
                                    onClick={toggleModal}
                                    className="px-[16px] py-[8px] bg-gray-800 rounded-[8px] text-white hover:bg-gray-950"
                                >
                                    상세보기
                                </button>
                            </li> */}
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            동네별로 구역을 나눠서 볼 수 있는 중고거래 게시판{' '}
                            <a href="https://blog.naver.com/jisub44/223138868607">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            중고거래 게시판 구현
                        </p>

                        <h3 className="py-[16px] text-[16px] font-bold">사용 스택</h3>
                        <div className="flex flex-row text-[32px] gap-[8px] py-[8px] px-[32px]">
                            <DiHtml5 />
                            <DiJavascript />
                            <DiNodejs />
                            <DiMysql />
                            <DiGithubBadge />
                        </div>

                        <h3 className="py-[16px] text-[16px] font-bold">주요 업무</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>AWS S3 적용</li>
                            <li>My page, Main page 작성</li>
                            <li>로그인, 회원가입 작성</li>
                            <li>CSS 작성</li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal show={isShowingModal} onCloseButtonClick={toggleModal}>
                <ReactPlayer url={videoUrl1} playing={true} controls={true} />
            </Modal>

            <Modal show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <ReactPlayer url={videoUrl2} playing={true} controls={true} />
            </Modal>

            <Modal show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <ReactPlayer url={videoUrl3} playing={true} controls={true} />
            </Modal>

            {/* <Modal show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <ReactPlayer url={videoUrl4} playing={true} controls={true} />
            </Modal> */}
        </Wrapper>
    )
}

export default Projects
