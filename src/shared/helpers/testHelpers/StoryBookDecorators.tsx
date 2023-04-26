import {StoryFn} from '@storybook/react';
import {ThemeConsts} from '../../../widgets/themeSwitcher/teme/temeConsts';
import '../../../app/style/index.scss';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';

export const RouterDecorator = (StoryComponent: StoryFn) => (
	<BrowserRouter>
		<StoryComponent/>
	</BrowserRouter>
);

export const MemoryRouterDecorator = (Story: StoryFn) => (
	<MemoryRouter initialEntries={['/']}>
		<Story />
	</MemoryRouter>
);

export const StyleDecorator = (story: () => StoryFn) => story();

export const ThemeDecorator = (theme: ThemeConsts) => (StoryComponent: StoryFn) => (
	<div className={`app ${theme}`}>
		<StoryComponent />
	</div>
);