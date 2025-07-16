import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CustomButton from './common/CustomButton';
import Heading from './common/Heading';

const Header = () => {
    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Menu', path: '/menu' },
        { label: 'Customize Pizza', path: '/customize' },
        { label: 'Offers', path: '/offers' },
        { label: 'About Us', path: '/about' },
    ];

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
        <header className="font-montserrat">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center px-5 sm:px-10 md:pl-20 lg:pl-[150px] md:pr-20 lg:pr-[160px] my-[25px] relative w-full">
                <Heading
                    className="text-gradient  font-medium text-[34px]"
                    headText="Pizza Nest"
                />
                <nav
                    className={`z-50 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} 
                   xl:flex items-center gap-4 xl:gap-8 xl:flex-row 
max-xl:flex-col max-xl:justify-center max-xl:items-center 
max-xl:min-h-screen max-xl:absolute max-xl:top-0 max-xl:right-0 
max-xl:w-full max-xl:bg-white`}
                >
                    <ul className="flex flex-col lg:flex-row gap-6">
                        {navItems.map((item, index) => (
                            <li key={index} className="group">
                                <NavLink
                                    to={item.path}
                                    onClick={closeNavbar}
                                    className={({ isActive }) =>
                                        `relative font-nunito text-base group-hover:!text-prime-gradient ${isActive ? 'text-gradient after:w-full' : 'text-muted-gray'}
                                        after:content-[''] after:absolute after:left-0 after:bottom-[4px] after:h-[1px] after:rounded-full
                                        after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
                                        after:w-0 after:transition-all after:duration-300 group-hover:after:w-full`
                                    }
                                >
                                    {item.label}
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
                        btnText="Contact Us"
                    />
                </div>
                <div
                    onClick={toggleNavbar}
                    className="lg:hidden flex flex-col gap-[5px] z-50 cursor-pointer"
                >
                    <span
                        className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${menuOpen ? 'rotate-[42deg] origin-left' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-[30px] h-[5px] rounded transition-all ${menuOpen
                                ? 'bg-transparent'
                                : 'bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]'
                            }`}
                    ></span>
                    <span
                        className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${menuOpen ? '-rotate-[42deg] origin-left' : ''
                            }`}
                    ></span>
                </div>
            </div>
        </header>
    );
};

export default Header;


