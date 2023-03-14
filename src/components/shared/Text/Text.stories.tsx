import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Text} from './Text';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {

	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextDark = Template.bind({});
TextDark.args = {
	title: 'Title',
	content: 'Content'
};


export const TextLight = Template.bind({});
TextLight.args = {
	title: 'Title',
	content: 'Content'
};
TextLight.decorators = [ThemeDecorator(ThemeConsts.light)];
