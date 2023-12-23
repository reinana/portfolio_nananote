import type { ReactNode } from 'react';

export const metadata = {
  title: 'About',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-lime-800">
      <h1 className="text-6xl font-bold mt-10">Blog Layout</h1>
      {children}
    </div>
  );
}