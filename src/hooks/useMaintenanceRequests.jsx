import { useQuery } from "@tanstack/react-query";

const useMaintenanceRequests = (email) => {
    const { refetch, data } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/maintenancerequests/${email}`);
            return response.json();
        },
    })
    return [data, refetch];
};

export default useMaintenanceRequests;