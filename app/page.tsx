import WelcomingBanner from './components/WelcomingBanner';
import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { projectService } from './utils/ProjectService';
import { projectType } from './utils/type';
export default async function Home() {

  const data:projectType[] = await projectService.getProject() 

  return (
    <div>
      <Nav />
      <Intro />
      <Projects projectData={data} />
      <About />
      <div className='w-full px-[10vw] pt-12 pb-20 flex flex-col md:flex-row md:justify-between ' id="education & experience">
        <Education />
        <Experience />
      </div>

      <Skills />
      <WelcomingBanner/>
    </div>

  );
}
