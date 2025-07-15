// import chefImg from '../assets/images/png/chef-img.png';
// import cookImg from '../assets/images/png/cook-img.png';
// import supportImg from '../assets/images/png/support-img.png';

// export const ABOUT_CARD_DATA = [
//     {img: chefImg, title: 'Professional Chefs' },
//     { img: cookImg, title: 'Professional Chefs' },
//     { img: supportImg, title: 'Professional Chefs' },
import galleryImg1 from '../assets/images/png/gallery-img-1.png';
import galleryImg2 from '../assets/images/png/gallery-img-2.png';
import galleryImg3 from '../assets/images/png/gallery-img-3.png';
import galleryImg4 from '../assets/images/png/gallery-img-4.png';
import galleryImg5 from '../assets/images/png/gallery-img-5.png';
import galleryImg6 from '../assets/images/png/gallery-img-6.png';
import galleryImg7 from '../assets/images/png/gallery-img-7.png';
import pizzaIcon from '../assets/images/svg/pizza-icon.svg';
import orderIcon from '../assets/images/svg/order-icon.svg';
import locationIcon from '../assets/images/svg/location-icon.svg';
// ];
 export const FOOTER_LINKS = [
    {
        heading: 'Quick Links',
        links: ['Home', 'About Us', 'Menu', 'Gallery', 'Testimonial', 'Contact'],
    },
    {
        heading: 'Support',
        links: ['Terms & Conditions', 'Privacy Policy'],
    },
];

export const GALLERY_DATA = [
    [galleryImg1, galleryImg4],
    [galleryImg2, [galleryImg5, galleryImg6]],
    [galleryImg3, galleryImg7],
];


export const HOW_IT_WORKS = [
    {
        icon: pizzaIcon,
        title: 'Choose Your Pizza',
        description:
            'Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.',
    },
    {
        icon: orderIcon,
        title: 'Place Your Order',
        description:
            'Confirm your cart, choose delivery or pickup, and pay securely – all in under a minute.',
    },
    {
        icon: locationIcon,
        title: 'Track & Enjoy',
        description:
            'Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!',
    },
];
