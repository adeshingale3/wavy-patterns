import React from 'react'
import BlurBG from './compnents/BlurBG'


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
     <div className='absolute'><BlurBG /></div>
     <div className='absolute'><h1>hi</h1></div>
     
    </div>
  )
}

export default App