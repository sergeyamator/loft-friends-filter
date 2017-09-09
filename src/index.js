import friendService from './friendsService';
import friendList from './friendsList';

const container = document.getElementById('friends');
friendService.loadFriends()
  .then(friends => friendList.renderFriendsToDom(friends, container));