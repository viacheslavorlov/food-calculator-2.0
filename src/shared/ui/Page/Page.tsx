import {classNames} from 'shared/helpers/classNames/classNames';
import cls from './Page.module.scss';
import {memo, ReactNode} from 'react';

interface PageProps {
	className?: string;
	children: ReactNode;
}

export const Page = memo((props: PageProps) => {
	const {
		className, children
	} = props;

	return (
		<div className={classNames(cls.Page, className)}>
			{children}
		</div>
	);
});
