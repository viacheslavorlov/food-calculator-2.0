import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Header} from './Header';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../themeSwitcher/teme/temeConsts';
import {StoreProvider} from '../../app/store/StoreProvider/StoreProvider';
import {store} from '../../app/store/store';

export default {
	title: 'Widgets/Header',
	component: Header,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [(story) => <StoreProvider store={store}>{story()}</StoreProvider>]
} as ComponentMeta<typeof Header>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const HeaderDark = Template.bind({});
HeaderDark.args = {};
HeaderDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const HeaderLight = Template.bind({});
HeaderLight.args = {};
HeaderLight.decorators = [ThemeDecorator(ThemeConsts.light)];