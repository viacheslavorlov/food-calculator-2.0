import cls from'./LoadingPage.module.scss';
import {LoadingSpinner} from 'shared/ui/Loader/Loader';
import {Page} from 'shared/ui/Page/Page';

export const LoadingPage = () => {
	return (
		<Page className={cls.loadingPage}>
			<LoadingSpinner/>
		</Page>
	);
};
