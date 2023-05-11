import './LoadingPage.module.scss';
import {LoadingSpinner} from '../../shared/ui/Loader/Loader';

const LoadingPage = () => {
	return (
		<div className="loading-page">
			<LoadingSpinner/>
		</div>
	);
};

export default LoadingPage;