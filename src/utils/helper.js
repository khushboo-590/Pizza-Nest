import galleryImg1 from '../assets/images/png/gallery-img-1.png';
import galleryImg2 from '../assets/images/png/gallery-img-2.png';
import galleryImg3 from '../assets/images/png/gallery-img-3.png';
import galleryImg4 from '../assets/images/png/gallery-img-4.png';
import galleryImg5 from '../assets/images/png/gallery-img-5.png';
import galleryImg6 from '../assets/images/png/gallery-img-6.png';
import galleryImg7 from '../assets/images/png/gallery-img-7.png';
import pizzaImg1 from "../assets/images/png/best-seller-img-1.png";
import pizzaImg2 from "../assets/images/png/best-seller-img-2.png";
import pizzaImg3 from "../assets/images/png/best-seller-img-3.png";
import pizzaImg4 from "../assets/images/png/best-seller-img-4.png";
import limitedImg1 from "../assets/images/png/limited-offer-pizza-1.png";
import limitedImg2 from "../assets/images/png/limited-offer-pizza-2.png";
import ourMenuPizza1 from "../assets/images/png/our-menu-pizza-1.png";
import ourMenuPizza2 from "../assets/images/png/our-menu-pizza-2.png";
import ourMenuPizza3 from "../assets/images/png/our-menu-pizza-3.png";
import avatar1 from "../assets/images/png/test-img-1.png";
import avatar2 from "../assets/images/png/test-img-2.png";
import avatar3 from "../assets/images/png/test-img-3.png";
import { Check, ChefSvg, FacebookSvg, QualitySvg, SupportSvg, InstaSvg, LinkdinSvg, Pizza, Order, Track } from "./icon";

export const Nav_DATA = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Customize Pizza', path: '/customize' },
    { label: 'Offers', path: '/offers' },
    { label: 'About Us', path: '/about' },
];
export const HOW_IT_WORKS_DATA = [
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

export const DELIVERY__DATA = [
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

export const GALLERY_DATA = {
    leftCol: [galleryImg1, galleryImg4],
    centerTop: [galleryImg2],
    centerBottom: [galleryImg5, galleryImg6],
    rightCol: [galleryImg3, galleryImg7],
};

export const LIMITED_DATA = [
    {
        title: "SPICY PANEER",
        text: "Only",
        price: "₹199",
        img: limitedImg1,
    },
    {
        title: "CHEESE BURST",
        text: "Only",
        price: "₹299",
        img: limitedImg2,
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

export const MENU_DATA = {
    "All": [
        {
            title: "Farmhouse Magic",
            price: "₹229 / ₹359 / ₹499",
            desc: "Onion, capsicum, tomato, grilled mushroom, mozzarella cheese",
            image: ourMenuPizza1,
        },
        {
            title: "Masala Paneer",
            price: "₹279 / ₹399 / ₹519",
            desc: "Masala-marinated paneer, sautéed onions, capsicum, mozzarella cheese",
            image: ourMenuPizza2,
        },
        {
            title: "Solo Meal Combo",
            price: "₹379",
            desc: "1 Regular Pizza + Garlic Bread + 1 Soft Drink",
            image: ourMenuPizza3,
        }
    ],
    "Veg Pizzas": [
        {
            title: "Green Delight",
            price: "₹229",
            desc: "Loaded with fresh veggies & mozzarella cheese",
            image: galleryImg1,
        },
        {
            title: "Paneer Paradise",
            price: "₹249",
            desc: "Spicy paneer cubes and onions & mozzarella cheese",
            image: ourMenuPizza1,
        },
        {
            title: "Corn Treat",
            price: "₹219",
            desc: "Golden corn and cheese & mozzarella cheese",
            image: ourMenuPizza2,
        }
    ],
    "Non-Veg Pizzas": [
        {
            title: "Chicken Supreme",
            price: "₹299",
            desc: "Grilled chicken with spicy sauce",
            image: ourMenuPizza1,
        },
        {
            title: "BBQ Chicken",
            price: "₹319",
            desc: "BBQ chicken and cheese mix",
            image: ourMenuPizza2,
        },
        {
            title: "Pepperoni Burst",
            price: "₹349",
            desc: "Classic pepperoni loaded pizza",
            image: galleryImg1,
        }
    ],
    "Combos & Drinks": [
        {
            title: "Pepsi + Garlic Bread",
            price: "₹129",
            desc: "500ml soft drink + garlic bread",
            image: ourMenuPizza3,
        },
        {
            title: "Solo Combo",
            price: "₹199",
            desc: "1 pizza + 1 drink",
            image: ourMenuPizza2,
        },
        {
            title: "Party Combo",
            price: "₹399",
            desc: "2 pizzas + 2 drinks",
            image: ourMenuPizza1,
        }
    ],
    "Sides & Dips": [
        {
            title: "Garlic Breadsticks",
            price: "₹79",
            desc: "Crispy and buttery garlic breadsticks",
            image: ourMenuPizza1,
        },
        {
            title: "Choco Lava Cake",
            price: "₹99",
            desc: "Warm chocolate-filled dessert",
            image: ourMenuPizza2,
        },
        {
            title: "Cheesy Dip",
            price: "₹39",
            desc: "Smooth cheesy dip for sides",
            image: ourMenuPizza3,
        }
    ]
};

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