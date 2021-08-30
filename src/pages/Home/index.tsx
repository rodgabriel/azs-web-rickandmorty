import { Container, Image } from "./styles";

import Logo from "assets/images/logo.png";

const Home = () => {
  return (
    <Container>
      <Image src={Logo} margin="4rem auto" />
    </Container>
  );
};

export default Home;
