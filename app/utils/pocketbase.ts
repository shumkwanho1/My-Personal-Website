import PocketBase from "pocketbase"
import {WEB_URL} from "../../global"


class PbClient extends PocketBase {

    private pocketBaseIP:string

    public constructor() {
        super(WEB_URL)
        this.pocketBaseIP = WEB_URL
    }



    public async getProjects() {

        try {
            console.log(this.pocketBaseIP)
            const res = await fetch(`${this.pocketBaseIP}/api/collections/projects/records?expand=techStack&sort=+sequence`)
            const data = await res.json()
            return data.items
        } catch (error) {
            console.log(error)
            return []
        }

    }


    public async getProjectDetail(id: string) {
        try {
            console.log(this.pocketBaseIP)
            const res = await fetch(`${this.pocketBaseIP}/api/collections/projects/records/${id}?expand=feature_via_project_id,techStack`)
            const data = await res.json()
            return data
            
        } catch (error) {
            console.log(error);

        }

    }


}

export default new PbClient()

