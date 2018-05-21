import xhr from 'xhr'; 

const PREFIX = 'https://react-ecommerce-493cd.firebaseio.com'; 

const requestAPI = {
    get(uri, data){
        return promiseXHR('get', uri, data); 
    }, 

    post(uri, data){
        return promiseXHR('post', uri, data); 
    }
}; 

function promiseXHR(method, uri, data){
    const query = []; 
    if(data) {
        Object.keys(data).map(key => {
            query.push(key + '=' + data[key]); 
        }); 
    }; 

    const suffix = query.length > 0 ? '?' + query.join('&') : ''; 

    return new Promise((resolve, reject) => {
        xhr[method](
            PREFIX + uri + suffix, 
            (err, res, body) => {
                if(err) {
                    reject(err); 
                    return; 
                }

                if(res.statusCode !== 200) {
                    reject(new Error(
                        '[status: ' + res.statusCode + ']' + res.body, 
                    ));
                    return; 
                }; 

                if(body === null) {
                    resolve(undefined); 
                }; 

                try {
                    resolve(JSON.parse(body)); 
                } catch (e) {
                    reject(new Error(
                        'Responses from server must be JSON strings',
                    )); 
                }
            },
        );
    }); 
}; 

export default requestAPI; 