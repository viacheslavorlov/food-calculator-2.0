import {HStack, VStack} from 'shared/ui/Stack';
import {Line} from 'shared/ui/Line/Line';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {Search, searchActions} from 'features/searchProducts';
import {memo, useCallback, useState} from 'react';
import cls from './SearcWidget.module.scss';
import {AppearAnimation} from 'shared/ui/animations/ApearAnimation/AppearAnimation';
import {useAppDispatch} from 'store/hooks';
import {SEARCH_VISIBILITY_LOCAL_STORAGE_KEY} from '../const/searchVisibilityLocalStorage';

interface SearchWigetProps {
	className?: string;
}


export const SearchWidget = memo((props: SearchWigetProps) => {
	const {className} = props;
	const dispatch = useAppDispatch();
	const [isSearchVisible, setIsSearchVisible] = useState<boolean>(
		JSON.parse(localStorage.getItem(SEARCH_VISIBILITY_LOCAL_STORAGE_KEY) || 'false')
	);
	const onVisibilityChange = useCallback(() => {
		setIsSearchVisible(prevState => !prevState);
		dispatch(searchActions.setSearchValue(''));
		localStorage.setItem(SEARCH_VISIBILITY_LOCAL_STORAGE_KEY, JSON.stringify(!isSearchVisible));
	}, [dispatch, isSearchVisible]);

	return (
		<VStack max gap={'8'} className={className}>
			<HStack max>
				<h2>Поиск продуктов</h2>
				<Line width={'50%'}/>
				<Button
					onClick={onVisibilityChange} className={cls.button}
					variant={ButtonVariants.round}
				>
					{isSearchVisible ? '<' : '>'}
				</Button>
			</HStack>
			{isSearchVisible && (
				<AppearAnimation>
					<Search/>
				</AppearAnimation>)}
		</VStack>
	);
});


