import ProjectGallery from './ProjectGallery'
import ProjectHeader from './ProjectHeader'
import ProjectInfo from './ProjectInfo'

const SITE_URL = "http://localhost:3000"

const getProject = async (id) => {
  const response = await fetch(`${SITE_URL}/api/projects/${id}`, { method: 'GET' })

  return await response.json()
};

const Project = async ({ id }) => {
  const project = await getProject(id)

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </div>
  )
}

export default Project
