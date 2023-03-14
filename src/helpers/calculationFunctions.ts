// import {IProduct} from '../store/types';

export const calculatePriceOfProduct = (price: number, amount: number, pack: number) => {
	return (price * amount / pack).toFixed(2);
};

// export const finalPrice = (arr: IProduct[]) => {
// 	return arr.reduce((a: number, b: IProduct) => {
// 		if (b) {
// 			return a + calculatePriceOfProduct(b.price, b.amountCurrent, b.amountInOnePack);
// 		}
// 	}, 0);
// };