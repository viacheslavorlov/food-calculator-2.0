export const wordSearch = (str: string, source: string) => {
	return source.toLowerCase().includes(str.toLowerCase());
};