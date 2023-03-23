import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Input} from './Input';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'shared/Input',
	component: Input,

} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDark = Template.bind({});
InputDark.args = {placeholder: 'input data'};

export const InputLight = Template.bind({});
InputLight.args = {placeholder: 'input data'};
InputLight.decorators = [ThemeDecorator(ThemeConsts.light)];
