import {classNames} from '../../../shared/helpers/classNames/classNames';
import cls from './Search.module.scss';
import {ChangeEvent, memo} from 'react';
import {Input} from '../../../shared/ui/Input/Input';
import {useAppDispatch, useAppSelector} from '../../../store/hooks';


import {Text} from '../../../shared/ui/Text/Text';
import {searchActions} from '../model/slice/searchProductSlice';
import {searchOrderSelector, searchValueSelector} from '../model/selectors/searchSelectors';
import {Select, SelectOption} from '../../../shared/ui/Select/Select';
import {SearchOrder, SearchProp} from '../model/type/SearchProductsSchema';

interface SearchProps {
	className?: string;
}

const searchOrderOptions: SelectOption<SearchOrder>[] = [
	{name: 'возрастанию', value: 'asc'},
	{name: 'убыванию', value: 'desc'},
];


const searchPropOptions: SelectOption<SearchProp>[] = [
	{name: 'нет', value: 'none'},
	{name: 'просмотрам', value: 'views'},
	{name: 'цене', value: 'price'},
];

export const Search = memo((props: SearchProps) => {
	const searchValue = useAppSelector(searchValueSelector);
	const searchOrder = useAppSelector(searchOrderSelector);
	const dispatch = useAppDispatch();
	const {
		className
	} = props;

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(searchActions.setSearchValue(e.target.value));
	};
	const onOrderChange = (value: SearchOrder) => {
		dispatch(searchActions.setSearchOrder(value));
	};

	return (
		<div className={classNames(cls.Search, className)}>
			<Text content="Название продукта: "/>
			<Input
				className={cls.input}
				type="text"
				value={searchValue}
				onChange={onChangeHandle}
			/>
			<Text title={'По '}/>
			<Select
				onChange={onOrderChange}
				optionsVariants={searchOrderOptions}
				defaultOption={searchOrder}
			/>
			<Text title={'По '}/>
			<Select
				optionsVariants={searchPropOptions}
				defaultOption={searchOrder}
			/>
		</div>
	);
});