'use client'
import Image from "next/image"
import { WEB_URL } from "../global"
import Link from "next/link"


type projectCardProps = {
    projectData: any
    showModal:(project:any)=>void
}

export default function ProjectCard(projectCardProps: projectCardProps) {

    const { projectData, showModal} = projectCardProps
    const { collectionId, expand, full_description, id, link, main_photo, project_name } = projectData
    const { techStack } = expand

    //animation : darken, show techStack
    return (<>

        <div className="h-96 w-96 rounded-md overflow-hidden m-5" >
            <div className="h-3/5 w-full relative cursor-pointer" onClick={()=>{showModal(projectData)}}>
                <Image
                    src={`${WEB_URL}/api/files/${collectionId}/${id}/${main_photo}`}
                    alt={project_name}
                    fill
                />
            </div>
            <div className="w-full h-2/5 flex flex-col justify-around items-center p-2 border-2 border-indigo-300">
                <div className="capitalize text-xl h-3/12 text-[#5569DC]">{project_name}</div>
                <div className="text-wrap truncate h-4/12 text-sm leading-4 italic line-clamp-2">{full_description}</div>
                <div className="h-3/12 text-xs truncate w-full">
                    {projectCardProps.projectData.deployed? "Deployed Link" : "GitHub Link"}
                    <div className="underline hover:cursor pl-8 mt-1">
                        <Link href={link}>{link}</Link>
                    </div>
                </div>
            </div>
        </div>
            
    </>)
}