import './LoadingPage.scss';
import {LoadingSpinner} from '../../shared/Loader/Loader';

export const LoadingPage = () => {
	return (
		<div className="loading-page">
			<LoadingSpinner/>
		</div>
	);
};

