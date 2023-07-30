import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {Card} from './Card';

export default {
	title: 'entities/Card',
	component: Card,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof Card>;

const Template: StoryFn<typeof Card> = (args) => <Card {...args}>{args.children}</Card>;

export const LightCard = Template.bind({});
LightCard.args = {};
LightCard.decorators = [];

export const DarkCard = Template.bind({});
DarkCard.args = {};
DarkCard.decorators = [ThemeDecorator(ThemeConsts.dark)];
