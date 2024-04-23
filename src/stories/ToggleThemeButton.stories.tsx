import type { Meta, StoryObj } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleFontSizeButton from '../ui/components/ToggleFontSizeButton/ToggleFontSizeButton';
import { fn } from '@storybook/test';
//import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const meta = {
  title: 'Components/Toggle Font Size Button',
  component: ToggleFontSizeButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    HandleDecrementFontSize: fn(),
    HandleIncrementFontSize: fn(),
  },
} satisfies Meta<typeof ToggleFontSizeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Togglefontsizebutton: Story = {};
