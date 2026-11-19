import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Tapovan Vatsalyadham School (English Medium) | Premier CBSE Day School, Gandhinagar',
  description: 'Tapovan Vatsalyadham School (English Medium) - Premier CBSE affiliated English medium Day School in Amiyapur, Gandhinagar, Gujarat. Values-based education, modern STEM labs, smart classrooms, and sports excellence. Managed by Jivan Jagruti Trust.',
  icons: {
    icon: '/assets/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${lora.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#fbfbf9] text-slate-800 w-full max-w-full overflow-x-hidden relative">
        <TopBar />
        <Navbar />
        <main className="min-h-screen w-full max-w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
