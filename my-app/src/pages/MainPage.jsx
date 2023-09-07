import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { getData } from "../services/getData";
import Main from "../components/templates/Main";

const queryClient = new QueryClient();

const MainPage = () => {
  const { data, isLoading, isError } = useQuery("main", getData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  const similar_jachigu = data?.data?.similar_jachigu;
  const risk_level = data?.data?.risk_level[0];
  const message = data?.data?.risk_level[1];
  const risk_score = data?.data?.risk_score;

  console.log(data);

  return (
    <>
      <Main
        similar_jachigu={similar_jachigu}
        risk_score={risk_score}
        message={message}
        risk_level={risk_level}
      />
    </>
  );
};

export default MainPage;
