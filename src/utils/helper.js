
import galleryImg1 from '../assets/images/png/gallery-img-1.png';
import galleryImg2 from '../assets/images/png/gallery-img-2.png';
import galleryImg3 from '../assets/images/png/gallery-img-3.png';
import galleryImg4 from '../assets/images/png/gallery-img-4.png';
import galleryImg5 from '../assets/images/png/gallery-img-5.png';
import galleryImg6 from '../assets/images/png/gallery-img-6.png';
import galleryImg7 from '../assets/images/png/gallery-img-7.png';
import pizzaIcon from '../assets/images/svg/pizza-icon.svg';
import pizzaImg1 from "../assets/images/png/best-seller-img-1.png";
import pizzaImg2 from "../assets/images/png/best-seller-img-2.png";
import pizzaImg3 from "../assets/images/png/best-seller-img-3.png";
import pizzaImg4 from "../assets/images/png/best-seller-img-4.png";
import orderIcon from '../assets/images/svg/order-icon.svg';
import limitedOfferPizza1 from "../assets/images/png/limited-offer-pizza-1.png";
import limitedOfferPizza2 from "../assets/images/png/limited-offer-pizza-2.png";
import locationIcon from '../assets/images/svg/location-icon.svg';
import sellerImg from '../assets/images/png/seller-img.png';
import testImg from '../assets/images/png/testional-img.png';
import testImg1 from '../assets/images/png/test-img-1.png';
import testImg2 from '../assets/images/png/test-img-2.png';
import testImg3 from '../assets/images/png/test-img-3.png';
import exploreImg1 from '../assets/images/png/explore-img-1.png'
import exploreImg2 from '../assets/images/png/explore-img-2.png'
import exploreImg3 from '../assets/images/png/explore-img-2.png'
import ourMenuPizza1 from "../assets/images/png/our-menu-pizza-1.png";
import ourMenuPizza2 from "../assets/images/png/our-menu-pizza-2.png";
import ourMenuPizza3 from "../assets/images/png/our-menu-pizza-3.png";
import { Check, ChefSvg, FacebookSvg, QualitySvg, SupportSvg, InstaSvg, LinkdinSvg, Pizza, Order, Track } from "./icon";


export const HOW_IT_WORKS = [
    {
        id: 1,
        icon: Pizza,
        title: 'Choose Your Pizza',
        desc: 'Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.',
    },
    {
        id: 2,
        icon: Order,
        title: 'Place Your Order',
        desc: 'Confirm your cart, choose delivery or pickup, and pay securely — all in under a minute.',
    },
    {
        id: 3,
        icon: Track,
        title: 'Track & Enjoy',
        desc: 'Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!',
    },
];



import avatar1 from "../assets/images/png/test-img-1.png";
import avatar2 from "../assets/images/png/test-img-2.png";
import avatar3 from "../assets/images/png/test-img-3.png";

export const TESTIMONIAL_AVATAR = [avatar1, avatar2, avatar3];

export const TESTIMONIALS_DATA = [
    {
        text: `The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It 
tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely 
ordering again.`,
        name: "Aarav Mehta",
        role: "Software Developer",
    },
    {
        text: `I loved the spicy tikka flavor. Perfect for movie night! The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It 
tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely 
ordering again.`,
        name: "Priya Sharma",
        role: "Food Blogger",
    },
    {
        text: `Best crust and cheese The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It 
tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely 
ordering again.`,
        name: "Rohan Khanna",
        role: "Marketing Manager",
    },
];



export const ABOUT_US_CARDS_DATA = [
    {
        img: ChefSvg,
        title: "Professional Chefs"
    },
    {
        img: QualitySvg,
        title: "Best Quality Food"
    },
    {
        img: SupportSvg,
        title: "Online Support"
    }
]

export const FOODDELIVERY__DATA = [
    {
        icon: Check,
        info: '30-Minute Delivery Promise',
    },
    {
        icon: Check,
        info: 'Hygienic, Contactless Delivery',
    },
    {
        icon: Check,
        info: 'Real-time Order Tracking',
    },
    {
        icon: Check,
        info: 'Eco-Friendly Packaging',
    },

]
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


export const GALLERY_DATA = {
    leftCol: [galleryImg1, galleryImg4],
    centerTop: [galleryImg2],
    centerBottom: [galleryImg5, galleryImg6],
    rightCol: [galleryImg3, galleryImg7],
};


// export const HOW_IT_WORKS = [
//     {
//         icon: pizzaIcon,
//         title: 'Choose Your Pizza',
//         description:
//             'Browse our mouthwatering menu and pick your favorite from a wide range of cheesy, spicy, and desi-delicious pizzas.',
//     },
//     {
//         icon: orderIcon,
//         title: 'Place Your Order',
//         description:
//             'Confirm your cart, choose delivery or pickup, and pay securely – all in under a minute.',
//     },
//     {
//         icon: locationIcon,
//         title: 'Track & Enjoy',
//         description:
//             'Watch your pizza arrive in real-time, fresh and hot at your door. Unbox happiness and dig in!',
//     },
// ];

export const DELIVERY_FEATURES = [
    "30-Minute Delivery Promise",
    "Fresh Ingredients Every Time",
    "Hygienic, Contactless Delivery",
    "Real-time Order Tracking",
    "Eco-Friendly Packaging",
];

export const BEST_SELLERS = [
    {
        id: 1,
        name: "Tandoori Paneer",
        price: "₹279",
        desc: "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs",
        img: sellerImg,
    },
    {
        id: 2,
        name: "Cheese Overload",
        price: "₹299",
        desc: "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce, buttery golden crust",
        img: sellerImg,
    },
    {
        id: 3,
        name: "Veggie Fiesta",
        price: "₹239",
        desc: "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese",
        img: sellerImg,
    },
    {
        id: 4,
        name: "Masala Paneer",
        price: "₹249",
        desc: "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese",
        img: sellerImg,
    },
];
// export const TESTIMONIALS = [
//     {
//         id: 1,
//         name: 'Aarav Mehta',
//         role: 'Software Developer',
//         quote: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
//         image: testImg,
//         avatars: [testImg1, testImg2, testImg3],
//     },
//     {
//         id: 2,
//         name: 'Sneha Kapoor',
//         role: 'Food Blogger',
//         quote: "Loved the freshness of the ingredients. The crust was just right — crispy on the outside and soft inside. Perfect for my Instagram too!",
//         image: testImg,
//         avatars: [testImg1, testImg2, testImg3],
//     },
//     {
//         id: 3,
//         name: 'Rohan Verma',
//         role: 'Marketing Manager',
//         quote: "I ordered for a team lunch and everyone was blown away! Presentation, taste, packaging — everything was top notch. Will repeat soon.",
//         image: testImg,
//         avatars: [testImg1, testImg2, testImg3],
//     },
// ];

export const MENU_CATEGORIES = [
    'All',
    'Veg Pizzas',
    'Non-Veg Pizzas',
    'Combos & Drinks',
    'Sides & Dips',
];

export const MENU_ITEMS = [
    {
        id: 1,
        title: 'Farmhouse Magic',
        desc: 'Onion, capsicum, tomato, grilled mushroom, mozzarella cheese',
        price: ['₹229', '₹359', '₹499'],
        image: exploreImg1,
        category: 'Veg Pizzas',
    },
    {
        id: 2,
        title: 'Masala Paneer',
        desc: 'Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese',
        price: ['₹279', '₹399', '₹519'],
        image: exploreImg2,
        category: 'Veg Pizzas',
    },
    {
        id: 3,
        title: 'Cheese & Corn',
        desc: 'Sweet corn, mozzarella cheese, tomato sauce',
        price: ['₹249', '₹369', '₹499'],
        image: exploreImg3,
        category: 'Veg Pizzas',
    },
    {
        id: 4,
        title: 'Chicken Dominator',
        desc: 'Loaded with chicken tikka, grilled chicken, peri-peri chicken',
        price: ['₹299', '₹429', '₹569'],
        image: exploreImg1,
        category: 'Non-Veg Pizzas',
    },
    {
        id: 5,
        title: 'Pepperoni Classic',
        desc: 'Pepperoni slices, mozzarella cheese, tomato sauce',
        price: ['₹289', '₹419', '₹559'],
        image: exploreImg2,
        category: 'Non-Veg Pizzas',
    },
    {
        id: 6,
        title: 'Chicken Sausage Blast',
        desc: 'Chicken sausage, onion, mozzarella cheese',
        price: ['₹269', '₹399', '₹539'],
        image: exploreImg3,
        category: 'Non-Veg Pizzas',
    },
    {
        id: 7,
        title: 'Solo Meal Combo',
        desc: '1 Regular Pizza + Garlic Bread + 1 Soft Drink',
        price: ['₹379'],
        image: exploreImg1,
        category: 'Combos & Drinks',
    },
    {
        id: 8,
        title: 'Party Combo',
        desc: '2 Medium Pizzas + 2 Drinks + 2 Garlic Bread',
        price: ['₹749'],
        image: exploreImg3,
        category: 'Combos & Drinks',
    },
    {
        id: 9,
        title: 'Mini Snack Pack',
        desc: '1 Small Pizza + Dip + Juice',
        price: ['₹279'],
        image: exploreImg2,
        category: 'Combos & Drinks',
    },
    {
        id: 10,
        title: 'Garlic Bread Supreme',
        desc: 'Stuffed garlic bread with cheese and herbs',
        price: ['₹149'],
        image: exploreImg3,
        category: 'Sides & Dips',
    },
    {
        id: 11,
        title: 'Cheesy Dip',
        desc: 'Creamy cheesy dip for crust and snacks',
        price: ['₹49'],
        image: exploreImg1,
        category: 'Sides & Dips',
    },
    {
        id: 12,
        title: 'Potato Wedges',
        desc: 'Spicy potato wedges with seasoning',
        price: ['₹89'],
        image: exploreImg2,
        category: 'Sides & Dips',
    },
];

export const LIMITEDOFFER_DATA = [
    {
        title: "SPICY PANEER",
        text: "Only",
        price: "₹199",
        img: limitedOfferPizza1,
    },
    {
        title: "CHEESE BURST",
        text: "Only",
        price: "₹299",
        img: limitedOfferPizza2,
    }
]

export const BESTSELLER_DATA = [
    {
        img: pizzaImg1,
        price: "₹279",
        title: "Tandoori Paneer ",
        description: "Tandoori-marinated paneer, onion, green & red capsicum, mozzarella, Indian herbs"
    },
    {
        img: pizzaImg2,
        price: "₹299",
        title: "Cheese Overload",
        description: "Mozzarella, Cheddar, Processed Cheese, Tomato Sauce,  buttery golden crust"
    },
    {
        img: pizzaImg3,
        price: "₹239",
        title: "Veggie Fiesta",
        description: "Bell peppers, onion, mushrooms, zucchini or brinjal, mozzarella cheese"
    },
    {
        img: pizzaImg4,
        price: "₹249",
        title: "Masala Paneer",
        description: "Masala-marinated paneer, sautéed onions, green & red capsicum, mozzarella cheese"
    },
]

export const MENU_DATA = [
    {
        title1: "Farmhouse Magic1",
        title2: "Farmhouse Magic2",
        title3: "Farmhouse Magic3",
        title4: "Farmhouse Magic4",
        title5: "Farmhouse Magic5",
        price: "₹229 / ₹359 / ₹499",
        desc: "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
        image: ourMenuPizza1
    },
    {
        title1: "Masala Paneer1",
        title2: "Masala Paneer2",
        title3: "Masala Paneer3",
        title4: "Masala Paneer4",
        title5: "Masala Paneer5",
        price: "₹279 / ₹399 / ₹519",
        desc: "Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese",
        image: ourMenuPizza2
    },
    {
        title1: "Solo Meal Combo1",
        title2: "Solo Meal Combo2",
        title3: "Solo Meal Combo3",
        title4: "Solo Meal Combo4",
        title5: "Solo Meal Combo5",
        price: "₹379",
        desc: "1 Regular Pizza + Garlic Bread + 1 Soft Drink",
        image: ourMenuPizza3
    },
];

export const SOCIAL_ICON = [
    {
        icon: FacebookSvg,
        socialLink: "https://www.facebook.com"
    },
    {
        icon: InstaSvg,
        socialLink: "https://www.instagram.com"
    },
    {
        icon: LinkdinSvg,
        socialLink: "https://www.linkedin.com"
    }
]


export const QUICK_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Menu', path: '/menu' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Testimonial', path: '/testimonial' },
    { label: 'Contact', path: '/contact' },

];


export const SUPPORT_LINKS = [
    "Terms & Conditions", "Privacy Policy"
]