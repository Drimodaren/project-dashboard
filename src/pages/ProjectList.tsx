
import { useEffect } from "react";
import { useProjectStore } from "../store/projectStore"


function ProjectList() {
const projects =useProjectStore((state) => state.projects);
const fetchProjects = useProjectStore((state) => state.fetchProjects);
const loading = useProjectStore((state) => state.loading);

useEffect(() => {
fetchProjects();
}, []);

  return (
    <div>
        {loading ? <p>Loading projects...</p>:
        projects.map((project) => (
            <div key={project.id} className="project-item">
                <h2>{project.name}</h2>
                <p>{project.createdAt}</p>
            </div>
        ))}

    </div>
  )
}

export default ProjectList