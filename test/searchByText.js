import {assert} from 'chai';
import searchByText from '../src/searchByText';

describe('searchByText', () => {
    it('Должна быть функцией', () => {
        assert.isFunction(searchByText);
    });

    describe('Работа с данными', () => {
        let actualData;
        let expectedData;

        beforeEach(() => {
            actualData = [
                {name: 'Dima'},
                {name: 'Dmitry'},
                {name: 'Anna'},
                {name: 'Ganna'}
            ];

            expectedData = [
                {name: 'Anna'},
                {name: 'Ganna'}
            ];
        });

        it('Должна возвращать отфильтрованные данные', () => {
            assert.deepEqual(searchByText('nn', actualData), expectedData);
        });

        it('Не должна изменять исходный массив', () => {
            searchByText('nn', actualData);

            assert.deepEqual(actualData, actualData);
        })
    })
});
