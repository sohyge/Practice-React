import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '../styles/globals.css';
import React from 'react';
import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 0,
          },
        },
      }),
  );
  App.getInitialProps = async () => ({ pageProps: {} });
  return (
    <>
      <Head>
        <title>REACT NEXT.JS</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
