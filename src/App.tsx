import { ThemeProvider } from 'styled-components';
import Pages from './pages';
import usePersisteState from './data/hooks/PersisteState/usePersisteState';
import 'bootstrap/dist/css/bootstrap.min.css';
import LightTheme from './ui/themes/Light/Light.theme';

const App = () => {
  const [theme, setTheme] = usePersisteState('themes', LightTheme);

  return (
    <ThemeProvider theme={theme}>
      <Pages theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
};

export default App;
