import {IProduct} from '../store/types';

export const calculatePriceOfProduct = (price: number, amount: number, pack: number): number => {
	return (price * amount / pack);
};

export const finalPrice = (arr: IProduct[]) => {
	const finalresult = arr
		.map(item => calculatePriceOfProduct(Number(item.price), Number(item.amountCurrent), Number(item.amountInOnePack)))
		.reduce((result, el) => result + el, 0);
	console.log(finalresult);
	return finalresult;
};
