import React from 'react';
import { useQuery } from 'react-query';
import baseUrl from '../../utilities/baseUrl';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const Doctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch(baseUrl + '/doctor', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) { return <Loading /> }


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
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                    }
                });
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
                            <th>Photo</th>
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
                                    <td>
                                        <div className="avatar">
                                            <div className="w-16 rounded-full">
                                                <img src={doctor.image} alt={doctor.name} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>{doctor.speciality}</td>
                                    <td>{<button className='btn btn-sm btn-primary'
                                        onClick={() => RemoveDoctor(doctor._id)}
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