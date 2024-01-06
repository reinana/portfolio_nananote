import Image from 'next/image'
import MotionDiv from './components/motionDiv'

export default function Home() {
    return (
        <div className='flex justify-center py-5'>
            <div className='flex flex-col items-center max-w-[80%]'>
                <MotionDiv>
                    <h1 className='text-3xl font-bold text-caramel pb-3'>
                        Hello! Im reinana.
                    </h1>
                    <Image src={`/sea.png`} width={1000} height={500} alt='sea image' className='w-full rounded-lg shadow-2xl' />
                    <p className='text-caramel shadow-2xl rounded-lg my-10 p-6'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Animi ab facilis quaerat beatae amet, molestiae similique
                        iste quis recusandae harum hic at sunt? Pariatur dolore amet
                        ducimus, similique nostrum minus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Animi ab facilis quaerat beatae amet, molestiae similique
                        iste quis recusandae harum hic at sunt? Pariatur dolore amet
                        ducimus, similique nostrum minus.
                    </p>
                </MotionDiv>
            </div>
        </div>
    )
}
