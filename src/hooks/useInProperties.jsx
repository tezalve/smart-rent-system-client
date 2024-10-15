import { useQuery } from "@tanstack/react-query";

const useInProperties = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/inproperties/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useInProperties;