import { useQuery } from "react-query";
import DONASI_API from "../api/donasi-api";

const useGetPost = (postId) => {
  const { isLoading, error, data } = useQuery({
    queryKey: "getSingleDonasi",
    queryFn: () => DONASI_API.getSingleDonasiFn(postId),
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetPost;
