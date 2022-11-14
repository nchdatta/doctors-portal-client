import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const Info = () => {
    const info = [
        {
            id: 1,
            img: clock,
            title: 'Opening Hours',
            subTitle: 'Lorem Ipsum is simply dummy text of the pri',
            cardColor: 'bg-gradient-to-r from-secondary to-primary text-white'
        },
        {
            id: 2,
            img: marker,
            title: 'Visit Our Location',
            subTitle: 'Brooklyn, NY 10036, United States',
            cardColor: 'bg-neutral'
        },
        {
            id: 3,
            img: phone,
            title: 'Contact Us Now',
            subTitle: '+000 123 456789',
            cardColor: 'bg-gradient-to-r from-secondary to-primary text-white'
        }
    ];

    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-12'>
            {
                info.map(info => <InfoCard
                    key={info.id}
                    info={info}
                />)
            }
        </section>
    );
};

export default Info;