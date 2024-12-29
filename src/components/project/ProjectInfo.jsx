import { FiTag, FiAnchor } from 'react-icons/fi';
const ProjectInfo = ({ project }) => {
  const paraBreak = project?.description?.indexOf('{break}');

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-8">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project technologies */}
        <div className="mb-7">
          <div className="">
            <div className="flex items-center">
              <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
              <span className="font-general-regular ml-4 leading-none text-primary-light flex gap-2">
                {project?.tags?.map((t,i) => <p key={i} className="bg-violet-700 rounded p-2">{t}</p>)}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <FiAnchor className="text-lg text-ternary-dark dark:text-ternary-light" />
            <a href={project?.link} target="_blank" rel="noreferrer noopener">
              <p className="font-general-regular text-primary-dark dark:text-ternary-light m-4">
                <u>{project?.link}</u>
              </p>
            </a>
          </div>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {project?.technologies?.join(', ')}
          </p>
        </div>
        <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light py-8">
          {project?.description}
        </p>
        {/* Single project client details */}
{/*
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            Key Features
          </p>
          <ul className="list-disc">
            {project?.features?.map(f => (
              <li
                key={f}
                className="font-general-regular text-ternary-dark dark:text-ternary-light">
                <span>{`${f}`}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
*/}
      {/*  Single project right section */}
{/*
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          About App
        </p>
        <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
          {project?.description?.slice(
            0,
            paraBreak > -1 ? paraBreak : undefined,
          )}
        </p>
        {paraBreak > -1 && (
          <p className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light">
            {project?.description?.slice(
              paraBreak + 7,
              project?.description?.length - 1,
            )}
          </p>
        )}
      </div>
    */}
      </div>
    </div>
  );
};

export default ProjectInfo;
