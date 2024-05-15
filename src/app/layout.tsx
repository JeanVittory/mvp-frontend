import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { DarkModeProvider } from './darkModeProvider';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

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
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${inter.className} flex flex-col min-h-screen p-4 max-w-screen-xl mx-auto bg-light-100 text-dark-100 dark:bg-dark-100 dark:text-light-100`}
			>
				<DarkModeProvider>
					<Navbar />
					{children}
				</DarkModeProvider>
			</body>
		</html>
	);
}
