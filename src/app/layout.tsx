import './globals.css';
import Header from './components/Header/Header';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
