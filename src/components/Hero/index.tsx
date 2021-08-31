import { Container, ImgLogo } from "./styles";

import Logo from "assets/images/logo.png";

const Hero = () => {
  const initialLogo = {
    opacity: 0,
    scale: 0.7,
    y: 150,
  };

  const animateLogo = {
    opacity: 1,
    scale: 1,
    y: -150,
  };

  return (
    <Container>
      <ImgLogo
        src={Logo}
        margin="1rem auto"
        initial={initialLogo}
        animate={animateLogo}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      />
    </Container>
  );
};

export default Hero;
