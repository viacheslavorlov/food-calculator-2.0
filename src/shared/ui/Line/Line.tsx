import {classNames} from '../../helpers/classNames/classNames';
import cls from './Line.module.scss';
import {memo} from 'react';

interface LineProps {
	className?: string;
	width?: string;
}


export const Line = memo((props: LineProps) => {
	const {
		className,
		width
	} = props;

	return (
		<hr style={{width}} className={classNames(cls.Line, className)}/>
	);
});