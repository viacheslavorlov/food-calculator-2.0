import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import {StrictMode} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import {ThemeProvider} from './teme/themeProvider';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</BrowserRouter>
		</Provider>
	</StrictMode>
);