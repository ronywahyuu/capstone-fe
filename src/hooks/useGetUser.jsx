import { useQuery } from "react-query";
import USER_API from "../api/user-api";

// const authUserId = JSON.parse(localStorage.getItem("auth_user"))?.id;
// const uid = uidFromLocalStorage ? uidFromLocalStorage : 1;
const useGetUser = (userId, query) => {
  const { isLoading, error, data } = useQuery({
    queryKey: query,
    queryFn: () => USER_API.getUserFn(userId),
  });

  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;

  return {
    data: data.data.user,
    error,
    isLoading,
  };
};

export default useGetUser;
