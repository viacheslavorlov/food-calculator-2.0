import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {GroupTransition} from './GroupTransition';

export default {
	title: 'entities/GroupTransition',
	component: GroupTransition,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof GroupTransition>;

const Template: StoryFn<typeof GroupTransition> = (args) => <GroupTransition {...args} />;

export const LightGroupTransition = Template.bind({});
LightGroupTransition.args = {
	data: ['Первая строка', 'Вторая строка', 'Третья строка'],
	keys: [1, 2, 3]
};
LightGroupTransition.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkGroupTransition = Template.bind({});
DarkGroupTransition.args = {
	data: ['Первая строка', 'Вторая строка', 'Третья строка'],
	keys: [1, 2, 3],
};
DarkGroupTransition.decorators = [ThemeDecorator(ThemeConsts.dark)];
