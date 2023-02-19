import {addDecorator} from '@storybook/react';
import {RouterDecorator, StyleDecorator, ThemeDecorator} from '../src/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../src/teme/temeConsts';

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