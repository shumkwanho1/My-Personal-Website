import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("projects").del();
    await knex("features").del();
    await knex("tech_stacks").del();
    await knex("project_tech_stack_relation").del();

};
