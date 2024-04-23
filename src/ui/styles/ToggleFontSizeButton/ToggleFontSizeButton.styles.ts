import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const ToggleFontSizeButtonContainer = styled(Container)`
  * {
    font-size: 16px !important;
  }
  button {
    color: ${(props) => props.theme.colors.fontColor};
    border: none;
    outline: none;
    background: none;
    padding: 5px 10px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
