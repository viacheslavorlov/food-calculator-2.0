import {ComponentMeta, ComponentStory} from '@storybook/react';
import RecipesPage from './RecipesPage';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';

export default {
	title: 'Pages/RecipesPage',
	component: RecipesPage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof RecipesPage>;

const Template: ComponentStory<typeof RecipesPage> = (args) => <RecipesPage />;

export const PackagesDark = Template.bind({});
PackagesDark.args = {};
PackagesDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const PackagesLight = Template.bind({});
PackagesLight.args = {};
PackagesLight.decorators = [ThemeDecorator(ThemeConsts.light)];