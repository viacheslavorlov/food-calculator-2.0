import './LoadingPage.module.scss';
import {LoadingSpinner} from '../../shared/ui/Loader/Loader';

export const LoadingPage = () => {
	return (
		<div className="loading-page">
			<LoadingSpinner/>
		</div>
	);
};