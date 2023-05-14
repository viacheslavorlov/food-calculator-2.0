import {ComponentMeta, ComponentStory} from '@storybook/react';
import MainPage from './Main';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';
import {StoreDecorator} from '../../shared/helpers/storybookDecorators/StorybookDecorator';

export default {
	title: 'Pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	decorators: [StoreDecorator({
		products:
			{
				allProducts: [
					{
						id: 1,
						metric: 'г',
						timesUsed: 10,
						name: 'Молоко',
						amountCurrent: 100,
						price: 80,
						amountInOnePack: 900
					},
					{
						id: 2,
						metric: 'г',
						timesUsed: 10,
						name: 'Сахар',
						amountCurrent: 100,
						price: 80,
						amountInOnePack: 900
					}
				],
				activeProducts: [
					{
						id: 3,
						metric: 'г',
						timesUsed: 10,
						name: 'Мука',
						amountCurrent: 100,
						price: 80,
						amountInOnePack: 900
					}
				]
			}

	})]
} as ComponentMeta<typeof MainPage>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Template: ComponentStory<typeof MainPage> = (args) => <MainPage/>;

export const LoaderDark = Template.bind({});
LoaderDark.args = {};
LoaderDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const LoaderLight = Template.bind({});
LoaderLight.args = {};
LoaderLight.decorators = [ThemeDecorator(ThemeConsts.light)];