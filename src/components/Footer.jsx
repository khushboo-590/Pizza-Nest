import React from 'react';
import { FOOTER_LINKS } from '../utils/helper';
import { FaceIcon, InIcon, InstagramIcon } from "../utils/icon";
import Description from './common/Descritpion';

const Footer = () => {
    return (
        <footer className="bg-white pt-10">
            <div className="max-w-[1140px] mx-auto flex flex-wrap justify-between gap-10">
                <div className="max-w-[558px]">
                    <h2 className="text-[42px] font-medium leading-[150%] text-gradient">Pizza Nest</h2>
                    <Description
                        text={`At Pizza Nest, we believe every slice should bring joy. Whether you're ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference.`}
                        ClassName="soft-black"
                    />
                    <div className="flex gap-5 items-center mt-6">
                        <a href="#" className="rounded-full p-2 bg-gradient">
                            <FaceIcon />
                        </a>
                        <a href="#" className="rounded-full p-2 bg-gradient">
                            <InstagramIcon />
                        </a>
                        <a href="#" className="rounded-full p-2 bg-gradient">
                            <InIcon />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 mb-8">
                    {FOOTER_LINKS.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-base font-semibold text-black leading-[160%] mb-3 font-nunito">
                                {section.heading}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a href="#" className="soft-black hover:text-orange-500 text-base leading-[160%] font-nunito">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-[1140px] h-[3px] bg-[#D1D1D166] opacity-100 mx-auto" />
            <div className=" text-center text-base  soft-black leading-[160%] py-4 font-nunito">
                Copyright Pizza Nest © 2025, All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
