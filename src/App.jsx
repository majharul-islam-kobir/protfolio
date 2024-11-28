import  Navbar  from "../src/component/Navbar"
import Contuct from "./component/Contuct"
import Experience from "./component/Experience"
import Hero from "./component/Hero"
import HeroTwo from "./component/HeroTwo"
import Project from "./component/Project"
import Technology from "./component/Technology"
// import HeroTwo from "./component/HeroTwo"



function App() {

  return (
   
    <div className=" bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
    <div className="w-11/12  mx-auto mt-2">

   
        <Navbar />
        <Hero />
        <HeroTwo />
        <Technology />
        <Experience />
        <Project />
        <Contuct />
     </div>
     </div>
 
 
    
  )
}

export default App