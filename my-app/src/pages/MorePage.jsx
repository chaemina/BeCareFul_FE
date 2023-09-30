import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { getData } from "../services/getData";

const queryClient = new QueryClient();

const MorePage = () => {
  const { data, isLoading, isError } = useQuery("main", getData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }
  return <></>;
};

export default MorePage;
