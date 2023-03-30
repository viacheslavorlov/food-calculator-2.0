import { Story } from '@storybook/react';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import '../../../app/style/index.scss';
import {BrowserRouter} from 'react-router-dom';


export const RouterDecorator = (StoryComponent: Story) => (
	<BrowserRouter>
		<StoryComponent/>
	</BrowserRouter>
);
export const StyleDecorator = (story: () => Story) => story();

export const ThemeDecorator = (theme: ThemeConsts) => (StoryComponent: Story) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);