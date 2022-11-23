import React, { useEffect, useState } from 'react';
import baseUrl from '../../utilities/baseUrl';
import PageTitle from '../Shared/PageTitle';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch(baseUrl + '/doctor', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    const RemoveDoctor = id => {
        const confirm = window.confirm('Are you sure want to remove the doctor?');
        if (confirm) {
            fetch(baseUrl + `/doctor/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then();
        }

    }

    return (
        <div>
            <PageTitle title='Doctors' />
            <h2 className='text-xl mb-3 text-primary'>Doctors List <span className='text-sm text-neutral'>[Total: {doctors.length}]</span> </h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) =>
                                <tr key={doctor._id}>
                                    <th>{index + 1}</th>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>{<button
                                        onClick={() => RemoveDoctor(doctor._id)}
                                        className='underline'
                                        title='Click to Remove the user.'>Remove</button>
                                    }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Doctors;