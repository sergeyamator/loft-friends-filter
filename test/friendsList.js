import {assert} from 'chai';
import friendsList from '../src/friendsList';

describe('friends list', () => {
  it('should draw friends elements to dom element', () => {
    const data = [
      {
        first_name: 'Yura',
        last_name: 'Yurec'
      },
      {
        first_name: 'Dima',
        last_name: 'Diman'
      },

    ];
    const element = document.createElement('div');

    friendsList.renderFriendsToDom(data, element);

    assert.equal(element.children.length, data.length);
  });
});