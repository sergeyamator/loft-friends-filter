import {assert} from 'chai';
import searchByText from '../src/searchByText';

describe('searchByText', () => {
    it('Должна быть функцией', () => {
        assert.isFunction(searchByText);
    });

    it('Должна возвращать отфильтрованные данные', () => {
        const actualData = [
            { name: 'Dima' },
            { name: 'Dmitry' },
            { name: 'Anna' },
            { name: 'Ganna' }
        ];
        const expectedData = [
            { name: 'Anna' },
            { name: 'Ganna' }
        ];

        assert.deepEqual(searchByText('nn', actualData), expectedData);
    });
});
