import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './Overlay.module.scss';
import {memo, ReactNode} from 'react';

interface OverlayProps {
	className?: string;
	children: ReactNode;
	onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
	const {
		className, children, onClick
	} = props;

	return (
		<div onClick={onClick} className={classNames(cls.Overlay, className)}>
			{children}
		</div>
	);
});