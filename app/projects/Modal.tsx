'use client'
import Image from "next/image"
import { WEB_URL } from "../../global"
import TechStack from "./TechStack"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
type modalProps = {
    projectData: any
    removeModal: () => void
    nextProject: () => void
    previousProject: () => void
}
export default function Modal(modalProps: modalProps) {
    const { projectData, removeModal, nextProject, previousProject } = modalProps

    if (Object.keys(projectData).length == 0) {
        return <></>
    }



    const { collectionId, expand, full_description, id, github_link, main_photo, project_name, deployed_link } = projectData



    const deployed = deployed_link != ""

    const feature = expand?.feature_via_project
    const techStack = expand?.techStack




    return (
        <>
            <div className="fixed w-screen h-screen z-10 top-0 left-0 show-modal blur-none">
                <div className=" w-full h-full bg-transprent z-20 " onClick={() => removeModal()}></div>
                <div className="fixed bottom-[50%] right-[50%] translate-x-1/2 translate-y-1/2 w-[50%] h-[90%] bg-white z-30 rounded-xl p-12 overflow-y-scroll overflow-x-visible overscroll-contain no-scrollbar">

                    <div className="relative">

                        <div className="h-50% w-full mb-4">
                            <Image
                                src={`${WEB_URL}/api/files/${collectionId}/${id}/${main_photo}`}
                                alt={project_name}
                                height={100}
                                width={700}
                            />
                        </div>

                        <div className="h-3/5 w-full ">
                            <h2 className="text-2xl text-[#5569DC] my-6 capitalize">{project_name}</h2>
                            <p>{full_description}</p>

                            <hr className="border-indigo-700 my-6" />
                            <div className=" text-xl mb-6 cursor-pointer"> Features: &emsp;
                            </div>
                            <div className="h-fit">
                                {feature.map((elem: any, index: string) => {
                                    return (
                                        <div key={index} >
                                            <span className="font-bold">{elem.feature} : </span>
                                            <span className="italic text-sm"> {elem.description}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            <hr className="border-indigo-700 my-6" />
                            <div className=" text-xl mb-4">{deployed ? "Deployed " : "GitHub "} Link:</div>
                            <div className="hover:cursor-pointer italic ml-6 truncate">
                                <Link href={deployed ? deployed_link : github_link}>
                                    {deployed ? deployed_link : github_link}
                                </Link>
                            </div>

                            <hr className="border-indigo-700 my-6" />

                            <div className=" text-xl mb-6">Tech Stack:</div>
                            <div className="grid grid-cols-3 gap-4 justify-items-center">
                                {techStack.map((item: any,) => <TechStack techStack={item} />)}
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            <div className="fixed top-[22rem] left-[16%] text-7xl z-40 text-white hover:cursor-pointer" onClick={(() => nextProject())}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="fixed top-[22rem] right-[16%] text-7xl z-40 text-white hover:cursor-pointer" onClick={() => previousProject()}>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </>
    )
}