import PocketBase from "pocketbase"
import { WEB_URL } from "../../global"


class PbClient extends PocketBase {

    private pocketBaseIP: string

    public constructor() {
        super(WEB_URL)
        this.pocketBaseIP = WEB_URL


    }



    public async getProjects() {

        try {
            const res = await fetch(`${this.pocketBaseIP}/api/collections/projects/records?expand=feature_via_project_id,techStack`)
            const data = await res.json()
            return data.items
        } catch (error) {
            console.log(error)
            return []
        }

    }




}

export default new PbClient()

