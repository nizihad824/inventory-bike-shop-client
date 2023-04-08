import React from 'react';

const Review = ({ review }) => {
    const { name, img, review: userReview} = review;  
    return (
        <div className="card shadow-xl bg-white p-6">
             <div className="avatar mr-6 flex justify-center">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt= " "/>
                        </div>
                    </div>
            <div className="card-body text-black">
                <p>{userReview}</p>
                <div className="flex items-center mt-6">
                   
                    <div>
                        <h5 className="text-lg">{name}</h5>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;