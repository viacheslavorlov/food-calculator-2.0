import {classNames} from '../../helpers/classNames/classNames';
import cls from './Select.module.scss';
import {ChangeEvent} from 'react';

export interface SelectOption<T extends string> {
	name: string;
	value: T;
}

interface SelectProps<T extends string> {
	className?: string;
	optionsVariants: SelectOption<T>[];
	defaultOption?: string;
	onChange?: (value: T) => void;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
	const {
		className = '',
		optionsVariants,
		defaultOption,
		onChange
	} = props;

	const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
		if (onChange) {
			onChange(e.target.value as T);
		}
	};

	return (
		<select
			defaultValue={defaultOption}
			className={classNames(cls.Select, className)}
			onChange={onChangeHandler}
		>
			{optionsVariants.map(option => <option
				key={option.name}
				className={cls.option}
				value={option.value}
			>
				{option.name}
			</option>)}
		</select>
	);
};
