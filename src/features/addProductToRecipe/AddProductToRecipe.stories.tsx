import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/TemeProvider';
import {StoreDecorator} from 'shared/config/StoreDecorator/StoreDecorator';
import {AddProductToRecipe} from './AddProductToRecipe';

export default {
	title: 'entities/AddProductToRecipe',
	component: AddProductToRecipe,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof AddProductToRecipe>;

const Template: ComponentStory<typeof AddProductToRecipe> = (args) => <AddProductToRecipe {...args} />;

export const LightAddProductToRecipe = Template.bind({});
LightAddProductToRecipe.args = {};
LightAddProductToRecipe.decorators = [];

export const DarkAddProductToRecipe = Template.bind({});
DarkAddProductToRecipe.args = {};
DarkAddProductToRecipe.decorators = [ThemeDecorator(Theme.DARK)];
