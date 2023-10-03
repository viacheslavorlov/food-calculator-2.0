
export const classNames = (...args: Array<string | undefined | null | Array<string> | Record<string, boolean>>) => {
	let result = '';
  
	for (let i = 0; i < args.length; i++) {
		const arg = args[i];
  
		if (typeof arg === 'string') {
			result += ' ' + arg;
		} else if (Array.isArray(arg)) {
			result += ' ' + classNames(...arg);
		} else if (typeof arg === 'object' && arg !== null) {
			for (const key in arg) {
				if (arg[key]) {
					result += ' ' + key;
				}
			}
		}
	}
	return result.trim();
};
