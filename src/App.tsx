
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-xl font-bold">Fever Monitoring System</h1>
        </header>
        <main className="container mx-auto p-4">
          <p>Welcome to the Fever Monitoring System</p>
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
