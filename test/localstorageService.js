import {assert} from 'chai';
import localstorageService from '../src/localstorageService';
import sinon from 'sinon';

describe('localstorage', () => {
    let saveToLocalStorage;

    beforeEach(() => {
        saveToLocalStorage = sinon.spy(localStorage, 'setItem');
    });

    afterEach(() => {
        saveToLocalStorage.restore();
    });

    it('should be an object', () => {
        assert.isObject(localstorageService);
    });

    describe('save', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.save);
        });

        beforeEach(() => {
            //localstorageService.clear();
        });

        it('Должна сохранять данные в localstorage', () => {
            const data = [{name: 'Sergey'}, {name: 'Dima'}];
            const name = 'friends';

            localstorageService.save(name, data);

            assert.isOk(saveToLocalStorage.calledWith(data, name));
        });
    });

    describe('restore', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.save);
        });
    });

    describe('clear', () => {
        it('Должна быть функцией', () => {
            assert.isFunction(localstorageService.save);
        });
    });
});