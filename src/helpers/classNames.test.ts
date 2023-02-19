import test, {describe} from 'node:test';
import {classNames} from './classNames';

describe('classNames function testing', function () {
	test('one param', async () => {
		await expect(classNames('one')).toBe('one');
	});
});