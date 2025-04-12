import ScrollReveal from './ScrollReveal';
/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      {/* <img src={project.image} alt={project.title} className="w-full cursor-pointer rounded-lg
      transition-all duration-300 hover:scale-105 md:w-[400px]"/> */}
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full cursor-pointer rounded-lg
          transition-all duration-300 hover:scale-105 md:w-[400px]"
        />
      </a>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <a className="text-xl font-semibold transition-all duration-300
            hover:-translate-y-2 hover:shadow-xl underline underline-offset-4"
            href={project.url} target="_blank">{project.title}
          </a>
          <p className="text-gray-400">{project.description}
            Visit the repo&nbsp;
            <a className="text-white underline underline-offset-2"
              href={project.repo}
              target="_blank">here</a>.
          </p>
          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-gray-700/75 p-3">
                  {tech}
                </span>
              ))
            }
          </div>
          
        </div>
      </div>
    </div>
    </ScrollReveal>
  )
}

export default ProjectCard