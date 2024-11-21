import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (<>
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Navbar />
      <Tech />
      <Projects />
      <Contact />
      <Hero />
    </main>
  </>)
}

export default App
