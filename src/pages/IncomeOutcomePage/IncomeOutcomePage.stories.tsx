import {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';
import {IncomeOutcomePage} from './IncomeOutcomePage';


const meta: Meta<typeof IncomeOutcomePage> = {
	component: IncomeOutcomePage,
};
export default meta;

type Story = StoryObj<typeof IncomeOutcomePage>;

export const LightIncomeOutcome: Story = {args: {}};
LightIncomeOutcome.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkIncomeOutcome: Story = {args: {}};
DarkIncomeOutcome.decorators = [ThemeDecorator(ThemeConsts.dark)];
