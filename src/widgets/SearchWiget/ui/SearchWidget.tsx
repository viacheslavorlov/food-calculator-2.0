import {HStack, VStack} from 'shared/ui/Stack';
import {Line} from 'shared/ui/Line/Line';
import {Button, ButtonVariants} from 'shared/ui/Button/Button';
import {Text} from 'shared/ui/Text/Text';
import {Search, searchActions} from 'features/searchProducts';
import {memo, useCallback, useState} from 'react';
import cls from './SearcWidget.module.scss';
import {IconSVG} from 'shared/ui/Icon/Icon';
import {AppearAnimation} from 'shared/ui/animations/ApearAnimation/AppearAnimation';
import {useAppDispatch} from 'store/hooks';
import {SEARCH_VISIBILITY_LOCAL_STORAGE_KEY} from '../const/searchVisibilityLocalStorage';
import Expand from 'shared/assets/expand.svg';
import Collapse from 'shared/assets/collapse.svg';

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
				<Text title={'Поиск продуктов'}></Text>
				<Line width={'50%'}/>
				<Button
					onClick={onVisibilityChange} className={cls.button}
					variant={ButtonVariants.round}
				>
					<IconSVG className={cls.buttonIcon} height={20} width={20} Icon={isSearchVisible ? Collapse : Expand}/>
				</Button>
			</HStack>
			{isSearchVisible && (
				<AppearAnimation>
					<Search/>
				</AppearAnimation>)}
		</VStack>
	);
});


