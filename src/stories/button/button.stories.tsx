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
      <Button color={'primary'} children={'Primary'} />
      <Button color={'secondary'} children={'Secondary'} />
      <Button color={'tertiary'} children={'Tertiary'} />
      <Button color={'info'} children={'Info'} />
      <Button color={"danger"} children={'Danger'} />
      <Button color={"warning"} children={'Warning'} />
      <Button color={"success"} children={'Success'} />
      <Button color={"purple"} children={'Purple'} />
      <Button color={"control"} children={'Control'} />
    </div>
  );
}
export const Color = ColorTemplate.bind({});

const SizeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button size={'tiny'} children={'tiny button'} />
      <Button size={'small'} children={'small button'} />
      <Button size={'medium'} children={'medium button'} />
      <Button size={'large'} children={'large button'} />
      <Button size={"huge"} children={'huge button'} />
    </div>
  );
}
export const Size = SizeTemplate.bind({});

const VariantTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button variant={'text'} children={'text button'} />
      <Button variant={'outlined'} children={'outlined button'} />
      <Button variant={'contained'} children={'contained button'} />
    </div>
  );
}
export const Variant = VariantTemplate.bind({});

const ShapeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button shape={'circle'} children={'circle'} />
      <Button shape={'square'} children={'square'} />
      <Button shape={'rectangle'} children={'rectangle'} />
      <Button shape={'rounded'} children={'rounded'} />
    </div>
  );
}
export const Shape = ShapeTemplate.bind({});

const FontTypeTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button fontType={'bold'} children={'bold'} />
      <Button fontType={'regular'} children={'regular'} />
    </div>
  );
}
export const FontType = FontTypeTemplate.bind({});

const FontColorTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button fontColor={'white'} children={'white'} />
      <Button fontColor={'black'} children={'black'} />
    </div>
  );
}
export const FontColor = FontColorTemplate.bind({});

const DisabledTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button disabled={true} children={'Disabled'} />
      <Button disabled={false} children={'Enabled'} />
    </div>
  );
}
export const Disabled = DisabledTemplate.bind({});

const LoadingTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <div className={'flex row gap-2'}>
      <Button loading={true} children={'Loading'} />
    </div>
  );
}
export const Loading = LoadingTemplate.bind({});
