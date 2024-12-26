type skillBarProps = {
    proficiency: number
}

export default function SkillBar(skillbarProps: skillBarProps) {
    let { proficiency } = skillbarProps
    proficiency /= 10

    let skillbar = []
    for (let i = 0; i < 10; i++) {
        if (i < proficiency) {
            skillbar.push(<div className="w-1/12 h-3 bg-[#5569DC] ml-0.5 -skew-x-12" ></div>)
            continue
        }
        skillbar.push(<div className="w-1/12 h-3 bg-indigo-200 ml-0.5 -skew-x-12"></div>)
    }

    return <>{skillbar}</>
}