import { allWorks } from '@/data/works'
import Head from 'next/head'

export default function WorksPage() {
    const works = allWorks
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="text-6xl font-bold">Works Page</h2>
      <p>{works[0].title}</p>
    </div>
  )
}