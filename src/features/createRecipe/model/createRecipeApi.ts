import {rtkApi} from '../../../shared/helpers/api/rtkApi';
import {IRecipe} from '../../../entities/recipe';

const createRecipe = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		createRecipe: build.mutation<IRecipe, IRecipe>({
			query: (recipe) => ({
				url: 'recipes',
				method: 'POST',
				body: recipe,

			})
		})
	})
});

export const {
	useCreateRecipeMutation
} = createRecipe;