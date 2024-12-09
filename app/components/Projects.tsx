
import Image from "next/image";
import Link from "next/link";
import { WEB_URL } from "../global";
type projectsProps = {
    projectData: any[]
}

export default async function Projects(projectsProps: projectsProps) {

    const { projectData } = projectsProps




    return (
        <section className="w-full bg-white pt-12 pb-20" id="projects">
            <div className="font-charm font-medium px-40 text-5xl text-[#5569DC] pt-3 ">Projects</div>
            <div className="font-sans px-40 text-[#5569DC] text-xl mt-3 font-thin tracking-wider pb-16 mt-3">WHAT I'VE ATTEMPED</div>
            <div className="slider">
                <div className="slide-track">
                    {projectData.map((elem, index) => {
                        return (
                            <div className="slide px-2 relative" key={index}>
                                <Image
                                    src={`${WEB_URL}/api/files/${elem.collectionId}/${elem.id}/${elem.main_photo}`}
                                    alt={elem.project_name}
                                    height={200}
                                    width={300}
                                    style={{ objectFit: "cover" }} />
                                <div className="absolute capitalize text-xl mt-2 font-semibold text-indigo-500">{elem.project_name}</div>
                                <div className="absolute top-[130%] italic w-4/5 leading-5 capitalize">{elem.description}</div>
                            </div>
                        )
                    })}
                    {projectData.map((elem, index) => {
                        return (
                            <div className="slide px-2 relative" key={index}>
                                <Image
                                    src={`${WEB_URL}/api/files/${elem.collectionId}/${elem.id}/${elem.main_photo}`}
                                    alt={elem.project_name}
                                    height={200}
                                    width={300}
                                    style={{ objectFit: "cover" }} />
                                <div className="absolute capitalize text-xl mt-4 font-semibold text-indigo-500">{elem.project_name}</div>
                                <div className="absolute top-[130%] italic w-4/5 leading-5 capitalize">{elem.description}</div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Link href={"/projects"}>
                <button className="block mx-auto text-xl mt-10 bg-[#5569DC] px-3 py-2 rounded-lg text-white shadow-lg" >See All Projects
                </button>
            </Link>
        </section>
    )

}