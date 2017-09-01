import httpGet from './httpGet';
const friendsUrl = 'https://jsonplaceholder.typicode.com/posts/1';

export default function() {
    return httpGet(friendsUrl);
}