
export function callPostApi(urlStr, params) {
    return fetch(urlStr, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((responseData) => {
            return responseData.json()
        })
        .catch((error) => {
            console.error(error);
        });
}

export function callPatchApi(urlStr, params) {
    return fetch(urlStr, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((responseData) => {
            return responseData.json()
        })
        .catch((error) => {
            console.error(error);
        });
}

export function callGetApi(urlStr) {
    return fetch(urlStr).then((responseData) => {
            return responseData .json()
        })
        .catch((error) => {
            console.error(error);
        });
}

export function fetchData() {
 return callGetApi('https://configapp.herokuapp.com/config/AppConfig/dev').then((response) => {
    return response;
  }).catch(err => console.log(err))
}

export function fetchConfig(confID, env) {
 return callGetApi(`https://configapp.herokuapp.com/config/${confID}/${env}`).then((response) => {
    return response;
  }).catch(err => console.log(err))
}


/*
callapi() {
    callPostApi('http://demo.com', {
            email: 'at@gmail.com',
            password: '123456',
        })
        .then((response) => {
            // Continue your code here...
        });
}
*/
