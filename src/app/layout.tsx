import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Lora } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import ScrollProgress from '@/components/ScrollProgress';

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
  title: 'Tapovan Vatsalyadham School (English Medium) | Premier CBSE Boys Day School, Gandhinagar',
  description: 'Tapovan Vatsalyadham School (English Medium) - Premier CBSE affiliated English medium Boys Day School (Affiliation #430592 • School Code: 11722) in Amiyapur, Gandhinagar, Gujarat. Fostering Bhakti, Maitri, Shuddhi & Shaurya. Managed by Jivan Jagruti Trust.',
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
        <ScrollProgress />
        <TopBar />
        <Navbar />
        <main className="min-h-screen w-full max-w-full overflow-x-hidden pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
