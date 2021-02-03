import Auth from "../../Auth/Auth"
import { Link } from 'react-router-dom'
import styles from './Translate.module.css'
import { useContext, useState } from 'react'
import logo from './logo.png';
import OutputSign  from '../OutputSign/OutputSign'
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PersonIcon from '@material-ui/icons/Person';
import { AppContext } from '../../AppProvider'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { SendTranslate } from './TranslateAPI'


function Translate() {
 const username = useContext(AppContext)
    const [letters, setLetters] = useState([])
    const [textInput, setTranslateInput] = useState('')
    const [invalid, setInvalid] = useState('')
    const history = useHistory();


    const TranslateInput = event => {
        setTranslateInput(event.target.value)
    }
    const LogoutClick = () => {    
        localStorage.clear();
        history.push("/Login");
    }
    const TranslateBtn = () => {
        if (textInput.match(/^[A-Za-z ]+$/)) { 
            setInvalid(" ")
            const toLowercase = textInput.toLowerCase()
            const inputToArray = toLowercase.split('')
            SendTranslate(inputToArray )
            setLetters(inputToArray)
            
        } else {
            setLetters([])
            setInvalid('Use Engilsh letters please')
        }

    

    }
    return (     
        <div className="Header-section">
          <div className={styles.Header}> 
            <img className={styles.Img} src={logo} alt='' />
            <h1 className={styles.Title}>Lost in Translation</h1>
            <div className={styles.Toprofile}>
            <h3 className={styles.Username}>{username}</h3>
            <Link to='/Myprofile'>
            <PersonIcon style={{fill: "#845ec2"}} />
            </Link>
            </div>
            <div className={styles.Logout} >
            <Button
        variant="contained"
        color="secondary"
        onClick={LogoutClick}
        startIcon={<ExitToAppIcon />}
      >
        Logout
      </Button>
      </div>
        </div>
        <div className="Input-section">
        <input
            className={styles.Input}
            type="text"
            value={textInput} onChange={TranslateInput}
            placeholder="Write here your text"></input>
            <IconButton aria-label="delete"  size="large" 
            onClick={TranslateBtn}>
          < ArrowForwardIcon fontSize="inherit" style={{fill: "#845ec2"}}  />
        </IconButton>
        <div className={styles.Result}>
            {
                letters.map(letter => <OutputSign letter={letter} />)
            }
              <span>{invalid}</span>
         </div>
         </div>
      </div>
    )
    }

export default Auth(Translate)