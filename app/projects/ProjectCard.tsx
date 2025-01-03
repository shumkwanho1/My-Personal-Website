'use client'
import Image from "next/image"
import Link from "next/link"
import { projectType } from "../utils/type"


type projectCardProps = {
    projectData: projectType
    showModal: (project: any) => void
}

export default function ProjectCard(projectCardProps: projectCardProps) {

    const { projectData, showModal } = projectCardProps
    const { full_description, github_link, project_name, deployed_link, photos } = projectData
    const deployed = !!deployed_link

    //animation : 
    return (<>

        <div className="w-4/5 h-4/5 min-w-72 min-h-72 max-h-96 max-w-96 rounded-md overflow-hidden m-5 project-card" onClick={() => { showModal(projectData) }} >
            <div className="h-3/5 w-full relative cursor-pointer" >
                <Image
                    src={photos?.find((photo) => photo.is_main_photo)?.url || "a"} alt={project_name}
                    fill
                />
            </div>
            <div className="w-full h-2/5 flex flex-col justify-around items-center p-2 border-2 border-indigo-300">
                <div className="capitalize text-xl h-3/12 text-[#5569DC]">{project_name}</div>
                <div className="text-wrap truncate h-4/12 text-sm leading-4 italic line-clamp-2">{full_description}</div>
                <div className="h-3/12 text-xs truncate w-full">


                    {deployed ? "Deployed Link :" : "GitHub Link :"}
                    <div className="underline hover:cursor pl-8 mt-1" onClick={(e) => e.stopPropagation()}>
                        <Link href={deployed ? deployed_link || "" : github_link || ""}>
                            {deployed ? deployed_link : github_link}
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </>)
}