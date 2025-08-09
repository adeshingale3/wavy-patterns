import gsap from 'gsap';
import React, { useEffect } from 'react'
 
const FadingBG = () => {
  useEffect(() => {
    const tl = gsap.timeline({repeat: -1, repeatDelay: 0.6});
    tl.from(".box", {
      scale: 0,
      yoyo: true, 
      repeat: 1, 
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
          grid: [5, 5], // 5x5 grid
          axis: 'x',
          ease: 'back.out(1.7)',
          from: 'center',
      }
    }
)
tl.to(".box", {
      yoyo: true,
      scale: 1, 
      repeat: 1, 
      ease: "power1.inOut",
      stagger: {
        amount: 1.5,
          grid: [5, 5], // 5x5 grid
          axis: 'y',
          ease: 'back.out(1.7)',
          from: 'center',
      }
})
  }, []);

    return (
        <div className='z-[-999] bg-black w-screen h-screen overflow-hidden relative'>
            <div className='absolute z-2 h-full w-full bg-radial from-transperant from-5% to-black' />
            <div className='relative z-1 h-full w-full grid grid-cols-18 grid-rows-16'>
                {Array.from({ length: 305 }).map((_, i) => (
                    <div key={i} className="box w-2 h-2 bg-white/50 rounded-full" />
                ))}
            </div>
            
        </div>
    )
}

export default FadingBG