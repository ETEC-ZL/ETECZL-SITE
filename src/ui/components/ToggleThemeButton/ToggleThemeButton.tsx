import { ToggleThemeButtonType } from '../../../data/@types/ToggleThemeButton/ToggleThemeButton.type';
import { ToggleThemeButtonStyled } from '../../styles/ToggleThemeButton/ToggleThemeButton.styles';

const ToggleThemeButton = (props: ToggleThemeButtonType) => {
  return (
    <ToggleThemeButtonStyled
      className="border-0 d-flex align-items-center justify-content-center"
      onClick={props.HandleToggleTheme}
      data-testid="toggle-theme-button"
    >
      {props.IsDark && props.DarkIcon}
      {!props.IsDark && props.LightIcon}
    </ToggleThemeButtonStyled>
  );
};

export default ToggleThemeButton;
