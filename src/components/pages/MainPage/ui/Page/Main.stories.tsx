import {ComponentMeta, ComponentStory} from '@storybook/react';
import MainPage from './Main';
import {ThemeDecorator} from '../../../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../../teme/temeConsts';

export default {
	title: 'Pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const LoaderLight = Template.bind({});
LoaderLight.args = {};
LoaderLight.decorators = [ThemeDecorator(ThemeConsts.light)];