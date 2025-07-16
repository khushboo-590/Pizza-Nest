import React from 'react';
import Heading from './common/Heading';
import { Line } from '../utils/icon';
import { GALLERY_DATA } from '../utils/helper';
import CustomButton from './common/CustomButton';
import pizzaRightImg from '../assets/images/png/gallery-pizza-img.png';


const Gallery = () => {
    return (
        <div className='px-5  py-8 sm:py-10 md:py-20 lg:py-25 relative'>
            <img className='absolute pointer-events-none right-0 -top-10 max-w-[90px] md:max-w-[140px] lg:max-w-[195px]  animate-bounce' src={pizzaRightImg} alt="pizza-slice" />
            
            <div className='flex justify-center items-center flex-col max-w-[1140px] mx-auto'>
                <div className="flex justify-center items-center gap-1.5 mb-2">
                    <Line />
                    <h4 className='text-gradient text-lg font-bold leading-[22px]'>Our Gallery</h4>
                    <div className="rotate-[180deg]"><Line /></div>
                </div>
                <Heading
                    className="text-center mt-2 text-[30px] sm:text-4xl md:text-[40px] lg:text-5xl !leading-[120%] mb-6 md:mb-8 lg:mb-10 max-w-[550px] w-full"
                    headText="A Glimpse Into Our Pizza World"
                />
                <div className="flex xl:flex-row flex-col items-center md:gap-6 gap-4">
                    <div className="xl:flex hidden flex-col gap-4 w-full max-w-[267px]">
                        {GALLERY_DATA.leftCol.map((img, i) => (
                            <img key={i} src={img} alt={`left-${i}`} className="object-cover rounded-xl" />
                        ))}
                    </div>
                    <div className="flex flex-col gap-4 w-full max-w-[558px]">
                        {GALLERY_DATA.centerTop.map((img, i) => (
                            <img key={i} src={img} alt={`center-top-${i}`} className="object-cover rounded-xl" />
                        ))}
                        <div className="xl:flex hidden gap-4">
                            {GALLERY_DATA.centerBottom.map((img, i) => (
                                <img key={i} src={img} alt={`center-bottom-${i}`} className="object-cover rounded-xl w-full" />
                            ))}
                        </div>
                    </div>
                    <div className="xl:flex hidden flex-col gap-4 w-full max-w-[267px]">
                        {GALLERY_DATA.rightCol.map((img, i) => (
                            <img key={i} src={img} alt={`right-${i}`} className="object-cover rounded-xl" />
                        ))}
                    </div>
                    <div className="max-sm:hidden flex xl:hidden gap-4 w-full justify-center">
                        {GALLERY_DATA.centerBottom.map((img, i) => (
                            <img key={i} src={img} alt={`center-md-${i}`} className="object-cover rounded-xl" />
                        ))}
                    </div>
                    <div className="flex sm:hidden justify-center w-full">
                        {GALLERY_DATA.centerBottom.slice(0, 1).map((img, i) => (
                            <img key={i} src={img} alt={`center-sm-${i}`} className="object-cover w-full rounded-xl" />
                        ))}
                    </div>
                    <div className="flex xl:hidden gap-4 justify-center w-full">
                        {[GALLERY_DATA.leftCol, GALLERY_DATA.rightCol].map((group, groupIdx) => (
                            <div key={groupIdx} className="flex flex-col gap-4 w-full max-w-[267px]">
                                {group.map((img, i) => (
                                    <img key={i} src={img} alt={`mobile-col-${groupIdx}-${i}`} className="object-cover rounded-xl" />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                <CustomButton btnText="View more" className="mt-8" />
            </div>
        </div>
    );
};

export default Gallery;
