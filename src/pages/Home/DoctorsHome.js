import React from 'react';
import useDoctors from '../../hooks/useDoctors';
import SectionHeading from '../Shared/SectionHeading';
import Doctor from './Doctor';

const DoctorsHome = () => {
    const [doctors] = useDoctors();

    return (
        <section className='my-14 px-4 lg:px-8'>
            <div className="text-center mb-10">
                <SectionHeading title={'Doctors'} subTitle={'Best, Experienced Doctors'} />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                {
                    doctors?.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    />)
                }
            </div>
        </section>
    );
};

export default DoctorsHome;