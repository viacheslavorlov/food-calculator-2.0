import {classNames} from './classNames';

describe('classNames function testing', function () {
	test('one param', async () => {
		await expect(classNames('one')).toBe('one');
	});
	test('two param', async () => {
		await expect(classNames('two', 'tree')).toBe('two tree');
	});
	test('tree param', async () => {
		await expect(classNames('one', 'two', 'tree')).toBe('one two tree');
	});
	test('no param', async () => {
		await expect(classNames()).toBe('');
	});
	test('tree params with null', async () => {
		await expect(classNames('one', null, 'tree')).toBe('one tree');
	});
	test('tree params with undefined', async () => {
		await expect(classNames('one', undefined, 'tree')).toBe('one tree');
	});
});
