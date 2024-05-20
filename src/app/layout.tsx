import './globals.css';
import type { Metadata } from 'next';
import { DarkModeProvider } from './darkModeProvider';
import Navbar from '@/components/navBar/Navbar';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Cash Management',
  description: "Manage your business's cash flow and cash closures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition duration-300 flex flex-col min-h-screen px-4 max-w-screen-xl mx-auto bg-light-100 text-dark-100 dark:bg-dark-100 dark:text-light-100">
        <DarkModeProvider>
          <Navbar />
          {children}
          <Toaster />
        </DarkModeProvider>
      </body>
    </html>
  );
}
