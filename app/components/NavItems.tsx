'use client'

type navItemProps = {
    name: string,
    index:number
}
export default function NavItems(navItemProps: navItemProps) {

    const scroll: (tagName: string) => void = (tagName) => {
        document.getElementById(tagName)?.scrollIntoView()
    }
    
    return (
        <>
        <div className="mx-2 capitalize font-charm hover:cursor-pointer pr-8" key={navItemProps.index} onClick={() => scroll(navItemProps.name)}>{navItemProps.name}</div>
        </>
    )
}