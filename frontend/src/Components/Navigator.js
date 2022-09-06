import styles from './Navigator.module.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TuneIcon from '@mui/icons-material/Tune';


const Navigator = (props)=>{

    const backHandler = ()=>{
        props.backHandler();
    }
    return(
        <div className={styles.navigation} style={{
            position: props.type==='overlay'? 'absolute':''
        }}>
            <div className={styles.left}>
                <div onClick={backHandler}><ArrowBackIcon/></div>
                <h3>{props.heading}</h3>
            </div>
            
        </div>
    )
}
export default Navigator;