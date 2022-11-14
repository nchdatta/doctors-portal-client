import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png';
import Service from './Service';
import SectionHeading from '../Shared/SectionHeading';

const Services = () => {
    const services = [
        {
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, adipisci?'
        },
        {
            id: 1,
            img: cavity,
            title: 'Cavity Filling',
            subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, adipisci?'
        },
        {
            id: 1,
            img: teeth,
            title: 'Teeth Whitenig',
            subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, adipisci?'
        },
    ];


    return (
        <section className='my-20 px-4 lg:px-12'>
            <div className="text-center mb-8">
                <SectionHeading title={'Our Services'} subTitle={'Services We Provide'} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </section>
    );
};

export default Services;