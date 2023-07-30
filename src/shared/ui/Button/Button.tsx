import cls from './Button.module.scss';
import {classNames} from '../../helpers/classNames/classNames';
import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

export enum ButtonVariants {
	round= 'round',
	rounded= 'rounded',
	rectangle = 'rectangle'
}
export enum ButtonBackground {
	green = 'green',
	red= 'red',
	black= 'black',
	white = 'white'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
	children: ReactNode;
	variant: ButtonVariants;
	background?: ButtonBackground;
}

export const 	Button = memo((props: ButtonProps) => {
	const {
		className,
		children,
		variant = ButtonVariants.rounded,
		background = ButtonBackground.green,
		...otherProps
	} = props;

	return (
		<button
			{...otherProps}
			className={classNames(cls.Button, className, cls[variant], cls[background])}
		>
			{children}
		</button>
	);
});

