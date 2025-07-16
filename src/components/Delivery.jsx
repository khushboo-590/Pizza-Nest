// import React from 'react'
// import deliveryImg from '../assets/images/png/delivery-img.png'
// import Heading from './common/Heading'
// import Description from './common/Descritpion'
// import checkIcon from '../assets/images/svg/check-icon.svg'
// import CustomButton from './common/CustomButton'
// import { DELIVERY_FEATURES } from '../utils/helper'

// const Delivery = () => {
//   return (
//       <div className="  bg-[#F8F8F880]">
//           <div className="py-[100px]  max-w-[1140px] px-4 mx-auto">
//               <div className="flex flex-wrap lg:flex-nowrap gap-[33px] items-center justify-between mt-10">
//                   {/* Left Content */}
//                   <div className="w-full lg:max-w-[50%] mt-[10px]">
//                       <div className="flex gap-2 items-center mb-2">
//                           <h4 className="text-lg font-bold leading-[120%] text-gradient">Food Delivery</h4>
//                           <svg width="61" height="2" viewBox="0 0 61 2" fill="none" xmlns="http://www.w3.org/2000/svg">
//                               <line x1="0.832031" y1="1.05023" x2="60.8404" y2="1.05023" stroke="url(#paint0_linear_256_306)" />
//                               <defs>
//                                   <linearGradient id="paint0_linear_256_306" x1="0.832032" y1="2.31785" x2="4.10359" y2="-11.5765" gradientUnits="userSpaceOnUse">
//                                       <stop stopColor="#EC6112" />
//                                       <stop offset="1" stopColor="#FF902E" />
//                                   </linearGradient>
//                               </defs>
//                           </svg>
//                       </div>

//                       <Heading headText="Fast, Fresh & Always On Time" ClassName="max-w-[483px] text-left mb-[15px]" />

//                       <Description
//                           text="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away."
//                           ClassName="max-w-[493px] light-black"
//                       />

//                       <div className="mt-3 flex flex-col gap-2 justify-center">
//                           {DELIVERY_FEATURES.map((feature, index) => (
//                               <div key={index} className="flex gap-[6px] items-start">
//                                   <img src={checkIcon} alt="check" />
//                                   <Description text={feature} ClassName="light-black m-0" />
//                               </div>
//                           ))}
//                           <CustomButton btnText="Order Now" className="bg-gradient mt-4 max-w-[149px]" />
//                       </div>
//                   </div>

//                   {/* Right Image */}
//                   <div className="w-full lg:max-w-[50%] mt-6 lg:mt-0">
//                       <img src={deliveryImg} alt="Delivery" className="w-full h-auto object-cover rounded-md" />
//                   </div>
//               </div>


// {/*  */}
//             </div>
//     </div>
//   )
// }

// export default Delivery
// // import React from 'react'

// // const Delicious = () => {
// //   return (
// //       <div className='max-w-[1140px] mx-auto mt-[113px] mb-[83px]'>
// //           <div className=' flex-flex-wrap gap-6'>
// //               <div className=' relative'>
// //                   <div className='bg-[url(../assets/images/png/delicious-bg-img.png)]'>
// //                       <div className=' flex '>
// //                           <div className=' max-w-[252px] flex flex-col'>
// //                               <h4 className=''>Delicious</h4>
// //                               <h5 className=''>Spicy Paneer</h5>
// //                               <p className=''>Limited Time</p>
// //                           </div>
// //                       </div>
// //                   </div>
// //               </div>
// //           </div>

// //     </div>
// //   )
// // }

// // export default Delicious

// // import React from 'react';

// // const PIZZA_OFFERS = [
// //     {
// //         id: 1,
// //         title: 'SPICY PANEER',
// //         price: '₹199',
// //         image: 'https://i.imgur.com/DUlKc4s.png', // replace with actual spicy paneer image
// //     },
// //     {
// //         id: 2,
// //         title: 'CHEESE BURST',
// //         price: '₹299',
// //         image: 'https://i.imgur.com/LmbGJxp.png', // replace with actual cheese burst image
// //     },
// // ];

// // const PizzaOffers = () => {
// //     return (
// //         <section className="py-10 px-4 max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
// //             {PIZZA_OFFERS.map((item) => (
// //                 <div
// //                     key={item.id}
// //                     className="bg-black text-white rounded-xl p-6 w-[350px] shadow-md relative overflow-hidden"
// //                 >
// //                     {/* Price Cloud */}
// //                     <div className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-2 rounded-full border border-white">
// //                         <div className="text-xs opacity-70">Only</div>
// //                         <div className="text-lg font-semibold">{item.price}</div>
// //                     </div>

// //                     <p className="text-orange-400 text-sm font-semibold">Delicious</p>
// //                     <h3 className="text-2xl font-bold mt-1 mb-1">{item.title}</h3>
// //                     <p className="text-sm mb-4 text-gray-300">Limited Time</p>

// //                     {/* Pizza Image */}
// //                     <img
// //                         src={item.image}
// //                         alt={item.title}
// //                         className="h-40 w-full object-contain mb-4"
// //                     />

// //                     {/* Order Now Button */}
// //                     <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-5 rounded-full text-sm">
// //                         Order Now
// //                     </button>
// //                 </div>
// //             ))}
// //         </section>
// //     );
// // };

// // export default PizzaOffers;

// import React from 'react';
// import { LIMITEDOFFER_DATA } from '../utils/helper';
// import cloudImg from '../assets/images/png/cloud-image.png'
// import singleCloudImg from '../assets/images/png/single-cloud-image.png'
// import CustomButton from './common/CustomButton';

// const LimitedOffer = () => {
//     return (
//         <>
//             <div className="px-4 py-10 sm:py-17 md:py-25">
//                 <div className="max-w-[1140px] mx-auto">
//                     <div className="flex max-lg:flex-wrap gap-6 items-center">
//                         {LIMITEDOFFER_DATA.map((item, index) => (
//                             <div className="max-w-[700px] mx-auto lg:max-w-[558px] relative w-full min-h-[319px] pl-4 sm:pl-8 py-4 sm:py-[63px] rounded-xl bg-[url(./assets/images/png/limited-offer-bg-img.png)] bg-cover bg-center bg-no-repeat" key={index}>
//                                 <div className="z-1 relative max-w-max">
//                                     <h5 className='text-xl sm:text-[28px] leading-[160%] text-prime-gradient'>Delicious</h5>
//                                     <h2 className='text-white text-[28px] sm:text-4xl font-semibold leading-[160%]'>{item.title}</h2>
//                                     <p className='sm:text-xl leading-[160%] text-[#E9E9E9]'>Limited Time</p>
//                                     <CustomButton className="!py-2.5 !px-4 !leading-[22px] mt-2 sm:mt-4" btnText="Order Now"/>
//                                 </div>
//                                 <img className='sm:absolute max-sm:ml-auto right-0 bottom-0 max-sm:max-w-[250px]' src={item.img} alt="pizza-img" />
//                                 <div className="absolute top-23 sm:top-[7px] right-2 sm:right-[49px]">
//                                     <img className='sm:flex hidden' src={cloudImg} alt="cloud-img" />
//                                     <img className='flex sm:hidden' src={singleCloudImg} alt="cloud-img" />
//                                     <div className="absolute top-5 sm:top-[27px] right-8 sm:right-[35px]">
//                                         <p className='text-white text-center leading-[160%]'>{item.text}</p>
//                                         <p className='uppercase text-2xl text-center leading-[140%] text-white'>{item.price}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default LimitedOffer
import React from 'react'
import image from './../assets/images/png/delivery-img.png'
import line from './../assets/images/png/delivery-line.png'
import Heading from './common/Heading'
import { FOODDELIVERY } from '../utils/helper'
import CustomButton from './common/CustomButton'
import Description from './common/Descritpion'


const FoodDelivery = () => {
    return (
        <div className="px-5 py-25 bg-[url(./assets/images/png/best-seller-bg-img.png)] bg-no-repeat bg-cover bg-center">
            <div className=' max-w-[1140px] mx-auto'>
                <div className='flex -mx-3 flex-wrap lg:flex-row flex-col-reverse lg:gap-0 gap-7'>
                    <div className='lg:w-1/2 w-full px-3'>
                        <div className='flex items-center gap-[6px]'>
                            <Description className={'!font-bold !text-[18px] !leading-[120%] text-prime-gradient'} text="Food Delivery" />
                            <img src={line} alt="line" className='w-[60px] h-[1px]' />
                        </div>
                        <Heading className={'text-[48px] w-ful  lg:max-w-[463px] mt-2'}
                            headText="Fast, Fresh & Always On Time" />
                        <Description className={'text-[#373737] mb-3 font-normal mt-[15px] w-full lg:max-w-[463px]'} text="We deliver your favorite pizzas piping hot, just the way you love them — anywhere in town. From cheese-loaded bites to spicy paneer delights, your cravings are just a click away." />
                        <div className='flex flex-col gap-[8px] max-lg:grid max-lg:grid-cols-2  max'>
                            {FOODDELIVERY.map((item, index) => (
                                <div key={index} className='flex gap-[6px]'>
                                    <item.icon />
                                    <Description className={'font-normal'} text={item.info} />
                                </div>
                            ))}
                        </div>
                        <CustomButton className={'mt-6'} btnText="Order Now" />
                    </div>
                    <div className='lg:w-1/2 w-full px-3'>
                        <img src={image} alt="image" className='max-w-[612px] w-full block mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FoodDelivery