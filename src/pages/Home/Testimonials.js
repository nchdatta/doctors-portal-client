import React from 'react';
import SectionHeading from '../Shared/SectionHeading';
import quote from '../../assets/icons/quote.svg';
import user1 from '../../assets/images/people1.png'
import user2 from '../../assets/images/people2.png'
import user3 from '../../assets/images/people3.png'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const users = [
        {
            id: 1,
            name: 'Winson Herry',
            address: 'Los Angeles',
            img: user1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 2,
            name: 'Jason Roy',
            address: 'New York',
            img: user2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: 3,
            name: 'Will Smith',
            address: 'United Kingdom',
            img: user3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
    ];

    return (
        <section className='my-16 px-4 lg:px-12'>
            <div className='flex justify-between items-center mb-10'>
                <div><SectionHeading title={'Testimonial'} subTitle={'What Our Patients Says'} /></div>
                <img src={quote} className='w-1/6' alt="Quote" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    users.map(user => <Testimonial
                        key={user.id}
                        user={user}
                    />)
                }
            </div>

        </section>
    );
};

export default Testimonials;