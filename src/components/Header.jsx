import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CustomButton from './common/CustomButton';
import { Nav_DATA } from '../utils/helper'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleNavbar = () => {
        setMenuOpen(!menuOpen);
        document.documentElement.classList.toggle('overflow-hidden');
    };

    const closeNavbar = () => {
        setMenuOpen(false);
        document.documentElement.classList.remove('overflow-hidden');
    };

    return (
        <div className="max-w-[1920px] mx-auto">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center px-5 sm:px-10 md:pl-20 lg:pl-[150px] md:pr-20 lg:pr-[160px] my-[25px] relative w-full">
                <a href="#"
                    className="text-gradient  font-medium text-2xl sm:text-[34px]">Pizza Nest
                </a>
                <nav
                    className={`z-50 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} 
                   xl:flex items-center gap-4 xl:gap-8 xl:flex-row  max-xl:flex-col max-xl:justify-center max-xl:items-center max-xl:min-h-screen max-xl:absolute max-xl:top-0 max-xl:right-0 max-xl:w-full max-xl:bg-white`}>
                    <ul className="flex flex-col lg:flex-row gap-6 text-center">
                        {Nav_DATA.map((obj, index) => (
                            <li key={index} className="group">
                                <NavLink
                                    to={obj.path}
                                    onClick={closeNavbar}
                                    className={({ isActive }) =>
                                        `relative text-base group-hover:text-gradient ${isActive ? 'text-gradient after:w-full' : 'text-muted-gray'}
                                        after:content-[''] after:absolute after:left-0 after:bottom-[4px] after:h-[1px] after:rounded-full
                                        after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
                                        after:w-0 after:transition-all after:duration-300 group-hover:after:w-full`
                                    }>
                                    {obj.label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="block lg:hidden mt-6">
                            <CustomButton
                                className="hover:!bg-none hover:border-dark-gray border hover:text-dark-gray hover:!scale-100 active:!scale-90"
                                btnText="Contact Us"
                            />
                        </li>
                    </ul>
                </nav>
                <div className="hidden lg:flex">
                    <CustomButton
                        className="hover:!bg-none hover:border-dark-gray border hover:text-dark-gray hover:!scale-100 active:!scale-90"
                        btnText="Contact Us" />
                </div>
                <div
                    onClick={toggleNavbar}
                    className="lg:hidden flex flex-col gap-[6px] z-50 cursor-pointer transition-all duration-300 ease-in-out">
                    <span
                        className={`w-[30px] h-[4px] rounded bg-gradient-to-r from-[#EC6112] to-[#FF902E] ${menuOpen ? 'rotate-45 translate-y-[11px]' : ''}`}></span>
                    <span
                        className={`w-[30px] h-[4px] rounded transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'bg-gradient-to-r from-[#EC6112] to-[#FF902E]'}`}></span>
                    <span
                        className={`w-[30px] h-[4px] rounded bg-gradient-to-r from-[#EC6112] to-[#FF902E] ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                </div>
            </div>
        </div>
    );
};

export default Header;


