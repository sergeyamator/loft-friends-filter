import friendsService from './friendsService';
import friendsList from './friendsList';

const allFriendsContainer = document.querySelector('.friends-list-all');
const allFriendsFilterField = document.querySelector('.search-bar-all');

const favoriteFriendsContainer = document.querySelector('.friends-list-favorites');
const favoriteFriendsFilterField = document.querySelector('.friends-list-favorites');

const allFriends = friendsList.getAllFriends();
const favoriteFriends = friendsList.getFavoritiesFriends();

renderAll();

function renderAll() {
    friendsService.loadFriends();
    friendsList.renderFriendsToDom(allFriends, allFriendsContainer);
    friendsList.renderFriendsToDom(favoriteFriends, favoriteFriendsContainer);

    setupListeners();
}

function setupListeners() {
    allFriendsFilterField.addEventListener('input', e => onSearchFieldInput(allFriends, e.target.value));
    favoriteFriendsFilterField.addEventListener('input', e => onSearchFieldInput(favoriteFriends, e.target.value));
}

function onSearchFieldInput(friendsData, text) {
    let data;

    if (!text) {
        friendsList.renderFriendsToDom(friendsData, allFriendsContainer);
        return;
    }

    data = friendsService.searchFriendByText(friendsData, text);
    friendsList.renderFriendsToDom(data, allFriendsContainer);
}
