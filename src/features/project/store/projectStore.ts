import { create } from 'zustand';
import { mockProjects } from '../../../moks/projects.mock';
import type { Project } from '../../../types';

type projectStore = {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
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
  loading: false,
  setLoading: loading => set({ loading }),
  error: undefined,
}));
