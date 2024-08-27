import { useQuery } from '@tanstack/react-query'

const useUsers = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch("http://localhost:5000/users");
            return response.json();
        },
    })
    return [data, refetch];
};

export default useUsers;