import {ComponentMeta, ComponentStory} from '@storybook/react';
import PageNotFound from './PageNotFound';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'Pages/PageNotFound',
	component: PageNotFound,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof PageNotFound>;

const Template: ComponentStory<typeof PageNotFound> = (args) => <PageNotFound />;

export const PageNotFoundDark = Template.bind({});
PageNotFoundDark.args = {};
PageNotFoundDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const PageNotFoundLight = Template.bind({});
PageNotFoundLight.args = {};
PageNotFoundLight.decorators = [ThemeDecorator(ThemeConsts.light)];