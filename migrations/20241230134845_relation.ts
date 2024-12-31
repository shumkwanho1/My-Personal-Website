import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  
    
    await knex.schema.createTable("project_tech_stack_relation",(table)=>{
        table.increments()
        table.bigint("tech_stack_id").notNullable()
        table.bigint("project_id").notNullable()
        table.foreign("tech_stack_id").references("tech_stacks.id")
        table.foreign("project_id").references("projects.id")
        table.timestamps(false,true)       
    })

  
}


export async function down(knex: Knex): Promise<void> {
    
    await knex.schema.dropTableIfExists("project_tech_stack_relation")

}

