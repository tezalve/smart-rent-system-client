import { useQuery } from "@tanstack/react-query";

const useApprovedProperties = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/approvedproperties/`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useApprovedProperties;