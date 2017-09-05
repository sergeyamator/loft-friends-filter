function save(name, data) {
    const jsonData = JSON.stringify(data);

    localStorage.setItem(name, jsonData);
}

function get(name) {
    return JSON.parse(localStorage.getItem(name));
}

function clear() {
    localStorage.clear();
}

export default {
    save,
    get,
    clear
}