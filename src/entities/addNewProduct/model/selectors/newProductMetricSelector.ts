import {RootState} from '../../../../app/store/store';

export const newProductMetricSelector = (state: RootState) => state.newProduct.newProduct.metric;