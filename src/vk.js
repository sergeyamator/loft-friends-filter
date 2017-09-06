const ACCESS_FRIENDS = 2;
const apiId = 5586953;

function loginToVk() {
    return new Promise((resolve, reject) => {
        VK.init({
            apiId
        });

        VK.Auth.login(response => {
            response.session ? resolve(response) : reject('не все ок');
        }, ACCESS_FRIENDS);
    });
}

function getFriends() {
    const options = {
        'name_case': 'nom',
        fields: 'photo_50'
    };

    return new Promise(resolve => {
        VK.api('friends.get', options, ({response}) => resolve(response))
    });
}

export default {
    loginToVk,
    getFriends
}