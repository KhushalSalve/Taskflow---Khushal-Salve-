import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, MoreHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

type TaskStatus = 'todo' | 'in-progress' | 'done';

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

const MOCK_TASKS: Task[] = [
  { id: '1', title: 'Design system audit', status: 'todo' },
  { id: '2', title: 'Wireframe dashboard', status: 'in-progress' },
  { id: '3', title: 'Setup repository', status: 'done' },
  { id: '4', title: 'Define color palette', status: 'done' },
];

export function TaskBoard() {
  const { id } = useParams();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simulate API fetch
    const timer = setTimeout(() => {
      setTasks(MOCK_TASKS);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [id]);

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      title: newTaskTitle,
      status: 'todo',
    };

    // Optimistic UI update
    setTasks([...tasks, newTask]);
    setNewTaskTitle('');
    setIsModalOpen(false);
  };

  const moveTask = (taskId: string, newStatus: TaskStatus) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, status: newStatus } : t));
  };

  const columns: { id: TaskStatus; title: string }[] = [
    { id: 'todo', title: 'To Do' },
    { id: 'in-progress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
  ];

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-6 sm:px-6 lg:px-8 dark:border-zinc-800">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Project {id}</h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">Manage tasks for this workspace.</p>
        </div>
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Task
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create Task</DialogTitle>
              <DialogDescription>
                Add a new task to your workspace. Press enter to save.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateTask} className="mt-4 space-y-4">
              <Input
                autoFocus
                placeholder="Task title..."
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
              />
              <div className="flex justify-end">
                <Button type="submit">Create</Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 overflow-x-auto p-4 sm:p-6 lg:p-8">
        <div className="flex h-full gap-6 min-w-max">
          {columns.map((col) => {
            const columnTasks = tasks.filter((t) => t.status === col.id);
            return (
              <div key={col.id} className="flex w-80 flex-col">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold text-zinc-900 dark:text-zinc-50">{col.title}</h3>
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-zinc-100 text-xs font-medium text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400">
                    {isLoading ? '-' : columnTasks.length}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-3">
                  {isLoading ? (
                    // Loading Skeletons
                    Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="h-24 animate-pulse border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50" />
                    ))
                  ) : columnTasks.length === 0 ? (
                    // Empty State
                    <div className="flex h-32 items-center justify-center border border-dashed border-zinc-200 bg-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-900/20">
                      <span className="text-sm text-zinc-500 dark:text-zinc-400">No tasks</span>
                    </div>
                  ) : (
                    // Task Cards
                    columnTasks.map((task) => (
                      <div
                        key={task.id}
                        className="group relative border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-black"
                      >
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">{task.title}</p>
                        <div className="mt-4 flex items-center justify-between opacity-0 transition-opacity group-hover:opacity-100">
                          <div className="flex space-x-2">
                            {col.id !== 'todo' && (
                              <button
                                onClick={() => moveTask(task.id, col.id === 'done' ? 'in-progress' : 'todo')}
                                className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                              >
                                ← Move
                              </button>
                            )}
                            {col.id !== 'done' && (
                              <button
                                onClick={() => moveTask(task.id, col.id === 'todo' ? 'in-progress' : 'done')}
                                className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50"
                              >
                                Move →
                              </button>
                            )}
                          </div>
                          <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
