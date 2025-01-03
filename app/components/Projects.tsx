import Image from "next/image";
import Link from "next/link";
import { projectType } from "../utils/type";
type projectsProps = {
    projectData: projectType[]
}

export default async function Projects(projectsProps: projectsProps) {

    const { projectData } = projectsProps




    return (
        <section className="w-full bg-white pt-12 pb-20" id="projects">
            <div className="font-charm font-medium pl-[10vw] text-5xl text-[#5569DC] pt-3 ">Projects</div>
            <div className="font-sans pl-[10vw] text-[#5569DC] text-xl mt-3 font-thin tracking-wider pb-16 mt-3">WHAT I'VE ATTEMPED</div>
            <div className="slider">
                <div className="slide-track">
                    {projectData.map((project, index) => {
                        return (
                            <div className="slide px-2 relative" key={index}>
                                <Image
                                    src={project.photos?.find((photo) => photo.is_main_photo)?.url || ''}
                                    alt={project.project_name}
                                    height={200}
                                    width={300}
                                    style={{ objectFit: "cover" }} />
                                <div className="absolute capitalize text-xl mt-2 font-semibold text-indigo-500">{project.project_name}</div>
                                <div className="absolute top-[130%] italic w-4/5 leading-5 capitalize">{project.description}</div>
                            </div>
                        )
                    })}
                    {projectData.map((project, index) => {
                        return (
                            <div className="slide px-2 relative" key={index}>
                                <Image
                                    src={project.photos?.find((photo) => photo.is_main_photo)?.url || ''}
                                    alt={project.project_name}
                                    height={200}
                                    width={300}
                                    style={{ objectFit: "cover" }} />
                                <div className="absolute capitalize text-xl mt-4 font-semibold text-indigo-500">{project.project_name}</div>
                                <div className="absolute top-[130%] italic w-4/5 leading-5 capitalize">{project.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Link href={"/projects"}>
                <button className="block mx-auto h-16 w-48 text-xl mt-10 bg-[#5569DC] px-3 py-2 rounded-lg text-white shadow-lg" >See All Projects
                </button>
            </Link>
        </section>
    )

}