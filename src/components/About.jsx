import React,{useEffect} from 'react'
import aboutImg from '../assets/images/png/about-img.png'
import { ABOUT_US_CARDS_DATA } from '../utils/helper';
import pizzaSlice from '../assets/images/png/pizza-slice-img.png';
import { SingleLineSvg } from '../utils/icon';
import Descritpion from './common/Descritpion';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,           
            duration: 800,         
            easing: 'ease-in-out', 
            delay: 50,            
            once: true,           
        });
    }, [])
    return (
        <>
            <div className="px-5 bg-[url(src/assets/images/png/common-bg-img.png)] bg-no-repeat bg-cover bg-center p-8 sm:pt-10 md:pt-15 py:pt-25 pb-8 md:pb-[49px] relative">
                <img className='absolute pointer-events-none left-0 bottom-0 max-xl:w-full max-xl:max-w-[150px] animate-bounce' src={pizzaSlice} alt="pizza-slice" />
                <div className="max-w-[1114px] mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[637px]">
                        <div className="lg:max-w-[558px]" data-aos="fade-left"
>
                            <div className="flex items-center gap-1.5">
                                <h4 className='text-gradient text-lg font-bold leading-[22px]'>About US</h4>
                                <SingleLineSvg />
                            </div>
                            <h2 className="pt-2 text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl !leading-[120%] text-black">Welcome to the <span className='text-gradient' >Nest</span></h2>
                            <ul className='list-disc lg:max-w-[558px] ml-6 pt-4'>
                                <li><Descritpion className="text-[#4D4D4D]" text="At PizzaNest, we believe that pizza is more than just food — it’s an emotion, a celebration, and comfort all rolled into one delicious slice. Founded with a passion for real ingredients and big flavors, we set out to bring handcrafted, oven-fresh pizzas to every corner of India." /></li>
                                <li className='pt-3'
                                ><Descritpion className="text-[#4D4D4D]" text="Whether you're craving spicy paneer, a creamy cheese burst, or a fully loaded custom pizza made your way, we've got you covered. Each pizza is baked with love, topped with the freshest veggies, premium cheese, and authentic sauces — all delivered hot and fast, right to your doorstep" /></li>
                            </ul>
                            <div className="flex flex-wrap mt-6 gap-4 sm:gap-6 lg:max-h-[135px] max-lg:justify-center">
                                {ABOUT_US_CARDS_DATA.map((obj, index) => (
                                    <div className={`${index === 1 ? "sm:mt-3" : ""}`}>
                                        <div key={index} className="bg-[#FEFEFE] border w-full min-w-[160px] sm:max-w-[170px] sm:min-w-[170px] p-3 sm:p-4.5 shadow-[0px_1px_7px_0px_#F67A211F] rounded-xl border-dashed border-amber-500">
                                            <div className="bg-[#FCECE2] size-[52px] mx-auto rounded-full flex justify-center items-center ">{<obj.img />}</div>
                                            <p className='leading-[160%] text-center whitespace-nowrap text-[#474747] pb-2'>{obj.title}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <img className='lg:max-h-[597px] pointer-events-none max-w-[383px] w-full mt-4 ' src={aboutImg} alt="man-img" data-aos="fade-right"
/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs


