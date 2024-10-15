import { useQuery } from "@tanstack/react-query";

const useAllProperties = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/properties`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useAllProperties;