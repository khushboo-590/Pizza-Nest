
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
import sellerImg from '../assets/images/png/seller-img.png';
import testImg from '../assets/images/png/testional-img.png';
import testImg1 from '../assets/images/png/test-img-1.png';
import testImg2 from '../assets/images/png/test-img-2.png';
import testImg3 from '../assets/images/png/test-img-3.png';
import exploreImg1 from '../assets/images/png/explore-img-1.png'
import exploreImg2 from '../assets/images/png/explore-img-2.png'
import exploreImg3 from '../assets/images/png/explore-img-2.png'




export const ABOUT_CARD_DATA = [
    {  title: 'Professional Chefs' },
    { title: 'Best Quality Food' },
    { title: 'Online Support' },
];



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
export const TESTIMONIALS = [
    {
        id: 1,
        name: 'Aarav Mehta',
        role: 'Software Developer',
        quote: "The Masala Paneer Pizza was bursting with flavor! The paneer was perfectly marinated in Indian spices, and the balance of onions, capsicum, and cheese was spot on. It tasted like my favorite desi snack—just in pizza form! Super satisfying and definitely ordering again.",
        image: testImg,
        avatars: [testImg1, testImg2, testImg3],
    },
    {
        id: 2,
        name: 'Sneha Kapoor',
        role: 'Food Blogger',
        quote: "Loved the freshness of the ingredients. The crust was just right — crispy on the outside and soft inside. Perfect for my Instagram too!",
        image: testImg,
        avatars: [testImg1, testImg2, testImg3],
    },
    {
        id: 3,
        name: 'Rohan Verma',
        role: 'Marketing Manager',
        quote: "I ordered for a team lunch and everyone was blown away! Presentation, taste, packaging — everything was top notch. Will repeat soon.",
        image: testImg,
        avatars: [testImg1, testImg2, testImg3],
    },
];

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


