import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import Lottie from 'lottie-web';
import Animations from "./loading.json"

const Loading = () => {
    const container = useRef(null)
    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animations,
        });
        return () => instance.destroy();
    }, [])
  return (
    <div>
        <div className='containersnotfound p-[-100px !important] conatiner mx-auto p-3 px-6 flex items-center'>
                <div className='w-[30%]  conatiner mx-auto p-3 px-6 flex items-center' ref={container} ></div>
            </div>
    </div>
  )
}

export default Loading