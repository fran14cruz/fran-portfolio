import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (<>
    {/* <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
    <div className="fixed -z-10 min-h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
    <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
      <Navbar />
      <Home />
      <Tech />
      <Projects />
      <Contact />
    </main>
  </>)
}

export default App
