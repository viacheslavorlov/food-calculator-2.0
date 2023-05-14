import {ComponentStory, Meta} from '@storybook/react';
import {ThemeDecorator} from '../../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../widgets/themeSwitcher/teme/temeConsts';
import {StoreDecorator} from '../../../../shared/helpers/storybookDecorators/StorybookDecorator';
import {RecipeCard} from './RecipeCard';

export default {
	title: 'entities/RecipeCard',
	component: RecipeCard,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [
		StoreDecorator({}),
	]
} as Meta<typeof RecipeCard>;

const Template: ComponentStory<typeof RecipeCard> = (args) => <RecipeCard {...args} />;

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
