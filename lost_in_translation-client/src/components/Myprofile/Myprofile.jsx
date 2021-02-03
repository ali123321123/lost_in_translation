import Auth from "../../Auth/Auth"
import {useEffect, useState} from 'react'
import { fetchAllTranslation }from '../Translate/TranslateAPI'
import Translation from './Translation'

function Myprofile() {
    const [translationlist, setTranslationList] = useState()

    useEffect(() => {
        fetchAllTranslation().then((result)=>{
            setTranslationList(result)} 
        )
     
      },[]);

    

    return (
  <div>
      
  </div>
        
    ) }

export default  Auth(Myprofile)