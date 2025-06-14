import { create } from 'zustand';
import { mockProjects } from '../../../moks/projects.mock';
import type { Project } from '../../../types';

type projectStore = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  addProject?: (project: Project) => void;
  removeProject?: (projectId: string) => void;
  updateProject?: (project: Project) => void;
  editProject?: (project: Project) => void;
  getProject?: (projectId: string) => Project | undefined;
  fetchProjects: () => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  error?: string;
};

export const useProjectStore = create<projectStore>(set => ({
  projects: [],

  fetchProjects: () => {
    set({ loading: true });
    setTimeout(() => {
      set({ projects: mockProjects, loading: false });
    }, 1000);
    set({ projects: mockProjects });
  },
  setProjects: projects => set({ projects }),
  addProject: project => set(state => ({ projects: [...state.projects, project] })),
  loading: false,
  setLoading: loading => set({ loading }),
  error: undefined,
}));
