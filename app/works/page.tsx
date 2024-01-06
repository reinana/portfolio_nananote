import { allWorks } from '@/data/works'
import Container from '../components/Container'

export default function WorksPage() {
    const works = allWorks
    return (
        <div className="flex flex-col md:flex-row md:flex-wrap gap-5 items-center justify-center py-2">
            {works.map((item) => (
                <Container key={item.id} id={item.id} title={item.title} summary={item.summary} content={item.content} source={item.source} url={item.url} thumbnail={item.thumbnail} date={item.date} technologies={item.technologies} />
            ))}
        </div>
    )
}