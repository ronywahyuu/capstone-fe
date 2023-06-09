import { useQuery } from "react-query";

const useFetch = (queryKey, apiCall) => {
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: apiCall,
  });
  return { data, isLoading, isError };
};

export default useFetch;
