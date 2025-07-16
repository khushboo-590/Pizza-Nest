// import React from 'react'

// const Delicious = () => {
//   return (
//       <div className='max-w-[1140px] mx-auto mt-[113px] mb-[83px]'>
//           <div className=' flex-flex-wrap gap-6'>
//               <div className=' relative'>
//                   <div className='bg-[url(../assets/images/png/delicious-bg-img.png)]'>
//                       <div className=' flex '>
//                           <div className=' max-w-[252px] flex flex-col'>
//                               <h4 className=''>Delicious</h4>
//                               <h5 className=''>Spicy Paneer</h5>
//                               <p className=''>Limited Time</p>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
      
//     </div>
//   )
// }

// export default Delicious

import React from 'react';

const PIZZA_OFFERS = [
    {
        id: 1,
        title: 'SPICY PANEER',
        price: '₹199',
        image: 'https://i.imgur.com/DUlKc4s.png', // replace with actual spicy paneer image
    },
    {
        id: 2,
        title: 'CHEESE BURST',
        price: '₹299',
        image: 'https://i.imgur.com/LmbGJxp.png', // replace with actual cheese burst image
    },
];

const PizzaOffers = () => {
    return (
        <section className="py-10 px-4 max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
            {PIZZA_OFFERS.map((item) => (
                <div
                    key={item.id}
                    className="bg-black text-white rounded-xl p-6 w-[350px] shadow-md relative overflow-hidden"
                >
                    {/* Price Cloud */}
                    <div className="absolute top-4 right-4 bg-black text-white text-sm px-3 py-2 rounded-full border border-white">
                        <div className="text-xs opacity-70">Only</div>
                        <div className="text-lg font-semibold">{item.price}</div>
                    </div>

                    <p className="text-orange-400 text-sm font-semibold">Delicious</p>
                    <h3 className="text-2xl font-bold mt-1 mb-1">{item.title}</h3>
                    <p className="text-sm mb-4 text-gray-300">Limited Time</p>

                    {/* Pizza Image */}
                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-40 w-full object-contain mb-4"
                    />

                    {/* Order Now Button */}
                    <button className="bg-orange-500 hover:bg-orange-600 transition text-white py-2 px-5 rounded-full text-sm">
                        Order Now
                    </button>
                </div>
            ))}
        </section>
    );
};

export default PizzaOffers;
