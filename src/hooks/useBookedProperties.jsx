import { useQuery } from "@tanstack/react-query";

const useBookedProperties = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`https://smart-rent-system-server.vercel.app/bookedproperties/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useBookedProperties;