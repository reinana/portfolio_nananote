import React, { ReactNode } from 'react'
interface IconContainerProps {
    width: number;
    height: number;
    rounded: string;
    children: ReactNode
}
const IconContainer = ({ width, height, rounded, children }: IconContainerProps) => {

    return (
        <div className={`shadow-[-5px_-5px_10px_#ffffe7] w-${width} h-${height} rounded-${rounded}`}>
            <div className={`shadow-[5px_5px_10px_#d9c9ab] w-${width} h-${height} rounded-${rounded} flex items-center justify-center bg-gradient-to-br from-[#fffed7] to-[#e6d5b5]`}>{children}</div>
        </div >
    )
}

export default IconContainer;