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
      <p id='projects'></p>
      <h1>Projects</h1>
      <br />
      <p>Uma pequena parcela de projetos realizados por mim durante o curso da Trybe <br />
        e alguns realizados por fora, portifolio ainda em construcao, tenho muitos projetos <br />
        ja prontos tanto de front-end quanto de back-end, porem que
        estou fazendo ajustes para postar aqui ;) <br /> <br />
      </p>
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