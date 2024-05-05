import type { Meta, StoryObj } from '@storybook/react';
import AccessibilityButtons from '../ui/components/AccessibilityButtons/AccessibilityButtons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fn } from '@storybook/test';

const meta = {
  title: 'Partials/Acessibility Buttons',
  component: AccessibilityButtons,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    HandleToggleTheme: fn(),
    IsDark: false,
    HandleDecrementFontSize: fn(),
    HandleIncrementFontSize: fn(),
  },
} satisfies Meta<typeof AccessibilityButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Accessibilitybuttons: Story = {};
