import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../utilities/firebase.init';
import Loading from '../Shared/Loading';
import PageTitle from '../Shared/PageTitle';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) { return <Loading /> }

    return (
        <div>
            <PageTitle title='Profile' />
            <h2 className='text-xl mb-3 text-primary'>Profile</h2>

            <div className="flex items-start justify-start">
                <div className="flex flex-col justify-center items-start">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24 ring ring-primary ring-offset-base-100 ring-offset-2">
                            {user.photoURL ?
                                <img src={user.photoURL} alt={user.displayName} /> :
                                // Will display fist name 1st character
                                <span className="text-3xl"> {user.displayName.split(" ")[0][0]} </span>}
                        </div>
                    </div>
                    <h2 className='text-2xl font-semibold mt-3'>{user.displayName}</h2>
                    <h3 className='text-md font-normal mt-1'>Email: {user.email}</h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;