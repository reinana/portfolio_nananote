import Image from 'next/image'
import Link from 'next/link';
import React from "react";
import { Twitter, GitHub } from "react-feather";
import IconContainer from './components/IconContainer';


function Footer() {
    const footerList = [
        {
            _id: "111",
            title: "お問い合わせ",
            link: "#",
            icon: true,
        },
        {
            _id: "112",
            title: "特定商品取引法",
            link: "#",
            icon: true,
        },
        {
            _id: "113",
            title: "プライバシーポリシー",
            link: "#",
            icon: true,
        },
    ];

    return (
        <footer className="fixed bottom-0 w-full flex flex-col items-center bg-lightYellow border-t-[5px] border-dotted border-amber-300">
            <div className='flex justify-between p-10 w-full relative'>
                <ul className="flex flex-col gap-3 p-3">
                    {footerList.map((item) => (
                        <Link key={item._id} href={item.link}>
                            <li
                                className="flex items-center text-caramel
                            hover:text-amber-400 duration-300 cursor-pointer"
                            >
                                {item.title}
                            </li>
                        </Link>
                    ))}
                </ul>
                {/* logo */}
                <Link href={"/"} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src='/23344592.png'
                        width={100}
                        height={100}
                        alt='Picture of logo'
                    />
                </Link>
                <div className="flex items-center justify-end gap-5 text-caramel w-[50%]">
                    <IconContainer width={10} height={10} rounded={'full'}>
                        <a
                            href="https://twitter.com/reina_second_"
                            target="_blanck"
                            className="hover:text-amber-50 cursor-pointer duration-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-caramel"
                        >
                            <Twitter />
                        </a>
                    </IconContainer>

                    <IconContainer width={10} height={10} rounded={'full'}>
                        <a
                            href="https://github.com/reinana"
                            target="_blanck"
                            className="hover:text-amber-50 cursor-pointer duration-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-caramel"
                        >
                            <GitHub />
                        </a>
                    </IconContainer>
                    <IconContainer width={10} height={10} rounded={'full'}>
                        <a
                            href="https://recursionist.io/users/%E3%83%AC%E3%82%A4%E3%83%8A"
                            target="_blanck"
                            className="hover:text-amber-50 cursor-pointer duration-300 flex items-center justify-center w-10 h-10 rounded-full hover:bg-caramel"
                        >
                            <Image src='/recursion-logo-caramel.png' width={30} height={30} alt='recursion logo'/>
                        </a>
                    </IconContainer>
                </div>
            </div>
            <div className="flex items-center justify-center text-center w-full p-3 bg-caramel">
                <p className="text-amber-200">© reinana 2023</p>
            </div>

        </footer>
    );
}

export default Footer;
