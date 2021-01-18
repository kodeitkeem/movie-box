const BASE_URL = 'http://localhost:3001/api/users';

function signup(user){
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        if(response.ok) return response.json();
        // Handle error
        throw new Error('Email already taken');
    }).then(data => console.log(data))
}

function login(credentials){

}

function logout(){

}

function getUser(){

}

export {
    signup,
    login,
    logout,
    getUser
}