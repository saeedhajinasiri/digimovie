import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from './button';
import {ButtonProps} from "../../lib/button/button.props";

export default {
  title: 'PB Kit/Atoms/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

const ColorTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button color={'primary'} children={'Primary'} {...args} />
      <Button color={'secondary'} children={'Secondary'} {...args} />
      <Button color={'tertiary'} children={'Tertiary'} {...args} />
      <Button color={'info'} children={'Info'} {...args} />
      <Button color={"danger"} children={'Danger'} {...args} />
      <Button color={"warning"} children={'Warning'} {...args} />
      <Button color={"success"} children={'Success'} {...args} />
      <Button color={"purple"} children={'Purple'} {...args} />
      <Button color={"control"} children={'Control'} {...args} />
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button size={'tiny'} children={'tiny button'} {...args} />
      <Button size={'small'} children={'small button'} {...args} />
      <Button size={'medium'} children={'medium button'} {...args} />
      <Button size={'large'} children={'large button'} {...args} />
      <Button size={"huge"} children={'huge button'} {...args} />
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button variant={'text'} children={'text button'} {...args} />
      <Button variant={'outlined'} children={'outlined button'} {...args} />
      <Button variant={'contained'} children={'contained button'} {...args} />
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const ShapeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button shape={'circle'} children={'circle'} {...args} />
      <Button shape={'square'} children={'square'} {...args} />
      <Button shape={'rectangle'} children={'rectangle'} {...args} />
      <Button shape={'rounded'} children={'rounded'} {...args} />
    </div>
  );
}
export const Shape = ShapeTemplate.bind({});

const FontTypeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button fontType={'bold'} children={'bold'} {...args} />
      <Button fontType={'regular'} children={'regular'} {...args} />
    </div>
  );
}
export const FontType = FontTypeTemplate.bind({});

const FontColorTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button fontColor={'white'} children={'white'} {...args} />
      <Button fontColor={'black'} children={'black'} {...args} />
    </div>
  );
}
export const FontColor = FontColorTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button disabled={true} children={'Disabled'} {...args} />
      <Button disabled={false} children={'Enabled'} {...args} />
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const LoadingTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button loading={true} children={'Loading'} {...args} />
    </div>
  );
}
export const Loading = LoadingTemplate.bind({});
