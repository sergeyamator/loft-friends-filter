import {assert} from 'chai';
import friendsService from '../src/friendsService';

describe('loadFriends', () => {
  it('Должна быть функция', () => {
    assert.isFunction(friendsService.loadFriends);
  });

  it('Должна возвращать промис', () => {
    const constructor = friendsService.loadFriends().constructor.name;
    const expectedConstructor = 'Promise';

    assert.equal(constructor, expectedConstructor);
  });
});

describe('removeElementFromList', () => {
  it('Должна быть функцией', () => {
    assert.isFunction(friendsService.removeFriendFromList);
  });

  describe('Работа с данными', () => {
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
      assert.deepEqual(friendsService.removeFriendFromList(adctualData, id), expectedData);
    });

    it('Не должна изменять исходный массив', () => {
      friendsService.removeFriendFromList(adctualData, id);

      assert.deepEqual(expectedData, expectedData);
    });
  });
});

describe('searchByText', () => {
  it('Должна быть функцией', () => {
    assert.isFunction(friendsService.searchFriendByText);
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
      assert.deepEqual(friendsService.searchFriendByText(actualData, 'nn'), expectedData);
    });

    it('Не должна изменять исходный массив', () => {
      friendsService.searchFriendByText(actualData, 'nn');

      assert.deepEqual(actualData, actualData);
    })
  })
});

describe('filterFriendsById', () => {
  let data;

  beforeEach(() => {
    data = [
      {
        id: 1,
        name: 'Viktor'
      },
      {
        id: 4,
        name: 'Alex'
      },
      {
        id: 53,
        name: 'Max'
      },
      {
        id: 80,
        name: 'Dima'
      },
      {
        id: 90,
        name: 'Pavel'
      }
    ];
  });

  it('Должна быть функцией', () => {
    assert.isFunction(friendsService.filterFriendsById);
  });

  it('Должна возвращать отфильтрованный по id список друзей', () => {
    const ids = [53, 80, 90];
    const actualData = friendsService.filterFriendsById(data, ids);
    const expectedData = [
      {
        id: 53,
        name: 'Max'
      },
      {
        id: 80,
        name: 'Dima'
      },
      {
        id: 90,
        name: 'Pavel'
      }
    ];

    assert.deepEqual(expectedData, actualData);
  });
});