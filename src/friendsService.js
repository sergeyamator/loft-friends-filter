import httpGet from './httpGet';
const friendsUrl = 'https://jsonplaceholder.typicode.com/posts/1';

export default {
    loadFriends,
    removeFriendFromList,
    searcFriendByText,
    filterFriendsById
}

function loadFriends() {
    return httpGet(friendsUrl);
}

function removeFriendFromList(data, id) {
    return data.filter(item => item.id !== id);
}

function searcFriendByText(data, txt) {
    return data.filter(item => item.name.includes(txt));
}

function filterFriendsById(data, ids) {
    const result = [];

    ids.forEach(id => {
        result.push(...data.filter(element => element.id === id));
    });

    return result;
}

