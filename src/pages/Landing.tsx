import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { LayoutDashboard, CheckSquare, RefreshCcw } from 'lucide-react';

export function Landing() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-black">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-extrabold tracking-tighter text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl dark:text-zinc-50">
              Manage work. <br className="hidden sm:block" />
              <span className="text-zinc-400 dark:text-zinc-600">Without the noise.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-500 md:text-xl dark:text-zinc-400">
              The ultra-minimalist project management tool designed for teams who value focus, speed, and clarity above all else.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" className="w-full sm:w-auto text-base" asChild>
                <Link to="/register">Start for free</Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base" asChild>
                <a href="#features">View Documentation</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="border-t border-zinc-200 bg-zinc-50 px-4 py-24 dark:border-zinc-800 dark:bg-zinc-950 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-black">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900">
                  <LayoutDashboard className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Project Workspaces
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Organize your initiatives into pristine, distraction-free workspaces. Everything you need, nothing you don't.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-black">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900">
                  <CheckSquare className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Frictionless Tasks
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Create, assign, and complete tasks with keyboard-first modal interfaces. Stay in the flow.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-black">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-md bg-zinc-100 dark:bg-zinc-900">
                  <RefreshCcw className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Real-time Sync
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400">
                  Optimistic UI updates and WebSockets ensure your team always sees the latest state instantly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Bottom CTA */}
        <section className="bg-zinc-900 px-4 py-24 dark:bg-zinc-50 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white dark:text-black sm:text-4xl md:text-5xl">
              Ready to simplify your workflow?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400 dark:text-zinc-600">
              Join thousands of teams who have already ditched the clutter.
            </p>
            <form className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="h-12 border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500 focus-visible:ring-zinc-400 dark:border-zinc-300 dark:bg-white dark:text-black dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-600"
                required
              />
              <Button type="submit" size="lg" className="h-12 bg-white text-black hover:bg-zinc-200 dark:bg-black dark:text-white dark:hover:bg-zinc-800">
                Get Started
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-200 py-8 text-center dark:border-zinc-800">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Taskflow. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
