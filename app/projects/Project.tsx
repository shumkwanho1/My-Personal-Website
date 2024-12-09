'use client'
import { useState } from "react"
import ProjectCard from "./ProjectCard"
import Modal from "./Modal"
import pbClient from "../utils/pocketbase"
type projectProps = {
    projectData: any[]
}
export default function Project(projectProps: projectProps) {
    const { projectData } = projectProps
    const projectLength = projectData.length
    const [isShowModal, setIsShowModal] = useState(false)
    const [showProject, setShowProject] = useState({})

    async function getProjectDetail(id: string) {
        const data = await pbClient.getProjectDetail(id)
        setShowProject(data)
    }

    function removeModal() {
        setShowProject({})
        setIsShowModal(false)
    }

    function showModal(projectData: any) {
        getProjectDetail(projectData.id)

        setTimeout(() => setIsShowModal(true), 100)
    }
    function nextProject() {
        const nextProjectIndex = (showProject.sequence + 1) % projectLength
        console.log(nextProjectIndex);
        const nextProject = projectData.filter((elem)=> elem.sequence == nextProjectIndex)
        
        getProjectDetail(nextProject[0].id)

    }
    function previousProject() {
        const previousProjectIndex = showProject.sequence - 1 >= 0? showProject.sequence - 1 : projectLength + showProject.sequence - 1 
        const nextProject = projectData.filter((elem)=> elem.sequence == previousProjectIndex)
        getProjectDetail(nextProject[0].id) 
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
        </>
    )
}