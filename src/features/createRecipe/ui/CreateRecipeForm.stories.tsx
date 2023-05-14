import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from '../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {CreateRecipeForm} from './CreateRecipeForm';
import {StoreDecorator} from '../../../shared/helpers/storybookDecorators/StorybookDecorator';

export default {
	title: 'entities/CreateRecipeForm',
	component: CreateRecipeForm,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [
		StoreDecorator({
			products: {
				activeProducts: [
					{
						id:1,
						timesUsed: 0,
						amountCurrent: 100,
						amountInOnePack: 1000,
						metric: 'г',
						name: 'Молоко',
						price: 200
					}
				]

			},
			recipes: {
				currentRecipe: {
					recipeName: 'recipe name',
					id: 1,
					ingredients: [],
					timesUsed: 0
				}
			}

		})
	]
} as Meta<typeof CreateRecipeForm>;

const Template: StoryFn<typeof CreateRecipeForm> = (args) => <CreateRecipeForm {...args} />;

export const LightCreateRecipeForm = Template.bind({});
LightCreateRecipeForm.args = {};
LightCreateRecipeForm.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkCreateRecipeForm = Template.bind({});
DarkCreateRecipeForm.args = {};
DarkCreateRecipeForm.decorators = [ThemeDecorator(ThemeConsts.dark)];
