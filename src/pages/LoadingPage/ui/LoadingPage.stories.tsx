import {Meta, StoryFn} from '@storybook/react';
import {LoadingPage} from './LoadingPage';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {SuspenseDecorator} from 'shared/helpers/storybookDecorators/SuspenseDecorator';

export default {
	title: 'Pages/LoadingPage',
	component: LoadingPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [SuspenseDecorator]
} as Meta<typeof LoadingPage>;

const Template: StoryFn<typeof LoadingPage> = () => <LoadingPage />;

export const LoadingPageDark = Template.bind({});
LoadingPageDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const LoadingPageLight = Template.bind({});
LoadingPageLight.decorators = [ThemeDecorator(ThemeConsts.light)];