
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">Fever Monitoring System</h1>
        </header>
        <main className="container mx-auto p-4">
          <RouterProvider router={router} />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
