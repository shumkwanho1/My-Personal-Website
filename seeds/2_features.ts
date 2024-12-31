import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("features").del();

    // Inserts seed entries
    await knex("features").insert([
        {
            feature: "Grid Display",
            description: "A grid of cells that can be alive or dead.",
            project_id: 1
        },
        {
            feature: "Game Rules",
            description: "Implementation of the four rules of the Game of Life.",
            project_id: 1
        },
        {
            feature: "Interactivity",
            description: "Users can click on cells to toggle their state (alive/dead).",
            project_id: 1
        },
        {
            feature: "Animation",
            description: "The game evolves automatically, showing the changes in the grid over time.",
            project_id: 1
        },
        {
            feature: "Color Theme",
            description: "The UI can change color themes for a customized look.",
            project_id: 1
        },
        {
            feature: "Specific Patterns",
            description: "Predefined patterns can be inserted into the game.",
            project_id: 1
        },
        {
            feature: "Evolution Speed",
            description: "The speed of the game's evolution can be adjusted.",
            project_id: 1
        },
        {
            feature: "Evolution Condition",
            description: "The conditions for the game's evolution can be changed.",
            project_id: 1
        },
        {
            feature: "Game Board",
            description: " A fully functional Chinese Chess board with all the pieces.",
            project_id: 2
        },
        {
            feature: "Game Rules",
            description: "Implementation of the standard rules of Chinese Chess.",
            project_id: 2
        },
        {
            feature: "Player Turns",
            description: "Alternating turns for two players.",
            project_id: 2
        },
        {
            feature: "Move Validation",
            description: "Validation of legal moves according to the rules of the game.",
            project_id: 2
        },
        {
            feature: "Win/Lose Conditions",
            description: "Detection of win/lose conditions and display of the game result.",
            project_id: 2
        },
        {
            feature: "Gantt Chart",
            description: "Visual timeline for task scheduling",
            project_id: 3
        },
        {
            feature: "Live Search",
            description: "Real-time result for quick access",
            project_id: 3
        },
        {
            feature: "Chat Room",
            description: "Instant communication for team collaboration",
            project_id: 3
        },
        {
            feature: "AI Story and Character Generation",
            description: "Automated content creation by AI",
            project_id: 4
        },
        {
            feature: "Comment and Rating",
            description: "User feedback and evaluation system",
            project_id: 4
        },
        {
            feature: "Sorting and Filtering",
            description: "Organize data for easy navigation",
            project_id: 4
        },
        {
            feature: "Payment Gateway",
            description: "Secure platform for online transactions",
            project_id: 4
        },
        {
            feature: "Storybook Reader",
            description: "Interactive platform for reading stories",
            project_id: 4
        },
        {
            feature: "Mobile Responsive",
            description: "Optimize for use on all devices",
            project_id: 5
        },
        {
            feature: "Admin Panel",
            description: "Centralized control for site management",
            project_id: 5
        },
        {
            feature: "Data Collection",
            description: "Automatically scrapes job listings from JobsDB using Puppeteer.",
            project_id: 6
        },
        {
            feature: "Data Filtering",
            description: "Filters the collected job data based on predefined criteria.",
            project_id: 6
        },
        {
            feature: "Data Storage",
            description: "Stores the filtered job data in Excel format using the xlsx library.",
            project_id: 6
        },
        {
            feature: "Portfolios",
            description: "Showcase my projects with descriptions, screenshots, and links to live demos or repositories.",
            project_id: 7
        },
        {
            feature: "Next.js and PocketBase",
            description: "Chose Next.js  and PocketBase for my website . First-time usage and learning experience.",
            project_id: 7
        },
        {
            feature: "Caddy as Reverse Proxy",
            description: "Used Caddy for HTTPS and domain management. Includes configuration details.",
            project_id: 7
        },
        {
            feature: "AWS EC2 Deployment",
            description: "Deployed website on AWS EC2 with specific configurations and optimizations.",
            project_id: 7
        },
        {
            feature: "Docker for PocketBase",
            description: "Containerized PocketBase with Docker. Includes Dockerfile configuration and deployment strategies.",
            project_id: 7
        },
    ]);


};
