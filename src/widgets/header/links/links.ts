import AddIcon from '/src/shared/assets/add-item-alt-svgrepo-com.svg';
import Products from '/src/shared/assets/list2-svgrepo-com.svg';
import Packages from '/src/shared/assets/package-delivery-box-3-svgrepo-com.svg';
import Delete from '/src/shared/assets/delete-1-svgrepo-com.svg';


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
