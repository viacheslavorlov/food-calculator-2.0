import {Meta,StoryFn} from '@storybook/react';
import {DeleteItemCard} from './DeleteItemCard';
import {ThemeDecorator} from '../../../../shared/helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../../widgets/themeSwitcher/teme/temeConsts';

const item = {
	id: 1,
	metric: 'g',
	name: '',
	amountInOnePack: 1000,
	price: 250,
	amountCurrent: 300,
	timesUsed: 10
};

export default {
	title: 'entities/DeleteItemCard',
	component: DeleteItemCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: []
} as Meta<typeof DeleteItemCard>;


const Template: StoryFn<typeof DeleteItemCard> = (args) => <DeleteItemCard {...args} />;

export const DeleteItemCardDark = Template.bind({});
DeleteItemCardDark.args = {item};
DeleteItemCardDark.decorators = [ThemeDecorator(ThemeConsts.dark)];

export const DeleteItemCardLight = Template.bind({});
DeleteItemCardLight.args = {item};
DeleteItemCardLight.decorators = [ThemeDecorator(ThemeConsts.light)];