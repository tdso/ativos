class HttpService {
    get (url, id = null){
        return new Promise ( (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                // realizaremos nossas configurações aqui
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {      
                        // HTTP só trafega texto, o JSON é uma representação textual de um objeto JavaScript convertemos o JSON de string para objeto
                        resolve(JSON.parse(xhr.responseText));                        
                    } else {
                        reject(xhr.responseText);
                    }
                }
            }
            xhr.send();
        });
    }

    delete (url, id) {
        return new Promise ( (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('DELETE', url + '/' + id);
            //xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xhr.onreadystatechange = () => {
                // realizaremos nossas configurações aqui
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {      
                        // HTTP só trafega texto, o JSON é uma representação textual de um objeto JavaScript convertemos o JSON de string para objeto
                        //resolve(JSON.parse(xhr.responseText));                        
                        resolve();                        
                    } else {
                        reject(xhr.responseText);
                    }
                }
            }
            xhr.send();
        });
    }

    post (url, obj) {
        return new Promise ( (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {
                // realizaremos nossas configurações aqui
                if(xhr.readyState == 4) {
                    if(xhr.status == 200) {      
                        // HTTP só trafega texto, o JSON é uma representação textual de um objeto JavaScript convertemos o JSON de string para objeto
                        resolve(JSON.parse(xhr.responseText));                        
                    } else {
                        reject(xhr.responseText);
                    }
                }
            }
            let dados = JSON.stringify(obj);
            xhr.send(dados);
        });
    }

}