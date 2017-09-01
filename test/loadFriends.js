import {assert} from 'chai';
import loadFriends from '../src/loadFriends';

describe('loadFriends', () => {
    it('Должна быть функция', () => {
        assert.isFunction(loadFriends);
    });

    it('Должна возвращать промис с данными, полученными из сервера', () => {
        const constructor = loadFriends().constructor.name;
        const expectedConstructor = 'Promise';

        assert.equal(constructor, expectedConstructor);
    });
});
