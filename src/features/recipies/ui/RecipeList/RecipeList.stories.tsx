import {StoryFn, Meta} from '@storybook/react';
import {ThemeDecorator} from '../../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../widgets/themeSwitcher/teme/temeConsts';
import {RecipeList} from './RecipeList';
import {StoreDecorator} from '../../../../shared/helpers/storybookDecorators/StorybookDecorator';
import {SuspenseDecorator} from '../../../../shared/helpers/storybookDecorators/SuspenseDecorator';

export default {
	title: 'entities/RecipeList',
	component: RecipeList,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [
		// StoreDecorator({
		// 	recipes: {
		// 		isLoading: false,
		// 		recipes: [
		// 			{
		// 				recipeName: 'Блины',
		// 				id: 926481237,
		// 				ingredients: [
		// 					{
		// 						name: 'Яйцо',
		// 						id: 123456789,
		// 						metric: 'шт',
		// 						price: 100,
		// 						amountCurrent: 2,
		// 						amountInOnePack: 10
		// 					},
		// 					{
		// 						name: 'Молоко',
		// 						id: 123456785,
		// 						metric: 'мл',
		// 						price: 80,
		// 						amountCurrent: 400,
		// 						amountInOnePack: 900
		// 					},
		// 					{
		// 						name: 'Мука',
		// 						id: 123456781,
		// 						metric: 'г',
		// 						price: 90,
		// 						amountCurrent: 200,
		// 						amountInOnePack: 2000
		// 					}
		// 				]
		// 			},
		// 			{
		// 				recipeName: 'Оладушки',
		// 				id: 926481237,
		// 				ingredients: [
		// 					{
		// 						name: 'Яйцо',
		// 						id: 123456789,
		// 						metric: 'шт',
		// 						price: 100,
		// 						amountCurrent: 2,
		// 						amountInOnePack: 10
		// 					},
		// 					{
		// 						name: 'Молоко',
		// 						id: 123456785,
		// 						metric: 'мл',
		// 						price: 80,
		// 						amountCurrent: 400,
		// 						amountInOnePack: 900
		// 					},
		// 					{
		// 						name: 'Мука',
		// 						id: 123456781,
		// 						metric: 'г',
		// 						price: 90,
		// 						amountCurrent: 200,
		// 						amountInOnePack: 2000
		// 					}
		// 				]
		// 			},
		// 			{
		// 				id: 1684063904592,
		// 				ingredients: [
		// 					{
		// 						name: 'sfgsdfg',
		// 						id: 1684008843466,
		// 						price: 1234,
		// 						metric: 'г',
		// 						amountInOnePack: 1000,
		// 						amountCurrent: 0,
		// 						timesUsed: 0
		// 					},
		// 					{
		// 						name: 'масло',
		// 						id: 1682793359785,
		// 						price: 190,
		// 						metric: 'г',
		// 						amountInOnePack: 180,
		// 						amountCurrent: 0,
		// 						timesUsed: 27
		// 					},
		// 					{
		// 						name: 'Мука',
		// 						price: 120,
		// 						amountInOnePack: 2000,
		// 						metric: 'г',
		// 						amountCurrent: 0,
		// 						id: 123456781,
		// 						timesUsed: 43
		// 					}
		// 				],
		// 				recipeName: 'чупакабра в яблоках',
		// 				timesUsed: 0
		// 			},
		// 			{
		// 				id: 1684073130146,
		// 				ingredients: [
		// 					{
		// 						name: 'масло',
		// 						id: 1682793359785,
		// 						price: 190,
		// 						metric: 'г',
		// 						amountInOnePack: 180,
		// 						amountCurrent: 220,
		// 						timesUsed: 28
		// 					},
		// 					{
		// 						name: 'Мука',
		// 						price: 120,
		// 						amountInOnePack: 2000,
		// 						metric: 'г',
		// 						amountCurrent: 340,
		// 						id: 123456781,
		// 						timesUsed: 44
		// 					}
		// 				],
		// 				recipeName: 'test 1',
		// 				timesUsed: 0
		// 			}
		// 		]
		// 	},
		// })
	]
} as Meta<typeof RecipeList>;

const Template: StoryFn<typeof RecipeList> = (args) => <RecipeList {...args} />;

export const LightRecipeList = Template.bind({});
LightRecipeList.args = {};
LightRecipeList.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkRecipeList = Template.bind({});
DarkRecipeList.args = {};
DarkRecipeList.decorators = [ThemeDecorator(ThemeConsts.dark)];
