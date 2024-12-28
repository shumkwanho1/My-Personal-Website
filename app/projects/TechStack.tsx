import Image from "next/image";
import { WEB_URL } from "../../global";
type techStackProps = {
    techStack:any
}
export default function TechStack(techStackProps:techStackProps){
    const {techStack} = techStackProps
    const {collectionId, icon, id, name} = techStack
    
   return(
    <div key={id} className="mb-6">
        <div className="h-4/5 content-center">
            <Image 
            src={`${WEB_URL}/api/files/${collectionId}/${id}/${icon}`}
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