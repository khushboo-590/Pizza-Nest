import React, { useState } from 'react';
import { TESTIMONIALS }  from '../utils/helper' 
import Description from './common/Descritpion';


const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);
    const testimonial = TESTIMONIALS[current];

    return (
        <div className='bg-[#F8F8F880]'>
        <div className="py-20 px-4 max-w-[1140px] mx-auto relative text-center">
            <h4 className="text-orange-500 font-semibold mb-1">Testimonial</h4>
            <h2 className="text-3xl sm:text-4xl font-bold mb-14">What Our Customers Say</h2>
            <div className="flex flex-col md:flex-row  gap-10 md:gap-14 relative md:static">
                {/* Image & Avatars */}
                <div className="relative">
                    <img
                        src={testimonial.image}
                        alt="Pizza"
                        className=" border-white shadow-md"
                    />
                    <div className="absolute left-[-20px] lg:top-[80px] top-12 flex flex-col gap-2">
                        {testimonial.avatars.map((avatar, idx) => (
                            <img
                                key={idx}
                                src={avatar}
                                alt={`User ${idx + 1}`}
                                className="lg:w-16 lg:h-16 w-10 h-10 border-2 border-white shadow-md rounded-full"
                            />
                        ))}
                    </div>
                </div>

                {/* Testimonial Box */}
                <div className="bg-white shadow-lg rounded-xl p-6 text-left w-full md:max-w-[680px] mt-8 md:mt-0 md:absolute md:right-[50px] md:bottom-[-60px]">
                    <Description text={testimonial.quote} ClassName="text-[#545454] mt-4" />
                    <h4 className="text-2xl leading-[140%] font-semibold mb-[2px] text-black">{testimonial.name}</h4>
                    <p className="text-base text-[#545454] leading-[160%]">{testimonial.role}</p>

                    {/* Quotation SVG */}
                    <span className="absolute right-6 bottom-6 text-orange-100 w-[71px] h-15 font-serif select-none">
                        <svg className="opacity-30" width="73" height="62" viewBox="0 0 73 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.4271 47.1885C40.4271 43.3803 41.4224 40.1823 ..." fill="url(#paint0_linear_133_5957)" />
                            <defs>
                                <linearGradient id="paint0_linear_133_5957" x1="72.9155" y1="47.1435" x2="-1.25894" y2="40.9071" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EC6112" />
                                    <stop offset="1" stopColor="#FF902E" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>

                    {/* Arrows */}
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={() => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                            className="w-[44px] h-[44px] bg-gray-100 hover:bg-gray-200 text-black flex items-center justify-center"
                        >
                            ←
                        </button>
                        <button
                            onClick={() => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)}
                            className="w-[44px] h-[44px] bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default TestimonialSection;
