import React from 'react';
import PageTitle from '../Shared/PageTitle';
import baseUrl from '../../utilities/baseUrl';
import { useQuery } from 'react-query';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(baseUrl + '/user', {
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json())
    );

    if (isLoading) {
        return <div><svg className="animate-spin h-8 w-8 bg-primary mx-auto" viewBox="0 0 24 24"></svg></div>;
    }

    const RemoveUser = id => {
        const confirm = window.confirm('Are you sure want to remove the user?');
        if (confirm) {
            fetch(baseUrl + `/user/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    refetch();
                });
        }

    }

    const MakeAdmin = email => {
        fetch(baseUrl + `/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                refetch();
            });
    }

    return (
        <div>
            <PageTitle title='Users' />
            <h2 className='text-xl mb-3 text-primary'>Users List <span className='text-sm text-neutral'>[Total: {users.length}]</span></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>{user.role}</td>
                                    <td>{
                                        <>
                                            <button
                                                onClick={() => RemoveUser(user._id)}
                                                className='underline'
                                                title='Click to Remove the user.'>Remove</button>
                                            {" "}
                                            {user.role !== 'admin' &&
                                                <button
                                                    onClick={() => MakeAdmin(user.email)}
                                                    className='underline'
                                                    title='Make this user an Admin.'>Make Admin</button>}
                                        </>
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

export default Users;