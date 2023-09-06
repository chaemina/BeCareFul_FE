import { PC, Mobile } from "../components/atoms/Resoinsive";
import GoLogin from "../components/templates/GoLogin";

const GoLoginPage = () => {
  return (
    <>
      <PC>
        <GoLogin />
      </PC>
      <Mobile>
        <div>모바일</div>
      </Mobile>
    </>
  );
};

export default GoLoginPage;
