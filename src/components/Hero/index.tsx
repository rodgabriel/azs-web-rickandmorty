import { Link } from "react-router-dom";
import { Container, ImgLogo } from "./styles";

// icons
import DownArrow from "assets/icons/down-arrow.png";
import Logo from "assets/images/logo.png";

interface Props {
  goToEpisodesList: () => void;
}

const Hero = ({ goToEpisodesList }: Props) => {
  return (
    <Container>
      <ImgLogo src={Logo} margin="1rem auto" />
      <div className="down-arrow">
        <button onClick={goToEpisodesList}>
          <img src={DownArrow} alt="Acesse a seção de Episódios" />
        </button>
      </div>
    </Container>
  );
};

export default Hero;
