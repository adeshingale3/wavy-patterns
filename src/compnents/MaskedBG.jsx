import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const MaskedBG = () => {
  useGSAP(() => {
    const container = document.querySelector('#masked-bg-container');
    
    // Animate first circle
    gsap.fromTo('#circle1', 
      { 
        y: -100,
      }, 
      { 
        y: 100,
        duration: 5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
        onUpdate: function() {
          const circle = document.querySelector('#circle1');
          const rect = circle.getBoundingClientRect();
          const x = (rect.left + rect.width/2) / window.innerWidth * 100;
          const y = (rect.top + rect.height/2) / window.innerHeight * 100;
          container.style.setProperty('--circle1-x', `${x}%`);
          container.style.setProperty('--circle1-y', `${y}%`);
        }
      }
    );

    // Animate second circle
    gsap.fromTo('#circle2', 
      { 
        y: -50,
      }, 
      { 
        y: 50,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        onUpdate: function() {
          const circle = document.querySelector('#circle2');
          const rect = circle.getBoundingClientRect();
          const x = (rect.left + rect.width/2) / window.innerWidth * 100;
          const y = (rect.top + rect.height/2) / window.innerHeight * 100;
          container.style.setProperty('--circle2-x', `${x}%`);
          container.style.setProperty('--circle2-y', `${y}%`);
        }
      }
    );
  });
  return (
    <div id="masked-bg-container" className='z-[-999] w-screen h-screen overflow-hidden relative'>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Black background */}
        <div className="absolute inset-0 bg-black" />

        {/* Circle masks */}
        <div id="circle1" className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            left: '20%',
            top: '20%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(20px)',
          }}
        />
        <div id="circle2" className="absolute w-[300px] h-[300px] rounded-full"
          style={{
            left: '70%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Masked grid layer */}
        <div className="absolute inset-0">
          {/* Grid columns */}
          <div className="absolute inset-0 flex"
            style={{  
                          
              WebkitMaskImage: `
                radial-gradient(circle 150px at var(--circle1-x, 20%) var(--circle1-y, 20%), rgba(0,0,0,1) 40%, transparent 100%),
                radial-gradient(circle 150px at var(--circle2-x, 70%) var(--circle2-y, 50%), rgba(0,0,0,1) 40%, transparent 100%)
              `,
              WebkitMaskRepeat: 'no-repeat',
              maskComposite: 'source-in',
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex-1"
                style={{
                  backgroundColor: i % 2 === 0 ? '#34d399' : '#3b82f6'
                }}
              />
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default MaskedBG