import {AddNewProductForm} from 'entities/addNewProduct';
import {Page} from 'shared/ui/Page/Page';
import {memo} from 'react';

const AddNewItems = memo(() => {

	return (
		<Page>
			<AddNewProductForm/>
		</Page>
	);
});

export default AddNewItems;
