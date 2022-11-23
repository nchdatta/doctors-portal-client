import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import baseUrl from "../utilities/baseUrl";
import auth from "../utilities/firebase.init";

const useToken = () => {
    const [user] = useAuthState(auth);
    const [token, setToken] = useState('');

    useEffect(() => {
        if (user) {
            // JWT Token Verification 
            fetch(baseUrl + '/user/verify-token', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then(data => {
                    const accessToken = data.accessToken;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken);
                })
                .catch(err => console.log(err.message));


            // Insert/Update a user 
            fetch(baseUrl + '/user', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ email: user.email })
            })
                .then(res => res.json())
                .then();

        }

    }, [user]);


    return [token];
};

export default useToken;