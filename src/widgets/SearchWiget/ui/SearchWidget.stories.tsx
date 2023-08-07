import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {SearchWidget} from './SearchWidget';

export default {
	title: 'shared/SearchWiget',
	component: SearchWidget,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof SearchWidget>;

const Template: ComponentStory<typeof SearchWidget> = (args) => <SearchWidget {...args} />;

export const LightSearchWiget = Template.bind({});
LightSearchWiget.args = {};

export const DarkSearchWiget = Template.bind({});
DarkSearchWiget.args = {};
DarkSearchWiget.decorators = [ThemeDecorator(ThemeConsts.dark)];
