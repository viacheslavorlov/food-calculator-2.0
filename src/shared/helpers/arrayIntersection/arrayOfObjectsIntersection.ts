export const arrayOfObjectsIntersectionByName = <T extends {name: string}>(item: T, arr: T[]) => {
	for (let i= 0; i < arr.length; i++) {
		if (item.name === arr[i].name) {
			return false;
		}
	}
	return true;
};