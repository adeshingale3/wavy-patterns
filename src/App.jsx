import React from 'react'
import BlurBG from './compnents/BlurBG'
import ToggleButton from './compnents/BookCallButton'
import SlidingColorButton from './compnents/BookCallButton'
import GradientBorderButton from './compnents/GradientBorderButton'


const App = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center text-9xl'>
      {/* <FadingBG /> */}
      {/* <NameScroller /> */}
      {/* <AnimatedBG /> */}
      {/* <MaskedBG /> */}
      {/* <MaskedBG /> */}
      {/* <GithubBG /> */}
     {/* <GithubBG /> */}
     {/* <SlidingColorButton /> */}
     <GradientBorderButton />
     
    </div>
  )
}

export default App