import Container from "../atoms/Container";
import Inner from "../atoms/Inner";
import GoLoginBtn from "../organisms/GoLoginBtn";
import GoLoginTitle from "../organisms/GoLoginTitle";

const GoLogin = () => {
  return (
    <>
      <Container>
        <Inner className="items-center">
          <GoLoginTitle />
        </Inner>
        <Inner className="items-center bottom-16">
          <GoLoginBtn />
        </Inner>
      </Container>
    </>
  );
};

export default GoLogin;
