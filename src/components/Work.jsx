import React from 'react'
import Heading from './common/Heading'
import { HOW_IT_WORKS } from '../utils/helper'

const Work = () => {
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
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {HOW_IT_WORKS.map((step, index) => (
                  <div key={index} className="flex flex-col items-center max-w-[320px]">
                      <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-5">
                          <img src={step.icon} alt={step.title} className="w-8 h-8" />
                      </div>
                      {index < HOW_IT_WORKS.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 translate-y-[-50%] right-[-32px]">
                              <span className="text-orange-400 text-2xl font-bold">➝</span>
                          </div>
                      )}

                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                      <button className="mt-5 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                          View Menu
                      </button>
                  </div>
              ))}
          </div>

  )
}

export default Work
