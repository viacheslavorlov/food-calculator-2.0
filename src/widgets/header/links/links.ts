import AddIcon from '../../../shared/assets/add-item-alt-svgrepo-com.svg';
import Products from '../../../shared/assets/list2-svgrepo-com.svg';
import Packages from '../../../shared/assets/package-delivery-box-3-svgrepo-com.svg';
import Delete from '../../../shared/assets/delete-1-svgrepo-com.svg';


export const links = [
	{
		Icon: AddIcon,
		to: 'new-item',
		title: 'Добавить продукт',
	},
	{
		Icon: Products,
		to: '/',
		title: 'Список продуктов',
	},
	{
		Icon: Packages,
		to: 'recipes',
		title: 'Список рецептов',
	},
	{
		Icon: Delete,
		to: 'delete-item',
		title: 'Удалить продукт',
	}
];
