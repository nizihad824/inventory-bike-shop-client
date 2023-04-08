import React from 'react';
import bike1 from '../../../assets/bike-9.jpg';
import bike2 from '../../../assets/bike-10.jpg';
import bike3 from '../../../assets/bike-8.jpg';

const images = [
    { id: 1, src: bike1, alt: 'Bike 1', caption: 'Experience the thrill of the open road with unmatched power and performance.' },
    { id: 2, src: bike2, alt: 'Bike 2', caption: 'Elevate your riding experience with style, comfort, and cutting-edge technology' },
    { id: 3, src: bike3, alt: 'Bike 3', caption: 'Ride with confidence and make every journey unforgettable on our meticulously designed bikes' },
    // Add more images here
];

const Carousel = () => {
    const lastIndex = images.length;

    return (
        <div className="carousel w-full h-1/4">
            {images.map((image, index) =>
            (
                <div key={image.id} id={`slide${image.id}`} className="carousel-item relative w-full h-1/4">
                    <img src={image.src} alt={image.alt} className="w-[1440px] h-[700px] object-cover" />
                    <div className="absolute text-center bottom-0 left-0 bg-black bg-opacity-50 text-white px-5 py-3">
                        <h3 className="text-xl  bg-blue-500 p-3 font-semibold">{image.caption}</h3>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href={`#slide${index === 0 ? lastIndex : index}`} className="btn btn-circle">
                            ❮
                        </a>
                        <a href={`#slide${index + 2 > lastIndex ? 1 : index + 2}`} className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Carousel;
