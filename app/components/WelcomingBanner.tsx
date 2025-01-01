'use client'

import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"

export default function WelcomingBanner() {
    const [showModal, setShowModal] = useState(true)

    function removeModal() {
        setShowModal(false)
    }

    useEffect(() => {
        const modalShown = localStorage.getItem('modalShown');
        if (!modalShown) {
            localStorage.setItem('modalShown', 'true');
        }else{
            setShowModal(false)
        }

    }, [])
    return (
        showModal ?

            <div className="fixed w-screen h-screen z-10 top-0 left-0 blur-none">
                <div className=" w-full h-full bg-transprent z-20 " onClick={() => removeModal()}></div>

                {/* Modal */}
                <div className="fixed bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 w-[50rem] h-[20rem] bg-white z-30 rounded-xl p-12 overflow-y-scroll overflow-x-visible overscroll-none no-scrollbar">
                    <div className="absolute right-4 top-4 text-3xl text-indigo-500" onClick={() => removeModal()}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>

                    <div className="text-[#5569DC] text-3xl">Welcome to My Personal Website!</div>
                    <div className="mt-10 text-lg">I'm thrilled to have you here. Feel free to explore all the features, everything should be working smoothly. Currently, I'm still enhancing some aspects, including mobile responsiveness and adding animation effects.</div>
                </div>
            </div>
            :
            <></>

    )
}