"use client"
import React, { Children, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MotionDivProps {
    children: ReactNode;
}
const motionDiv = ({children}:MotionDivProps) => {
    return (
        <>
            <motion.div
                className="h-full"
                initial={{ x: -40, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >

                {children}
            </motion.div>
        </>
    )
}

export default motionDiv