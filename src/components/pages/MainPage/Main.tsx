import {memo} from 'react';
import {Button, ButtonVariants} from '../../shared/Button/Button';
import {Input} from '../../shared/Input/Input';


const MainPage = memo(() => {
	return (
		<div>
			<h1>Главная</h1>
			<Input placeholder={'количество'} min={0} type={'number'} />
			<Button variant={ButtonVariants.rounded}>Rounded</Button>
		</div>
	);
});

export default MainPage;
