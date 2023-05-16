import {classNames} from '../../../../shared/helpers/classNames/classNames';
import cls from './Search.module.scss';
import {ChangeEvent, memo} from 'react';
import {Input} from '../../../../shared/ui/Input/Input';
import {useAppDispatch, useAppSelector} from '../../../../store/hooks';
import {Text} from '../../../../shared/ui/Text/Text';
import {searchActions} from '../../model/slice/searchProductSlice';
import {searchOrderSelector, searchPropSelector, searchValueSelector} from '../../model/selectors/searchSelectors';
import {Select, SelectOption} from '../../../../shared/ui/Select/Select';
import {SearchOrder, SearchProp} from '../../model/type/SearchProductsSchema';
import {HStack, VStack} from '../../../../shared/ui/Stack';

interface SearchProps {
	className?: string;
}

const searchOrderOptions: SelectOption<SearchOrder>[] = [
	{name: 'возрастанию', value: 'asc'},
	{name: 'убыванию', value: 'desc'},
];


const searchPropOptions: SelectOption<SearchProp>[] = [
	{name: 'нет', value: 'none'},
	{name: 'частоте использования', value: 'views'},
	{name: 'цене', value: 'price'},
];

export const Search = memo((props: SearchProps) => {
	const {
		className
	} = props;
	const dispatch = useAppDispatch();
	const searchOrder = useAppSelector(searchOrderSelector);
	const searchValue = useAppSelector(searchValueSelector);
	const searchProp = useAppSelector(searchPropSelector);

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(searchActions.setSearchValue(e.target.value));
	};
	const onOrderChange = (value: SearchOrder) => {
		dispatch(searchActions.setSearchOrder(value));
	};

	const onSearchPropChange = (value: SearchProp) => {
		dispatch(searchActions.setSearchProp(value));
	};

	return (
		<VStack max className={classNames(cls.Search, className)}>
			<HStack max className={cls.SearchItem}>
				<Text content={'Название: '} />
				<Input
					className={cls.strInput}
					type="text"
					placeholder={'Начните вводить название'}
					value={searchValue}
					onChange={onChangeHandle}
				/>
			</HStack>
			<HStack max className={cls.SearchItem}>
				<Text content={'По: '}/>
				<Select
					onChange={onOrderChange}
					optionsVariants={searchOrderOptions}
					defaultOption={searchOrder}
				/>
			</HStack>
			<HStack max className={cls.SearchItem}>
				<Text content={'По: '}/>
				<Select
					onChange={onSearchPropChange}
					optionsVariants={searchPropOptions}
					defaultOption={searchProp}
				/>
			</HStack>
		</VStack>
	);
});