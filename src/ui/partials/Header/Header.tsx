import { HeaderType } from '../../../data/@types/Header/Header.type';
import { HeaderContainer } from '../../styles/Header/Header.styles';
import AccessibilityButtons from '../../components/AccessibilityButtons/AccessibilityButtons';

const Header = (props: HeaderType) => {
  return (
    <HeaderContainer className="w-100 fixed-top top-0 d-flex align-content-center justify-content-end px-5">
      <AccessibilityButtons
        HandleToggleTheme={props.HandleToggleTheme}
        IsDark={props.IsDark}
        HandleDecrementFontSize={props.HandleDecrementFontSize}
        HandleIncrementFontSize={props.HandleIncrementFontSize}
      />
    </HeaderContainer>
  );
};

export default Header;
