import './Projects.css';

function Projects () {
  const projects = [
    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript','HTML', 'CSS', 'JavaScript','HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
      
    },
    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
      
    },
    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
      
    },
    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
    },
    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
    },    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
    },
    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
    },    {
      name: 'project1',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl euismod nisi. Nullam euismod, nisi vel consectetur euismod, nisi nisl aliquet nisi, euismod euismod nisi nisl e',
      link: 'https://github.com/dvpatrick',
    },
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects_container">
      {
        projects.map((project) => {
          return (
            <div className="project">
              <div className="project-image">
                <img src={project.image} alt="project" />
              </div>
              <div className="project-info">
                <h2>{project.name}</h2>
                {/* <p>{project.description}</p> */}
                <p>Tecnologias utilizadas: {project.tecnologias.join(', ')}</p>
                <a href={project.link}>Ver mais</a>
              </div>
            </div>
          );
        })
      }
      </div>
    </section>
  )
};

export default Projects;