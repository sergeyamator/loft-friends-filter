import {assert} from 'chai';
import sinon from 'sinon';
import friendsList from '../src/friendsList';
import friendService from '../src/friendsService';

describe('friends list', () => {
    it('should load friends', () => {
        const loadFriends = sinon.spy(friendService, 'loadFriends');

        friendsList.loadFriends();
        sinon.assert.calledOnce(loadFriends);
    });

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