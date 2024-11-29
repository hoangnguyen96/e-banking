import type { Metadata } from 'next';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
