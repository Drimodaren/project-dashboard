import { useEffect, useState } from 'react';
import Button from '../../../../components/Button/Button';
import Modal from '../../../../components/Modal/Modal';
import type { Project } from '../../../../types';
import { useProjectStore } from '../../store/projectStore';
import AddProject from '../AddProject/AddProject';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectList() {
  const projects = useProjectStore(state => state.projects);
  const fetchProjects = useProjectStore(state => state.fetchProjects);
  const addProject = useProjectStore(state => state.addProject);
  const loading = useProjectStore(state => state.loading);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);
  const handleConfirm = (project: Project) => {
    // addProject(project);
  };
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
      <Button onClick={() => setIsOpen(true)}>add Project</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        children={<AddProject />}
        onConfirm={() => {}}
      />
    </div>
  );
}

export default ProjectList;
