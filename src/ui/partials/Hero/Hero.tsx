import { Button, Container } from 'react-bootstrap';
import { HeroContainer, HeroContent } from '../../styles/Hero/Hero.style';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Container>
          <div className="w-50 pt-5 h-100">
            <h3 className="mt-5">ETEC ZONA LESTE</h3>
            <h1 className="mt-4">
              Conheça a Etec Zona Leste: Excelência em Educação Técnica na Região da Zona Leste de São Paulo
            </h1>
            <Button className="mt-4 bg-danger border-0 fw-bold">Conheça a Nossa História</Button>
          </div>
        </Container>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
