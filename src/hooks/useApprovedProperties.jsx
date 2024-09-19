import { useQuery } from "@tanstack/react-query";

const useApprovedProperties = () => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`https://smart-rent-system-server.vercel.app/approvedproperties/`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useApprovedProperties;