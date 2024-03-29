import { InputHTMLAttributes, Ref, forwardRef } from 'react';
import { classNames } from '../../helpers/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	type?: string;
	min?: number;
	placeholder?: string;
}

export const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
	const {
		className,
		type = 'text',
		...additionalArgs
	} = props;



	return (
		<input
			{...additionalArgs}
			ref={ref}
			type={type}
			className={classNames(cls.Input, className)}
		/>
	);
});

