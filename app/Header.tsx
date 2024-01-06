"use client";
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { XCircle } from "react-feather";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import IconContainer from './components/IconContainer';


const headerListItems = [
    {
        itemName: "WORKS",
        path: "/works"
    },
    {
        itemName: "ABOUT",
        path: "/about"
    },
    {
        itemName: "CONTACT",
        path: "/contact"
    }
];


const Header = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [active, setActive] = useState<string>("");
    const pathName = usePathname();

    useEffect(() => {
        setActive(pathName);
    }, [pathName]);

    return (
        <header className='w-full h-36 p-3 md:px-10 sticky top-0 bg-lightYellow border-b-[5px] border-dotted border-amber-300'>
            <div className='relative h-full max-w-screen-2xl mx-auto flex items-center justify-center md:justify-between'>
                {/* logo */}
                <Link href={"/"} className="">
                    <IconContainer width={24} height={24} rounded={'full'} >
                        <Image
                            src='/23344592.png'
                            width={100}
                            height={100}
                            alt='Picture of logo'
                        />
                    </IconContainer>
                </Link>
                {/* headerListItem */}
                <div className="hidden md:inline-flex items-center gap-8 text-caramel text-2xl font-semibold tracking-wider ">
                    <ul className="flex gap-8">
                        {headerListItems.map((item, index) => (
                            <Link key={index} href={item.path} className={`${active === item.path && 'border-8 border-amber-800 text-lightYellow'} rounded-full `}>
                                <IconContainer width={32} height={24} rounded={'full'}>
                                    <li
                                        className='text-caramel hover:text-amber-400 cursor-pointer duration-300 group relative p-5'
                                    >
                                        {item.itemName}
                                    </li>
                                </IconContainer>
                            </Link>
                        ))}
                    </ul>
                </div>


                {showMenu
                    ? (
                        <div className="w-80 h-80 md:hidden fixed top-0 right-0 bg-amber-400 opacity-60 p-5 rounded-bl-full">
                            <motion.div
                                className="h-full bg-amber-400 relative rounded-bl-full"
                                initial={{ x: 40, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <span
                                    className="absolute -right-1 -top-3 text-3xl text-white hover:text-amber-300 cursor-pointer duration-500 mb-2"
                                    onClick={() => setShowMenu(false)}
                                >
                                    <XCircle />
                                </span>
                                <Link href={"/"} onClick={() => setShowMenu(false)}>
                                    <p className='text-2xl font-bold text-end text-white py-6'>
                                        REINANA PORTFOLIO
                                    </p>
                                </Link>
                                <ul className="flex flex-col items-end text-caramel gap-5 font-semibold">
                                    {headerListItems.map((item, index) => (
                                        <Link key={index} href={item.path}>
                                            <li
                                                className="hover:text-white cursor-pointer duration-300"
                                                onClick={() => setShowMenu(false)}
                                            >
                                                {item.itemName}
                                            </li>
                                        </Link>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    ) : (
                        <div className="absolute top-1 right-1 w-7 h-5 group md:hidden flex flex-col justify-between cursor-pointer overflow-hidden"
                            onClick={() => setShowMenu(true)}
                        >
                            <span className="w-full h-[3px] bg-caramel group-hover:bg-caramel inline-flex -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
                            <span className="w-full h-[3px] bg-caramel group-hover:bg-amber-400 inline-flex -translate-x-3 group-hover:translate-x-0 transition-transform duration-500"></span>
                            <span className="w-full h-[3px] bg-caramel group-hover:bg-caramel"></span>
                        </div>
                    )
                }
            </div>
        </header >
    )
}

export default Header