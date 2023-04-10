import React from 'react';
import bike10 from "../../../../assets/bike-10.jpg"


const ContactUs = () => {
    return (

        <div className='hero  mt-16  h-96; ' style={{ backgroundImage: `url(${bike10})` }}>
            <div className='mt-16'>
                
                <h1 className="text-3xl font-bold text-white">Stay connected with us</h1>
                <div className='mt-6 mb-16 py-3 grid grid-cols-1'>
                    <input type="text" placeholder="Your email address" className="input input-bordered  mt-3" />
                    <input type="text" placeholder="Subject" className="input input-bordered mt-3" />
                    <textarea type="text" className="textarea input input-bordered mt-3 mb-4" placeholder="message"></textarea>
                    
                </div>
               
            </div>
            <div>


            </div>
        </div>


    );
};

export default ContactUs;