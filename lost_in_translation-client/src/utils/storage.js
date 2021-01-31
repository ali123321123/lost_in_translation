export function setStorage(key, value) {
    const json = JSON.stringify( value )
    const encoded = btoa( json )
    localStorage.setItem(key, encoded)
}
export function  getStorage(key) {
    const storedValue = localStorage.getItem(key)
    if(!storedValue) {
        return null 
    }
    
    const decoded = atob( storedValue ) 
    const value = JSON.parse( decoded )
   
    return value 

}