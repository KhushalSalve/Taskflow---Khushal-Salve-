import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Plus } from 'lucide-react';

const MOCK_PROJECTS = [
  { id: '1', name: 'Website Redesign', description: 'Overhaul the marketing site.', tasksCount: 12 },
  { id: '2', name: 'Mobile App V2', description: 'React Native migration.', tasksCount: 34 },
  { id: '3', name: 'Q3 Marketing', description: 'Campaigns and assets.', tasksCount: 8 },
];

export function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Projects</h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">Manage your workspaces and initiatives.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROJECTS.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group flex flex-col justify-between border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-900 dark:border-zinc-800 dark:bg-black dark:hover:border-zinc-50"
          >
            <div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{project.name}</h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{project.description}</p>
            </div>
            <div className="mt-6 flex items-center text-sm text-zinc-500 dark:text-zinc-400">
              <span className="font-medium text-zinc-900 dark:text-zinc-50">{project.tasksCount}</span>
              <span className="ml-1">active tasks</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
