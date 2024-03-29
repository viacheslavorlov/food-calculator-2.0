import {StoryFn, Meta} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {RecipeCard} from './RecipeCard';
import {SuspenseDecorator} from 'shared/helpers/storybookDecorators/SuspenseDecorator';

export default {
	title: 'entities/RecipeCard',
	component: RecipeCard,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [
		SuspenseDecorator,
	]
} as Meta<typeof RecipeCard>;

const Template: StoryFn<typeof RecipeCard> = (args) => <RecipeCard {...args} />;

const recipe = {
	recipeName: 'Название рецепта',
	id: 1234,
	ingredients: [
		{
			name: 'первый ингредиент',
			id: 12345, metric: 'г',
			price: 100,
			timesUsed: 10,
			amountCurrent: 0,
			amountInOnePack: 1000
		}
	],
	timesUsed: 12
};
export const LightRecipeCard = Template.bind({});
LightRecipeCard.args = {recipe};
LightRecipeCard.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkRecipeCard = Template.bind({});
DarkRecipeCard.args = {recipe};
DarkRecipeCard.decorators = [ThemeDecorator(ThemeConsts.dark)];
