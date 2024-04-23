import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ToggleFontSizeButtonType } from '../../../data/@types/ToggleFontSizeButton/ToggleFontSizeButton.type';
import { ToggleFontSizeButtonContainer } from '../../styles/ToggleFontSizeButton/ToggleFontSizeButton.styles';

const ToggleFontSizeButton = (props: ToggleFontSizeButtonType) => {
  return (
    <ToggleFontSizeButtonContainer className="d-flex" fluid>
      <button
        className="border-0 d-flex align-items-center justify-content-center"
        onClick={props.HandleDecrementFontSize}
        data-testid="decrement-font-size-button"
      >
        <AiOutlineMinus size={12} />A
      </button>
      <button
        className="border-0 d-flex align-items-center justify-content-center"
        onClick={props.HandleIncrementFontSize}
        data-testid="increment-font-size-button"
      >
        <AiOutlinePlus size={12} />A
      </button>
    </ToggleFontSizeButtonContainer>
  );
};

export default ToggleFontSizeButton;
