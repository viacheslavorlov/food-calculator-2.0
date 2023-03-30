import {AddNewProductForm} from '../../../../entities/addNewProduct/ui/AddNewProductForm';
import cls from './AddNewItems.module.scss';

const AddNewItems = () => {
	return (
		<div className={cls.AddNewItems}>
			<AddNewProductForm />
		</div>
	);
};

export default AddNewItems;
