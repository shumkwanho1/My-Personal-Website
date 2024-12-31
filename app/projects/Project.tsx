'use client'
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import Modal from "./Modal"
import Link from "next/link"
type projectProps = {
    projectData: any[]
}
export default function Project(projectProps: projectProps) {
    const { projectData } = projectProps
    const projectLength = projectData.length
    const [isShowModal, setIsShowModal] = useState(false)
    const [showProject, setShowProject] = useState<any>({})



    function removeModal() {
        setShowProject({})
        setIsShowModal(false)
    }

    function showModal(projectData: any) {
        setShowProject(projectData)
        setIsShowModal(true)
    }

    function nextProject() {
        const nextProjectIndex = (showProject.sequence + 1) % projectLength
        const nextProject = projectData.filter((elem) => elem.sequence == nextProjectIndex)

        setShowProject(nextProject[0])
    }
    function previousProject() {
        const previousProjectIndex = showProject.sequence - 1 >= 0 ? showProject.sequence - 1 : projectLength + showProject.sequence - 1
        const previousProject = projectData.filter((elem) => elem.sequence == previousProjectIndex)
        setShowProject(previousProject[0])
    }

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
            <Modal projectData={showProject} removeModal={removeModal} nextProject={nextProject} previousProject={previousProject} />

            {!isShowModal ?
                <Link href="/">
                    <div className="fixed bottom-12 right-16 bg-indigo-500 text-white p-2 rounded-md">Back to Main Page</div>
                </Link>
                : ""
            }

        </>
    )
}