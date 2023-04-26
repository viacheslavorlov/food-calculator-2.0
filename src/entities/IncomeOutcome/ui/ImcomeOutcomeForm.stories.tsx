import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import {ImcomeOutcomeForm} from './ImcomeOutcomeForm';
import {store} from '../../../app/store/store';
import {StoreProvider} from '../../../app/store/StoreProvider/StoreProvider';

export default {
	title: 'entities/ImcomeOutcomeForm',
	component: ImcomeOutcomeForm,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [(story) => <StoreProvider store={store}>{story()}</StoreProvider>]
} as ComponentMeta<typeof ImcomeOutcomeForm>;

const Template: ComponentStory<typeof ImcomeOutcomeForm> = (args) => <ImcomeOutcomeForm {...args} />;

export const LightImcomeOutcomeForm = Template.bind({});
LightImcomeOutcomeForm.args = {};
LightImcomeOutcomeForm.decorators = [ThemeDecorator(ThemeConsts.light)];

export const DarkImcomeOutcomeForm = Template.bind({});
DarkImcomeOutcomeForm.args = {};
DarkImcomeOutcomeForm.decorators = [ThemeDecorator(ThemeConsts.dark)];
