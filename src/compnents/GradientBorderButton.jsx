import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const GradientBorderButton = () => {
    useGSAP(() => {
        gsap.to('.rotater', {
            rotation: 360,
            duration: 6,
            repeat: -1,
            ease: "none"
        });
    });
    return (
        <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center bg-slate-950 text-white ">
            <div className="card-wrapper relative h-[10vw] w-[20vw] max-h-[50px] max-w-[100px] min-h-[30px] min-w-[80px] rounded-lg bg-gradient-to-b from-slate-700 to-slate-800 overflow-hidden">
    <div className='rotater absolute left-[-50%] top-[-50%] h-[200%] w-[200%] bg-[conic-gradient(rgba(244,114,182,0.4)_0deg,rgba(192,132,252,0.4)_120deg,transparent_80deg)]' />

    <div className="card-content flex items-center justify-center text-xs absolute left-[2px] top-[2px] h-[calc(100%-4px)] w-[calc(100%-4px)] rounded-lg bg-gradient-to-b from-slate-800 to-slate-900">
        <h1 className='text-lg'>hwllo</h1>
    </div>
</div>
        </div>
    )
}

export default GradientBorderButton