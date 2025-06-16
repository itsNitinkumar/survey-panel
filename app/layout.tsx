import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alrestion - Earn Through Online Surveys',
  description: 'Alrestion helps you earn money online by completing simple surveys. Join now and start getting paid for your opinion!',
  keywords: 'online surveys, earn money online, paid surveys, survey jobs, Alrestion, work from home, make money online, get paid for surveys, opinion rewards, online income',
  authors: [{ name: 'Softication Technology Pvt. Ltd.', url: 'https://www.softication.com' }],
  
  robots: 'index, follow',
};

 const RootLayout: React.FC<IWrapper> =({
  children,
})=> {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

export default RootLayout;
