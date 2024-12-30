import pbClient from "../utils/pocketbase"
import Project from "./Project"
export default async function ProjectPage() {

    const projectData = await pbClient.getProjects()

    


    


    return (
        <Project projectData={projectData} />
    )

}