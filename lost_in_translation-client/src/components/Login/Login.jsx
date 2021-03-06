import { useState } from "react"
import { setStorage } from "../../utils/storage"
import { checkusername, createUsername} from "./LoginAPI"
import { useHistory } from 'react-router-dom';
import styles from './LoginStyle.module.css'
import logo from './logo.png';
import { useContext } from 'react'
import { AppContext } from '../../AppProvider'


function Login() {
    const [username, setUsername] = useState('')
    const history = useHistory();
    const [name,setname] = useContext(AppContext)
    const onLoginClick = async () => {
        try{
            const foundUser = await checkusername(username)
            if(!foundUser){
                await createUsername( username )
            }
            setStorage('_ta-ss', username )
      setname(username)
            history.push("/");
         } 
         catch(e){
               console.log(e)
         }
    }
    return (
        <>
        <form>
            <div className={styles.Header}>
               <img className={styles.Img} src={logo} alt=""/>
               <h1 className={styles.Tittle}>Lost in Translation</h1>
               <h2 className={styles.Titlle2}>Get Started</h2>
            </div>
            <input className={styles.Input} type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
            <button className={styles.LoginBtn} type="button" onClick={ onLoginClick }>Login</button>
        </form>
        </>
    )
}
export default Login 




