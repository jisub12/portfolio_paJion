import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

const Introduce = () => {
    const { animatedElementRef, isVisible } = useIntersectionObserver(0.7)

    return (
        <div
            ref={animatedElementRef}
            className={`w-full flex pt-[32px] transition-opacity duration-1000 ease-in-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="flex flex-col gap-[16px] w-full items-center">
                <RiDoubleQuotesL />
                <div className="text-center text-[16px] md:text-[28px]">
                    
                        <p>매일 새벽 5시에 일어나 운동하고 코딩문제를 푸는 일을</p>
                        <p>하루도 빠짐없이 해 왔습니다.</p>
                        <p>저는 목표를 정하면</p>
                        <p>끝끝내 해내는 집념을 가지고 있습니다.</p>
                        <p></p>
                    
                </div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}

export default Introduce
