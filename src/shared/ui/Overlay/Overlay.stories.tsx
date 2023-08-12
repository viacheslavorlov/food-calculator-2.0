import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {Overlay} from './Overlay';

export default {
	title: 'entities/Overlay',
	component: Overlay,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay>{args.children}</Overlay>;

export const LightOverlay = Template.bind({});
LightOverlay.args = {};
LightOverlay.decorators = [];

export const DarkOverlay = Template.bind({});
DarkOverlay.args = {};
DarkOverlay.decorators = [ThemeDecorator(ThemeConsts.dark)];
