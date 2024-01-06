import type { ReactNode } from 'react';

export const metadata = {
  title: 'Works',
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <h1 className="text-3xl font-bold text-caramel mt-10">Works</h1>
      {children}
    </div>
  );
}