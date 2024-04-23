import { render, fireEvent } from '@testing-library/react';
import ToggleFontSizeButton from './ToggleFontSizeButton';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import usePersisteState from '../../../data/hooks/PersisteState/usePersisteState';
import LightTheme from '../../themes/Light/Light.theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ToggleFontSizeButtonTest = (props: any) => {
  const [theme] = usePersisteState('themes', LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <ToggleFontSizeButton {...props} />
    </ThemeProvider>
  );
};

describe('ToggleFontSizeButton', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <ToggleFontSizeButtonTest HandleDecrementFontSize={() => {}} HandleIncrementFontSize={() => {}} />,
    );

    expect(getByTestId('decrement-font-size-button')).toBeInTheDocument();
    expect(getByTestId('increment-font-size-button')).toBeInTheDocument();
  });

  it('calls HandleDecrementFontSize when "-" button is clicked', () => {
    const mockDecrementFontSize = jest.fn();
    const { getByTestId } = render(
      <ToggleFontSizeButtonTest HandleDecrementFontSize={mockDecrementFontSize} HandleIncrementFontSize={() => {}} />,
    );

    fireEvent.click(getByTestId('decrement-font-size-button'));
    expect(mockDecrementFontSize).toHaveBeenCalledTimes(1);
  });

  it('calls HandleIncrementFontSize when "+" button is clicked', () => {
    const mockIncrementFontSize = jest.fn();
    const { getByTestId } = render(
      <ToggleFontSizeButtonTest HandleDecrementFontSize={() => {}} HandleIncrementFontSize={mockIncrementFontSize} />,
    );

    fireEvent.click(getByTestId('increment-font-size-button'));
    expect(mockIncrementFontSize).toHaveBeenCalledTimes(1);
  });
});
