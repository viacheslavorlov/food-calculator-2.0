export const classNames = (...args: Array<string | undefined>) => {
	const result = [];
	for (let i = 0; i < args.length; i++) {
		if (args[i] !== undefined) {
			result.push(args[i]);
		}
	}
	return result.join(' ');
};