// ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {NavLink} from 'react-router-dom'

// Image imports
import image1 from '../assets/to-do.png';
import image2 from '../assets/gpt.png';
import image3 from '../assets/calculator.png';
import image4 from '../assets/bmi.png';
import image5 from '../assets/passgen.png';
import image6 from '../assets/weatherapp.png';
import image7 from '../assets/lp.png';
import image8 from '../assets/currency.png';

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        onClick={onClick}
    >
        <ChevronRight size={24} />
    </button>
);

const PrevArrow = ({ onClick }) => (
    <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10"
        onClick={onClick}
    >
        <ChevronLeft size={24} />
    </button>
);

const ImageCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    // const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    const images = [
        {
            image:image1,
            link:'https://todo-mern-kappa-dusky.vercel.app/'
        },
        {
            image:image2,
            link:'https://my-own-gpt-frontend.vercel.app/'
        },
        {
            image:image3,
            link:'https://githubsuer1.github.io/Calculater/'
        },
        {
            image:image4,
            link:'https://githubsuer1.github.io/BMI-Generator/'
        },
        {
            image:image5,
            link:'https://githubsuer1.github.io/PasswordGenerator/'
        },
        {
            image:image6,
            link:'https://githubsuer1.github.io/WeatherApp/'
        },
        {
            image:image7,
            link:'https://githubsuer1.github.io/LandingPage/'
        },
        {
            image:image8,
            link:'https://githubsuer1.github.io/Currencyconverter/'
        }
    ]




    return (
        <div className="w-full shadow-2xl max-w-4xl mx-auto py-8 relative p-4">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index}>
                        <NavLink to={src.link}><img
                            src={src.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-96 sm:h-full sm:object-cover shadow-md rounded"
                        /></NavLink>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageCarousel;
