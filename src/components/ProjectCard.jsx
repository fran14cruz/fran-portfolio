import ScrollReveal from './ScrollReveal';
/* eslint-disable react/prop-types */
const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
      <img src={project.image} alt="" className="w-2/5 cursor-pointer rounded-2xl
      transition-all duration-300 hover:scale-105 md:w-[300px]"/>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <a className="text-xl font-semibold" href={project.url}>{project.title}</a>
          <p className="text-gray-400">{project.description}</p>
          {/* <div className="text-gray-400">{project.repository}</div> */}
          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
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