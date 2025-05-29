import React from 'react';

import { words } from '../constants';

function Hero(){
    return(
        <section id='hero' className='realtive overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className='hero-layout' >
                {/* Left hero content  for text*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5' >
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text text-white'>
                            <h1>
                                Shaping
                                <span className='slider'>
                                    <span className='wrapper'>
                                        {words.map((word) =>
                                            (<span key={word.text} className='flex items-center md:gap-3 gap-1'>
                                                <img
                                                 src={word.image}
                                                 alt={word.text}
                                                 className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'/>
                                                 <span>{word.text}</span>
                                            </span>)
                                        )}
                                    </span>
                                </span>

                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Delivers Results</h1>
                            <p className='text-white'>
                                Hi, I am Lekhwar a software developer from India who converts caffine into code.
                            </p>
                        </div>
                    </div>
                </header>
                {/* Right hero section for 3D model */}
            </div>

        </section>
        
    );
}
export default Hero