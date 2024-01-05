import { Wrapper, Heading } from '../components/common'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { DiJavascript, DiNodejs, DiGithubBadge, DiMysql, DiHtml5, DiAws } from 'react-icons/di'
import { SiHtml5, SiNotion, SiPlaycanvas, SiSolidity, SiTailwindcss, SiTypescript } from 'react-icons/si'
import { DiReact } from 'react-icons/di'
import useModal from '../hooks/useModal'
import Modal from '../components/modal'
import BounceDEX from './bounceDEX'
import Steam100 from './steam100'
import SpaceGame from './spaceGame'
import Market from './market'

const Projects = () => {
    const [isShowingModal, toggleModal] = useModal()
    const [isShowingModal2, toggleModal2] = useModal()
    const [isShowingModal3, toggleModal3] = useModal()
    const [isShowingModal4, toggleModal4] = useModal()

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
                                    className="px-[16px] py-[8px] bg-blue-500 rounded-[8px] text-white hover:bg-blue-600"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            블록체인 2D 게임(개인 프로젝트){' '}
                            <a target="_blink" href="https://github.com/jisub12/SpaceDDongGame">
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

                        <h3 className="py-[16px] text-[16px] font-bold">열정에서 현실로</h3>
                        <ul className="px-[32px] leading-8 list-disc list-outside text-[12px] md:text-[16px]">
                            <li>1) 학원 다니는 동안 팀 프로젝트 기간 제외하고 매일 2시간 이상씩 주말에도 꾸준히 개발했습니다.</li>
                            <li>2) 자바스크립트말고는 아무것도 배우지 못한 상태에서 시작했습니다.</li>
                            <li>3) 그래서 Javascript와 canvas만으로 하드코딩했습니다.</li>
                            <li>4) 자세한 사항은 상세보기를 눌러주시면 감사하겠습니다.</li>
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
                                    className="px-[16px] py-[8px] bg-blue-500 rounded-[8px] text-white hover:bg-blue-600"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            블록체인 DEX 거래소(기업 협약 프로젝트){' '}
                            <a target="_blink" href="https://blog.naver.com/jisub44/223285457515">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Swap, Pool, Staking, Governance 기능을 갖춘 DEX 거래소 제작
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
                            <li>탈주자들의 리워드를 현재 홀더들에게 재분배하는 스테이킹 메커니즘을 설계하고 구현함</li>
                            <li>
                                컨트랙트의 보안 및 소유권 관리 기능을 강화를 위해 OpenZeppelin 라이브러리의 Ownable과
                                ReentrancyGuard를 활용
                            </li>
                            <li>
                                컨트랙트의 구조와 로직을 확장성을 고려하여 설계함으로써 미래 요구사항의 변화에 유연하게
                                대응할 수 있도록 함(Staking Pool ID)
                            </li>
                            <li>
                                React Query 라이브러리의 useQuery와 useQueryClient를 사용하여 스테이킹 관련 데이터를
                                비동기적으로 가져오고 캐싱함
                            </li>
                            <li>스마트 컨트랙트의 이벤트를 구독하여 데이터를 실시간으로 관리함</li>
                            <li>
                                사용자의 검색어 입력에 따라 결과를 동적으로 필터링하고 표시하는 커스텀 훅 SerchHook을
                                구현함
                            </li>
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
                                    className="px-[16px] py-[8px] bg-blue-500 rounded-[8px] text-white hover:bg-blue-600"
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
                            <a target="_blink" href="https://blog.naver.com/jisub44/223195751422">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            Steam API를 이용해 Steam에 등록된 게임을 추천해주는 사이트
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
                            <li>
                                전체 디렉터리 구조와 환경을 설계하고 설정하여, 유지보수가 용이한 코드베이스를 확립함
                            </li>
                            <li>
                                Main Page, Admin Page, Board Page 등 주요 페이지를 개발하여 깔끔하고 사용자 친화적인
                                UI/UX를 구현함
                            </li>
                            <li>
                                게시판의 전체 CRUD (생성, 읽기, 수정, 삭제) 기능을 구현하여 앱의 상호작용 기능을 강화함
                            </li>
                            <li>
                                중첩된 댓글 시스템을 개발하여 사용자들이 댓글과 대댓글을 달 수 있게 하여 사용자 참여도를
                                증가시킴
                            </li>
                            <li>
                                ThemeProvider 및 useContext 훅을 활용하여 다크 모드 기능을 구현하고 다양한 조명 조건에서
                                사용자 UI 경험을 개선함
                            </li>
                            <li>다국어 지원을 위한 국제화(i18n)를 통합하여 앱의 접근성 및 사용자 기반을 확대함</li>
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
                            <li>
                                <button
                                    onClick={toggleModal4}
                                    className="px-[16px] py-[8px] bg-blue-500 rounded-[8px] text-white hover:bg-blue-600"
                                >
                                    상세보기
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full">
                        <h2 className="flex flex-row items-center gap-[8px] text-[16px] text-slate-800 md:text-black md:text-[24px] font-semibold pb-[16px]">
                            동네별로 구역을 나눠서 볼 수 있는 중고거래 게시판{' '}
                            <a target="_blank" href="https://blog.naver.com/jisub44/223138868607">
                                <FaExternalLinkAlt />
                            </a>
                        </h2>

                        <p className="leading-5 text-slate-950 text-[12px] md:text-[16px] md:leading-7">
                            지역별로 나눠서 볼 수 있는 중고거래 게시판
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
                            <li>
                                AWS S3를 활용해 다중 이미지 호스팅 및 관리 시스템을 구축, 다양한 이미지 리소스를
                                효율적으로 처리함
                            </li>
                            <li>
                                사용자 경험을 최우선으로 고려하여 My Page 및 Main Page를 설계하고 구현, 직관적이고
                                매력적인 사용자 인터페이스 제공
                            </li>
                            <li>정규식을 통한 로그인 및 회원가입 기능을 구현하여 사용자 인증 시스템을 강화함</li>
                            <li>
                                프로젝트 전체에 걸친 CSS 스타일링을 통해 일관되고 모던한 디자인 언어를 구현,
                                사용자들에게 더욱 매력적인 UI 경험 제공
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>

            <Modal title="SpaceGame" show={isShowingModal} onCloseButtonClick={toggleModal}>
                <SpaceGame />
            </Modal>

            <Modal title="BounceDEX" show={isShowingModal2} onCloseButtonClick={toggleModal2}>
                <BounceDEX />
            </Modal>

            <Modal title="Steam100" show={isShowingModal3} onCloseButtonClick={toggleModal3}>
                <Steam100 />
            </Modal>

            <Modal title="Market" show={isShowingModal4} onCloseButtonClick={toggleModal4}>
                <Market />
            </Modal>
        </Wrapper>
    )
}

export default Projects
