import Link from 'next/link';

import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
import Projects from '../components/projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto">
        <AppBanner />
        <Projects />
        
        {/*   
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="/projects"
            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
            aria-label="More Projects">              
            <Button title="More Projects" loading={undefined} />
          </Link>
        </div>
        */}
      </div>
    </main>
  );
}
