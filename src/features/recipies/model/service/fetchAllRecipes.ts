import {rtkApi} from '../../../../shared/helpers/api/rtkApi';
import {IRecipe} from '../type/RecipeShema';

export const recipesApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getAllRecipes: build.query<IRecipe[], void>({
			query: () => ({
				url: '/recipes'
			})
		}),
	}),
	overrideExisting: false,
});

export const {useGetAllRecipesQuery} = recipesApi;