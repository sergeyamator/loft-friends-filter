import {assert} from 'chai';
import localstorageService from '../src/localstorageService';

describe('localstorage', () => {
    let data;
    let name;

    beforeEach(() => {
        data = [{name: 'Sergey', id: 32}, {name: 'Dima', id: 42}];
        name = 'friends';

        localStorage.clear();
    });

    it('should be an object', () => {
        assert.isObject(localstorageService);
    });

    describe('saveItemsId', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.saveItemsId);
        });

        it('Должна сохранять данные в localstorage', () => {
            let expectedData;
            let actualData;

            localstorageService.saveItemsId(name, data);
            expectedData = [32, 42];
            actualData = JSON.parse(localStorage.getItem(name));

            assert.deepEqual(expectedData, actualData);
        });
    });

    describe('getItemsId', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.getItemsId);
        });

        it('Должна возвращать распарсенный объект из localstorage', () => {
            let expectedData;
            let actualData;

            localstorageService.saveItemsId(name, data);
            expectedData = [32, 42];
            actualData = localstorageService.getItemsId(name);

            assert.deepEqual(expectedData, actualData);
        });
    });

    describe('removeFromStorage', (name) => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.removeFromStorage);
        });

        it('Должна очищать localstorage', () => {
            localstorageService.saveItemsId(name, data);
            localstorageService.removeFromStorage(name);

            assert.isNull(localStorage.getItem(name));
        });
    });
});