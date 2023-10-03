export const classNames = (...args: Array<string | undefined | null>) => {
	let result = '';
	for (let i = 0; i < args.length; i++) {
		if (args[i]) {
			result += ' ' + args[i];
		}
	}
	return result.trim();
};
