import {ComponentStory, Meta} from '@storybook/react';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {List} from './List';

export default {
	title: 'shared/List',
	component: List,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [ThemeDecorator(ThemeConsts.light),]
} as Meta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const LightList = Template.bind({});
LightList.args = {content: [{name: 'first element'}, {name: 'second element'}, {name: 'third element'}]};
LightList.decorators = [];

export const DarkList = Template.bind({});
DarkList.args = {content: [{name: 'first element'}, {name: 'second element'}, {name: 'third element'}]};
DarkList.decorators = [ThemeDecorator(ThemeConsts.dark)];
