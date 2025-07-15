import React from 'react';
import Heading from './common/Heading';
import { GALLERY_DATA } from '../utils/helper';


const Gallery = () => {
    return (
        <div className="max-w-[1440px] px-4 mx-auto">
            <div className="mt-[100px]">
                <div className="flex flex-col items-center">
                    <div className="w-full flex items-center justify-center gap-2 mb-2">
                        {/* Left Line */}
                        <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 1H-0.0083313" stroke="url(#leftGradient)" />
                            <defs>
                                <linearGradient id="leftGradient" x1="60" y1="1.76761" x2="55.9905" y2="-15.3725" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EC6112" />
                                    <stop offset="0.380908" stopColor="#FF902E" />
                                    <stop offset="0.74047" stopColor="#FEFEFE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <h4 className="text-lg leading-[120%] font-bold text-gradient whitespace-nowrap">Our Gallery</h4>

                        {/* Right Line */}
                        <svg width="60" height="2" viewBox="0 0 60 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 1H-0.0083313" stroke="url(#rightGradient)" />
                            <defs>
                                <linearGradient id="rightGradient" x1="60" y1="1.76761" x2="55.9905" y2="-15.3725" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#EC6112" />
                                    <stop offset="0.380908" stopColor="#FF902E" />
                                    <stop offset="0.74047" stopColor="#FEFEFE" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="max-w-[588px] mx-auto mb-[40px]">
                        <Heading headText="A Glimpse Into Our Pizza World" className="mt-2 text-center" />
                    </div>
                </div>

                <div className="flex flex-wrap gap-6 mx-auto justify-center">
                    {GALLERY_DATA.map((column, colIdx) => (
                        <div
                            key={colIdx}
                            className={`flex flex-col gap-6 ${colIdx === 0 || colIdx === 2 ? 'max-w-[267px]' : 'max-w-[558px]'
                                }`}
                        >
                            {column.map((item, idx) =>
                                Array.isArray(item) ? (
                                    <div key={idx} className="flex gap-6">
                                        {item.map((img, i) => (
                                            <img key={i} src={img} alt={`Pizza`} className="object-cover" />
                                        ))}
                                    </div>
                                ) : (
                                    <img key={idx} src={item} alt={`Pizza`} className="object-cover" />
                                )
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Gallery;
