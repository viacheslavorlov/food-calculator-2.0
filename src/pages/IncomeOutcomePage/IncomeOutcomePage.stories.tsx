import {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from '../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../widgets/themeSwitcher/teme/temeConsts';
import {IncomeOutcomePage} from './IncomeOutcomePage';
import {StoreProvider} from '../../app/store/StoreProvider/StoreProvider';
import {store} from '../../app/store/store';


const meta: Meta<typeof IncomeOutcomePage> = {component: IncomeOutcomePage};
export default meta;

type Story = StoryObj<typeof IncomeOutcomePage>;

export const LightIncomeOutcome: Story = {
	args: {},
	decorators: [(story) => <StoreProvider store={store}>{story()}</StoreProvider>, ThemeDecorator(ThemeConsts.light)]
};

export const DarkIncomeOutcome: Story = {args: {}};
DarkIncomeOutcome.decorators = [(story) => <StoreProvider store={store}>{story()}</StoreProvider>, ThemeDecorator(ThemeConsts.dark)];
