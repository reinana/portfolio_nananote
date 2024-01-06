"use client"
import { parseISO, format } from 'date-fns'
import Image from 'next/image'
import { GitHub, Monitor } from 'react-feather'

import { Work } from '@/types'
import React from 'react'
import Badge from './Badge'
import MotionDiv from './motionDiv'

const Container = ({ id, title, summary, content, source, url, thumbnail, date, technologies }: Work) => {
    return (
        <div key={id} className='flex flex-col justify-center items-center border-white shadow-[inset_-9px_-9px_8px_#f8f8f4,inset_9px_9px_8px_#d0caac] text-caramel rounded-3xl w-[80%] md:max-w-[45%] p-6 my-2'>
            <MotionDiv>
                <Image src={thumbnail} width={500} height={300} alt="" className='w-full rounded-3xl' />
                <div className='flex justify-between items-baseline w-full mt-2'>
                    <h2 className='text-2xl '>{title}</h2>
                    <time className='text-sm text-end'>{format(parseISO(date), 'yyyy.MM.dd')}</time>
                </div>
                <div className='flex flex-wrap justify-end w-full my-2'>
                    {technologies.map(item => (
                        <Badge key={item} title={item} />
                    ))}
                </div>
                <p className='flex-grow my-2'>{summary}</p>
                <div className='flex justify-around w-full my-2'>
                    <a href={source} className='inline-block px-12 py-3 text-sm font-medium text-white bg-amber-600 border border-amber-600 rounded-3xl active:text-amber-500 hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring'>
                        <span className='flex gap-3'><GitHub />CODE</span>
                    </a>
                    <a href={url} className='inline-block px-12 py-3 text-sm font-medium text-amber-600 border border-amber-600 rounded-3xl hover:bg-amber-600 hover:text-white active:bg-amber-500 focus:outline-none focus:ring'>
                        <span className='flex gap-3'><Monitor />APP</span>
                    </a>
                </div>
            </MotionDiv>
        </div>
    )
}

export default Container