import {classNames} from '../../../helpers/classNames';
import cls from './Text.module.scss';
import {memo} from 'react';
interface TextProps {
	className?: string;
	title?: string | undefined;
	content?: string | undefined;
}
export const Text = memo((props: TextProps) => {
	const {content, title} = props;
	return (
		<div className={classNames(cls.Text)}>
			<div className={cls.title}>{title}</div>
			<div className={cls.content}>{content}</div>
		</div>
	);
});
