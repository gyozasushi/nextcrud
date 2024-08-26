'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './page';
import './globals.css';
export default function RootLayout({ children }) {
  const queryClient = new QueryClient({
    defaultOptions :{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  }); 

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
           <Home/>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
