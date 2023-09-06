import { Mobile, PC } from "../components/atoms/Resoinsive";
import Start from "../components/templates/Start";

const StartPage = () => {
  return (
    <>
      {/* PC */}
      <PC>
        <Start />
      </PC>
      <Mobile>
        <div className="text-white">모바일</div>
      </Mobile>
    </>
  );
};

export default StartPage;
