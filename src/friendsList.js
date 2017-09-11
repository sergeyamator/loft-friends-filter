import friendService from './friendsService';

let friendsData = [];
let favoriteFriendsData = [];

function loadFriends() {
    friendService.loadFriends()
        .then(friends => friendsData = friends);
}

function getAllFriends() {
    return friendsData;
}

function getFavoritiesFriends() {
    return favoriteFriendsData;
}

function renderFriendsToDom(friends, container) {
    container.innerHTML = createFriendsElements(friends);
}

function createFriendsElements(friends) {
    return friends.reduce((html, friend) => html += createFriendElement(friend), '');
}

function createFriendElement(friend) {
    return `<article class="friend">${friend.first_name} ${friend.last_name}</article>`;
}

export default {
    getAllFriends,
    loadFriends,
    renderFriendsToDom,
    getFavoritiesFriends
}