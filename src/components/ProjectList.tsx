interface projectInfo {
  title: string;
  description: React.ReactNode;
  svg: React.ReactNode;
  link: string;
}

interface ProjectProps {
  projectInfo: projectInfo[];
}

function ProjectList(projects: ProjectProps) {
  return (
    <>
      <div className="mx-auto max-w-3xl h-auto pt-40">
        {projects.projectInfo.map((project, i) => 
        <>
          {i != 0 && <hr className="bg-header rounded-sm w-full h-0.5 border-0 place-self-center"></hr>}
          <div className="md:flex py-10">
            {project.svg}
            <div className="pl-8 max-w-[40rem]">
              <div className="font-almarai text-project text-4xl font-extrabold pb-4">{project.title}</div>
              {project.description}
            </div>
          </div>
          <div className="pb-12 md:pl-40 max-w-80 md:mx-0 mx-auto md:text-left text-center">
            {
              project.link != "disabled" ?
                <a
                  type="button"
                  className="bg-btnbg text-btntxt rounded-full p-3 font-bold font-inter hover:bg-hover-btnbg hover:text-hover-btntxt"
                  target="_blank"
                  href={project.link}>
                  {project.title}
                </a> : 
                <div>
                  <a
                    type="button"
                    className="grayscale-100 bg-btnbg text-btntxt rounded-full p-3 font-bold font-inter hover:bg-hover-btnbg hover:text-hover-btntxt"
                  >
                    {project.title}
                  </a>
                  <div className="text-xs p-3 italic text-gray-400">pending official release</div>
                </div>
            }
          </div>
        </>)}
      </div>
    </>
  );
}

export default ProjectList;