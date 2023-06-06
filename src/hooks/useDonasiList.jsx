import { useQuery } from "react-query";
import DONASI_API from "../api/donasi-api";

const useDonasiList = (query, userId) => {
  const isUsingUserId = userId ? true : false;
  const useFunction = isUsingUserId
    ? DONASI_API.getMyDonasiFn(userId)
    : DONASI_API.getAllDonasiFn();
  const { isLoading, error, data } = useQuery(
    {
      queryKey: query,
      queryFn: () => useFunction,
    },
    {
      cacheTime: 5000,
    }
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useDonasiList;
