import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {StoreDecorator} from 'shared/helpers/storybookDecorators/StorybookDecorator';
import {Modal} from './Modal';

export default {
	title: 'entities/Modal',
	component: Modal,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const LightModal = Template.bind({});
LightModal.args = {};
LightModal.decorators = [];

export const DarkModal = Template.bind({});
DarkModal.args = {};
DarkModal.decorators = [ThemeDecorator(ThemeConsts.dark)];
