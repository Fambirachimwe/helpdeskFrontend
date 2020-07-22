export const getLocalStorage = () => {
    return window.localStorage.getItem('token');
}

export const multipartRequest = (method, url, formData) => {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function (e) {
            if (xhr.status == 200) {
              let response = {
                content: JSON.parse(xhr.response),
              };
              return resolve(response);
            } else {
              console.log(xhr.response);
              let response = {
                content: null,
              };
              return reject(response);
            }
          };
      // headers.set("x-auth-token", `${AuthStore.getToken()}`);
        xhr.setRequestHeader("x-auth-token", `${getLocalStorage()}`);
        // xhr.setRequestHeader("Content-Type", "multipart/form-data")
        return xhr.send(formData);
    });
}