import vk from './vk';

export default {
    loadFriends,
    removeFriendFromList,
    searchFriendByText,
    filterFriendsById
}

function loadFriends() {
    return vk.loginToVk()
        .then(vk.getFriends);
}

function removeFriendFromList(data, id) {
    return data.filter(item => item.id !== id);
}

function searchFriendByText(data, txt) {
    return data.filter(item => item.name.includes(txt));
}

function filterFriendsById(data, ids) {
    const result = [];

    ids.forEach(id => {
        result.push(...data.filter(element => element.id === id));
    });

    return result;
}

