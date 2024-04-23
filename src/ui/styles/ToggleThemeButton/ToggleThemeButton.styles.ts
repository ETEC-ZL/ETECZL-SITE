import styled from 'styled-components';

export const ToggleThemeButtonStyled = styled.button`
  color: ${(props) => props.theme.colors.fontColor};
  font-size: 16px !important;
  outline: none;
  background: none;
  margin-bottom: 3px;
  &:hover {
    opacity: 0.9;
  }
`;
