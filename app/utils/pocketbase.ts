import PocketBase, { RecordModel } from "pocketbase"
const pocketBaseIP = 'http://127.0.0.1:8090'


class PbClient extends PocketBase {


    public constructor() {
        super(pocketBaseIP)

    }


    public async getTechStack() {
        const techMap = await this.collection("tech_stack").getFullList({
            fields: "id,name"
        })

        return techMap.reduce((acc, elem) => {
            acc[elem.id] = elem.name;
            return acc;
        }, {} as Record<string, string>)
    }


    public async getProjects() {

        try {
            const res = await fetch(`${pocketBaseIP}/api/collections/projects/records?expand=techStack&sort=+sequence`)
            const data = await res.json()
            return data.items
        } catch (error) {
            console.log(error)
            return []
        }

    }


    public async getProjectDetail(id: string) {
        try {
            const res = await fetch(`${pocketBaseIP}/api/collections/projects/records/${id}?expand=feature_via_project_id,techStack`)
            const data = await res.json()
            return data
            
        } catch (error) {
            console.log(error);

        }

    }


}

export default new PbClient()

