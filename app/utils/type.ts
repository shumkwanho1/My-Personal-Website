export type photoType = {
    url: string,
    is_main_photo: boolean,
    id: number,
}

export type featureType = {
    id: number,
    feature: string,
    description: string
}

export type techStackType = {
    id: number,
    icon: string,
    name: string
}

export type projectType = {
    id: number,
    description: string | null,
    full_description: string | null,
    github_link: string | null,
    project_name: string,
    deployed_link: string | null,
    photos?: photoType[],
    features?: featureType[],
    tech_stacks?: techStackType[]
}