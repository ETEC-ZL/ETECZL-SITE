import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import '@testing-library/jest-dom';
import ToggleThemeButton from './ToggleThemeButton';
import usePersisteState from '../../../data/hooks/PersisteState/usePersisteState';
import LightTheme from '../../themes/Light/Light.theme';

const mockProps = {
  IsDark: false,
  DarkIcon: <div data-testid="dark-icon">Dark Icon</div>,
  LightIcon: <div data-testid="light-icon">Light Icon</div>,
  HandleToggleTheme: jest.fn(),
};

const ToggleThemeButtonTest = () => {
  const [theme] = usePersisteState('themes', LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeButton {...mockProps} />
    </ThemeProvider>
  );
};

describe('ToggleThemeButton', () => {
  it('renders light icon when IsDark is false', () => {
    const { queryByTestId } = render(<ToggleThemeButtonTest />);
    const lightIcon = queryByTestId('light-icon');
    expect(lightIcon).toBeInTheDocument();
    expect(queryByTestId('dark-icon')).not.toBeInTheDocument();
  });

  it('renders dark icon when IsDark is true', () => {
    const propsWithDark = { ...mockProps, IsDark: true };
    const { queryByTestId } = render(
      <ThemeProvider theme={LightTheme}>
        <ToggleThemeButton {...propsWithDark} />
      </ThemeProvider>,
    );
    const darkIcon = queryByTestId('dark-icon');
    expect(darkIcon).toBeInTheDocument();
    expect(queryByTestId('light-icon')).not.toBeInTheDocument();
  });

  it('calls HandleToggleTheme when clicked', () => {
    const { getByTestId } = render(<ToggleThemeButtonTest />);
    fireEvent.click(getByTestId('toggle-theme-button'));
    expect(mockProps.HandleToggleTheme).toHaveBeenCalled();
  });
});
