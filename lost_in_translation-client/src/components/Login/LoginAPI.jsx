const BASE_URL = 'http://localhost:5000'


export function checkusername(username) {
    return fetch(`${BASE_URL}/users`)
    .then(r => r.json())
    .then(users => {
        return users.find(user => user.username === username)
    })
    
}

export function createUsername(username) {
    return fetch(`${BASE_URL}/users`,{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'  
       },
       body: JSON.stringify({username})
    })    
    .then(r => r.json())
}