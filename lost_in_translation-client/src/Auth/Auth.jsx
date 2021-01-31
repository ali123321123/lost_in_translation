import { Redirect } from 'react-router-dom'
import { getStorage } from '../utils/storage'

const Auth = Component => props => {
    if (getStorage('_ta-ss')) {
        return <Component {...props} />
    } else {
        return <Redirect to='/Login' />
    }
}

export default Auth;
