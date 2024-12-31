import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("projects").del();

    await knex("projects").insert([
        {
            project_name:"game of life",
            description:"Conway's Game of Life",
            full_description:"The Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
            github_link:"https://github.com/shumkwanho/c31-wefproj-shum",
        },

        {
            project_name:"Chinese Chess",
            description:"A simple Chinese Chess",
            full_description:"Chinese Chess, also known as Xiangqi, is a popular board game played in China and other parts of Asia. ",
            github_link:"https://github.com/shumkwanho/chiness-chess",
        },
        {
            project_name:"and then",
            description:"a project management system",
            full_description:"And Then is a comprehensive project management system designed to help teams collaborate and manage tasks efficiently. ",
            github_link:"https://github.com/shumkwanho/Group-Project-Project-Management-",
        },
        {
            project_name:"gen a book",
            description:"an AI storybook generator",
            full_description:"Gen A Book is an AI-powered storybook generator that allows users to create and share their own stories.",
            github_link:"https://github.com/shumkwanho/Group-Project-Story-Book-",
        },
        {
            project_name:"monster parent",
            description:"A Pricing and rating platform",
            full_description:"Monster parent is a responsive Java/JavaScript project allowing users to upload, compare pricing, rate, and reserve children's education services built and deployed a functional website with 10+ distinct features",
            deployed_link:"https://web.hkeduprice.online/",
        },
        {
            project_name:"JobsDB Scraping Program",
            description:"A Web Scraping programme",
            full_description:"This program automates the process of collecting job listings from JobsDB, filters them based on predefined criteria, and stores the data in a structured format in Excel.",
            github_link:"https://github.com/shumkwanho1/Auto-Job-Finder",
        },
        {
            project_name:"my personal website",
            description:"My Personal Website",
            full_description:"This site showcases my personal information and finished projects. It is built using a modern tech stack including Next.js, React.js, Tailwind CSS, PocketBase, and CSS animations",
            github_link:"https://github.com/shumkwanho1/My-Personal-Website",
            deployed_link:"personal.shumkh.website",
        },

    ])
};
