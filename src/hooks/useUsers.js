import { useQuery } from "react-query";
import baseUrl from "../utilities/baseUrl";

const useUsers = () => {
    const { data: users, refetch } = useQuery('users', () => fetch(baseUrl + '/user', {
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    return [users, refetch]
};

export default useUsers;