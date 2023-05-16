import ReactDOM from 'react-dom/client';
import App from './app/App/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './widgets/themeSwitcher/teme/themeProvider';
import { StrictMode } from 'react';
import {store} from './app/store/store';
import {Provider} from 'react-redux';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={store()}>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);