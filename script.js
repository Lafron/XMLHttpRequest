
let url = 'https://jsonplaceholder.typicode.com/posts/';
let async = true;
let user = "Letuver", password = "lafron";

const body = JSON.stringify({
    fname: "Dmitry",
    speciality: "frontEnd"
});

const getFunction = (method, url, itemId) =>{
  
    let xhr = new XMLHttpRequest();

    xhr.open(method, url + itemId, true);
    
    xhr.headers = {'Content-type': 'application/json; charset=UTF-8'};
    xhr.responseType = 'json';
    xhr.send(null);

    xhr.onload = function() {
        let responseObj = xhr.response;
        console.log(responseObj);
    };  
};

const sendFunction = (method, url, parameters) => {
    let xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
    xhr.responseType = 'json';
    
    xhr.send(parameters);

    xhr.onload = function() {
        if (xhr.status != 200 && xhr.status != 201) {
            console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); 
        } 
        else { 
            let responseObj = xhr.response;
            console.log(xhr);
            console.log(responseObj); 
            console.log(`Готово, получили ${xhr.response.length} байт`); 
        }
    };
    
    xhr.onerror = error => console.log(`Ошибка соединения ${error}`);
};

getFunction("GET", url, 44);

sendFunction("POST", url, body);
