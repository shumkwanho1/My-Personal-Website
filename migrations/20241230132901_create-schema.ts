import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("projects",(table)=>{
        table.increments();
        table.string("project_name").notNullable()
        table.string("description").nullable()
        table.text("full_description").nullable()
        table.string("github_link").nullable()
        table.string("deployed_link").nullable()
        table.timestamps(false,true)
    })

    await knex.schema.createTable("features",(table)=>{
        table.increments()
        table.string("feature").notNullable()
        table.string("description").notNullable()
        table.bigint("project_id").notNullable()
        table.foreign("project_id").references("projects.id")
        table.timestamps(false,true)       
    })

    await knex.schema.createTable("tech_stacks",(table)=>{
        table.increments()
        table.string("name").notNullable()
        table.string("icon").notNullable()
        table.timestamps(false,true)       
    })
    
    await knex.schema.createTable("photos",(table)=>{
        table.increments()
        table.string("url").notNullable()
        table.boolean("is_main_photo").defaultTo(false)
        table.bigint("project_id").notNullable()
        table.foreign("project_id").references("projects.id")
        table.timestamps(false,true)    
    })

}



export async function down(knex: Knex): Promise<void> {

    await knex.schema.dropTableIfExists("photos")
    await knex.schema.dropTableIfExists("tech_stacks")
    await knex.schema.dropTableIfExists("features")
    await knex.schema.dropTableIfExists("projects")
}

