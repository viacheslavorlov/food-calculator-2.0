import cls from './Button.module.scss';
import {classNames} from '../../../helpers/classNames';
import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

export enum ButtonVariants {
	round= 'round',
	rounded= 'rounded',
	rectangle = 'rectangle'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
	children: ReactNode;
	variant: ButtonVariants;
	danger?: 'danger' | '';
}

export const Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = ButtonVariants.rounded,
		danger = '',
		...otherProps
	} = props;

	return (
		<button
			{...otherProps}
			className={classNames(cls.Button, className, cls[variant], cls[danger])}
		>
			{children}
		</button>
	);
});

