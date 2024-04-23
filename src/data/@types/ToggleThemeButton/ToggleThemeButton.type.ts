import { ReactNode } from 'react';

export type ToggleThemeButtonType = {
  DarkIcon?: ReactNode;
  LightIcon?: ReactNode;
  HandleToggleTheme: () => void;
  IsDark?: boolean;
};
