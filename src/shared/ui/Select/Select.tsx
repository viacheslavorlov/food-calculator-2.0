import { classNames } from '../../helpers/classNames/classNames';
import cls from './Select.module.scss';
import { memo } from 'react';

interface SelectProps {
    className?: string;
	options: string[];
}

export const Select = memo((props: SelectProps) => {
	const {
		className,
		options
	} = props;
    
	return (
		<select className={classNames(cls.Select, className)}>
			{options.map(option => <option key={option} value={option}>{option}</option>)}
		</select>
	);
});