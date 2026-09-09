import type { Metadata } from 'next';
import './globals.css';

// Browser tab title and search-engine description. Keep these up to date.
export const metadata: Metadata = {
  title: 'Reign Santiago — Curiosity, Code & Motion',
  description: 'The personal portfolio of Reign Niel Santiago. An aspiring builder exploring web development, creative motion, and learning in public.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
