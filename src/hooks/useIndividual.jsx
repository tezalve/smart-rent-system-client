import { useQuery } from "@tanstack/react-query";

const useIndividual = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`https://smart-rent-system-server.vercel.app/individual/${email}`);
            return response.json();
        },
    })
    console.log(data);
    return [data, refetch];
};

export default useIndividual;