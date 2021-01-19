const BASE_URL = 'https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres';

export function getContentInfo(){
    return fetch(BASE_URL, {
        "method" : "GET",
        "headers" : {
            "x-rapidapi-key": "91963772b5msh1a7796214c78afdp133b77jsnd25c292bcfd0",
		    "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com"
        }
    }).then(res => res.json()).catch(err => {
        console.log(err)
    });
}