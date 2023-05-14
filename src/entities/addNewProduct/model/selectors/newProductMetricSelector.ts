import {StateSchema} from '../../../../store/types';

export const newProductMetricSelector = (state: StateSchema) => state.newProduct.newProduct.metric;