import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from 'shared/config/themeDecorator/themeDecorator';
import {Theme} from 'app/providers/TemeProvider';
import {StoreDecorator} from 'shared/config/StoreDecorator/StoreDecorator';
import {IncomeOutcomePage} from './IncomeOutcomePage';

export default {
	title: 'entities/IncomeOutcomePage',
	component: IncomeOutcomePage,
	argTypes: {
		background: {control: 'background'},
	},
} as ComponentMeta<typeof IncomeOutcomePage>;

const Template: ComponentStory<typeof IncomeOutcomePage> = (args) => <IncomeOutcomePage {...args} />;

export const LightIncomeOutcome = Template.bind({});
LightIncomeOutcome.args = {};
LightIncomeOutcome.decorators = [];

export const DarkIncomeOutcome = Template.bind({});
DarkIncomeOutcome.args = {};
DarkIncomeOutcome.decorators = [ThemeDecorator(Theme.DARK)];
