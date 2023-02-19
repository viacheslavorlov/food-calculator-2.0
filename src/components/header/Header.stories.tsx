import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Header} from './Header';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../teme/temeConsts';

export default {
	title: 'Widgets/Header',
	component: Header,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const HeaderDark = Template.bind({});
HeaderDark.args = {};
HeaderDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const HeaderLight = Template.bind({});
HeaderLight.args = {};
HeaderLight.decorators = [ThemeDecorator(ThemeConsts.light)];