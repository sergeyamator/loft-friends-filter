export default function httpGet(url) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        const successStatus = 200;

        xhr.open('GET', url);
        xhr.addEventListener('load', () => {
            if (xhr.status === successStatus) {
                resolve(xhr.response);
            } else {
                const error = new Error(this.statusText);

                error.code = this.status;
                reject(error);
            }
        });

        xhr.addEventListener('error', () => {
            reject(new Error('Network Error'));
        });

        xhr.send();
    });
}