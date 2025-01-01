'use client'
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import Modal from "./Modal"
import Link from "next/link"
import { projectType } from "../utils/type"

type projectProps = {
    projectData: projectType[]
}
export default function Project(projectProps: projectProps) {
    const { projectData } = projectProps
    const projectLength = projectData.length
    const [isShowModal, setIsShowModal] = useState(false)
    const [thisProjectData, setThisProjectData] = useState<projectType | null>(null)
    // const [nextProjectData, setNextProjectData] = useState<projectType>(projectData[0])
    // const [previousProjectData, setPreviousProjectData] = useState<projectType>(projectData)


    function removeModal() {
        setThisProjectData(null)
        setIsShowModal(false)
    }

    function showModal(projectData: projectType) {
        setThisProjectData(projectData)
        setIsShowModal(true)
    }

    function nextProject() {
        if (!thisProjectData) {
            return
        }
        const nextProjectIndex = (thisProjectData.id + 1) % projectLength
        const nextProject = projectData.filter((elem) => elem.id == nextProjectIndex)

        setThisProjectData(nextProject[0])
    }
    function previousProject() {
        if (!thisProjectData) {
            return
        }
        const previousProjectIndex = thisProjectData.id - 1 >= 0 ? thisProjectData.id - 1 : projectLength + thisProjectData.id - 1
        const previousProject = projectData.filter((elem) => elem.id == previousProjectIndex)
        setThisProjectData(previousProject[0])
    }
    console.log(isShowModal);
    
    return (
        <>
            <div className={`${isShowModal ? "brightness-75 blur-sm " : ""}relative `}>
                <div className="px-16 bg-[#EFF1FB]">
                    <div className="grid grid-cols-2 gap-2 justify-items-center xl:grid-cols-3">
                        {projectData.map((project: any) => (
                            <ProjectCard projectData={project} key={project.id} showModal={showModal} />
                        ))}
                    </div>
                </div>
            </div>
            <Modal projectData={thisProjectData} removeModal={removeModal} nextProject={nextProject} previousProject={previousProject} />

            {!isShowModal ?
                <Link href="/">
                    <div className="fixed bottom-12 right-16 bg-indigo-500 text-white p-2 rounded-md">Back to Main Page</div>
                </Link>
                : ""
            }

        </>
    )
}