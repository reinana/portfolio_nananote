import type { ReactNode } from 'react';

export const metadata = {
  title: 'Works',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-slate-500">
      <h1 className="text-6xl font-bold mt-10">Works Layout</h1>
      {children}
    </div>
  );
}