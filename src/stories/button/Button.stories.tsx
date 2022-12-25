import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from './Button';
import {ButtonProps} from "../../elements/button/button.props";

export default {
  title: 'PB Kit/Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Color = Template.bind({});
Color.args = {
  color: 'primary',
  children: 'دکمه',
};
