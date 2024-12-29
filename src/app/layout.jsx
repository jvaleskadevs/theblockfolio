//import { Inter } from "next/font/google";
import './main.css';
import './globals.css';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import AppFooter from '../components/shared/AppFooter';
import AppHeader from '../components/shared/AppHeader';
import UseScrollToTop from '../hooks/useScrollToTop';

//const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J. Valeska Portfolio",
  description: "The portfolio of J. Valeska. Keeps building.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <div className="bg-secondary-light dark:bg-primary-dark transition duration-300">
          <AppHeader />
          <Suspense >{children}</Suspense>
          
          <AppFooter />
          <UseScrollToTop />
        </div>

        <Toaster />
      </body>
    </html>
  );
}
