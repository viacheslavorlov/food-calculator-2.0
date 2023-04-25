import {Meta, StoryObj} from '@storybook/react';
import {LoadingSpinner} from './Loader';
import {ThemeDecorator} from '../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';

const meta: Meta<typeof LoadingSpinner> = { component: LoadingSpinner };
export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Primary: Story = { args: { primary: true } };
Primary.args = {};
Primary.decorators = [ThemeDecorator(ThemeConsts.dark)];
