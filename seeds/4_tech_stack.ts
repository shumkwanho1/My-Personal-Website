import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {

    await knex("tech_stacks").del();
    await knex("tech_stacks").insert([
        {
            name:"TypeScript",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/100x100_typescript_cr5ggey5z6_dyprwolcgg.png",
        },
        {
            name:"CSS",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/css_t0upml5loe_mr82l3upu4.png",
        },
        {
            name:"HTML",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/html_qblpv31kj2_qa3fbiemwi.png",
        },
        {
            name:"JAVA",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/java_toxu02yv03_abywijczo4.png",
        },
        {
            name:"JavaScript",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/javascript1_xk5vj2ot33_438menvvm8.png",
        },
        {
            name:"NextJS",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/next_js_oo6cxgsie0_w0okjtgnv7.jpg",
        },
        {
            name:"nodeJS",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/node_js_oqgvdh2hvu_93mjj7tkdg.png",
        },
        {
            name:"postgreSQL",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/postgresql_trix94arh3_3be69cyi2g.png",
        },
        {
            name:"puppeteer",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/puppeteer_bk5vo486aj_bc32u5borh.png",
        },
        {
            name:"ReactJS",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/react_xv1cr5sp4x_r8hytwws8k.png",
        },
        {
            name:"TailWind",
            icon:"https://s3.ap-southeast-1.amazonaws.com/cdn.shumkh.com/tech+stack+icon/tailwind_ldluidov9j_erpoyy6epn.png",
        },
    ])
}