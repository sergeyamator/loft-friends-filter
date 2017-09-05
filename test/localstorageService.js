import {assert} from 'chai';
import localstorageService from '../src/localstorageService';
import sinon from 'sinon';

describe('localstorage', () => {
    let data;
    let name;

    beforeEach(() => {
        data = [{name: 'Sergey'}, {name: 'Dima'}];
        name = 'friends';
    });

    beforeEach(() => {
        localstorageService.clear();
    });

    it('should be an object', () => {
        assert.isObject(localstorageService);
    });

    describe('save', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.save);
        });

        it('Должна сохранять данные в localstorage', () => {
            let expectedData;

            localstorageService.save(name, data);
            expectedData = JSON.parse(localStorage.getItem(name));

            assert.deepEqual(expectedData, data);
        });
    });

    describe('get', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.get);
        });

        it('Должна возвращать распарсенный объект из localstorage', () => {
            let expectedData;

            localstorageService.save(name, data);
            expectedData = localstorageService.get(name);

            assert.deepEqual(expectedData, data);
        });
    });

    describe('clear', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.save);
        });

        it('Должна очищать localstorage', () => {
            localstorageService.save(name, data);
            localstorageService.clear();

            assert.equal(localStorage.length, 0);
        });
    });
});