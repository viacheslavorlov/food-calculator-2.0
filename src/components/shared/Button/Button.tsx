import cls from './Button.module.scss';
import {classNames} from '../../../helpers/classNames';
import {ButtonHTMLAttributes, memo, ReactNode} from 'react';

enum ButtonVariants {
	round= 'round',
	rounded= 'rounded',
	rectangle = 'rectangle'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
	children: ReactNode;
	variant: ButtonVariants;
}

export const Button = memo(({ className, children, variant = ButtonVariants.rounded }: ButtonProps) => {

	return (
		<button className={classNames(cls.Button, className, variant)}>
			{children}
		</button>
	);
});

