import React from 'react'

const BlurBG = () => {

    return (
        <div className='h-screen w-screen'>
            <div className='h-full w-full bg-white/50 overflow-hidden'>

                <div className="pink absolute w-[90vw] h-[30vh] sm:w-[70vw] sm:h-[25vh] md:w-[50vw] md:h-[20vh] bg-purple-500 rounded-full mt-10 sm:mt-8 md:mt-6 ml-20 sm:ml-12 md:ml-8 blur-[80px]" />
                <div className="green absolute w-[50vw] h-[20vh] sm:w-[40vw] sm:h-[18vh] md:w-[30vw] md:h-[15vh] bg-pink-500 rounded-full bottom-30 sm:bottom-24 md:bottom-20 left-20 sm:left-12 md:left-8 blur-[80px]" />
                <div className="yellow absolute w-[40vw] h-[40vh] sm:w-[35vw] sm:h-[35vh] md:w-[25vw] md:h-[25vh] bg-yellow-500 rounded-full right-10 sm:right-8 md:right-6 rotate-80 blur-[100px]" />
                <div className='absolute bg-white/50 blur-[10px] h-full w-full' />

            </div>
        </div>
    )
}

export default BlurBG