'use client'

import { Tangerine } from 'next/font/google'
import Arrow from "./Arrow";
import { useEffect, useState } from 'react';
import SkillBar from './Skillbar';
type language = { name: string, proficiency: number }

type skills = {
    language: language[],
    framework: language[],
    database: language[],
    tools: language[]
}


const tangerine = Tangerine({ weight: "400", subsets: ["latin"] })
export default function Skills() {

    const mySkills: skills = {

        language: [
            { name: "HTML", proficiency: 80 },
            { name: "CSS", proficiency: 80 },
            { name: "TypeScript", proficiency: 80 },
            { name: "JAVA", proficiency: 60 },
            { name: "Python", proficiency: 50 },
            { name: "NodeJS", proficiency: 80 }
        ]
        ,

        framework: [
            { name: "Express", proficiency: 80 },
            { name: "Spring Boot", proficiency: 60 },
            { name: "Hibernate", proficiency: 50 },
            { name: "ReactJS", proficiency: 70 },
            { name: "openCV", proficiency: 50 },]
        ,

        database: [
            { name: "PostgreSQL", proficiency: 70 },
            { name: "SQLite", proficiency: 60 },
        ]
        ,

        tools: [
            { name: "VSCode", proficiency: 90 },
            { name: "IntelliJ IDEA", proficiency: 80 },
            { name: "Git", proficiency: 70 },
            { name: "Vim", proficiency: 50 },
            { name: "Insomnia", proficiency: 80 },]
    }


    const [y, setY] = useState(0)
    const [showSkillAnimation, setShowwSkillAnimation] = useState(false)

    const handleScroll = () => {
        setY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        if (y > 1800) {
            setShowwSkillAnimation(true)
        }
        return () => window.removeEventListener("scroll", handleScroll)
    }, [y])




    return (
        <>
            <section className="w-full bg-[#EFF1FB] px-40 pt-12 pb-20" id="skills and languages">
                <div className="font-charm font-medium text-5xl text-[#5569DC] pt-3">Skills & Languages</div>
                <div className="font-sans text-[#5569DC] text-xl mt-5 font-thin tracking-wider">WHAT I BRING TO TABLE</div>

                <div className="mt-16 flex h-60">
                    <div className="flex-1">
                        <div className={`mb-4 ${tangerine.className} text-5xl`}>Languages</div>
                        {mySkills.language.map((elem, index) => {
                            return (
                                <div className={`flex items-center pl-3 pb-2  ${showSkillAnimation ? 'skillbar' : ''}`} key={index}>
                                    <div className="flex-1">{elem.name}</div>
                                    <div className={`[flex:2] h-1.5 flex items-center `}>
                                        <SkillBar proficiency={elem.proficiency} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex-1 ml-8 h-40">
                        <div className={`mb-4 ${tangerine.className} text-5xl`}>Framework and Library</div>

                        {mySkills.framework.map((elem, index) => {
                            return (
                                <div className={`flex items-center pl-3 pb-2 ${showSkillAnimation ? 'skillbar' : ''}`} key={index}>
                                    <div className="flex-1">{elem.name}</div>
                                    <div className={`[flex:2] h-1.5 flex items-center`}>
                                        <SkillBar proficiency={elem.proficiency} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="mt-16 flex">
                    <div className="flex-1">
                        <div className={`mb-4 ${tangerine.className} text-5xl`}>Database</div>

                        {mySkills.database.map((elem, index) => {
                            return (
                                <div className={`flex items-center pl-3 pb-2 ${showSkillAnimation ? 'skillbar' : ''}`} key={index}>
                                    <div className="flex-1">{elem.name}</div>
                                    <div className={`[flex:2] h-1.5 flex items-center`}>
                                        <SkillBar proficiency={elem.proficiency} />
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                    <div className="flex-1 ml-8">
                        <div className={`mb-4 ${tangerine.className} text-5xl`}>Other Tools</div>
                        {mySkills.tools.map((elem, index) => {
                            return (
                                <div className={`flex items-center pl-3 pb-2 ${showSkillAnimation? 'skillbar' : ''}`} key={index}>
                                    <div className="flex-1">{elem.name}</div>
                                    <div className={`[flex:2] h-1.5 flex items-center`}>
                                        <SkillBar proficiency={elem.proficiency} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            {y > 600? <Arrow /> : ""}
            
        </>
    )
}


