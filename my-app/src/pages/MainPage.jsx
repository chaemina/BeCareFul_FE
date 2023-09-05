import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { getData } from "../services/getData";
// import Main from "../components/templates/Main";
const queryClient = new QueryClient(); // QueryClient를 초기화

const MainPage = () => {
  const { data } = useQuery("main", getData);
  // const missing_items_count = data.data.missing_items_count; // 분실물 개수
  // const risk_level = data.data.risk_level[0]; // 위험 수준
  // const message = data.data.risk_level[1]; // 문구
  // const risk_score = data.data.risk_score; // 위험도
  // const similar_jachigu = data.data.similar_jachigu; // 위치

  // console.log(data);
  return (
    // <Main
    // similar_jachigu={similar_jachigu}
    // risk_score={risk_score}
    // message={message}
    // risk_level={risk_level}
    // missing_items_count={missing_items_count}
    // />
    <div> 제발 </div>
  );
};

export default MainPage;
