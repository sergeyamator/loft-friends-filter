import {assert} from 'chai';
import removeElementFromList from '../src/removeElementFromList';

describe('removeElementFromList', () => {
    let adctualData;
    let expectedData;
    let id;

    beforeEach(() => {
        adctualData = [
            {
                name: 'Max',
                id: 16
            },
            {
                name: 'Anna',
                id: 232
            },
            {
                name: 'Vika',
                id: 12
            }
        ];

        expectedData = [
            {
                name: 'Anna',
                id: 232
            },
            {
                name: 'Vika',
                id: 12
            }
        ];

        id = 16;
    });

    it('Должна возвращать массив без указанного по id элемента', () => {
        assert.deepEqual(removeElementFromList(adctualData, id), expectedData);
    });

    it('Не должна изменять исходный массив', () => {
        removeElementFromList(adctualData, id);

        assert.deepEqual(expectedData, expectedData);
    });
});
