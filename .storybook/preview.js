import {addDecorator} from '@storybook/react';
import {RouterDecorator, StyleDecorator, ThemeDecorator} from '../src/shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../src/widgets/themeSwitcher/teme/temeConsts';
import {StoreDecorator} from '../src/shared/helpers/storybookDecorators/StorybookDecorator';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
addDecorator(RouterDecorator)
addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(ThemeConsts.dark));
addDecorator(StoreDecorator())