import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { DataContextProvider } from './context/dataContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Equação IDF',
  description: 'Equação e curva IDF - Hidrologia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 flex min-h-screen justify-center`}>
        <DataContextProvider>{children}</DataContextProvider>
      </body>
    </html>
  );
}
