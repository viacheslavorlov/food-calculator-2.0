import {classNames} from '../../helpers/classNames/classNames';
import cls from './List.module.scss';
import {Text} from '../Text/Text';

interface ListBasicElement {
    name?: string;
    recipeName?: string;
}

interface ListProps<T > {
	className?: string;
    content: T[]
}

export function List<T extends ListBasicElement>(props: ListProps<T>) {
	const {
		className,
		content
	} = props;
	if (!content) {
		return <Text title={'Список отсутствует или не найден'}/>;
	}

	return (
		<ul className={classNames(cls.List, className)}>
			{content.map((item) => (
				<li className={cls.listItem} key={item.name || item.recipeName}>
					{item.name || item.recipeName}
				</li>
			))}
		</ul>
	);
}