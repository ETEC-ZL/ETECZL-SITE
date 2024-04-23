import type { Meta, StoryObj } from '@storybook/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleThemeButton from '../ui/components/ToggleThemeButton/ToggleThemeButton';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Toggle ThemeButton',
  component: ToggleThemeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    DarkIcon: <FaMoon />,
    LightIcon: <FaSun />,
    IsDark: true,
    HandleToggleTheme: fn(),
  },
} satisfies Meta<typeof ToggleThemeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Togglethemebutton: Story = {};
