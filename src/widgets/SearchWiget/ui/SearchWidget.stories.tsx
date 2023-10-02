import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeConsts} from 'widgets/themeSwitcher';
import {ThemeDecorator} from 'shared/helpers/testHelpers/StoryBookDecorators';
import {SearchWidget} from './SearchWidget';
import {StoreProvider} from 'app/reduxStore/StoreProvider/StoreProvider';

export default {
	title: 'shared/SearchWidget',
	component: SearchWidget,
	argTypes: {
		background: {control: 'background'},
	},
	decorators: [
		ThemeDecorator(ThemeConsts.light)
	]
} as ComponentMeta<typeof SearchWidget>;

const Template: ComponentStory<typeof SearchWidget> = (args) => (
	<StoreProvider initialState={{searchProducts: {searchValue: '', searchOrder: 'asc', searchProp: 'name'}}}>
		<SearchWidget {...args} />
	</StoreProvider>);

export const LightSearchWidget = Template.bind({});
LightSearchWidget.args = {};

export const DarkSearchWidget = Template.bind({});
DarkSearchWidget.args = {};
DarkSearchWidget.decorators = [ThemeDecorator(ThemeConsts.dark)];
