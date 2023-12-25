import {store} from 'app/reduxStore/store';
import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter,} from 'react-router-dom';
import {ThemeProvider} from 'widgets/themeSwitcher';
import App from './app/App/App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<BrowserRouter basename="/">
			<Provider store={store()}>
				<ThemeProvider>
					<App/>
				</ThemeProvider>
			</Provider>
		</BrowserRouter>
	</StrictMode>
);

