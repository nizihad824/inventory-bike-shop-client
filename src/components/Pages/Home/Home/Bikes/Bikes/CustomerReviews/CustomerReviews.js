import React from 'react';
import Review from './Review';

const CustomerReviews = () => {
    const reviews = [
        {
          id: 1,
          name: "Jane Doe",
          img: "https://randomuser.me/api/portraits/women/1.jpg",
          review:
            "The Versys 650 LT is an amazing motorcycle. I love how versatile it is and how comfortable it is to ride. The electronics are top-notch and the panniers are very spacious."
        },
        {
          id: 2,
          name: "John Doe",
          img: "https://randomuser.me/api/portraits/men/1.jpg",
          review:
            "I've been riding the Versys 650 LT for a few months now and I couldn't be happier. The engine is smooth and responsive, and the suspension provides a comfortable ride. I highly recommend this motorcycle."
        },
        {
          id: 3,
          name: "Jennifer Doe",
          img: "https://randomuser.me/api/portraits/women/2.jpg",
          review:
            "The Versys 650 LT is the perfect motorcycle for long trips. I love how comfortable it is and how much storage it provides. The traction control system gives me added confidence in various riding conditions."
        }
      ];

    return (
        <section className="p-16 bg-blue-100">
        <div className="flex justify-between">
          <div className='my-6'>
           
            <h2 className="text-4xl text-black">Customers Reviews</h2>
          </div>
          
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Review key={review.id}
             review={review} />
          ))}
        </div>
      </section>
    );
};

export default CustomerReviews;