export const makePostRequest = (url, dataObj) => {
    fetch(url, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(dataObj)
    })
}