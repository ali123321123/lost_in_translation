const BASE_URL = 'http://localhost:5000'

export function SendTranslate(translate) {
  console.log(translate)
    return fetch(`${BASE_URL}/trasnlations`,{
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'  
       },
       body: JSON.stringify({translate})
    })    
    .then(r => r.json())
}

export async function fetchAllTranslation(){
    return await fetch(`${BASE_URL}/trasnlations`)
    .then(response => {
      if(response .ok){
       return response.json()
}
else{
  alert("error")
}

}) 
}



