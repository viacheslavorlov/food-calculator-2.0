import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/TemeProvider';
import {StoreDecorator} from 'shared/config/StoreDecorator/StoreDecorator';
import {RecipeCard} from './RecipeCard';

export default {
	title: 'entities/RecipeCard',
	component: RecipeCard,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof RecipeCard>;

const Template: ComponentStory<typeof RecipeCard> = (args) => <RecipeCard {...args} />;

export const LightRecipeCard = Template.bind({});
LightRecipeCard.args = {};
LightRecipeCard.decorators = [];

export const DarkRecipeCard = Template.bind({});
DarkRecipeCard.args = {};
DarkRecipeCard.decorators = [ThemeDecorator(Theme.DARK)];
