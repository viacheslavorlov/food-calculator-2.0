import { classNames} from 'shared/helpers/classNames/classNames';
import {memo} from 'react';
import {ImcomeOutcomeForm} from 'entities/IncomeOutcome';
import {Page} from 'shared/ui/Page/Page';


interface IncomeOutcomeProps {
    className?: string;
}

export const IncomeOutcomePage = memo((props: IncomeOutcomeProps) => {
	const {
		className
	} = props;

	return (
		<Page className={classNames(className)}>
			<ImcomeOutcomeForm />
		</Page>
	);
});
