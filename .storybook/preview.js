import {
	MemoryRouterDecorator,
	RouterDecorator,
	StyleDecorator,
	ThemeDecorator
} from '../src/shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../src/widgets/themeSwitcher/teme/temeConsts';
import {StoreProvider} from '../src/app/store/StoreProvider/StoreProvider';
import {store} from '../src/app/store/store';

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
		() => ThemeDecorator(ThemeConsts.dark),
		(story) => <StoreProvider store={store}>{story()}</StoreProvider>
	]
};
//
// addDecorator(StyleDecorator)
// addDecorator(ThemeDecorator(ThemeConsts.dark));
// addDecorator(StoreDecorator())