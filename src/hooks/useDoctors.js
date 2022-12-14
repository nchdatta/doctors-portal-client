import { useQuery } from "react-query";
import baseUrl from "../utilities/baseUrl";

const useDoctors = () => {
    const { data: doctors, refetch } = useQuery('doctors', () => fetch(baseUrl + '/doctor', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    return [doctors, refetch];
};

export default useDoctors;