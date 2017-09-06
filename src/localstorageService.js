function saveItemsId(name, data) {
    const itemsId = data.map(item => item.id);
    const jsonData = JSON.stringify(itemsId);

    localStorage.setItem(name, jsonData);
}

function getItemsId(name) {
    return JSON.parse(localStorage.getItem(name));
}

function removeFromStorage(name) {
    localStorage.removeItem(name);
}

export default {
    saveItemsId,
    getItemsId,
    removeFromStorage
}