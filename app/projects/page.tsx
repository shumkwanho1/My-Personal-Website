import { projectService } from "../utils/ProjectService"
import Project from "./Project"
export default async function ProjectPage() {

    const projectData = await projectService.getProject()







    return (
        <Project projectData={projectData} />
    )

}