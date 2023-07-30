import {Button, ButtonBackground, ButtonVariants} from 'shared/ui/Button/Button';
import {db} from 'db/db';
import {memo} from 'react';

interface ClearActiveProductsProps {
	className?: string;
}

export const ClearActiveProducts = memo((props: ClearActiveProductsProps) => {
	const {className} = props;
	const onCliearProducts = () => {
		db.activeProducts.clear();
	};

	return (
		<Button
			className={className}
			variant={ButtonVariants.rounded}
			background={ButtonBackground.red}
			onClick={onCliearProducts}>
			Очистить список продуктов
		</Button>
	);
});