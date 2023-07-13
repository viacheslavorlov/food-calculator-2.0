import {LoadingSpinner} from './Loader';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {SuspenseDecorator} from '../../helpers/storybookDecorators/SuspenseDecorator';
import {Meta, StoryFn} from '@storybook/react';

export default {
	title: 'shared/LoadingSpinner',
	component: LoadingSpinner,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [SuspenseDecorator]
} as Meta<typeof LoadingSpinner>;

const Template: StoryFn<typeof LoadingSpinner> = () => <LoadingSpinner />;

export const Loader = Template.bind({});
Loader.args = {};
Loader.decorators = [ThemeDecorator(ThemeConsts.light)];


export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(ThemeConsts.dark)];