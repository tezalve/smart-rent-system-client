import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch("https://smart-rent-system-server.vercel.app/users");
            return response.json();
        },
    })
    return [data, refetch];
};

export default useUsers;