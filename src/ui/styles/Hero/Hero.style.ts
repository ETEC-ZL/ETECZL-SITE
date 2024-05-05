import styled from 'styled-components';

export const HeroContainer = styled.div`
  width: 100vw;
  height: 70vh;
  background: url('/images/hero.webp');
  background-size: cover;
  background-position: center;
  position: relative;
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;

  h3 {
    color: #ccc;
  }

  h1 {
    color: #fff;
  }
`;
