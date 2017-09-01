function save(name, data) {
    const jsonData = JSON.stringify(data);

    localStorage.setItem(name, jsonData);
}

function restore() {

}

function clear() {

}

export default {
    save,
    restore,
    clear
}