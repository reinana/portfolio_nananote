import Head from 'next/head'

const Work = ({ params }: { params: { id: string } }) => {
    console.log(params.id)
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h2 className="text-6xl font-bold">id Page</h2>
        </div>
    )
}

export default Work;