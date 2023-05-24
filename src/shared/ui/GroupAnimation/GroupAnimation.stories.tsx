import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher/teme/temeConsts';
import {GroupAnimationCard} from './GroupAnimationCard';

export default {
	title: 'entities/GroupAnimation',
	component: GroupAnimationCard,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof GroupAnimationCard>;

const Template: StoryFn<typeof GroupAnimationCard> = (args) => <GroupAnimationCard {...args} />;

export const LightGroupAnimation = Template.bind({});
LightGroupAnimation.args = {};
LightGroupAnimation.decorators = [];

export const DarkGroupAnimation = Template.bind({});
DarkGroupAnimation.args = {};
DarkGroupAnimation.decorators = [ThemeDecorator(ThemeConsts.dark)];
