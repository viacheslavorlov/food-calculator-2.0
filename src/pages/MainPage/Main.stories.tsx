import {Meta, StoryFn} from '@storybook/react';
import MainPage from './Main';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';
import {StoreDecorator} from '../../shared/helpers/storybookDecorators/StorybookDecorator';

export default {
	title: 'Pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as Meta<typeof MainPage>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: StoryFn<typeof MainPage> = () => <MainPage/>;

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(ThemeConsts.dark), StoreDecorator({searchProducts: {}})];

export const LoaderLight = Template.bind({});
LoaderLight.args = {};
LoaderLight.decorators = [ThemeDecorator(ThemeConsts.light), StoreDecorator({})];