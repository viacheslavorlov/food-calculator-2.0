import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button, ButtonBackground, ButtonVariants} from './Button';
import {ThemeDecorator} from '../../../helpers/testHelpers/StoryBookDecorators';
import {ThemeConsts} from '../../../teme/temeConsts';

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		variant: ButtonVariants,
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Round</Button>;

export const ButtonRound = Template.bind({});
ButtonRound.args = {variant: ButtonVariants.round};
ButtonRound.decorators = [ThemeDecorator(ThemeConsts.light)];


export const ButtonRoundedDark = Template.bind({});
ButtonRoundedDark.args = {variant: ButtonVariants.rounded};

export const ButtonRounded = Template.bind({});
ButtonRounded.args = {variant: ButtonVariants.rectangle};
ButtonRounded.decorators = [ThemeDecorator(ThemeConsts.light)];

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {variant: ButtonVariants.rounded, background: ButtonBackground.green};