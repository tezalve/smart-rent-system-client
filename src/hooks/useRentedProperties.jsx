import { useQuery } from "@tanstack/react-query";

const useRentedProperties = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/rentedproperties/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useRentedProperties;