import { useState } from "react"
import { setStorage } from "../../utils/storage"
import { checkusername, createUsername} from "./LoginAPI"
import { useHistory } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState('')
    const history = useHistory();
    const onLoginClick = async () => {
        try{
            const foundUser = await checkusername(username)
            if(!foundUser){
                await createUsername( username )
            }
            setStorage('_ta-ss', username )
            history.push("/");
            
            console.log("asdasda")
         } 
         catch(e){
               console.log(e)
         }
    }
    return (
        <form>
            <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
            <button type="button" onClick={ onLoginClick }>Login</button>
        </form>
    )
}
export default Login 