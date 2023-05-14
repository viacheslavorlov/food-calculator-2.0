import {memo} from 'react';
import {useLiveQuery} from 'dexie-react-hooks';
import {db} from '../../../../db/db';

interface GetProductsDexieTestProps {
	className?: string;
}

export const GetProductsDexieTest = memo((props: GetProductsDexieTestProps) => {
	const products = useLiveQuery(
		() => db.products.toArray()
	);
	return (
		<div>
			{products?.map(pr => pr.name)}
		</div>
	);
});