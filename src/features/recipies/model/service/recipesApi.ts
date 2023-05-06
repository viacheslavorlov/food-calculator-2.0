import {rtkApi} from '../../../../shared/helpers/api/rtkApi';
import {IRecipe} from '../../../../entities/recipe/type/recipeType';

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
		})
	}),
	overrideExisting: false,
});

export const {useGetAllRecipesQuery, useGetRecipeByIdQuery} = recipesApi;