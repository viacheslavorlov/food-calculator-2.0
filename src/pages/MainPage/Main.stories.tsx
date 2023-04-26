import {ComponentMeta, ComponentStory} from '@storybook/react';
import MainPage from './Main';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';
import {StoreProvider} from '../../app/store/StoreProvider/StoreProvider';
import {store} from '../../app/store/store';

export default {
	title: 'Pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [(story) => <StoreProvider store={store}>{story()}</StoreProvider>]
} as ComponentMeta<typeof MainPage>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage />;

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const LoaderLight = Template.bind({});
LoaderLight.args = {};
LoaderLight.decorators = [ThemeDecorator(ThemeConsts.light)];