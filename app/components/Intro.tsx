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


        <section className="h-fit relative flex flex-col md:flex-row md:h-[36rem]" >

            <div id='background-image' className="text-white w-screen h-[36rem] background-image pt-[20rem] md:w-3/4">
                {/* <div className=" h-full ">
                </div> */}
                <div className="brightness-100 background-image-content  ml-[6%] p-8 w-fit ">
                    <div className="text-xl font-thin tracking-widest text-white md:text-4xl ">HI I'M</div>
                    <div className="text-3xl mt-12 font-charm font-black text-nowrap text-white tracking-widest md:text-6xl ">JIMMY SHUM</div>
                </div>
            </div>

            <div className="bg-indigo-500 h-full w-screen flex flex-col pt-16 pb-16 items-center md:w-1/4 ">
                <div className="font-bold text-6xl text-white md:text-4xl"> SHUM</div>
                <div className="font-bold text-6xl text-white mb-8 md:text-4xl">Kwun Ho</div>
                <div className="text-2xl font-thin text-white font-sans mt-10 md:text-base capitalize xl:text-xl ">A passionate </div>
                <div className="text-2xl font-thin text-white font-sans md:text-base capitalize xl:text-xl ">career transitioner </div>
                <div className="text-2xl font-thin text-white font-sans md:text-base capitalize xl:text-xl ">into programming.</div>
                <div className="text-2xl font-thin text-white font-sans mt-16 md:text-base xl:text-xl">shumkwanho@gmail.com</div>
                <div className="text-2xl font-thin text-white font-sans mb-16 md:text-base xl:text-xl">+852 9327-3560</div>
                {/* can make some animation when hover */}

                <a href="/Shum Kwun Ho CV.pdf" target="_blank">
                    <button className="bg-white h-16 w-40 rounded-md hover:shadow-xl text-2xl md:text-xl md:h-12 md:w-32">
                        CV &ensp;
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </a>

            </div>
        </section>
    )
}
