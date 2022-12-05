import { useQuery } from "react-query";
import baseUrl from "../utilities/baseUrl";

const useBookings = () => {
    const { data: bookings, isLoading, refetch } = useQuery('bookings', () => fetch(baseUrl + `/booking/all`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    return [bookings, isLoading, refetch];
};

export default useBookings;