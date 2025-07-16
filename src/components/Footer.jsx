import React from 'react';
import { FOOTER_LINKS } from '../utils/helper';
import { FaceIcon, InIcon, InstagramIcon } from "../utils/icon";
import Description from './common/Descritpion';

const Footer = () => {
    return (
        <footer className="bg-white lg:pt-20 md:pt-10 pt-5  px-4 ">
            <div className="max-w-[1140px] mx-auto flex flex-col xl:flex-row flex-wrap justify-between gap-5 lg:gap-10">
                <div className="max-w-[558px]">
                    <h2 className="text-[42px] font-medium leading-[150%] text-gradient">Pizza Nest</h2>
                    <Description
                        text={`At Pizza Nest, we believe every slice should bring joy. Whether you're ordering for one or feeding a crowd, our pizzas are baked with care, topped with love, and delivered hot to your doorstep. You just taste the difference.`}
                        ClassName="soft-black max-w-[558px]" />
                    <div className="flex gap-5 items-center mt-4 lg:mt-6 ">
                        <a
                            href="https://www.facebook.com/yourpage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 bg-gradient transform transition hover:scale-110 duration-300"
                        >
                            <FaceIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 bg-gradient transform transition hover:scale-110 duration-300"
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full p-2 bg-gradient transform transition hover:scale-110 duration-300"
                        >
                            <InIcon />
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6  ">
                    {FOOTER_LINKS.map((section, index) => (
                        <div key={index}>
                            <h4 className="text-base font-semibold text-black leading-[160%] mb-3 f ">
                                {section.heading}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <a
                                            href="#"
                                            className="text-[#575757] hover:text-orange-500 text-base leading-[160%] transition-colors duration-300">
                                            {link}
                                        </a>

                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="max-w-[1140px] h-[3px] bg-[#D1D1D166] opacity-100 mx-auto mt-[37px]" />
            <div className=" text-center text-base  soft-black leading-[160%] py-4 ">
                Copyright Pizza Nest © 2025, All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
