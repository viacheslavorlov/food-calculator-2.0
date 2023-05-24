import {store} from 'app/store/store';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {ThemeProvider} from 'widgets/themeSwitcher/teme/themeProvider';
import App from './app/App/App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<HashRouter basename="/">
			<Provider store={store()}>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</Provider>
		</HashRouter>
	</StrictMode>
);

