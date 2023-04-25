import { ComponentStory, Meta} from '@storybook/react';

import { Link } from './Link';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';

export default {
	title: 'shared/Link',
	component: Link,

} as Meta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const InputDark = Template.bind({});
InputDark.args = {title: 'Link'};

export const InputLight = Template.bind({});
InputDark.args = {title: 'Link'};
InputLight.decorators = [ThemeDecorator(ThemeConsts.light)];
