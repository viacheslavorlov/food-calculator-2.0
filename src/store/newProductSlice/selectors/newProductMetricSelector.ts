import {RootState} from '../../store/store';

export const newProductMetricSelector = (state: RootState) => state.newProduct.newProduct.metric;