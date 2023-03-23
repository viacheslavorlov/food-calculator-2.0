import AddIcon from '../../../assets/add-item-alt-svgrepo-com.svg';
import Products from '../../../assets/list2-svgrepo-com.svg';
import Packages from '../../../assets/package-svgrepo-com.svg';
import Delete from '../../../assets/delete-1-svgrepo-com.svg';


export const links = [
	{
		Icon: AddIcon,
		to: 'new-item',
		title: 'Добавить новый продукт',
	},
	{
		Icon: Products,
		to: '/',
		title: 'Список продуктов',
	},
	{
		Icon: Packages,
		to: 'package',
		title: 'Список упаковок',
	},
	{
		Icon: Delete,
		to: 'delete-item',
		title: 'Удалить продукт',
	}
];
