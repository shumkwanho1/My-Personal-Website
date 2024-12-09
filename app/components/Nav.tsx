import NavItems from "./NavItems"

export default function Nav() {
    const item = ['about', 'projects', 'education & experience', 'skills and languages']

    return (
        <nav className="bg-indigo-500 h-20 hidden pl-10 text-lg items-center text-white sm:flex">
            {
                item.map((item, index) => <NavItems name={item} index={index} />)
            }
        </nav>
    )
}
