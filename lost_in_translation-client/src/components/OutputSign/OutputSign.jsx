import styles from './OutputSign.module.css'
function OutputSign({ letter }) {
    return (
           <span>
               <img className={styles.Sign} 
               src={require(`./individial_signs/${letter}.png`).default} alt={letter} />
           </span> 
       
    
    )
}
export default OutputSign