
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import pbClient from "./utils/pocketbase"


export default async function Home() {

  const data = await pbClient.getProjects()

  
  return (
    <div>
      <Nav />
      <Intro />
      <Projects projectData={data} />
      <About />
      <div className='flex w-full justify-around px-40 pt-12 pb-20' id="education & experience">
        <Education />
        <Experience />
      </div>

      <Skills />

    </div>

  );
}
