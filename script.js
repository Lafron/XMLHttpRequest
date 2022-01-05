
let url = 'https://jsonplaceholder.typicode.com/posts/';

const body = JSON.stringify({
    fname: "Dmitry",
    speciality: "frontEnd"
});

const sendFunction = (method, url, parameters) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.responseType = 'json';
    
    xhr.send(parameters);

    xhr.onload = function() {
        console.log("Method POST");
        if (xhr.status != 200 && xhr.status != 201) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
        } 
        else { 
            console.log(xhr.response); 
        }
    };
    
    xhr.onerror = error => console.log(`Ошибка соединения ${error}`);
};

sendFunction("POST", url, body);

