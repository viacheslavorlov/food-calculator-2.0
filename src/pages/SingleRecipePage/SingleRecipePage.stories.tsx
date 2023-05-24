import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher/teme/temeConsts';
import SingleRecipePage from './SingleRecipePage';

export default {
	title: 'entities/SingleRecipePage',
	component: SingleRecipePage,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof SingleRecipePage>;

const Template: StoryFn<typeof SingleRecipePage> = (args) => <SingleRecipePage {...args} />;

export const LightSingleRecipePage = Template.bind({});
LightSingleRecipePage.args = {};
LightSingleRecipePage.decorators = [];

export const DarkSingleRecipePage = Template.bind({});
DarkSingleRecipePage.args = {};
DarkSingleRecipePage.decorators = [ThemeDecorator(ThemeConsts.dark)];
