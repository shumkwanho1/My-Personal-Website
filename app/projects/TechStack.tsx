import Image from "next/image";
import { techStackType } from "../utils/type";
type techStackProps = {
    techStack: techStackType
}
export default function TechStack(techStackProps: techStackProps) {
    const { techStack } = techStackProps
    const { icon, id, name } = techStack

    return (
        <div key={id} className="mb-6">
            <div className="h-4/5 content-center">
                <Image
                    src={icon}
                    alt={name}
                    width={100}
                    height={100}
                />
            </div>
            <div className="h-1/5 justify-self-center">
                {name}
            </div>
        </div>
    )

}