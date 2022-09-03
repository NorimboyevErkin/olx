import { useQuery, useQueries } from "@tanstack/react-query";
import API_URL from "../api/API";
function usePostFetch(
  newPost,
  queryName,
  fetchName,
  onSuccess,
  onError,
  options
) {
  return useQuery(
    [queryName, options],
    async () =>
      API_URL.post(fetchName, newPost).then((res) => {
        return res.data;
      }),
    {
      onSuccess,
      onError,
    }
  );
}

export default usePostFetch;
