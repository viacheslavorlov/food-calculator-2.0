import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {ImcomeOutcomeForm} from './ImcomeOutcomeForm';
import {StoreDecorator} from '../../../shared/helpers/storybookDecorators/StorybookDecorator';

export default {
	title: 'entities/ImcomeOutcomeForm',
	component: ImcomeOutcomeForm,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [StoreDecorator({
		incomeOutcome: {
			income: [{
				id: 1,
				date: '2023-01-23',
				amount: 2000
			}],
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
} as ComponentMeta<typeof ImcomeOutcomeForm>;

const Template: ComponentStory<typeof ImcomeOutcomeForm> = (args) => <ImcomeOutcomeForm {...args} />;

export const LightImcomeOutcomeForm = Template.bind({});
LightImcomeOutcomeForm.args = {};
LightImcomeOutcomeForm.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkImcomeOutcomeForm = Template.bind({});
DarkImcomeOutcomeForm.args = {};
DarkImcomeOutcomeForm.decorators = [ThemeDecorator(ThemeConsts.dark)];
