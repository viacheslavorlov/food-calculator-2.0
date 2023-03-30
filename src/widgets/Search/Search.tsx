import {classNames} from '../../shared/helpers/classNames/classNames';
import cls from './Search.module.scss';
import {ChangeEvent, memo} from 'react';
import {Input} from '../../shared/ui/Input/Input';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {getSearchValue} from '../../entities/Products/model/selectors/getSerchValue';
import {productsActions} from '../../entities/Products/model/slice/productsSlice';
import {Text} from '../../shared/ui/Text/Text';

interface SearchProps {
	className?: string;
}

export const Search = memo((props: SearchProps) => {
	const serchValue = useAppSelector(getSearchValue);
	const dispatch = useAppDispatch();
	const {
		className
	} = props;

	const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(productsActions.setSearchValue(e.target.value));
	};

	return (
		<div className={classNames(cls.Search, className)}>
			<Text content="Название продукта: " />
			<Input
				className={cls.input}
				type="text"
				value={serchValue}
				onChange={onChangeHandle}
			/>

		</div>
	);
});