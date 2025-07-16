// import React from 'react'
// import Description from './common/Descritpion'
// import aboutImg from '../assets/images/png/about-img.png'
// import chefImg from '../assets/images/svg/Support-icon.svg';
// import cookImg from '../assets/images/svg/cook-icon.svg';
// import supportImg from '../assets/images/svg/Support-icon.svg';
// import { ABOUT_CARD_DATA } from '../utils/helper';
// const imageList = [chefImg, cookImg, supportImg];




// const About = () => {
//     return (
//         <div className='max-w-[1114px] mt-8 md:mt-[50px] lg:mt-[100px] mx-auto px-4'>
//             <div className=' flex  flex-wrap sm:flex-row gap-10 md:gap-[100px] lg:gap-[152px] justify-center items-center'>
//                 <div className=' flex flex-col max-w-[558px] mt-[77.55px]'>
//                     <div className="flex gap-2 items-center ">
//                         <h4 className="text-lg font-bold leading-[120%] text-gradient">About Us</h4>
//                         <svg width="61" height="2" viewBox="0 0 61 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <line x1="0.832031" y1="1.05023" x2="60.8404" y2="1.05023" stroke="url(#paint0_linear_256_306)" />
//                             <defs>
//                                 <linearGradient id="paint0_linear_256_306" x1="0.832032" y1="2.31785" x2="4.10359" y2="-11.5765" gradientUnits="userSpaceOnUse">
//                                     <stop stop-color="#EC6112" />
//                                     <stop offset="1" stop-color="#FF902E" />
//                                 </linearGradient>
//                             </defs>
//                         </svg>
//                     </div>
//                     <h2 className='text-5xl font-semibold  leading-[130%] text-black mt-4 font-nunito'>Welcome to the<span className='text-[#FF902E]'> Nest</span></h2>
//                     <ul className="list-disc  pl-4 mb-6 ">
//                         <li className='mb-3'>
//                             <Description text={`At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India.`} className={`dark-black`} />
//                         </li>
//                         <li>
//                             <Description text={`Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep.`} className={`dark-black`} />
//                         </li>
//                     </ul>
//                     <div className="flex justify-center gap-6 mt-10 flex-wrap">
//                         {ABOUT_CARD_DATA.map((card, index) => (
//                             <div
//                                 key={index}
//                                 className={`border border-dashed border-orange-400 bg-white rounded-[10px] text-center p-[18px] shadow-sm hover:shadow-lg transition-all max-w-[170px] h-[122px] ${index === 1 ? 'mt-3' : ''
//                                     }`}
//                             >
//                                 <div className="size-[52px] rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-2">
//                                     <img src={imageList[index]} alt={card.title} />
//                                 </div>
//                                 <p className="text-[#474747] text-base leading-[160%] whitespace-nowrap">{card.title}</p>
//                             </div>
//                         ))}
//                     </div>


//                 </div>
//                 <img src={aboutImg} />
//             </div>

//         </div>
//     )
// }

// export default About


import React from 'react'
import Heading from './common/Heading';
import aboutImg from '../assets/images/png/about-img.png'
import { ABOUT_US_CARDS_DATA } from '../utils/helper';
import pizzaSlice from '../assets/images/png/pizza-slice-img.png';
import { SingleLineSvg } from '../utils/icon';
import Description from './common/Descritpion';
const AboutUs = () => {
    return (
        <>
            <div className="px-5 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center pt-15 md:pt-25 pb-[49px] relative">
                <img className='absolute pointer-events-none left-0 bottom-0 max-xl:w-full max-xl:max-w-[150px] animate-bounce' src={pizzaSlice} alt="pizza-slice" />
                <div className="max-w-[1114px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[637px]">
                        <div className="lg:max-w-[558px]">
                            <div className="flex items-center gap-1.5">
                                <h4 className='text-prime-gradient text-lg font-bold leading-[22px]'>About</h4>
                                <SingleLineSvg />
                            </div>
                            <Heading className="pt-2 text-5xl !leading-[120%]" headText={`Welcome to the Nest`}Welcome to the />
                            <ul className='list-disc lg:max-w-[558px] ml-6 pt-4'>
                                <li><Description className="text-[#4D4D4D]"  text="At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India."/></li>
                                <li className='pt-3'><Description className="text-[#4D4D4D]"  text="Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep"/></li>
                            </ul>
                            <div className="flex flex-wrap mt-6 gap-4 sm:gap-6 lg:max-h-[135px] max-lg:justify-center">
                                {ABOUT_US_CARDS_DATA.map((item, index) => (
                                    <div className={`${index === 1 ? "sm:mt-3" : ""}`}>
                                        <div key={index} className="bg-[#FEFEFE] border w-full min-w-[160px] sm:max-w-[170px] sm:min-w-[170px] p-3 sm:p-4.5 shadow-[0px_1px_7px_0px_#F67A211F] rounded-xl border-dashed">
                                            <div className="bg-[#FCECE2] size-[52px] mx-auto rounded-full flex justify-center items-center">{<item.img />}</div>
                                            <p className='leading-[160%] text-center whitespace-nowrap text-[#474747] pt-2'>{item.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img className='lg:max-h-[597px] pointer-events-none max-w-[383px] w-full mt-4' src={aboutImg} alt="man-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs


