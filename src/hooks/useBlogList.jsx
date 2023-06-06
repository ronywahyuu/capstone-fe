import { useQuery } from "react-query";
import BLOG_API from "../api/blog-api";

const useBlogList = (query, userId) => {
  const isUsingUserId = userId ? true : false;
  const useFunction = isUsingUserId
    ? BLOG_API.getMyBlogFn(userId)
    : BLOG_API.getAllBlogFn();

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

export default useBlogList;
