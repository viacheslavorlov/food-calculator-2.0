import {Meta, StoryFn} from '@storybook/react';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from 'widgets/themeSwitcher/teme/temeConsts';
import {ProductList} from './ProductList';

export default {
	title: 'entities/ProductList',
	component: ProductList,
	argTypes: {
		background: {control: 'background'},
	},
} as Meta<typeof ProductList>;

const Template: StoryFn<typeof ProductList> = (args) => <ProductList {...args} />;

export const LightProductList = Template.bind({});
LightProductList.args = {};
LightProductList.decorators = [];

export const DarkProductList = Template.bind({});
DarkProductList.args = {};
DarkProductList.decorators = [ThemeDecorator(ThemeConsts.dark)];
