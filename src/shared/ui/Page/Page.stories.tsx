import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {Page} from './Page';

export default {
	title: 'shared/Page',
	component: Page,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page>{args.children}</Page>;

export const LightPage = Template.bind({});
LightPage.args = {};

export const DarkPage = Template.bind({});
DarkPage.args = {children: <h2>Заголовок</h2>};
DarkPage.decorators = [ThemeDecorator(ThemeConsts.dark)];
