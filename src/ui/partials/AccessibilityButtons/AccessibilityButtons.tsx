import { AccessibilityButtonsType } from '../../../data/@types/AccessibilityButtons/AccessibilityButtons.type';
import ToggleFontSizeButton from '../../components/ToggleFontSizeButton/ToggleFontSizeButton';
import ToggleThemeButton from '../../components/ToggleThemeButton/ToggleThemeButton';
import { FaSun, FaMoon } from 'react-icons/fa';

const AccessibilityButtons = (props: AccessibilityButtonsType) => {
  return (
    <div className="d-flex ">
      <ToggleThemeButton
        DarkIcon={<FaMoon />}
        LightIcon={<FaSun />}
        HandleToggleTheme={props.HandleToggleTheme}
        IsDark={props.IsDark}
      />
      <ToggleFontSizeButton
        HandleDecrementFontSize={props.HandleDecrementFontSize}
        HandleIncrementFontSize={props.HandleIncrementFontSize}
      />
    </div>
  );
};

export default AccessibilityButtons;
