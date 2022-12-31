import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ToggleButton} from '../../lib/toggle-button/toggle-button'

export default {
  title: 'PB Kit/Atoms/ToggleButton',
  component: ToggleButton,
  argTypes: {},
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args: any) => <ToggleButton {...args} />;

export const Color = Template.bind({});
Color.args = {
  children: 'Toggle Button',
  value: 'Toggle Button',
};
