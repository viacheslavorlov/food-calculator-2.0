import {StoryFn, Meta} from '@storybook/react';
import {ThemeDecorator} from '../../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../widgets/themeSwitcher/teme/temeConsts';
import {RecipeList} from './RecipeList';
import {StoreDecorator} from '../../../../shared/helpers/storybookDecorators/StorybookDecorator';

export default {
	title: 'entities/RecipeList',
	component: RecipeList,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [
		StoreDecorator({
			rtkApi: {
				queries: {
					'getAllRecipes(undefined)': {
						// @ts-ignore
						status: 'fulfilled',
						endpointName: 'getAllRecipes',
						requestId: 'jiHISezg86rQ3I3td3wp-',
						startedTimeStamp: 1683991031183,
						data: [
							{
								recipeName: 'Блины',
								id: 926481237,
								ingredients: [
									{
										name: 'Яйцо',
										id: 123456789,
										metric: 'шт',
										price: 100,
										amountCurrent: 2,
										amountInOnePack: 10
									},
									{
										name: 'Молоко',
										id: 123456785,
										metric: 'мл',
										price: 80,
										amountCurrent: 400,
										amountInOnePack: 900
									},
									{
										name: 'Мука',
										id: 123456781,
										metric: 'г',
										price: 90,
										amountCurrent: 200,
										amountInOnePack: 2000
									}
								]
							},
							{
								recipeName: 'Оладушки',
								id: 926481237,
								ingredients: [
									{
										name: 'Яйцо',
										id: 123456789,
										metric: 'шт',
										price: 100,
										amountCurrent: 2,
										amountInOnePack: 10
									},
									{
										name: 'Молоко',
										id: 123456785,
										metric: 'мл',
										price: 80,
										amountCurrent: 400,
										amountInOnePack: 900
									},
									{
										name: 'Мука',
										id: 123456781,
										metric: 'г',
										price: 90,
										amountCurrent: 200,
										amountInOnePack: 2000
									}
								]
							}
						],
					}
				},
			}
		})
	]
} as Meta<typeof RecipeList>;

const Template: StoryFn<typeof RecipeList> = (args) => <RecipeList {...args} />;

export const LightRecipeCard = Template.bind({});
LightRecipeCard.args = {};
LightRecipeCard.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkRecipeCard = Template.bind({});
DarkRecipeCard.args = {};
DarkRecipeCard.decorators = [ThemeDecorator(ThemeConsts.dark)];
