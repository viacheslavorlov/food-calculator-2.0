import {classNames} from '../../../helpers/classNames';
import cls from './Text.module.scss';
import {memo} from 'react';
interface TextProps {
	className?: string;
	title?: string | undefined;
	content?: string | undefined;
}
export const Text = memo((props: TextProps) => {
	const {content, title, className} = props;
	return (
		<div className={classNames(cls.Text, className)}>
			{ title && <div className={cls.title}>{title}</div>}
			{content && <div className={cls.content}>{content}</div>}
		</div>
	);
});
