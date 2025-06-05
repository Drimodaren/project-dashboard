import type { Project } from '../types/index';

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Flagship Store Paris',
    createdAt: '2024-05-01T10:00:00Z',
    updatedAt: '2024-05-02T10:00:00Z',
    image: 'https://via.placeholder.com/150x100?text=Paris',
  },
  {
    id: '2',
    name: 'Airport Stand Berlin',
    createdAt: '2024-04-25T14:30:00Z',
    updatedAt: '2024-04-30T16:00:00Z',
    image: 'https://via.placeholder.com/150x100?text=Berlin',
  },
  {
    id: '3',
    name: 'Pop-up Tokyo',
    createdAt: '2024-03-20T08:15:00Z',
    updatedAt: '2024-03-21T09:45:00Z',
    image: 'https://via.placeholder.com/150x100?text=Tokyo',
  },
    {
        id: '4',
        name: 'Exhibition New York',
        createdAt: '2024-02-10T12:00:00Z',
        updatedAt: '2024-02-11T13:30:00Z',
        image: 'https://via.placeholder.com/150x100?text=New+York',
    },
    {
        id: '5',
        name: 'Festival Sydney',
        createdAt: '2024-01-05T09:00:00Z',
        updatedAt: '2024-01-06T10:30:00Z',
        image: 'https://via.placeholder.com/150x100?text=Sydney',
    },
];