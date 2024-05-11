import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
export const usePostJobs = () => {

    const{data, isLoading, refetch} = useQuery({
        queryKey: ['postJobs'],
        queryFn: async () =>{
            const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/postJobs`)
            return data
        }
    })
    return {data, isLoading, refetch}
}
