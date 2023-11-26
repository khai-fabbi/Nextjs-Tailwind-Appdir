'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React from 'react';

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 10 * 1000,
          refetchOnWindowFocus: false,
          retry: 0,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
