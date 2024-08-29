import { useQuery } from "@tanstack/react-query";

const useIndividual = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/individual/${email}`);
            return response.json();
        },
    })
    console.log(data);
    return [data, refetch];
};

export default useIndividual;