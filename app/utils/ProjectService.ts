import { pgClient } from "./pgClient";
import { Client } from "pg"
import { featureType, photoType, projectType, techStackType } from "./type";


class ProjectService {
    constructor(private pgClient: Client) { }

    public async getProject(): Promise<projectType[]> {
        const data = (await pgClient.query(`
            SELECT 
                id, description, full_description, github_link, deployed_link, project_name
            FROM 
                projects
            ORDER BY
                id DESC
            `)).rows as any as projectType[]


        for (let project of data) {
            project.features = await this.getProjectFeature(project.id)
            project.photos = await this.getProjectPhoto(project.id)
            project.tech_stacks = await this.getProjectTechStack(project.id)
            project.id -= 1
        }

        return data
    }


    private async getProjectFeature(id: number) {
        const feature = (await pgClient.query(`
        SELECT 
            feature, description,id
        FROM
            features 
        WHERE
            project_id = ${id}
            `)).rows as any as featureType[]

        return feature
    }

    private async getProjectPhoto(id: number) {
        const photo = (await pgClient.query(`
        SELECT 
            url, is_main_photo,id
        FROM
            photos 
        WHERE
            project_id = ${id}
            `)).rows as any as photoType[]

        return photo
    }

    private async getProjectTechStack(id: number) {
        const teckStack = (await pgClient.query(`
        SELECT 
            icon, name, t.id
        FROM
            tech_stacks t
        JOIN 
            project_tech_stack_relation r on t.id = r.tech_stack_id
        WHERE
            r.project_id = ${id}
            `)).rows as any as techStackType[]

        return teckStack
    }
}

export const projectService = new ProjectService(pgClient);
