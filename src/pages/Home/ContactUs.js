import React from 'react';
import SectionHeading from '../Shared/SectionHeading';

const ContactUs = () => {
    return (
        <section className='contact-us my-10 py-16 text-center'>
            <SectionHeading title={'Contact Us'} subTitle={'Stay connected with us'} textColor={'text-white'} />
            <div className="mt-8 lg:w-2/4 px-4 mx-auto">
                <form className='flex flex-col gap-3'>
                    <input type="text" placeholder="Email address" className="input input-bordered w-full" />
                    <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                    <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                    <input className='btn btn-primary text-white mt-4 w-2/6 normal-case mx-auto' type="submit" value="SEND" />
                </form>
            </div>
        </section>
    );
};

export default ContactUs;