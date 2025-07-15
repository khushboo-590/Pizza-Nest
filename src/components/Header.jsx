import React, { useState } from 'react';
import CustomButton from './common/CustomButton';

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
        <div className="font-montserrat">
            <div className="max-w-[1440px] mx-auto flex justify-between items-center pl-[150px] pr-[160px] my-[25px] relative">
                <div className="flex items-center">
                    <a href="#" className="text-[34px] leading-[100%] font-medium font-poppins text-light-orange">
                        Pizza Nest
                    </a>
                </div>
                <div
                    className={`z-50 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'
                        } lg:flex items-center gap-8 lg:flex-row max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:min-h-screen max-lg:absolute max-lg:top-0 max-lg:right-0 max-lg:w-full max-lg:bg-white`}
                >
                    <ul className="flex flex-col lg:flex-row gap-6">
                        {navItems.map((item, index) => (
                            <li key={index} className="group">
                                <a
                                    href={item.path}
                                    onClick={closeNavbar}
                                    className="font-nunito font-normal text-base leading-[160%] light-gray  transition-all duration-300
                  hover:text-gradient"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex lg:hidden items-center mt-4">
                        <CustomButton btnText="Contact Us" className={`bg-gradient`}/>
                    </div>
                </div>
                <div className="hidden lg:flex items-center gap-6">
                    <CustomButton btnText="Contact Us" className={`bg-gradient`} />
                </div>
                <div
                    className="z-50 cursor-pointer group relative min-h-[17px] w-[25px] flex flex-col justify-center items-center gap-1 lg:hidden"
                    onClick={toggleNavbar}
                >
                    <span
                        className={`h-[3px] bg-black rounded-full duration-300 w-full ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-[3px] bg-black rounded-full duration-300 w-full ${menuOpen ? 'opacity-0' : ''
                            }`}
                    ></span>
                    <span
                        className={`h-[3px] bg-black rounded-full duration-300 w-full ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                            }`}
                    ></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
