import {classNames} from '../../helpers/classNames/classNames';
import cls from './Input.module.scss';
import {InputHTMLAttributes, memo} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
	type?: string;
	min?: number;
	placeholder?: string
}

export const Input = memo((props: InputProps) => {
	const {
		className,
		type = 'text',
		...additionalArgs
	} = props;

	return (
		<input {...additionalArgs} type={type} className={classNames(cls.Input, className)} />
	);
});

