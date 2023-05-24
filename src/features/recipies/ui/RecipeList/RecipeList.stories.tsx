import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher/teme/temeConsts';
import {RecipeList} from './RecipeList';

export default {
	title: 'entities/RecipeList',
	component: RecipeList,
	argTypes: {
		background: {control: 'background', }
	}
} as Meta<typeof RecipeList>;

const Template: StoryFn<typeof RecipeList> = (args) => <RecipeList {...args} />;

export const LightRecipeList = Template.bind({});
LightRecipeList.args = {};
LightRecipeList.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkRecipeList = Template.bind({});
DarkRecipeList.args = {};
DarkRecipeList.decorators = [ThemeDecorator(ThemeConsts.dark)];
