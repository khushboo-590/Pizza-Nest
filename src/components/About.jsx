import React from 'react'
import Description from './common/Descritpion'
import aboutImg from '../assets/images/png/about-img.png'
import chefImg from '../assets/images/svg/Support-icon.svg';
import cookImg from '../assets/images/svg/cook-icon.svg';
import supportImg from '../assets/images/svg/Support-icon.svg';
import { ABOUT_CARD_DATA } from '../utils/helper';
const imageList = [chefImg, cookImg, supportImg];




const About = () => {
    return (
        <div className='max-w-[1114px] mt-[100px] mx-auto'>
            <div className=' flex  flex-wrap sm:flex-row gap-[152px]'>
                <div className=' flex flex-col max-w-[558px] mt-[77.55px]'>
                    <div className="flex gap-2 items-center ">
                        <h4 className="text-lg font-bold leading-[120%] text-gradient">About Us</h4>
                        <svg width="61" height="2" viewBox="0 0 61 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="0.832031" y1="1.05023" x2="60.8404" y2="1.05023" stroke="url(#paint0_linear_256_306)" />
                            <defs>
                                <linearGradient id="paint0_linear_256_306" x1="0.832032" y1="2.31785" x2="4.10359" y2="-11.5765" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EC6112" />
                                    <stop offset="1" stop-color="#FF902E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <h2 className='text-5xl font-semibold  leading-[130%] text-black mt-4 font-nunito'>Welcome to the<span className='text-[#FF902E]'> Nest</span></h2>
                    <ul className="list-disc  pl-4 mb-6 ">
                        <li className='mb-3'>
                            <Description text={`At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India.`} className={`dark-black`} />
                        </li>
                        <li>
                            <Description text={`Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep.`} className={`dark-black`} />
                        </li>
                    </ul>
                    <div className="flex justify-center gap-6 mt-10 flex-wrap">
                        {ABOUT_CARD_DATA.map((card, index) => (
                            <div
                                key={index}
                                className={`border border-dashed border-orange-400 bg-white rounded-[10px] text-center p-[18px] shadow-sm hover:shadow-lg transition-all max-w-[170px] ${index === 1 ? 'mt-3' : ''
                                    }`}
                            >
                                <div className="size-[52px] rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-2">
                                    <img src={imageList[index]} alt={card.title} />
                                </div>
                                <p className="text-[#474747] text-base leading-[160%] whitespace-nowrap">{card.title}</p>
                            </div>
                        ))}
                    </div>


                </div>
                <img src={aboutImg} />
            </div>

        </div>
    )
}

export default About




