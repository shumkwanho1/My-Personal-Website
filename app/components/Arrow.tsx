'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function Arrow() {

    function scrollUp(){
        window.scrollTo(0,0)
    }
    return (<>
        {
            <div id="scroll-arrow" className='fixed bottom-12 right-12 text-2xl p-2 border-2 h-12 w-12 text-center rounded-full bg-indigo-500 show-arrow cursor-pointer' onClick={() => scrollUp()}>
                <div className='relative bottom-0.5 text-white'>
                    <FontAwesomeIcon icon={faArrowUp} />
                </div>
            </div>
        }
    </>)
}