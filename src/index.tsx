import ReactDOM from 'react-dom/client';
import App from './app/App/App';
import {StrictMode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './app/store/store';
import {ThemeProvider} from './widgets/themeSwitcher/teme/themeProvider';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<StrictMode>
			<Provider store={store}>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</Provider>
		</StrictMode>
	</BrowserRouter>
);