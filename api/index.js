import useFetch from "use-http";
// Constants
import { APIS } from "../constants";

export const useQuery = () => {
  const { get, response, loading, error } = useFetch(APIS.BASEURL);

  const getData = async (url) => {
    const data = await get(url);
    return data.data;
  };

  return {
    loading,
    response,
    error,
    getData,
  };
};
