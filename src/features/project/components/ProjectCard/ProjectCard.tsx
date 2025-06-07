import type { Project } from '../../../../types';

interface ProjectCardProps {
  project: Project;
}
function ProjectCard({ project }: ProjectCardProps) {
  const { name, createdAt, updatedAt } = project;
  return (
    <div>
      <h2>{name}</h2>
      <p>{createdAt}</p>
      <p>{updatedAt} </p>
    </div>
  );
}

export default ProjectCard;
