import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');

    useEffect(() => {
        if (user) {
            fetch('http://localhost:5000/user/verify-token', {
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
        }

    }, [user]);


    return [token];
};

export default useToken;