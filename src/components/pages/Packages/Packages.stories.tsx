import {ComponentMeta, ComponentStory} from '@storybook/react';
import Packages from './Packages';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'Pages/Packages',
	component: Packages,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Packages>;

const Template: ComponentStory<typeof Packages> = (args) => <Packages />;

export const PackagesDark = Template.bind({});
PackagesDark.args = {};
PackagesDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const PackagesLight = Template.bind({});
PackagesLight.args = {};
PackagesLight.decorators = [ThemeDecorator(ThemeConsts.light)];