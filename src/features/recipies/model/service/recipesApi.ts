import {rtkApi} from '../../../../shared/helpers/api/rtkApi';
import {IRecipe} from '../../../../entities/recipe';
import {IProduct} from '../../../../store/types';

export const recipesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllRecipes: build.query<IRecipe[], void>({
			query: () => ({
				url: '/recipes'
			})
		}),
		getRecipeById: build.query<IRecipe, number>({
			query: (id) => ({
				url: `/recipes/${id}`
			})
		}),
		changeRecipe: build.mutation<IRecipe, { id: number, product: IProduct }>({
			query: ({id, product}) => ({
				url: `/recipes/${id}/ingredients`,
				method: 'PATCH',
				body: product
			})
		}),
	}),
	overrideExisting: false,
});

export const {
	useGetAllRecipesQuery, useGetRecipeByIdQuery, useChangeRecipeMutation
} = recipesApi;