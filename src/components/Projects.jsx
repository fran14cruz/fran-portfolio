import ProjectCard from './ProjectCard';
import ScrollReveal from './ScrollReveal';
import facerecognition from '/face-recognition.png';
import randomfriends from '/random-friends.png';

const projectsData = [
  {
    image: randomfriends,
    title: "Plant Friends",
    description: "Plant Friends is a React application that fetches user data from a placeholder API and displays it alongside randomly generated images. This app is styled using Tachyons, offering a clean, minimalistic design. Currently, random images are generated from RoboHash, but future updates will include a real plant image API to bring even more life to the application.",
    technologies: ["React", "Hooks", "Redux"],
    repo: "https://github.com/fran14cruz/plant-friends",
    url: "https://plant-friends.vercel.app/"
  },
  {
    image: facerecognition,
    title: "Face Recoginition Mind",
    description: "Face Recognition Mind is a Full-Stack application that allows user authentication, registration, and face recognition on images. The application utilizes Clarifai's API to perform face detection on user-provided images, drawing bounding boxes around detected faces.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL"],
    repo: "https://github.com/fran14cruz/face-recognition-mind",
    url: "https://face-recognition-mind.vercel.app/"
  }
]

const Projects = () => {
  return (
    <div id="projects" className='flex min-h-screen w-full flex-col items-center
    justify-center gap-16 p-4 md:px-14 md:py-24 md:gap-32'>
      <ScrollReveal>
        <h1 className='text-4xl font-light text-white md:text-5xl'>
          My Projects
        </h1>
      </ScrollReveal>

      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {
          projectsData.map((project, index) => (
            <ProjectCard project={project} key={index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects;