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
            <div className="max-w-[1440px] mx-auto flex justify-between items-center pl-[150px] pr-[160px] my-[25px] relative w-full">
                <Heading
                    className="text-prime-gradient font-nunitosans font-medium text-[34px]"
                    headText="Pizza Nest"
                />
                <nav
                    className={`z-50 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} 
                    lg:flex items-center gap-8 lg:flex-row 
                    max-lg:flex-col max-lg:justify-center max-lg:items-center 
                    max-lg:min-h-screen max-lg:absolute max-lg:top-0 max-lg:right-0 
                    max-lg:w-full max-lg:bg-white`}
                >
                    <ul className="flex flex-col lg:flex-row gap-6">
                        {navItems.map((item, index) => (
                            <li key={index} className="group">
                                <NavLink
                                    to={item.path}
                                    onClick={closeNavbar}
                                    className={({ isActive }) =>
                                        `relative font-nunito text-base group-hover:!text-prime-gradient ${isActive ? 'text-prime-gradient after:w-full' : 'text-muted-gray'}
                                        after:content-[''] after:absolute after:left-0 after:bottom-[4px] after:h-[1px] after:rounded-full
                                        after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
                                        after:w-0 after:transition-all after:duration-300 group-hover:after:w-full`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}

                        {/* Contact Button for mobile inside nav */}
                        <li className="block lg:hidden mt-6">
                            <CustomButton
                                className="hover:!bg-none hover:border-dark-gray border hover:text-dark-gray hover:!scale-100 active:!scale-90"
                                btnText="Contact Us"
                            />
                        </li>
                    </ul>
                </nav>

                {/* Contact Button for desktop */}
                <div className="hidden lg:flex">
                    <CustomButton
                        className="hover:!bg-none hover:border-dark-gray border hover:text-dark-gray hover:!scale-100 active:!scale-90"
                        btnText="Contact Us"
                    />
                </div>

                {/* Hamburger Button */}
                <div
                    onClick={toggleNavbar}
                    className="lg:hidden flex flex-col gap-[5px] z-50 cursor-pointer"
                >
                    <span
                        className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${menuOpen ? 'rotate-[43deg] origin-left' : ''
                            }`}
                    ></span>
                    <span
                        className={`w-[30px] h-[5px] rounded transition-all ${menuOpen
                                ? 'bg-transparent'
                                : 'bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]'
                            }`}
                    ></span>
                    <span
                        className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${menuOpen ? '-rotate-[36deg] origin-left' : ''
                            }`}
                    ></span>
                </div>
            </div>
        </header>
    );
};

export default Header;



{/* 
// import React, { useState } from 'react'
// import Container from '../components/common/Container'
// import { NAVLINKS } from '../utils/helper'
// import { NavLink } from 'react-router-dom'
// import Heading from './common/Heading'
// import CustomButton from './common/CustomButton'

// const Header = () => { */}

{/* //     const [isOpen, setIsOpen] = useState(false)

//     const toggleNavBar = () => (
//         setIsOpen(!isOpen)
//     )
//     return (
//         <div className='px-5 pt-6 pb-5.5 overflow-clip'>
//             <Container className={'flex justify-between items-center !overflow-x-clip'}>
//                 <Heading className={'text-prime-gradient font-nunitosans font-medium text-[34px]'} headText={` Pizza Nest`}/>
//                 <ul className={`flex justify-center items-center gap-6 max-[900px]:min-h-screen max-[900px]:w-full max-[900px]:absolute top-0 duration-300 max-[900px]:flex-col z-50 bg-white ${isOpen ? 'right-0' : '-right-full'}`}>
//                     {NAVLINKS.map((link, index) => { */}
{/* //                         const path =
//                             link.toLowerCase() === "home"
//                                 ? "/"
//                                 : "/" + link.toLowerCase().replace(/\s+/g, "-");

//                         return (
//                             <li key={index} className="relative group">
//                                 <NavLink
//                                     to={path}
//                                     className={({ isActive }) =>
//                                         `relative font-nunito text-base group-hover:!text-prime-gradient
//               ${isActive ? "text-prime-gradient after:w-full" : "text-muted-gray"}
//               after:content-[''] after:absolute after:left-0 after:bottom-[4px] after:h-[1px] after:rounded-full
//               after:bg-[linear-gradient(85.95deg,#EC6112_1.54%,#FF902E_98.46%)] max-w-max
//               after:w-0 after:transition-all after:duration-300 group-hover:after:w-full `
//                                     }
//                                 >
//                                     {link}
//                                 </NavLink>
//                             </li>
//                         );
//                     })}
//                     <li className='flex sm:hidden'><CustomButton className={'hover:!bg-none hover:border-dark-gray border hover:text-dark-gray hover:!scale-100 active:!scale-90'} btnText="Contact Us" /></li>
//                 </ul>
//                 <div className="flex justify-center items-center gap-5">
//                     <div className="sm:flex hidden"><CustomButton className={'hover:!bg-none hover:border-dark-gray border hover:text-dark-gray hover:!scale-100 active:!scale-90'}btnText="Contact Us"/></div>
//                     <div
//                         onClick={toggleNavBar}
//                         className="lg:hidden flex flex-col gap-[5px] z-50 cursor-pointer"
//                     >
//                         <span
//                             className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${menuOpen ? "rotate-[45deg] origin-left" : ""
//                                 }`}
//                         ></span>
//                         <span
//                             className={`w-[30px] h-[5px] rounded transition-all ${menuOpen
//                                 ? "bg-transparent"
//                                 : "bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)]"
//                                 }`}
//                         ></span>
//                         <span
//                             className={`w-[30px] h-[5px] bg-[linear-gradient(85.95deg,_#EC6112_1.54%,_#FF902E_98.46%)] rounded transition-all ${menuOpen ? "-rotate-[42deg] origin-left" : ""
//                                 }`}
//                         ></span>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Header */}
