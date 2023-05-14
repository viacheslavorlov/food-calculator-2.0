import ReactDOM from 'react-dom/client';
import App from './app/App/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from './widgets/themeSwitcher/teme/themeProvider';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		{/*<Provider store={store()}>*/}
		<ThemeProvider>
			<App/>
		</ThemeProvider>
		{/*</Provider>*/}
	</BrowserRouter>
);