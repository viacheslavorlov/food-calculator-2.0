import {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';
import {IncomeOutcomePage} from './IncomeOutcomePage';
import {StoreDecorator} from '../../shared/helpers/storybookDecorators/StorybookDecorator';


const meta: Meta<typeof IncomeOutcomePage> = {
	component: IncomeOutcomePage,
	decorators: [StoreDecorator({
		incomeOutcome: {
			income: [
				{
					id: 1,
					date: '2023-01-23',
					amount: 2000
				},
				{
					id: 2,
					date: '2023-12-03',
					amount: 1000
				}
			],
			outcome:[
				{
					id: 1,
					date: '2023-01-23',
					amount: 2000
				}],
			isLoading: false,
			error: undefined
		}
	}
	)]
};
export default meta;

type Story = StoryObj<typeof IncomeOutcomePage>;

export const LightIncomeOutcome: Story = {args: {}};
LightIncomeOutcome.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkIncomeOutcome: Story = {args: {}};
DarkIncomeOutcome.decorators = [ThemeDecorator(ThemeConsts.dark)];
