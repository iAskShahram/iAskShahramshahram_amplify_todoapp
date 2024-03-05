'use client';

import { Inter } from 'next/font/google';
// import "./globals.css";
import { Box, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import appTheme from '@/theme/theme';
import { Toaster } from 'sonner';
import { UserContextProvider } from '@/context/UserContext';

const inter = Inter({ subsets: ['latin'] });

function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <BrowserRouter>
        <ThemeProvider theme={appTheme}>
          <body className={inter.className}>
            <UserContextProvider>
              <Box component={'main'}>{children}</Box>
            </UserContextProvider>
          </body>
          <Toaster richColors />
        </ThemeProvider>
      </BrowserRouter>
    </html>
  );
}

export default RootLayout;
