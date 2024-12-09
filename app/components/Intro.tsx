'use client'
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Intro() {

    const handleScroll = () => {
        const scrollPosition = document.documentElement.scrollTop;
        const scrollRatio = 0.3;
        const backgroundPosition = scrollPosition * scrollRatio;

        const backgroundImage = document.querySelector('.background-image') as HTMLElement;
        backgroundImage.style.backgroundPositionY = `${-backgroundPosition}px`;
    };

  

    
    
    useEffect((() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }), [])

    return (


        <section className="h-[36rem] flex relative" >

            <div id='background-image' className="left-0 top-0 text-white w-3/4">
                <div className="background-image h-full ">
                </div>
                <div className="absolute text-5xl font-thin tracking-widest bottom-60 left-32">HI I'M</div>
                <div className="absolute font-charm font-black text-8xl text-white tracking-widest bottom-24 left-32">JIMMY SHUM</div>
            </div>

            <div className=" absolute right-0 bg-indigo-500 h-full w-1/4 flex flex-col pt-16 items-center">
                <div className="font-bold text-4xl text-white "> SHUM</div>
                <div className="font-bold text-4xl text-white mb-8">Kwun Ho</div>

                
                <div className="text-lg font-thin text-white font-sans mt-10 ">A passionate career transitioner </div>
                <div className="text-lg font-thin text-white font-sans  ">into programming.</div>

                <div className="text-lg font-thin text-white font-sans mt-16">shumkwanho@gmail.com</div>
                <div className="text-lg font-thin text-white font-sans mb-16">+852 9327-3560</div>
                {/* can make some animation when hover */}
                
                <a href="/shumCV.pdf">
                    <button className="bg-white h-12 w-32 rounded-md hover:shadow-xl">
                        CV &ensp;
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </a>

            </div>
        </section>
    )
}
