import { useEffect } from 'react';
import Button from '../../../../components/Button/Button';
import { useProjectStore } from '../../store/projectStore';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectList() {
  const projects = useProjectStore(state => state.projects);
  const fetchProjects = useProjectStore(state => state.fetchProjects);
  const loading = useProjectStore(state => state.loading);

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading projects...</p>
      ) : (
        projects.map(project => (
          <div key={project.id} className="project-item">
            <ProjectCard project={project} />
          </div>
        ))
      )}
      <Button variant="secondary">Click me</Button>
    </div>
  );
}

export default ProjectList;
