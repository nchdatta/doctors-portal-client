import { useQuery } from 'react-query';
import baseUrl from '../utilities/baseUrl';

const useRole = (user) => {
    const { data } = useQuery('role', () => fetch(baseUrl + `/user/role/${user?.email}`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    return [data.role];
};

export default useRole;