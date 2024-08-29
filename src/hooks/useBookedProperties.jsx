import { useQuery } from "@tanstack/react-query";

const useBookedProperties = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/bookedproperties/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useBookedProperties;