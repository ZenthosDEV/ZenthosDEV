import { roboto } from './fonts/fonts';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className='dark'>
      <body className={`${roboto.variable} relative antialiased`}>
        {children}
      </body>
    </html>
  );
}
