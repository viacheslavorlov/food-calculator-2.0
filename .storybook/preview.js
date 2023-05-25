import {
	MemoryRouterDecorator,
	RouterDecorator,
	StyleDecorator,
	ThemeDecorator
} from '../src/shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../src/widgets/themeSwitcher/teme/temeConsts';

export const parameters = {
	actions: {argTypesRegex: '^on[A-Z].*'},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	decorators: [
		StyleDecorator,
		MemoryRouterDecorator,
		RouterDecorator,
	]
};