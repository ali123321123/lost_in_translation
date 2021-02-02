import Auth from "../../Auth/Auth"
import { Link } from 'react-router-dom'
import styles from './Translate.module.css'
import { useState } from 'react'
import logo from './logo.png';
import OutputSign  from '../OutputSign/OutputSign'
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PersonIcon from '@material-ui/icons/Person';


function Translate() {

    const [letters, setLetters] = useState([])
    const [textInput, setTranslateInput] = useState('')
    const [invalid, setInvalid] = useState('')


    const TranslateInput = event => {
        setTranslateInput(event.target.value)
    }
    const TranslateBtn = () => {
        if (textInput.match(/^[A-Za-z ]+$/)) { 
            setInvalid(" ")
            const toLowercase = textInput.toLowerCase()
            const inputToArray = toLowercase.split('')
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
            <h3 className={styles.Username}>Username</h3>
            <Link to='/Myprofile'>
            <PersonIcon/>
            </Link>
        </div>
        <div className="Input-section">
        <input
            className={styles.Input}
            type="text"
            value={textInput} onChange={TranslateInput}
            placeholder="Write here your text"></input>
            <IconButton aria-label="delete"  size="large" 
            onClick={TranslateBtn}>
          < ArrowForwardIcon fontSize="inherit" />
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