class HttpService {
    get (url){
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
}