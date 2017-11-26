export async function getdata(url){
    return request({url})
}

// nicked from https://basarat.gitbooks.io/typescript/docs/promise.html
let request = obj => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest()
        xhr.open(obj.method || "GET", obj.url)
        if (obj.headers) {
            Object.keys(obj.headers).forEach(key => {
                xhr.setRequestHeader(key, obj.headers[key])
            })
        }
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response)
            } else {
                reject(xhr.statusText)
            }
        }
        xhr.onerror = () => reject(xhr.statusText)
        xhr.send(obj.body)
    })
}

// magic TS error fixer...
declare var Promise: any;
