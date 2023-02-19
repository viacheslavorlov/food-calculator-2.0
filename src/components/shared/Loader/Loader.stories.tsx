import {ComponentMeta, ComponentStory} from '@storybook/react';

import {LoadingSpinner} from './Loader';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'Example/LoadingSpinner',
	component: LoadingSpinner,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner />;

export const Loader = Template.bind({});
Loader.args = {};
Loader.decorators = [ThemeDecorator(ThemeConsts.dark)];
