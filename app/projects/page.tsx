import pbClient from "../utils/pocketbase"
import Project from "./Project"
export default async function ProjectPage() {

    const projectData = await pbClient.getProjects()
    projectData[4].deployed = true



    return (
        <Project projectData={projectData}/>
    )

}