import { useQuery } from "@tanstack/react-query";

const useAllProperties = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`https://smart-rent-system-server.vercel.app/properties`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useAllProperties;