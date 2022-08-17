import { useQuery, useQueries } from "@tanstack/react-query";
import API_URL from "../api/API";
function useGetFetch(queryName, fetchName, onSuccess, onError, options) {
  return useQuery(
    [queryName, options],
    async () =>
      API_URL.get(fetchName).then((res) => {
        return res.data;
      }),
    {
      onSuccess,
      onError,
    }
  );
}

export default useGetFetch;
