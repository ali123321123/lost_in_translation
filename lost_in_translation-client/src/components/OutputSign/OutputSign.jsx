import styles from './OutputSign.module.css'
function OutputSign({ letter }) {
    return (
        <div className="output-section">
        <ul className={styles.SignList}>
           <li>
               <img className={styles.Sign} 
               src={require(`./individial_signs/${letter}.png`).default} alt={letter} />
           </li> 
        </ul>
        </div>
    )
}
export default OutputSign