import { FiTag } from 'react-icons/fi';
import projects from '../../../projects';
import ProjectGallery from '../../../components/project/ProjectGallery';
import ProjectInfo from '../../../components/project/ProjectInfo';

const Project = async ({ params }) => {
  const { id } = params;
  const project = projects[id];

  return (
    <div className="container mx-auto">
      <div>
        <p className="font-general-semibold text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
          {project?.title}
        </p>
        {/*
        <div className="flex">
          <div className="flex items-center">
            <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-4 leading-none text-primary-light flex gap-2">
              {project?.tags?.map((t) => <p className="bg-violet-700 rounded p-2">{t}</p>)}
            </span>
          </div>
        </div>
        */}
      </div>
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </div>
  );
};

export default Project;
