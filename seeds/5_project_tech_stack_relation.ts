import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("project_tech_stack_relation").del();
    await knex("project_tech_stack_relation").insert([
        {
            project_id: 1,
            tech_stack_id: 2,
        },
        {
            project_id: 1,
            tech_stack_id: 3,
        },
        {
            project_id: 1,
            tech_stack_id: 5,
        },
        {
            project_id: 2,
            tech_stack_id: 2,
        },
        {
            project_id: 2,
            tech_stack_id: 3,
        },
        {
            project_id: 2,
            tech_stack_id: 5,
        },
        {
            project_id: 3,
            tech_stack_id: 1,
        },
        {
            project_id: 3,
            tech_stack_id: 2,
        },
        {
            project_id: 3,
            tech_stack_id: 3,
        },
        {
            project_id: 3,
            tech_stack_id: 7,
        },
        {
            project_id: 3,
            tech_stack_id: 8,
        },
        {
            project_id: 4,
            tech_stack_id: 1,
        },
        {
            project_id: 4,
            tech_stack_id: 2,
        },
        {
            project_id: 4,
            tech_stack_id: 3,
        },
        {
            project_id: 4,
            tech_stack_id: 7,
        },
        {
            project_id: 4,
            tech_stack_id: 8,
        },
        {
            project_id: 5,
            tech_stack_id: 1,
        },
        {
            project_id: 5,
            tech_stack_id: 2,
        },
        {
            project_id: 5,
            tech_stack_id: 3,
        },
        {
            project_id: 5,
            tech_stack_id: 4,
        },
        {
            project_id: 5,
            tech_stack_id: 7,
        },
        {
            project_id: 5,
            tech_stack_id: 8,
        },
        {
            project_id: 6,
            tech_stack_id: 7,
        },
        {
            project_id: 6,
            tech_stack_id: 9,
        },
        {
            project_id: 7,
            tech_stack_id: 1,
        },
        {
            project_id: 7,
            tech_stack_id: 6,
        },
        {
            project_id: 7,
            tech_stack_id: 7,
        },
        {
            project_id: 7,
            tech_stack_id: 8,
        },
        {
            project_id: 7,
            tech_stack_id: 10,
        },
        {
            project_id: 7,
            tech_stack_id: 11,
        },
    ])
}