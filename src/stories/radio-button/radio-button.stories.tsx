import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {RadioButton} from './radio-button';
import {RadioButtonProps} from "../../lib/radio-button/radio-button.props";

export default {
  title: 'PB Kit/Atoms/RadioButton',
  component: RadioButton,
  argTypes: {},
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (args: RadioButtonProps) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
};
