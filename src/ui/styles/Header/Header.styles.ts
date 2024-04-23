import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
  button {
    font-size: 1.2rem;
  }
`;
