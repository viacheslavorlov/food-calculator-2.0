import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from './routerConfig';
import { LoadingPage } from 'pages/LoadingPage';

const AppRouter = () => {
	return (
		<div>
			<Routes>
				{routerConfig.map(route => (
					<Route
						key={route.path}
						path={route.path}
						element={
							<Suspense fallback={<LoadingPage />}>
								{route.element}
							</Suspense>
						}
					/>
				))}
			</Routes>
		</div>
	);
};

export default AppRouter;
