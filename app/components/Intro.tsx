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


        <section className="h-fit relative flex flex-col lg:flex-row lg:h-[36rem]" >

            <div id='background-image' className="text-white w-screen h-[36rem] background-image pt-[20rem] pl-10 lg:w-3/4">
                {/* <div className=" h-full ">
                </div> */}
                <div className="brightness-100 background-image-content bg-indigo-500 p-10 w-fit ">
                    <div className=" text-2xl font-thin tracking-widest text-white lg:text-4xl ">HI I'M</div>
                    <div className="text-4xl mt-16 font-charm font-black text-white tracking-widest lg:text-6xl ">JIMMY SHUM</div>
                </div>
            </div>

            <div className=" right-0 bg-indigo-500 h-full w-screen flex flex-col pt-16 pb-16 items-center lg:w-1/4 ">
                <div className="font-bold text-6xl text-white lg:text-4xl"> SHUM</div>
                <div className="font-bold text-6xl text-white mb-8 lg:text-4xl">Kwun Ho</div>


                <div className="text-3xl font-thin text-white font-sans mt-10 lg:text-lg ">A passionate career transitioner </div>
                <div className="text-3xl font-thin text-white font-sans  lg:text-lg">into programming.</div>

                <div className="text-3xl font-thin text-white font-sans mt-16 lg:text-lg">shumkwanho@gmail.com</div>
                <div className="text-3xl font-thin text-white font-sans mb-16 lg:text-lg">+852 9327-3560</div>
                {/* can make some animation when hover */}

                <a href="/Shum Kwun Ho CV.pdf" target="_blank">
                    <button className="bg-white h-16 w-40 rounded-md hover:shadow-xl text-2xl lg:text-xl lg:h-12 lg:w-32">
                        CV &ensp;
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </a>

            </div>
        </section>
    )
}
